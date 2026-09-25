// Tribunal Constitucional — buscador de jurisprudencia.
//
// Adaptado de Responsa (https://github.com/djlarrix/Responsa, © 2026 Joaquín
// Larraín Guimoye, licencia MIT; ver THIRD_PARTY_NOTICES.md). El buscador
// público (buscador.tcchile.cl) consume `buscador-backend.tcchile.cl`:
//
//   GET /api/extended/sentencias?page=N&filter={"search":…,"state":…,"dateRange":…}
//   GET /api/extended/{id}/download   → PDF de la sentencia
//
// `highlightParagraphs` trae los párrafos exactos que coinciden con la
// consulta, que es lo que permite citar el pasaje pertinente.

const { pedir, aTextoPlano } = require("./http");
const { CacheTTL } = require("../../cache");

const BASE = process.env.TC_URL || "https://buscador-backend.tcchile.cl/api";
const CABECERAS = {
  Accept: "application/json",
  Origin: "https://buscador.tcchile.cl",
  Referer: "https://buscador.tcchile.cl/",
};

const cache = new CacheTTL({ maximo: 200, ttlMs: 24 * 60 * 60 * 1000 });
const CAMPOS = { 7: "rol", 5: "sumario", 4: "requirente", 6: "ministro" };

function campos(lista) {
  const out = {};
  for (const c of lista || []) {
    const nombre = CAMPOS[c.field];
    if (!nombre) continue;
    const v = String(c.value == null ? "" : c.value).trim();
    if (v && v !== "nan" && !out[nombre]) out[nombre] = v;
  }
  return out;
}

// Los PDF del TC llevan folio impreso ("8 0000018 DIEZ Y OCHO") que el OCR
// arrastra al fragmento.
function limpiarFolio(t) {
  return t
    .replace(/^\s*\d{1,4}\s+\d{4,8}\s+(?:[A-ZÁÉÍÓÚÑ]+\s+){1,10}(?=[a-záéíóúñ])/u, "")
    .replace(/^\s*\d{4,8}\s+(?:[A-ZÁÉÍÓÚÑ]+\s+){1,10}(?=[a-záéíóúñ])/u, "")
    .replace(/\s*\b0{3,}\d+\b\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizar(s) {
  const extra = campos(s.custom_fields);
  const pasajes = (s.highlightParagraphs || [])
    .map((p) => limpiarFolio(aTextoPlano(p.full || p.summary || "")))
    .filter((t) => t.length > 15)
    .slice(0, 3)
    .map((t) => (t.length > 700 ? t.slice(0, 700) + "…" : t));
  const texto = aTextoPlano(s.content || "");
  return {
    fuente: "tc",
    id: s.id,
    rol: s.rol ? String(s.rol) : extra.rol || "",
    fecha: String(s.fecha || s.created || "").slice(0, 10),
    tribunal: "Tribunal Constitucional",
    tipo_recurso: s.competencia || "",
    caratulado: extra.requirente || "",
    resultado: extra.sumario || "",
    pasajes,
    texto: pasajes.length ? texto.slice(0, 400) : texto.slice(0, 1200),
    url: `https://buscador.tcchile.cl/#/sentencia/${s.id}`,
    pdf: `${BASE}/extended/${s.id}/download`,
  };
}

async function buscarSentenciasTC({ consulta, limite = 2 }) {
  if (!consulta || !consulta.trim()) throw new Error("Falta la consulta.");
  const filtro = encodeURIComponent(JSON.stringify({ search: consulta, state: null, dateRange: null }));
  return cache.recordar(`${consulta}|${limite}`, async () => {
    const res = await pedir(`${BASE}/extended/sentencias?page=1&filter=${filtro}`, {
      headers: CABECERAS,
      timeoutMs: Number(process.env.TC_TIMEOUT_MS || 20000),
      intentos: 1,
    });
    if (!res.ok) {
      throw new Error(res.status
        ? `El buscador del Tribunal Constitucional respondió HTTP ${res.status}.`
        : `No se pudo conectar con el buscador del Tribunal Constitucional: ${res.texto}`);
    }
    let j;
    try {
      j = JSON.parse(res.texto);
    } catch {
      throw new Error("El Tribunal Constitucional no devolvió JSON: su buscador pudo cambiar.");
    }
    if (j.status === "error") throw new Error(`El Tribunal Constitucional rechazó la consulta: ${j.message}`);
    if (!j.data) throw new Error("El Tribunal Constitucional devolvió una respuesta sin datos.");
    const resultados = (j.data.results || [])
      .filter((s) => s.es_reservada !== 1)
      .map(normalizar)
      .slice(0, limite);
    return { total: j.data.count || 0, tribunal: "Tribunal Constitucional", resultados };
  }, { guardarSi: (r) => r.resultados.length > 0 });
}

module.exports = { buscarSentenciasTC };
