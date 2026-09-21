import { sources } from '../data/sources.js';

export const areas = ['todas', 'laboral', 'consumo', 'civil', 'penal', 'constitucional'];
export const sourceKinds = ['todas', 'legislacion', 'jurisprudencia', 'orientacion'];
export const normalize = (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const stopwords = new Set('a al algo ante como con cual cuales cuando de del desde donde el ella en es esta estoy hay la las le lo los me mi mis no o para pero por puedo que quien se si sin sobre son su sus tengo tiene un una unos y yo'.split(' '));
export function tokens(text) {
  return [...new Set(normalize(text).split(/[^a-z0-9]+/).filter(t => t.length > 2 && !stopwords.has(t)))];
}

export function searchSources(query = '', area = 'todas', kind = 'todas') {
  const terms = tokens(query);
  return sources.filter(s => (area === 'todas' || s.area === area) && (kind === 'todas' || s.kind === kind)).map(source => {
    const title = tokens(source.title);
    const body = tokens(`${source.summary} ${source.reference} ${source.publisher} ${source.kind} ${source.court || ''} ${source.docket || ''} ${source.decisionDate || ''}`);
    const exactDocket = source.docket && normalize(query).replace(/[.\s]/g, '').includes(normalize(source.docket).replace(/[.\s]/g, ''));
    const score = (exactDocket ? 100 : 0) + terms.reduce((sum, term) => sum + (source.keywords.includes(term) ? 4 : 0) + (title.includes(term) ? 2 : 0) + (body.includes(term) ? 1 : 0), 0);
    return { ...source, score };
  }).filter(s => !terms.length || s.score > 0).sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
}

// La recuperación de respuestas exige un término específico del tema. Un resultado
// léxico por "días" o "trabajo" no basta para fundamentar una respuesta.
const topicTerms = {
  contrato: ['contrato', 'escriturar', 'escrituracion'],
  garantia: ['garantia', 'defectuoso', 'defectuosa', 'falla', 'fallas', 'reparacion'],
  vacaciones: ['vacaciones', 'feriado'],
  obligaciones: ['incumplimiento', 'contractual', 'obligaciones'],
  inocencia: ['inocencia', 'presuncion'],
  debido_proceso: ['nulidad', 'simplificado', 'fundamentacion'],
  control_constitucional: ['inaplicabilidad', 'inconstitucionalidad', 'constitucionalidad', 'preventivo'],
  control_electoral: ['sufragio', 'electoral', 'voto', 'preventivo'],
};
export function retrieveEvidence(question, area) {
  const terms = tokens(question);
  let topics = Object.entries(topicTerms).filter(([, words]) => words.some(w => terms.includes(w))).map(([topic]) => topic);
  const normalized = normalize(question);
  if (normalized.includes('buena fe') || (area === 'civil' && terms.includes('contrato'))) topics.push('obligaciones');
  if (normalized.includes('debido proceso')) topics.push('debido_proceso');
  if (topics.some(t => ['obligaciones', 'debido_proceso'].includes(t)) && !terms.includes('laboral') && !terms.includes('trabajo')) topics = topics.filter(t => t !== 'contrato');
  const jurisprudenceOnly = /\b(jurisprudencia|fallos?|sentencias?)\b/.test(normalized) && !/\b(ley|leyes|legislacion|normas?)\b/.test(normalized);
  const catalogWords = new Set(['jurisprudencia', 'fallo', 'fallos', 'sentencia', 'sentencias', 'mostrar', 'muestra', 'ver', 'buscar', 'area', 'derecho', 'civil', 'penal', 'constitucional', 'chileno', 'chilena']);
  const browseAreaCases = jurisprudenceOnly && terms.every(term => catalogWords.has(term));
  const results = searchSources(question, area, jurisprudenceOnly ? 'jurisprudencia' : 'todas');
  // Un rol identifica una decisión, sin convertir cualquier número aislado en evidencia.
  const compact = normalized.replace(/[.\s]/g, '');
  return results.filter(s => topics.includes(s.topic) || (s.docket && compact.includes(normalize(s.docket).replace(/[.\s]/g, ''))) || (browseAreaCases && topics.length === 0 && area && area !== 'todas')).slice(0, 4);
}
