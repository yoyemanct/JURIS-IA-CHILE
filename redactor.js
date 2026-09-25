// Redacción de la respuesta: llama al modelo, completa si se cortó, valida y
// corrige. Lo usan el servidor y el evaluador (scripts/eval.js), para que lo
// que se evalúa sea exactamente lo que ve el usuario.
//
// Con streaming, el texto se muestra mientras se escribe:
//   - Lo que venga antes del primer título (un "Colega, recibí tu
//     solicitud...") se retiene y nunca se muestra.
//   - Si la respuesta se corta (límite de largo o falta la sección final),
//     se pide al mismo modelo que continúe donde quedó y la continuación se
//     sigue mostrando a continuación, sin repetir nada.
//   - Al terminar, el validador corrige lo que haga falta (frases
//     prohibidas, citas no fieles, roles inexistentes) y, si cambió algo, se
//     envía el texto corregido para reemplazar el mostrado.
// Sin streaming (JSON), si aparecen frases prohibidas se regenera una vez con
// una nota correctiva antes de limpiar, porque nadie vio aún el texto.

const proveedorIA = require("./proveedorIA");
const { validar, revisarSecciones } = require("./validador");

const MAX_CONTINUACIONES = 1;

/** Retiene el inicio del texto hasta ver el primer título y descarta lo previo. */
function crearFiltroInicio(emitir) {
  let pendiente = "";
  let liberado = false;
  return {
    agregar(trozo) {
      if (liberado) return emitir(trozo);
      pendiente += trozo;
      const idx = pendiente.search(/(^|\n)#{1,3}\s/);
      if (idx >= 0) {
        liberado = true;
        emitir(pendiente.slice(pendiente[idx] === "\n" ? idx + 1 : idx));
      } else if (pendiente.length > 1500) {
        liberado = true;
        emitir(pendiente);
      }
    },
    terminar() {
      if (!liberado && pendiente) emitir(pendiente);
      liberado = true;
    },
  };
}

function registrar(evento, datos) {
  console.log(JSON.stringify({ evento, ...datos }));
}

/**
 * @param {object} p
 * @param {string} p.proveedor, p.modelo, p.systemPrompt, p.userMessage, p.modo
 * @param {number} [p.maxTokens]
 * @param {{normas, jurisprudencia, documento}} p.fuentes  lo recuperado, para validar citas y roles
 * @param {(t: string) => void} [p.onTexto]       texto nuevo (streaming)
 * @param {(t: string) => void} [p.onReemplazo]   texto final corregido (streaming)
 * @returns {Promise<{texto, proveedor, modelo, problemas, bruto, continuaciones, regenerada}>}
 */
async function redactar({ proveedor, modelo, systemPrompt, userMessage, maxTokens, modo, fuentes = {}, onTexto, onReemplazo }) {
  const enVivo = Boolean(onTexto);
  const filtro = crearFiltroInicio((t) => onTexto?.(t));
  let r = await proveedorIA.responder({ proveedor, modelo, systemPrompt, userMessage, maxTokens, onTexto: enVivo ? (t) => filtro.agregar(t) : undefined });
  filtro.terminar();
  let bruto = r.texto;
  let continuaciones = 0;

  // Respuesta cortada: se continúa con el mismo modelo.
  while (continuaciones < MAX_CONTINUACIONES &&
    (r.finishReason === "length" || !revisarSecciones(bruto, modo).ultimaPresente) &&
    bruto.length > 400) {
    continuaciones++;
    registrar("respuesta_continuada", { modo, motivo: r.finishReason === "length" ? "limite_de_largo" : "falta_seccion_final", largo: bruto.length });
    let primero = true;
    const unir = (t) => {
      if (primero) {
        primero = false;
        if (!bruto.endsWith("\n") && /^\s*#/.test(t)) t = `\n\n${t.replace(/^\s+/, "")}`;
      }
      return t;
    };
    const cont = await proveedorIA.responder({
      proveedor,
      modelo: r.modelo,
      systemPrompt,
      maxTokens,
      userMessage: `${userMessage}\n\n---\n\nRESPUESTA YA ESCRITA (se interrumpió; no la repitas):\n\n${bruto}\n\n---\n\n` +
        "Continúa exactamente donde quedó la respuesta anterior: sin repetir nada, sin preámbulos y sin volver a escribir títulos ya escritos. Completa las secciones que faltan de la estructura y termina con la línea de cierre.",
      onTexto: enVivo ? (t) => onTexto(unir(t)) : undefined,
    });
    bruto += unir(cont.texto);
    r = { ...r, finishReason: cont.finishReason };
  }

  let v = validar(bruto, { modo, ...fuentes });
  let regenerada = false;

  // Sin streaming y con frases prohibidas: una regeneración con nota correctiva.
  if (!enVivo && v.prohibidasOriginales.length) {
    regenerada = true;
    registrar("respuesta_regenerada", { modo, frases: v.prohibidasOriginales.map((p) => p.id) });
    const nota = `\n\nCORRECCIÓN OBLIGATORIA: en un intento anterior escribiste frases sobre tu funcionamiento interno o sobre el material (${v.prohibidasOriginales.map((p) => `"${p.fragmento.trim()}"`).join("; ")}). No vuelvas a hacerlo: responde directamente, como un abogado que conoce la ley.`;
    const r2 = await proveedorIA.responder({ proveedor, modelo: r.modelo, systemPrompt: systemPrompt + nota, userMessage, maxTokens });
    const v2 = validar(r2.texto, { modo, ...fuentes });
    if (!v2.truncada || v.truncada) {
      bruto = r2.texto;
      v = v2;
      r = { ...r, ...r2 };
    }
  }

  if (v.problemas.length) registrar("validacion_respuesta", { modo, modelo: r.modelo, problemas: v.problemas });
  if (enVivo && v.cambiado) onReemplazo?.(v.texto);

  return { texto: v.texto, proveedor: r.proveedor, modelo: r.modelo, problemas: v.problemas, bruto, continuaciones, regenerada, truncada: v.truncada };
}

module.exports = { redactar, crearFiltroInicio };
