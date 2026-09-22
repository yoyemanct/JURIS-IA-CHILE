// Cliente MCP hacia el corpus jurídico chileno completo de leyes.pisanvs.cl
// (proyecto open source "ley-chile", que reconstruye ~333.000 normas desde
// la Biblioteca del Congreso Nacional, con historial de versiones).
//
// Esto es lo que le da a Lexchile cobertura "lo más completa posible":
// en vez de mantener nosotros un corpus manual, consultamos en vivo un
// servidor MCP público, gratuito y de solo lectura, que ya cubre
// prácticamente toda la legislación chilena.
//
// IMPORTANTE — léelo antes de asumir que esto funciona sin revisión:
// Este módulo fue escrito sin poder probarlo en vivo (el entorno donde se
// generó este código tiene la red restringida a una lista blanca de
// dominios y no podía llamar a leyes.pisanvs.cl). Los nombres de
// herramientas y parámetros están tomados de la documentación pública del
// proyecto (https://leyes.pisanvs.cl/llms.txt), pero podrían no calzar al
// 100% si el servidor cambió algo. Antes de confiar en esta integración:
//
//   node scripts/probar-mcp.js
//
// Ese script se conecta, imprime las herramientas reales que expone el
// servidor (con sus parámetros exactos) y hace una búsqueda de prueba.
// Si algo no calza, ajusta los nombres de parámetros más abajo.

const { Client } = require("@modelcontextprotocol/sdk/client/index.js");
const { StreamableHTTPClientTransport } = require("@modelcontextprotocol/sdk/client/streamableHttp.js");

const MCP_URL = process.env.LEYCHILE_MCP_URL || "https://leyes.pisanvs.cl/api/mcp";
const TIMEOUT_MS = 8000;

let clientPromise = null;

function conectar() {
  if (!clientPromise) {
    clientPromise = (async () => {
      const client = new Client({ name: "lexchile-app", version: "0.1.0" });
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

/**
 * Busca normas (leyes/decretos) relevantes para una consulta en lenguaje natural.
 * Devuelve lo que el servidor entregue (normalmente una lista de normas candidatas
 * con idNorma, tipo, número, título, organismo).
 */
async function buscarLeyes(query) {
  const r = await llamarHerramienta("search_laws", { query });
  return extraerJsonOTexto(r);
}

/**
 * Dentro de una norma específica (idNorma), ubica los artículos relevantes
 * para la consulta. Útil para normas largas (códigos completos).
 */
async function buscarArticulos(idNorma, query) {
  const r = await llamarHerramienta("search_articles", { idNorma, query });
  return extraerJsonOTexto(r);
}

/** Texto de un artículo específico, opcionalmente en una fecha histórica. */
async function obtenerArticulo(idNorma, articulo, fecha) {
  const args = { idNorma, articulo };
  if (fecha) args.fecha = fecha;
  const r = await llamarHerramienta("get_article", args);
  return extraerJsonOTexto(r);
}

/** Metadata + índice de artículos + historial de versiones de una norma. */
async function obtenerLey(idNorma) {
  const r = await llamarHerramienta("get_law", { idNorma });
  return extraerJsonOTexto(r);
}

/** Enlace "crudo" (oficial / canónico) hacia la norma, para citar la fuente. */
async function obtenerEnlaceOficial(idNorma) {
  try {
    const r = await llamarHerramienta("get_raw_link", { idNorma });
    return extraerTexto(r);
  } catch {
    // Si la herramienta no existe o falla, al menos dejamos un enlace de búsqueda en BCN.
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
};
