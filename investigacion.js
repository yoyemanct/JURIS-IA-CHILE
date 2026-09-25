// Investigación previa a la respuesta: decide qué buscar y consulta todas las
// fuentes en paralelo.
//
//   1. Planificar: un paso breve de IA traduce la pregunta a búsquedas
//      precisas (términos para el buscador del Poder Judicial, qué tribunales
//      consultar, si corresponde el Tribunal Constitucional o Contraloría, qué
//      códigos procesales rigen). Si no hay IA en la nube disponible, se usa un
//      plan heurístico.
//   2. Investigar: legislación, normas procesales, jurisprudencia y doctrina
//      se consultan a la vez, cada una con su propio tiempo máximo. Si una
//      fuente falla o tarda, se sigue con las demás y se deja constancia.

const { buscarContexto, buscarEnNormasNombradas, buscarArticulosExactos } = require("./busquedaHibrida");
const proveedorIA = require("./proveedorIA");
const pjud = require("./fuentes/jurisprudencia/pjud");
const { buscarSentenciasTC } = require("./fuentes/jurisprudencia/tconstitucional");
const { buscarDictamenes } = require("./fuentes/jurisprudencia/contraloria");
const { buscarDoctrina } = require("./fuentes/doctrina");
const dt = require("./fuentes/jurisprudencia/direcciontrabajo");
const { buscarTDLC } = require("./fuentes/jurisprudencia/tdlc");
const { buscarOficiosSII } = require("./fuentes/jurisprudencia/sii");
const { tokenizar } = require("./search");
const { CacheTTL, claveDeTexto } = require("./cache");

const USAR_JURISPRUDENCIA = process.env.USAR_JURISPRUDENCIA !== "false";
const USAR_DOCTRINA = process.env.USAR_DOCTRINA !== "false";
const TIMEOUT_PLAN_MS = Number(process.env.TIMEOUT_PLAN_MS || 6000);
const TIMEOUT_JURISPRUDENCIA_MS = Number(process.env.TIMEOUT_JURISPRUDENCIA_MS || 15000);
const TIMEOUT_DOCTRINA_MS = Number(process.env.TIMEOUT_DOCTRINA_MS || 12000);

const SEDES = Object.keys(pjud.BUSCADORES);

// Cuerpos legales que rigen cada procedimiento, tal como se buscan en el
// corpus. El plan de IA elige de aquí (o nombra otros); el heurístico los
// asigna por palabras clave.
const NORMAS_PROCESALES = {
  civil: ["Código de Procedimiento Civil", "Código Orgánico de Tribunales"],
  laboral: ["Código del Trabajo"],
  familia: ["Ley 19.968 crea los Tribunales de Familia"],
  alimentos: ["Ley 14.908 sobre abandono de familia y pago de pensiones alimenticias", "Ley 19.968 crea los Tribunales de Familia"],
  penal: ["Código Procesal Penal"],
  arriendo: ["Ley 18.101 fija normas especiales sobre arrendamiento de predios urbanos", "Código de Procedimiento Civil"],
  policia_local: ["Ley 18.287 establece procedimiento ante los Juzgados de Policía Local", "Ley 19.496 protección de los derechos de los consumidores"],
  constitucional: ["Constitución Política de la República"],
  tributario: ["Código Tributario"],
};

