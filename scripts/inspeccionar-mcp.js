// Muestra el esquema real de las herramientas del servidor de leyes y
// respuestas de ejemplo, para ajustar mcpLeyChile.js a lo que exige.
const mcp = require("../mcpLeyChile");

async function probar(nombre, args) {
  try {
    const client = await mcp.conectar();
    const r = await client.callTool({ name: nombre, arguments: args });
    const texto = (r.content || []).map((b) => b.text).join("\n");
    console.log(`\n### ${nombre} ${JSON.stringify(args)}\n${texto.slice(0, 700)}`);
  } catch (err) {
    console.log(`\n### ${nombre} ${JSON.stringify(args)}\nERROR: ${err.message}`);
  }
}

(async () => {
  const { tools } = await mcp.listarHerramientas();
  for (const t of tools) console.log(`- ${t.name}: ${JSON.stringify(t.inputSchema)}`);
  for (const q of ["Código Civil", "Código del Trabajo", "Código de Procedimiento Civil"]) await probar("search_laws", { query: q });
  const candidatos = [
    ["dfl", "1", 172986, "700"], ["cod", "1855", 1973, "700"], ["COD", "1855", 1973, "700"],
    ["dfl", "1", 207436, "161"], ["ley", "1552", 22740, "434"], ["cod", "PENAL", 1984, "10"], ["cod", "penal", 1984, "10"],
    ["ley", "19696", 176595, "113"], ["ley", "7421", 25563, "1"], ["cod", "DE COMERCIO", 1974, "1"],
    ["dl", "830", 6374, "1"], ["dto", "100", 242302, "20"],
  ];
  for (const [tipo, numero, idNorma, articulo] of candidatos) await probar("get_article", { tipo, numero, idNorma, articulo });
  for (const articulo of ["articulo 18 a", "articulo 18-a", "18-A", "18 bis"]) await probar("get_article", { tipo: "ley", numero: "18101", idNorma: 29526, articulo });
  await probar("get_article", { tipo: "ley", numero: "19496", idNorma: 61438, articulo: "50 A" });
  await probar("get_article", { tipo: "ley", numero: "19496", idNorma: 61438, articulo: "articulo 50 a" });
  process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });
