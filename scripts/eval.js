// Evaluación de respuestas contra las fuentes REALES (LeyChile, buscadores de
// jurisprudencia, revistas) y, si hay clave de AI Gateway, con el modelo real.
//
// Evaluar una versión del código (por defecto, este repositorio):
//   node scripts/eval.js --etiqueta despues --salida /tmp/despues.json
//   node scripts/eval.js --raiz ../base --etiqueta antes --salida /tmp/antes.json
// Opciones: --solo-busqueda (no llama al modelo), --generar (por defecto), --casos c07-posesion,g01-pagare,
//           --modelo anthropic/claude-sonnet-4.5, --paralelo 3
//
// Generar el reporte comparativo:
//   node scripts/eval.js --reporte evals/reporte.md --antes /tmp/antes.json --despues /tmp/despues.json
//
// Los chequeos se hacen siempre con el validador y las materias de ESTE
// repositorio, para medir las dos versiones con la misma vara.

const fs = require("fs");
const path = require("path");

const { buscarProhibidas, revisarSecciones, revisarRoles, quitarPreambulo, sinTildes } = require("../validador");
const { materiaDeNorma } = require("../materias");
const { SECCIONES } = require("../prompts");

function argumento(nombre, porDefecto) {
  const i = process.argv.indexOf(`--${nombre}`);
  if (i === -1) return porDefecto;
  const v = process.argv[i + 1];
  return v === undefined || v.startsWith("--") ? true : v;
}

const RAIZ_REPO = path.resolve(__dirname, "..");
const CASOS = JSON.parse(fs.readFileSync(path.join(RAIZ_REPO, "evals", "casos.json"), "utf8")).casos;

// --- Chequeos ---------------------------------------------------------------
const soloAlfanumerico = (t) => sinTildes(t).replace(/(\d)\.(\d)/g, "$1$2").replace(/[^a-z0-9ñ ]+/g, " ").replace(/\s+/g, " ").trim();
const numeroArticulo = (t) => soloAlfanumerico(String(t || "")).replace(/^articulo /, "").replace(/\s+/g, " ");

function normaCoincide(cuerpoLegal, norma) {
  const c = soloAlfanumerico(cuerpoLegal);
  const n = soloAlfanumerico(norma);
  const numeroLey = n.match(/^ley (\d+)$/);
  if (numeroLey) return c.includes(numeroLey[1]);
  if (n === "codigo penal") return c.includes("codigo penal") && !c.includes("procesal");
  if (n === "codigo civil") return c.includes("codigo civil") && !c.includes("procedimiento");
  if (n.startsWith("constitucion")) return c.includes("constitucion");
  return c.includes(n);
}

function articuloEnContexto(documentos, esperado) {
  return documentos.some((d) => normaCoincide(d.cuerpo_legal || "", esperado.norma) &&
    numeroArticulo(d.numero || d.articulo) === numeroArticulo(esperado.articulo));
}

function articuloCitado(texto, esperado) {
  const num = String(esperado.articulo).replace(/\s+/g, "[\\s-]*(?:letra\\s*)?");
  return new RegExp(`\\bart(?:[íi]culos?|s?\\.)\\s*(?:n[°º.]?\\s*)?(?:\\d+[\\s,y°º-]+)*${num}\\b`, "i").test(texto);
}

function revisar(caso, { documentos, jurisprudencia, bruto, final }) {
  const r = {
    esperados_en_contexto: caso.articulos_esperados.filter((e) => articuloEnContexto(documentos, e)).length,
    esperados_total: caso.articulos_esperados.length,
    fuentes_prohibidas: documentos
      .filter((d) => caso.materias_prohibidas.includes(materiaDeNorma(d.cuerpo_legal || "")))
      .map((d) => `${d.cuerpo_legal}, ${d.articulo}`),
  };
  if (final == null) return r;
  const modo = caso.pestana;
  const secciones = caso.secciones
    ? { faltan: caso.secciones.filter((s) => !new RegExp(`^##\\s+${sinTildes(s)}`, "im").test(sinTildes(final))), ultimaPresente: true }
    : revisarSecciones(final, modo);
  const textosJuris = (jurisprudencia || []).map((f) => [f.rol, f.url, f.texto, ...(f.pasajes || [])].filter(Boolean).join(" "));
  Object.assign(r, {
    esperados_citados: caso.articulos_esperados.filter((e) => articuloCitado(final, e)).length,
    preambulo: Boolean(quitarPreambulo(bruto).eliminado),
    prohibidas_crudas: buscarProhibidas(bruto, modo).map((p) => p.id),
    prohibidas_finales: buscarProhibidas(final, modo).map((p) => p.id),
    secciones_faltantes: secciones.faltan,
    truncada: !secciones.ultimaPresente,
    roles_inventados: revisarRoles(bruto, textosJuris).inventados,
    supuestos_explicitos: caso.ambigua ? /\basum|\bsupuest|si (el|la|tu|su) .{0,40}(entonces|,)/i.test(sinTildes(final)) : null,
    palabras: final.split(/\s+/).filter(Boolean).length,
  });
  return r;
}