const PROMPT_PLAN = `Eres un investigador jurídico chileno. Recibes una consulta y devuelves SOLO un objeto JSON (sin texto adicional) que planifica las búsquedas en las fuentes. Formato exacto:
{
  "jurisprudencia_todas": "2 a 4 palabras clave que deben aparecer en los fallos pertinentes (términos jurídicos técnicos, sin artículos ni preposiciones)",
  "jurisprudencia_frase": "una institución jurídica exacta si la consulta la nombra (ej: 'nulidad del despido'), o cadena vacía",
  "sedes": ["corte_suprema", y a lo más UNA más de: "corte_apelaciones", "laborales", "penales", "familia", "cobranza", "civiles"],
  "constitucional": true si hay un derecho fundamental, una inaplicabilidad o un asunto constitucional en juego; si no, false,
  "contraloria": true solo si involucra a la Administración del Estado, funcionarios públicos o municipalidades; si no, false,
  "direccion_trabajo": true si es una materia laboral o de seguridad social (la Dirección del Trabajo interpreta la legislación laboral); si no, false,
  "sii": true si es una materia tributaria (impuestos, IVA, renta, obligaciones con el SII); si no, false,
  "libre_competencia": true solo si trata de colusión, abuso de posición dominante, operaciones de concentración u otra materia de libre competencia; si no, false,
  "doctrina": "consulta breve con los conceptos doctrinales centrales, o cadena vacía",
  "materia": una de "civil", "laboral", "familia", "alimentos", "penal", "arriendo", "policia_local", "constitucional", "tributario", "otra",
  "normas_procesales": ["nombres oficiales de hasta 3 cuerpos legales que regulan el procedimiento o la materia, ej: 'Código de Procedimiento Civil', 'Código del Trabajo', 'Código Procesal Penal', 'Ley 19.968 crea los Tribunales de Familia'"],
  "articulos_clave": [{"norma": "nombre oficial del cuerpo legal", "articulos": ["números de artículo"]}]
}
En "articulos_clave" pon los artículos que un abogado chileno abriría primero para responder: la definición legal del concepto preguntado, la regla central, los plazos y requisitos. Ej.: posesión → {"norma": "Código Civil", "articulos": ["700", "701", "702", "724", "730"]}; despido injustificado → {"norma": "Código del Trabajo", "articulos": ["160", "161", "162", "163", "168"]}. Hasta 8 artículos en total, solo los que conozcas con certeza.`;

const cachePlanes = new CacheTTL({ maximo: 300, ttlMs: 24 * 60 * 60 * 1000 });

// Palabras de pregunta cotidiana que no sirven como término de búsqueda.
const VACIAS_PREGUNTA = new Set([
  "cuantos", "cuantas", "cuanto", "cuanta", "corresponden", "corresponde", "debo", "hacer", "tiene",
  "tienen", "pueden", "quiero", "necesito", "chile", "chileno", "chilena", "como", "cual", "cuales",
  "donde", "cuando", "tramitar", "procedimiento", "paso", "pasos", "inicio", "fin", "etapa", "etapas",
  "presentar", "ante", "desde", "hasta", "ano", "anos", "dias", "mes", "meses", "caso", "persona",
]);

function materiaPorPalabras(texto) {
  const t = claveDeTexto(texto);
  if (/alimento|pension alimenticia/.test(t)) return "alimentos";
  if (/arriend|arrendatari|arrendador|desahucio|restitucion/.test(t)) return "arriendo";
  if (/despid|trabajador|empleador|laboral|finiquito|sueldo|remuneracion|tutela laboral|vacaciones|feriado/.test(t)) return "laboral";
  if (/divorci|cuidado personal|relacion directa|visitas|violencia intrafamiliar|familia/.test(t)) return "familia";
  if (/impuesto|\biva\b|\bsii\b|tributari|credito fiscal|renta/.test(t)) return "tributario";
  if (/querella|denuncia|delito|penal|imputad|fiscalia|estafa|robo|hurto/.test(t)) return "penal";
  if (/consumidor|sernac|policia local|transito|choque/.test(t)) return "policia_local";
  if (/recurso de proteccion|inaplicabilidad|constitucional|garantia/.test(t)) return "constitucional";
  if (/demanda|juicio|ejecutivo|pagare|cheque|embargo|prescripcion|contrato|civil|posesion/.test(t)) return "civil";
  return "otra";
}

const SEDE_POR_MATERIA = { laboral: "laborales", familia: "familia", alimentos: "familia", penal: "penales", civil: "civiles", arriendo: "civiles" };

