// Combina el corpus completo remoto (leyes.pisanvs.cl, vía MCP) con el
// pequeño corpus local de ejemplo. El remoto manda cuando está disponible
// (cubre prácticamente toda la legislación chilena); el local queda como
// respaldo si el remoto falla o no encuentra nada, y como fuente de
// ejemplos verificados a mano.
//
// Velocidad: las normas se consultan EN PARALELO (antes era una tras otra),
// el enlace oficial se pide una vez por norma y no por artículo, y los
// resultados se guardan en caché. Si el tiempo total se agota, se usa lo
// que alcanzó a llegar en vez de descartarlo todo.

const path = require("path");
const fs = require("fs");
const mcp = require("./mcpLeyChile");
const leyChileOficial = require("./fuentes/leyChileOficial");
const { normalizarLeyes, normalizarArticulos } = require("./normalizadorMcp");
const { buscar: buscarLocal } = require("./search");
const { CacheTTL, claveDeTexto } = require("./cache");

const corpusLocal = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data", "corpus.json"), "utf-8")
);

// Cuanto material legal se recupera antes de redactar. Mas alto = respuestas
// mas completas (mas cuerpos legales revisados, mas articulos por cuerpo),
// a costa de un contexto mas grande para el modelo.
const MAX_NORMAS = Number(process.env.MAX_NORMAS || 5);
const MAX_ARTICULOS_POR_NORMA = Number(process.env.MAX_ARTICULOS_POR_NORMA || 4);
const MAX_DOCUMENTOS_REMOTOS = Number(process.env.MAX_DOCUMENTOS_REMOTOS || 14);
const TIMEOUT_TOTAL_MS = Number(process.env.TIMEOUT_BUSQUEDA_MS || 12000);
const CACHE_MINUTOS = Number(process.env.CACHE_BUSQUEDA_MINUTOS || 360);

const cacheBusquedas = new CacheTTL({ maximo: 400, ttlMs: CACHE_MINUTOS * 60 * 1000 });
const cacheEnlaces = new CacheTTL({ maximo: 2000, ttlMs: 24 * 60 * 60 * 1000 });

function enlaceOficial(idNorma) {
  return cacheEnlaces.recordar(String(idNorma), async () => {
    const enlace = (await mcp.obtenerEnlaceOficial(idNorma)).trim();
    return /^https?:\/\//.test(enlace) ? enlace : `https://www.bcn.cl/leychile/navegar?idNorma=${idNorma}`;
  });
}

// Documento de contexto a partir de un artículo completo de LeyChile.
function documentoDeArticulo(ley, art, fuenteUrl) {
  return {
    cuerpo_legal: ley.titulo,
    articulo: art.numero ? `Artículo ${art.numero}` : "(artículo no identificado)",
    tema: ley.titulo,
    texto: leyChileOficial.limpiarNotasMargen(art.texto),
    completo: true, // texto íntegro del artículo desde el corpus completo
    nota: null,
    fuente_url: art.url || fuenteUrl,
    vigencia: art.vigencia || null,
    origen: "remoto",
    idNorma: ley.idNorma,
    numero: art.numero || null,
  };
}

async function documentosDeNorma(ley, pregunta, maxArticulos = MAX_ARTICULOS_POR_NORMA) {
  const encontrados = await mcp.buscarArticulos(ley.idNorma, pregunta);
  // search_articles entrega solo fragmentos: se pide el texto íntegro de cada
  // artículo (del XML oficial de la BCN cuando está disponible), porque un
  // fragmento no sirve para citar ni para razonar.
  const numeros = [...new Set(encontrados.filter((a) => a.numero).map((a) => a.numero))].slice(0, maxArticulos);
  return traerArticulos(ley, numeros);
}

/**
 * Consulta las normas en paralelo. Devuelve { documentos, agotado }: si el
 * tiempo se acaba, entrega las normas que ya respondieron (en el orden de
 * relevancia de search_laws) en vez de nada.
 */
async function buscarEnCorpusRemoto(pregunta) {
  const inicio = Date.now();
  const leyes = normalizarLeyes(await mcp.buscarLeyes(pregunta)).slice(0, MAX_NORMAS);
  const porNorma = new Array(leyes.length).fill(null);

  const tareas = leyes.map((ley, i) =>
    documentosDeNorma(ley, pregunta)
      .then((docs) => { porNorma[i] = docs; })
      .catch((err) => {
        porNorma[i] = [];
        console.warn(`No se pudo obtener artículos de idNorma=${ley.idNorma}:`, err.message);
      })
  );

  const restante = Math.max(1000, TIMEOUT_TOTAL_MS - (Date.now() - inicio));
  let temporizador;
  const agotado = await Promise.race([
    Promise.all(tareas).then(() => false),
    new Promise((resolve) => { temporizador = setTimeout(() => resolve(true), restante); }),
  ]);
  clearTimeout(temporizador);

  const documentos = porNorma.filter(Boolean).flat().slice(0, MAX_DOCUMENTOS_REMOTOS);
  return { documentos, agotado };
}

