// Lee la configuración de .env y también de .env.local, que es donde la CLI
// de Vercel deja las credenciales ("vercel env pull", "vercel ai-gateway
// setup"). Si una variable está en ambos, gana .env.local.
require("dotenv").config({ path: [".env.local", ".env"], quiet: true });

const path = require("path");
const express = require("express");
const rateLimit = require("express-rate-limit");
const { buscarContexto } = require("./busquedaHibrida");
const proveedorIA = require("./proveedorIA");
const leyChile = require("./fuentes/leyChileOficial");
const mcp = require("./mcpLeyChile");
const multer = require("multer");
const lectorDocumentos = require("./fuentes/documentos");
const prompts = require("./prompts");
const { investigar } = require("./investigacion");
const cuentasRutas = require("./cuentas/rutas");
const planes = require("./cuentas/planes");
const { redactar } = require("./redactor");
const { indicadoresPara } = require("./indicadores");
const pjud = require("./fuentes/jurisprudencia/pjud");
const { buscarSentenciasTC } = require("./fuentes/jurisprudencia/tconstitucional");
const { buscarDictamenes } = require("./fuentes/jurisprudencia/contraloria");
const { buscarDoctrina } = require("./fuentes/doctrina");
const direccionTrabajo = require("./fuentes/jurisprudencia/direcciontrabajo");
const { buscarTDLC } = require("./fuentes/jurisprudencia/tdlc");
const { buscarOficiosSII } = require("./fuentes/jurisprudencia/sii");
const { CacheTTL, claveDeTexto } = require("./cache");

const PORT = process.env.PORT || 3000;
const USAR_CORPUS_REMOTO = process.env.USAR_CORPUS_REMOTO !== "false";

// Límites pensados para una app pública: evitan que alguien dispare miles de
// consultas y te deje una boleta gigante en Anthropic (cada consulta a Claude
// se cobra). Ajustables por variables de entorno.
const MAX_LARGO_PREGUNTA = Number(process.env.MAX_LARGO_PREGUNTA || 600);
const LIMITE_CONSULTAS_IA = Number(process.env.LIMITE_CONSULTAS_IA || 15);
const LIMITE_BUSQUEDAS = Number(process.env.LIMITE_BUSQUEDAS || 60);
const VENTANA_MINUTOS = Number(process.env.VENTANA_MINUTOS || 15);

const app = express();
// Necesario en Render/Railway/Fly para que el rate limit vea la IP real del
// visitante y no la del proxy del hosting.
app.set("trust proxy", 1);
// Dominio antiguo (.xyz): todo se redirige al dominio principal (APP_URL),
// salvo los avisos de Mercado Pago, que no siguen redirecciones y se
// procesan aquí mismo.
const DOMINIOS_ANTIGUOS = (process.env.DOMINIOS_ANTIGUOS || "derechochileia.xyz,www.derechochileia.xyz")
  .split(",").map((d) => d.trim().toLowerCase()).filter(Boolean);
app.use((req, res, next) => {
  const host = String(req.headers["x-forwarded-host"] || req.headers.host || "").split(":")[0].toLowerCase();
  if (process.env.APP_URL && DOMINIOS_ANTIGUOS.includes(host) && req.path !== "/api/pagos/webhook") {
    return res.redirect(308, process.env.APP_URL.replace(/\/+$/, "") + req.originalUrl);
  }
  next();
});
app.use(express.json({ limit: "32kb" }));
// Vercel entrega en cada petición un token OIDC que sirve para autenticarse
// ante AI Gateway sin clave; se registra para usarlo como respaldo.
app.use((req, res, next) => {
  proveedorIA.registrarTokenOidc(req.headers["x-vercel-oidc-token"]);
  next();
});
app.use(express.static(path.join(__dirname, "public")));

const limitadorIA = rateLimit({
  windowMs: VENTANA_MINUTOS * 60 * 1000,
  limit: LIMITE_CONSULTAS_IA,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: `Has alcanzado el límite de ${LIMITE_CONSULTAS_IA} preguntas cada ${VENTANA_MINUTOS} minutos. Espera un rato y vuelve a intentar.`,
  },
});

