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

async function documentosDeNorma(ley, pregunta, maxArticulos = MAX_ARTICULOS_POR_NORMA) {
  const [articulosCrudo, fuenteUrl] = await Promise.all([
    mcp.buscarArticulos(ley.idNorma, pregunta),
    enlaceOficial(ley.idNorma).catch(() => `https://www.bcn.cl/leychile/navegar?idNorma=${ley.idNorma}`),
  ]);
  const articulos = normalizarArticulos(articulosCrudo).slice(0, maxArticulos);

  const completos = await Promise.all(
    articulos.map(async (art) => {
      let texto = art.texto;
      // Si search_articles solo entrega un fragmento corto o nada, pedimos el artículo completo.
      if ((!texto || texto.length < 60) && art.numero) {
        try {
          const completo = normalizarArticulos(await mcp.obtenerArticulo(ley.idNorma, art.numero));
          if (completo[0]?.texto) texto = completo[0].texto;
        } catch {
          // Si falla, nos quedamos con lo que ya teníamos (puede ser vacío).
        }
      }
      if (!texto) return null;
      return {
        cuerpo_legal: ley.titulo,
        articulo: art.numero ? `Artículo ${art.numero}` : "(artículo no identificado)",
        tema: ley.titulo,
        texto,
        completo: true, // viene del corpus reconstruido completo, no de un extracto manual
        nota: null,
        fuente_url: fuenteUrl,
        origen: "remoto",
        idNorma: ley.idNorma,
        numero: art.numero || null,
      };
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

  const documentosLocales = buscarLocal(corpusLocal, pregunta, limite).map((doc) => ({
    ...doc,
    origen: "local",
  }));

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

// idNorma de una norma nombrada ("Código de Procedimiento Civil"), según el
// primer resultado de search_laws. Se cachea: el nombre no cambia de norma.
const cacheNormasNombradas = new CacheTTL({ maximo: 200, ttlMs: 7 * 24 * 60 * 60 * 1000 });
function resolverNorma(nombre) {
  return cacheNormasNombradas.recordar(claveDeTexto(nombre), async () => {
    const leyes = normalizarLeyes(await mcp.buscarLeyes(nombre));
    return leyes[0] || null;
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

module.exports = { buscarContexto, buscarEnNormasNombradas };