function planHeuristico(pregunta) {
  const terminos = [...new Set(tokenizar(pregunta).filter((t) => !VACIAS_PREGUNTA.has(t)))]
    .sort((a, b) => b.length - a.length)
    .slice(0, 3);
  const materia = materiaPorPalabras(pregunta);
  const t = claveDeTexto(pregunta);
  return {
    origen: "heuristico",
    jurisprudencia_todas: terminos.join(" "),
    jurisprudencia_frase: "",
    sedes: ["corte_suprema"],
    constitucional: materia === "constitucional",
    contraloria: /municipal|funcionari|estatuto administrativo|servicio publico|contrata|sumario administrativo/.test(t),
    direccion_trabajo: materia === "laboral",
    libre_competencia: /colusi|libre competencia|monopoli|posicion dominante|cartel|concentracion economica/.test(t),
    sii: materia === "tributario" || /\biva\b|impuesto|renta|tributari|boleta|factura/.test(t),
    doctrina: terminos.join(" "),
    materia,
    normas_procesales: NORMAS_PROCESALES[materia] || [],
    articulos_clave: articulosPorConcepto(t),
  };
}

// Respaldo sin IA: definiciones legales de las instituciones más consultadas.
const CONCEPTOS = [
  [/posesion|poseedor/, "Código Civil", ["700", "701", "702", "724", "730"]],
  [/dominio|propiedad/, "Código Civil", ["582", "583"]],
  [/tradicion/, "Código Civil", ["670", "675", "686"]],
  [/prescripcion adquisitiva|usucapion/, "Código Civil", ["2492", "2498", "2506", "2507", "2508", "2510"]],
  [/prescripcion extintiva/, "Código Civil", ["2492", "2514", "2515", "2518"]],
  [/contrato/, "Código Civil", ["1438", "1445", "1545", "1546"]],
  [/nulidad/, "Código Civil", ["1681", "1682", "1683", "1684"]],
  [/despido injustificado|indemnizacion por anos/, "Código del Trabajo", ["160", "161", "162", "163", "168"]],
];
function articulosPorConcepto(t) {
  const pedidos = [];
  for (const [patron, norma, articulos] of CONCEPTOS) {
    if (patron.test(t)) pedidos.push({ norma, articulos });
  }
  return pedidos.slice(0, 2);
}

function sanearArticulosClave(bruto) {
  if (!Array.isArray(bruto)) return [];
  let total = 0;
  return bruto
    .filter((p) => p && typeof p.norma === "string" && p.norma.trim() && Array.isArray(p.articulos))
    .slice(0, 3)
    .map((p) => {
      const articulos = p.articulos
        .map((a) => String(a).trim().replace(/^art(?:[íi]culo|\.)?\s*/i, ""))
        .filter((a) => /^\d{1,4}(?:\s*(?:bis|ter|quater|[a-z]))?$/i.test(a))
        .slice(0, Math.max(0, 8 - total));
      total += articulos.length;
      return { norma: p.norma.trim().slice(0, 120), articulos };
    })
    .filter((p) => p.articulos.length);
}

function sanearPlan(bruto, respaldo) {
  if (!bruto || typeof bruto !== "object") return respaldo;
  const texto = (v, max = 120) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const sedes = (Array.isArray(bruto.sedes) ? bruto.sedes : [])
    .filter((s) => SEDES.includes(s))
    .slice(0, 2);
  if (!sedes.includes("corte_suprema")) sedes.unshift("corte_suprema");
  const materia = typeof bruto.materia === "string" && (NORMAS_PROCESALES[bruto.materia] || bruto.materia === "otra") ? bruto.materia : respaldo.materia;
  const normas = (Array.isArray(bruto.normas_procesales) ? bruto.normas_procesales : [])
    .filter((n) => typeof n === "string" && n.trim())
    .map((n) => n.trim().slice(0, 120))
    .slice(0, 3);
  return {
    origen: "ia",
    jurisprudencia_todas: texto(bruto.jurisprudencia_todas) || respaldo.jurisprudencia_todas,
    jurisprudencia_frase: texto(bruto.jurisprudencia_frase),
    sedes: sedes.slice(0, 2),
    constitucional: bruto.constitucional === true,
    contraloria: bruto.contraloria === true,
    direccion_trabajo: bruto.direccion_trabajo === true || (bruto.direccion_trabajo === undefined && respaldo.direccion_trabajo),
    libre_competencia: bruto.libre_competencia === true,
    sii: bruto.sii === true || (bruto.sii === undefined && respaldo.sii),
    doctrina: texto(bruto.doctrina) || respaldo.doctrina,
    materia,
    normas_procesales: normas.length ? normas : NORMAS_PROCESALES[materia] || [],
    articulos_clave: (() => {
      const a = sanearArticulosClave(bruto.articulos_clave);
      return a.length ? a : respaldo.articulos_clave;
    })(),
  };
}

