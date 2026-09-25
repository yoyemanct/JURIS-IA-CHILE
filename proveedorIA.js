// proveedorIA.js
// -----------------------------------------------------------------------
// Capa que abstrae "quién redacta la respuesta":
//   - vercel: Vercel AI Gateway (nube). Una sola clave da acceso a Claude,
//             GPT, Gemini, etc., con respaldo automático entre modelos.
//   - claude: API de Anthropic directa (nube, de pago).
//   - qwen:   modelo local corriendo en Ollama (gratis, ej. Qwen).
//
// El resto del servidor arma el mismo contexto legal y el mismo
// systemPrompt sin importar quién responde. Este archivo habla con el
// proveedor que corresponda y siempre devuelve { texto, proveedor, modelo }.
//
// Todas las respuestas se generan en STREAMING: el texto se va entregando
// a medida que el modelo lo escribe (callback onTexto), de modo que la
// persona empieza a leer en uno o dos segundos en vez de esperar el
// informe completo.
// -----------------------------------------------------------------------

const Anthropic = require("@anthropic-ai/sdk");

const EN_VERCEL = Boolean(process.env.VERCEL);

// Largo maximo de la respuesta. Un informe juridico estructurado no cabe en
// las 700 palabras que permitian los 1024 tokens originales.
const MAX_TOKENS_RESPUESTA = Number(process.env.MAX_TOKENS_RESPUESTA || 4000);
// Temperatura baja = respuestas mas literales y pegadas al texto entregado.
// Para uso legal esto importa: no queremos que el modelo "adorne" citas.
const TEMPERATURA = Number(process.env.TEMPERATURA_IA || 0.2);

// --- Vercel AI Gateway ---------------------------------------------------
// Ojo: Vercel no permite variables propias que empiecen con "VERCEL_",
// por eso todas las de esta sección empiezan con "AI_GATEWAY_".
const GATEWAY_URL = (process.env.AI_GATEWAY_URL || "https://ai-gateway.vercel.sh/v1").replace(/\/+$/, "");
// Modelo principal y modelos de respaldo (si el principal falla antes de
// empezar a responder, se prueba el siguiente). Formato "proveedor/modelo".
const GATEWAY_MODELO = process.env.AI_GATEWAY_MODEL || "anthropic/claude-haiku-4.5";
const GATEWAY_RESPALDOS = (process.env.AI_GATEWAY_MODELOS_RESPALDO || "google/gemini-2.5-flash")
  .split(",")
  .map((m) => m.trim())
  .filter(Boolean);
const GATEWAY_TIMEOUT_MS = Number(process.env.AI_GATEWAY_TIMEOUT_MS || 30000);

// Los valores de ejemplo de .env.example ("sk-ant-tu-clave-aqui") no son
// claves reales: se tratan como si la variable no existiera, para que un
// .env copiado sin editar no active un proveedor que va a fallar.
function claveReal(valor) {
  const v = (valor || "").trim();
  return v && !/tu-clave/i.test(v) ? v : null;
}

// En Vercel, la función recibe automáticamente un token OIDC que el
// gateway acepta, así que la clave explícita es opcional allí.
function claveVercel() {
  return claveReal(process.env.AI_GATEWAY_API_KEY) || process.env.VERCEL_OIDC_TOKEN || null;
}

// --- Claude directo -------------------------------------------------------
const CLAUDE_MODEL = process.env.CLAUDE_MODEL || "claude-sonnet-5";
let anthropic = null;
if (claveReal(process.env.ANTHROPIC_API_KEY)) {
  anthropic = new Anthropic({ apiKey: claveReal(process.env.ANTHROPIC_API_KEY) });
}

// --- Qwen local (Ollama) --------------------------------------------------
const OLLAMA_URL = (process.env.OLLAMA_URL || "http://localhost:11434").replace(/\/+$/, "");
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "qwen2.5";
const OLLAMA_TIMEOUT_MS = Number(process.env.OLLAMA_TIMEOUT_MS || 60000);
const OLLAMA_TEMPERATURA = Number(process.env.OLLAMA_TEMPERATURA || 0.15);
// Ventana de contexto. Ollama usa 4096 por defecto, que puede ser insuficiente
// para el system prompt + los articulos legales: si se pasa, Ollama CORTA el
// texto en silencio y el modelo responde sin haber leido los documentos.
const OLLAMA_NUM_CTX = Number(process.env.OLLAMA_NUM_CTX || 12288);
// En Vercel no hay Ollama local: se desactiva salvo que se pida explícito.
const USAR_QWEN = process.env.USAR_QWEN ? process.env.USAR_QWEN !== "false" : !EN_VERCEL;

