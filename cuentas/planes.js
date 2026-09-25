// Planes y límites de uso. Todo se ajusta con variables de entorno, sin
// tocar el código.

const almacen = require("./almacen");

const PLANES = {
  gratis: {
    id: "gratis",
    nombre: "Gratis",
    precio: 0,
    consultasMes: Number(process.env.PLAN_GRATIS_CONSULTAS || 5),
    // Quienes prueban gratis usan un modelo más económico, para que su costo
    // en créditos de AI Gateway sea mínimo. Vacío = el modelo general.
    modelo: (process.env.PLAN_GRATIS_MODELO ?? "google/gemini-2.5-flash").trim(),
  },
  pro: {
    id: "pro",
    nombre: process.env.PLAN_PRO_NOMBRE || "Pro",
    precio: Number(process.env.PLAN_PRO_PRECIO || 19990),
    // 0 = ilimitado. Un tope alto evita abusos sin molestar a un usuario real.
    consultasMes: Number(process.env.PLAN_PRO_CONSULTAS || 0),
    modelo: (process.env.PLAN_PRO_MODELO || "").trim(),
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

const claveUso = (idUsuario) => `uso:${idUsuario}:${mesActual()}`;

async function usoDelMes(idUsuario) {
  return almacen.contador(claveUso(idUsuario));
}

/** Registra una consulta. Devuelve { permitido, usadas, limite }. */
async function consumirConsulta(usuario) {
  const plan = planDe(usuario);
  const usadas = await usoDelMes(usuario.id);
  if (plan.consultasMes && usadas >= plan.consultasMes) {
    return { permitido: false, usadas, limite: plan.consultasMes, plan };
  }
  const n = await almacen.incrementar(claveUso(usuario.id), 40 * 86400);
  return { permitido: true, usadas: n, limite: plan.consultasMes, plan };
}

/** Devuelve una consulta que no se pudo responder. */
async function devolverConsulta(usuario) {
  await almacen.decrementar(claveUso(usuario.id));
}

module.exports = { PLANES, planDe, usoDelMes, consumirConsulta, devolverConsulta };
