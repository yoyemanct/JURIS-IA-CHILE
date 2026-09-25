// Muestra el esquema real de las herramientas del servidor de leyes y
// respuestas de ejemplo, para ajustar mcpLeyChile.js a lo que exige.
const mcp = require("../mcpLeyChile");

async function probar(nombre, args) {
  try {
    const client = await mcp.conectar();
    const r = await client.callTool({ name: nombre, arguments: args });
    const texto = (r.content || []).map((b) => b.text).join("\n");
    console.log(`\n### ${nombre} ${JSON.stringify(args)}\n${texto.slice(0, 1500)}`);
  } catch (err) {
    console.log(`\n### ${nombre} ${JSON.stringify(args)}\nERROR: ${err.message}`);
  }
}

(async () => {
  const { tools } = await mcp.listarHerramientas();
  for (const t of tools) console.log(`- ${t.name}: ${JSON.stringify(t.inputSchema)}`);
  for (const q of ["Código Civil", "Código del Trabajo", "Código de Procedimiento Civil", "Código Penal", "Código Procesal Penal",
    "Código Orgánico de Tribunales", "Código de Comercio", "Código Tributario", "Constitución Política de la República",
    "Ley 19.496", "Ley 14.908", "Ley 19.968", "Ley 19.947", "Ley 19.903", "Ley 18.092", "feriado anual vacaciones"]) {
    await probar("search_laws", { query: q });
  }
  await probar("search_articles", { tipo: "ley", numero: "18101", idNorma: 29526, query: "restitución del inmueble" });
  await probar("get_article", { tipo: "ley", numero: "18101", idNorma: 29526, articulo: "18 A" });
  await probar("get_article", { tipo: "ley", numero: "18101", idNorma: 29526, articulo: "Artículo 18-A" });
  await probar("get_article", { tipo: "ley", numero: "18101", idNorma: 29526, articulo: "99999" });
  await probar("get_raw_link", { tipo: "ley", numero: "18101", idNorma: 29526 });
  process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });
