// Materias jurídicas: clasificar la pregunta, clasificar cada norma
// recuperada y descartar lo que sea de otra materia. Una respuesta sobre un
// pagaré no debe recibir el Código del Trabajo: tres fuentes buenas valen más
// que diez mezcladas, y una fuente ajena confunde al modelo.

const { claveDeTexto } = require("./cache");

// Texto sin tildes ni signos, con los números de ley unidos ("18.092" →
// "18092") y sin "N°", para que "Ley N° 18.092" y "LEY 18092" coincidan.
function normalizar(texto) {
  return claveDeTexto(String(texto || "").replace(/(\d)\.(\d)/g, "$1$2")).replace(/\bn (?=\d)/g, "");
}

const MATERIAS = [
  "laboral", "civil", "familia", "consumidor", "arrendamiento", "comercial",
  "procesal_civil", "penal", "procesal_penal", "tributario", "administrativo", "constitucional",
];

// Materias que suelen ir juntas: una norma de una materia afín no se descarta.
const AFINES = {
  civil: ["procesal_civil", "comercial", "arrendamiento", "familia"],
  comercial: ["civil", "procesal_civil"],
  arrendamiento: ["civil", "procesal_civil"],
  familia: ["civil", "procesal_civil"],
  procesal_civil: ["civil", "comercial"],
  consumidor: ["civil", "procesal_civil"],
  laboral: [],
  penal: ["procesal_penal"],
  procesal_penal: ["penal"],
  tributario: ["administrativo"],
  administrativo: ["constitucional"],
  constitucional: ["administrativo"],
};

// Palabras de la pregunta que indican cada materia (texto sin tildes).
const PATRONES_PREGUNTA = [
  ["laboral", /despid|trabajador|empleador|laboral|finiquito|sueldo|remuneracion|vacaciones|feriado anual|feriado proporcional|licencia medica|inspeccion del trabajo|contrato de trabajo|jornada|horas extra|cotizacion|autodespido|tutela laboral|monitorio laboral/],
  ["familia", /divorci|alimento|pension alimenticia|cuidado personal|relacion directa|visitas|violencia intrafamiliar|matrimonio|filiacion|adopcion|mediacion familiar|juzgado de familia|compensacion economica/],
  ["arrendamiento", /arriend|arrendatari|arrendador|desahucio|restitucion del inmueble|desalojo|garantia de arriendo|canon|rentas impagas/],
  ["consumidor", /consumidor|sernac|producto defectuoso|garantia legal|proveedor|clausula abusiva|compra en linea|devolucion del dinero|policia local/],
  ["comercial", /pagare|letra de cambio|cheque|factura|sociedad|titulo de credito|protesto|endoso|quiebra|insolvencia|reorganizacion|liquidacion concursal/],
  ["procesal_civil", /juicio|demanda|ejecutivo|embargo|notificacion|receptor|excepciones|medida precautoria|gestion preparatoria|recurso de apelacion|casacion|procedimiento|tramitar|tribunal/],
  ["civil", /contrato|posesion|dominio|propiedad|prescripcion|herencia|testamento|posesion efectiva|sucesion|obligacion|deuda|indemnizacion de perjuicios|responsabilidad civil|nulidad|servidumbre|hipoteca|compraventa|me deben/],
  ["penal", /delito|querella|denuncia|estafa|robo|hurto|homicidio|lesiones|legitima defensa|\bpena\b|condena|carcel|imputad|fiscalia|penal/],
  ["procesal_penal", /formalizacion|juicio oral|control de detencion|medidas cautelares personales|prision preventiva|procedimiento abreviado|procedimiento simplificado|querella|imputad/],
  ["tributario", /impuesto|\biva\b|\bsii\b|tributari|renta|credito fiscal|boleta|factura electronica|contribuciones|timbres/],
  ["administrativo", /municipal|funcionari|estatuto administrativo|contraloria|sumario administrativo|servicio publico|acto administrativo|licitacion|contrata/],
  ["constitucional", /recurso de proteccion|amparo|inaplicabilidad|constitucion|garantia constitucional|derecho fundamental|tribunal constitucional/],
];

/** Materias de una pregunta (puede haber varias, en orden de aparición en la lista). */
function materiasDePregunta(texto) {
  const t = normalizar(texto);
  return PATRONES_PREGUNTA.filter(([, patron]) => patron.test(t)).map(([materia]) => materia);
}

