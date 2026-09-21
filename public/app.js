const $ = (id) => document.getElementById(id);
const node = (tag, text, className) => { const el = document.createElement(tag); if (text) el.textContent = text; if (className) el.className = className; return el; };
let lastAnswer; let searchRequest = 0;
async function api(path, options) {
  const response = await fetch(path, { ...options, signal: AbortSignal.timeout(35_000) });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'No fue posible conectar. Intenta nuevamente.');
  return data;
}
function officialLink(source) {
  const label = source.kind === 'jurisprudencia' ? (source.decisionDate ? 'Leer sentencia oficial (PDF) ↗' : 'Leer reseña oficial ↗') : 'Abrir fuente oficial ↗';
  const link = node('a', label);
  link.href = source.url; link.target = '_blank'; link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', `Abrir fuente oficial: ${source.title} (nueva pestaña)`);
  return link;
}
function caseMetadata(source) {
  const box = node('div', '', 'case-metadata');
  if (source.kind !== 'jurisprudencia') return box;
  box.append(node('strong', `${source.court} · Rol ${source.docket}`));
  box.append(node('p', source.decisionDate ? `Sentencia: ${source.decisionDate}` : `Fecha de sentencia: no comprobada · Publicación de reseña: ${source.publishedAt}`));
  box.append(node('p', `${source.documentType} · ${source.locator}`));
  box.append(node('p', source.scope, 'case-scope'));
  return box;
}
function sourceCard(source) {
  const card = node('article', '', 'source-card');
  card.append(node('span', `${source.area} / ${source.publisher}`, 'tag'), node('h3', source.title), node('p', source.reference), node('p', `${source.type} · Revisión: ${source.reviewedAt}`));
  const details = node('details'); details.append(node('summary', 'Leer resumen editorial'), node('p', source.summary));
  card.append(caseMetadata(source), details, officialLink(source)); return card;
}
async function loadSources() {
  const request = ++searchRequest;
  $('library-status').textContent = 'Buscando fuentes…';
  try {
    const params = new URLSearchParams({ q: $('source-query').value, area: $('source-area').value, kind: $('source-kind').value });
    const data = await api(`/api/sources?${params}`);
    if (request !== searchRequest) return;
    $('source-grid').replaceChildren(...data.sources.map(sourceCard));
    $('source-count').textContent = `${data.sources.length} ${data.sources.length === 1 ? 'fuente' : 'fuentes'}`;
    $('library-status').textContent = data.sources.length ? '' : 'Sin resultados en este catálogo. Prueba otro término o área.';
  } catch { if (request === searchRequest) { $('source-grid').replaceChildren(); $('library-status').textContent = 'No pudimos cargar las fuentes. Pulsa Buscar para reintentar.'; } }
}
function renderAnswer(data) {
  lastAnswer = data;
  $('result-status').textContent = data.message;
  $('notice').textContent = data.notice;
  const indexes = new Map(data.sources.map((source, i) => [source.id, i + 1]));
  $('claims').replaceChildren(...data.claims.map(claim => {
    const item = node('div', '', 'claim'); item.append(node('p', claim.text));
    for (const id of claim.sourceIds) { const link = node('a', `[${indexes.get(id)}] Ver respaldo`, 'citation-link'); link.href = `#cite-${id}`; item.append(link); }
    return item;
  }));
  $('citations').replaceChildren(...data.sources.map(source => {
    const item = node('article', '', 'citation-card'); item.id = `cite-${source.id}`;
    item.append(node('strong', `[${indexes.get(source.id)}] ${source.title}`), node('p', `${source.publisher} · ${source.reference} · Revisión: ${source.reviewedAt}`));
    const details = node('details'); details.append(node('summary', 'Comparar con el resumen editorial'), node('p', source.summary));
    item.append(caseMetadata(source), details, officialLink(source)); return item;
  }));
  $('copy').hidden = data.status !== 'answered';
}
$('question').addEventListener('input', () => { $('counter').textContent = `${$('question').value.length} / 2000`; });
document.querySelectorAll('[data-question]').forEach(button => button.addEventListener('click', () => {
  $('question').value = button.dataset.question; $('question').dispatchEvent(new Event('input')); $('area').value = button.dataset.area || 'todas'; $('question').focus();
}));
$('ask-form').addEventListener('submit', async event => {
  event.preventDefault();
  if ($('question').value.trim().length < 8) { $('question').setCustomValidity('Escribe al menos 8 caracteres, sin contar espacios al inicio y al final.'); $('question').reportValidity(); return; }
  const button = $('ask-button'); button.disabled = true; button.textContent = 'Consultando…';
  $('result').hidden = false; $('result').setAttribute('aria-busy', 'true'); $('result-status').classList.remove('error');
  $('result-status').textContent = 'Revisando el catálogo y preparando las referencias…';
  $('claims').replaceChildren(); $('citations').replaceChildren(); $('notice').textContent = ''; $('copy').hidden = true; lastAnswer = undefined;
  try { renderAnswer(await api('/api/ask', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ question: $('question').value, area: $('area').value }) })); }
  catch (error) { $('result-status').textContent = error.name === 'TimeoutError' ? 'La consulta tardó demasiado. Intenta nuevamente.' : error.message; $('result-status').classList.add('error'); }
  finally { button.disabled = false; button.textContent = 'Consultar fuentes ↗'; $('result').setAttribute('aria-busy', 'false'); $('result-title').focus(); }
});
$('question').addEventListener('input', () => $('question').setCustomValidity(''));
$('search-form').addEventListener('submit', event => { event.preventDefault(); loadSources(); });
$('source-area').addEventListener('change', loadSources);
$('source-kind').addEventListener('change', loadSources);
$('copy').addEventListener('click', async () => {
  if (!lastAnswer) return;
  const text = ['LexChile', lastAnswer.message, ...lastAnswer.claims.map(c => `${c.text} [${c.sourceIds.join(', ')}]`), ...lastAnswer.sources.map(s => `[${s.id}] ${s.title}\n${s.reference}\n${s.type}${s.docket ? `\n${s.court} · Rol ${s.docket}\n${s.decisionDate ? `Sentencia: ${s.decisionDate}` : `Fecha de sentencia no comprobada; reseña publicada: ${s.publishedAt}`}\n${s.locator}\n${s.scope}` : ''}\n${s.url}\nRevisión editorial: ${s.reviewedAt}`), lastAnswer.notice].join('\n\n');
  try { await navigator.clipboard.writeText(text); $('copy').textContent = 'Copiado'; }
  catch { $('copy').textContent = 'Selecciona el texto para copiar'; }
  setTimeout(() => { $('copy').textContent = 'Copiar con fuentes'; }, 2500);
});
api('/api/health').then(data => {
  $('mode').textContent = data.mode === 'demo' ? 'Modo demo · sin IA' : 'Asistido por Claude';
  if (data.mode === 'anthropic') $('privacy').textContent = 'Tu consulta se enviará a Anthropic. Evita nombres, RUT y otros datos personales.';
}).catch(() => { $('mode').textContent = 'Sin conexión'; });
loadSources();
