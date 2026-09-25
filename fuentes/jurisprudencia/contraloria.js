// Contraloría General de la República — dictámenes (jurisprudencia
// administrativa).
//
// Adaptado de Responsa (https://github.com/djlarrix/Responsa, © 2026 Joaquín
// Larraín Guimoye, licencia MIT; ver THIRD_PARTY_NOTICES.md). La base es una
// aplicación Lotus Domino: aunque el formulario declara method="post", la
// consulta real es GET sobre `FormConsultaWeb2k?OpenForm&...&hpbb=SI`.
// Responde en Latin-1.

const { pedir, aTextoPlano } = require("./http");
const { CacheTTL } = require("../../cache");

const BASE = process.env.CGR_URL || "https://www.contraloria.cl/appinf/LegisJuri/DictamenesGeneralesMunicipales.nsf/";
const cache = new CacheTTL({ maximo: 200, ttlMs: 24 * 60 * 60 * 1000 });

async function buscarDictamenes({ texto, limite = 2 }) {
  if (!String(texto || "").trim()) throw new Error("Falta el texto de búsqueda de dictámenes.");
  const tope = Math.min(Math.max(limite, 1), 20);
  return cache.recordar(`${texto}|${tope}`, async () => {
    const q =
      "FormConsultaWeb2k?OpenForm" +
      `&TextoLibre=${encodeURIComponent(texto)}` +
      "&NumeroDictamen=&Materia=Cualquiera&FechaDesde=&FechaHasta=" +
      `&desde=1&dpp=&porPagina=${tope}&Orden=1&hpbb=SI`;
    const res = await pedir(BASE + q, {
      headers: { Referer: BASE },
      codificacion: "latin1",
      timeoutMs: Number(process.env.CGR_TIMEOUT_MS || 20000),
      intentos: 1,
    });
    if (!res.ok) {
      throw new Error(res.status ? `Contraloría respondió HTTP ${res.status}.` : `No se pudo conectar con Contraloría: ${res.texto}`);
    }
    const html = res.texto;

    if (!/Se han encontrado/i.test(html)) {
      throw new Error("Contraloría no devolvió una página de resultados (no se puede concluir que no haya dictámenes).");
    }
    const total = Number(((html.match(/Se han encontrado\s*([\d.]+)\s*dict/i) || [])[1] || "0").replace(/\./g, ""));

    // Cada fila: <tr id="UNID"> nº | fecha | identificador | descriptores
    const resultados = [];
    const re = /<tr id="([0-9A-F]{32})"[^>]*>([\s\S]*?)<\/tr>/gi;
    let m;
    while ((m = re.exec(html)) && resultados.length < tope) {
      const celdas = [...m[2].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((c) => aTextoPlano(c[1]));
      if (celdas.length < 4) continue;
      resultados.push({
        fuente: "cgr",
        id: m[1],
        tribunal: "Contraloría General de la República",
        rol: celdas[2] ? `Dictamen ${celdas[2]}` : "",
        fecha: celdas[1],
        caratulado: "",
        resultado: "",
        descriptores: celdas[3] ? celdas[3].split(/[,;]\s*/).filter(Boolean).slice(0, 8) : [],
        pasajes: [],
        // Los descriptores ya van en su campo: repetirlos como texto duplica.
        texto: "",
        url: `${BASE}cgrDetalleDictamenNVDA?OpenForm&UNID=${m[1]}`,
      });
    }
    return { total, tribunal: "Contraloría General de la República", resultados };
  }, { guardarSi: (r) => r.resultados.length > 0 });
}

module.exports = { buscarDictamenes };
