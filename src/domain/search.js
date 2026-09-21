import { sources } from '../data/sources.js';

export const areas = ['todas', 'laboral', 'consumo'];
export const normalize = (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const stopwords = new Set('a al algo ante como con cual cuales cuando de del desde donde el ella en es esta estoy hay la las le lo los me mi mis no o para pero por puedo que quien se si sin sobre son su sus tengo tiene un una unos y yo'.split(' '));
export function tokens(text) {
  return [...new Set(normalize(text).split(/[^a-z0-9]+/).filter(t => t.length > 2 && !stopwords.has(t)))];
}

export function searchSources(query = '', area = 'todas') {
  const terms = tokens(query);
  return sources.filter(s => area === 'todas' || s.area === area).map(source => {
    const title = tokens(source.title);
    const body = tokens(`${source.summary} ${source.reference} ${source.publisher}`);
    const score = terms.reduce((sum, term) => sum + (source.keywords.includes(term) ? 4 : 0) + (title.includes(term) ? 2 : 0) + (body.includes(term) ? 1 : 0), 0);
    return { ...source, score };
  }).filter(s => !terms.length || s.score > 0).sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
}

// La recuperación de respuestas exige un término específico del tema. Un resultado
// léxico por "días" o "trabajo" no basta para fundamentar una respuesta.
const topicTerms = {
  contrato: ['contrato', 'escriturar', 'escrituracion'],
  garantia: ['garantia', 'defectuoso', 'defectuosa', 'falla', 'fallas', 'reparacion'],
  vacaciones: ['vacaciones', 'feriado'],
};
export function retrieveEvidence(question, area) {
  const terms = tokens(question);
  const topics = Object.entries(topicTerms).filter(([, words]) => words.some(w => terms.includes(w))).map(([topic]) => topic);
  return searchSources(question, area).filter(s => topics.includes(s.topic)).slice(0, 4);
}
