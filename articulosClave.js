// Mapa de artículos clave: para las consultas más frecuentes, qué artículos
// abriría primero un abogado chileno. Se traen exactos desde LeyChile y van
// siempre primero en el material que recibe el modelo.
//
// Cada artículo lleva palabras que su texto DEBE contener (sin tildes, en
// minúsculas). scripts/verificar-articulos-clave.js descarga cada uno desde
// LeyChile y comprueba esas palabras, para no fijar un número equivocado.

const { claveDeTexto } = require("./cache");

const CT = "Código del Trabajo";
const CC = "Código Civil";
const CPC = "Código de Procedimiento Civil";

const MAPA = [
  {
    id: "vacaciones",
    patron: /vacaciones|feriado anual|feriado proporcional|feriado legal|dias de descanso anual/,
    normas: [{ norma: CT, articulos: { 67: ["feriado"], 68: ["feriado"], 70: ["feriado"], 73: ["feriado"] } }],
  },
  {
    id: "necesidades_empresa",
    patron: /necesidades de la empresa|necesidad de la empresa|despido por necesidad/,
    normas: [{ norma: CT, articulos: { 161: ["necesidades de la empresa"], 162: ["escrito"], 163: ["indemnizacion"], 168: ["juzgado"], 169: ["indemnizacion"], 172: ["ultima remuneracion"], 177: ["finiquito"] } }],
  },
  {
    id: "despido_injustificado",
    patron: /despido injustificado|despido indebido|despido improcedente|me despidieron|demanda por despido|despido/,
    normas: [{ norma: CT, articulos: { 160: ["causales"], 161: ["necesidades de la empresa"], 162: ["escrito"], 163: ["indemnizacion"], 168: ["juzgado"], 446: ["demanda"] } }],
  },
  {
    id: "monitorio_laboral",
    patron: /monitorio laboral|procedimiento monitorio.*(trabaj|laboral)|(trabaj|laboral).*monitorio/,
    normas: [{ norma: CT, articulos: { 496: ["ingresos minimos"], 497: ["inspeccion del trabajo"], 500: ["juez"] } }],
  },
  {
    id: "tutela_laboral",
    patron: /tutela laboral|tutela de derechos|vulneracion de derechos fundamentales|derechos fundamentales del trabajador/,
    normas: [{ norma: CT, articulos: { 485: ["derechos fundamentales"], 486: ["denuncia"], 489: ["sesenta dias"], 493: ["indicios"] } }],
  },
  {
    id: "contrato_trabajo",
    patron: /contrato de trabajo|contrato laboral|contrato individual de trabajo/,
    normas: [{ norma: CT, articulos: { 5: ["irrenunciables"], 7: ["contrato individual de trabajo"], 9: ["escrito"], 10: ["estipulaciones"], 22: ["jornada"] } }],
  },
  {
    id: "finiquito",
    patron: /finiquito/,
    normas: [{ norma: CT, articulos: { 177: ["finiquito"], 162: ["escrito"], 163: ["indemnizacion"] } }],
  },
  {
    id: "desalojo",
    patron: /desalojo|no pago de (la |las )?renta|rentas impagas|renta impaga|no me paga el arriendo|no paga el arriendo|restitucion del inmueble|echar a mi arrendatario|desahucio|lanzamiento/,
    normas: [
      { norma: "Ley 18.101", articulos: { 1: ["bienes raices urbanos"], 3: ["desahucio"], 8: ["reglas"] } },
      { norma: CC, articulos: { 1977: ["mora"] } },
    ],
  },
  {
    id: "garantia_arriendo",
    patron: /garantia (de|del) arriendo|mes de garantia|garantia del arrendamiento|devolucion de la garantia|devolver la garantia|restituir la garantia/,
    normas: [
      { norma: CC, articulos: { 1915: ["arrendamiento"], 1947: ["restituir"] } },
      { norma: "Ley 18.101", articulos: { 1: ["bienes raices urbanos"] } },
    ],
  },
  {
    id: "contrato_arriendo",
    patron: /contrato de arriendo|contrato de arrendamiento|arrendamiento|arrendador|arrendatario/,
    normas: [
      { norma: CC, articulos: { 1915: ["arrendamiento"], 1924: ["entregar"], 1947: ["restituir"], 1977: ["mora"] } },
      { norma: "Ley 18.101", articulos: { 1: ["bienes raices urbanos"], 3: ["desahucio"] } },
    ],
  },
  {
    id: "producto_defectuoso",
    patron: /producto defectuoso|garantia legal|producto (con|que) falla|producto fallado|cambio del producto|devolucion del producto|reparacion del producto/,
    normas: [{ norma: "Ley 19.496", articulos: { 19: ["consumidor"], 20: ["reparacion"], 21: ["meses"] } }],
  },
  {
    id: "consumidor_jpl",
    patron: /policia local|sernac|ley del consumidor|derechos del consumidor|proteccion al consumidor/,
    normas: [{ norma: "Ley 19.496", articulos: { 3: ["derechos"], 26: ["prescrib"], 50: ["consumidores"] } }],
  },
  {
    id: "clausulas_abusivas",
    patron: /clausula abusiva|clausulas abusivas|contrato de adhesion/,
    normas: [{ norma: "Ley 19.496", articulos: { 16: ["no produciran efecto"] } }],
  },
  {
    id: "alimentos",
    patron: /alimento|pension alimenticia|pension de alimentos/,
    normas: [
      { norma: "Ley 14.908", articulos: { 3: ["alimentante"], 7: ["pension"] } },
      { norma: CC, articulos: { 321: ["alimentos"], 323: ["alimentos"], 332: ["alimentos"] } },
      { norma: "Ley 19.968", articulos: { 106: ["mediacion"] } },
    ],
  },
  {
    id: "divorcio",
    patron: /divorci/,
    normas: [{ norma: "Ley 19.947", articulos: { 54: ["falta imputable"], 55: ["cese"] } }],
  },
  {
    id: "posesion_efectiva",
    patron: /posesion efectiva/,
    normas: [
      { norma: "Ley 19.903", articulos: { 1: ["posesion efectiva"], 2: ["posesion efectiva"] } },
      { norma: CC, articulos: { 688: ["posesion efectiva"] } },
    ],
  },
  {
    id: "herencia_intestada",
    patron: /herencia|sin testamento|intestad|herederos|sucesion/,
    normas: [
      { norma: CC, articulos: { 980: ["sucesion"], 983: ["sucesion intestada"], 988: ["hijos"], 989: ["ascendientes"], 990: ["hermanos"] } },
      { norma: "Ley 19.903", articulos: { 1: ["posesion efectiva"] } },
    ],
  },
  {
    id: "posesion",
    patron: /posesion(?! efectiva)|poseedor|usucapion|prescripcion adquisitiva/,
    normas: [{ norma: CC, articulos: { 700: ["tenencia"], 702: ["regular"], 714: ["mera tenencia"], 724: ["registro"], 730: ["usurpa"], 2492: ["prescripcion"], 2498: ["prescripcion"], 2508: ["prescripcion ordinaria"], 2511: ["diez anos"] } }],
  },
  {
    id: "prescripcion_deudas",
    patron: /me deben|prescripcion extintiva|prescribe (la|una) deuda|deuda (antigua|prescrita)|cobrar una deuda|todavia puedo cobrar|prescripcion de (la|las) deuda/,
    normas: [
      { norma: CC, articulos: { 2492: ["prescripcion"], 2514: ["tiempo"], 2515: ["tres anos"], 2518: ["interrump"] } },
      { norma: "Ley 18.092", articulos: { 98: ["un ano"] } },
    ],
  },
  {
    id: "juicio_ejecutivo",
    patron: /juicio ejecutivo|pagare|letra de cambio|cheque|titulo ejecutivo|mandamiento de ejecucion|cobro ejecutivo/,
    normas: [
      { norma: CPC, articulos: { 434: ["juicio ejecutivo"], 441: ["mandamiento"], 443: ["requerimiento"], 459: ["cuatro dias"], 464: ["excepciones"], 470: ["excepciones"] } },
      { norma: "Ley 18.092", articulos: { 102: ["pagare"], 107: ["pagare"] } },
    ],
  },
  {
    id: "recurso_proteccion",
    patron: /recurso de proteccion|accion de proteccion/,
    normas: [{ norma: "Constitución Política de la República", articulos: { 20: ["privacion"], 19: ["asegura"] } }],
  },
  {
    id: "querella_estafa",
    patron: /estafa|defraudaci|engano/,
    normas: [
      { norma: "Código Penal", articulos: { 467: ["engano"], 468: ["pena"], 473: ["pena"] } },
      { norma: "Código Procesal Penal", articulos: { 111: ["querella"], 113: ["querella"] } },
    ],
  },
  {
    id: "juicio_ordinario_perjuicios",
    patron: /juicio ordinario|indemnizacion de perjuicios|responsabilidad civil|danos y perjuicios/,
    normas: [
      { norma: CPC, articulos: { 253: ["demanda"], 254: ["demanda"], 258: ["quince dias"], 303: ["excepciones dilatorias"], 309: ["contestacion"] } },
      { norma: CC, articulos: { 1556: ["indemnizacion de perjuicios"], 2314: ["delito o cuasidelito"], 2332: ["cuatro anos"] } },
    ],
  },
  {
    id: "legitima_defensa",
    patron: /legitima defensa/,
    normas: [{ norma: "Código Penal", articulos: { 10: ["defensa"] } }],
  },
  {
    id: "nulidad",
    patron: /nulidad (absoluta|relativa|del contrato|de un contrato)/,
    normas: [{ norma: CC, articulos: { 1681: ["nulo"], 1682: ["nulidad absoluta"], 1683: ["nulidad absoluta"] } }],
  },
  {
    id: "contratos_general",
    general: true,
    patron: /contrato/,
    normas: [{ norma: CC, articulos: { 1438: ["contrato"], 1545: ["ley para los contratantes"], 1546: ["buena fe"] } }],
  },
];

