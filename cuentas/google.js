// "Continuar con Google" (OAuth 2.0 / OpenID Connect, flujo de código).
//
// 1. /api/cuenta/google redirige a Google con un `state` aleatorio, guardado
//    también en una cookie para evitar falsificaciones (CSRF).
// 2. Google vuelve a /api/cuenta/google/callback con un código, que el
//    servidor canjea directamente con Google (por HTTPS, con el secreto de
//    cliente) por un id_token con el correo verificado del usuario.
// 3. Se busca la cuenta por correo, o se crea si no existe, y se abre sesión.

const crypto = require("node:crypto");
const almacen = require("./almacen");
const cuentas = require("./cuentas");

const CLIENTE = (process.env.GOOGLE_CLIENT_ID || "").trim();
const SECRETO = (process.env.GOOGLE_CLIENT_SECRET || "").trim();
const COOKIE_ESTADO = "dci_google_estado";

function redireccion(base) {
  return `${base}/api/cuenta/google/callback`;
}

function urlAutorizacion(base, estado) {
  const p = new URLSearchParams({
    client_id: CLIENTE,
    redirect_uri: redireccion(base),
    response_type: "code",
    scope: "openid email profile",
    state: estado,
    prompt: "select_account",
  });
  return `https://accounts.google.com/o/oauth2/v2/auth?${p}`;
}

function iniciar(req, res, base) {
  const estado = crypto.randomBytes(24).toString("base64url");
  const seguro = Boolean(process.env.VERCEL) || process.env.NODE_ENV === "production";
  res.setHeader("Set-Cookie", `${COOKIE_ESTADO}=${estado}; Path=/; HttpOnly; SameSite=Lax; Max-Age=600${seguro ? "; Secure" : ""}`);
  res.redirect(urlAutorizacion(base, estado));
}

function leerCookie(req, nombre) {
  for (const parte of (req.headers.cookie || "").split(";")) {
    const [k, ...v] = parte.trim().split("=");
    if (k === nombre) return v.join("=");
  }
  return null;
}

async function completar(req, base) {
  const estado = String(req.query.state || "");
  const guardado = leerCookie(req, COOKIE_ESTADO);
  if (!estado || !guardado || estado.length !== guardado.length ||
      !crypto.timingSafeEqual(Buffer.from(estado), Buffer.from(guardado))) {
    throw new Error("La sesión de Google expiró o no es válida. Intenta de nuevo.");
  }
  if (req.query.error) throw new Error("Se canceló el ingreso con Google.");

  const respuesta = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code: String(req.query.code || ""),
      client_id: CLIENTE,
      client_secret: SECRETO,
      redirect_uri: redireccion(base),
      grant_type: "authorization_code",
    }),
  });
  const tokens = await respuesta.json().catch(() => ({}));
  if (!respuesta.ok || !tokens.id_token) {
    console.error("Google rechazó el canje del código:", respuesta.status, tokens.error, tokens.error_description);
    throw new Error(`Google no confirmó el ingreso (${tokens.error || respuesta.status}). Intenta de nuevo.`);
  }

  // El id_token llegó directo de Google por HTTPS: basta revisar a quién va
  // dirigido, quién lo emitió, su vigencia y que el correo esté verificado.
  const datos = JSON.parse(Buffer.from(tokens.id_token.split(".")[1], "base64url").toString("utf8"));
  const emisorOk = datos.iss === "https://accounts.google.com" || datos.iss === "accounts.google.com";
  if (datos.aud !== CLIENTE || !emisorOk || datos.exp * 1000 < Date.now()) throw new Error("La respuesta de Google no es válida.");
  if (!datos.email || datos.email_verified === false) throw new Error("Tu cuenta de Google no tiene un correo verificado.");

  const correo = String(datos.email).toLowerCase();
  const id = await almacen.obtener(`correo:${correo}`);
  if (id) {
    const existente = await almacen.obtener(`usuario:${id}`);
    if (existente) return existente;
  }
  const usuario = {
    id: crypto.randomUUID(),
    correo,
    nombre: String(datos.name || "").slice(0, 100),
    clave: null,
    google: datos.sub,
    creado: new Date().toISOString(),
    suscripcion: null,
  };
  const libre = await almacen.crearSiNoExiste(`correo:${correo}`, usuario.id);
  if (!libre) {
    // Otra petición creó la cuenta al mismo tiempo: se usa esa.
    return almacen.obtener(`usuario:${await almacen.obtener(`correo:${correo}`)}`);
  }
  await almacen.guardar(`usuario:${usuario.id}`, usuario);
  return usuario;
}

module.exports = { iniciar, completar, CONFIGURADO: Boolean(CLIENTE && SECRETO), COOKIE_ESTADO };