// Los archivos se procesan en memoria y se descartan: no se guarda copia
// en disco. Para documentos con material de clientes, eso importa.
const MAX_MB_ARCHIVO = Number(process.env.MAX_MB_ARCHIVO || 20);
const subida = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_MB_ARCHIVO * 1024 * 1024, files: 1 },
});

const limitadorBusqueda = rateLimit({
  windowMs: VENTANA_MINUTOS * 60 * 1000,
  limit: LIMITE_BUSQUEDAS,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Demasiadas búsquedas seguidas. Espera un momento." },
});

// --- Cuentas, planes y pagos (Mercado Pago) ------------------------------
cuentasRutas.registrarRutas(app);

// --- Endpoint 0: qué proveedores de IA están disponibles (Claude / Qwen) --
app.get("/api/proveedores", (req, res) => {
  res.json({
    proveedores: proveedorIA.proveedoresDisponibles(),
    predeterminado: proveedorIA.proveedorPredeterminado(),
  });
});

// --- Endpoints de VIGENCIA (corpus con historial de versiones) ---------
// Responden las tres preguntas que un análisis jurídico serio necesita y
// que el texto vigente por sí solo no contesta:
//   ¿cuándo cambió esta norma y por qué ley?   /api/versiones?idNorma=...
//   ¿cómo se leía antes de la reforma?         /api/diferencias?idNorma=...&desde=...&hasta=...
//   ¿qué normas la modificaron?                /api/modificaciones?idNorma=...

function exigirIdNorma(req, res) {
  const idNorma = (req.query.idNorma || "").toString().trim();
  if (!idNorma || !/^\d+$/.test(idNorma)) {
    res.status(400).json({
      error: "Indica 'idNorma' (número entero). Lo obtienes buscando la norma con /api/buscar.",
    });
    return null;
  }
  return idNorma;
}

app.get("/api/versiones", limitadorBusqueda, async (req, res) => {
  const idNorma = exigirIdNorma(req, res);
  if (!idNorma) return;
  try {
    res.json({ idNorma, versiones: await mcp.listarVersiones(idNorma) });
  } catch (err) {
    console.error("Error en /api/versiones:", err);
    res.status(502).json({ error: "No se pudo obtener el historial de versiones.", detalle: err.message });
  }
});

app.get("/api/diferencias", limitadorBusqueda, async (req, res) => {
  const idNorma = exigirIdNorma(req, res);
  if (!idNorma) return;
  const desde = (req.query.desde || "").toString().trim();
  const hasta = (req.query.hasta || "").toString().trim();
  const fechaValida = (f) => /^\d{4}-\d{2}-\d{2}$/.test(f);
  if (!fechaValida(desde) || !fechaValida(hasta)) {
    return res.status(400).json({ error: "Indica 'desde' y 'hasta' en formato AAAA-MM-DD." });
  }
  try {
    res.json({ idNorma, desde, hasta, diferencias: await mcp.compararVersiones(idNorma, desde, hasta) });
  } catch (err) {
    console.error("Error en /api/diferencias:", err);
    res.status(502).json({ error: "No se pudo comparar las versiones.", detalle: err.message });
  }
});

app.get("/api/modificaciones", limitadorBusqueda, async (req, res) => {
  const idNorma = exigirIdNorma(req, res);
  if (!idNorma) return;
  try {
    res.json({ idNorma, modificaciones: await mcp.obtenerModificaciones(idNorma) });
  } catch (err) {
    console.error("Error en /api/modificaciones:", err);
    res.status(502).json({ error: "No se pudo obtener las modificaciones.", detalle: err.message });
  }
});

