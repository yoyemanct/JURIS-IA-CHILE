#!/usr/bin/env node
// Diagnóstico del conector a la fuente OFICIAL (LeyChile / BCN).
//
//   npm run diagnosticar-leychile
//
// Este conector se escribió contra el esquema oficial, pero no se pudo
// probar en vivo desde el entorno de desarrollo. Este script lo verifica
// de verdad, desde tu computador, contra el servicio real de la BCN.

require("dotenv").config();
const leyChile = require("../fuentes/leyChileOficial");

const CASOS = [
  {
    nombre: "Ley 19.496 (protección del consumidor), por número de ley",
    args: { idLey: 19496 },
  },
  {
    nombre: "Código Civil, por idNorma",
    args: { idNorma: 172986 },
  },
  {
    nombre: "Código Civil, versión vigente al 1 de enero de 2005 (texto histórico)",
    args: { idNorma: 172986, fecha: "2005-01-01" },
  },
];

function titulo(t) {
  console.log("\n" + "=".repeat(70));
  console.log(t);
  console.log("=".repeat(70));
}

(async () => {
  titulo("DIAGNÓSTICO: fuente oficial LeyChile (BCN)");
  console.log("Servicio:", process.env.LEYCHILE_URL || "https://www.leychile.cl/Consulta/obtxml");

  let fallos = 0;

  for (const caso of CASOS) {
    console.log("\n--- " + caso.nombre + " ---");
    console.log("URL:", leyChile.construirUrl(caso.args));
    const inicio = Date.now();
    try {
      const norma = await leyChile.obtenerNorma(caso.args);
      const seg = ((Date.now() - inicio) / 1000).toFixed(1);

      console.log(`OK (${seg}s)`);
      console.log("  Título:        ", (norma.titulo || "(sin título)").slice(0, 70));
      console.log("  Tipo y número: ", norma.tipo, norma.numero);
      console.log("  Publicación:   ", norma.fechaPublicacion);
      console.log("  Versión leída: ", norma.fechaVersion, norma.derogado ? "(NORMA DEROGADA)" : "");
      console.log("  Artículos:     ", norma.totalArticulos);

      const vigentes = norma.articulos.filter((a) => !a.derogado).length;
      const derogados = norma.totalArticulos - vigentes;
      console.log(`  Vigentes: ${vigentes} | Derogados: ${derogados}`);

      const muestra = norma.articulos.find((a) => !a.derogado && a.texto.length > 80);
      if (muestra) {
        console.log("\n  Muestra de un artículo:");
        console.log("    ", muestra.articulo, muestra.jerarquia.length ? `(${muestra.jerarquia.join(" > ")})` : "");
        console.log("     última modificación:", muestra.fechaVersion);
        console.log("    ", JSON.stringify(muestra.texto.slice(0, 160)) + "...");
      } else {
        console.log("\n  ADVERTENCIA: no se extrajo ningún artículo con texto.");
        console.log("  El servicio respondió, pero el parser no encontró artículos:");
        console.log("  probablemente el esquema del XML cambió. Revisa fuentes/leyChileOficial.js");
        fallos++;
      }
    } catch (err) {
      fallos++;
      console.log("FALLÓ:", err.codigo || "ERROR", "-", err.message);
      if (err.codigo === "LEYCHILE_SIN_CONEXION") {
        console.log("  → Revisa tu conexión a internet, o si un firewall/antivirus bloquea leychile.cl");
      }
      if (err.codigo === "LEYCHILE_RESPUESTA_INESPERADA") {
        console.log("  → El servicio respondió algo que no es el XML esperado.");
        console.log("    Puede que la BCN haya cambiado su servicio. Abre la URL de arriba en el navegador para ver qué devuelve.");
      }
    }
  }

  titulo("PRUEBA DE ARTÍCULO PUNTUAL");
  try {
    const r = await leyChile.obtenerArticulo({ idLey: 19496, numeroArticulo: "3" });
    if (r.encontrado) {
      console.log("OK — Ley 19.496, artículo 3:");
      console.log("   ", JSON.stringify(r.articulo.texto.slice(0, 200)) + "...");
      console.log("    Última modificación de este artículo:", r.articulo.fechaVersion);
    } else {
      console.log("El artículo 3 no se encontró. Artículos disponibles (primeros 10):");
      const n = await leyChile.obtenerNorma({ idLey: 19496 });
      console.log("   ", n.articulos.slice(0, 10).map((a) => a.numero).join(", "));
      fallos++;
    }
  } catch (err) {
    fallos++;
    console.log("FALLÓ:", err.message);
  }

  titulo(fallos === 0 ? "RESULTADO: todo funcionó" : `RESULTADO: ${fallos} problema(s)`);
  if (fallos === 0) {
    console.log("La fuente oficial responde y el parser extrae los artículos correctamente.");
    console.log("Ya puedes confiar en este conector para verificar vigencia y texto oficial.");
  } else {
    console.log("Copia esta salida completa y pídele ayuda a Claude para ajustar el conector.");
  }
  process.exit(fallos === 0 ? 0 : 1);
})();
