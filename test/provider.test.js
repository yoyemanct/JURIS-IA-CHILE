import test from 'node:test';
import assert from 'node:assert/strict';
import { createAnthropicProvider } from '../src/providers/anthropic.js';
import { sources } from '../src/data/sources.js';
test('Messages API: endpoint fijo y evidencia estructurada', async () => {
  let request;
  const provider = createAnthropicProvider({ apiKey: 'test-secret', model: 'test-model', fetchImpl: async (url, options) => {
    request = { url, ...options };
    return Response.json({ stop_reason: 'end_turn', content: [{ type: 'text', text: JSON.stringify({ claims: [{ text: 'Resumen', sourceIds: [sources[0].id] }] }) }] });
  } });
  const result = await provider({ question: 'Contrato de trabajo', evidence: [sources[0]] });
  assert.equal(request.url, 'https://api.anthropic.com/v1/messages');
  assert.equal(request.headers['x-api-key'], 'test-secret');
  const body = JSON.parse(request.body);
  assert.equal(body.model, 'test-model');
  assert.equal(JSON.parse(body.messages[0].content).sources[0].id, sources[0].id);
  assert.equal(result.claims.length, 1);
});
test('proveedor recibe tipo, rol y límite de reseña sin confundir fechas', async () => {
  const source = sources.find(s => s.id === 'CS-PENAL-55308-2025');
  const provider = createAnthropicProvider({ apiKey: 'test', model: 'test', fetchImpl: async (_, options) => {
    const body = JSON.parse(options.body);
    const evidence = JSON.parse(body.messages[0].content).sources[0];
    assert.equal(evidence.kind, 'jurisprudencia');
    assert.equal(evidence.docket, '55.308-2025');
    assert.equal(evidence.decisionDate, null);
    assert.equal(evidence.publishedAt, '2026-07-27');
    assert.ok(evidence.scope.includes('texto íntegro no comprobados'));
    assert.match(body.system, /fecha de publicación/);
    return Response.json({ stop_reason: 'end_turn', content: [{ type: 'text', text: '{"claims":[]}' }] });
  } });
  await provider({ question: 'Jurisprudencia penal', evidence: [source] });
});
test('errores remotos, truncamiento y JSON inválido no generan respuestas', async () => {
  for (const response of [new Response('secreto remoto', { status: 500 }), Response.json({ stop_reason: 'max_tokens', content: [] }), Response.json({ stop_reason: 'end_turn', content: [{ type: 'text', text: 'no es JSON' }] })]) {
    const provider = createAnthropicProvider({ apiKey: 'test', model: 'test', fetchImpl: async () => response });
    await assert.rejects(provider({ question: 'Contrato', evidence: sources }));
  }
});
