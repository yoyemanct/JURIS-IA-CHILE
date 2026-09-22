// Cliente MCP hacia el corpus jurídico chileno completo de leyes.pisanvs.cl
// (proyecto open source "ley-chile", que reconstruye ~333.000 normas desde
// la Biblioteca del Congreso Nacional, con historial de versiones).
//
// Esto es lo que le da a Juris IA Chile cobertura amplia: en vez de mantener
// nosotros un corpus manual, consultamos en vivo un servidor MCP público,
// gratuito y de solo lectura, que cubre prácticamente toda la legislación
// chilena.
//
// VERIFICADO en septiembre de 2026 contra el servidor real: la conexión
// funciona y los parámetros de abajo corresponden al esquema que el servidor
// declara. Para volver a comprobarlo en cualquier momento:
//
//   npm run diagnosticar-mcp
//
// Tres notas del esquema real que importan:
//
//   1. (tipo, número) NO identifica unívocamente una norma chilena — hay 75
//      "DFL 4", 227 "DFL 1" y 525 "DTO 1" de distintos organismos y años. El
//      identificador confiable es idNorma, que se obtiene de search_laws.
//   2. idNorma es un ENTERO en el esquema. Pasarlo como texto puede hacer
//      fallar la validación, así que se convierte siempre.
//   3. Casi todas las herramientas aceptan una fecha (asOf/fecha) para
//      trabajar sobre el texto vigente a un día determinado, no el de hoy.
//      Eso es lo que permite analizar hechos pasados con la norma de
//      entonces.

const { Client } = require("@modelcontextprotocol/sdk/client/index.js");
const { StreamableHTTPClientTransport } = require("@modelcontextprotocol/sdk/client/streamableHttp.js");

const MCP_URL = process.env.LEYCHILE_MCP_URL || "https://leyes.pisanvs.cl/api/mcp";
// 8 segundos era muy justo para una llamada de red real sobre un corpus
// de 333.000 normas. Configurable por si la conexión es lenta.
const TIMEOUT_MS = Number(process.env.MCP_TIMEOUT_MS || 15000);

let clientPromise = null;

function conectar() {
  if (!clientPromise) {
    clientPromise = (async () => {
      const client = new Client({ name: "juris-ia-chile", version: "0.1.0" });
      const transport = new StreamableHTTPClientTransport(new URL(MCP_URL));
      await client.connect(transport);
      return client;
    })().catch((err) => {
      clientPromise = null; // permite reintentar en la próxima llamada
      throw err;
    });
  }
  return clientPromise;
}

function conTimeout(promesa, ms, etiqueta) {
  return Promise.race([
    promesa,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`Tiempo de espera agotado (${etiqueta})`)), ms)
    ),
  ]);
}

async function llamarHerramienta(nombre, args) {
  const client = await conectar();
  const resultado = await conTimeout(
    client.callTool({ name: nombre, arguments: args }),
    TIMEOUT_MS,
    nombre
  );
  return resultado;
}

/** Extrae texto plano del resultado de una tool call MCP (content: [{type:"text", text}]). */
function extraerTexto(resultadoMcp) {
  if (!resultadoMcp?.content) return "";
  return resultadoMcp.content
    .filter((bloque) => bloque.type === "text")
    .map((bloque) => bloque.text)
    .join("\n");
}

/** Extrae y parsea JSON si el resultado viene como texto JSON; si no, retorna el texto crudo. */
function extraerJsonOTexto(resultadoMcp) {
  const texto = extraerTexto(resultadoMcp);
  try {
    return JSON.parse(texto);
  } catch {
    return texto;
  }
}

// El esquema declara idNorma como entero; normalizamos para no fallar la
// validación cuando viene como texto desde otra capa.
function comoIdNorma(valor) {
  const n = Number(valor);
  return Number.isFinite(n) ? n : undefined;
}

