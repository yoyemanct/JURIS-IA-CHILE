// Rutas de cuentas y pagos, y el control de acceso a las consultas.
//
// El cobro solo se activa cuando están las tres piezas: token de Mercado Pago,
// base de datos persistente y SESSION_SECRET. Mientras falte alguna, la app
// funciona como antes (libre, sin cuentas), así que se puede desplegar este
// código antes de terminar de configurar los pagos.

const rateLimit = require("express-rate-limit");
const almacen = require("./almacen");
const cuentas = require("./cuentas");
const planes = require("./planes");
const mp = require("./mercadopago");
const google = require("./google");

const COBRO_ACTIVO =
  process.env.COBRO_ACTIVO !== "false" &&
  mp.CONFIGURADO &&
  cuentas.SESIONES_CONFIGURADAS &&
  (almacen.PERSISTENTE || process.env.COBRO_PERMITIR_MEMORIA === "true");

const CONTACTO = process.env.CONTACTO_EMAIL || "";

function urlBase(req) {
  if (process.env.APP_URL) return process.env.APP_URL.replace(/\/+$/, "");
  const proto = req.headers["x-forwarded-proto"] || req.protocol || "https";
  return `${proto}://${req.headers["x-forwarded-host"] || req.headers.host}`;
}

async function estadoCuenta(usuario) {
  const plan = planes.planDe(usuario);
  return {
    cobro_activo: COBRO_ACTIVO,
    google_activo: COBRO_ACTIVO && google.CONFIGURADO,
    usuario: cuentas.publico(usuario),
    plan: { id: plan.id, nombre: plan.nombre, admin: Boolean(plan.admin) },
    uso: usuario ? await planes.usoActual(usuario) : null,
    descuento_disponible: planes.tieneDescuento(usuario),
    planes: Object.values(planes.PLANES).map((p) => ({
      id: p.id,
      nombre: p.nombre,
      precio: p.precio,
      consultas: p.consultas,
      periodo: p.periodo,
      precioPrimerMes: p.precioPrimerMes,
      descuentoPrimerMes: p.descuentoPrimerMes,
    })),
    contacto: CONTACTO,
  };
}

/**
 * Registra una suscripción de Mercado Pago en la cuenta de su usuario y, si
 * ya se cobró el primer mes con descuento, sube los cobros siguientes al
 * precio normal. `trasCobro`: el aviso que la dispara es un cobro recibido.
 */
async function sincronizarSuscripcion(idPreapproval, { trasCobro = false } = {}) {
  const s = await mp.obtenerSuscripcion(idPreapproval);
  const idUsuario = s.external_reference;
  if (!idUsuario) return null;
  const usuario = await almacen.obtener(`usuario:${idUsuario}`);
  if (!usuario) return null;
  const previo = usuario.suscripcion || {};
  const pro = planes.PLANES.pro;
  let monto = s.auto_recurring && s.auto_recurring.transaction_amount;
  const autorizada = s.status === "authorized";
  const cobrada = trasCobro || Boolean(s.summarized && (s.summarized.charged_quantity >= 1 || s.summarized.last_charged_date));

  // Primer mes con descuento ya cobrado: desde el segundo cobro, precio normal.
  let precioNormalAplicado = previo.precioNormalAplicado || false;
  if (autorizada && cobrada && monto && monto < pro.precio) {
    try {
      await mp.actualizarMonto(s.id, pro.precio);
      monto = pro.precio;
      precioNormalAplicado = true;
      console.log(JSON.stringify({ evento: "precio_normal_aplicado", usuario: idUsuario, suscripcion: s.id, monto }));
    } catch (err) {
      // Se reintentará en el próximo aviso o al abrir la cuenta.
      console.error("No se pudo subir la suscripción al precio normal:", err.message, err.detalle || "");
    }
  }

  // Mientras la suscripción está autorizada, el acceso llega hasta el próximo
  // cobro; si se cancela, se conserva lo ya pagado hasta esa fecha.
  const pagadoHasta = autorizada && s.next_payment_date ? s.next_payment_date : previo.pagadoHasta || null;
  return cuentas.actualizarUsuario(idUsuario, {
    // El descuento del primer mes se usa una sola vez por cuenta.
    descuentoUsado: usuario.descuentoUsado || autorizada,
    suscripcion: {
      id: s.id,
      estado: s.status,
      monto,
      precioNormalAplicado,
      proximoCobro: s.next_payment_date || null,
      pagadoHasta,
      actualizado: new Date().toISOString(),
    },
  });
}

