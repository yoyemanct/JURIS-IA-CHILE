// Doctrina académica chilena de acceso abierto: Crossref para el catálogo,
// OpenAlex para confirmar el acceso libre. Dos APIs públicas, sin clave.
//
// Adaptado de Responsa (https://github.com/djlarrix/Responsa, © 2026 Joaquín
// Larraín Guimoye, licencia MIT; ver THIRD_PARTY_NOTICES.md).
//
// La regla: un artículo se entrega solo si quien lea el informe puede abrirlo
// completo, gratis, ahora. Por eso se exige (1) DOI válido, (2) acceso abierto
// declarado por OpenAlex con un enlace concreto, y (3) que ese enlace
// responda. Manuales y tratados con derechos de autor quedan fuera por
// diseño: citar lo que el lector no puede comprobar es lo que esta
// herramienta existe para evitar.

const { pedir } = require("./jurisprudencia/http");
const { CacheTTL } = require("../cache");

const CORREO = process.env.CROSSREF_MAILTO || "juris-ia-chile@example.org";
const CROSSREF = process.env.CROSSREF_URL || "https://api.crossref.org";
const OPENALEX = process.env.OPENALEX_URL || "https://api.openalex.org";
const TIMEOUT_MS = Number(process.env.DOCTRINA_TIMEOUT_MS || 12000);

// Revistas jurídicas chilenas indexadas en Crossref (ISSN verificados por
// Responsa contra api.crossref.org el 07-sep-2026). Restringir a esta lista
// evita que "cláusulas abusivas" traiga doctrina colombiana o española.
const REVISTAS = [
  { issn: "0718-3437", nombre: "Revista Chilena de Derecho (PUC)" },
  { issn: "0716-0747", nombre: "Revista Chilena de Derecho (PUC, serie impresa)" },
  { issn: "0718-0012", nombre: "Ius et Praxis (U. de Talca)" },
  { issn: "0718-0950", nombre: "Revista de Derecho (Valdivia, UACh)" },
  { issn: "0718-5200", nombre: "Estudios Constitucionales (U. de Talca)" },
  { issn: "0718-0233", nombre: "Revista Chilena de Derecho Privado (UDP)" },
  { issn: "0718-0853", nombre: "Revista de Estudios de la Justicia (U. de Chile)" },
  { issn: "0719-0093", nombre: "Revista Chilena de Derecho del Trabajo y de la Seguridad Social (U. de Chile)" },
  { issn: "0718-2457", nombre: "Ars Boni et Aequi (UBO)" },
  { issn: "0718-9753", nombre: "Revista de Derecho (Coquimbo, UCN)" },
  { issn: "0716-5455", nombre: "Revista de Estudios Histórico-Jurídicos (PUCV)" },
  { issn: "0719-5249", nombre: "Revista de Derecho Público (U. de Chile)" },
  { issn: "0718-2279", nombre: "Anuario de Derechos Humanos (U. de Chile)" },
  { issn: "0718-3399", nombre: "Política Criminal" },
  { issn: "0718-9389", nombre: "Revista Chilena de Derecho y Ciencia Política (UC Temuco)" },
  { issn: "0719-7462", nombre: "Revista de Derecho Económico (U. de Chile)" },
  { issn: "0719-5591", nombre: "Revista de Derecho Administrativo Económico (PUC)" },
  { issn: "0718-6851", nombre: "Revista de Derecho (Valparaíso, PUCV)" },
  { issn: "0719-482X", nombre: "Revista Tribuna Internacional (U. de Chile)" },
  { issn: "0719-2584", nombre: "Revista Chilena de Derecho y Tecnología (U. de Chile)" },
  { issn: "0719-1731", nombre: "Revista de Derecho Escuela de Postgrado (U. de Chile)" },
];

const DOI_VALIDO = /^10\.\d{4,9}\/\S+$/;
const CAMPOS = "title,author,container-title,issued,DOI,URL,abstract,page,volume,issue,score";

