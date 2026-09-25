// Tribunal de Defensa de la Libre Competencia (TDLC).
//
// Adaptado de Responsa (https://github.com/djlarrix/Responsa, © 2026 Joaquín
// Larraín Guimoye, licencia MIT; ver THIRD_PARTY_NOTICES.md).
//
// El sitio del TDLC es WordPress y expone la API REST estándar con tipos
// propios (`tdlc-sentencias`, `tdlc-resoluciones`). El TÍTULO de cada fallo es
// un resumen sustantivo (quién demandó a quién y qué se resolvió); el texto
// solo está en PDF. El parámetro `search` de la API no funciona en estos
// tipos, así que el catálogo (unos cientos de documentos) se replica en
// caché y se busca en local.

const { pedir, aTextoPlano } = require("./http");
const { CacheTTL } = require("../../cache");

const BASE = process.env.TDLC_URL || "https://www.tdlc.cl/wp-json/wp/v2";

const COLECCIONES = {
  sentencias: { ruta: "tdlc-sentencias", nombre: "Sentencia", conducta: "conducta-sent", industria: "industria-sent" },
  resoluciones: { ruta: "tdlc-resoluciones", nombre: "Resolución", conducta: "conducta-resoluciones", industria: "industria-resoluciones" },
};

const cache = new CacheTTL({ maximo: 20, ttlMs: 24 * 60 * 60 * 1000 });

// Taxonomía id → nombre: la materia (p. ej. "Acuerdo o práctica concertada")
// vive aquí, no en el título, que nombra a las partes.
function terminos(taxonomia) {
  return cache.recordar(`tax:${taxonomia}`, async () => {
    const salida = [];
    for (let pagina = 1; pagina <= 5; pagina++) {
      const r = await pedir(`${BASE}/${taxonomia}?per_page=100&page=${pagina}&_fields=id,name`, {
        headers: { Accept: "application/json" }, timeoutMs: 20000, intentos: 2,
      });
      if (!r.ok) break;
      let j;
      try { j = JSON.parse(r.texto); } catch { break; }
      if (!Array.isArray(j) || !j.length) break;
      salida.push(...j.map((t) => [t.id, aTextoPlano(t.name)]));
      if (j.length < 100) break;
    }
    return new Map(salida);
  });
}

function catalogo(clave) {
  const col = COLECCIONES[clave];
  return cache.recordar(`cat:${clave}`, async () => {
    const [conductas, industrias] = await Promise.all([terminos(col.conducta), terminos(col.industria)]);
    const items = [];
    for (let pagina = 1; pagina <= 10; pagina++) {
      const campos = ["id", "date", "link", "title", col.conducta, col.industria].join(",");
      const r = await pedir(`${BASE}/${col.ruta}?per_page=100&page=${pagina}&orderby=date&order=desc&_fields=${campos}`, {
        headers: { Accept: "application/json" }, timeoutMs: 30000, intentos: 2,
      });
      if (!r.ok) {
        if (items.length) break;
        throw new Error(r.status ? `El sitio del TDLC respondió HTTP ${r.status}.` : `No se pudo conectar con el TDLC: ${r.texto}`);
      }
      let j;
      try { j = JSON.parse(r.texto); } catch { throw new Error("El TDLC no devolvió JSON: su sitio pudo cambiar."); }
      if (!Array.isArray(j)) throw new Error("El TDLC devolvió algo que no es una lista: su API cambió.");
      items.push(...j.map((x) => {
        const titulo = aTextoPlano((x.title && x.title.rendered) || "").trim();
        const m = titulo.match(/^((?:Sentencia|Resoluci[óo]n)\s*(?:N[°º]?\.?\s*)?[\d./-]+)\s*:?\s*(.*)$/i);
        const nombres = (ids, dic) => (Array.isArray(ids) ? ids : []).map((id) => dic.get(id)).filter(Boolean);
        return {
          identificador: m ? m[1].replace(/\s+/g, " ") : `${col.nombre} TDLC`,
          resumen: m ? m[2].trim() : titulo,
          fecha: String(x.date || "").slice(0, 10),
          conducta: nombres(x[col.conducta], conductas),
          industria: nombres(x[col.industria], industrias),
          url: x.link || null,
        };
      }));
      if (j.length < 100) break;
    }
    if (!items.length) throw new Error("El TDLC devolvió el catálogo vacío.");
    return items;
  });
}

const sinTildes = (t) => String(t || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

// Cómo lo dice un abogado → cómo lo clasifica el TDLC ("colusión" no existe
// para el tribunal: son "acuerdos o prácticas concertadas").
const SINONIMOS = [
  [/colusi[oó]n|cartel|carteles|reparto de mercado|fijaci[oó]n de precios/i, "acuerdo practica concertada"],
  [/fusi[oó]n|adquisici[oó]n de empresa|concentraci[oó]n/i, "operacion concentracion"],
  [/precios? predatorios?|predaci[oó]n/i, "practica predatoria"],
  [/abuso|posici[oó]n dominante|precios? abusivos?/i, "abuso posicion dominante"],
];

const VACIAS = new Set(["de", "del", "la", "las", "los", "el", "en", "por", "para", "con", "sobre", "que", "una", "uno", "libre", "competencia", "tdlc", "tribunal"]);

async function buscarTDLC({ consulta, limite = 2 }) {
  if (!String(consulta || "").trim()) throw new Error("Falta la consulta.");
  const todos = await catalogo("sentencias");
  const palabras = sinTildes(consulta).split(/[^a-z0-9ñ]+/).filter((t) => t.length >= 3 && !VACIAS.has(t));
  const extras = SINONIMOS.filter(([re]) => re.test(consulta)).flatMap(([, t]) => t.split(" "));
  const heno = (x) => sinTildes([x.identificador, x.resumen, ...x.conducta, ...x.industria].join(" "));

  const puntuados = todos
    .map((x) => {
      const h = heno(x);
      const directas = palabras.filter((w) => h.includes(w)).length;
      const vocabulario = extras.length && extras.every((w) => h.includes(w)) ? 3 : 0;
      return { x, puntos: directas + vocabulario };
    })
    // Debe calzar con la mayoría de los términos o con el vocabulario del tribunal.
    .filter((c) => c.puntos >= Math.max(1, Math.ceil(palabras.length * 0.6)) || c.puntos >= 3)
    .sort((a, b) => b.puntos - a.puntos || b.x.fecha.localeCompare(a.x.fecha))
    .slice(0, limite);

  return {
    total: todos.length,
    tribunal: "Tribunal de Defensa de la Libre Competencia",
    resultados: puntuados.map(({ x }) => ({
      fuente: "tdlc",
      id: x.url,
      tribunal: "Tribunal de Defensa de la Libre Competencia",
      rol: x.identificador,
      fecha: x.fecha,
      caratulado: "",
      tipo_recurso: x.conducta.join("; "),
      resultado: x.resumen,
      descriptores: x.industria.slice(0, 4),
      pasajes: [],
      texto: "",
      url: x.url,
    })),
  };
}

module.exports = { buscarTDLC };