async function buscarSinCache(pregunta, limite) {
  let documentosRemotos = [];
  let remotoDisponible = true;
  let remotoError = null;

  if (process.env.USAR_CORPUS_REMOTO === "false") {
    remotoDisponible = false;
    remotoError = "Corpus remoto desactivado por configuración (USAR_CORPUS_REMOTO=false).";
  } else {
    try {
      let temporizador;
      const resultado = await Promise.race([
        buscarEnCorpusRemoto(pregunta),
        new Promise((resolve) => { temporizador = setTimeout(() => resolve(null), TIMEOUT_TOTAL_MS + 1500); }),
      ]);
      clearTimeout(temporizador);
      if (!resultado || (resultado.agotado && resultado.documentos.length === 0)) {
        remotoDisponible = false;
        remotoError = "Tiempo de espera agotado consultando el corpus completo remoto.";
      } else {
        documentosRemotos = resultado.documentos;
      }
    } catch (err) {
      remotoDisponible = false;
      remotoError = err.message;
      console.warn("Corpus remoto no disponible, usando solo corpus local:", err.message);
    }
  }

  // El corpus local (unos pocos ejemplos curados) es solo un respaldo: se
  // usa únicamente si el corpus completo no respondió o no encontró nada.
  // Mezclarlo siempre metía artículos ajenos a la consulta.
  const usarLocal = !remotoDisponible || documentosRemotos.length === 0;
  const documentosLocales = usarLocal
    ? buscarLocal(corpusLocal, pregunta, limite).map((doc) => ({ ...doc, origen: "local" }))
    : [];

  const documentos = [...documentosRemotos, ...documentosLocales].slice(0, limite);

  return { documentos, remotoDisponible, remotoError };
}

/**
 * Busca documentos relevantes combinando el corpus remoto completo y el
 * corpus local de ejemplo. Nunca lanza: si el remoto falla, simplemente
 * devuelve remotoDisponible=false y usa solo el corpus local.
 *
 * Solo se cachean las búsquedas en que el corpus remoto respondió, para no
 * quedar pegados a un resultado degradado por una caída momentánea.
 */
async function buscarContexto(pregunta, limite = 6) {
  const clave = `${limite}|${claveDeTexto(pregunta)}`;
  const resultado = await cacheBusquedas.recordar(clave, () => buscarSinCache(pregunta, limite), {
    guardarSi: (r) => r.remotoDisponible,
  });
  return { ...resultado, documentos: resultado.documentos.map((d) => ({ ...d })) };
}

// Códigos principales, con su idNorma de LeyChile: el buscador por nombre a
// veces devuelve primero una ley modificatoria en vez del código mismo.
const CODIGOS = {
  "codigo civil": { idNorma: 172986, tipo: "dfl", numero: "1", titulo: "Código Civil" },
  "codigo de procedimiento civil": { idNorma: 22740, tipo: "ley", numero: "1552", titulo: "Código de Procedimiento Civil" },
  "codigo del trabajo": { idNorma: 207436, tipo: "dfl", numero: "1", titulo: "Código del Trabajo" },
  "codigo penal": { idNorma: 1984, tipo: "cod", numero: "PENAL", titulo: "Código Penal" },
  "codigo procesal penal": { idNorma: 176595, tipo: "ley", numero: "19696", titulo: "Código Procesal Penal" },
  "codigo de comercio": { idNorma: 1974, tipo: "cod", numero: "DE COMERCIO", titulo: "Código de Comercio" },
  "codigo tributario": { idNorma: 6374, tipo: "dl", numero: "830", titulo: "Código Tributario" },
  // No está en el corpus alternativo: se usa solo la copia oficial local.
  "codigo organico de tribunales": { idNorma: 25563, tipo: "ley", numero: "7421", titulo: "Código Orgánico de Tribunales" },
  "constitucion politica de la republica": { idNorma: 242302, tipo: "dto", numero: "100", titulo: "Constitución Política de la República" },
};
// El servidor exige tipo y número para cada consulta: se registran los códigos.
Object.values(CODIGOS).forEach((c) => mcp.registrarNorma(c));