// Red de seguridad: si una suscripción sigue con el monto rebajado y se
// acerca el segundo cobro, se revisa al abrir la cuenta (por si se perdió el
// aviso del primer cobro).
async function revisarPrecioPendiente(usuario) {
  const s = usuario && usuario.suscripcion;
  if (!s || !s.id) return usuario;
  const hace = Date.now() - new Date(s.actualizado || 0).getTime();
  const faltan = new Date(s.proximoCobro || 0).getTime() - Date.now();
  // Pago iniciado sin confirmar: puede que se haya perdido el aviso y que el
  // usuario no haya vuelto desde Mercado Pago. Se consulta como máximo una vez
  // por minuto y solo los primeros 3 días.
  const pagoSinConfirmar = s.estado === "pending" && hace > 60 * 1000 && hace < 3 * 86400 * 1000;
  const precioSinSubir =
    s.estado === "authorized" && !s.precioNormalAplicado && s.monto < planes.PLANES.pro.precio &&
    hace >= 6 * 3600 * 1000 && faltan <= 10 * 86400 * 1000;
  if (!pagoSinConfirmar && !precioSinSubir) return usuario;
  try {
    return (await sincronizarSuscripcion(s.id)) || usuario;
  } catch (err) {
    console.error("No se pudo revisar el precio de la suscripción:", err.message);
    return usuario;
  }
}

