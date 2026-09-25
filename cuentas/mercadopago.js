// Suscripciones mensuales con Mercado Pago (API de "preapproval").
//
//   1. crearSuscripcion: crea la suscripción del usuario y devuelve el enlace
//      (init_point) donde paga en Mercado Pago.
//   2. Mercado Pago avisa a /api/pagos/webhook cada vez que la suscripción
//      cambia (autorizada, pausada, cancelada) o se cobra una cuota.
//   3. El aviso NO se cree a ciegas: siempre se vuelve a consultar la
//      suscripción a la API de Mercado Pago con el token privado, que es la
//      fuente de verdad. Si además se configura MP_WEBHOOK_SECRET, se verifica
//      la firma del aviso.

const crypto = require("node:crypto");

const API = (process.env.MP_API_URL || "https://api.mercadopago.com").replace(/\/+$/, "");
const TOKEN = process.env.MP_ACCESS_TOKEN || "";
const SECRETO_WEBHOOK = process.env.MP_WEBHOOK_SECRET || "";

async function llamar(metodo, ruta, cuerpo) {
  const res = await fetch(`${API}${ruta}`, {
    method: metodo,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
      "X-Idempotency-Key": crypto.randomUUID(),
    },
    body: cuerpo ? JSON.stringify(cuerpo) : undefined,
  });
  const datos = await res.json().catch(() => ({}));
  if (!res.ok) {
    const detalle = datos.message || datos.error || `HTTP ${res.status}`;
    throw Object.assign(new Error(`Mercado Pago: ${detalle}`), { status: 502, statusMP: res.status, detalle: datos });
  }
  return datos;
}

/**
 * Crea una suscripción mensual para el usuario y devuelve { id, init_point }.
 * `external_reference` guarda el id del usuario para reconocerlo en el aviso.
 *
 * Descuento del primer mes: Mercado Pago no tiene "primer cobro con
 * descuento" en las suscripciones, así que se crea con el monto rebajado y,
 * cuando se registra el primer cobro, se sube al precio normal con
 * actualizarMonto(). El motivo (reason) lo informa en el checkout.
 */
async function crearSuscripcion({ usuario, plan, urlRetorno, montoInicial }) {
  const conDescuento = montoInicial && montoInicial < plan.precio;
  const clp = (n) => `$${Number(n).toLocaleString("es-CL")}`;
  return llamar("POST", "/preapproval", {
    reason: conDescuento
      ? `Derecho Chile IA — Plan ${plan.nombre}: primer mes ${clp(montoInicial)} (${plan.descuentoPrimerMes}% dcto.), luego ${clp(plan.precio)}/mes`
      : `Derecho Chile IA — Plan ${plan.nombre}`,
    external_reference: usuario.id,
    payer_email: usuario.correo,
    back_url: urlRetorno,
    status: "pending",
    auto_recurring: {
      frequency: 1,
      frequency_type: "months",
      transaction_amount: conDescuento ? montoInicial : plan.precio,
      currency_id: "CLP",
    },
  });
}

/** Cambia el monto de los próximos cobros de una suscripción. */
async function actualizarMonto(id, monto) {
  return llamar("PUT", `/preapproval/${encodeURIComponent(id)}`, {
    auto_recurring: { transaction_amount: monto, currency_id: "CLP" },
  });
}

async function obtenerSuscripcion(id) {
  return llamar("GET", `/preapproval/${encodeURIComponent(id)}`);
}

async function cancelarSuscripcion(id) {
  return llamar("PUT", `/preapproval/${encodeURIComponent(id)}`, { status: "cancelled" });
}

/**
 * Verifica la firma del aviso de Mercado Pago (cabecera x-signature). Si no
 * hay secreto configurado, devuelve true: la seguridad descansa entonces en
 * volver a consultar la suscripción a la API.
 */
function firmaValida(req, idDato) {
  if (!SECRETO_WEBHOOK) return true;
  const firma = String(req.headers["x-signature"] || "");
  const idSolicitud = String(req.headers["x-request-id"] || "");
  const partes = Object.fromEntries(firma.split(",").map((p) => p.trim().split("=")));
  if (!partes.ts || !partes.v1) return false;
  const manifiesto = `id:${String(idDato).toLowerCase()};request-id:${idSolicitud};ts:${partes.ts};`;
  const esperado = crypto.createHmac("sha256", SECRETO_WEBHOOK).update(manifiesto).digest("hex");
  return esperado.length === partes.v1.length && crypto.timingSafeEqual(Buffer.from(esperado), Buffer.from(partes.v1));
}

module.exports = {
  crearSuscripcion,
  actualizarMonto,
  obtenerSuscripcion,
  cancelarSuscripcion,
  firmaValida,
  CONFIGURADO: Boolean(TOKEN),
};