// idNorma de una norma nombrada ("Código de Procedimiento Civil"), según el
// primer resultado de search_laws. Se cachea: el nombre no cambia de norma.
const cacheNormasNombradas = new CacheTTL({ maximo: 200, ttlMs: 7 * 24 * 60 * 60 * 1000 });
function resolverNorma(nombre) {
  const conocido = CODIGOS[claveDeTexto(nombre).replace(/^(el|la)\s+/, "").replace(/\s+de chile$/, "")];
  if (conocido) return Promise.resolve(conocido);
  return cacheNormasNombradas.recordar(claveDeTexto(nombre), async () => {
    // "Ley 18.101 sobre arrendamiento": el buscador exige todas las palabras,
    // así que para una ley con número se busca solo "Ley 18.101" y se toma
    // exactamente esa ley (no una posterior que la modifica y la menciona).
    const numero = (String(nombre).match(/ley\s*(?:n[°º.]?\s*)?(\d{1,2}\.?\d{3})/i) || [])[1];
    if (numero) {
      const limpio = numero.replace(/\./g, "");
      const leyes = normalizarLeyes(await mcp.buscarLeyes(`Ley ${Number(limpio).toLocaleString("es-CL")}`));
      return leyes.find((l) => l.tipo === "ley" && String(l.numero).replace(/\D/g, "") === limpio) || null;
    }
    // Por nombre: solo si el título coincide; el buscador libre devuelve a
    // menudo normas sin relación (autos acordados, circulares).
    const leyes = normalizarLeyes(await mcp.buscarLeyes(nombre));
    const buscado = claveDeTexto(nombre);
    return leyes.find((l) => claveDeTexto(l.titulo).includes(buscado)) || null;
  }, { guardarSi: (ley) => Boolean(ley) });
}

/**
 * Busca artículos pertinentes DENTRO de normas indicadas por nombre (por
 * ejemplo, los códigos procesales que rigen un procedimiento). A diferencia
 * de buscarContexto, que deja al buscador elegir las normas, aquí se sabe de
 * antemano en qué cuerpo legal está la respuesta y se va directo a él.
 */
async function buscarEnNormasNombradas(nombres, consulta, maxArticulos = 8) {
  if (process.env.USAR_CORPUS_REMOTO === "false" || !nombres?.length) return [];
  const clave = `nombradas|${nombres.map(claveDeTexto).join(",")}|${maxArticulos}|${claveDeTexto(consulta)}`;
  return cacheBusquedas.recordar(clave, async () => {
    const porNorma = await Promise.all(
      nombres.slice(0, 3).map(async (nombre) => {
        try {
          const ley = await resolverNorma(nombre);
          return ley ? await documentosDeNorma(ley, consulta, maxArticulos) : [];
        } catch (err) {
          console.warn(`No se pudo consultar "${nombre}":`, err.message);
          return [];
        }
      })
    );
    return porNorma.flat();
  }, { guardarSi: (docs) => docs.length > 0 });
}

const TIMEOUT_OFICIAL_MS = Number(process.env.TIMEOUT_OFICIAL_MS || 10000);
// "700", "Artículo 700", "700 (DEL ART. 2)" → "700". En el DFL 1 que contiene
// el Código Civil, la BCN numera sus artículos "700 (DEL ART. 2)".
const DENTRO_DE_ART = /\(\s*del\s+art[íi]?c?u?l?o?\.?\s*\d+\s*\)/i;
const claveArticulo = (n) => String(n || "").toLowerCase().replace(DENTRO_DE_ART, "").replace(/art[íi]culo/g, "").replace(/[°º.\-]/g, " ").replace(/\s+/g, " ").trim();

// Copia local del texto oficial de los códigos grandes (data/codigos), que
// actualiza cada semana scripts/actualizar-codigos.js: su XML en la BCN es
// demasiado pesado para descargarlo en una consulta (54 MB el del CPC).
const copiasLocales = new Map();
function copiaLocal(idNorma) {
  if (!copiasLocales.has(idNorma)) {
    const archivo = path.join(__dirname, "data", "codigos", `${idNorma}.json`);
    let copia = null;
    try {
      if (fs.existsSync(archivo)) copia = JSON.parse(fs.readFileSync(archivo, "utf8"));
    } catch (err) {
      console.warn(`Copia local del idNorma ${idNorma} ilegible:`, err.message);
    }
    copiasLocales.set(idNorma, copia);
  }
  return copiasLocales.get(idNorma);
}