function registrarRutas(app) {
  const limitadorCuentas = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 20,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Demasiados intentos. Espera unos minutos." },
  });

  app.get("/api/cuenta", async (req, res) => {
    try {
      const usuario = COBRO_ACTIVO ? await revisarPrecioPendiente(await cuentas.usuarioDeSolicitud(req)) : null;
      res.set("Cache-Control", "no-store");
      res.json(await estadoCuenta(usuario));
    } catch (err) {
      console.error("Error en /api/cuenta:", err);
      res.status(500).json({ error: "No se pudo leer la cuenta." });
    }
  });

  app.post("/api/cuenta/registro", limitadorCuentas, async (req, res) => {
    if (!COBRO_ACTIVO) return res.status(404).json({ error: "Las cuentas no están activas." });
    try {
      const usuario = await cuentas.registrar(req.body || {});
      cuentas.ponerSesion(res, usuario.id);
      res.json(await estadoCuenta(usuario));
    } catch (err) {
      res.status(err.status || 500).json({ error: err.status ? err.message : "No se pudo crear la cuenta." });
    }
  });

  app.post("/api/cuenta/ingreso", limitadorCuentas, async (req, res) => {
    if (!COBRO_ACTIVO) return res.status(404).json({ error: "Las cuentas no están activas." });
    try {
      const usuario = await cuentas.iniciarSesion(req.body || {});
      cuentas.ponerSesion(res, usuario.id);
      res.json(await estadoCuenta(usuario));
    } catch (err) {
      res.status(err.status || 500).json({ error: err.status ? err.message : "No se pudo iniciar sesión." });
    }
  });

  app.get("/api/cuenta/google", limitadorCuentas, (req, res) => {
    if (!COBRO_ACTIVO || !google.CONFIGURADO) return res.status(404).send("El ingreso con Google no está activo.");
    google.iniciar(req, res, urlBase(req));
  });

  app.get("/api/cuenta/google/callback", async (req, res) => {
    if (!COBRO_ACTIVO || !google.CONFIGURADO) return res.status(404).send("El ingreso con Google no está activo.");
    try {
      const usuario = await google.completar(req, urlBase(req));
      cuentas.ponerSesion(res, usuario.id);
      res.redirect("/?ingreso=google");
    } catch (err) {
      console.error("Error en el ingreso con Google:", err.message, {
        host: req.headers.host,
        tieneEstado: /dci_google_estado=/.test(req.headers.cookie || ""),
        tieneCodigo: Boolean(req.query.code),
        errorGoogle: req.query.error || null,
      });
      res.redirect(`/?error_ingreso=${encodeURIComponent(err.message)}`);
    }
  });

  app.post("/api/cuenta/salir", (req, res) => {
    cuentas.borrarSesion(res);
    res.json({ ok: true });
  });

  // Inicia la suscripción al plan pagado y devuelve el enlace de pago.
  app.post("/api/pagos/suscribir", limitadorCuentas, async (req, res) => {
    if (!COBRO_ACTIVO) return res.status(404).json({ error: "Los pagos no están activos." });
    const usuario = await cuentas.usuarioDeSolicitud(req);
    if (!usuario) return res.status(401).json({ error: "Inicia sesión para suscribirte." });
    try {
      const pro = planes.PLANES.pro;
      const s = await mp.crearSuscripcion({
        usuario,
        plan: pro,
        urlRetorno: `${urlBase(req)}/?pago=retorno`,
        montoInicial: planes.tieneDescuento(usuario) ? pro.precioPrimerMes : pro.precio,
      });
      await cuentas.actualizarUsuario(usuario.id, {
        suscripcion: { ...(usuario.suscripcion || {}), id: s.id, estado: s.status || "pending", actualizado: new Date().toISOString() },
      });
      res.json({ url: s.init_point });
    } catch (err) {
      console.error("Error creando la suscripción:", err.message, err.detalle || "");
      res.status(502).json({ error: "No se pudo iniciar el pago con Mercado Pago. Intenta de nuevo en unos minutos." });
    }
  });

  // Al volver de Mercado Pago se sincroniza de inmediato, sin esperar el aviso.
  app.post("/api/pagos/verificar", async (req, res) => {
    if (!COBRO_ACTIVO) return res.status(404).json({ error: "Los pagos no están activos." });
    const usuario = await cuentas.usuarioDeSolicitud(req);
    if (!usuario) return res.status(401).json({ error: "Inicia sesión." });
    try {
      const id = (usuario.suscripcion && usuario.suscripcion.id) || String((req.body && req.body.preapproval_id) || "");
      const actualizado = id ? await sincronizarSuscripcion(id) : null;
      res.json(await estadoCuenta(actualizado && actualizado.id === usuario.id ? actualizado : usuario));
    } catch (err) {
      console.error("Error verificando el pago:", err.message);
      res.status(502).json({ error: "No se pudo verificar el pago todavía. Revisa en unos minutos." });
    }
  });

  app.post("/api/pagos/cancelar", limitadorCuentas, async (req, res) => {
    if (!COBRO_ACTIVO) return res.status(404).json({ error: "Los pagos no están activos." });
    const usuario = await cuentas.usuarioDeSolicitud(req);
    const id = usuario && usuario.suscripcion && usuario.suscripcion.id;
    if (!id) return res.status(400).json({ error: "No tienes una suscripción activa." });
    try {
      await mp.cancelarSuscripcion(id);
      const actualizado = await sincronizarSuscripcion(id);
      res.json(await estadoCuenta(actualizado || usuario));
    } catch (err) {
      console.error("Error cancelando la suscripción:", err.message);
      res.status(502).json({ error: "No se pudo cancelar en Mercado Pago. Intenta de nuevo o escríbenos." });
    }
  });

  // Avisos de Mercado Pago (configurar esta URL en el panel de Mercado Pago).
  app.post("/api/pagos/webhook", async (req, res) => {
    const tipo = String((req.body && (req.body.type || req.body.topic)) || req.query.type || req.query.topic || "");
    const idDato = String((req.body && req.body.data && req.body.data.id) || req.query["data.id"] || req.query.id || "");
    if (!idDato) return res.status(200).json({ ok: true, ignorado: "sin id" });
    if (!mp.firmaValida(req, idDato)) return res.status(401).json({ error: "Firma inválida." });
    try {
      if (tipo.includes("preapproval")) {
        await sincronizarSuscripcion(idDato);
      } else if (tipo.includes("authorized_payment")) {
        // Cobro de una cuota: se vuelve a leer la suscripción a la que pertenece.
        const pago = await fetch(`${(process.env.MP_API_URL || "https://api.mercadopago.com").replace(/\/+$/, "")}/authorized_payments/${encodeURIComponent(idDato)}`, {
          headers: { Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}` },
        }).then((r) => r.json());
        const cobrado = pago && (pago.status === "processed" || (pago.payment && pago.payment.status === "approved"));
        if (pago && pago.preapproval_id) await sincronizarSuscripcion(pago.preapproval_id, { trasCobro: Boolean(cobrado) });
      }
      res.status(200).json({ ok: true });
    } catch (err) {
      // Un aviso de algo que no existe (404) no se arregla reintentando.
      if (err.statusMP === 404) return res.status(200).json({ ok: true, ignorado: "no existe" });
      console.error("Error procesando el aviso de Mercado Pago:", err.message);
      // 500 hace que Mercado Pago reintente el aviso más tarde.
      res.status(500).json({ error: "Reintentar" });
    }
  });
}

/**
 * Middleware para las rutas que consumen IA. Si el cobro está activo, exige
 * sesión y descuenta una consulta del plan del mes.
 */
async function exigirPlan(req, res, next) {
  if (!COBRO_ACTIVO) return next();
  try {
    const usuario = await cuentas.usuarioDeSolicitud(req);
    if (!usuario) {
      return res.status(401).json({ error: "Crea una cuenta gratis o inicia sesión para consultar.", codigo: "REQUIERE_CUENTA" });
    }
    const r = await planes.consumirConsulta(usuario);
    if (!r.permitido) {
      const pro = planes.PLANES.pro;
      const clp = (n) => `$${Number(n).toLocaleString("es-CL")}`;
      const oferta = planes.tieneDescuento(usuario)
        ? `El primer mes del plan ${pro.nombre} cuesta ${clp(pro.precioPrimerMes)} (${pro.descuentoPrimerMes}% de descuento) y luego ${clp(pro.precio)} al mes.`
        : `El plan ${pro.nombre} cuesta ${clp(pro.precio)} al mes.`;
      return res.status(402).json({
        error: r.plan.periodo === "prueba"
          ? `Ya usaste tu consulta de prueba. Suscríbete para seguir consultando sin límite: ${oferta}`
          : `Alcanzaste el límite de ${r.limite} consultas de este mes.`,
        codigo: "LIMITE_PLAN",
        uso: { usadas: r.usadas, limite: r.limite },
      });
    }
    req.usuario = usuario;
    // Si la consulta termina en error (validación, fuente o IA), no cuenta.
    res.on("finish", () => {
      if (res.statusCode >= 400 || res.locals.consultaFallida) {
        planes.devolverConsulta(usuario).catch((e) => console.error("No se pudo devolver la consulta:", e.message));
      }
    });
    next();
  } catch (err) {
    console.error("Error verificando el plan:", err);
    res.status(503).json({ error: "No se pudo verificar tu plan en este momento. Intenta de nuevo." });
  }
}

module.exports = { registrarRutas, exigirPlan, COBRO_ACTIVO, sincronizarSuscripcion };