// --- Ejecución de un caso con una versión del código -------------------------
function cargar(raiz) {
  const req = (m) => require(path.join(raiz, m));
  const nuevo = fs.existsSync(path.join(raiz, "redactor.js"));
  return {
    nuevo,
    investigacion: req("investigacion"),
    busqueda: req("busquedaHibrida"),
    prompts: req("prompts"),
    proveedorIA: req("proveedorIA"),
    documentos: req("fuentes/documentos"),
    redactor: nuevo ? req("redactor") : null,
    indicadores: nuevo ? req("indicadores") : null,
  };
}

async function ejecutarCaso(v, caso, { generar, modelo }) {
  const inicio = Date.now();
  const modo = caso.pestana;
  let documentos, jurisprudencia = [], doctrina = [], descartadas = [], systemPrompt, userMessage, maxTokens, textoDoc = "";

  if (modo === "documento") {
    textoDoc = fs.readFileSync(path.join(RAIZ_REPO, "evals", "documentos", caso.archivo), "utf8");
    const seleccion = v.documentos.seleccionarFragmentos(textoDoc, caso.pregunta);
    if (v.nuevo) {
      const r = await v.investigacion.investigar({
        pregunta: caso.pregunta,
        consultaBusqueda: `${caso.pregunta}\n\nDocumento (${caso.archivo}), inicio:\n${textoDoc.slice(0, 1200)}`,
        proveedor: "vercel",
        limiteLegislacion: 10,
      });
      ({ documentos, jurisprudencia, doctrina } = r);
      descartadas = r.descartadas || [];
      const indicadores = await v.indicadores.indicadoresPara(`${caso.pregunta} ${textoDoc.slice(0, 3000)}`);
      systemPrompt = v.prompts.promptSistema("documento");
      userMessage = v.prompts.mensajeDocumento({ pregunta: caso.pregunta, normas: documentos, nombreArchivo: caso.archivo, seleccion, jurisprudencia, doctrina, indicadores });
    } else {
      documentos = (await v.busqueda.buscarContexto(`${caso.pregunta} ${textoDoc.slice(0, 1200)}`, 10)).documentos;
      systemPrompt = v.prompts.PROMPT_DOCUMENTO;
      userMessage = v.prompts.mensajeDocumento({ pregunta: caso.pregunta, normas: documentos, nombreArchivo: caso.archivo, seleccion });
    }
    maxTokens = 6000;
  } else {
    const r = await v.investigacion.investigar({ pregunta: caso.pregunta, proveedor: "vercel", modo });
    ({ documentos, jurisprudencia, doctrina } = r);
    descartadas = r.descartadas || [];
    const indicadores = v.nuevo ? await v.indicadores.indicadoresPara(caso.pregunta) : undefined;
    systemPrompt = v.nuevo ? v.prompts.promptSistema(modo) : (modo === "procedimiento" ? v.prompts.PROMPT_PROCEDIMIENTO : v.prompts.PROMPT_CONSULTA);
    userMessage = v.prompts.mensajeConsulta({
      pregunta: caso.pregunta, documentos, remotoDisponible: r.remotoDisponible, remotoError: r.remotoError,
      jurisprudencia, doctrina, modo, indicadores,
    });
    maxTokens = modo === "procedimiento" ? (v.nuevo ? 10000 : 8000) : 6000;
  }

  const salida = {
    id: caso.id,
    pestana: modo,
    pregunta: caso.pregunta,
    contexto: documentos.map((d) => `${d.cuerpo_legal}, ${d.articulo}`),
    jurisprudencia: jurisprudencia.map((f) => [f.tribunal, f.rol, f.fecha].filter(Boolean).join(", ")),
    doctrina: doctrina.map((d) => d.cita),
    descartadas,
  };

  let bruto = null;
  let final = null;
  if (generar) {
    try {
      if (v.nuevo) {
        let reemplazo = null;
        const r = await v.redactor.redactar({
          proveedor: "vercel", modelo, systemPrompt, userMessage, maxTokens, modo,
          fuentes: { normas: documentos, jurisprudencia, documento: textoDoc },
          onTexto: () => {},
          onReemplazo: (t) => { reemplazo = t; },
        });
        bruto = r.bruto;
        final = reemplazo ?? r.texto;
        salida.modelo = r.modelo;
        salida.continuaciones = r.continuaciones;
      } else {
        const r = await v.proveedorIA.responder({ proveedor: "vercel", modelo, systemPrompt, userMessage, maxTokens });
        bruto = final = r.texto;
        salida.modelo = r.modelo;
      }
    } catch (err) {
      salida.error = err.message;
    }
  }
  salida.respuesta = final;
  salida.bruto = bruto;
  salida.chequeos = revisar(caso, { documentos, jurisprudencia, bruto, final });
  salida.ms = Date.now() - inicio;
  return salida;
}

