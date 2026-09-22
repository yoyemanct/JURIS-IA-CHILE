// fuentes/leyChileOficial.js
// -----------------------------------------------------------------------
// Conector a la fuente OFICIAL de la legislación chilena: el servicio de
// intercambio XML de LeyChile / Biblioteca del Congreso Nacional (BCN).
//
//   https://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=207436
//
// Por qué importa: hasta ahora la app dependía de un espejo comunitario
// (leyes.pisanvs.cl). Este conector va a la fuente oficial, y sobre todo
// permite dos cosas que un análisis jurídico serio necesita:
//
//   1. VIGENCIA. Cada artículo trae su propia fecha de versión y su estado
//      de derogación, así que se puede decir "este es el texto vigente y
//      cambió por última vez el X" en vez de suponerlo.
//   2. VERSIÓN HISTÓRICA. Con el parámetro idVersion=AAAA-MM-DD se obtiene
//      el texto tal como estaba a esa fecha, que es lo que se necesita
//      para analizar hechos ocurridos en el pasado.
//
// Estructura del XML (esquema oficial EsquemaIntercambioNorma-v1-0.xsd):
//
//   <Norma normaId fechaVersion derogado esTratado>
//     <Identificador fechaPublicacion fechaPromulgacion>
//       <TiposNumeros><TipoNumero><Tipo/><Numero/>
//     <Metadatos><TituloNorma/><FechaDerogacion/>
//     <Encabezado><Texto/>
//     <EstructurasFuncionales>
//       <EstructuraFuncional tipoParte derogado transitorio fechaVersion idParte>
//         <Texto/>                        ← texto íntegro, un solo elemento
//         <Metadatos><NombreParte/><TituloParte/><FechaDerogacion/>
//         <EstructurasFuncionales>...     ← RECURSIVO (Libro > Título > Art.)
//
// Ojo: artículos y agrupadores (Libro, Título, Párrafo...) usan el MISMO
// elemento; lo que los distingue es el atributo tipoParte.
//
// HISTORIAL DE FALLAS (para que no se repitan):
// La primera versión leía bien los metadatos de la norma pero extraía CERO
// artículos. La causa eran dos fallas encadenadas, y ambas están corregidas:
//
//   1. El servicio entrega el XML en ISO-8859-1 pero no siempre lo declara
//      en la cabecera HTTP. Al leerlo como UTF-8, cada tilde se rompía; el
//      texto legal quedaba ilegible.
//   2. Como consecuencia, el atributo tipoParte="Artículo" llegaba con la
//      tilde rota y no coincidía con ninguna comparación exacta, así que el
//      recorrido no reconocía ni un solo artículo.
//
// Ahora se detecta la codificación desde el prólogo del XML, y además el
// reconocimiento de tipos es tolerante a tildes rotas, de modo que una
// falla de codificación no vuelva a vaciar el articulado completo.
//
// Para verificarlo contra el servicio real:  npm run diagnosticar-leychile
// Si vuelve a fallar:                        npm run inspeccionar-leychile
// -----------------------------------------------------------------------

const { XMLParser } = require("fast-xml-parser");

const BASE_URL = process.env.LEYCHILE_URL || "https://www.leychile.cl/Consulta/obtxml";
const TIMEOUT_MS = Number(process.env.LEYCHILE_TIMEOUT_MS || 20000);
// Guarda: los códigos grandes (Código del Trabajo, Código Civil) son XML de
// varios MB. Esto evita que una norma gigante agote la memoria del servidor.
const MAX_BYTES = Number(process.env.LEYCHILE_MAX_BYTES || 40 * 1024 * 1024);

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@",
  // El texto legal trae sangrías y saltos de línea significativos (incisos,
  // letras). No hay que tocarlos.
  trimValues: false,
  parseTagValue: false,
  parseAttributeValue: false,
});

// Caché en memoria: una misma norma se consulta muchas veces seguidas
// (varias preguntas sobre el Código del Trabajo, por ejemplo) y bajar el
// XML completo cada vez es lento y descortés con el servicio de la BCN.
const cache = new Map();
const CACHE_TTL_MS = Number(process.env.LEYCHILE_CACHE_MS || 6 * 60 * 60 * 1000);