async function planificar({ pregunta, proveedor, modo }) {
  const respaldo = planHeuristico(pregunta);
  const clave = `${modo}|${claveDeTexto(pregunta)}`;
  const enCache = cachePlanes.obtener(clave);
  if (enCache) return enCache;
  try {
    let temporizador;
    const bruto = await Promise.race([
      proveedorIA.completarJSON({
        proveedor,
        systemPrompt: PROMPT_PLAN,
        userMessage: `${modo === "procedimiento" ? "Consulta sobre cómo tramitar un procedimiento judicial: " : "Consulta: "}${pregunta}`,
        maxTokens: 600,
      }),
      new Promise((resolve) => { temporizador = setTimeout(() => resolve(null), TIMEOUT_PLAN_MS); }),
    ]).finally(() => clearTimeout(temporizador));
    const plan = sanearPlan(bruto, respaldo);
    if (plan.origen === "ia") cachePlanes.guardar(clave, plan);
    return plan;
  } catch (err) {
    console.warn("No se pudo planificar con IA, se usa el plan heurístico:", err.message);
    return respaldo;
  }
}

// Ejecuta una promesa con tiempo máximo, sin lanzar: devuelve { valor } o { error }.
async function conTiempo(promesa, ms, etiqueta) {
  let temporizador;
  try {
    const valor = await Promise.race([
      promesa,
      new Promise((_, reject) => {
        temporizador = setTimeout(() => reject(new Error(`${etiqueta}: tiempo de espera agotado`)), ms);
      }),
    ]);
    return { valor };
  } catch (err) {
    return { error: err.message };
  } finally {
    clearTimeout(temporizador);
  }
}

async function buscarJurisprudencia(plan) {
  const criterio = plan.jurisprudencia_frase
    ? { literal: plan.jurisprudencia_frase }
    : { todas: plan.jurisprudencia_todas };
  if (!criterio.literal && !criterio.todas) return { fallos: [], avisos: [] };
  const consultaLibre = plan.jurisprudencia_frase || plan.jurisprudencia_todas;

  const tareas = plan.sedes.map((sede) => ({
    etiqueta: pjud.BUSCADORES[sede].nombre,
    promesa: (async () => {
      const limite = sede === "corte_suprema" ? 3 : 2;
      let r = await pjud.buscarSentencias({ tribunal: sede, ...criterio, limite });
      // Una frase exacta o varias palabras obligatorias pueden no calzar con
      // nada: se reintenta una vez con "alguna de estas palabras".
      if (!r.resultados.length && sede === "corte_suprema" && consultaLibre.split(/\s+/).length > 1) {
        r = await pjud.buscarSentencias({ tribunal: sede, algunas: consultaLibre, limite });
      }
      return r.resultados;
    })(),
  }));
  if (plan.constitucional) {
    tareas.push({
      etiqueta: "Tribunal Constitucional",
      promesa: buscarSentenciasTC({ consulta: consultaLibre, limite: 2 }).then((r) => r.resultados),
    });
  }
  if (plan.contraloria) {
    tareas.push({
      etiqueta: "Contraloría",
      promesa: buscarDictamenes({ texto: consultaLibre, limite: 2 }).then((r) => r.resultados),
    });
  }

  if (plan.direccion_trabajo) {
    tareas.push({
      etiqueta: "Dirección del Trabajo",
      promesa: dt.buscarDictamenesDT({ consulta: consultaLibre, limite: 2 }).then((r) => r.resultados),
    });
  }
  if (plan.sii) {
    tareas.push({
      etiqueta: "Servicio de Impuestos Internos",
      promesa: buscarOficiosSII({ consulta: consultaLibre, limite: 2 }).then((r) => r.resultados),
    });
  }
  if (plan.libre_competencia) {
    tareas.push({
      etiqueta: "Tribunal de Defensa de la Libre Competencia",
      promesa: buscarTDLC({ consulta: consultaLibre, limite: 2 }).then((r) => r.resultados),
    });
  }

  const resultados = await Promise.all(
    tareas.map((t) => conTiempo(t.promesa, TIMEOUT_JURISPRUDENCIA_MS, t.etiqueta).then((r) => ({ ...r, etiqueta: t.etiqueta })))
  );
  return {
    fallos: resultados.flatMap((r) => r.valor || []),
    avisos: resultados.filter((r) => r.error).map((r) => `${r.etiqueta}: ${r.error}`),
  };
}

