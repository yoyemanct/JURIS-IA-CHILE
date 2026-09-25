// Copia local del texto OFICIAL vigente de los códigos cuyo XML en la BCN es
// demasiado grande para descargarlo en cada consulta (el del Código de
// Procedimiento Civil pesa 54 MB). Corre cada semana en GitHub Actions
// (actualizar-indices.yml) y guarda data/codigos/<idNorma>.json con solo lo
// necesario: número, texto vigente, fecha de versión y derogación de cada
// artículo.
//
// Uso: node scripts/actualizar-codigos.js

process.env.LEYCHILE_MAX_BYTES = process.env.LEYCHILE_MAX_BYTES || String(300 * 1024 * 1024);
process.env.LEYCHILE_TIMEOUT_MS = process.env.LEYCHILE_TIMEOUT_MS || "180000";

const fs = require("fs");
const path = require("path");
const { obtenerNorma } = require("../fuentes/leyChileOficial");

const CODIGOS = [
  { idNorma: 172986, nombre: "Código Civil", control: ["700", "La posesión es la tenencia"] },
  { idNorma: 22740, nombre: "Código de Procedimiento Civil", control: ["459", "cuatro días"] },
  { idNorma: 25563, nombre: "Código Orgánico de Tribunales", control: ["1", "facultad de conocer"] },
  { idNorma: 1974, nombre: "Código de Comercio", control: ["1", "comercio"] },
  { idNorma: 6374, nombre: "Código Tributario", control: ["1", "tributari"] },
];

const DIRECTORIO = path.join(__dirname, "..", "data", "codigos");

async function main() {
  fs.mkdirSync(DIRECTORIO, { recursive: true });
  let fallas = 0;
  for (const c of CODIGOS) {
    const inicio = Date.now();
    try {
      const norma = await obtenerNorma({ idNorma: c.idNorma });
      const articulos = norma.articulos.map((a) => ({
        numero: a.numero,
        idParte: a.idParte,
        transitorio: a.transitorio || undefined,
        derogado: a.derogado || undefined,
        fechaVersion: a.fechaVersion,
        texto: a.derogado ? "" : a.texto,
      }));
      const [num, frase] = c.control;
      const art = articulos.find((a) => !a.transitorio && String(a.numero).replace(/[°º.\s]/g, "") === num);
      const controlOk = Boolean(art && art.texto.toLowerCase().includes(frase.toLowerCase()));
      const salida = {
        idNorma: c.idNorma,
        nombre: c.nombre,
        titulo: norma.titulo,
        fechaVersion: norma.fechaVersion,
        generado: new Date().toISOString(),
        fuente: `https://www.bcn.cl/leychile/navegar?idNorma=${c.idNorma}`,
        articulos,
      };
      fs.writeFileSync(path.join(DIRECTORIO, `${c.idNorma}.json`), JSON.stringify(salida));
      console.log(`${controlOk ? "OK   " : "REVISAR"} ${c.nombre}: ${articulos.length} artículos, versión ${norma.fechaVersion}, ${Math.round((Date.now() - inicio) / 1000)} s` +
        (controlOk ? "" : ` — control art. ${num}: "${(art?.texto || "(no encontrado)").slice(0, 200)}"`));
      if (c.idNorma === 22740 && art) console.log(`   Art. ${num} CPC: ${art.texto.slice(0, 300)}`);
    } catch (err) {
      fallas++;
      console.error(`FALLA ${c.nombre} (idNorma ${c.idNorma}): ${err.message}`);
    }
  }
  process.exit(fallas === CODIGOS.length ? 1 : 0);
}

main();