// --- Endpoint: texto oficial de una norma (fuente BCN/LeyChile) --------
// Permite pedir cualquier ley o código por su número, y opcionalmente el
// texto tal como estaba vigente a una fecha determinada.
//   /api/norma?ley=19496
//   /api/norma?idNorma=172986&fecha=2005-01-01
//   /api/norma?ley=19496&articulo=3
app.get("/api/norma", limitadorBusqueda, async (req, res) => {
  const idLey = (req.query.ley || "").toString().trim();
  const idNorma = (req.query.idNorma || "").toString().trim();
  const fecha = (req.query.fecha || "").toString().trim();
  const articulo = (req.query.articulo || "").toString().trim();

  if (!idLey && !idNorma) {
    return res.status(400).json({
      error: "Indica 'ley' (número de ley) o 'idNorma'. Ejemplo: /api/norma?ley=19496",
    });
  }
  if (fecha && !/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
    return res.status(400).json({ error: "El parámetro 'fecha' debe tener formato AAAA-MM-DD." });
  }

  try {
    if (articulo) {
      const r = await leyChile.obtenerArticulo({ idLey, idNorma, numeroArticulo: articulo, fecha });
      if (!r.encontrado) {
        return res.status(404).json({
          error: `No se encontró el artículo "${articulo}" en esa norma.`,
          norma: r.norma,
        });
      }
      return res.json({ fuente: "oficial-bcn", ...r });
    }

    const norma = await leyChile.obtenerNorma({ idLey, idNorma, fecha });
    res.json({
      fuente: "oficial-bcn",
      ...norma,
      // El articulado completo de un código puede ser enorme: se entrega el
      // índice, y el texto de un artículo puntual se pide con &articulo=N
      articulos: norma.articulos.map((a) => ({
        articulo: a.articulo,
        numero: a.numero,
        jerarquia: a.jerarquia,
        derogado: a.derogado,
        fechaVersion: a.fechaVersion,
        extracto: a.texto.slice(0, 300),
      })),
    });
  } catch (err) {
    console.error("Error consultando LeyChile:", err);
    res.status(502).json({ error: err.message, codigo: err.codigo || null });
  }
});