async function evaluar() {
  const raiz = path.resolve(argumento("raiz", RAIZ_REPO));
  const etiqueta = argumento("etiqueta", "despues");
  const modelo = argumento("modelo", process.env.EVAL_MODELO || "anthropic/claude-sonnet-4.5");
  const hayClave = Boolean(process.env.AI_GATEWAY_API_KEY);
  const generar = !argumento("solo-busqueda", false) && hayClave;
  if (!hayClave && !argumento("solo-busqueda", false)) console.warn("Sin AI_GATEWAY_API_KEY: se evalúa solo la búsqueda (sin respuestas del modelo).");
  const filtro = argumento("casos", "");
  const casos = filtro && filtro !== true ? CASOS.filter((c) => filtro.split(",").includes(c.id)) : CASOS;
  const paralelo = Number(argumento("paralelo", 3));

  const v = cargar(raiz);
  const resultados = new Array(casos.length);
  let siguiente = 0;
  await Promise.all(Array.from({ length: Math.min(paralelo, casos.length) }, async () => {
    while (siguiente < casos.length) {
      const i = siguiente++;
      const caso = casos[i];
      try {
        resultados[i] = await ejecutarCaso(v, caso, { generar, modelo });
      } catch (err) {
        resultados[i] = { id: caso.id, pestana: caso.pestana, pregunta: caso.pregunta, error: err.message, chequeos: {} };
      }
      const c = resultados[i].chequeos || {};
      console.log(`[${etiqueta}] ${caso.id}: contexto ${c.esperados_en_contexto}/${c.esperados_total}, prohibidas en contexto ${c.fuentes_prohibidas?.length ?? "?"}` +
        (generar ? `, citados ${c.esperados_citados}, frases prohibidas ${c.prohibidas_crudas?.length}, faltan ${c.secciones_faltantes?.length}, truncada ${c.truncada}` : "") +
        (resultados[i].error ? ` — ERROR: ${resultados[i].error}` : ""));
    }
  }));

  const datos = { etiqueta, raiz, fecha: new Date().toISOString(), modelo: generar ? modelo : null, generado: generar, resultados };
  fs.writeFileSync(argumento("salida", `/tmp/eval-${etiqueta}.json`), JSON.stringify(datos, null, 2));
}

// --- Reporte ------------------------------------------------------------------
function resumen(datos) {
  const rs = datos.resultados.filter((r) => r.chequeos);
  const n = rs.length || 1;
  const pct = (x) => `${Math.round((x / n) * 100)} %`;
  const conRespuesta = rs.filter((r) => r.respuesta);
  const m = conRespuesta.length || 1;
  const pctR = (x) => (conRespuesta.length ? `${Math.round((x / m) * 100)} %` : "—");
  return {
    "Casos con todos los artículos clave en el material": pct(rs.filter((r) => r.chequeos.esperados_en_contexto === r.chequeos.esperados_total).length),
    "Casos sin normas de una materia prohibida": pct(rs.filter((r) => !(r.chequeos.fuentes_prohibidas || []).length).length),
    "Respuestas que citan todos los artículos clave": pctR(conRespuesta.filter((r) => r.chequeos.esperados_citados === r.chequeos.esperados_total).length),
    "Respuestas sin frases prohibidas (lo que escribió el modelo)": pctR(conRespuesta.filter((r) => !r.chequeos.prohibidas_crudas.length).length),
    "Respuestas sin frases prohibidas (lo que ve el usuario)": pctR(conRespuesta.filter((r) => !r.chequeos.prohibidas_finales.length).length),
    "Respuestas sin saludo ni preámbulo": pctR(conRespuesta.filter((r) => !r.chequeos.preambulo).length),
    "Respuestas con todas las secciones": pctR(conRespuesta.filter((r) => !r.chequeos.secciones_faltantes.length).length),
    "Respuestas completas (no cortadas)": pctR(conRespuesta.filter((r) => !r.chequeos.truncada).length),
    "Roles o dictámenes inventados (total)": conRespuesta.length ? String(conRespuesta.reduce((s, r) => s + r.chequeos.roles_inventados.length, 0)) : "—",
    "Largo promedio (palabras)": conRespuesta.length ? String(Math.round(conRespuesta.reduce((s, r) => s + r.chequeos.palabras, 0) / m)) : "—",
  };
}

