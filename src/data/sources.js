// Resúmenes editoriales, no transcripciones ni una base exhaustiva de legislación.
// reviewedAt documenta la revisión de la página; no certifica vigencia normativa.
import { legalSources } from './legal-sources.js';

export const sources = [
  {
    id: 'DT-CONTRATO-9', area: 'laboral', topic: 'contrato',
    title: 'Plazo para escriturar el contrato de trabajo',
    publisher: 'Dirección del Trabajo', type: 'Orientación institucional',
    reference: 'Código del Trabajo, artículo 9',
    url: 'https://www.dt.gob.cl/portal/1628/w3-article-60780.html',
    reviewedAt: '2026-09-21',
    summary: 'Como regla general, el empleador tiene 15 días desde la incorporación del trabajador para dejar el contrato por escrito. El plazo es de 5 días para contratos por obra, trabajo determinado o de duración inferior a 30 días. Existen regímenes especiales que requieren revisión adicional.',
    keywords: ['contrato', 'escriturar', 'escrituracion', 'firmar', 'firma', 'escrito', 'plazo', 'empleador'],
  },
  {
    id: 'DT-CONTRATO-EXISTENCIA', area: 'laboral', topic: 'contrato',
    title: 'Relación laboral sin contrato escrito',
    publisher: 'Dirección del Trabajo', type: 'Orientación institucional',
    reference: 'Código del Trabajo, artículo 9',
    url: 'https://www.dt.gob.cl/portal/1628/w3-article-60785.html',
    reviewedAt: '2026-09-21',
    summary: 'El contrato de trabajo es consensual: la falta de escrituración no elimina por sí sola la relación laboral. La obligación de documentarlo corresponde al empleador. La calificación de una relación concreta exige revisar sus hechos.',
    keywords: ['contrato', 'escrito', 'firmado', 'firma', 'relacion', 'laboral', 'existencia'],
  },
  {
    id: 'SERNAC-GARANTIA', area: 'consumo', topic: 'garantia',
    title: 'Garantía legal de productos defectuosos',
    publisher: 'SERNAC', type: 'Orientación institucional',
    reference: 'Ley 19.496, artículos 20 y 21; reforma Ley 21.398',
    url: 'https://www.sernac.gob.cl/portal/617/w3-article-57424.html',
    reviewedAt: '2026-09-21',
    summary: 'Desde el 24 de marzo de 2022, el plazo de garantía legal de productos se amplió a seis meses. Ante un producto defectuoso, el consumidor puede escoger cambio, reparación gratuita o devolución del dinero, cuando se cumplen las condiciones legales. No equivale a un derecho general a devolver compras por arrepentimiento.',
    keywords: ['garantia', 'defectuoso', 'defectuosa', 'falla', 'fallas', 'producto', 'compra', 'devolucion', 'reparacion', 'dinero'],
  },
  {
    id: 'DT-FERIADO-67', area: 'laboral', topic: 'vacaciones',
    title: 'Cómputo de los días de feriado anual',
    publisher: 'Dirección del Trabajo', type: 'Orientación institucional',
    reference: 'Código del Trabajo, artículos 67 y 69',
    url: 'https://dt.gob.cl/portal/1628/w3-article-60177.html',
    reviewedAt: '2026-09-21',
    summary: 'La regla general para trabajadores con más de un año de servicio es un feriado anual de 15 días hábiles con remuneración íntegra; el sábado se considera inhábil para este cómputo. Hay una regla de 20 días hábiles para Aysén, Magallanes y la provincia de Palena, cuya aplicación debe revisarse según el lugar de prestación de servicios y las condiciones correspondientes.',
    keywords: ['vacaciones', 'feriado', 'anual', 'habiles', 'sabado', 'aysen', 'magallanes', 'palena'],
  },
].map(source => ({ ...source, kind: 'orientacion' })).concat(legalSources);
