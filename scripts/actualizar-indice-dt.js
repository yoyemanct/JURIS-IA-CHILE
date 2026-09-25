// Genera data/indices/dt.json: el índice de dictámenes de la Dirección del
// Trabajo de todos los años disponibles (2005 en adelante).
// Lo ejecuta GitHub Actions cada semana (.github/workflows/actualizar-indices.yml).
const fs = require("fs");
const path = require("path");
const { indiceAnio, ANIOS } = require("../fuentes/jurisprudencia/direcciontrabajo");

(async () => {
  const destino = path.join(__dirname, "..", "data", "indices", "dt.json");
  let previo = { anios: {} };
  try { previo = JSON.parse(fs.readFileSync(destino, "utf8")); } catch {}

  const salida = { generado: new Date().toISOString(), fuente: "https://www.dt.gob.cl/legislacion/1624/", anios: {} };
  let total = 0;
  for (const anio of Object.keys(ANIOS).map(Number).sort((a, b) => b - a)) {
    try {
      const filas = await indiceAnio(anio);
      salida.anios[anio] = filas;
      total += filas.length;
      console.log(`${anio}: ${filas.length} dictámenes`);
    } catch (e) {
      // Si un año falla, se conserva lo que había antes en vez de perderlo.
      salida.anios[anio] = previo.anios[anio] || [];
      total += salida.anios[anio].length;
      console.log(`${anio}: FALLA (${e.message}); se conservan ${salida.anios[anio].length} del índice anterior`);
    }
  }
  if (!total) {
    console.error("El índice quedó vacío: no se sobrescribe el archivo.");
    process.exit(1);
  }
  fs.writeFileSync(destino, JSON.stringify(salida));
  console.log(`Total: ${total} dictámenes, ${(fs.statSync(destino).size / 1024).toFixed(0)} KB`);
})();
