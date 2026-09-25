// Servicio de Impuestos Internos — jurisprudencia administrativa (oficios).
//
// El SII publica sus oficios con un servicio propio, el mismo que usa su
// página de jurisprudencia administrativa:
//
//   POST https://www3.sii.cl/getPublicacionesCTByMateria  {"key":"RENTA","year":"2025"}
//
// Devuelve cada oficio con número, fecha, resumen, normas y el identificador
// del PDF oficial. Endpoint identificado a partir de k-LegalChile
// (https://github.com/zkak0/k-LegalChile, licencia MIT).

const { pedir, aTextoPlano } = require("./http");
const { CacheTTL } = require("../../cache");

const API = process.env.SII_URL || "https://www3.sii.cl/getPublicacionesCTByMateria";
const DESCARGA = "https://www4.sii.cl/gabineteAdmInternet/descargaArchivo";
const MATERIAS = ["RENTA", "IVA", "OTROS"];
const ANIOS = Number(process.env.SII_ANIOS || 4);

const cache = new CacheTTL({ maximo: 60, ttlMs: 24 * 60 * 60 * 1000 });

function publicaciones(materia, anio) {
  return cache.recordar(`${materia}|${anio}`, async () => {
    const res = await pedir(API, {
      metodo: "POST",
      cuerpo: JSON.stringify({ key: materia, year: String(anio) }),
      headers: { "Content-Type": "application/json", Accept: "application/json", Origin: "https://www.sii.cl", Referer: "https://www.sii.cl/" },
      timeoutMs: 20000,
      intentos: 2,
    });
    if (!res.ok) throw new Error(res.status ? `El SII respondió HTTP ${res.status}.` : `No se pudo conectar con el SII: ${res.texto}`);
    let j;
    try { j = JSON.parse(res.texto); } catch { throw new Error("El SII no devolvió JSON: su servicio pudo cambiar."); }
    if (!Array.isArray(j)) throw new Error("El SII devolvió un formato inesperado.");
    return j.map((it) => {
      const numero = String(it.pubNumOficio || "").trim();
      const fecha = String(it.pubFechaPubli || "").trim();
      const nombre = it.nombreArchPublica || `${numero}-${fecha.replace(/\//g, "_")}.pdf`;
      return {
        numero,
        fecha,
        anio,
        materia,
        resumen: aTextoPlano(it.pubResumen || ""),
        normas: aTextoPlano(it.pubLegal || ""),
        pdf: it.idBlobArchPublica
          ? `${DESCARGA}?nombreDocumento=${encodeURIComponent(nombre)}&extension=pdf&acc=download&id=${it.idBlobArchPublica}&mediaType=application/pdf`
          : null,
      };
    });
  }, { guardarSi: (lista) => lista.length > 0 });
}

const sinTildes = (s) => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const VACIAS = new Set(["de", "del", "la", "las", "los", "el", "en", "por", "para", "con", "sobre", "que", "una", "impuesto", "impuestos", "tributario", "tributaria", "sii"]);

async function buscarOficiosSII({ consulta, limite = 2 }) {
  if (!String(consulta || "").trim()) throw new Error("Falta la consulta.");
  const actual = new Date().getFullYear();
  const anios = Array.from({ length: ANIOS }, (_, i) => actual - i);
  const tareas = MATERIAS.flatMap((m) => anios.map((a) => publicaciones(m, a).catch(() => [])));
  const corpus = (await Promise.all(tareas)).flat();
  if (!corpus.length) throw new Error("El SII no entregó oficios (su servicio pudo cambiar o estar caído).");

  const terminos = [...new Set(sinTildes(consulta).split(/[^a-z0-9ñ]+/).filter((t) => t.length > 3 && !VACIAS.has(t)))];
  const umbral = Math.max(1, Math.ceil(terminos.length * 0.6));
  const resultados = corpus
    .map((o) => {
      const heno = sinTildes(`${o.resumen} ${o.normas}`);
      return { o, puntos: terminos.filter((t) => heno.includes(t)).length };
    })
    .filter((x) => x.puntos >= umbral)
    .sort((a, b) => b.puntos - a.puntos || b.o.anio - a.o.anio)
    .slice(0, limite)
    .map(({ o }) => ({
      fuente: "sii",
      id: `${o.numero}/${o.anio}`,
      tribunal: "Servicio de Impuestos Internos",
      rol: `Oficio N° ${o.numero} (${o.materia})`,
      fecha: o.fecha,
      caratulado: "",
      resultado: "",
      descriptores: o.normas ? o.normas.split(/;\s*/).filter(Boolean).slice(0, 5) : [],
      pasajes: o.resumen ? [o.resumen.length > 700 ? o.resumen.slice(0, 700) + "…" : o.resumen] : [],
      texto: "",
      url: o.pdf || "https://www.sii.cl/normativa_legislacion/jurisprudencia_administrativa.htm",
      pdf: o.pdf,
    }));

  return { total: corpus.length, tribunal: "Servicio de Impuestos Internos", anios, resultados };
}

module.exports = { buscarOficiosSII };