// Palabras que no distinguen un artículo de otro en un corpus donde todo es
// doctrina jurídica chilena.
const VACIAS = new Set([
  "de", "del", "la", "las", "los", "el", "en", "y", "o", "a", "un", "una", "por", "para",
  "con", "sin", "sobre", "the", "of", "and", "que", "al", "su", "sus", "como", "ante",
  "derecho", "derechos", "juridico", "juridica", "juridicos", "juridicas",
  "chile", "chileno", "chilena", "chilenos", "chilenas", "nacional",
  "tema", "temas", "analisis", "estudio", "estudios", "aspecto", "aspectos",
  "materia", "materias", "caso", "casos", "respecto", "acerca", "segun",
  "este", "esta", "estos", "estas", "entre", "desde", "hasta", "hacia", "tambien",
]);

const sinTildes = (s) => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

const cacheBusquedas = new CacheTTL({ maximo: 200, ttlMs: 24 * 60 * 60 * 1000 });
const cacheAcceso = new CacheTTL({ maximo: 2000, ttlMs: 30 * 24 * 60 * 60 * 1000 });

function normalizar(it) {
  const anio = (((it.issued || {})["date-parts"] || [])[0] || [])[0] || null;
  const autores = (it.author || []).map((a) => [a.family, a.given].filter(Boolean).join(", ")).filter(Boolean);
  const resumen = it.abstract
    ? String(it.abstract).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 600)
    : "";
  const doi = String(it.DOI || "").trim().toLowerCase();
  return {
    titulo: (it.title || [])[0] || "(sin título)",
    autores,
    revista: (it["container-title"] || [])[0] || "",
    anio,
    volumen: it.volume || "",
    numero: it.issue || "",
    paginas: it.page || "",
    doi,
    resumen,
    _score: it.score || 0,
  };
}

function citar(d) {
  const aut = d.autores.length ? d.autores.join("; ") : "S/A";
  const partes = [d.revista, d.volumen && `vol. ${d.volumen}`, d.numero && `N° ${d.numero}`, d.anio && `(${d.anio})`, d.paginas && `pp. ${d.paginas}`]
    .filter(Boolean)
    .join(", ");
  return `${aut}, "${d.titulo}", ${partes}${d.doi ? `, DOI: ${d.doi}` : ""}.`;
}

function relevancia(d, terminos) {
  const titulo = sinTildes(d.titulo);
  const resumen = sinTildes(d.resumen);
  let n = 0;
  for (const t of terminos) {
    if (titulo.includes(t)) n += 2;
    else if (resumen.includes(t)) n += 1;
  }
  return n;
}

function accesoLibre(doi) {
  return cacheAcceso.recordar(doi, async () => {
    const res = await pedir(`${OPENALEX}/works/doi:${encodeURIComponent(doi)}?mailto=${encodeURIComponent(CORREO)}`, {
      headers: { Accept: "application/json" },
      timeoutMs: 8000,
      intentos: 1,
    });
    if (!res.ok) return { es_abierto: false };
    try {
      const j = JSON.parse(res.texto);
      const oa = j.open_access || {};
      const mejor = j.best_oa_location || {};
      return {
        es_abierto: oa.is_oa === true,
        enlace: mejor.pdf_url || oa.oa_url || mejor.landing_page_url || null,
      };
    } catch {
      return { es_abierto: false };
    }
  });
}

// Confirma que el enlace libre responde sin descargar el PDF entero: se piden
// solo los primeros bytes y se mira el código y el tipo de contenido.
async function enlaceResponde(url) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 6000);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      redirect: "follow",
      headers: { Range: "bytes=0-2047", "User-Agent": "Mozilla/5.0 (Juris IA Chile)", Accept: "*/*" },
    });
    const ok = res.ok || res.status === 206;
    if (!ok) return false;
    const tipo = res.headers.get("content-type") || "";
    if (/html/.test(tipo)) {
      // Una página de venta o de inicio de sesión no es acceso libre.
      const inicio = (await res.text()).slice(0, 60000);
      return !/add to cart|purchase this article|subscribe to (view|read)|comprar art[íi]culo|iniciar sesi[óo]n para/i.test(inicio);
    }
    res.body?.cancel?.().catch?.(() => {});
    return true;
  } catch {
    return false;
  } finally {
    clearTimeout(t);
  }
}