// --- Endpoint 1: solo buscador (sin IA) ---------------------------------
app.get("/api/buscar", limitadorBusqueda, async (req, res) => {
  const consulta = (req.query.q || "").toString().trim().slice(0, MAX_LARGO_PREGUNTA);
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

// --- Streaming ------------------------------------------------------------
// Las respuestas de la IA se envían como Server-Sent Events: primero los
// artículos encontrados (la persona ya puede leerlos) y luego el informe a
// medida que el modelo lo escribe. Eventos:
//   estado      { etapa, mensaje }
//   documentos  { documentos, corpus_completo_disponible, aviso_corpus_completo, ... }
//   texto       { t }                         fragmento del informe
//   fin         { proveedor_usado, modelo, desde_cache }
//   error       { error, codigo }
function abrirStream(res) {
  res.status(200);
  res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
  res.setHeader("Cache-Control", "no-cache, no-transform");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("X-Accel-Buffering", "no");
  res.flushHeaders?.();
  return {
    enviar(evento, datos) {
      if (res.writableEnded) return;
      res.write(`event: ${evento}\ndata: ${JSON.stringify(datos)}\n\n`);
    },
    cerrar() {
      if (!res.writableEnded) res.end();
    },
  };
}

function quiereStream(req) {
  const pedido = req.body?.stream;
  return pedido === true || pedido === "true" || (req.headers.accept || "").includes("text/event-stream");
}

// Respuestas completas ya generadas. Una pregunta idéntica (misma
// redacción normalizada, mismo proveedor, sin conversación previa) se
// responde al instante. Solo se guardan respuestas hechas con el corpus
// completo disponible.
const CACHE_RESPUESTAS_MINUTOS = Number(process.env.CACHE_RESPUESTAS_MINUTOS || 360);
const cacheRespuestas = new CacheTTL({ maximo: 300, ttlMs: CACHE_RESPUESTAS_MINUTOS * 60 * 1000 });

function validarProveedor(req, res) {
  const disponibles = proveedorIA.proveedoresDisponibles();
  if (disponibles.length === 0) {
    res.status(500).json({
      error:
        "No hay ningún proveedor de IA configurado en el servidor (ni AI_GATEWAY_API_KEY, ni ANTHROPIC_API_KEY, ni Qwen local). Revisa el archivo .env (ver README).",
    });
    return null;
  }
  const pedido = (req.body?.proveedor || "").toString().trim();
  if (pedido && !disponibles.some((p) => p.id === pedido)) {
    res.status(400).json({
      error: `El proveedor "${pedido}" no está disponible en este servidor.`,
      proveedores_disponibles: disponibles,
    });
    return null;
  }
  return pedido || proveedorIA.proveedorPredeterminado();
}

/**
 * Ejecuta una generación con la IA, en streaming o en JSON según lo que
 * pida el cliente. `preparar` busca el contexto y devuelve
 * { meta, systemPrompt, userMessage, claveCache }.
 */
async function generar(req, res, { proveedor, preparar, mensajeBuscando }) {
  const stream = quiereStream(req);
  const canal = stream ? abrirStream(res) : null;
  const inicio = Date.now();

  try {
    canal?.enviar("estado", { etapa: "buscando", mensaje: mensajeBuscando });
    const { meta, systemPrompt, userMessage, claveCache: claveBase, maxTokens, modo, fuentes } = await preparar();
    canal?.enviar("documentos", meta);

    // Cada plan puede tener su propio modelo (el gratis, uno más económico).
    // La caché se separa por modelo para no mezclar calidades entre planes.
    const modeloPlan = req.usuario ? planes.planDe(req.usuario).modelo || undefined : undefined;
    const claveCache = claveBase && modeloPlan ? `${claveBase}|${modeloPlan}` : claveBase;

    const enCache = claveCache ? cacheRespuestas.obtener(claveCache) : undefined;
    if (enCache) {
      const final = { proveedor_usado: enCache.proveedor, modelo: enCache.modelo, desde_cache: true, ms: Date.now() - inicio };
      if (!stream) return res.json({ ...meta, respuesta: enCache.texto, ...final });
      canal.enviar("texto", { t: enCache.texto });
      canal.enviar("fin", final);
      return canal.cerrar();
    }

    canal?.enviar("estado", { etapa: "redactando", mensaje: "Redactando el informe…" });
    // redactar(): llama al modelo, completa si se cortó y valida la salida
    // (frases prohibidas, secciones, citas fieles, roles existentes).
    const { texto, proveedor: usado, modelo } = await redactar({
      proveedor,
      systemPrompt,
      userMessage,
      maxTokens,
      modelo: modeloPlan,
      modo,
      fuentes,
      onTexto: canal ? (t) => canal.enviar("texto", { t }) : undefined,
      onReemplazo: canal ? (t) => canal.enviar("reemplazo", { t }) : undefined,
    });
    if (claveCache) cacheRespuestas.guardar(claveCache, { texto, proveedor: usado, modelo });

    const final = { proveedor_usado: usado, modelo, desde_cache: false, ms: Date.now() - inicio };
    if (!stream) return res.json({ ...meta, respuesta: texto, ...final });
    canal.enviar("fin", final);
    canal.cerrar();
  } catch (err) {
    res.locals.consultaFallida = true;
    console.error("Error generando la respuesta:", err);
    const error = {
      error: err?.message || "Ocurrió un error al generar la respuesta. Revisa la consola del servidor.",
      codigo: err?.codigo || null,
    };
    if (canal) {
      canal.enviar("error", error);
      return canal.cerrar();
    }
    const status = err?.status && err.status < 500 ? err.status : 502;
    res.status(status).json(error);
  }
}

// --- Endpoint 2: pregunta en lenguaje natural + informe de la IA --------
app.post("/api/consultar", limitadorIA, cuentasRutas.exigirPlan, async (req, res) => {
  const pregunta = (req.body?.pregunta || "").toString().trim();
  if (!pregunta) {
    return res.status(400).json({ error: "Falta 'pregunta' en el cuerpo de la solicitud." });
  }
  if (pregunta.length > MAX_LARGO_PREGUNTA) {
    return res.status(400).json({
      error: `La pregunta es demasiado larga (máximo ${MAX_LARGO_PREGUNTA} caracteres). Resúmela y vuelve a intentar.`,
    });
  }
  const proveedor = validarProveedor(req, res);
  if (!proveedor) return;
  const historial = prompts.sanearHistorial(req.body?.historial);
  // "consulta": informe jurídico. "procedimiento": guía de tramitación paso
  // a paso para el abogado que litiga.
  const modo = req.body?.modo === "procedimiento" ? "procedimiento" : "consulta";

  await generar(req, res, {
    proveedor,
    mensajeBuscando: "Buscando normas, jurisprudencia y doctrina…",
    preparar: async () => {
      // En una repregunta, la pregunta anterior aporta la materia
      // ("¿y si es a plazo fijo?" por sí sola no dice de qué se habla).
      const consultaBusqueda = historial.length
        ? `${pregunta} ${historial[historial.length - 1].pregunta}`
        : pregunta;
      const [r, indicadores] = await Promise.all([
        investigar({ pregunta, consultaBusqueda, proveedor, modo }),
        indicadoresPara(consultaBusqueda),
      ]);
      return {
        modo,
        fuentes: { normas: r.documentos, jurisprudencia: r.jurisprudencia },
        meta: {
          pregunta,
          modo,
          documentos_usados: r.documentos,
          jurisprudencia: r.jurisprudencia,
          doctrina: r.doctrina,
          avisos_fuentes: r.avisos,
          plan: { materia: r.plan.materia, sedes: r.plan.sedes, origen: r.plan.origen },
          corpus_completo_disponible: USAR_CORPUS_REMOTO && r.remotoDisponible,
          aviso_corpus_completo: !r.remotoDisponible ? r.remotoError : null,
        },
        systemPrompt: prompts.promptSistema(modo),
        userMessage: prompts.mensajeConsulta({
          pregunta,
          documentos: r.documentos,
          remotoDisponible: r.remotoDisponible,
          remotoError: r.remotoError,
          historial,
          jurisprudencia: r.jurisprudencia,
          doctrina: r.doctrina,
          modo,
          indicadores,
        }),
        // Una guía de tramitación completa es bastante más larga que un informe.
        maxTokens: modo === "procedimiento" ? Number(process.env.MAX_TOKENS_PROCEDIMIENTO || 10000) : Number(process.env.MAX_TOKENS_CONSULTA || 6000),
        claveCache: r.remotoDisponible && historial.length === 0 ? `${proveedor}|${modo}|${claveDeTexto(pregunta)}` : null,
      };
    },
  });
});

// --- Endpoint: analizar un documento propio contra la legislación ------
// El archivo se lee en memoria, se extrae su texto, se buscan las normas
// pertinentes y se le pide a la IA un análisis del documento a la luz de
// esas normas. El archivo no se guarda en ninguna parte.
app.post("/api/documento", limitadorIA, cuentasRutas.exigirPlan, subida.single("archivo"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      error: `Falta el archivo. Formatos aceptados: ${lectorDocumentos.formatosAceptados()}.`,
    });
  }

  const pregunta = (req.body?.pregunta || "").toString().trim();
  if (!pregunta) {
    return res.status(400).json({
      error: "Indica qué quieres saber del documento (ej: '¿qué riesgos tiene para el arrendatario?').",
    });
  }
  if (pregunta.length > MAX_LARGO_PREGUNTA) {
    return res.status(400).json({ error: `La pregunta es demasiado larga (máximo ${MAX_LARGO_PREGUNTA} caracteres).` });
  }

  const proveedor = validarProveedor(req, res);
  if (!proveedor) return;

  // 1. Leer el documento
  let textoDocumento;
  try {
    textoDocumento = await lectorDocumentos.extraerTexto(req.file.buffer, req.file.originalname);
  } catch (err) {
    return res.status(400).json({ error: err.message, codigo: err.codigo || null });
  }
  if (!textoDocumento.trim()) {
    return res.status(400).json({ error: "No se pudo extraer texto del documento (llegó vacío)." });
  }

  const seleccion = lectorDocumentos.seleccionarFragmentos(textoDocumento, pregunta);

  await generar(req, res, {
    proveedor,
    mensajeBuscando: `Leyendo ${req.file.originalname} y buscando las normas aplicables…`,
    preparar: async () => {
      // 2. Investigar como en una consulta: la pregunta sola ("¿qué riesgos
      //    tiene?") no dice la materia, así que se le suma el inicio del
      //    documento. Trae artículos clave, normas, jurisprudencia y doctrina.
      let r = { documentos: [], jurisprudencia: [], doctrina: [], avisos: [], remotoDisponible: false, remotoError: null };
      try {
        r = await investigar({
          pregunta,
          consultaBusqueda: `${pregunta}\n\nDocumento (${req.file.originalname}), inicio:\n${textoDocumento.slice(0, 1200)}`,
          proveedor,
          limiteLegislacion: 10,
        });
      } catch (err) {
        console.error("Error investigando para el documento:", err);
      }
      const normas = r.documentos;
      const { remotoDisponible, remotoError } = r;
      const indicadores = await indicadoresPara(`${pregunta} ${textoDocumento.slice(0, 3000)}`);
      return {
        meta: {
          archivo: req.file.originalname,
          pregunta,
          documento: {
            caracteres: textoDocumento.length,
            recortado: seleccion.recortado,
            fragmentos_usados: seleccion.fragmentosUsados,
            fragmentos_totales: seleccion.totalFragmentos,
          },
          normas_usadas: normas,
          jurisprudencia: r.jurisprudencia,
          doctrina: r.doctrina,
          avisos_fuentes: r.avisos,
          corpus_completo_disponible: USAR_CORPUS_REMOTO && remotoDisponible,
          aviso_corpus_completo: !remotoDisponible ? remotoError : null,
        },
        modo: "documento",
        fuentes: { normas, jurisprudencia: r.jurisprudencia, documento: textoDocumento },
        systemPrompt: prompts.promptSistema("documento"),
        userMessage: prompts.mensajeDocumento({
          pregunta,
          normas,
          nombreArchivo: req.file.originalname,
          seleccion,
          jurisprudencia: r.jurisprudencia,
          doctrina: r.doctrina,
          indicadores,
        }),
        maxTokens: Number(process.env.MAX_TOKENS_CONSULTA || 6000),
        // Los documentos de clientes nunca se cachean.
        claveCache: null,
      };
    },
  });
});

