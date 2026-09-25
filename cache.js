// Caché en memoria con expiración y tamaño máximo (LRU simple).
//
// Buscar en el corpus remoto implica varias llamadas de red por consulta.
// Las preguntas se repiten mucho ("vacaciones", "finiquito", "arriendo"),
// así que guardar los resultados recientes hace que esas consultas sean
// instantáneas. En Vercel la caché vive mientras la instancia siga activa
// (con Fluid Compute eso suele ser bastante tiempo), y si se pierde no pasa
// nada: simplemente se vuelve a buscar.

class CacheTTL {
  constructor({ maximo = 500, ttlMs = 60 * 60 * 1000 } = {}) {
    this.maximo = maximo;
    this.ttlMs = ttlMs;
    this.mapa = new Map();
  }

  obtener(clave) {
    const entrada = this.mapa.get(clave);
    if (!entrada) return undefined;
    if (entrada.expira < Date.now()) {
      this.mapa.delete(clave);
      return undefined;
    }
    // Reinsertar la mueve al final: es la más recientemente usada.
    this.mapa.delete(clave);
    this.mapa.set(clave, entrada);
    return entrada.valor;
  }

  guardar(clave, valor, ttlMs = this.ttlMs) {
    this.mapa.delete(clave);
    this.mapa.set(clave, { valor, expira: Date.now() + ttlMs });
    while (this.mapa.size > this.maximo) {
      this.mapa.delete(this.mapa.keys().next().value);
    }
  }

  /**
   * Devuelve el valor cacheado, o ejecuta `producir` una sola vez aunque
   * lleguen varias peticiones iguales al mismo tiempo.
   */
  async recordar(clave, producir, { ttlMs, guardarSi = () => true } = {}) {
    const existente = this.obtener(clave);
    if (existente !== undefined) return existente;
    const enCurso = this.mapa.get(`__pendiente:${clave}`);
    if (enCurso) return enCurso.valor;

    const promesa = (async () => producir())();
    this.mapa.set(`__pendiente:${clave}`, { valor: promesa, expira: Date.now() + 120000 });
    try {
      const valor = await promesa;
      if (guardarSi(valor)) this.guardar(clave, valor, ttlMs);
      return valor;
    } finally {
      this.mapa.delete(`__pendiente:${clave}`);
    }
  }
}

/** Normaliza una pregunta para usarla como clave (minúsculas, sin tildes ni signos). */
function claveDeTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9ñ ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

module.exports = { CacheTTL, claveDeTexto };