/**
 * Busca doctrina abierta y verificable sobre la consulta.
 * @returns {Promise<{resultados: object[], nota: string}>}
 */
async function buscarDoctrina({ consulta, limite = 3 }) {
  const terminos = [...new Set(sinTildes(consulta).split(/[^a-z0-9ñ]+/).filter((t) => t.length > 3 && !VACIAS.has(t)))];
  if (!terminos.length) return { resultados: [], nota: "La consulta no tiene términos jurídicos distintivos para buscar doctrina." };

  return cacheBusquedas.recordar(`${terminos.join(" ")}|${limite}`, async () => {
    const filtros = REVISTAS.map((r) => `issn:${r.issn}`).join(",");
    const res = await pedir(
      `${CROSSREF}/works?query=${encodeURIComponent(consulta)}&filter=${filtros}&rows=40&sort=relevance&select=${CAMPOS}&mailto=${encodeURIComponent(CORREO)}`,
      { headers: { Accept: "application/json" }, timeoutMs: TIMEOUT_MS, intentos: 1 }
    );
    if (!res.ok) {
      throw new Error(res.status ? `Crossref respondió HTTP ${res.status}.` : `No se pudo conectar con Crossref: ${res.texto}`);
    }
    const items = (JSON.parse(res.texto).message || {}).items || [];

    const vistos = new Set();
    const titulos = new Set();
    const candidatos = [];
    for (const it of items) {
      const d = normalizar(it);
      if (!DOI_VALIDO.test(d.doi) || vistos.has(d.doi)) continue;
      // Un mismo artículo aparece a veces con el DOI de la revista y el de SciELO.
      const huella = sinTildes(d.titulo).replace(/[^a-z0-9]+/g, " ").trim();
      if (huella && titulos.has(huella)) continue;
      vistos.add(d.doi);
      if (huella) titulos.add(huella);
      candidatos.push({ ...d, _rel: relevancia(d, terminos) });
    }

    // Debe compartir la mayoría de los términos de la consulta (el título pesa
    // doble): un artículo que solo roza el tema citado como si lo tratara es
    // una cita falsa con forma de cita buena.
    const umbral = Math.max(2, Math.ceil(terminos.length * 0.6));
    const techo = Math.max(0, ...candidatos.map((d) => d._score));
    const pertinentes = candidatos
      .filter((d) => d._rel >= umbral && d._score >= techo * 0.3)
      .sort((a, b) => b._rel - a._rel || b._score - a._score || (b.anio || 0) - (a.anio || 0))
      .slice(0, limite * 3);

    const verificados = await Promise.all(
      pertinentes.map(async (d) => {
        const oa = await accesoLibre(d.doi).catch(() => null);
        if (!oa || !oa.es_abierto || !oa.enlace) return null;
        if (!(await enlaceResponde(oa.enlace))) return null;
        const { _score, _rel, ...limpio } = d;
        return { ...limpio, enlace_libre: oa.enlace, url: `https://doi.org/${d.doi}`, cita: citar(limpio) };
      })
    );
    const resultados = verificados.filter(Boolean).slice(0, limite);
    return {
      resultados,
      nota: "Solo doctrina de acceso abierto en revistas jurídicas chilenas indexadas, con DOI y enlace libre comprobados. No incluye manuales ni tratados.",
    };
  }, { guardarSi: (r) => r.resultados.length > 0 });
}

module.exports = { buscarDoctrina, REVISTAS };
