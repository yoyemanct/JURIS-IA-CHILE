// proveedorIA.js
// -----------------------------------------------------------------------
// Capa que abstrae "quién redacta la respuesta": Claude (API paga, en la
// nube) o un modelo local corriendo en Ollama (gratis, ej. Qwen).
//
// La idea: el resto del servidor arma el mismo contexto legal y el mismo
// systemPrompt sin importar quién va a responder; este archivo se encarga
// de hablar con el proveedor que corresponda y devolver siempre la misma
// forma de respuesta: { texto, proveedor }.
// -----------------------------------------------------------------------

const Anthropic = require("@anthropic-ai/sdk");

const CLAUDE_MODEL = process.env.CLAUDE_MODEL || "claude-sonnet-5";

const OLLAMA_URL = (process.env.OLLAMA_URL || "http://localhost:11434").replace(/\/+$/, "");
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "qwen2.5";
const OLLAMA_TIMEOUT_MS = Number(process.env.OLLAMA_TIMEOUT_MS || 60000);
// Temperatura baja = respuestas mas literales y pegadas al texto entregado.
// Para uso legal esto importa: no queremos que el modelo "adorne" citas.
const OLLAMA_TEMPERATURA = Number(process.env.OLLAMA_TEMPERATURA || 0.15);
// Ventana de contexto. Ollama usa 4096 por defecto, que puede ser insuficiente
// para el system prompt + 6 articulos legales: si se pasa, Ollama CORTA el
// texto en silencio y el modelo responde sin haber leido los documentos.
const OLLAMA_NUM_CTX = Number(process.env.OLLAMA_NUM_CTX || 8192);
const USAR_QWEN = process.env.USAR_QWEN !== "false";

let anthropic = null;
if (process.env.ANTHROPIC_API_KEY) {
  anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
}

// Proveedor a usar cuando el usuario no eligió ninguno explícitamente.
// Si hay clave de Claude configurada, se prefiere Claude (más confiable
// citando sin inventar); si no, se cae a Qwen local si está habilitado.
const PROVEEDOR_PREDETERMINADO =
  process.env.PROVEEDOR_IA_PREDETERMINADO || (anthropic ? "claude" : "qwen");

function proveedoresDisponibles() {
  const disponibles = [];
  if (anthropic) {
    disponibles.push({
      id: "claude",
      nombre: "Claude (nube, de pago)",
      descripcion: "Más preciso citando artículos exactos. Cada consulta tiene un costo pequeño en tu cuenta de Anthropic.",
    });
  }
  if (USAR_QWEN) {
    disponibles.push({
      id: "qwen",
      nombre: `Qwen local (${OLLAMA_MODEL}, gratis)`,
      descripcion: "Corre en tu propio computador vía Ollama, sin costo. Puede ser menos preciso citando artículos exactos que Claude.",
    });
  }
  return disponibles;
}

async function responderConClaude({ systemPrompt, userMessage }) {
  if (!anthropic) {
    const err = new Error("No hay una ANTHROPIC_API_KEY configurada en el servidor.");
    err.codigo = "CLAUDE_NO_CONFIGURADO";
    throw err;
  }
  const respuesta = await anthropic.messages.create({
    model: CLAUDE_MODEL,
    max_tokens: 1024,
    system: systemPrompt,
    messages: [{ role: "user", content: userMessage }],
  });
  const texto = respuesta.content
    .filter((bloque) => bloque.type === "text")
    .map((bloque) => bloque.text)
    .join("\n");
  return { texto, proveedor: "claude" };
}

function limpiarRazonamiento(texto) {
  return texto
    .replace(/<think>[\s\S]*?<\/think>/gi, "")
    .replace(/<thinking>[\s\S]*?<\/thinking>/gi, "")
    .trim();
}

async function responderConQwen({ systemPrompt, userMessage }) {
  if (!USAR_QWEN) {
    const err = new Error("El modelo local Qwen está desactivado en este servidor (USAR_QWEN=false).");
    err.codigo = "QWEN_DESACTIVADO";
    throw err;
  }

  const controlador = new AbortController();
  const temporizador = setTimeout(() => controlador.abort(), OLLAMA_TIMEOUT_MS);

  let respuesta;
  try {
    respuesta = await fetch(`${OLLAMA_URL}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controlador.signal,
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        stream: false,
        options: {
          temperature: OLLAMA_TEMPERATURA,
          num_ctx: OLLAMA_NUM_CTX,
          top_p: 0.9,
        },
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage },
        ],
      }),
    });
  } catch (err) {
    clearTimeout(temporizador);
    if (err.name === "AbortError") {
      const errTimeout = new Error(
        `Ollama no respondió en ${Math.round(OLLAMA_TIMEOUT_MS / 1000)} segundos. ¿Está corriendo? (¿"ollama serve" activo?)`
      );
      errTimeout.codigo = "QWEN_TIMEOUT";
      throw errTimeout;
    }
    const errConexion = new Error(
      `No se pudo conectar con Ollama en ${OLLAMA_URL}. ¿Está instalado y corriendo? (comando: "ollama serve")`
    );
    errConexion.codigo = "QWEN_SIN_CONEXION";
    errConexion.causa = err.message;
    throw errConexion;
  }
  clearTimeout(temporizador);

  if (!respuesta.ok) {
    const cuerpo = await respuesta.text().catch(() => "");
    const err = new Error(
      `Ollama respondió con error ${respuesta.status}. ¿Descargaste el modelo "${OLLAMA_MODEL}"? Prueba: ollama pull ${OLLAMA_MODEL}`
    );
    err.codigo = "QWEN_ERROR_HTTP";
    err.detalle = cuerpo;
    throw err;
  }

  const datos = await respuesta.json();
  // Los modelos de razonamiento (Qwen3 y similares) pueden devolver su
  // "pensamiento" en un campo aparte o dentro de etiquetas <think>...</think>.
  // Eso no le sirve al usuario final, asi que se descarta.
  const texto = limpiarRazonamiento(datos?.message?.content || "");
  if (!texto) {
    const err = new Error("Ollama respondió sin contenido de texto (respuesta vacía o formato inesperado).");
    err.codigo = "QWEN_RESPUESTA_VACIA";
    throw err;
  }
  return { texto, proveedor: "qwen" };
}

// Elige y ejecuta el proveedor pedido (o el predeterminado si no se pidió
// ninguno / se pidió uno que no existe).
async function responder({ proveedor, systemPrompt, userMessage }) {
  const elegido = proveedor === "claude" || proveedor === "qwen" ? proveedor : PROVEEDOR_PREDETERMINADO;
  if (elegido === "qwen") {
    return responderConQwen({ systemPrompt, userMessage });
  }
  return responderConClaude({ systemPrompt, userMessage });
}

module.exports = {
  responder,
  proveedoresDisponibles,
  PROVEEDOR_PREDETERMINADO,
};