// Materia de un cuerpo legal según su título. null = no se sabe (se juzga
// por relevancia léxica).
const PATRONES_NORMA = [
  ["procesal_penal", /procesal penal/],
  ["penal", /codigo penal|ley 20\.?000|ley 18\.?216|responsabilidad penal/],
  ["laboral", /codigo del trabajo|seguro de desempleo|ley 16\.?744|accidentes del trabajo|ley 19\.?728|ley 21\.?561|subcontratacion/],
  ["procesal_civil", /procedimiento civil|organico de tribunales|ley 18\.?120|comparecencia en juicio|ley 20\.?886|tramitacion digital/],
  ["familia", /tribunales de familia|ley 19\.?968|ley 14\.?908|pensiones alimenticias|matrimonio civil|ley 19\.?947|ley 20\.?066|violencia intrafamiliar|ley 21\.?389|ley 19\.?620|adopcion/],
  ["arrendamiento", /arrendamiento|ley 18\.?101|ley 21\.?461/],
  ["consumidor", /consumidor|ley 19\.?496|policia local|ley 18\.?287/],
  ["comercial", /codigo de comercio|letra de cambio|pagare|ley 18\.?092|cheque|cuentas corrientes bancarias|ley 20\.?720|insolvencia|sociedades/],
  ["tributario", /codigo tributario|impuesto|\biva\b|\brenta\b|timbres y estampillas/],
  ["administrativo", /estatuto administrativo|ley 18\.?834|ley 18\.?883|municipalidades|ley 18\.?695|bases generales de la administracion|ley 18\.?575|procedimientos administrativos|ley 19\.?880|contraloria|compras publicas|ley 19\.?886/],
  ["constitucional", /constitucion politica|tribunal constitucional/],
  ["civil", /codigo civil|posesion efectiva|ley 19\.?903|propiedad intelectual|copropiedad|ley 21\.?442|ley 19\.?537/],
];

function materiaDeNorma(titulo) {
  const t = normalizar(titulo);
  for (const [materia, patron] of PATRONES_NORMA) if (patron.test(t)) return materia;
  return null;
}

/** Materias admitidas para una lista de materias de la pregunta (incluye afines). */
function materiasAdmitidas(materias) {
  const admitidas = new Set();
  for (const m of materias) {
    admitidas.add(m);
    for (const a of AFINES[m] || []) admitidas.add(a);
  }
  return admitidas;
}

const VACIAS = new Set(["para", "como", "cual", "cuales", "donde", "cuando", "desde", "hasta", "sobre", "entre", "tiene", "tengo",
  "puedo", "puede", "debe", "deben", "chile", "chilena", "chileno", "segun", "esta", "este", "estos", "estas", "hace", "anos", "todavia"]);
function terminosSignificativos(texto) {
  return [...new Set(claveDeTexto(texto).split(/[^a-z0-9ñ]+/).filter((p) => p.length >= 5 && !VACIAS.has(p)))];
}

/**
 * Deja solo las normas pertinentes a las materias de la pregunta.
 *   - Las de una materia conocida se aceptan solo si esa materia (o una afín)
 *     está en la pregunta.
 *   - Las de materia desconocida se aceptan si comparten al menos dos términos
 *     significativos con la pregunta (o uno, si la pregunta es muy corta).
 * Si la pregunta no tiene materia reconocible, no se filtra por materia.
 * Devuelve { aceptadas, descartadas: [{ doc, motivo }] }.
 */
function filtrarPorMateria(documentos, { materias, pregunta }) {
  const admitidas = materiasAdmitidas(materias || []);
  const terminos = terminosSignificativos(pregunta);
  const minimo = terminos.length <= 3 ? 1 : 2;
  const aceptadas = [];
  const descartadas = [];
  for (const doc of documentos) {
    const materia = materiaDeNorma(doc.cuerpo_legal || doc.tema || "");
    if (admitidas.size && materia && !admitidas.has(materia)) {
      descartadas.push({ doc, motivo: `materia ${materia} ajena a ${[...admitidas].join("/")}` });
      continue;
    }
    if (!materia && admitidas.size) {
      const cuerpo = claveDeTexto(`${doc.cuerpo_legal} ${doc.texto}`);
      const coincidencias = terminos.filter((t) => cuerpo.includes(t)).length;
      if (coincidencias < minimo) {
        descartadas.push({ doc, motivo: `sin relación léxica (${coincidencias} términos en común)` });
        continue;
      }
    }
    aceptadas.push(doc);
  }
  return { aceptadas, descartadas };
}

module.exports = { MATERIAS, AFINES, materiasDePregunta, materiaDeNorma, materiasAdmitidas, filtrarPorMateria, terminosSignificativos };