// --- Endpoint: verificación de vigencia contra la fuente oficial (BCN) --
// Recibe los artículos citados y confirma, contra el XML oficial de
// LeyChile, si cada uno está vigente o derogado y la fecha de su última
// versión. Se consulta aparte del informe para no retrasar la respuesta:
// la interfaz lo pide en paralelo y marca cada artículo cuando llega.
const TIMEOUT_VIGENCIA_MS = Number(process.env.TIMEOUT_VIGENCIA_MS || 20000);

app.post("/api/vigencia", limitadorBusqueda, async (req, res) => {
  const pedidos = Array.isArray(req.body?.articulos) ? req.body.articulos.slice(0, 20) : [];
  const validos = pedidos
    .map((a) => ({ idNorma: String(a?.idNorma || "").trim(), numero: String(a?.numero || "").trim() }))
    .filter((a) => /^\d+$/.test(a.idNorma) && a.numero);
  if (validos.length === 0) {
    return res.status(400).json({ error: "Envía 'articulos': [{ idNorma, numero }]." });
  }

  // Una descarga por norma, aunque se pidan varios artículos de ella.
  const porNorma = new Map();
  for (const a of validos) {
    if (!porNorma.has(a.idNorma)) porNorma.set(a.idNorma, []);
    porNorma.get(a.idNorma).push(a.numero);
  }

  const resultados = [];
  await Promise.all(
    [...porNorma.entries()].map(async ([idNorma, numeros]) => {
      try {
        let temporizador;
        await Promise.race([
          leyChile.obtenerNorma({ idNorma }),
          new Promise((_, reject) => {
            temporizador = setTimeout(() => reject(new Error("Tiempo de espera agotado")), TIMEOUT_VIGENCIA_MS);
          }),
        ]).finally(() => clearTimeout(temporizador));
        for (const numero of numeros) {
          const r = await leyChile.obtenerArticulo({ idNorma, numeroArticulo: numero });
          resultados.push({
            idNorma,
            numero,
            estado: !r.encontrado ? "no_encontrado" : r.articulo.derogado || r.norma.derogado ? "derogado" : "vigente",
            fechaVersion: r.articulo?.fechaVersion || r.norma.fechaVersion || null,
            fuenteUrl: r.norma.fuenteUrl || null,
          });
        }
      } catch (err) {
        for (const numero of numeros) {
          resultados.push({ idNorma, numero, estado: "error", error: err.message });
        }
      }
    })
  );
  res.set("Cache-Control", "private, max-age=600");
  res.json({ verificado_en: new Date().toISOString(), fuente: "LeyChile / BCN (oficial)", resultados });
});

