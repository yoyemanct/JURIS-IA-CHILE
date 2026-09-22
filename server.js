require("dotenv").config();

const path = require("path");
const express = require("express");
const rateLimit = require("express-rate-limit");
const { buscarContexto } = require("./busquedaHibrida");
const proveedorIA = require("./proveedorIA");
const leyChile = require("./fuentes/leyChileOficial");
const mcp = require("./mcpLeyChile");
const multer = require("multer");
const lectorDocumentos = require("./fuentes/documentos");

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

// --- Endpoint 0: qué proveedores de IA están disponibles (Claude / Qwen) --
app.get("/api/proveedores", (req, res) => {
  res.json({
    proveedores: proveedorIA.proveedoresDisponibles(),
    predeterminado: proveedorIA.PROVEEDOR_PREDETERMINADO,
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

// --- Endpoint: analizar un documento propio contra la legislación ------
// El archivo se lee en memoria, se extrae su texto, se buscan las normas
// pertinentes y se le pide a la IA un análisis del documento a la luz de
// esas normas. El archivo no se guarda en ninguna parte.
app.post("/api/documento", limitadorIA, subida.single("archivo"), async (req, res) => {
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

  const disponibles = proveedorIA.proveedoresDisponibles();
  if (disponibles.length === 0) {
    return res.status(500).json({ error: "No hay ningún proveedor de IA configurado en el servidor." });
  }
  const proveedorPedido = (req.body?.proveedor || "").toString().trim();
  if (proveedorPedido && !disponibles.some((p) => p.id === proveedorPedido)) {
    return res.status(400).json({ error: `El proveedor "${proveedorPedido}" no está disponible.` });
  }

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

  // 2. Buscar normas pertinentes. Se combina la pregunta con el inicio del
  //    documento, porque la pregunta sola ("¿qué riesgos tiene?") no dice
  //    nada sobre la materia; el documento sí.
  let relevantes = [];
  let remotoDisponible = false;
  let remotoError = null;
  try {
    ({ documentos: relevantes, remotoDisponible, remotoError } = await buscarContexto(
      `${pregunta} ${textoDocumento.slice(0, 1200)}`,
      10
    ));
  } catch (err) {
    console.error("Error buscando contexto para el documento:", err);
  }

  const contextoLegal = relevantes
    .map((doc, i) => `[Norma ${i + 1}] ${doc.cuerpo_legal}, ${doc.articulo}\n"${doc.texto}"\nFuente: ${doc.fuente_url}`)
    .join("\n\n");

  const systemPrompt = `Eres un asistente jurídico especializado en derecho chileno. Se te entrega un documento real de un abogado (contrato, demanda, escritura, sentencia u otro) y normas legales chilenas como contexto. Tu trabajo es analizar el documento a la luz de esas normas.

ESTRUCTURA OBLIGATORIA:

## Qué es este documento
Identifica el tipo de documento, las partes que intervienen y su objeto. Si el documento llega incompleto o recortado, dilo.

## Contenido relevante para la pregunta
Las cláusulas, considerandos o secciones que responden lo preguntado. **Cita textualmente** la parte pertinente del documento, entre comillas, identificando dónde está (número de cláusula, artículo, considerando).

## Análisis legal
Cómo se relaciona ese contenido con las normas entregadas como contexto. Cita cada norma como "Cuerpo legal, artículo N". Señala si alguna cláusula contradice una norma, si hay algo que la ley exige y el documento no contempla, o si alguna disposición podría ser inoponible o nula.

## Puntos de atención
Lo que a tu juicio merece revisión: ambigüedades, vacíos, cláusulas desfavorables para una parte, plazos que corren, condiciones que podrían discutirse. Sé concreto y apóyate en el texto.

## Qué debe verificarse antes de actuar
Sección obligatoria. Enumera con honestidad lo que no pudiste revisar: si el documento venía recortado y qué parte no leíste; que no tienes acceso a jurisprudencia ni dictámenes; que no puedes confirmar la vigencia de las normas citadas; anexos, firmas o documentos referidos que no están a la vista; y cualquier norma que probablemente aplique pero no esté entre las entregadas.

REGLAS ESTRICTAS:
1. Cita el documento textualmente cuando hagas una afirmación sobre su contenido. Nunca describas una cláusula que no está en el texto que recibiste.
2. Usa solo las normas entregadas como contexto. No inventes artículos ni números.
3. Si el documento no contiene lo necesario para responder, dilo derechamente.
4. No emitas una opinión legal definitiva ni garantices resultados.
5. Escribe en español de Chile, con precisión técnica.
6. Cierra recordando que esto es información general y no reemplaza la revisión de un abogado.`;

  const avisoRecorte = seleccion.recortado
    ? `\n\nADVERTENCIA: el documento era extenso, así que se seleccionaron las ${seleccion.fragmentosUsados} secciones más relacionadas con la pregunta, de ${seleccion.totalFragmentos} en total. Hay partes del documento que NO estás viendo; adviértelo en tu análisis.`
    : "";

  const userMessage = `NORMAS CHILENAS COMO CONTEXTO:\n\n${contextoLegal || "(no se encontraron normas relacionadas)"}\n\n` +
    `=== DOCUMENTO APORTADO POR EL USUARIO: ${req.file.originalname} ===\n\n${seleccion.texto}\n\n=== FIN DEL DOCUMENTO ===${avisoRecorte}\n\n` +
    `PREGUNTA DEL USUARIO SOBRE ESTE DOCUMENTO: ${pregunta}`;

  try {
    const { texto, proveedor } = await proveedorIA.responder({
      proveedor: proveedorPedido,
      systemPrompt,
      userMessage,
    });
    res.json({
      archivo: req.file.originalname,
      pregunta,
      respuesta: texto,
      proveedor_usado: proveedor,
      documento: {
        caracteres: textoDocumento.length,
        recortado: seleccion.recortado,
        fragmentos_usados: seleccion.fragmentosUsados,
        fragmentos_totales: seleccion.totalFragmentos,
      },
      normas_usadas: relevantes,
      corpus_completo_disponible: USAR_CORPUS_REMOTO && remotoDisponible,
      aviso_corpus_completo: !remotoDisponible ? remotoError : null,
    });
  } catch (err) {
    console.error("Error analizando el documento:", err);
    res.status(502).json({ error: err?.message || "Error al analizar el documento.", codigo: err?.codigo || null });
  }
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
