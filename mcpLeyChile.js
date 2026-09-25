// Cliente MCP hacia el corpus jurídico chileno completo de leyes.pisanvs.cl
// (proyecto open source "ley-chile", que reconstruye ~333.000 normas desde
// la Biblioteca del Congreso Nacional, con historial de versiones).
//
// Esto es lo que le da a Derecho Chile IA cobertura amplia: en vez de mantener
// nosotros un corpus manual, consultamos en vivo un servidor MCP público,
// gratuito y de solo lectura, que cubre prácticamente toda la legislación
// chilena.
//
// Esquema y formato REALES del servidor (verificados en septiembre de 2026
// con scripts/inspeccionar-mcp.js, que corre en cada evaluación):
//
//   1. Todas las herramientas sobre una norma EXIGEN tipo y número ("ley",
//      "18101"; el tipo en minúsculas). idNorma es opcional y desambigua
//      (hay 227 "DFL 1"), así que se envían los tres. idNorma es entero.
//   2. Las respuestas son TEXTO, no JSON: search_laws entrega líneas
//      "- LEY 18101 · ORGANISMO — TÍTULO" + "idNorma: N · url"; get_article
//      entrega un encabezado, "Artículo 1° · vigente al AAAA-MM-DD", el
//      enlace y el texto; search_articles, bloques "## Artículo N" con un
//      fragmento. Aquí se convierten a objetos.
//   3. Los errores llegan como resultado con isError (no como excepción):
//      se lanzan como error para que nunca se confundan con el texto de un
//      artículo. "No se encontró…" significa que el artículo no existe.
//   4. La búsqueda libre de search_laws es débil para temas en lenguaje
//      natural; por eso articulosClave.js va directo a los artículos.

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
      const client = new Client({ name: "derecho-chile-ia", version: "0.1.0" });
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

async function llamarHerramienta(nombre, args, reintento = true) {
  const client = await conectar();
  let r;
  try {
    r = await conTimeout(client.callTool({ name: nombre, arguments: args }), TIMEOUT_MS, nombre);
  } catch (err) {
    // La sesión MCP puede expirar si la instancia estuvo inactiva (pasa en
    // Vercel): se descarta la conexión y se reintenta una vez con una nueva.
    if (!reintento || /Tiempo de espera/.test(err.message)) throw err;
    clientPromise = null;
    client.close?.().catch?.(() => {});
    return llamarHerramienta(nombre, args, false);
  }
  if (r?.isError) throw new Error(`${nombre}: ${extraerTexto(r).slice(0, 300)}`);
  return r;
}

/** Extrae texto plano del resultado de una tool call MCP (content: [{type:"text", text}]). */
function extraerTexto(resultadoMcp) {
  if (!resultadoMcp?.content) return "";
  return resultadoMcp.content
    .filter((bloque) => bloque.type === "text")
    .map((bloque) => bloque.text)
    .join("\n");
}

// --- Identificación de normas ----------------------------------------------
// idNorma → { tipo, numero, titulo }. Se llena con cada búsqueda y con las
// normas conocidas de abajo, para poder pedir artículos solo con idNorma.
const registro = new Map();

// Normas que la app usa directamente (mapa de artículos clave).
const CONOCIDAS = [
  { idNorma: 29526, tipo: "ley", numero: "18101", titulo: "Ley 18.101, sobre arrendamiento de predios urbanos" },
  { idNorma: 61438, tipo: "ley", numero: "19496", titulo: "Ley 19.496, sobre protección de los derechos de los consumidores" },
  { idNorma: 27977, tipo: "ley", numero: "14908", titulo: "Ley 14.908, sobre abandono de familia y pago de pensiones alimenticias" },
  { idNorma: 229557, tipo: "ley", numero: "19968", titulo: "Ley 19.968, que crea los Tribunales de Familia" },
  { idNorma: 225128, tipo: "ley", numero: "19947", titulo: "Ley 19.947, de Matrimonio Civil" },
  { idNorma: 215613, tipo: "ley", numero: "19903", titulo: "Ley 19.903, sobre posesión efectiva de la herencia" },
  { idNorma: 29517, tipo: "ley", numero: "18092", titulo: "Ley 18.092, sobre letra de cambio y pagaré" },
];