// --- Endpoint: búsqueda directa de jurisprudencia y doctrina -----------
//   /api/jurisprudencia?q=nulidad del despido&tribunal=corte_suprema
//   /api/jurisprudencia?q=...&fuente=tc | cgr | doctrina
app.get("/api/jurisprudencia", limitadorBusqueda, async (req, res) => {
  const q = (req.query.q || "").toString().trim().slice(0, 200);
  if (!q) return res.status(400).json({ error: "Falta el parámetro 'q'." });
  const fuente = (req.query.fuente || "pjud").toString();
  const tribunal = (req.query.tribunal || "corte_suprema").toString();
  const limite = Math.min(Math.max(Number(req.query.limite) || 5, 1), 10);
  try {
    let r;
    if (fuente === "tc") r = await buscarSentenciasTC({ consulta: q, limite });
    else if (fuente === "cgr") r = await buscarDictamenes({ texto: q, limite });
    else if (fuente === "doctrina") r = await buscarDoctrina({ consulta: q, limite });
    else if (fuente === "dt") r = await direccionTrabajo.buscarDictamenesDT({ consulta: q, limite });
    else if (fuente === "tdlc") r = await buscarTDLC({ consulta: q, limite });
    else if (fuente === "sii") r = await buscarOficiosSII({ consulta: q, limite });
    else {
      if (!pjud.BUSCADORES[tribunal]) {
        return res.status(400).json({ error: `Tribunal desconocido. Opciones: ${Object.keys(pjud.BUSCADORES).join(", ")}` });
      }
      r = await pjud.buscarSentencias({ tribunal, todas: q, limite });
    }
    res.json({ consulta: q, fuente, ...r });
  } catch (err) {
    console.error("Error en /api/jurisprudencia:", err);
    res.status(502).json({ error: err.message });
  }
});

