// Buscador Unificado de Sentencias del Poder Judicial (juris.pjud.cl).
//
// Adaptado de Responsa (https://github.com/djlarrix/Responsa, © 2026 Joaquín
// Larraín Guimoye, licencia MIT; ver THIRD_PARTY_NOTICES.md), que lo verificó
// contra el servicio real en agosto de 2026.
//
// No hay API documentada. El buscador es una app Laravel + Solr; la búsqueda
// real es POST /busqueda/buscar_sentencias con el token CSRF de la página y la
// cookie de sesión. El reCAPTCHA de la página valida la carga del sitio, pero
// no participa de la búsqueda.

const { pedir, aTextoPlano } = require("./http");
const { CacheTTL } = require("../../cache");

const BASE = process.env.PJUD_URL || "https://juris.pjud.cl";

const BUSCADORES = {
  corte_suprema: { slug: "Corte_Suprema", id: "528", nombre: "Corte Suprema" },
  corte_apelaciones: { slug: "Corte_de_Apelaciones", id: "168", nombre: "Corte de Apelaciones" },
  laborales: { slug: "Laborales", id: "271", nombre: "Juzgados Laborales" },
  penales: { slug: "Penales", id: "268", nombre: "Juzgados con competencia penal" },
  familia: { slug: "Familia", id: "270", nombre: "Juzgados de Familia" },
  cobranza: { slug: "Cobranza", id: "269", nombre: "Juzgados de Cobranza Laboral y Previsional" },
  civiles: { slug: "Civiles", id: "328", nombre: "Juzgados Civiles" },
};

// El token CSRF caduca: la sesión se guarda poco tiempo.
const cacheSesiones = new CacheTTL({ maximo: 20, ttlMs: 10 * 60 * 1000 });
const cacheBusquedas = new CacheTTL({ maximo: 300, ttlMs: 12 * 60 * 60 * 1000 });

// Cortacircuito: si el buscador rechaza el acceso (por ejemplo, con un
// desafío anti-bot en vez de la página), no se reintenta en cada consulta
// durante un rato: fallaría igual y cada intento cuesta segundos.
const PAUSA_TRAS_BLOQUEO_MS = Number(process.env.PJUD_PAUSA_MS || 10 * 60 * 1000);
let bloqueadoHasta = 0;
let motivoBloqueo = "";

function diagnosticar(res) {
  const ora = (res.texto || "").match(/ORA-\d+[^<&]*/);
  if (ora) {
    return `El buscador del Poder Judicial está caído (su base de datos responde "${ora[0].trim()}"). Es una falla del organismo; reintenta más tarde.`;
  }
  if (res.status === 503 || res.status === 504) {
    return `El buscador del Poder Judicial no responde (HTTP ${res.status}). Suele ser transitorio.`;
  }
  if (res.status === 0) {
    return `No se pudo conectar con el buscador del Poder Judicial: ${res.texto || "la conexión falló"}`;
  }
  return `No se pudo abrir el buscador del Poder Judicial (HTTP ${res.status})`;
}

function sesion(tribunal) {
  const b = BUSCADORES[tribunal];
  if (!b) throw new Error(`Tribunal desconocido: ${tribunal}. Opciones: ${Object.keys(BUSCADORES).join(", ")}`);
  return cacheSesiones.recordar(b.slug, async () => {
    const res = await pedir(`${BASE}/busqueda?${b.slug}`, { headers: { Accept: "text/html" } });
    if (!res.ok) throw new Error(diagnosticar(res));
    const token = (res.texto.match(/name="csrf-token"\s+content="([^"]+)"/) || [])[1];
    const id = (res.texto.match(/var\s+id_buscador_activo\s*=\s*(\d+)/) || [])[1] || b.id;
    const setCookie = res.headers && res.headers.getSetCookie ? res.headers.getSetCookie() : [];
    const cookies = setCookie.map((c) => c.split(";")[0]).join("; ");
    if (!token) {
      const antibot = /bobcmn|captcha|challenge|TSPD/i.test(res.texto);
      const mensaje = antibot
        ? "El Poder Judicial no permite la consulta automática (su sitio responde con un desafío anti-bot)."
        : "El Poder Judicial cambió su página: no se encontró el token CSRF.";
      bloqueadoHasta = Date.now() + PAUSA_TRAS_BLOQUEO_MS;
      motivoBloqueo = mensaje;
      throw new Error(mensaje);
    }
    return { token, cookies, id, slug: b.slug, nombre: b.nombre };
  });
}

