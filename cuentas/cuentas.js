// Cuentas de usuario: registro, inicio de sesión y sesiones.
//
// Las contraseñas se guardan con scrypt (nunca en texto plano) y la sesión es
// una cookie firmada con SESSION_SECRET, sin datos sensibles adentro: solo el
// id de usuario y el vencimiento.

const crypto = require("node:crypto");
const almacen = require("./almacen");

const SECRETO = process.env.SESSION_SECRET || "";
const DIAS_SESION = Number(process.env.DIAS_SESION || 30);
const COOKIE = "dci_sesion";

const normalizarCorreo = (c) => String(c || "").trim().toLowerCase();
const correoValido = (c) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c) && c.length <= 200;

function hashContrasena(contrasena, sal = crypto.randomBytes(16).toString("hex")) {
  const hash = crypto.scryptSync(contrasena, sal, 64).toString("hex");
  return `${sal}:${hash}`;
}

function verificarContrasena(contrasena, guardado) {
  const [sal, hash] = String(guardado || "").split(":");
  if (!sal || !hash) return false;
  const calculado = crypto.scryptSync(contrasena, sal, 64);
  const esperado = Buffer.from(hash, "hex");
  return esperado.length === calculado.length && crypto.timingSafeEqual(esperado, calculado);
}

function firmar(texto) {
  return crypto.createHmac("sha256", SECRETO).update(texto).digest("base64url");
}

function crearToken(idUsuario) {
  const cuerpo = Buffer.from(JSON.stringify({ u: idUsuario, v: Date.now() + DIAS_SESION * 864e5 })).toString("base64url");
  return `${cuerpo}.${firmar(cuerpo)}`;
}

function leerToken(token) {
  if (!SECRETO || !token) return null;
  const [cuerpo, firma] = String(token).split(".");
  if (!cuerpo || !firma) return null;
  const esperada = firmar(cuerpo);
  if (esperada.length !== firma.length || !crypto.timingSafeEqual(Buffer.from(esperada), Buffer.from(firma))) return null;
  try {
    const datos = JSON.parse(Buffer.from(cuerpo, "base64url").toString("utf8"));
    return datos.v > Date.now() ? datos.u : null;
  } catch {
    return null;
  }
}

function leerCookie(req, nombre) {
  const cabecera = req.headers.cookie || "";
  for (const parte of cabecera.split(";")) {
    const [k, ...v] = parte.trim().split("=");
    if (k === nombre) return decodeURIComponent(v.join("="));
  }
  return null;
}

function ponerSesion(res, idUsuario) {
  const seguro = process.env.NODE_ENV === "production" || Boolean(process.env.VERCEL);
  res.setHeader(
    "Set-Cookie",
    `${COOKIE}=${encodeURIComponent(crearToken(idUsuario))}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${DIAS_SESION * 86400}${seguro ? "; Secure" : ""}`
  );
}

function borrarSesion(res) {
  res.setHeader("Set-Cookie", `${COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`);
}

async function registrar({ correo, contrasena, nombre }) {
  correo = normalizarCorreo(correo);
  if (!correoValido(correo)) throw Object.assign(new Error("Ingresa un correo válido."), { status: 400 });
  if (String(contrasena || "").length < 8) throw Object.assign(new Error("La contraseña debe tener al menos 8 caracteres."), { status: 400 });
  const usuario = {
    id: crypto.randomUUID(),
    correo,
    nombre: String(nombre || "").trim().slice(0, 100),
    clave: hashContrasena(String(contrasena)),
    creado: new Date().toISOString(),
    suscripcion: null,
  };
  // El índice por correo se crea primero y de forma atómica: dos registros
  // simultáneos con el mismo correo no pueden crear dos cuentas.
  const libre = await almacen.crearSiNoExiste(`correo:${correo}`, usuario.id);
  if (!libre) throw Object.assign(new Error("Ya existe una cuenta con ese correo. Inicia sesión."), { status: 409 });
  await almacen.guardar(`usuario:${usuario.id}`, usuario);
  return usuario;
}

async function iniciarSesion({ correo, contrasena }) {
  const id = await almacen.obtener(`correo:${normalizarCorreo(correo)}`);
  const usuario = id ? await almacen.obtener(`usuario:${id}`) : null;
  if (usuario && !usuario.clave) {
    throw Object.assign(new Error("Esta cuenta se creó con Google. Usa «Continuar con Google»."), { status: 401 });
  }
  if (!usuario || !verificarContrasena(String(contrasena || ""), usuario.clave)) {
    throw Object.assign(new Error("Correo o contraseña incorrectos."), { status: 401 });
  }
  return usuario;
}

async function usuarioDeSolicitud(req) {
  const id = leerToken(leerCookie(req, COOKIE));
  return id ? almacen.obtener(`usuario:${id}`) : null;
}

async function actualizarUsuario(id, cambios) {
  const usuario = await almacen.obtener(`usuario:${id}`);
  if (!usuario) return null;
  const nuevo = { ...usuario, ...cambios };
  await almacen.guardar(`usuario:${id}`, nuevo);
  return nuevo;
}

/** Datos públicos del usuario (sin el hash de la contraseña). */
function publico(u) {
  if (!u) return null;
  const { clave, ...resto } = u;
  return resto;
}

module.exports = {
  registrar,
  iniciarSesion,
  usuarioDeSolicitud,
  actualizarUsuario,
  ponerSesion,
  borrarSesion,
  publico,
  SESIONES_CONFIGURADAS: Boolean(SECRETO),
};