// --- Diagnóstico de fuentes ----------------------------------------------
// Prueba cada fuente externa con una consulta real y dice cuál responde.
// La portada lo usa para mostrar el estado en vivo de cada fuente, así que el
// resultado se guarda unos minutos: las visitas no disparan búsquedas reales
// en los tribunales cada vez.
const MINUTOS_ESTADO_FUENTES = Number(process.env.MINUTOS_ESTADO_FUENTES || 10);
const cacheEstadoFuentes = new CacheTTL({ maximo: 2, ttlMs: MINUTOS_ESTADO_FUENTES * 60 * 1000 });

app.get("/api/fuentes", limitadorBusqueda, async (req, res) => {
  // Si todas responden, el estado se guarda los minutos configurados; si
  // alguna falla, solo un minuto, para que la portada se corrija sola pronto.
  let estado = cacheEstadoFuentes.obtener("estado");
  if (!estado) {
    estado = await probarFuentes();
    const todasOk = estado.resultados.every((r) => r.ok);
    cacheEstadoFuentes.guardar("estado", estado, todasOk ? undefined : 60 * 1000);
  }
  res.set("Cache-Control", "public, max-age=60");
  res.json(estado);
});

async function probarFuentes() {
  const probar = async (id, nombre, fn) => {
    const inicio = Date.now();
    try {
      const detalle = await Promise.race([
        fn(),
        new Promise((_, reject) => setTimeout(() => reject(new Error("tiempo de espera agotado")), 25000)),
      ]);
      return { id, fuente: nombre, ok: true, ms: Date.now() - inicio, detalle };
    } catch (err) {
      return { id, fuente: nombre, ok: false, ms: Date.now() - inicio, error: err.message };
    }
  };
  const resultados = await Promise.all([
    probar("legislacion", "Legislación (leyes.pisanvs.cl)", async () => {
      const r = await buscarContexto("feriado anual vacaciones", 3);
      if (!r.remotoDisponible) throw new Error(r.remotoError || "sin respuesta");
      return `${r.documentos.length} artículos`;
    }),
    probar("bcn", "LeyChile oficial (BCN)", async () => {
      const r = await leyChile.obtenerArticulo({ idNorma: "207436", numeroArticulo: "67" });
      return r.encontrado ? "Código del Trabajo, art. 67 encontrado" : "respondió, pero sin el artículo";
    }),
    probar("pjud", "Poder Judicial (juris.pjud.cl)", async () => {
      const r = await pjud.buscarSentencias({ tribunal: "corte_suprema", todas: "nulidad despido", limite: 1 });
      return `${r.total} fallos en el índice`;
    }),
    probar("tc", "Tribunal Constitucional", async () => {
      const r = await buscarSentenciasTC({ consulta: "debido proceso", limite: 1 });
      return `${r.total} sentencias en el índice`;
    }),
    probar("cgr", "Contraloría (dictámenes)", async () => {
      const r = await buscarDictamenes({ texto: "feriado legal", limite: 1 });
      return `${r.total} dictámenes en el índice`;
    }),
    probar("dt", "Dirección del Trabajo (dictámenes)", async () => {
      const r = await direccionTrabajo.buscarDictamenesDT({ consulta: "feriado anual", limite: 1 });
      return `${r.total} dictámenes indexados (${r.anios.join(", ")})`;
    }),
    probar("tdlc", "Tribunal de Defensa de la Libre Competencia", async () => {
      const r = await buscarTDLC({ consulta: "colusión", limite: 1 });
      return `${r.total} sentencias en el catálogo`;
    }),
    probar("sii", "Servicio de Impuestos Internos (oficios)", async () => {
      const r = await buscarOficiosSII({ consulta: "crédito fiscal IVA", limite: 1 });
      return `${r.total} oficios (${r.anios.join(", ")})`;
    }),
    probar("doctrina", "Doctrina (Crossref + OpenAlex)", async () => {
      const r = await buscarDoctrina({ consulta: "despido injustificado indemnización", limite: 1 });
      return `${r.resultados.length} artículo(s) de acceso abierto verificados`;
    }),
  ]);
  return { comprobado_en: new Date().toISOString(), resultados };
}

