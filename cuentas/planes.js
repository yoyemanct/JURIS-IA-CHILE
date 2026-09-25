// Planes y límites de uso. Todo se ajusta con variables de entorno, sin
// tocar el código.
//
//   - Gratis: una consulta de PRUEBA por cuenta (no se renueva), respondida
//     con el mismo modelo que el plan Pro, para que la persona vea la calidad
//     real antes de pagar.
//   - Pro: suscripción mensual. El primer mes lleva un descuento (50 % por
//     defecto) que se aplica una sola vez por cuenta.

const almacen = require("./almacen");

const PRECIO_PRO = Number(process.env.PLAN_PRO_PRECIO || 19990);
const DESCUENTO_PRIMER_MES = Math.min(100, Math.max(0, Number(process.env.PLAN_PRO_DESCUENTO_PRIMER_MES ?? 50)));
const MODELO_PRO = (process.env.PLAN_PRO_MODELO || "").trim();

const PLANES = {
  gratis: {
    id: "gratis",
    nombre: "Prueba gratis",
    precio: 0,
    // Consultas de prueba por cuenta, en total (no por mes).
    consultas: Number(process.env.PLAN_GRATIS_CONSULTAS || 1),
    periodo: "prueba",
    // Mismo modelo que el plan Pro, salvo que se configure otro.
    modelo: (process.env.PLAN_GRATIS_MODELO || MODELO_PRO).trim(),
  },
  pro: {
    id: "pro",
    nombre: process.env.PLAN_PRO_NOMBRE || "Pro",
    precio: PRECIO_PRO,
    descuentoPrimerMes: DESCUENTO_PRIMER_MES,
    // Precio del primer mes: redondeado a peso.
    precioPrimerMes: Math.round(PRECIO_PRO * (1 - DESCUENTO_PRIMER_MES / 100)),
    // 0 = ilimitado. Un tope alto evita abusos sin molestar a un usuario real.
    consultas: Number(process.env.PLAN_PRO_CONSULTAS || 0),
    periodo: "mes",
    modelo: MODELO_PRO,
  },
};

const CORREOS_ADMIN = (process.env.ADMIN_EMAILS || "")
  .split(",")
  .map((c) => c.trim().toLowerCase())
  .filter(Boolean);

function mesActual() {
  return new Date().toISOString().slice(0, 7);
}

// Una suscripción "authorized" de Mercado Pago está activa. Si se cancela, el
// usuario conserva el plan hasta el final del período ya pagado.
function planDe(usuario) {
  if (!usuario) return PLANES.gratis;
  if (CORREOS_ADMIN.includes(usuario.correo)) return { ...PLANES.pro, admin: true };
  const s = usuario.suscripcion;
  if (s && (s.estado === "authorized" || (s.pagadoHasta && new Date(s.pagadoHasta) > new Date()))) {
    return PLANES.pro;
  }
  return PLANES.gratis;
}

/** ¿Le corresponde el descuento del primer mes? Solo una vez por cuenta. */
function tieneDescuento(usuario) {
  return PLANES.pro.descuentoPrimerMes > 0 && !(usuario && usuario.descuentoUsado);
}

// La prueba gratis se cuenta de por vida; el plan pagado, por mes.
const claveUso = (idUsuario, plan) =>
  plan.periodo === "prueba" ? `uso:${idUsuario}:prueba` : `uso:${idUsuario}:${mesActual()}`;

async function usoActual(usuario) {
  const plan = planDe(usuario);
  return { usadas: await almacen.contador(claveUso(usuario.id, plan)), limite: plan.consultas, periodo: plan.periodo };
}

/** Registra una consulta. Devuelve { permitido, usadas, limite, plan }. */
async function consumirConsulta(usuario) {
  const plan = planDe(usuario);
  const clave = claveUso(usuario.id, plan);
  const usadas = await almacen.contador(clave);
  if (plan.consultas && usadas >= plan.consultas) {
    return { permitido: false, usadas, limite: plan.consultas, plan };
  }
  // La prueba no vence; el contador mensual se borra solo a los 40 días.
  const n = await almacen.incrementar(clave, plan.periodo === "prueba" ? 0 : 40 * 86400);
  return { permitido: true, usadas: n, limite: plan.consultas, plan };
}

/** Devuelve una consulta que no se pudo responder. */
async function devolverConsulta(usuario) {
  await almacen.decrementar(claveUso(usuario.id, planDe(usuario)));
}

module.exports = { PLANES, planDe, tieneDescuento, usoActual, consumirConsulta, devolverConsulta };
