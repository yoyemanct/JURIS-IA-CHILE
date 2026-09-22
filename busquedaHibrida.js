// Combina el corpus completo remoto (leyes.pisanvs.cl, vía MCP) con el
// pequeño corpus local de ejemplo. El remoto manda cuando está disponible
// (cubre prácticamente toda la legislación chilena); el local queda como
// respaldo si el remoto falla o no encuentra nada, y como fuente de
// ejemplos verificados a mano.

const path = require("path");
const fs = require("fs");
const mcp = require("./mcpLeyChile");
const { normalizarLeyes, normalizarArticulos } = require("./normalizadorMcp");
const { buscar: buscarLocal } = require("./search");

const corpusLocal = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data", "corpus.json"), "utf-8")
);

// Cuanto material legal se recupera antes de redactar. Mas alto = respuestas
// mas completas (mas cuerpos legales revisados, mas articulos por cuerpo),
// a costa de consultas mas lentas y de un contexto mas grande para el modelo.
const MAX_NORMAS = Number(process.env.MAX_NORMAS || 5);
const MAX_ARTICULOS_POR_NORMA = Number(process.env.MAX_ARTICULOS_POR_NORMA || 4);
const MAX_DOCUMENTOS_REMOTOS = Number(process.env.MAX_DOCUMENTOS_REMOTOS || 14);
const TIMEOUT_TOTAL_MS = Number(process.env.TIMEOUT_BUSQUEDA_MS || 20000);

function conTimeout(promesa, ms) {
  return Promise.race([
    promesa,
    new Promise((resolve) => setTimeout(() => resolve({ _timeout: true }), ms)),
  ]);
}

async function buscarEnCorpusRemoto(pregunta) {
  const leyes = normalizarLeyes(await mcp.buscarLeyes(pregunta));
  const documentos = [];

  for (const ley of leyes.slice(0, MAX_NORMAS)) {
    if (documentos.length >= MAX_DOCUMENTOS_REMOTOS) break;
    try {
      const articulosCrudo = await mcp.buscarArticulos(ley.idNorma, pregunta);
      const articulos = normalizarArticulos(articulosCrudo).slice(0, MAX_ARTICULOS_POR_NORMA);

      for (const art of articulos) {
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
        if (!texto) continue;

        let fuenteUrl;
        try {
          fuenteUrl = await mcp.obtenerEnlaceOficial(ley.idNorma);
        } catch {
          fuenteUrl = `https://www.bcn.cl/leychile/navegar?idNorma=${ley.idNorma}`;
        }

        documentos.push({
          cuerpo_legal: ley.titulo,
          articulo: art.numero ? `Artículo ${art.numero}` : "(artículo no identificado)",
          tema: ley.titulo,
          texto,
          completo: true, // viene del corpus reconstruido completo, no de un extracto manual
          nota: null,
          fuente_url: fuenteUrl,
          origen: "remoto",
        });
      }
    } catch (err) {
      console.warn(`No se pudo obtener artículos de idNorma=${ley.idNorma}:`, err.message);
    }
  }

  return documentos;
}

/**
 * Busca documentos relevantes combinando el corpus remoto completo y el
 * corpus local de ejemplo. Nunca lanza: si el remoto falla, simplemente
 * devuelve remotoDisponible=false y usa solo el corpus local.
 */
async function buscarContexto(pregunta, limite = 6) {
  let documentosRemotos = [];
  let remotoDisponible = true;
  let remotoError = null;

  if (process.env.USAR_CORPUS_REMOTO === "false") {
    remotoDisponible = false;
    remotoError = "Corpus remoto desactivado por configuración (USAR_CORPUS_REMOTO=false).";
  } else {
    try {
      const resultado = await conTimeout(buscarEnCorpusRemoto(pregunta), TIMEOUT_TOTAL_MS);
      if (resultado?._timeout) {
        remotoDisponible = false;
        remotoError = "Tiempo de espera agotado consultando el corpus completo remoto.";
      } else {
        documentosRemotos = resultado;
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

module.exports = { buscarContexto };