function reporte() {
  const antes = argumento("antes") && fs.existsSync(argumento("antes")) ? JSON.parse(fs.readFileSync(argumento("antes"), "utf8")) : null;
  const despues = JSON.parse(fs.readFileSync(argumento("despues"), "utf8"));
  const rAntes = antes ? resumen(antes) : null;
  const rDespues = resumen(despues);
  const l = [];
  l.push("# Evaluación de respuestas — Derecho Chile IA", "");
  l.push(`Fecha: ${despues.fecha}. Fuentes reales (LeyChile y buscadores oficiales). ` +
    (despues.generado ? `Modelo: ${despues.modelo}.` : "Solo búsqueda: esta corrida no generó respuestas con IA."), "");
  l.push("## Resumen", "", `| Indicador | ${antes ? "Antes (main) | " : ""}Después |`, `|---|${antes ? "---|" : ""}---|`);
  for (const k of Object.keys(rDespues)) l.push(`| ${k} | ${antes ? `${rAntes[k]} | ` : ""}${rDespues[k]} |`);
  l.push("");

  l.push("## Detalle por caso", "", "| Caso | Artículos clave en el material (antes → después) | Normas de materia prohibida (antes → después) | Citados | Frases prohibidas | Secciones faltantes | Cortada |", "|---|---|---|---|---|---|---|");
  for (const r of despues.resultados) {
    const a = antes?.resultados.find((x) => x.id === r.id)?.chequeos || {};
    const c = r.chequeos || {};
    l.push(`| ${r.id} | ${antes ? `${a.esperados_en_contexto ?? "?"}/${a.esperados_total ?? "?"} → ` : ""}${c.esperados_en_contexto}/${c.esperados_total} | ` +
      `${antes ? `${a.fuentes_prohibidas?.length ?? "?"} → ` : ""}${c.fuentes_prohibidas?.length ?? "?"} | ` +
      `${c.esperados_citados ?? "—"} | ${c.prohibidas_crudas ? `${c.prohibidas_crudas.length}${c.prohibidas_crudas.length ? ` (${c.prohibidas_crudas.join(", ")})` : ""}` : "—"} | ` +
      `${c.secciones_faltantes ? (c.secciones_faltantes.join(", ") || "—") : "—"} | ${c.truncada == null ? "—" : c.truncada ? "sí" : "no"} |`);
  }
  l.push("");

  l.push("## Respuestas completas (versión nueva)", "");
  for (const r of despues.resultados) {
    l.push(`### ${r.id} — ${r.pestana}: ${r.pregunta}`, "");
    l.push(`<details><summary>Material enviado al modelo (${r.contexto?.length || 0} normas, ${r.jurisprudencia?.length || 0} fallos o dictámenes, ${r.doctrina?.length || 0} artículos de doctrina; ${r.descartadas?.length || 0} normas descartadas por materia)</summary>`, "");
    for (const d of r.contexto || []) l.push(`- ${d}`);
    for (const f of r.jurisprudencia || []) l.push(`- Jurisprudencia: ${f}`);
    for (const d of r.doctrina || []) l.push(`- Doctrina: ${d}`);
    for (const d of r.descartadas || []) l.push(`- ~~${d.norma}, ${d.articulo}~~ (${d.motivo})`);
    const a = antes?.resultados.find((x) => x.id === r.id);
    if (a) {
      l.push("", "Versión anterior (main):");
      for (const d of a.contexto || []) l.push(`- ${d}`);
    }
    l.push("", "</details>", "");
    if (r.error) l.push(`**Error:** ${r.error}`, "");
    if (r.respuesta) l.push(r.respuesta.replace(/^## /gm, "#### ").replace(/^### /gm, "##### "), "");
    l.push("---", "");
  }
  fs.writeFileSync(argumento("reporte"), l.join("\n"));
  console.log(l.slice(0, 20 + despues.resultados.length).join("\n"));
}

(argumento("reporte") ? Promise.resolve(reporte()) : evaluar())
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