function armarFiltros(f = {}) {
  return JSON.stringify({
    rol: f.rol || "",
    era: f.era || "",
    fec_desde: f.desde || "",
    fec_hasta: f.hasta || "",
    tipo_norma: f.tipoNorma || "",
    num_norma: f.numNorma || "",
    num_art: f.numArt || "",
    num_inciso: "",
    todas: f.todas || "",
    algunas: f.algunas || "",
    excluir: f.excluir || "",
    literal: f.literal || "",
    proximidad: "",
    distancia: "",
    analisis_s: "11",
    submaterias: "",
    facetas_seleccionadas: [],
    filtros_omnibox: f.texto ? [{ categoria: "TEXTO", valores: [f.texto] }] : [],
    ids_comunas_seleccionadas_mapa: [],
  });
}

// Normas aplicadas según los campos estructurados del índice. `norma_articulo_ss`
// trae "CODIGO DEL TRABAJO\tART. 483" e `id_norma_ss` el idNorma correlativo.
// (`gls_titulonorma_ss` NO está alineado con ellos y se descarta a propósito.)
function normasAplicadas(d) {
  const pares = d.norma_articulo_ss || [];
  const ids = d.id_norma_ss || [];
  const porNorma = new Map();
  const vistas = new Set();
  pares.forEach((par, i) => {
    const [nombre, articulo] = String(par).split(/\\t|\t/);
    const idNorma = ids[i] || null;
    const crudo = (articulo || "").trim();
    const clave = `${idNorma || nombre}|${crudo}`;
    if (vistas.has(clave)) return;
    vistas.add(clave);
    // "ART. 1545 (DEL ART. 2)": la coletilla es interna del texto refundido.
    const m = crudo.match(/^(.*?)\s*\(\s*DEL\s+ART\.?\s*(\d+)\s*\)\s*$/i);
    const limpio = (m ? m[1] : crudo).replace(/^ART\.?\s*/i, "").trim();
    const claveNorma = String(idNorma || nombre || "");
    if (!porNorma.has(claveNorma)) {
      porNorma.set(claveNorma, {
        norma: (nombre || "").trim(),
        idNorma,
        url: idNorma ? `https://www.bcn.cl/leychile/navegar?idNorma=${idNorma}` : null,
        articulos: [],
      });
    }
    if (limpio) porNorma.get(claveNorma).articulos.push(limpio);
  });
  return [...porNorma.values()];
}

const TOPE_PASAJES = 3;
const TOPE_PASAJE_MINIMO = 40;

// Fragmentos que Solr marcó como coincidentes: permiten citar el pasaje
// pertinente y no solo "la sentencia trata el tema".
function fragmentos(hl, id) {
  const campos = hl && hl[id];
  if (!campos) return [];
  const vistos = new Set();
  const utiles = [];
  for (const lista of Object.values(campos)) {
    for (const f of lista || []) {
      const t = aTextoPlano(f).trim();
      if (t.length < TOPE_PASAJE_MINIMO) continue;
      const clave = t.toLowerCase();
      if (vistos.has(clave)) continue;
      vistos.add(clave);
      utiles.push(t);
      if (utiles.length >= TOPE_PASAJES) return utiles;
    }
  }
  return utiles;
}

