// Dictámenes de la Dirección del Trabajo.
//
// Adaptado de Responsa (https://github.com/djlarrix/Responsa, © 2026 Joaquín
// Larraín Guimoye, licencia MIT; ver THIRD_PARTY_NOTICES.md).
//
// El buscador oficial de la DT (w3-search.php) está caído. Lo que sí responde
// son las portadillas mensuales de dictámenes: cada año tiene un
// `propertyvalue` y sus doce meses son los correlativos siguientes (año 2024 =
// 188794 → enero 188795 … diciembre 188806). Cada entrada trae número, fecha,
// sumario completo y descriptores. Con eso se arma un índice propio y se
// busca en él.

const { pedir } = require("./http");
const { CacheTTL } = require("../../cache");

const BASE = process.env.DT_URL || "https://www.dt.gob.cl/legislacion/1624/";
const ANIOS_A_INDEXAR = Number(process.env.DT_ANIOS || 3);

// propertyvalue del año → los meses son ese id + 1..12 (verificados por Responsa).
const ANIOS = {
  2026: 193891, 2025: 191853, 2024: 188794, 2023: 184682, 2022: 182142,
  2021: 179229, 2020: 176961, 2019: 172974, 2018: 166905, 2017: 161037,
  2016: 157851, 2015: 82250, 2014: 82237, 2013: 81431, 2012: 28505,
  2011: 28492, 2010: 27422, 2009: 27409, 2008: 27205, 2007: 26882,
  2006: 25598, 2005: 23874,
};

const cacheAnios = new CacheTTL({ maximo: 30, ttlMs: 7 * 24 * 60 * 60 * 1000 });

const decodificar = (s) =>
  String(s || "")
    .replace(/&#xA;/gi, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function parsearMes(html) {
  const out = [];
  const re =
    /<p class="titulo aid-(\d+)[^"]*"><a href="(w3-article-\d+\.html)" title="([^"]*)"[^>]*>([^<]*)<\/a><\/p>\s*<p class="fecha[^"]*iso8601-(\d{8})[^"]*">[^<]*<\/p>\s*(?:<p class="epigrafe[^"]*">([^<]*)<\/p>)?/gi;
  let m;
  while ((m = re.exec(html))) {
    out.push({
      id: m[1],
      numero: decodificar(m[4]),
      fecha: `${m[5].slice(0, 4)}-${m[5].slice(4, 6)}-${m[5].slice(6, 8)}`,
      sumario: decodificar(m[3]),
      epigrafe: decodificar(m[6] || ""),
      url: BASE + m[2],
    });
  }
  return out;
}

function indiceAnio(anio) {
  const pv = ANIOS[anio];
  if (!pv) return Promise.resolve([]);
  return cacheAnios.recordar(String(anio), async () => {
    const meses = await Promise.all(
      Array.from({ length: 12 }, (_, k) =>
        pedir(`${BASE}w3-propertyvalue-${pv + k + 1}.html`, { headers: { Accept: "text/html" }, timeoutMs: 20000, intentos: 2 })
          .then((r) => ({ ok: r.ok, filas: r.ok ? parsearMes(r.texto) : [] }))
          .catch(() => ({ ok: false, filas: [] }))
      )
    );
    if (!meses.some((m) => m.ok)) {
      throw new Error(`Ninguna portadilla de ${anio} respondió en dt.gob.cl.`);
    }
    // Se filtra por la fecha real de cada dictamen: un id de portadilla
    // equivocado da un año incompleto, nunca un dictamen atribuido a otro año.
    return meses.flatMap((m) => m.filas).filter((d) => d.fecha.startsWith(String(anio)));
  }, { guardarSi: (filas) => filas.length > 0 });
}

const sinTildes = (s) => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const VACIAS = new Set(["de", "del", "la", "las", "los", "el", "en", "y", "o", "a", "un", "una", "por", "para", "con", "sin", "sobre", "que", "al", "su", "sus"]);

/** Años más recientes con datos, para indexar por adelantado. */
function aniosRecientes() {
  const disponibles = Object.keys(ANIOS).map(Number).sort((a, b) => b - a);
  return disponibles.slice(0, ANIOS_A_INDEXAR);
}

async function buscarDictamenesDT({ consulta, limite = 2 }) {
  if (!String(consulta || "").trim()) throw new Error("Falta la consulta.");
  const anios = aniosRecientes();
  const porAnio = await Promise.all(anios.map((a) => indiceAnio(a).catch(() => [])));
  const corpus = porAnio.flat();
  if (!corpus.length) throw new Error("No se pudo construir el índice de dictámenes de la Dirección del Trabajo.");

  const limpia = sinTildes(consulta);
  const terminos = [...new Set(limpia.split(/[^a-z0-9ñ°]+/).filter((t) => t.length > 2 && !VACIAS.has(t)))];
  const pares = terminos.slice(0, -1).map((t, i) => `${t} ${terminos[i + 1]}`);

  const resultados = corpus
    .map((d) => {
      const heno = sinTildes(`${d.sumario} ${d.epigrafe} ${d.numero}`);
      const epi = sinTildes(d.epigrafe);
      // El primer descriptor es la materia principal del dictamen.
      const principal = sinTildes(d.epigrafe.split(";")[0] || "");
      let rel = terminos.filter((t) => heno.includes(t)).length + terminos.filter((t) => epi.includes(t)).length;
      rel += terminos.filter((t) => principal.includes(t)).length * 3;
      rel += pares.filter((par) => heno.includes(par)).length * 3;
      if (principal.includes(limpia) || pares.some((par) => principal.includes(par))) rel += 6;
      if (heno.includes(limpia)) rel += 5;
      const materias = (d.epigrafe.match(/;/g) || []).length + 1;
      return { d, rel: rel / (1 + Math.log2(Math.max(materias, 1))) };
    })
    // Exige al menos dos términos coincidentes (o uno si la consulta tiene uno).
    .filter((x) => x.rel >= Math.min(2, terminos.length))
    .sort((a, b) => b.rel - a.rel || b.d.fecha.localeCompare(a.d.fecha))
    .slice(0, limite)
    .map(({ d }) => ({
      fuente: "dt",
      id: d.id,
      tribunal: "Dirección del Trabajo",
      rol: d.numero ? `Dictamen ${d.numero}` : "",
      fecha: d.fecha,
      caratulado: "",
      resultado: "",
      descriptores: d.epigrafe ? d.epigrafe.split(/;\s*/).filter(Boolean).slice(0, 6) : [],
      pasajes: d.sumario ? [d.sumario.length > 700 ? d.sumario.slice(0, 700) + "…" : d.sumario] : [],
      texto: "",
      url: d.url,
    }));

  return { total: corpus.length, tribunal: "Dirección del Trabajo", anios, resultados };
}

// Arma el índice en segundo plano al arrancar: construirlo toma varios
// segundos (doce portadillas por año) y la primera consulta laboral no debería
// pagar ese costo.
function precalentar() {
  for (const a of aniosRecientes()) indiceAnio(a).catch(() => {});
}

module.exports = { buscarDictamenesDT, precalentar, parsearMes };