function registrarNorma(norma) {
  const id = Number(norma?.idNorma);
  if (!Number.isFinite(id) || !norma.tipo || !norma.numero) return;
  registro.set(id, { ...registro.get(id), ...norma, idNorma: id, tipo: String(norma.tipo).toLowerCase() });
}
CONOCIDAS.forEach(registrarNorma);

function normaRegistrada(idNorma) {
  return registro.get(Number(idNorma)) || null;
}

// Construye los argumentos que exige el servidor: tipo, número e idNorma.
function identificar({ idNorma, tipo, numero }) {
  const conocida = normaRegistrada(idNorma);
  const t = tipo || conocida?.tipo;
  const n = numero || conocida?.numero;
  if (!t || !n) throw new Error(`No se conoce el tipo y número de la norma ${idNorma}; búscala primero con search_laws.`);
  const args = { tipo: String(t).toLowerCase(), numero: String(n) };
  const id = Number(idNorma);
  if (Number.isFinite(id)) args.idNorma = id;
  return args;
}

const NOMBRE_TIPO = { ley: "Ley", dfl: "DFL", dl: "DL", dto: "Decreto", cod: "Código", res: "Resolución", aa: "Auto acordado" };
const conPuntos = (n) => (/^\d{4,}$/.test(n) ? Number(n).toLocaleString("es-CL") : n);
const frase = (t) => (t ? t.charAt(0).toUpperCase() + t.slice(1).toLowerCase() : t);

/** Convierte el texto de search_laws en [{ idNorma, tipo, numero, organismo, titulo, url }]. */
function parsearBusquedaLeyes(texto) {
  const leyes = [];
  for (const bloque of String(texto || "").split(/\n(?=- )/)) {
    const m = bloque.match(/^- (.+?) · (.+?) — ([\s\S]*?)\n\s*idNorma: (\d+)(?: · (\S+))?/);
    if (!m) continue;
    const [tipoCrudo, ...resto] = m[1].trim().split(/\s+/);
    const tipo = tipoCrudo.toLowerCase();
    const numero = resto.join(" ");
    const nombre = m[3].replace(/\s*\n\s*/g, " ").trim();
    const titulo = tipo === "cod"
      ? frase(nombre)
      : `${NOMBRE_TIPO[tipo] || tipoCrudo} ${conPuntos(numero)}${nombre ? `, ${nombre.toLowerCase()}` : ""}`;
    const ley = { idNorma: Number(m[4]), tipo, numero, organismo: m[2].trim(), titulo, url: m[5] || null };
    registrarNorma(ley);
    leyes.push(ley);
  }
  return leyes;
}

const limpiarHtml = (t) => String(t || "").replace(/<\/?b>/g, "").replace(/<[^>]+>/g, "");
const numeroDeEtiqueta = (etiqueta) => String(etiqueta || "")
  .replace(/^art[íi]culo\s*/i, "")
  .replace(/[°º.]/g, "")
  .replace(/\s+/g, " ")
  .trim();

