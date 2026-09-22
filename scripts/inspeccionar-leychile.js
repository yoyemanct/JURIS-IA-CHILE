#!/usr/bin/env node
// Inspector del XML real de LeyChile.
//
//   npm run inspeccionar-leychile
//
// El conector se escribió contra el esquema publicado por la BCN, pero el
// diagnóstico mostró que no extrae artículos. Este script no asume nada:
// baja el XML de verdad y describe lo que realmente contiene, para poder
// corregir el lector sobre evidencia en vez de suposiciones.
//
// Guarda además el XML completo en la carpeta del proyecto, por si hace
// falta revisarlo con más detalle.

require("dotenv").config();
const fs = require("fs");
const path = require("path");

const BASE_URL = process.env.LEYCHILE_URL || "https://www.leychile.cl/Consulta/obtxml";

// Una ley corta, para que el XML sea manejable.
const CASOS = [
  { etiqueta: "Ley 20.009 (limita responsabilidad por tarjetas)", params: "opt=7&idLey=20009" },
  { etiqueta: "Ley 19.496 (consumidor)", params: "opt=7&idLey=19496" },
];

function contar(xml, etiqueta) {
  const re = new RegExp(`<${etiqueta}[\\s>/]`, "g");
  return (xml.match(re) || []).length;
}

(async () => {
  console.log("=".repeat(70));
  console.log("INSPECCIÓN DEL XML REAL DE LEYCHILE");
  console.log("=".repeat(70));

  for (const caso of CASOS) {
    const url = `${BASE_URL}?${caso.params}`;
    console.log(`\n\n### ${caso.etiqueta}`);
    console.log(url);

    let xml;
    try {
      const r = await fetch(url, { headers: { Accept: "application/xml, text/xml, */*" } });
      console.log(`HTTP ${r.status} | content-type: ${r.headers.get("content-type")}`);
      xml = await r.text();
    } catch (err) {
      console.log("FALLÓ la descarga:", err.message);
      continue;
    }

    console.log(`Tamaño recibido: ${xml.length} caracteres`);

    const archivo = path.join(__dirname, "..", `xml-recibido-${caso.params.replace(/[^\w]/g, "_")}.xml`);
    try {
      fs.writeFileSync(archivo, xml, "utf-8");
      console.log("XML guardado en:", archivo);
    } catch {}

    console.log("\n-- Cuántas veces aparece cada elemento --");
    for (const el of [
      "Norma",
      "Identificador",
      "Metadatos",
      "Encabezado",
      "EstructurasFuncionales",
      "EstructuraFuncional",
      "Texto",
      "NombreParte",
      "Anexos",
      "Anexo",
      "Promulgacion",
      "ArchivosBinarios",
    ]) {
      const n = contar(xml, el);
      console.log(`   ${el.padEnd(24)} ${n}`);
    }

    // ¿El elemento raíz trae prefijo de namespace? (ej. <ns0:Norma>)
    const raiz = xml.match(/<([A-Za-z_][\w.:-]*)[\s>]/);
    console.log("\n-- Primer elemento encontrado --");
    console.log("  ", raiz ? raiz[1] : "(ninguno)");

    console.log("\n-- Primeros 1200 caracteres del XML --");
    console.log(xml.slice(0, 1200));

    // Alrededor de la primera aparición de "Artículo", para ver en qué
    // elemento vive realmente el articulado.
    const pos = xml.search(/Art[íi]culo/i);
    if (pos > -1) {
      console.log("\n-- Contexto de la primera aparición de \"Artículo\" --");
      console.log(xml.slice(Math.max(0, pos - 500), pos + 400));
    } else {
      console.log("\n-- La palabra \"Artículo\" NO aparece en el XML recibido --");
      console.log("   (probablemente esta opción del servicio no devuelve el articulado)");
    }
  }

  console.log("\n\n" + "=".repeat(70));
  console.log("Manda esta salida completa (o los archivos xml-recibido-*.xml)");
  console.log("para ajustar el lector con la estructura real.");
  console.log("=".repeat(70));
})();
