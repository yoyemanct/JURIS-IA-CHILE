import test from 'node:test';
import assert from 'node:assert/strict';
import { sources } from '../src/data/sources.js';
import { searchSources, retrieveEvidence } from '../src/domain/search.js';
import { answerQuestion, validateClaims } from '../src/domain/answer.js';
import { readConfig } from '../src/config.js';

test('catálogo: IDs únicos, enlaces oficiales y fecha editorial', () => {
  assert.equal(new Set(sources.map(s => s.id)).size, sources.length);
  for (const s of sources) {
    assert.equal(new URL(s.url).protocol, 'https:');
    assert.ok(['www.dt.gob.cl', 'dt.gob.cl', 'www.sernac.gob.cl'].includes(new URL(s.url).hostname));
    assert.match(s.reviewedAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(s.summary && s.reference);
  }
});
test('búsqueda ignora acentos, respeta filtros y admite resultados vacíos', () => {
  assert.equal(searchSources('GARANTÍA')[0].id, 'SERNAC-GARANTIA');
  assert.equal(searchSources('garantía', 'laboral').length, 0);
  assert.equal(searchSources('', 'consumo').length, 1);
  assert.equal(searchSources('zzzinexistente').length, 0);
});
test('coincidencias genéricas no bastan como evidencia', () => {
  assert.equal(retrieveEvidence('¿Qué derechos tengo en Chile?', 'todas').length, 0);
  assert.equal(retrieveEvidence('¿Cuántos días tengo para demandar?', 'todas').length, 0);
  assert.equal(retrieveEvidence('¿Qué garantía tengo?', 'laboral').length, 0);
});
test('demo: tres temas con citas resolubles', async () => {
  for (const question of ['Plazo para escriturar contrato', 'Garantía de producto defectuoso', 'Días de vacaciones anuales']) {
    const result = await answerQuestion({ question });
    assert.equal(result.status, 'answered'); assert.equal(result.mode, 'demo');
    for (const claim of result.claims) for (const id of claim.sourceIds) assert.ok(result.sources.some(s => s.id === id));
  }
});
test('fuera de alcance se abstiene sin llamar al proveedor', async () => {
  const result = await answerQuestion({ question: '¿Cómo tramito una herencia?', provider: () => { throw new Error('No debería ejecutarse'); } });
  assert.equal(result.status, 'insufficient'); assert.deepEqual(result.sources, []);
});
test('rechaza citas inventadas, vacías y enlaces generados', () => {
  for (const claim of [{ text: 'Una afirmación', sourceIds: ['inventado'] }, { text: 'Una afirmación', sourceIds: [] }, { text: 'Visita https://evil.test', sourceIds: [sources[0].id] }, { text: '', sourceIds: [sources[0].id] }]) assert.throws(() => validateClaims({ claims: [claim] }, [sources[0]]), /INVALID_CITATIONS/);
  assert.throws(() => validateClaims({}, sources));
});
test('IA: abstención y exposición exclusiva de las fuentes citadas', async () => {
  assert.equal((await answerQuestion({ question: 'Contrato de trabajo', provider: async () => ({ claims: [] }) })).status, 'insufficient');
  const result = await answerQuestion({ question: 'Contrato de trabajo', provider: async () => ({ claims: [{ text: 'Síntesis de prueba.', sourceIds: ['DT-CONTRATO-9'] }] }) });
  assert.equal(result.mode, 'anthropic'); assert.equal(result.sources.length, 1);
});
test('configuración valida modo, credenciales y puerto', () => {
  assert.equal(readConfig({}).mode, 'demo');
  assert.throws(() => readConfig({ AI_PROVIDER: 'anthropic' }), /Configura/);
  assert.throws(() => readConfig({ AI_PROVIDER: 'otro' }));
  assert.throws(() => readConfig({ PORT: 'hola' }));
});