// El rol correcto depende de quién dictó el fallo: `gls_corte_s` es la Corte
// por la que PASÓ la causa, no necesariamente quien resolvió.
function tribunalYRol(d, clave, nombreBuscador) {
  const sup = d.rol_era_sup_s || "";
  const ape = d.rol_era_ape_s || "";
  if (clave === "corte_suprema" && sup) return { tribunal: "Corte Suprema", rol: sup, sala: d.gls_sala_sup_s || "" };
  if (clave === "corte_apelaciones" && ape) return { tribunal: d.gls_corte_s || "Corte de Apelaciones", rol: ape, sala: "" };
  if (d.gls_juz_s) return { tribunal: d.gls_juz_s, rol: sup || ape || "", sala: "" };
  return { tribunal: nombreBuscador, rol: sup || ape || "", sala: d.gls_sala_sup_s || "" };
}

// Cuánto aporta un fallo: un tercio de lo que publica la Corte Suprema son
// inadmisibilidades que no resuelven el fondo. No se descartan: se reordenan.
function valorDoctrinal(resultado, clave) {
  const r = String(resultado || "").toUpperCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  if (!r.trim()) return null;
  if (/MANIFIESTA FALTA DE FUNDAMENTO|NO ES MATERIA PROPIA|ASUNTO CASUISTICO|MATERIA UNIFICADA O SIN DISPE/.test(r)) {
    return "no entra al fondo";
  }
  if (
    /ACOGE.*UNIFICACION|ACOGID[AO].*UNIFICACION/.test(r) ||
    /SENTENCIA DE REEMPLAZO/.test(r) ||
    /(ACOGID[AO]|\bCASA\b).*(CASACION )?(EN EL )?FONDO/.test(r) ||
    /(\bCASA\b|ANULA) .*DE OFICIO/.test(r)
  ) {
    return clave === "corte_suprema" ? "fija doctrina" : "resuelve el fondo";
  }
  if (/RECHAZ|ACOGID[AO]|ACOGE|CONFIRMA|REVOCA|INVALIDA|ANULA/.test(r)) return "resuelve el fondo";
  if (/INADMISIBLE|TENGASE POR NO PRESENTAD|DESIERT|ABANDONAD|EXTEMPORANE|DESISTIMIENTO|INCOMPETEN|NO HA LUGAR A TRAMITAR/.test(r)) {
    return "no entra al fondo";
  }
  return null;
}

const PESO_APORTE = { "fija doctrina": 0, "resuelve el fondo": 1, "no entra al fondo": 3 };
const pesoDe = (a) => (a in PESO_APORTE ? PESO_APORTE[a] : 2);

function normalizar(d, nombreBuscador, clave) {
  const texto = aTextoPlano(d.texto_sentencia || d.texto_sentencia_preview || "");
  const { tribunal, rol, sala } = tribunalYRol(d, clave, nombreBuscador);
  return {
    fuente: "pjud",
    id: String(d.id || d.sent__crr_documento_i || ""),
    rol,
    fecha: String(d.fec_sentencia_sup_dt || "").slice(0, 10),
    tribunal,
    corte_de_origen: d.gls_corte_s && d.gls_corte_s !== tribunal ? d.gls_corte_s : undefined,
    sala,
    caratulado: d.caratulado_s || "",
    tipo_recurso: d.gls_tip_recurso_sup_s || "",
    resultado: d.resultado_recurso_sup_s || "",
    aporte: valorDoctrinal(d.resultado_recurso_sup_s, clave) || undefined,
    descriptores: (d.gls_descriptor_ss || []).slice(0, 8),
    anonimizado: texto === "ANONIMIZADO" || d.caratulado_s === "ANONIMIZADO",
    normas_aplicadas: normasAplicadas(d),
    url: d.url_acceso_sentencia || d.url_corta_acceso_sentencia || `${BASE}/busqueda?${BUSCADORES[clave].slug}`,
    texto,
  };
}