// Construye los argumentos identificando la norma por idNorma cuando se
// tiene (lo confiable), o por tipo+número como respaldo.
function identificar({ idNorma, tipo, numero }) {
  const args = {};
  const id = comoIdNorma(idNorma);
  if (id !== undefined) args.idNorma = id;
  else if (tipo && numero) { args.tipo = tipo; args.numero = String(numero); }
  return args;
}

/**
 * Busca normas relevantes para una consulta en lenguaje natural.
 * @param {string} query
 * @param {string} [asOf] Fecha AAAA-MM-DD: busca el texto vigente ese día.
 */
async function buscarLeyes(query, asOf) {
  const args = { query };
  if (asOf) args.asOf = asOf;
  const r = await llamarHerramienta("search_laws", args);
  return extraerJsonOTexto(r);
}

/**
 * Ubica los artículos relevantes DENTRO de una norma. Indispensable en
 * códigos largos, donde traer el texto completo es inviable.
 * @param {string} [fecha] Versión vigente a esa fecha.
 */
async function buscarArticulos(idNorma, query, fecha) {
  const args = { ...identificar({ idNorma }), query };
  if (fecha) args.fecha = fecha;
  const r = await llamarHerramienta("search_articles", args);
  return extraerJsonOTexto(r);
}

/** Texto de un artículo específico, opcionalmente en una fecha histórica. */
async function obtenerArticulo(idNorma, articulo, fecha) {
  const args = { ...identificar({ idNorma }), articulo };
  if (fecha) args.fecha = fecha;
  const r = await llamarHerramienta("get_article", args);
  return extraerJsonOTexto(r);
}

/** Metadatos + índice de artículos + historial de versiones de una norma. */
async function obtenerLey(idNorma, fecha) {
  const args = identificar({ idNorma });
  if (fecha) args.fecha = fecha;
  const r = await llamarHerramienta("get_law", args);
  return extraerJsonOTexto(r);
}

/**
 * Todas las versiones históricas de una norma: cada fecha en que su texto
 * cambió, y qué norma causó el cambio.
 *
 * Esto responde la pregunta de vigencia que el XML oficial de la BCN no
 * puede contestar: sabe CUÁNDO cambió un artículo, pero no POR QUÉ ley.
 */
async function listarVersiones(idNorma) {
  const r = await llamarHerramienta("list_versions", identificar({ idNorma }));
  return extraerJsonOTexto(r);
}

/**
 * Qué cambió en una norma entre dos fechas: artículos añadidos, eliminados
 * y modificados, con el diff palabra por palabra.
 *
 * Es la herramienta para "¿cómo se leía esta ley antes de la reforma?",
 * que en la práctica decide qué texto se aplica a un hecho determinado.
 */
async function compararVersiones(idNorma, desde, hasta) {
  const r = await llamarHerramienta("diff_versions", {
    ...identificar({ idNorma }),
    desde,
    hasta,
  });
  return extraerJsonOTexto(r);
}

/** Qué normas modificaron a esta, y a qué normas modificó ella. */
async function obtenerModificaciones(idNorma) {
  const r = await llamarHerramienta("get_modifications", identificar({ idNorma }));
  return extraerJsonOTexto(r);
}

/** Enlace estable al texto íntegro y sin recortar de una norma. */
async function obtenerEnlaceOficial(idNorma, asOf) {
  try {
    const args = identificar({ idNorma });
    if (asOf) args.asOf = asOf;
    const r = await llamarHerramienta("get_raw_link", args);
    return extraerTexto(r);
  } catch {
    return `https://www.bcn.cl/leychile/navegar?idNorma=${idNorma}`;
  }
}

async function listarHerramientas() {
  const client = await conectar();
  return client.listTools();
}

module.exports = {
  conectar,
  listarHerramientas,
  buscarLeyes,
  buscarArticulos,
  obtenerArticulo,
  obtenerLey,
  obtenerEnlaceOficial,
  listarVersiones,
  compararVersiones,
  obtenerModificaciones,
};
