require("dotenv").config();

const path = require("path");
const express = require("express");
const Anthropic = require("@anthropic-ai/sdk");
const { buscarContexto } = require("./busquedaHibrida");

const PORT = process.env.PORT || 3000;
const MODEL = process.env.CLAUDE_MODEL || "claude-sonnet-5";
const USAR_CORPUS_REMOTO = process.env.USAR_CORPUS_REMOTO !== "false";

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let anthropic = null;
if (process.env.ANTHROPIC_API_KEY) {
  anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
}

// --- Endpoint 1: solo buscador (sin IA) ---------------------------------
app.get("/api/buscar", async (req, res) => {
  const consulta = (req.query.q || "").toString().trim();
  if (!consulta) {
    return res.status(400).json({ error: "Falta el parámetro 'q'." });
  }
  try {
    const { documentos, remotoDisponible, remotoError } = await buscarContexto(consulta, 8);
    res.json({
      consulta,
      total: documentos.length,
      resultados: documentos,
      corpus_completo_disponible: USAR_CORPUS_REMOTO && remotoDisponible,
      aviso_corpus_completo: !remotoDisponible ? remotoError : null,
    });
  } catch (err) {
    console.error("Error en /api/buscar:", err);
    res.status(500).json({ error: "Error interno buscando en el corpus.", detalle: err.message });
  }
});

// --- Endpoint 2: pregunta en lenguaje natural + respuesta de Claude ----
app.post("/api/consultar", async (req, res) => {
  const pregunta = (req.body?.pregunta || "").toString().trim();
  if (!pregunta) {
    return res.status(400).json({ error: "Falta 'pregunta' en el cuerpo de la solicitud." });
  }
  if (!anthropic) {
    return res.status(500).json({
      error:
        "No hay una ANTHROPIC_API_KEY configurada en el servidor. Revisa el archivo .env (ver README).",
    });
  }

  let relevantes, remotoDisponible, remotoError;
  try {
    ({ documentos: relevantes, remotoDisponible, remotoError } = await buscarContexto(pregunta, 6));
  } catch (err) {
    console.error("Error buscando contexto:", err);
    return res.status(500).json({ error: "Error interno buscando contexto legal.", detalle: err.message });
  }

  const contexto = relevantes
    .map((doc, i) => {
      const avisoExtracto = doc.completo === false
        ? `\nAdvertencia: este es un EXTRACTO del artículo, no su texto íntegro. ${doc.nota || ""}`
        : "";
      const avisoOrigen = doc.origen === "remoto"
        ? "\n(Fuente: corpus jurídico completo, reconstruido desde BCN.)"
        : "\n(Fuente: ejemplo local curado a mano, corpus de demostración limitado.)";
      return `[Documento ${i + 1}]\nCuerpo legal: ${doc.cuerpo_legal}\nArtículo: ${doc.articulo}\nTema: ${doc.tema}\nTexto: "${doc.texto}"${avisoExtracto}${avisoOrigen}\nFuente: ${doc.fuente_url}`;
    })
    .join("\n\n");

  const avisoCorpusCompleto = !remotoDisponible
    ? `\n\nNota interna: el corpus jurídico completo no estuvo disponible en esta consulta (${remotoError}). Solo se usaron los ejemplos locales limitados.`
    : "";

  const systemPrompt = `Eres un asistente que ayuda a personas en Chile (abogados y no abogados) a entender legislación chilena.
Reglas estrictas:
1. Responde SOLO usando la información de los documentos legales que se te entregan a continuación como contexto. No inventes artículos, leyes ni contenido que no esté en el contexto.
2. Si el contexto no contiene información suficiente para responder la pregunta, dilo explícitamente y sugiere qué tipo de norma habría que buscar, en vez de inventar una respuesta.
3. Cuando cites una norma, indica siempre el cuerpo legal y el número de artículo exacto (ej: "Código del Trabajo, artículo 67"), tal como aparece en el documento.
4. Si un documento está marcado como EXTRACTO (no íntegro), adviértelo en tu respuesta cuando sea relevante, y sugiere revisar la fuente oficial para el texto completo.
5. Si solo tienes documentos de "ejemplo local curado a mano" (corpus de demostración limitado) y no del corpus completo, adviértelo: la respuesta puede no reflejar toda la legislación relevante.
6. Ajusta el nivel de detalle: si la pregunta suena de un no-abogado (lenguaje cotidiano), prioriza claridad; si suena técnica o de un profesional del derecho, puedes ser más preciso y citar con más detalle.
7. Aclara siempre, al final, que esto es información general y no reemplaza el consejo de un abogado o abogada.
8. Responde en español, de forma clara.`;

  const userMessage = `Documentos disponibles como contexto:\n\n${contexto || "(no se encontraron documentos relevantes)"}${avisoCorpusCompleto}\n\nPregunta del usuario: ${pregunta}`;

  try {
    const respuesta = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 1024,
      system: systemPrompt,
      messages: [{ role: "user", content: userMessage }],
    });

    const textoRespuesta = respuesta.content
      .filter((bloque) => bloque.type === "text")
      .map((bloque) => bloque.text)
      .join("\n");

    res.json({
      pregunta,
      respuesta: textoRespuesta,
      documentos_usados: relevantes,
      corpus_completo_disponible: USAR_CORPUS_REMOTO && remotoDisponible,
      aviso_corpus_completo: !remotoDisponible ? remotoError : null,
    });
  } catch (err) {
    console.error("Error llamando a la API de Claude:", err);
    res.status(502).json({
      error: "Ocurrió un error al consultar a Claude. Revisa la consola del servidor y tu API key.",
      detalle: err?.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Lexchile prototipo escuchando en http://localhost:${PORT}`);
  if (!anthropic) {
    console.warn(
      "ADVERTENCIA: no hay ANTHROPIC_API_KEY configurada. El buscador funcionará, pero el chat con Claude no."
    );
  }
});