// Cuando la Corte acoge una casación publica DOS documentos (la que acoge y
// la de reemplazo). Se fusionan para no presentar dos precedentes donde hay uno.
function fusionarPorCausa(resultados) {
  const porCausa = new Map();
  const orden = [];
  for (const r of resultados) {
    const clave = r.rol ? `${r.tribunal}|${r.rol}|${r.caratulado}` : null;
    if (!clave || !porCausa.has(clave)) {
      if (clave) porCausa.set(clave, r);
      orden.push(r);
      continue;
    }
    const base = porCausa.get(clave);
    if (pesoDe(r.aporte) < pesoDe(base.aporte)) {
      base.aporte = r.aporte;
      base.resultado = r.resultado;
    }
    base.pasajes = [...new Set([...(base.pasajes || []), ...(r.pasajes || [])])].slice(0, TOPE_PASAJES);
    if ((r.texto || "").length > (base.texto || "").length) base.texto = r.texto;
  }
  return orden;
}

function consultar(s, p, filas) {
  const cuerpo = new URLSearchParams({
    _token: s.token,
    id_buscador: s.id,
    filtros: armarFiltros(p),
    numero_filas_paginacion: String(filas),
    offset_paginacion: "0",
    orden: p.orden === "recientes" ? "recientes" : "relevancia",
    personalizacion: "false",
  });
  return pedir(`${BASE}/busqueda/buscar_sentencias`, {
    metodo: "POST",
    cuerpo,
    headers: {
      Cookie: s.cookies,
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Referer: `${BASE}/busqueda?${s.slug}`,
      Accept: "application/json, text/javascript, */*; q=0.01",
    },
    timeoutMs: Number(process.env.PJUD_TIMEOUT_MS || 20000),
    intentos: 1,
  });
}

/**
 * Busca sentencias en un buscador del Poder Judicial.
 * @param {object} p  { tribunal, todas, algunas, literal, texto, excluir, limite, orden }
 */
async function buscarSentencias(p = {}) {
  const tribunal = p.tribunal || "corte_suprema";
  const criterios = ["texto", "literal", "todas", "algunas", "rol", "numNorma"];
  if (!criterios.some((c) => String(p[c] || "").trim())) {
    throw new Error("Falta el criterio de búsqueda de jurisprudencia.");
  }
  const limite = Math.min(Math.max(Number(p.limite) || 3, 1), 10);
  if (Date.now() < bloqueadoHasta) throw new Error(motivoBloqueo);
  const clave = `${tribunal}|${limite}|${armarFiltros(p)}|${p.orden || ""}`;

  return cacheBusquedas.recordar(clave, async () => {
    // Se pide de sobra para poder preferir los fallos que resuelven el fondo.
    const pedidos = Math.min(limite * 3, 30);
    let s = await sesion(tribunal);
    let res = await consultar(s, p, pedidos);
    if (!res.ok || res.status === 419) {
      // La sesión de Laravel rota antes de su TTL: se renueva y se reintenta.
      cacheSesiones.mapa.delete(s.slug);
      s = await sesion(tribunal);
      res = await consultar(s, p, pedidos);
    }
    if (!res.ok) throw new Error(diagnosticar(res));

    let json;
    try {
      json = JSON.parse(res.texto);
    } catch {
      throw new Error("El Poder Judicial no devolvió JSON: su buscador pudo cambiar.");
    }
    if (!json || !json.response) throw new Error("El Poder Judicial devolvió una respuesta sin resultados legibles.");

    let resultados = (json.response.docs || []).map((d) => {
      const r = normalizar(d, s.nombre, tribunal);
      r.pasajes = fragmentos(json.highlighting, r.id);
      return r;
    });
    resultados = fusionarPorCausa(resultados);
    resultados.sort((a, b) => pesoDe(a.aporte) - pesoDe(b.aporte));
    resultados = resultados.slice(0, limite);

    for (const r of resultados) {
      const tope = r.pasajes.length ? 500 : 1200;
      if (r.texto.length > tope) r.texto = r.texto.slice(0, tope) + "…";
    }
    return { total: json.response.numFound || 0, tribunal: s.nombre, resultados };
  }, { guardarSi: (r) => r.resultados.length > 0 });
}

module.exports = { buscarSentencias, BUSCADORES, valorDoctrinal, normasAplicadas };
