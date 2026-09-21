import test from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createApp } from '../src/server.js';
async function start(t, options) {
  const server = createApp(options); server.listen(0, '127.0.0.1'); await once(server, 'listening');
  t.after(() => new Promise(resolve => { server.close(resolve); server.closeAllConnections(); }));
  const base = `http://127.0.0.1:${server.address().port}`;
  return (path, options) => fetch(base + path, options);
}
const post = body => ({ method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
test('HTTP: salud, catálogo, consulta y abstención', async t => {
  const request = await start(t);
  assert.equal((await (await request('/api/health')).json()).mode, 'demo');
  assert.equal((await (await request('/api/sources?area=consumo')).json()).sources.length, 1);
  const result = await request('/api/ask', post({ question: '¿Qué garantía tiene un producto defectuoso?' }));
  assert.equal(result.status, 200); assert.equal((await result.json()).sources[0].id, 'SERNAC-GARANTIA');
  assert.equal((await (await request('/api/ask', post({ question: '¿Cómo tramito un divorcio?' }))).json()).status, 'insufficient');
});
test('HTTP: validación, tamaño y tipo de contenido', async t => {
  const request = await start(t);
  for (const body of [null, {}, { question: 123 }, { question: 'corto' }, { question: ' '.repeat(20) }, { question: 'x'.repeat(2001) }, { question: 'Contrato laboral', area: 'penal' }]) assert.equal((await request('/api/ask', post(body))).status, 400);
  assert.equal((await request('/api/ask', { method: 'POST', body: 'hola' })).status, 415);
  assert.equal((await request('/api/ask', { ...post({}), body: '{' })).status, 400);
  assert.equal((await request('/api/sources?area=penal')).status, 400);
  assert.equal((await request('/api/ask', post({ question: 'x'.repeat(9000) }))).status, 413);
});
test('HTTP: límite y recuperación de la ventana', async t => {
  let now = 1000; const request = await start(t, { rateLimit: 1, clock: () => now });
  const options = post({ question: 'Contrato de trabajo' });
  assert.equal((await request('/api/ask', options)).status, 200);
  const response = await request('/api/ask', options); assert.equal(response.status, 429); assert.ok(response.headers.get('retry-after'));
  now += 61_000; assert.equal((await request('/api/ask', options)).status, 200);
});
test('HTTP: fallos del proveedor no exponen secretos', async t => {
  const request = await start(t, { provider: async () => { throw new Error('secret-key'); } });
  const response = await request('/api/ask', post({ question: 'Contrato de trabajo' }));
  assert.equal(response.status, 502); assert.ok(!(await response.text()).includes('secret-key'));
});
test('HTTP: archivos privados inaccesibles, CSP y cross-site', async t => {
  const request = await start(t);
  for (const path of ['/src/config.js', '/.env', '/.git/config', '/%2e%2e/.env']) assert.equal((await request(path)).status, 404);
  const page = await request('/'); assert.equal(page.status, 200); assert.match(page.headers.get('content-security-policy'), /frame-ancestors 'none'/); assert.match(await page.text(), /LexChile/);
  for (const path of ['/style.css', '/app.js', '/favicon.svg']) assert.equal((await request(path)).status, 200);
  const options = post({ question: 'Contrato de trabajo' }); options.headers['sec-fetch-site'] = 'cross-site';
  assert.equal((await request('/api/ask', options)).status, 403);
});