/** Convierte el texto de get_article en { numero, texto, vigencia, url } o null si no existe. */
function parsearArticulo(texto) {
  const t = String(texto || "").trim();
  if (!t || /^No se encontr/i.test(t)) return null;
  const lineas = t.split("\n");
  const cabecera = lineas.findIndex((l) => /^Art[íi]culo\b.*·\s*vigente/i.test(l) || /^Art[íi]culo\b/i.test(l));
  if (cabecera === -1) return { numero: null, texto: t, vigencia: null, url: null };
  const m = lineas[cabecera].match(/^(Art[íi]culo[^·]*?)\s*(?:·\s*vigente al\s*(\S+))?$/i);
  let i = cabecera + 1;
  let url = null;
  if (/^https?:\/\//.test(lineas[i] || "")) url = lineas[i++].trim();
  const cuerpo = lineas.slice(i).join("\n").trim();
  return { numero: numeroDeEtiqueta(m ? m[1] : lineas[cabecera]), texto: cuerpo, vigencia: m?.[2] || null, url };
}

/** Convierte el texto de search_articles en [{ numero, texto (fragmento), url }]. */
function parsearBusquedaArticulos(texto) {
  const resultados = [];
  for (const bloque of String(texto || "").split(/\n(?=## )/)) {
    const m = bloque.match(/^## (Art[íi]culo[^\n]*)\n(?:(https?:\/\/\S+)\n)?([\s\S]*)$/i);
    if (!m) continue;
    resultados.push({ numero: numeroDeEtiqueta(m[1]), texto: limpiarHtml(m[3]).trim(), url: m[2] || null });
  }
  return resultados;
}

// --- Herramientas -----------------------------------------------------------

/**
 * Busca normas por texto. Devuelve [{ idNorma, tipo, numero, organismo, titulo, url }].
 * @param {string} query
 * @param {string} [asOf] Fecha AAAA-MM-DD: busca el texto vigente ese día.
 */
async function buscarLeyes(query, asOf) {
  const args = { query };
  if (asOf) args.asOf = asOf;
  const r = await llamarHerramienta("search_laws", args);
  return parsearBusquedaLeyes(extraerTexto(r));
}

/**
 * Ubica los artículos relevantes DENTRO de una norma. Devuelve fragmentos
 * cortos: para el texto completo hay que pedir cada artículo.
 */
async function buscarArticulos(idNorma, query, fecha) {
  const args = { ...identificar({ idNorma }), query };
  if (fecha) args.fecha = fecha;
  const r = await llamarHerramienta("search_articles", args);
  return parsearBusquedaArticulos(extraerTexto(r));
}

/**
 * Texto completo de un artículo, o null si no existe. Acepta "700", "50 A",
 * "18-A" o "Artículo 700": prueba las formas que usa el servidor.
 */
async function obtenerArticulo(idNorma, articulo, fecha) {
  const base = numeroDeEtiqueta(articulo);
  const variantes = [...new Set([base, `articulo ${base}`, `articulo ${base.replace(/[\s-]+/g, " ").toLowerCase()}`, `articulo ${base.replace(/[\s-]+/g, "-").toLowerCase()}`])];
  for (const variante of variantes) {
    const args = { ...identificar({ idNorma }), articulo: variante };
    if (fecha) args.fecha = fecha;
    const art = parsearArticulo(extraerTexto(await llamarHerramienta("get_article", args)));
    if (art?.texto) return { ...art, numero: art.numero || base };
  }
  return null;
}

/** Metadatos + índice de artículos + historial de versiones de una norma (texto). */
async function obtenerLey(idNorma, fecha) {
  const args = identificar({ idNorma });
  if (fecha) args.fecha = fecha;
  return extraerTexto(await llamarHerramienta("get_law", args));
}

/**
 * Todas las versiones históricas de una norma: cada fecha en que su texto
 * cambió, y qué norma causó el cambio.
 */
async function listarVersiones(idNorma) {
  return extraerTexto(await llamarHerramienta("list_versions", identificar({ idNorma })));
}

/** Qué cambió en una norma entre dos fechas. */
async function compararVersiones(idNorma, desde, hasta) {
  return extraerTexto(await llamarHerramienta("diff_versions", { ...identificar({ idNorma }), desde, hasta }));
}

/** Qué normas modificaron a esta, y a qué normas modificó ella. */
async function obtenerModificaciones(idNorma) {
  return extraerTexto(await llamarHerramienta("get_modifications", identificar({ idNorma })));
}

/** Enlace a la página legible de la norma (o a LeyChile si falla). */
async function obtenerEnlaceOficial(idNorma, asOf) {
  try {
    const args = identificar({ idNorma });
    if (asOf) args.asOf = asOf;
    const texto = extraerTexto(await llamarHerramienta("get_raw_link", args));
    const m = texto.match(/P[áa]gina legible:\s*(https?:\/\/\S+)/i);
    return m ? m[1] : `https://www.bcn.cl/leychile/navegar?idNorma=${idNorma}`;
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
  registrarNorma,
  normaRegistrada,
  parsearBusquedaLeyes,
  parsearArticulo,
  parsearBusquedaArticulos,
};
