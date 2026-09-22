require("dotenv").config();

const path = require("path");
const express = require("express");
const rateLimit = require("express-rate-limit");
const { buscarContexto } = require("./busquedaHibrida");
const proveedorIA = require("./proveedorIA");
const leyChile = require("./fuentes/leyChileOficial");

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
app.use(express.json({ limit: "32kb" }));
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

const limitadorBusqueda = rateLimit({
  windowMs: VENTANA_MINUTOS * 60 * 1000,
  limit: LIMITE_BUSQUEDAS,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Demasiadas búsquedas seguidas. Espera un momento." },
});

// --- Endpoint 0: qué proveedores de IA están disponibles (Claude / Qwen) --
app.get("/api/proveedores", (req, res) => {
  res.json({
    proveedores: proveedorIA.proveedoresDisponibles(),
    predeterminado: proveedorIA.PROVEEDOR_PREDETERMINADO,
  });
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

// --- Endpoint 2: pregunta en lenguaje natural + respuesta de la IA -----
app.post("/api/consultar", limitadorIA, async (req, res) => {
  const pregunta = (req.body?.pregunta || "").toString().trim();
  if (!pregunta) {
    return res.status(400).json({ error: "Falta 'pregunta' en el cuerpo de la solicitud." });
  }
  if (pregunta.length > MAX_LARGO_PREGUNTA) {
    return res.status(400).json({
      error: `La pregunta es demasiado larga (máximo ${MAX_LARGO_PREGUNTA} caracteres). Resúmela y vuelve a intentar.`,
    });
  }
  const proveedoresDisponibles = proveedorIA.proveedoresDisponibles();
  if (proveedoresDisponibles.length === 0) {
    return res.status(500).json({
      error:
        "No hay ningún proveedor de IA configurado en el servidor (ni ANTHROPIC_API_KEY ni Qwen local). Revisa el archivo .env (ver README).",
    });
  }
  const proveedorPedido = (req.body?.proveedor || "").toString().trim();
  if (proveedorPedido && !proveedoresDisponibles.some((p) => p.id === proveedorPedido)) {
    return res.status(400).json({
      error: `El proveedor "${proveedorPedido}" no está disponible en este servidor.`,
      proveedores_disponibles: proveedoresDisponibles,
    });
  }

  let relevantes, remotoDisponible, remotoError;
  try {
    ({ documentos: relevantes, remotoDisponible, remotoError } = await buscarContexto(pregunta, 14));
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

  const systemPrompt = `Eres un asistente jurídico especializado en derecho chileno. Trabajas como lo haría un equipo legal: no despachas una respuesta corta, sino un análisis ordenado, riguroso y honesto sobre sus propios límites.

ESTRUCTURA OBLIGATORIA DE TU RESPUESTA (usa estos títulos, en este orden; omite una sección solo si de verdad no aplica):

## Respuesta directa
Dos o tres frases que respondan concretamente lo preguntado. Sin rodeos.

## Marco normativo aplicable
Cada norma pertinente del contexto, citada como "Cuerpo legal, artículo N", explicando qué dispone. Cita el texto literal entre comillas cuando el tenor exacto importe. Si hay varias normas relacionadas (regla general y excepción, ley y su modificación), explica cómo se articulan entre sí.

## Análisis
Cómo se aplican esas normas a lo preguntado. Distingue la regla general de sus excepciones. Señala los requisitos que deben cumplirse, los plazos, y de quién es la carga de probar cada cosa si viene al caso.

## Situaciones particulares y excepciones
Casos en que la respuesta cambia (tipo de contrato, calidad de las partes, antigüedad, regímenes especiales, normas transitorias). Si la pregunta no entrega datos suficientes para determinar qué régimen aplica, dilo y explica de qué dato depende.

## Qué debe verificarse antes de actuar
Sección obligatoria, y la más importante para la seriedad del análisis. Enumera con honestidad lo que tú NO pudiste revisar y que un abogado sí revisaría:
- Vigencia y modificaciones: no puedes confirmar que el texto recibido sea la versión vigente hoy, ni si hay reformas posteriores.
- Jurisprudencia: no tienes acceso a fallos de la Corte Suprema ni de Cortes de Apelaciones, que en Chile determinan cómo se interpreta la norma en la práctica.
- Dictámenes administrativos: no tienes acceso a dictámenes de la Dirección del Trabajo, Contraloría, SII u otros órganos, que suelen ser decisivos en materias específicas.
- Reglamentos y normativa complementaria que no aparezca en el contexto entregado.
- Cualquier cuerpo legal que probablemente sea relevante pero que no esté entre los documentos recibidos: nómbralo explícitamente para que la persona sepa qué buscar.

## Conclusión
Cierre breve y práctico: qué hacer con esta información y ante quién acudir (tribunal, servicio público, abogado especialista en la materia).

REGLAS ESTRICTAS E INNEGOCIABLES:
1. Usa SOLO la información de los documentos legales entregados como contexto. Nunca inventes un artículo, una ley, un número, un plazo ni una cita que no esté literalmente en ese contexto.
2. Si el contexto no alcanza para responder, dilo con todas sus letras en "Respuesta directa" y dedica la respuesta a explicar qué normas habría que revisar. Una respuesta honesta que reconoce un vacío vale mucho más que una completa inventada.
3. Todo número de artículo que escribas debe aparecer tal cual en los documentos. Ante la duda, describe la norma sin numerarla.
4. Si un documento viene marcado como EXTRACTO, adviértelo al citarlo y recomienda revisar el texto íntegro en la fuente oficial.
5. Si solo recibiste documentos del corpus local de demostración (ejemplos curados a mano, no el corpus completo), adviértelo al inicio: la respuesta puede estar ignorando legislación relevante.
6. Nunca presentes tu análisis como una opinión legal definitiva ni garantices un resultado.
7. Escribe en español de Chile, con precisión técnica pero comprensible. Si la pregunta viene en lenguaje cotidiano, mantén el rigor pero explica los términos técnicos que uses.
8. Cierra siempre recordando que esto es información general, que no constituye asesoría legal y que no reemplaza a un abogado o abogada.`;

  const userMessage = `Documentos disponibles como contexto:\n\n${contexto || "(no se encontraron documentos relevantes)"}${avisoCorpusCompleto}\n\nPregunta del usuario: ${pregunta}`;

  try {
    const { texto: textoRespuesta, proveedor: proveedorUsado } = await proveedorIA.responder({
      proveedor: proveedorPedido,
      systemPrompt,
      userMessage,
    });

    res.json({
      pregunta,
      respuesta: textoRespuesta,
      proveedor_usado: proveedorUsado,
      documentos_usados: relevantes,
      corpus_completo_disponible: USAR_CORPUS_REMOTO && remotoDisponible,
      aviso_corpus_completo: !remotoDisponible ? remotoError : null,
    });
  } catch (err) {
    console.error("Error consultando al proveedor de IA:", err);
    res.status(502).json({
      error:
        err?.message ||
        "Ocurrió un error al generar la respuesta. Revisa la consola del servidor.",
      codigo: err?.codigo || null,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Juris IA Chile escuchando en http://localhost:${PORT}`);
  console.log(
    `Límites activos: ${LIMITE_CONSULTAS_IA} preguntas y ${LIMITE_BUSQUEDAS} búsquedas por IP cada ${VENTANA_MINUTOS} min.`
  );
  const disponibles = proveedorIA.proveedoresDisponibles();
  if (disponibles.length === 0) {
    console.warn(
      "ADVERTENCIA: no hay ningún proveedor de IA configurado (ni ANTHROPIC_API_KEY ni Qwen local). El buscador funcionará, pero el chat con IA no."
    );
  } else {
    console.log(
      `Proveedores de IA disponibles: ${disponibles.map((p) => p.id).join(", ")} (predeterminado: ${proveedorIA.PROVEEDOR_PREDETERMINADO}).`
    );
  }
});