// Proveedor a usar cuando el usuario no eligió ninguno. Se prefiere el
// gateway de Vercel (rápido y con respaldo entre modelos), luego Claude
// directo, y por último Qwen local.
function proveedorPredeterminado() {
  const pedido = process.env.PROVEEDOR_IA_PREDETERMINADO;
  const ids = proveedoresDisponibles().map((p) => p.id);
  if (pedido && ids.includes(pedido)) return pedido;
  return ids[0] || "claude";
}

function proveedoresDisponibles() {
  const disponibles = [];
  if (claveVercel()) {
    disponibles.push({
      id: "vercel",
      nombre: `IA en la nube vía Vercel (${GATEWAY_MODELO})`,
      descripcion: "Rápido y con respaldo automático entre modelos. El texto se envía a la nube.",
      nube: true,
    });
  }
  if (anthropic) {
    disponibles.push({
      id: "claude",
      nombre: `Claude directo (${CLAUDE_MODEL})`,
      descripcion: "Muy preciso citando artículos exactos. Cada consulta tiene un costo pequeño en tu cuenta de Anthropic.",
      nube: true,
    });
  }
  if (USAR_QWEN) {
    disponibles.push({
      id: "qwen",
      nombre: `Qwen local (${OLLAMA_MODEL}, gratis)`,
      descripcion: "Corre en tu propio computador vía Ollama, sin costo ni envío de datos. Menos preciso y más lento.",
      nube: false,
    });
  }
  return disponibles;
}

function errorCon(codigo, mensaje, extra = {}) {
  const err = new Error(mensaje);
  err.codigo = codigo;
  Object.assign(err, extra);
  return err;
}

// Lee un cuerpo de respuesta línea por línea (SSE o NDJSON).
async function* leerLineas(cuerpo) {
  const decodificador = new TextDecoder();
  let resto = "";
  for await (const trozo of cuerpo) {
    resto += decodificador.decode(trozo, { stream: true });
    let salto;
    while ((salto = resto.indexOf("\n")) >= 0) {
      const linea = resto.slice(0, salto).replace(/\r$/, "");
      resto = resto.slice(salto + 1);
      yield linea;
    }
  }
  if (resto.trim()) yield resto;
}

