// Motor de búsqueda simple por palabras clave sobre el corpus local.
// No usa embeddings ni base vectorial: para un corpus pequeño (decenas o
// pocos cientos de artículos) esto es suficiente y no requiere servicios
// externos. Si el corpus crece mucho, conviene migrar a una búsqueda por
// vectores (ver el README, sección "Cómo seguir creciendo").

const STOPWORDS = new Set([
  "de", "la", "el", "en", "y", "a", "los", "las", "un", "una", "que", "es",
  "por", "para", "con", "se", "su", "sus", "del", "al", "lo", "como", "mi",
  "me", "tengo", "puedo", "puede", "hay", "sobre", "si", "no", "cual",
  "cuales", "que", "donde", "cuando", "quien", "qué", "cuál", "cuáles",
  "dónde", "cuándo", "quién"
]);

function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, ""); // quita tildes
}

function tokenizar(texto) {
  return normalizar(texto)
    .split(/[^a-z0-9]+/)
    .filter((palabra) => palabra.length > 2 && !STOPWORDS.has(palabra));
}

/**
 * Busca en el corpus los documentos más relevantes para una consulta,
 * usando un puntaje simple por coincidencia de palabras (con un pequeño
 * bonus si el término aparece también en el artículo/tema).
 */
function buscar(corpus, consulta, limite = 5) {
  const terminos = tokenizar(consulta);
  if (terminos.length === 0) return [];

  const resultados = corpus.map((doc) => {
    const textoCompleto = normalizar(
      `${doc.cuerpo_legal} ${doc.articulo} ${doc.tema} ${doc.texto}`
    );
    let puntaje = 0;
    for (const termino of terminos) {
      const coincidencias = textoCompleto.split(termino).length - 1;
      puntaje += coincidencias;
      if (normalizar(doc.tema).includes(termino)) puntaje += 2;
    }
    return { doc, puntaje };
  });

  return resultados
    .filter((r) => r.puntaje > 0)
    .sort((a, b) => b.puntaje - a.puntaje)
    .slice(0, limite)
    .map((r) => r.doc);
}

module.exports = { buscar, tokenizar, normalizar };
