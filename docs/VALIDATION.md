# Validación del MVP

Validado el 21 de septiembre de 2026 con Node 24.19.0 en Windows.

- `node --check src/server.js` y `node --check public/app.js`: correctos.
- `node --test`: 15 pruebas aprobadas, sin llamadas externas.
- `git diff --check`: sin errores de espacios.
- Navegador Edge, automatización Playwright: vista de escritorio 1440×1100 y móvil 390×844; inspección visual de capturas completas.
- Recorrido comprobado: ejemplo de contrato → consulta → dos resúmenes → enlace a respaldo; pregunta de herencia → abstención; búsqueda GARANTÍA → una fuente; búsqueda inexistente → estado vacío; ejemplo de garantía en móvil → una respuesta con fuente.
- Sin errores de JavaScript ni desbordamiento horizontal en móvil.

No se ejecutaron llamadas reales a Claude porque no se configuraron credenciales. El contrato del adaptador, errores remotos y validación de citas se verificaron mediante simulaciones. Docker se incluye como alternativa de ejecución, pero no se construyó una imagen en este entorno. La matriz Linux Node 22/24 está configurada en CI; su resultado debe verificarse en el PR.

La revisión funcional no constituye auditoría de seguridad, accesibilidad ni validación jurídica exhaustiva. La cobertura del catálogo y la relación semántica entre respuestas de IA y fuentes siguen requiriendo revisión humana.
