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
    texto: art.texto,
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
  const [encontrados, fuenteUrl] = await Promise.all([
    mcp.buscarArticulos(ley.idNorma, pregunta),
    enlaceOficial(ley.idNorma).catch(() => `https://www.bcn.cl/leychile/navegar?idNorma=${ley.idNorma}`),
  ]);
  // search_articles entrega solo fragmentos: se pide el texto íntegro de cada
  // artículo, porque un fragmento no sirve para citar ni para razonar.
  const completos = await Promise.all(
    encontrados.filter((a) => a.numero).slice(0, maxArticulos).map(async (a) => {
      try {
        const art = await mcp.obtenerArticulo(ley.idNorma, a.numero);
        return art ? documentoDeArticulo(ley, art, fuenteUrl) : null;
      } catch (err) {
        console.warn(`No se pudo traer ${ley.titulo}, artículo ${a.numero}:`, err.message);
        return null;
      }
    })
  );
  return completos.filter(Boolean);
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

/**
 * Trae artículos exactos que el plan identificó como centrales para la
 * pregunta (por ejemplo, la definición legal de un concepto: "Código Civil,
 * artículo 700" para la posesión). El texto viene de la fuente oficial, así
 * que la respuesta puede citarlo; si el artículo no existe, simplemente no
 * se agrega nada.
 * @param {{norma: string, articulos: string[]}[]} pedidos
 */
async function buscarArticulosExactos(pedidos, maxTotal = 8) {
  if (process.env.USAR_CORPUS_REMOTO === "false" || !pedidos?.length) return [];
  const tareas = [];
  for (const { norma, articulos } of pedidos) {
    for (const numero of articulos) tareas.push({ norma, numero });
  }
  const docs = await Promise.all(
    tareas.slice(0, maxTotal).map(({ norma, numero }) =>
      cacheBusquedas.recordar(`exacto|${claveDeTexto(norma)}|${numero}`, async () => {
        const ley = await resolverNorma(norma);
        if (!ley) return null;
        const art = await mcp.obtenerArticulo(ley.idNorma, numero);
        if (!art?.texto || art.texto.length < 20) return null;
        const fuenteUrl = art.url || await enlaceOficial(ley.idNorma).catch(() => `https://www.bcn.cl/leychile/navegar?idNorma=${ley.idNorma}`);
        return documentoDeArticulo(ley, { ...art, numero: art.numero || numero }, fuenteUrl);
      }, { guardarSi: Boolean }).catch((err) => {
        console.warn(`No se pudo traer ${norma}, artículo ${numero}:`, err.message);
        return null;
      })
    )
  );
  return docs.filter(Boolean);
}

module.exports = { buscarContexto, buscarEnNormasNombradas, buscarArticulosExactos, resolverNorma };
