// fuentes/documentos.js
// -----------------------------------------------------------------------
// Lectura de documentos que sube el usuario (contratos, demandas,
// sentencias, escrituras) para analizarlos contra la legislación.
//
// Nota de privacidad, que es la razón de ser de esta funcionalidad: el
// archivo se lee acá, en el servidor que corre en el computador del
// usuario. No se guarda en disco ni se envía a ningún servicio externo.
// Lo único que sale de la máquina es el texto que se le manda al proveedor
// de IA — y si ese proveedor es Qwen local, tampoco sale nada.
// -----------------------------------------------------------------------

const path = require("path");
const mammoth = require("mammoth");

// Presupuesto de caracteres del documento que se le pasa al modelo. Los
// modelos en la nube leen cómodamente ~90.000 caracteres (unas 40 páginas),
// así que casi todo contrato, finiquito o escrito se analiza COMPLETO, sin
// perder cláusulas. Solo un expediente más largo se reduce a los fragmentos
// más relevantes para la pregunta. Con un modelo local conviene bajarlo.
const PRESUPUESTO_CARACTERES = Number(process.env.DOC_PRESUPUESTO_CARACTERES || 90000);

const EXTENSIONES = {
  ".pdf": "pdf",
  ".docx": "docx",
  ".txt": "texto",
  ".md": "texto",
  ".rtf": "texto",
};

function tipoDeArchivo(nombre) {
  return EXTENSIONES[path.extname(nombre || "").toLowerCase()] || null;
}

function formatosAceptados() {
  return Object.keys(EXTENSIONES).join(", ");
}

/** Extrae el texto de un archivo subido, según su formato. */
async function extraerTexto(buffer, nombreArchivo) {
  const tipo = tipoDeArchivo(nombreArchivo);
  if (!tipo) {
    const err = new Error(
      `Formato no soportado. Por ahora se pueden leer: ${formatosAceptados()}. ` +
        `Si tienes un .doc antiguo, ábrelo y guárdalo como .docx.`
    );
    err.codigo = "FORMATO_NO_SOPORTADO";
    throw err;
  }

  if (tipo === "texto") {
    return buffer.toString("utf-8");
  }

  if (tipo === "docx") {
    const { value } = await mammoth.extractRawText({ buffer });
    return value || "";
  }

  // PDF: se carga acá y no arriba porque esta librería hace trabajo al
  // importarse, y no tiene sentido pagarlo si nunca se sube un PDF.
  // Ojo: pdf-parse v2 expone una clase, no la función que tenía la v1.
  const { PDFParse } = require("pdf-parse");
  const lector = new PDFParse({ data: buffer });
  try {
    const datos = await lector.getText();
    const texto = datos?.text || "";
    if (!texto.trim()) {
      const err = new Error(
        "El PDF no contiene texto seleccionable. Probablemente es un documento escaneado " +
          "(una imagen). Para leerlo habría que pasarle un OCR primero."
      );
      err.codigo = "PDF_SIN_TEXTO";
      throw err;
    }
    return texto;
  } finally {
    if (typeof lector.destroy === "function") await lector.destroy().catch(() => {});
  }
}

function normalizar(texto) {
  return String(texto || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

const VACIAS = new Set([
  "el","la","los","las","un","una","unos","unas","de","del","al","a","ante","bajo","con",
  "contra","desde","en","entre","hacia","hasta","para","por","segun","sin","sobre","tras",
  "y","o","u","e","que","se","su","sus","lo","le","les","es","son","ser","como","mas","pero",
  "si","no","este","esta","estos","estas","ese","esa","esos","esas","cual","cuales","donde",
]);

function palabrasClave(texto) {
  return normalizar(texto)
    .split(/[^a-z0-9ñ]+/)
    .filter((p) => p.length > 3 && !VACIAS.has(p));
}

/**
 * Parte el documento en trozos y devuelve los más relevantes para la
 * pregunta, hasta llenar el presupuesto.
 *
 * Por qué así: cortar los primeros N caracteres es lo peor que se puede
 * hacer con un contrato, porque lo que importa suele estar en las cláusulas
 * del medio o en las finales. Se prefiere buscar dentro del documento.
 */
function seleccionarFragmentos(texto, pregunta, presupuesto = PRESUPUESTO_CARACTERES) {
  const limpio = String(texto || "").replace(/\r/g, "").trim();
  if (limpio.length <= presupuesto) {
    return { texto: limpio, recortado: false, fragmentosUsados: 1, totalFragmentos: 1 };
  }

  const TAMANO = 2000;
  const trozos = [];
  for (let i = 0; i < limpio.length; i += TAMANO) {
    trozos.push({ indice: trozos.length, texto: limpio.slice(i, i + TAMANO) });
  }

  const claves = palabrasClave(pregunta);
  for (const trozo of trozos) {
    const cuerpo = normalizar(trozo.texto);
    trozo.puntaje = claves.reduce((suma, clave) => (cuerpo.includes(clave) ? suma + 1 : suma), 0);
  }

  // El comienzo de un documento legal casi siempre importa (comparecencia,
  // partes, objeto del contrato), así que entra siempre.
  const elegidos = new Map();
  elegidos.set(0, trozos[0]);
  let usado = trozos[0].texto.length;

  for (const trozo of [...trozos].sort((a, b) => b.puntaje - a.puntaje)) {
    if (usado + trozo.texto.length > presupuesto) continue;
    if (elegidos.has(trozo.indice)) continue;
    if (trozo.puntaje === 0) continue;
    elegidos.set(trozo.indice, trozo);
    usado += trozo.texto.length;
  }

  const ordenados = [...elegidos.values()].sort((a, b) => a.indice - b.indice);
  const partes = [];
  let anterior = -1;
  for (const trozo of ordenados) {
    if (anterior !== -1 && trozo.indice !== anterior + 1) {
      partes.push("\n\n[...se omitió una parte del documento no relacionada con la pregunta...]\n\n");
    }
    partes.push(trozo.texto);
    anterior = trozo.indice;
  }

  return {
    texto: partes.join(""),
    recortado: true,
    fragmentosUsados: ordenados.length,
    totalFragmentos: trozos.length,
  };
}

module.exports = {
  extraerTexto,
  seleccionarFragmentos,
  tipoDeArchivo,
  formatosAceptados,
  PRESUPUESTO_CARACTERES,
};
