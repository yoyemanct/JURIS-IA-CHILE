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
  await probar("search_laws", { query: "Ley 18.101" });
  await probar("search_laws", { query: "Ley 19496 protección de los derechos de los consumidores" });
  await probar("get_article", { idNorma: 172986, articulo: "700" });
  await probar("get_article", { tipo: "ley", numero: "18101", articulo: "1" });
  await probar("get_article", { tipo: "Ley", numero: "18101", articulo: "1" });
  await probar("get_article", { tipo: "codigo", numero: "civil", articulo: "700" });
  process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });
