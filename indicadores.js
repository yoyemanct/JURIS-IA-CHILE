// Valores del día de la UF y la UTM (mindicador.cl, que publica los valores
// oficiales del Banco Central y del SII). Se incluyen en el material del
// modelo solo si la pregunta habla de montos, para que pueda convertir a
// pesos con el valor real del día en vez de uno recordado.

const { CacheTTL, claveDeTexto } = require("./cache");

const URL_INDICADORES = process.env.INDICADORES_URL || "https://mindicador.cl/api";
const TIMEOUT_MS = Number(process.env.INDICADORES_TIMEOUT_MS || 3000);
const cache = new CacheTTL({ maximo: 2, ttlMs: 6 * 60 * 60 * 1000 });

const HABLA_DE_MONTOS = /\buf\b|\butm\b|unidad(es)? de fomento|unidad(es)? tributaria|ingreso minimo|indemnizacion|pension|multa|monto|cuanto (me|le|se|debo|debe|pagan|corresponde)|cuantia|finiquito|sueldo|remuneracion|arriendo|renta|deuda|cobro/;

const pesos = (n) => `$${Number(n).toLocaleString("es-CL", { maximumFractionDigits: 2 })}`;

async function obtener() {
  return cache.recordar("indicadores", async () => {
    const controlador = new AbortController();
    const temporizador = setTimeout(() => controlador.abort(), TIMEOUT_MS);
    try {
      const r = await fetch(URL_INDICADORES, { signal: controlador.signal });
      if (!r.ok) return null;
      const d = await r.json();
      const partes = [];
      if (d.uf?.valor) partes.push(`UF ${pesos(d.uf.valor)} (${String(d.uf.fecha || "").slice(0, 10)})`);
      if (d.utm?.valor) partes.push(`UTM ${pesos(d.utm.valor)} (${String(d.utm.fecha || "").slice(0, 7)})`);
      return partes.length ? `${partes.join("; ")}. Si usas estos valores, atribúyelos al Banco Central (UF) y al SII (UTM), con su fecha.` : null;
    } finally {
      clearTimeout(temporizador);
    }
  }, { guardarSi: Boolean });
}

/** Texto con la UF y la UTM del día si la pregunta habla de montos; si no, o si falla, null. */
async function indicadoresPara(pregunta) {
  if (process.env.USAR_INDICADORES === "false" || !HABLA_DE_MONTOS.test(claveDeTexto(pregunta))) return null;
  try {
    return await obtener();
  } catch {
    return null;
  }
}

module.exports = { indicadoresPara };
