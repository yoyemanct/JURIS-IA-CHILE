import { retrieveEvidence } from './search.js';

export const notice = 'Orientación informativa, no asesoría jurídica. Confirma el texto vigente y su aplicación con un profesional. Las fuentes son un catálogo editorial limitado, sin actualización automática.';

export function validateClaims(value, evidence) {
  const allowed = new Set(evidence.map(s => s.id));
  if (!value || !Array.isArray(value.claims) || value.claims.length > 4) throw new Error('INVALID_CITATIONS');
  for (const claim of value.claims) {
    if (!claim || typeof claim.text !== 'string' || !claim.text.trim() || claim.text.length > 1800 || /https?:\/\/|www\./i.test(claim.text) || !Array.isArray(claim.sourceIds) || !claim.sourceIds.length || claim.sourceIds.some(id => !allowed.has(id))) {
      throw new Error('INVALID_CITATIONS');
    }
  }
  return value.claims.map(c => ({ text: c.text.trim(), sourceIds: [...new Set(c.sourceIds)] }));
}

export async function answerQuestion({ question, area = 'todas', provider }) {
  const evidence = retrieveEvidence(question, area);
  const base = { notice, mode: provider ? 'anthropic' : 'demo', claims: [], sources: [], status: 'insufficient', message: 'No hay evidencia suficiente en el catálogo para responder. Prueba con escrituración de contratos, garantía de productos defectuosos o feriado anual.' };
  if (!evidence.length) return base;
  // La demo presenta resúmenes, sin simular una interpretación personalizada.
  const claims = provider ? validateClaims(await provider({ question, evidence }), evidence) : evidence.map(s => ({ text: s.summary, sourceIds: [s.id] }));
  if (!claims.length) return base;
  const cited = new Set(claims.flatMap(c => c.sourceIds));
  return { ...base, status: 'answered', message: provider ? 'Síntesis asistida por IA. Revisa el respaldo de cada afirmación.' : 'Resúmenes relacionados con tu consulta. El modo demo no interpreta tu caso individual.', claims, sources: evidence.filter(s => cited.has(s.id)) };
}
