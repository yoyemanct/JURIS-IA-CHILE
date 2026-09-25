// Cliente HTTP para las fuentes de jurisprudencia.
//
// Adaptado de Responsa (https://github.com/djlarrix/Responsa, © 2026 Joaquín
// Larraín Guimoye, licencia MIT; ver THIRD_PARTY_NOTICES.md). Aporta tres
// cosas que el fetch simple no da:
//
//   1. Ritmo por host: los buscadores públicos cortan ráfagas modestas, así
//      que las peticiones a un mismo sitio se espacian.
//   2. Reintento con espera ante 429/5xx.
//   3. Tolerancia a cabeceras mal formadas: el balanceador del Poder Judicial
//      parte una cabecera en dos líneas y el fetch de Node aborta la respuesta
//      entera. En ese caso se reintenta con el cliente http de Node en modo
//      tolerante (solo relaja el parseo de cabeceras; el certificado TLS se
//      sigue verificando).

const https = require("node:https");
const http = require("node:http");
const zlib = require("node:zlib");

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const espera = (ms) => new Promise((r) => setTimeout(r, ms));

// Intervalo mínimo entre peticiones al mismo host (ms).
const RITMO = {
  "juris.pjud.cl": 300,
  "buscador-backend.tcchile.cl": 300,
  "www.contraloria.cl": 400,
  "www.dt.gob.cl": 350,
  "www.tdlc.cl": 350,
  "www3.sii.cl": 200,
};

const ultimaPeticion = new Map();
const colas = new Map();

function turno(host) {
  const min = RITMO[host];
  if (!min) return Promise.resolve();
  const previo = colas.get(host) || Promise.resolve();
  const propio = previo.then(async () => {
    const t = ultimaPeticion.get(host) || 0;
    const falta = min - (Date.now() - t);
    if (falta > 0) await espera(falta);
    ultimaPeticion.set(host, Date.now());
  });
  colas.set(host, propio.catch(() => {}));
  return propio;
}

function esCabeceraMalFormada(e) {
  const txt = `${(e && e.message) || ""} ${(e && e.cause && e.cause.message) || ""}`;
  return /HTTP\/1\.1 protocol|Unexpected whitespace|Invalid header|header value|parse/i.test(txt);
}

