// Ayudante para leer las respuestas del servidor MCP remoto sin asumir un
// único formato exacto. No pudimos probar en vivo el formato real de
// respuesta (ver mcpLeyChile.js), así que esto intenta reconocer varias
// formas razonables en las que podría venir la información, en vez de
// romperse si el nombre de un campo no es el que esperábamos.

function primero(obj, claves) {
  if (!obj || typeof obj !== "object") return undefined;
  for (const clave of claves) {
    if (obj[clave] !== undefined && obj[clave] !== null && obj[clave] !== "") {
      return obj[clave];
    }
  }
  return undefined;
}

function comoArray(valor) {
  if (Array.isArray(valor)) return valor;
  if (valor && typeof valor === "object") {
    for (const clave of ["resultados", "results", "articulos", "articles", "matches", "items", "normas", "laws"]) {
      if (Array.isArray(valor[clave])) return valor[clave];
    }
  }
  return null;
}

/** Normaliza el resultado de buscarLeyes() a una lista de {idNorma, titulo, tipo, numero}. */
function normalizarLeyes(resultado) {
  const arr = comoArray(resultado);
  if (!arr) return [];
  return arr
    .map((item) => ({
      idNorma: primero(item, ["idNorma", "id_norma", "id", "normaId"]),
      titulo: primero(item, ["titulo", "nombre", "name", "title"]) || "(sin título)",
      tipo: primero(item, ["tipo", "type"]),
      numero: primero(item, ["numero", "number"]),
    }))
    .filter((n) => n.idNorma !== undefined);
}

/** Normaliza el resultado de buscarArticulos()/obtenerArticulo() a {numero, texto}[]. */
function normalizarArticulos(resultado) {
  const arr = comoArray(resultado);
  if (arr) {
    return arr.map((item) => ({
      numero: primero(item, ["articulo", "numero", "numero_articulo", "number", "id"]),
      texto: primero(item, ["texto", "contenido", "texto_articulo", "text", "body", "snippet"]) || "",
    }));
  }
  if (typeof resultado === "string" && resultado.trim()) {
    return [{ numero: null, texto: resultado.trim() }];
  }
  if (resultado && typeof resultado === "object") {
    const texto = primero(resultado, ["texto", "contenido", "text", "body"]);
    if (texto) {
      return [{ numero: primero(resultado, ["articulo", "numero", "number"]), texto }];
    }
  }
  return [];
}

module.exports = { normalizarLeyes, normalizarArticulos, comoArray, primero };
