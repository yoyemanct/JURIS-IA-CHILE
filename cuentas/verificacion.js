// Verificación del correo con un código de 6 dígitos (cuentas creadas con
// correo y contraseña). Sin RESEND_API_KEY queda desactivada y la prueba
// gratis sigue siendo solo para cuentas de Google.
//
//   - El código vence a los 15 minutos y admite 5 intentos.
//   - Máximo 5 envíos por hora por cuenta.
//   - Se rechazan los servicios de correo temporal más conocidos.

const crypto = require("node:crypto");
const almacen = require("./almacen");

const CLAVE_RESEND = (process.env.RESEND_API_KEY || "").trim();
const REMITENTE = process.env.CORREO_REMITENTE || "Derecho Chile IA <no-reply@derechochileia.cl>";
const CONFIGURADO = Boolean(CLAVE_RESEND);

const MINUTOS_VIGENCIA = 15;
const MAX_INTENTOS = 5;
const MAX_ENVIOS_HORA = 5;

const DESECHABLES = new Set([
  "10minutemail.com", "10minutemail.net", "20minutemail.com", "33mail.com", "anonaddy.me",
  "burnermail.io", "discard.email", "dispostable.com", "dropmail.me", "emailondeck.com",
  "fakeinbox.com", "getairmail.com", "getnada.com", "guerrillamail.biz", "guerrillamail.com",
  "guerrillamail.de", "guerrillamail.info", "guerrillamail.net", "guerrillamail.org",
  "guerrillamailblock.com", "harakirimail.com", "inboxkitten.com", "maildrop.cc",
  "mailinator.com", "mailinator.net", "mailnesia.com", "mailpoof.com", "mintemail.com",
  "moakt.com", "mohmal.com", "mytemp.email", "sharklasers.com", "spam4.me", "spamgourmet.com",
  "temp-mail.io", "temp-mail.org", "tempail.com", "tempmail.com", "tempmail.dev",
  "tempmail.net", "tempmailo.com", "tempr.email", "throwawaymail.com", "trashmail.com",
  "trashmail.de", "yopmail.com", "yopmail.fr", "yopmail.net",
]);

const error = (mensaje, status) => Object.assign(new Error(mensaje), { status });

function esDesechable(correo) {
  return DESECHABLES.has(String(correo || "").split("@")[1] || "");
}

function hashCodigo(idUsuario, codigo) {
  return crypto.createHash("sha256").update(`${idUsuario}:${codigo}`).digest("hex");
}

/** Genera un código nuevo y lo envía al correo del usuario. */
async function enviarCodigo(usuario) {
  if (!CONFIGURADO) throw error("La verificación por correo no está activa.", 404);
  if (esDesechable(usuario.correo)) {
    throw error("No aceptamos correos temporales. Usa tu correo personal o entra con Google.", 400);
  }
  const envios = await almacen.incrementar(`verif-envios:${usuario.id}`, 3600);
  if (envios > MAX_ENVIOS_HORA) throw error("Pediste demasiados códigos. Intenta de nuevo en una hora.", 429);

  const codigo = String(crypto.randomInt(0, 1_000_000)).padStart(6, "0");
  await almacen.guardar(`verif:${usuario.id}`, {
    h: hashCodigo(usuario.id, codigo),
    vence: Date.now() + MINUTOS_VIGENCIA * 60_000,
    intentos: 0,
  });

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${CLAVE_RESEND}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: REMITENTE,
      to: [usuario.correo],
      subject: `Tu código de verificación: ${codigo}`,
      text:
        `Tu código para verificar tu cuenta en Derecho Chile IA es: ${codigo}\n\n` +
        `Vence en ${MINUTOS_VIGENCIA} minutos. Si no creaste esta cuenta, ignora este correo.`,
      html:
        `<div style="font-family:Arial,sans-serif;font-size:15px;color:#111">` +
        `<p>Tu código para verificar tu cuenta en <b>Derecho Chile IA</b> es:</p>` +
        `<p style="font-size:30px;font-weight:bold;letter-spacing:6px;margin:16px 0">${codigo}</p>` +
        `<p>Vence en ${MINUTOS_VIGENCIA} minutos. Si no creaste esta cuenta, ignora este correo.</p></div>`,
    }),
  });
  if (!res.ok) {
    const detalle = await res.text().catch(() => "");
    console.error("Resend rechazó el envío:", res.status, detalle.slice(0, 300));
    throw error("No pudimos enviar el código. Intenta de nuevo en unos minutos.", 502);
  }
}

/** Comprueba el código. Si es correcto lo elimina (no se puede reutilizar). */
async function comprobarCodigo(usuario, codigo) {
  const v = await almacen.obtener(`verif:${usuario.id}`);
  if (!v || v.vence < Date.now()) throw error("El código venció o no existe. Pide uno nuevo.", 400);
  if (v.intentos >= MAX_INTENTOS) throw error("Demasiados intentos. Pide un código nuevo.", 429);
  const limpio = String(codigo || "").replace(/\D/g, "");
  const a = Buffer.from(hashCodigo(usuario.id, limpio));
  const b = Buffer.from(v.h);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    v.intentos += 1;
    await almacen.guardar(`verif:${usuario.id}`, v);
    throw error("El código no es correcto.", 400);
  }
  await almacen.borrar(`verif:${usuario.id}`);
}

module.exports = { enviarCodigo, comprobarCodigo, esDesechable, CONFIGURADO };