// El servicio de la BCN entrega el XML en ISO-8859-1 (latín antiguo), pero
// no siempre lo declara en la cabecera HTTP. Si se decodifica como UTF-8,
// cada tilde se convierte en un carácter roto — y como el esquema usa
// "Artículo" con tilde en sus atributos, el articulado entero se vuelve
// ilegible e imposible de reconocer. Por eso se lee el prólogo del propio
// XML para saber en qué codificación viene.
function decodificar(buffer) {
  const bytes = new Uint8Array(buffer);
  const prologo = new TextDecoder("ascii").decode(bytes.slice(0, 200));
  const declarado = prologo.match(/encoding=["']([\w-]+)["']/i);
  const etiqueta = (declarado ? declarado[1] : "utf-8").toLowerCase();
  try {
    return new TextDecoder(etiqueta).decode(bytes);
  } catch {
    // Codificación desconocida: se intenta latín, que es lo habitual acá.
    try { return new TextDecoder("iso-8859-1").decode(bytes); }
    catch { return new TextDecoder("utf-8").decode(bytes); }
  }
}

function comoArray(valor) {
  if (valor === undefined || valor === null) return [];
  return Array.isArray(valor) ? valor : [valor];
}

function texto(valor) {
  if (valor === undefined || valor === null) return "";
  if (typeof valor === "string") return valor;
  // Elemento con atributos: fast-xml-parser deja el contenido en "#text".
  if (typeof valor === "object" && valor["#text"] !== undefined) return String(valor["#text"]);
  return "";
}

// El XML usa &#160; (espacio duro) como relleno cuando un campo "no está
// presente". Para nosotros eso es vacío.
function limpiar(valor) {
  return texto(valor).replace(/\u00a0/g, " ").trim();
}

// Se reconoce el tipo de parte con expresiones tolerantes: el punto acepta
// tanto la tilde correcta como un carácter roto, por si la codificación
// falla en algún caso. Más vale reconocer un artículo de más que perder
// todo el articulado por una tilde.
const PATRONES_ARTICULO = [
  /^art.culos?( transitorios?)?$/i,
  /^disposici.n( transitoria)?$/i,
  /^doble articulado$/i,
];

function esArticulo(tipoParte) {
  const t = String(tipoParte || "").trim();
  return PATRONES_ARTICULO.some((re) => re.test(t));
}

/**
 * Recorre el árbol recursivo de EstructuraFuncional y devuelve solo los
 * artículos, cada uno con la jerarquía (Libro > Título > Párrafo) bajo la
 * que vive. Esa jerarquía importa para citar bien en un informe jurídico.
 */
function extraerArticulos(nodo, jerarquia, acumulador) {
  for (const parte of comoArray(nodo)) {
    if (!parte || typeof parte !== "object") continue;

    const tipoParte = parte["@tipoParte"] || "";
    const nombre = limpiar(parte?.Metadatos?.NombreParte);
    const tituloParte = limpiar(parte?.Metadatos?.TituloParte);

    if (esArticulo(tipoParte)) {
      acumulador.push({
        idParte: parte["@idParte"] || null,
        tipoParte,
        numero: nombre || null,
        // Etiqueta lista para citar: "Artículo 67" / "Artículo 1 transitorio"
        articulo: nombre
          ? `Artículo ${nombre}${parte["@transitorio"] === "transitorio" ? " transitorio" : ""}`
          : tipoParte,
        transitorio: parte["@transitorio"] === "transitorio",
        derogado: parte["@derogado"] === "derogado",
        fechaDerogacion: limpiar(parte?.Metadatos?.FechaDerogacion) || null,
        // Cuándo cambió por última vez ESTE artículo (no la norma completa).
        fechaVersion: parte["@fechaVersion"] || null,
        jerarquia: [...jerarquia],
        materias: comoArray(parte?.Metadatos?.Materias?.Materia).map(limpiar).filter(Boolean),
        texto: texto(parte.Texto).replace(/\r/g, "").trim(),
      });
    }

    // Agrupador (Libro, Título, Capítulo, Párrafo...): baja un nivel.
    const hijos = parte?.EstructurasFuncionales?.EstructuraFuncional;
    if (hijos) {
      const etiqueta = tituloParte || (nombre ? `${tipoParte} ${nombre}` : tipoParte);
      const siguiente = esArticulo(tipoParte) ? jerarquia : [...jerarquia, etiqueta].filter(Boolean);
      extraerArticulos(hijos, siguiente, acumulador);
    }
  }
  return acumulador;
}

function interpretarNorma(xml, urlConsultada) {
  const raiz = parser.parse(xml);
  const norma = raiz?.Norma;
  if (!norma) {
    const err = new Error(
      "La respuesta de LeyChile no contiene un elemento <Norma>. ¿El idNorma/idLey existe? (Respuesta recibida: " +
        String(xml).slice(0, 200) +
        ")"
    );
    err.codigo = "LEYCHILE_RESPUESTA_INESPERADA";
    throw err;
  }

  const tipoNumero = comoArray(norma?.Identificador?.TiposNumeros?.TipoNumero)[0] || {};
  const articulos = extraerArticulos(norma?.EstructurasFuncionales?.EstructuraFuncional, [], []);

  return {
    normaId: norma["@normaId"] || null,
    titulo: limpiar(norma?.Metadatos?.TituloNorma) || null,
    tipo: limpiar(tipoNumero?.Tipo) || null,
    numero: limpiar(tipoNumero?.Numero) || null,
    fechaPublicacion: norma?.Identificador?.["@fechaPublicacion"] || null,
    fechaPromulgacion: norma?.Identificador?.["@fechaPromulgacion"] || null,
    // Fecha de la versión del texto que se está leyendo. Esto es lo que
    // permite afirmar "vigente a tal fecha" sin inventar.
    fechaVersion: norma["@fechaVersion"] || null,
    derogado: norma["@derogado"] === "derogado",
    fechaDerogacion: limpiar(norma?.Metadatos?.FechaDerogacion) || null,
    esTratado: norma["@esTratado"] === "tratado",
    encabezado: texto(norma?.Encabezado?.Texto).trim() || null,
    totalArticulos: articulos.length,
    articulos,
    fuenteUrl: urlConsultada,
  };
}

function construirUrl({ idNorma, idLey, fecha }) {
  const params = new URLSearchParams({ opt: "7" });
  if (idNorma) params.set("idNorma", String(idNorma));
  else if (idLey) params.set("idLey", String(idLey));
  else throw new Error("Debes indicar idNorma o idLey.");
  // Versión histórica: el texto tal como estaba a esa fecha.
  // (El parámetro correcto es idVersion; "fechaVersion" es ignorado.)
  if (fecha) params.set("idVersion", fecha);
  return `${BASE_URL}?${params.toString()}`;
}

/**
 * Descarga e interpreta una norma desde LeyChile.
 * @param {{idNorma?: string|number, idLey?: string|number, fecha?: string}} opciones
 *        fecha en formato AAAA-MM-DD para obtener la versión vigente a ese día.
 */
async function obtenerNorma({ idNorma, idLey, fecha } = {}) {
  const url = construirUrl({ idNorma, idLey, fecha });

  const enCache = cache.get(url);
  if (enCache && Date.now() - enCache.momento < CACHE_TTL_MS) {
    return enCache.valor;
  }

  const controlador = new AbortController();
  const temporizador = setTimeout(() => controlador.abort(), TIMEOUT_MS);

  let respuesta;
  try {
    respuesta = await fetch(url, {
      signal: controlador.signal,
      headers: { Accept: "application/xml, text/xml, */*" },
    });
  } catch (err) {
    clearTimeout(temporizador);
    if (err.name === "AbortError") {
      const e = new Error(`LeyChile no respondió en ${Math.round(TIMEOUT_MS / 1000)} segundos.`);
      e.codigo = "LEYCHILE_TIMEOUT";
      throw e;
    }
    const e = new Error(`No se pudo conectar con LeyChile (${BASE_URL}): ${err.message}`);
    e.codigo = "LEYCHILE_SIN_CONEXION";
    throw e;
  }
  clearTimeout(temporizador);

  if (!respuesta.ok) {
    const e = new Error(`LeyChile respondió con error HTTP ${respuesta.status}.`);
    e.codigo = "LEYCHILE_ERROR_HTTP";
    throw e;
  }

  const largo = Number(respuesta.headers.get("content-length") || 0);
  if (largo && largo > MAX_BYTES) {
    const e = new Error(
      `La norma pesa ${Math.round(largo / 1024 / 1024)} MB, sobre el límite configurado. Sube LEYCHILE_MAX_BYTES si necesitas esta norma completa.`
    );
    e.codigo = "LEYCHILE_DEMASIADO_GRANDE";
    throw e;
  }

  const xml = decodificar(await respuesta.arrayBuffer());
  const resultado = interpretarNorma(xml, url);
  cache.set(url, { momento: Date.now(), valor: resultado });
  return resultado;
}

/**
 * Devuelve un artículo puntual de una norma, con su estado de vigencia.
 * numeroArticulo se compara de forma flexible: "67", "67 bis", "Artículo 67".
 */
async function obtenerArticulo({ idNorma, idLey, numeroArticulo, fecha } = {}) {
  const norma = await obtenerNorma({ idNorma, idLey, fecha });
  const buscado = String(numeroArticulo || "")
    .replace(/art[íi]culo/i, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  const articulo = norma.articulos.find(
    (a) => (a.numero || "").replace(/\s+/g, " ").trim().toLowerCase() === buscado
  );

  return {
    encontrado: Boolean(articulo),
    articulo: articulo || null,
    norma: {
      normaId: norma.normaId,
      titulo: norma.titulo,
      tipo: norma.tipo,
      numero: norma.numero,
      fechaVersion: norma.fechaVersion,
      derogado: norma.derogado,
      fuenteUrl: norma.fuenteUrl,
    },
  };
}

module.exports = {
  obtenerNorma,
  obtenerArticulo,
  // Exportados para poder probar el parser sin red.
  interpretarNorma,
  construirUrl,
};