// --- Salud del servicio -------------------------------------------------
app.get("/api/salud", (req, res) => {
  res.json({
    ok: true,
    proveedores: proveedorIA.proveedoresDisponibles().map((p) => p.id),
    corpus_remoto: USAR_CORPUS_REMOTO,
  });
});

// Errores de subida (archivo demasiado grande, etc.)
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    const mensaje = err.code === "LIMIT_FILE_SIZE"
      ? `El archivo supera el límite de ${MAX_MB_ARCHIVO} MB.`
      : `Error al subir el archivo: ${err.message}`;
    return res.status(400).json({ error: mensaje });
  }
  return next(err);
});

// Abre la conexión con el corpus remoto apenas arranca el servidor, para
// que la primera pregunta no pague el costo del saludo inicial.
// El índice de dictámenes de la Dirección del Trabajo se arma de antemano.
if (process.env.USAR_JURISPRUDENCIA !== "false") direccionTrabajo.precalentar();

if (USAR_CORPUS_REMOTO) {
  mcp.conectar().catch((err) => console.warn("Corpus remoto aún no disponible:", err.message));
}

// En Vercel, la plataforma importa `app` y se encarga de recibir las
// peticiones; en local (npm start) se levanta el servidor normalmente.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Derecho Chile IA escuchando en http://localhost:${PORT}`);
    console.log(
      `Límites activos: ${LIMITE_CONSULTAS_IA} preguntas y ${LIMITE_BUSQUEDAS} búsquedas por IP cada ${VENTANA_MINUTOS} min.`
    );
    const disponibles = proveedorIA.proveedoresDisponibles();
    if (disponibles.length === 0) {
      console.warn(
        "ADVERTENCIA: no hay ningún proveedor de IA configurado (ni AI_GATEWAY_API_KEY, ni ANTHROPIC_API_KEY, ni Qwen local). El buscador funcionará, pero el chat con IA no."
      );
    } else {
      console.log(
        `Proveedores de IA disponibles: ${disponibles.map((p) => p.id).join(", ")} (predeterminado: ${proveedorIA.proveedorPredeterminado()}).`
      );
    }
  });
}

module.exports = app;