/**
 * Investiga una consulta en todas las fuentes.
 * @param {object} p { pregunta, consultaBusqueda, proveedor, modo: "consulta"|"procedimiento", limiteLegislacion }
 */
async function investigar({ pregunta, consultaBusqueda, proveedor, modo = "consulta", limiteLegislacion = 14 }) {
  const consulta = consultaBusqueda || pregunta;
  // La legislación no depende del plan: parte de inmediato, en paralelo con él.
  const legislacionP = buscarContexto(consulta, limiteLegislacion);
  const plan = await planificar({ pregunta: consulta, proveedor, modo });

  const procesalesP = modo === "procedimiento" || plan.materia !== "otra"
    ? conTiempo(buscarEnNormasNombradas(plan.normas_procesales, consulta, modo === "procedimiento" ? 10 : 4), 15000, "Normas procesales")
    : Promise.resolve({ valor: [] });
  const exactosP = conTiempo(buscarArticulosExactos(plan.articulos_clave), 12000, "Artículos clave");
  const jurisprudenciaP = USAR_JURISPRUDENCIA
    ? buscarJurisprudencia(plan)
    : Promise.resolve({ fallos: [], avisos: [] });
  const doctrinaP = USAR_DOCTRINA && plan.doctrina
    ? conTiempo(buscarDoctrina({ consulta: plan.doctrina, limite: 3 }), TIMEOUT_DOCTRINA_MS, "Doctrina")
    : Promise.resolve({ valor: { resultados: [] } });

  const [legislacion, exactos, procesales, jurisprudencia, doctrina] = await Promise.all([
    legislacionP,
    exactosP,
    procesalesP,
    jurisprudenciaP,
    doctrinaP,
  ]);

  // Artículos procesales primero (son el centro de una guía de procedimiento),
  // sin repetir los que ya trajo la búsqueda general.
  const clave = (d) => `${d.idNorma || d.cuerpo_legal}|${d.numero || d.articulo}`;
  const vistos = new Set();
  const documentos = [];
  const agregar = (d) => {
    const k = clave(d);
    if (vistos.has(k)) return;
    vistos.add(k);
    documentos.push(d);
  };
  const tope = modo === "procedimiento" ? 24 : 20;
  // Los artículos clave (definición legal, regla central) van siempre primero.
  (exactos.valor || []).forEach(agregar);
  if (modo === "procedimiento") (procesales.valor || []).forEach(agregar);
  legislacion.documentos.forEach(agregar);
  if (modo !== "procedimiento") (procesales.valor || []).forEach(agregar);

  const avisos = [...jurisprudencia.avisos];
  if (procesales.error) avisos.push(procesales.error);
  if (doctrina.error) avisos.push(doctrina.error);

  return {
    plan,
    documentos: documentos.slice(0, tope),
    remotoDisponible: legislacion.remotoDisponible,
    remotoError: legislacion.remotoError,
    jurisprudencia: jurisprudencia.fallos,
    doctrina: (doctrina.valor && doctrina.valor.resultados) || [],
    avisos,
  };
}

module.exports = { investigar, planificar, planHeuristico, sanearPlan, NORMAS_PROCESALES };
