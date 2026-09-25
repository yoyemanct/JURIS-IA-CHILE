// Verifica el mapa de artículos clave contra LeyChile real: descarga cada
// artículo y comprueba que su texto contenga las palabras esperadas. Así un
// número equivocado en el mapa se detecta antes de llegar a una respuesta.
//
// Uso: node scripts/verificar-articulos-clave.js [--salida evals/articulos-clave.md]

const fs = require("fs");
const mcp = require("../mcpLeyChile");
const { resolverNorma } = require("../busquedaHibrida");
const { MAPA } = require("../articulosClave");
const { claveDeTexto } = require("../cache");

async function main() {
  const salida = process.argv.includes("--salida") ? process.argv[process.argv.indexOf("--salida") + 1] : null;
  const vistos = new Map();
  const filas = [];
  for (const entrada of MAPA) {
    for (const { norma, articulos } of entrada.normas) {
      for (const [numero, palabras] of Object.entries(articulos)) {
        const clave = `${norma}|${numero}`;
        if (!vistos.has(clave)) {
          vistos.set(clave, (async () => {
            try {
              const ley = await resolverNorma(norma);
              if (!ley) return { ok: false, detalle: "norma no encontrada" };
              const art = await mcp.obtenerArticulo(ley.idNorma, numero);
              const texto = claveDeTexto(art?.texto || "");
              if (!texto) return { ok: false, detalle: `artículo vacío (idNorma ${ley.idNorma}, ${ley.titulo})` };
              const faltan = palabras.filter((p) => !texto.includes(p));
              return {
                ok: faltan.length === 0,
                detalle: faltan.length ? `faltan: ${faltan.join(", ")} — texto: "${texto.slice(0, 160)}…"` : `idNorma ${ley.idNorma}`,
              };
            } catch (err) {
              return { ok: false, detalle: `error: ${err.message}` };
            }
          })());
        }
        const r = await vistos.get(clave);
        filas.push({ tema: entrada.id, norma, numero, ...r });
        console.log(`${r.ok ? "OK  " : "FALLA"} ${entrada.id}: ${norma}, art. ${numero} — ${r.detalle}`);
      }
    }
  }
  const fallas = filas.filter((f) => !f.ok);
  const md = [
    "# Verificación del mapa de artículos clave contra LeyChile",
    "",
    `Fecha: ${new Date().toISOString()}. Artículos revisados: ${filas.length}. Correctos: ${filas.length - fallas.length}. Con problemas: ${fallas.length}.`,
    "",
    "| Tema | Norma | Artículo | Resultado | Detalle |",
    "|---|---|---|---|---|",
    ...filas.map((f) => `| ${f.tema} | ${f.norma} | ${f.numero} | ${f.ok ? "✅" : "❌"} | ${f.detalle.replace(/\|/g, "/")} |`),
    "",
  ].join("\n");
  if (salida) fs.writeFileSync(salida, md);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
