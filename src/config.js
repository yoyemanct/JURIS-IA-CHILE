export function readConfig(env = process.env) {
  const mode = env.AI_PROVIDER || 'demo';
  if (!['demo', 'anthropic'].includes(mode)) throw new Error('AI_PROVIDER debe ser demo o anthropic.');
  if (mode === 'anthropic' && (!env.ANTHROPIC_API_KEY?.trim() || !env.ANTHROPIC_MODEL?.trim())) throw new Error('Configura ANTHROPIC_API_KEY y ANTHROPIC_MODEL para activar la IA.');
  const port = Number(env.PORT || 3000);
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('PORT debe estar entre 1 y 65535.');
  return { mode, port, host: env.HOST || '127.0.0.1', apiKey: env.ANTHROPIC_API_KEY, model: env.ANTHROPIC_MODEL };
}