function pedirTolerante(url, { metodo = "GET", cuerpo, headers = {}, timeoutMs = 20000, saltos = 5 } = {}) {
  return new Promise((resolve, reject) => {
    let u;
    try {
      u = new URL(url);
    } catch (e) {
      return reject(e);
    }
    const cliente = u.protocol === "http:" ? http : https;

    const propias = {};
    let datos = cuerpo;
    if (datos instanceof URLSearchParams) {
      datos = datos.toString();
      propias["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
    } else if (datos != null && typeof datos !== "string" && !Buffer.isBuffer(datos)) {
      datos = String(datos);
    }
    if (datos != null) propias["Content-Length"] = String(Buffer.byteLength(datos));

    const req = cliente.request(
      u,
      {
        method: metodo,
        insecureHTTPParser: true,
        headers: {
          "User-Agent": UA,
          "Accept-Language": "es-CL,es;q=0.9",
          "Accept-Encoding": "gzip, deflate, br",
          ...propias,
          ...headers,
        },
      },
      (res) => {
        const codigo = res.statusCode || 0;
        const destino = res.headers.location;
        if (destino && codigo >= 300 && codigo < 400 && saltos > 0) {
          res.resume();
          const siguiente = new URL(destino, u).toString();
          const metodoSiguiente = codigo === 303 || (metodo === "POST" && (codigo === 301 || codigo === 302)) ? "GET" : metodo;
          return resolve(
            pedirTolerante(siguiente, {
              metodo: metodoSiguiente,
              cuerpo: metodoSiguiente === "GET" ? undefined : cuerpo,
              headers,
              timeoutMs,
              saltos: saltos - 1,
            })
          );
        }

        const codificacion = String(res.headers["content-encoding"] || "").toLowerCase();
        let flujo = res;
        if (codificacion === "gzip") flujo = res.pipe(zlib.createGunzip());
        else if (codificacion === "deflate") flujo = res.pipe(zlib.createInflate());
        else if (codificacion === "br") flujo = res.pipe(zlib.createBrotliDecompress());

        const trozos = [];
        flujo.on("data", (t) => trozos.push(t));
        flujo.on("error", reject);
        flujo.on("end", () => {
          const cabeceras = new Headers();
          for (const [k, v] of Object.entries(res.headers)) {
            for (const valor of Array.isArray(v) ? v : [v]) {
              if (valor != null) cabeceras.append(k, String(valor));
            }
          }
          resolve({
            ok: codigo >= 200 && codigo < 300,
            status: codigo,
            buffer: Buffer.concat(trozos),
            headers: cabeceras,
          });
        });
      }
    );
    req.setTimeout(timeoutMs, () => req.destroy(new Error(`Sin respuesta en ${timeoutMs} ms`)));
    req.on("error", reject);
    if (datos != null) req.write(datos);
    req.end();
  });
}

function decodificar(buffer, codificacion) {
  if (codificacion === "latin1") {
    // Domino (Contraloría) responde en Latin-1 sin declararlo siempre: si
    // al leerlo como UTF-8 aparecen caracteres de reemplazo, era Latin-1.
    const utf8 = new TextDecoder("utf-8", { fatal: false }).decode(buffer);
    return utf8.includes("�") ? new TextDecoder("latin1").decode(buffer) : utf8;
  }
  return buffer.toString("utf8");
}

/**
 * Petición con ritmo por host, reintentos y respaldo tolerante.
 * @returns {Promise<{ok:boolean,status:number,texto:string,headers?:Headers}>}
 */
async function pedir(url, opts = {}) {
  const { metodo = "GET", cuerpo, headers = {}, timeoutMs = 20000, intentos = 2, codificacion = "utf8" } = opts;

  let host = "";
  try {
    host = new URL(url).host;
  } catch {
    // URL inválida: sin control de ritmo.
  }

  let ultimo = { ok: false, status: 0, texto: "" };
  for (let i = 0; i < intentos; i++) {
    await turno(host);
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), timeoutMs);
    try {
      const res = await fetch(url, {
        method: metodo,
        body: cuerpo,
        signal: ctrl.signal,
        headers: { "User-Agent": UA, "Accept-Language": "es-CL,es;q=0.9", ...headers },
      });
      const texto = decodificar(Buffer.from(await res.arrayBuffer()), codificacion);
      ultimo = { ok: res.ok, status: res.status, texto, headers: res.headers };
      if ((res.status === 429 || res.status >= 500) && i < intentos - 1) {
        await espera(res.status === 429 ? 3000 * (i + 1) : 800 * 2 ** i);
        continue;
      }
      return ultimo;
    } catch (e) {
      let error = e;
      if (esCabeceraMalFormada(e)) {
        try {
          const r = await pedirTolerante(url, { metodo, cuerpo, headers, timeoutMs });
          return { ok: r.ok, status: r.status, texto: decodificar(r.buffer, codificacion), headers: r.headers };
        } catch (e2) {
          error = e2;
        }
      }
      const causa = error && error.cause && error.cause.message ? `: ${error.cause.message}` : "";
      const mensaje = error && error.name === "AbortError" ? `Sin respuesta en ${timeoutMs} ms` : String((error && error.message) || error);
      ultimo = { ok: false, status: 0, texto: `${mensaje}${causa}` };
      if (i < intentos - 1) await espera(500 * 2 ** i);
    } finally {
      clearTimeout(t);
    }
  }
  return ultimo;
}

/** Quita etiquetas HTML y normaliza espacios. */
function aTextoPlano(s) {
  return String(s == null ? "" : s)
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&aacute;/g, "á").replace(/&eacute;/g, "é").replace(/&iacute;/g, "í")
    .replace(/&oacute;/g, "ó").replace(/&uacute;/g, "ú").replace(/&ntilde;/g, "ñ")
    .replace(/&Aacute;/g, "Á").replace(/&Eacute;/g, "É").replace(/&Iacute;/g, "Í")
    .replace(/&Oacute;/g, "Ó").replace(/&Uacute;/g, "Ú").replace(/&Ntilde;/g, "Ñ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

module.exports = { pedir, aTextoPlano, UA };
