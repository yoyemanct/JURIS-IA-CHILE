#!/usr/bin/env node
// Diagnóstico de la conexión al corpus jurídico completo (leyes.pisanvs.cl vía MCP).
//
// Corre esto primero, ANTES de confiar en la integración remota:
//
//   node scripts/probar-mcp.js
//
// Este script no pudo ejecutarse en el entorno donde se generó el código
// (red restringida), así que es la primera verificación real de que:
//   1. Se puede conectar al servidor MCP.
//   2. Los nombres de las herramientas y sus parámetros coinciden con lo
//      que asume mcpLeyChile.js (si no coinciden, hay que ajustar ese archivo).
//   3. Una búsqueda de ejemplo efectivamente devuelve resultados.

const mcp = require("../mcpLeyChile");

async function main() {
  console.log(`Conectando a ${process.env.LEYCHILE_MCP_URL || "https://leyes.pisanvs.cl/api/mcp"} ...\n`);

  let herramientas;
  try {
    herramientas = await mcp.listarHerramientas();
  } catch (err) {
    console.error("❌ No se pudo conectar ni listar herramientas del servidor MCP.");
    console.error("   Detalle:", err.message);
    console.error("\nPosibles causas: sin conexión a internet, el servidor está caído,");
    console.error("o algo cambió en la URL/protocolo. Revisa https://leyes.pisanvs.cl primero.");
    process.exit(1);
  }

  console.log("✅ Conexión establecida. Herramientas disponibles:\n");
  for (const tool of herramientas.tools || []) {
    console.log(`— ${tool.name}: ${tool.description || "(sin descripción)"}`);
    if (tool.inputSchema) {
      console.log(`  Parámetros esperados: ${JSON.stringify(tool.inputSchema.properties || {})}`);
    }
  }

  console.log("\nProbando una búsqueda de ejemplo: buscarLeyes('feriado anual vacaciones')...\n");
  try {
    const resultado = await mcp.buscarLeyes("feriado anual vacaciones trabajador");
    console.log("Resultado crudo:");
    console.log(JSON.stringify(resultado, null, 2).slice(0, 3000));
  } catch (err) {
    console.error("❌ La búsqueda de ejemplo falló:", err.message);
    console.error("Es probable que el nombre de la herramienta o de los parámetros");
    console.error("(en mcpLeyChile.js) no coincida con lo que espera el servidor real.");
    console.error("Compara con la lista de herramientas impresa arriba y ajusta.");
    process.exit(1);
  }

  console.log("\n✅ Todo funcionando. La integración remota debería servir en la app.");
  process.exit(0);
}

main();
