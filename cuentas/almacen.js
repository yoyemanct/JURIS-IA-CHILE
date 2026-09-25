// Almacenamiento de cuentas, suscripciones y uso.
//
// En producción usa Redis de Upstash por su API REST (se crea en Vercel →
// Storage → Upstash Redis, que agrega solas las variables de entorno). Sin
// esas variables, guarda todo en memoria: sirve para probar en local, pero se
// pierde al reiniciar, así que el cobro no se activa en ese modo.

// La integración de Vercel antepone un prefijo a elección (KV_, STORAGE_…),
// así que se acepta cualquier variable que termine en _REST_API_URL/_TOKEN.
function variable(sufijo, preferidas) {
  for (const nombre of preferidas) if (process.env[nombre]) return process.env[nombre];
  const encontrada = Object.keys(process.env).find((k) => k.endsWith(sufijo) && !k.includes("READ_ONLY"));
  return encontrada ? process.env[encontrada] : "";
}
const URL_REDIS = variable("_REST_API_URL", ["KV_REST_API_URL", "UPSTASH_REDIS_REST_URL"]).replace(/\/+$/, "");
const TOKEN_REDIS = variable("_REST_API_TOKEN", ["KV_REST_API_TOKEN", "UPSTASH_REDIS_REST_TOKEN"]);
const PERSISTENTE = Boolean(URL_REDIS && TOKEN_REDIS);

const memoria = new Map();

async function redis(comando) {
  const res = await fetch(URL_REDIS, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN_REDIS}`, "Content-Type": "application/json" },
    body: JSON.stringify(comando),
  });
  const datos = await res.json().catch(() => ({}));
  if (!res.ok || datos.error) throw new Error(`Base de datos: ${datos.error || `HTTP ${res.status}`}`);
  return datos.result;
}

async function obtener(clave) {
  if (!PERSISTENTE) return memoria.has(clave) ? structuredClone(memoria.get(clave)) : null;
  const v = await redis(["GET", clave]);
  return v == null ? null : JSON.parse(v);
}

async function guardar(clave, valor, { segundos } = {}) {
  if (!PERSISTENTE) {
    memoria.set(clave, structuredClone(valor));
    return;
  }
  const cmd = ["SET", clave, JSON.stringify(valor)];
  if (segundos) cmd.push("EX", String(segundos));
  await redis(cmd);
}

/** Guarda solo si la clave no existe. Devuelve true si la creó. */
async function crearSiNoExiste(clave, valor) {
  if (!PERSISTENTE) {
    if (memoria.has(clave)) return false;
    memoria.set(clave, structuredClone(valor));
    return true;
  }
  return (await redis(["SET", clave, JSON.stringify(valor), "NX"])) === "OK";
}

async function borrar(clave) {
  if (!PERSISTENTE) {
    memoria.delete(clave);
    return;
  }
  await redis(["DEL", clave]);
}

/** Incrementa un contador y le pone vencimiento. Devuelve el valor nuevo. */
async function incrementar(clave, segundos) {
  if (!PERSISTENTE) {
    const n = (memoria.get(clave) || 0) + 1;
    memoria.set(clave, n);
    return n;
  }
  const n = await redis(["INCR", clave]);
  if (n === 1 && segundos) await redis(["EXPIRE", clave, String(segundos)]);
  return n;
}

async function contador(clave) {
  if (!PERSISTENTE) return memoria.get(clave) || 0;
  return Number((await redis(["GET", clave])) || 0);
}

module.exports = { obtener, guardar, crearSiNoExiste, borrar, incrementar, contador, PERSISTENTE };