const MAX_ARTICULOS = 12;

/**
 * Artículos clave para una pregunta: [{ norma, articulos: [números] }], en el
 * orden del mapa y sin repetir. Las entradas "generales" solo se usan si no
 * calzó ninguna específica.
 */
function articulosClaveDe(pregunta) {
  const t = claveDeTexto(pregunta);
  let entradas = MAPA.filter((e) => !e.general && e.patron.test(t));
  if (!entradas.length) entradas = MAPA.filter((e) => e.general && e.patron.test(t));
  const porNorma = new Map();
  let total = 0;
  for (const e of entradas) {
    for (const { norma, articulos } of e.normas) {
      const lista = porNorma.get(norma) || [];
      for (const numero of Object.keys(articulos)) {
        if (total >= MAX_ARTICULOS) break;
        if (!lista.includes(numero)) {
          lista.push(numero);
          total++;
        }
      }
      if (lista.length) porNorma.set(norma, lista);
    }
  }
  return [...porNorma].map(([norma, articulos]) => ({ norma, articulos }));
}

/** Une dos listas de pedidos { norma, articulos } sin repetir, con tope. */
function unirPedidos(primero, segundo, tope = MAX_ARTICULOS) {
  const porNorma = new Map();
  let total = 0;
  const clave = (n) => claveDeTexto(n).replace(/(\d) (\d)/g, "$1$2");
  for (const { norma, articulos } of [...(primero || []), ...(segundo || [])]) {
    const k = clave(norma);
    const actual = porNorma.get(k) || { norma, articulos: [] };
    for (const a of articulos) {
      if (total >= tope) break;
      if (!actual.articulos.includes(String(a))) {
        actual.articulos.push(String(a));
        total++;
      }
    }
    porNorma.set(k, actual);
  }
  return [...porNorma.values()].filter((p) => p.articulos.length);
}

module.exports = { MAPA, articulosClaveDe, unirPedidos, MAX_ARTICULOS };
