// Validador de salida: revisa la respuesta del modelo antes de darla por
// buena y corrige lo que se puede corregir sin volver a generar.
//
//   1. Frases prohibidas: el modelo hablando de su funcionamiento interno
//      ("el contexto proporcionado", "no se encontró jurisprudencia", "como
//      modelo de lenguaje"...). Se elimina la oración que las contiene.
//   2. Preámbulo: todo lo que venga antes del primer título ("Colega,
//      recibí tu solicitud...") se elimina.
//   3. Secciones: las obligatorias de la pestaña, presentes y en orden.
//      Si falta la última, la respuesta se considera cortada.
//   4. Citas textuales atribuidas a un artículo: deben coincidir (≥ 90 %) con
//      el texto recuperado de LeyChile. Si no, pasan a paráfrasis marcada.
//   5. Roles de causa y números de dictamen: deben existir en lo recuperado.
//      Si no, se elimina la oración.
//   6. Línea de cierre: se agrega si falta.

const { SECCIONES, CIERRE, MARCA_NO_VERIFICADO } = require("./prompts");

function sinTildes(texto) {
  return String(texto || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

// Todas se evalúan sobre texto en minúsculas y sin tildes. `excepto`: pestañas
// donde la frase es legítima (en Documento, "el documento que me enviaste" se
// refiere al archivo del usuario).
const PROHIBIDAS = [
  { id: "contexto", re: /\bcontexto (normativo |legal |juridico )?(proporcionad|entregad|recibid|disponible|aportad|suministrad|facilitad)/ },
  { id: "fuentes_proporcionadas", re: /\b(documentos|fuentes?|textos?|normas|materiales?|articulos|fragmentos?|resultados) (legales |normativos |juridicos )?(proporcionad|entregad|suministrad|facilitad|recibid|aportad|disponibles|recuperad)[oa]s?\b(?! (por|al|a la|en el|en la) (trabajador|empleador|demandante|demandado|actor|deudor|acreedor|arrendador|arrendatario|consumidor|proveedor|parte|tribunal|juez))/ },
  { id: "documento_proporcionado", re: /\bdocumento (proporcionad|entregad|suministrad|facilitad|recibid)o\b/, excepto: ["documento"] },
  { id: "informacion_disponible", re: /\bsegun (la|esta) informacion (disponible|proporcionada|entregada|con la que cuento|que tengo)|\bcon la informacion (disponible|proporcionada|entregada)\b/ },
  { id: "me_proporcionaste", re: /\b(me|nos) (has |han )?(proporcionaste|proporcionado|entregaste|entregado|facilitaste|facilitado|suministraste|suministrado)\b/, excepto: ["documento"] },
  { id: "material_apoyo", re: /\bmaterial (de apoyo|interno|entregado|proporcionado|recibido)\b/ },
  { id: "busqueda", re: /\b(esta|la|mi|nuestra|dicha) busqueda\b(?! de)/ },
  { id: "base_de_datos", re: /\b(en|de) (la|mi|nuestra|esta) base de datos\b/ },
  { id: "no_puedo_suplir", re: /\bno puedo suplir\b|\bno puedo (inventar|completar) (lo|con lo) que no\b/ },
  { id: "modelo_lenguaje", re: /\bcomo (un )?modelo de lenguaje\b|\bcomo (una )?(ia|inteligencia artificial)\b|\bsoy (una |un )?(ia|inteligencia artificial|modelo de lenguaje|asistente de ia)\b/ },
  { id: "no_se_encontro", re: /\bno se (encontro|encontraron|hallo|hallaron|recupero|recuperaron|incluyo|incluyeron) (jurisprudencia|doctrina|fallos?|dictamenes|dictamen|normas?|articulos?|informacion|resultados|documentos|sentencias|criterios)\b/ },
  { id: "no_dispongo", re: /\bno (dispongo|cuento|tengo acceso) (de|con|a) (jurisprudencia|doctrina|fallos|informacion|las normas|el texto)\b/ },
  { id: "extremadamente_limitado", re: /\b(es|son|resulta|resultan) (extremadamente |muy |bastante )?(limitad|escas|insuficient)[oa]s?\b.{0,40}\b(contexto|informacion|material|normativa entregada)/ },
];

const PREAMBULO = /^(colega|estimad[oa]s?|hola|buen(os|as) (dias|tardes|noches)|recibi (tu|su)|excelente pregunta|buena pregunta|gracias por|con gusto|claro[,!.]|por supuesto)/;

// La marca pedida al modelo, en todas sus variantes: "(no verificado en esta
// búsqueda)", "(no verificado en esta búsqueda; verificar en el art. 468 CPC)",
// "Datos marcados como no verificados en esta búsqueda". No es una frase
// prohibida: es la advertencia que se pide.
const MARCA_VARIANTES = /(?:marcad[oa]s? como )?no verificad[oa]s?(?: [a-z]+){0,3} en (?:esta|la) busqueda/g;
const sinMarcas = (t) => sinTildes(t).replace(MARCA_VARIANTES, " ");

/** Busca frases prohibidas. Devuelve [{ id, fragmento }]. */
function buscarProhibidas(texto, modo) {
  const base = sinMarcas(texto);
  const hallazgos = [];
  for (const p of PROHIBIDAS) {
    if (p.excepto?.includes(modo)) continue;
    const m = base.match(p.re);
    if (m) hallazgos.push({ id: p.id, fragmento: base.slice(Math.max(0, m.index - 30), m.index + m[0].length + 30) });
  }
  return hallazgos;
}

function contieneProhibida(oracion, modo) {
  const base = sinMarcas(oracion);
  return PROHIBIDAS.some((p) => !p.excepto?.includes(modo) && p.re.test(base));
}

// Divide una línea en oraciones sin romper abreviaturas frecuentes ("art.", "N°").
function oraciones(linea) {
  return linea.split(/(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÑ¿¡"“(*])/).filter((o) => o.length);
}

const ES_TITULO = /^\s*#{1,6}\s/;
const ES_FILA_TABLA = /^\s*\|/;
const MARCADOR = /^(\s*(?:[-*+]|\d+[.)])\s+(?:\[[ xX]\]\s+)?)/;

/** Elimina las oraciones (o filas de tabla) donde `debeEliminarse` es verdadero. */
function eliminarOraciones(texto, debeEliminarse) {
  const eliminadas = [];
  const lineas = texto.split("\n").map((linea) => {
    if (ES_TITULO.test(linea) || !linea.trim()) return linea;
    if (ES_FILA_TABLA.test(linea)) {
      if (debeEliminarse(linea)) {
        eliminadas.push(linea.trim());
        return null;
      }
      return linea;
    }
    const marcador = (linea.match(MARCADOR) || [""])[0];
    const cuerpo = linea.slice(marcador.length);
    const partes = oraciones(cuerpo);
    const quedan = partes.filter((o) => {
      if (debeEliminarse(o)) {
        eliminadas.push(o.trim());
        return false;
      }
      return true;
    });
    if (quedan.length === partes.length) return linea;
    if (!quedan.length) return null;
    return marcador + quedan.join(" ");
  });
  return { texto: lineas.filter((l) => l !== null).join("\n").replace(/\n{3,}/g, "\n\n"), eliminadas };
}

/** Quita todo lo que venga antes del primer título, si hay un título al comienzo. */
function quitarPreambulo(texto) {
  const idx = texto.search(/(^|\n)#{1,3}\s/);
  if (idx > 0 && idx < 1500) {
    const previo = texto.slice(0, idx).trim();
    return { texto: texto.slice(texto[idx] === "\n" ? idx + 1 : idx), eliminado: previo };
  }
  // Sin títulos: se quita solo una primera línea de saludo.
  const [primera, ...resto] = texto.split("\n");
  if (PREAMBULO.test(sinTildes(primera.trim())) && primera.length < 200 && resto.length) {
    return { texto: resto.join("\n").replace(/^\s+/, ""), eliminado: primera };
  }
  return { texto, eliminado: "" };
}

const normalizarTitulo = (t) => sinTildes(t).replace(/^[#\s\d.)-]+/, "").replace(/[:.\s]+$/, "").replace(/\s+/g, " ").trim();

/** Revisa las secciones de la pestaña: { faltan, fueraDeOrden, ultimaPresente }. */
function revisarSecciones(texto, modo) {
  const esperadas = SECCIONES[modo] || [];
  const titulos = [...texto.matchAll(/^##\s+(.+)$/gm)].map((m) => normalizarTitulo(m[1]));
  const posiciones = esperadas.map((s) => titulos.findIndex((t) => [s.titulo, ...(s.alternativas || [])].some((a) => t.startsWith(normalizarTitulo(a)))));
  const faltan = esperadas.filter((s, i) => !s.opcional && posiciones[i] === -1).map((s) => s.titulo);
  const presentes = posiciones.filter((p) => p !== -1);
  const fueraDeOrden = presentes.some((p, i) => i > 0 && p < presentes[i - 1]);
  const ultima = esperadas[esperadas.length - 1];
  return { faltan, fueraDeOrden, ultimaPresente: !ultima || posiciones[esperadas.length - 1] !== -1 };
}

// --- Citas textuales --------------------------------------------------------
const palabras = (t) => sinTildes(t).replace(/[^a-z0-9ñ ]+/g, " ").split(/\s+/).filter(Boolean);

function bigramas(lista) {
  const b = new Set();
  for (let i = 0; i < lista.length - 1; i++) b.add(`${lista[i]} ${lista[i + 1]}`);
  return b;
}

/** Similitud (0 a 1) de una cita con la mejor de las fuentes: proporción de sus bigramas presentes. */
function similitudCita(cita, fuentesBigramas) {
  const segmentos = cita.split(/\.\.\.|…|\[\.\.\.\]/).map(palabras).filter((s) => s.length >= 3);
  if (!segmentos.length) return 1;
  const bigCita = new Set();
  for (const s of segmentos) for (const b of bigramas(s)) bigCita.add(b);
  if (!bigCita.size) return 1;
  let mejor = 0;
  for (const fuente of fuentesBigramas) {
    let presentes = 0;
    for (const b of bigCita) if (fuente.has(b)) presentes++;
    mejor = Math.max(mejor, presentes / bigCita.size);
  }
  return mejor;
}

const CITA = /[“"«]([^”"»\n]{40,}?)[”"»]/g;
const MENCIONA_ARTICULO = /\bart(?:[íi]culos?|s?\.)\s*\d/i;

// Solo se revisan las citas atribuidas a un artículo justo antes ("el artículo
// 700 dispone: “…”"). Las cláusulas propuestas, los modelos de escritos y las
// citas del documento del usuario no son citas de ley.
const ATRIBUIDA_A_ARTICULO = /\bart(?:[íi]culos?|s?\.)\s*\d+[^“"«\n]{0,70}$/i;
const NO_ES_CITA_DE_LEY = /redacci|propuest|suger|cl[aá]usula|modelo|reemplaz|en lo principal|otros[íi]|suma:/i;

function revisarCitas(texto, textosFuente) {
  const fuentesBigramas = textosFuente.filter(Boolean).map((t) => bigramas(palabras(t)));
  const corregidas = [];
  const lineas = texto.split("\n").map((linea) => {
    if (!MENCIONA_ARTICULO.test(linea)) return linea;
    return linea.replace(CITA, (completo, cita, desplazamiento, original) => {
      const antes = original.slice(Math.max(0, desplazamiento - 90), desplazamiento);
      if (!ATRIBUIDA_A_ARTICULO.test(antes) || NO_ES_CITA_DE_LEY.test(antes) || NO_ES_CITA_DE_LEY.test(cita.slice(0, 40))) return completo;
      const sim = similitudCita(cita, fuentesBigramas);
      if (sim >= 0.9) return completo;
      corregidas.push({ cita: cita.slice(0, 120), similitud: Math.round(sim * 100) });
      const despues = original.slice(desplazamiento + completo.length, desplazamiento + completo.length + 60);
      const yaMarcada = sinTildes(despues).search(MARCA_VARIANTES) !== -1;
      return `${cita.trim()}${yaMarcada ? "" : ` ${MARCA_NO_VERIFICADO}`}`;
    });
  });
  return { texto: lineas.join("\n"), corregidas };
}

// --- Roles y dictámenes -------------------------------------------------------
const ROL = /\brol(?:es)?\s*(?:n[°º.]?|numero)?\s*:?\s*((?:[a-z]{1,3}\s*-\s*)?\d{1,6}\s*-\s*\d{2,4})\b/gi;
const DICTAMEN = /\b(?:dictamen(?:es)?|oficio|ord\.?|ordinario)\s*(?:n[°º.]?|numero)?\s*:?\s*(\d{1,3}(?:\.\d{3})+|\d{2,6})\b/gi;
const soloDigitos = (t) => String(t).replace(/\D/g, "");

function identificadoresEn(texto) {
  const base = sinTildes(texto);
  const ids = [];
  for (const m of base.matchAll(ROL)) ids.push({ tipo: "rol", valor: m[1].replace(/\s+/g, ""), digitos: soloDigitos(m[1]) });
  for (const m of base.matchAll(DICTAMEN)) ids.push({ tipo: "dictamen", valor: m[1], digitos: soloDigitos(m[1]) });
  return ids;
}

function revisarRoles(texto, textosJurisprudencia) {
  const pajar = soloDigitos(textosJurisprudencia.join(" | ").replace(/[^\d]+/g, "|"));
  const pajarPartes = new Set(textosJurisprudencia.join(" ").match(/\d[\d.-]*\d|\d/g)?.map(soloDigitos) || []);
  const existe = (id) => pajarPartes.has(id.digitos) || (id.digitos.length >= 5 && pajar.includes(id.digitos));
  const inventados = [];
  const resultado = eliminarOraciones(texto, (oracion) => {
    const ids = identificadoresEn(oracion).filter((id) => !existe(id));
    if (ids.length) inventados.push(...ids.map((i) => `${i.tipo} ${i.valor}`));
    return ids.length > 0;
  });
  return { texto: resultado.texto, inventados, eliminadas: resultado.eliminadas };
}

/**
 * Valida y corrige una respuesta.
 * @param {string} texto
 * @param {{ modo: string, normas?: object[], jurisprudencia?: object[], documento?: string }} opciones
 * @returns {{ texto, cambiado, problemas: {tipo, detalle}[], truncada, prohibidasOriginales }}
 */
function validar(texto, { modo = "consulta", normas = [], jurisprudencia = [], documento = "" } = {}) {
  const problemas = [];
  let t = String(texto || "");

  const pre = quitarPreambulo(t);
  if (pre.eliminado) problemas.push({ tipo: "preambulo", detalle: pre.eliminado.slice(0, 160) });
  t = pre.texto;

  const prohibidasOriginales = buscarProhibidas(t, modo);
  if (prohibidasOriginales.length) {
    // Si la frase va en un paréntesis breve ("(según material de apoyo)"), se
    // quita solo el paréntesis y la oración se conserva.
    t = t.replace(/\s*\(([^()\n]{1,160})\)/g, (completo, dentro) => {
      if (!contieneProhibida(dentro, modo)) return completo;
      problemas.push({ tipo: "frase_prohibida", detalle: `(${dentro.slice(0, 160)})` });
      return "";
    });
    const r = eliminarOraciones(t, (o) => contieneProhibida(o, modo));
    t = r.texto;
    for (const o of r.eliminadas) problemas.push({ tipo: "frase_prohibida", detalle: o.slice(0, 200) });
  }

  const textosJuris = jurisprudencia.map((f) => [f.rol, f.url, f.texto, ...(f.pasajes || []), f.tribunal, f.fecha].filter(Boolean).join(" "));
  const roles = revisarRoles(t, textosJuris);
  t = roles.texto;
  for (const id of roles.inventados) problemas.push({ tipo: "rol_inventado", detalle: id });

  const citas = revisarCitas(t, [...normas.map((n) => n.texto), ...textosJuris, documento]);
  t = citas.texto;
  for (const c of citas.corregidas) problemas.push({ tipo: "cita_no_fiel", detalle: `${c.similitud}%: "${c.cita}"` });

  const secciones = revisarSecciones(t, modo);
  if (secciones.faltan.length) problemas.push({ tipo: "secciones_faltantes", detalle: secciones.faltan.join(", ") });
  if (secciones.fueraDeOrden) problemas.push({ tipo: "secciones_desordenadas", detalle: "" });

  if (!sinTildes(t).includes(sinTildes(CIERRE).slice(0, 40)) && secciones.ultimaPresente) {
    t = `${t.trimEnd()}\n\n${CIERRE}`;
  }

  return {
    texto: t,
    cambiado: t !== texto,
    problemas,
    truncada: !secciones.ultimaPresente,
    prohibidasOriginales,
  };
}

module.exports = { validar, buscarProhibidas, revisarSecciones, revisarCitas, revisarRoles, quitarPreambulo, similitudCita, identificadoresEn, sinTildes };