/** Norma completa desde el texto oficial de la BCN (copia local o XML con caché de 6 horas), o null. */
async function normaOficial(idNorma) {
  const local = copiaLocal(Number(idNorma));
  if (local) return local;
  let temporizador;
  try {
    return await Promise.race([
      leyChileOficial.obtenerNorma({ idNorma }),
      new Promise((resolve) => { temporizador = setTimeout(() => resolve(null), TIMEOUT_OFICIAL_MS); }),
    ]);
  } catch (err) {
    console.warn(`XML oficial de la BCN no disponible para idNorma=${idNorma}:`, err.message);
    return null;
  } finally {
    clearTimeout(temporizador);
  }
}

/**
 * Texto íntegro de varios artículos de una norma: primero desde el XML
 * oficial de la BCN (vigente, con fecha de versión y derogación); si la BCN no
 * responde o no trae el artículo, desde el corpus alternativo.
 */
async function traerArticulos(ley, articulos) {
  const oficial = await normaOficial(ley.idNorma);
  // Si dos artículos comparten número (los del DFL y los del Código que
  // contiene), manda el del Código: "700 (DEL ART. 2)".
  const indice = new Map();
  for (const a of (oficial?.articulos || []).filter((x) => !x.transitorio)) {
    const clave = claveArticulo(a.numero);
    const actual = indice.get(clave);
    // Manda el primer artículo "de dentro" (el Código viene primero en el DFL).
    if (!actual || (DENTRO_DE_ART.test(a.numero) && !DENTRO_DE_ART.test(actual.numero))) indice.set(clave, a);
  }
  const docs = await Promise.all(articulos.map(async (numero) => {
    const art = indice.get(claveArticulo(numero));
    if (art?.texto && art.texto.length >= 20) {
      return {
        ...documentoDeArticulo(ley, {
          numero: claveArticulo(art.numero) || numero,
          texto: leyChileOficial.limpiarNotasMargen(art.texto),
          vigencia: art.fechaVersion || oficial.fechaVersion,
          url: `https://www.bcn.cl/leychile/navegar?idNorma=${ley.idNorma}${art.idParte ? `&idParte=${art.idParte}` : ""}`,
        }),
        fuente: "BCN (XML oficial)",
        derogado: art.derogado || false,
        nota: art.derogado ? "Artículo DEROGADO según la BCN." : null,
      };
    }
    try {
      const alt = await mcp.obtenerArticulo(ley.idNorma, numero);
      if (!alt?.texto || alt.texto.length < 20) return null;
      const fuenteUrl = alt.url || await enlaceOficial(ley.idNorma).catch(() => `https://www.bcn.cl/leychile/navegar?idNorma=${ley.idNorma}`);
      return { ...documentoDeArticulo(ley, { ...alt, numero: alt.numero || numero }, fuenteUrl), fuente: "leyes.pisanvs.cl" };
    } catch (err) {
      console.warn(`No se pudo traer ${ley.titulo}, artículo ${numero}:`, err.message);
      return null;
    }
  }));
  return docs.filter(Boolean);
}

/**
 * Trae artículos exactos que el plan identificó como centrales para la
 * pregunta (por ejemplo, la definición legal de un concepto: "Código Civil,
 * artículo 700" para la posesión).
 *
 * Fuente principal: el XML OFICIAL de la BCN (texto vigente, fecha de versión
 * y derogación de cada artículo). Respaldo: el corpus de leyes.pisanvs.cl,
 * cuyo texto de algunos códigos está desactualizado (en el Código de
 * Procedimiento Civil trae plazos derogados), por eso nunca va primero.
 * @param {{norma: string, articulos: string[]}[]} pedidos
 */
async function buscarArticulosExactos(pedidos, maxTotal = 8) {
  if (process.env.USAR_CORPUS_REMOTO === "false" || !pedidos?.length) return [];
  let restantes = maxTotal;
  const porNorma = pedidos
    .map((p) => {
      const articulos = p.articulos.slice(0, Math.max(0, restantes));
      restantes -= articulos.length;
      return { ...p, articulos };
    })
    .filter((p) => p.articulos.length);

  const grupos = await Promise.all(porNorma.map(async ({ norma, articulos }) => {
    const clave = `exactos|${claveDeTexto(norma)}|${articulos.join(",")}`;
    return cacheBusquedas.recordar(clave, async () => {
      let ley;
      try {
        ley = await resolverNorma(norma);
      } catch (err) {
        console.warn(`No se pudo identificar "${norma}":`, err.message);
        return [];
      }
      if (!ley) return [];
      return traerArticulos(ley, articulos);
    }, { guardarSi: (docs) => docs.length > 0 });
  }));
  return grupos.flat();
}

module.exports = { buscarContexto, buscarEnNormasNombradas, buscarArticulosExactos, resolverNorma };
