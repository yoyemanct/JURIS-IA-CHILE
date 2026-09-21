import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { readConfig } from './config.js';
import { sources } from './data/sources.js';
import { areas, sourceKinds, searchSources } from './domain/search.js';
import { answerQuestion } from './domain/answer.js';
import { createAnthropicProvider } from './providers/anthropic.js';

const assets = new Map([['/', ['index.html', 'text/html']], ['/app.js', ['app.js', 'text/javascript']], ['/style.css', ['style.css', 'text/css']], ['/favicon.svg', ['favicon.svg', 'image/svg+xml']]]);
function send(res, status, data) { res.writeHead(status, { 'content-type': 'application/json; charset=utf-8' }); res.end(JSON.stringify(data)); }
const fail = (status, message) => Object.assign(new Error(message), { status });
async function readJson(req) {
  if (!req.headers['content-type']?.toLowerCase().startsWith('application/json')) throw fail(415, 'Usa contenido JSON.');
  const chunks = []; let bytes = 0;
  for await (const chunk of req) {
    bytes += chunk.length;
    if (bytes > 8192) throw fail(413, 'La consulta supera el tamaño permitido.');
    chunks.push(chunk);
  }
  try { return JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch { throw fail(400, 'JSON inválido.'); }
}

export function createApp({ provider, clock = Date.now, rateLimit = 20 } = {}) {
  const buckets = new Map();
  let inFlight = 0;
  return http.createServer(async (req, res) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'no-referrer');
    res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'");
    res.setHeader('Cache-Control', 'no-store');
    try {
      const url = new URL(req.url, 'http://localhost');
      if (req.method === 'GET' && url.pathname === '/api/health') return send(res, 200, { status: 'ok', mode: provider ? 'anthropic' : 'demo', sourceCount: sources.length });
      if (req.method === 'GET' && url.pathname === '/api/sources') {
        const q = url.searchParams.get('q') || ''; const area = url.searchParams.get('area') || 'todas';
        const kind = url.searchParams.get('kind') || 'todas';
        if (q.length > 2000 || !areas.includes(area) || !sourceKinds.includes(kind)) throw fail(400, 'Filtro inválido.');
        return send(res, 200, { sources: searchSources(q, area, kind) });
      }
      if (req.method === 'POST' && url.pathname === '/api/ask') {
        if (req.headers['sec-fetch-site'] === 'cross-site') throw fail(403, 'Solicitud externa rechazada.');
        const now = clock();
        for (const [key, value] of buckets) if (now >= value.until) buckets.delete(key);
        const key = req.socket.remoteAddress;
        const bucket = buckets.get(key) || { count: 0, until: now + 60_000 };
        if (bucket.count >= rateLimit) { res.setHeader('Retry-After', Math.ceil((bucket.until - now) / 1000)); throw fail(429, 'Demasiadas consultas. Espera un minuto.'); }
        bucket.count++; buckets.set(key, bucket);
        const body = await readJson(req);
        if (!body || typeof body.question !== 'string' || body.question.trim().length < 8 || body.question.length > 2000 || !areas.includes(body.area ?? 'todas')) throw fail(400, 'Escribe una consulta entre 8 y 2000 caracteres y selecciona un área válida.');
        if (inFlight >= 4) throw fail(503, 'El servicio está ocupado. Intenta nuevamente.');
        inFlight++;
        try { return send(res, 200, await answerQuestion({ question: body.question.trim(), area: body.area ?? 'todas', provider })); }
        catch { throw fail(502, 'No fue posible generar una respuesta con citas válidas. Intenta nuevamente o revisa las fuentes.'); }
        finally { inFlight--; }
      }
      if (req.method === 'GET' && assets.has(url.pathname)) {
        const [file, type] = assets.get(url.pathname);
        const content = await readFile(new URL(`../public/${file}`, import.meta.url));
        res.writeHead(200, { 'content-type': `${type}; charset=utf-8` }); return res.end(content);
      }
      return send(res, 404, { error: 'Recurso no encontrado.' });
    } catch (error) { if (!res.headersSent && !res.destroyed) send(res, error.status || 500, { error: error.status ? error.message : 'Error interno.' }); }
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const config = readConfig();
  const provider = config.mode === 'anthropic' ? createAnthropicProvider(config) : undefined;
  const server = createApp({ provider });
  server.requestTimeout = 30_000;
  server.listen(config.port, config.host, () => console.log(`LexChile: http://${config.host}:${config.port} (${config.mode})`));
  for (const signal of ['SIGTERM', 'SIGINT']) process.on(signal, () => server.close());
}