// --- Vercel AI Gateway (API compatible con OpenAI, en streaming) -----------
async function responderConVercelModelo(modelo, { systemPrompt, userMessage, onTexto, maxTokens, temperatura }) {
  const controlador = new AbortController();
  // El temporizador cubre solo la espera del PRIMER byte: una vez que el
  // modelo empieza a escribir, se le deja terminar.
  const temporizador = setTimeout(() => controlador.abort(), GATEWAY_TIMEOUT_MS);

  let respuesta;
  try {
    respuesta = await fetch(`${GATEWAY_URL}/chat/completions`, {
      method: "POST",
      signal: controlador.signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${claveVercel()}`,
      },
      body: JSON.stringify({
        model: modelo,
        stream: true,
        max_tokens: maxTokens || MAX_TOKENS_RESPUESTA,
        temperature: temperatura ?? TEMPERATURA,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage },
        ],
      }),
    });
  } catch (err) {
    clearTimeout(temporizador);
    throw errorCon(
      err.name === "AbortError" ? "VERCEL_TIMEOUT" : "VERCEL_SIN_CONEXION",
      err.name === "AbortError"
        ? `El modelo ${modelo} no respondió a tiempo.`
        : `No se pudo conectar con Vercel AI Gateway: ${err.message}`
    );
  }
  clearTimeout(temporizador);

  if (!respuesta.ok) {
    const cuerpo = await respuesta.text().catch(() => "");
    const detalle = cuerpo.slice(0, 400);
    const mensaje = respuesta.status === 401 || respuesta.status === 403
      ? "Vercel AI Gateway rechazó la clave. Revisa AI_GATEWAY_API_KEY."
      : `Vercel AI Gateway respondió ${respuesta.status} con el modelo ${modelo}.`;
    throw errorCon("VERCEL_ERROR_HTTP", mensaje, { detalle, status: respuesta.status });
  }

  let texto = "";
  for await (const linea of leerLineas(respuesta.body)) {
    if (!linea.startsWith("data:")) continue;
    const datos = linea.slice(5).trim();
    if (!datos || datos === "[DONE]") continue;
    let evento;
    try {
      evento = JSON.parse(datos);
    } catch {
      continue;
    }
    if (evento.error) {
      throw errorCon("VERCEL_ERROR_STREAM", evento.error.message || "Error del gateway durante la respuesta.");
    }
    const delta = evento.choices?.[0]?.delta?.content;
    if (delta) {
      texto += delta;
      onTexto?.(delta);
    }
  }
  if (!texto.trim()) {
    throw errorCon("VERCEL_RESPUESTA_VACIA", `El modelo ${modelo} respondió sin texto.`);
  }
  return { texto, proveedor: "vercel", modelo };
}

async function responderConVercel(opciones) {
  if (!claveVercel()) {
    throw errorCon("VERCEL_NO_CONFIGURADO", "No hay AI_GATEWAY_API_KEY configurada en el servidor.");
  }
  const modelos = [GATEWAY_MODELO, ...GATEWAY_RESPALDOS.filter((m) => m !== GATEWAY_MODELO)];
  let ultimoError;
  for (const modelo of modelos) {
    let empezo = false;
    try {
      return await responderConVercelModelo(modelo, {
        ...opciones,
        onTexto: (t) => {
          empezo = true;
          opciones.onTexto?.(t);
        },
      });
    } catch (err) {
      ultimoError = err;
      // Si ya se le mostró texto a la persona, cambiar de modelo a mitad
      // de camino dejaría un informe mezclado: mejor informar el error.
      // Una clave inválida tampoco se arregla probando otro modelo.
      if (empezo || err.status === 401 || err.status === 403) throw err;
      console.warn(`Modelo ${modelo} falló (${err.message}); probando el siguiente.`);
    }
  }
  throw ultimoError;
}

// --- Claude directo (streaming) ---------------------------------------------
async function responderConClaude({ systemPrompt, userMessage, onTexto, maxTokens, temperatura }) {
  if (!anthropic) {
    throw errorCon("CLAUDE_NO_CONFIGURADO", "No hay una ANTHROPIC_API_KEY configurada en el servidor.");
  }
  const stream = anthropic.messages.stream({
    model: CLAUDE_MODEL,
    max_tokens: maxTokens || MAX_TOKENS_RESPUESTA,
    ...(temperatura !== undefined ? { temperature: temperatura } : {}),
    // El system prompt es idéntico en todas las consultas: cachearlo reduce
    // la latencia y el costo de cada pregunta.
    system: [{ type: "text", text: systemPrompt, cache_control: { type: "ephemeral" } }],
    messages: [{ role: "user", content: userMessage }],
  });
  let texto = "";
  stream.on("text", (delta) => {
    texto += delta;
    onTexto?.(delta);
  });
  await stream.finalMessage();
  return { texto, proveedor: "claude", modelo: CLAUDE_MODEL };
}

// --- Qwen local vía Ollama (streaming NDJSON) --------------------------------
// Los modelos de razonamiento (Qwen3 y similares) pueden escribir su
// "pensamiento" entre etiquetas <think>...</think>. Eso no le sirve al
// usuario final, así que se filtra mientras llega el texto.
function crearFiltroPensamiento(emitir) {
  let pendiente = "";
  let dentro = false;
  const APERTURA = /<think(?:ing)?>/i;
  const CIERRE = /<\/think(?:ing)?>/i;
  return {
    agregar(trozo) {
      pendiente += trozo;
      for (;;) {
        if (dentro) {
          const m = pendiente.match(CIERRE);
          if (!m) {
            pendiente = pendiente.slice(-12);
            return;
          }
          pendiente = pendiente.slice(m.index + m[0].length);
          dentro = false;
        } else {
          const m = pendiente.match(APERTURA);
          if (m) {
            if (m.index > 0) emitir(pendiente.slice(0, m.index));
            pendiente = pendiente.slice(m.index + m[0].length);
            dentro = true;
            continue;
          }
          // Guarda los últimos caracteres por si una etiqueta viene partida.
          const corte = pendiente.lastIndexOf("<");
          if (corte >= 0 && pendiente.length - corte < 12) {
            if (corte > 0) emitir(pendiente.slice(0, corte));
            pendiente = pendiente.slice(corte);
          } else {
            if (pendiente) emitir(pendiente);
            pendiente = "";
          }
          return;
        }
      }
    },
    terminar() {
      if (!dentro && pendiente) emitir(pendiente);
      pendiente = "";
    },
  };
}

async function responderConQwen({ systemPrompt, userMessage, onTexto, maxTokens, temperatura }) {
  if (!USAR_QWEN) {
    throw errorCon("QWEN_DESACTIVADO", "El modelo local Qwen está desactivado en este servidor (USAR_QWEN=false).");
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
        stream: true,
        options: {
          temperature: temperatura ?? OLLAMA_TEMPERATURA,
          num_ctx: OLLAMA_NUM_CTX,
          num_predict: maxTokens || MAX_TOKENS_RESPUESTA,
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
      throw errorCon(
        "QWEN_TIMEOUT",
        `Ollama no respondió en ${Math.round(OLLAMA_TIMEOUT_MS / 1000)} segundos. ¿Está corriendo? (¿"ollama serve" activo?)`
      );
    }
    throw errorCon(
      "QWEN_SIN_CONEXION",
      `No se pudo conectar con Ollama en ${OLLAMA_URL}. ¿Está instalado y corriendo? (comando: "ollama serve")`,
      { causa: err.message }
    );
  }
  clearTimeout(temporizador);

  if (!respuesta.ok) {
    const cuerpo = await respuesta.text().catch(() => "");
    throw errorCon(
      "QWEN_ERROR_HTTP",
      `Ollama respondió con error ${respuesta.status}. ¿Descargaste el modelo "${OLLAMA_MODEL}"? Prueba: ollama pull ${OLLAMA_MODEL}`,
      { detalle: cuerpo }
    );
  }

  let texto = "";
  const filtro = crearFiltroPensamiento((t) => {
    texto += t;
    onTexto?.(t);
  });
  for await (const linea of leerLineas(respuesta.body)) {
    if (!linea.trim()) continue;
    let evento;
    try {
      evento = JSON.parse(linea);
    } catch {
      continue;
    }
    if (evento.error) throw errorCon("QWEN_ERROR_STREAM", `Ollama: ${evento.error}`);
    if (evento.message?.content) filtro.agregar(evento.message.content);
  }
  filtro.terminar();

  if (!texto.trim()) {
    throw errorCon("QWEN_RESPUESTA_VACIA", "Ollama respondió sin contenido de texto (respuesta vacía o formato inesperado).");
  }
  return { texto: texto.trim(), proveedor: "qwen", modelo: OLLAMA_MODEL };
}

const PROVEEDORES = { vercel: responderConVercel, claude: responderConClaude, qwen: responderConQwen };

/**
 * Elige y ejecuta el proveedor pedido (o el predeterminado si no se pidió
 * ninguno / se pidió uno que no existe). onTexto recibe cada fragmento de
 * texto a medida que el modelo lo escribe.
 */
async function responder({ proveedor, systemPrompt, userMessage, onTexto, maxTokens, temperatura }) {
  const elegido = PROVEEDORES[proveedor] ? proveedor : proveedorPredeterminado();
  return PROVEEDORES[elegido]({ systemPrompt, userMessage, onTexto, maxTokens, temperatura });
}

/**
 * Pide al modelo una respuesta corta en JSON (para planificar búsquedas).
 * Solo usa proveedores en la nube: un modelo local tardaría más de lo que
 * ahorra. Devuelve null si no hay proveedor adecuado o si la respuesta no es
 * JSON válido; quien llama debe tener un plan de respaldo.
 */
async function completarJSON({ proveedor, systemPrompt, userMessage, maxTokens = 400 }) {
  const nube = ["vercel", "claude"].filter((id) => proveedoresDisponibles().some((p) => p.id === id));
  const elegido = nube.includes(proveedor) ? proveedor : nube[0];
  if (!elegido) return null;
  const { texto } = await PROVEEDORES[elegido]({ systemPrompt, userMessage, maxTokens, temperatura: 0 });
  const m = texto.match(/\{[\s\S]*\}/);
  if (!m) return null;
  try {
    return JSON.parse(m[0]);
  } catch {
    return null;
  }
}

module.exports = {
  responder,
  completarJSON,
  proveedoresDisponibles,
  proveedorPredeterminado,
  crearFiltroPensamiento,
};
