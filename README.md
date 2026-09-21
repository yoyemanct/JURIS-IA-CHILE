# LexChile

**Derecho chileno, con respaldo.** Una app web de código abierto para explorar fuentes jurídicas y obtener orientación con referencias trazables.

MVP con Node.js, sin dependencias externas ni base de datos. Funciona inmediatamente en modo demo; puede conectarse a Claude para generar síntesis a partir del mismo catálogo.

## Inicio rápido

Requisito: **Node.js 22 o superior**.

```sh
git clone https://github.com/yoyemanct/Lexchile.git
cd Lexchile
# Mientras el MVP esté en revisión:
git checkout feat/lexchile-mvp
npm start
```

Abre **http://127.0.0.1:3000**. No necesitas instalar paquetes, claves ni servicios. Alternativa sin npm: `node --env-file-if-exists=.env src/server.js`. `npm run dev` activa reinicio automático.

### Recorrido de demo

1. Selecciona «Contrato de trabajo» y pulsa **Consultar fuentes**.
2. Lee los resúmenes y pulsa **Ver respaldo** para inspeccionar cada referencia.
3. Abre el enlace oficial o copia la respuesta con sus fuentes.
4. Busca «garantía» en la biblioteca y filtra por Consumo.
5. Consulta «¿Cómo tramito una herencia?» para comprobar la abstención por falta de cobertura.

El modo demo **no genera texto con IA ni interpreta casos individuales**: muestra resúmenes editoriales relacionados con la consulta. La interfaz lo identifica permanentemente.

## Activar Claude

Copia `.env.example` a `.env` (PowerShell: `Copy-Item .env.example .env`; macOS/Linux: `cp .env.example .env`) y configura:

```dotenv
AI_PROVIDER=anthropic
ANTHROPIC_API_KEY=tu_clave
ANTHROPIC_MODEL=identificador_de_modelo_habilitado_en_tu_cuenta
HOST=127.0.0.1
PORT=3000
```

Reinicia el servidor. Se usa [Messages API de Anthropic](https://platform.claude.com/docs/en/api/messages/create). El modelo es configurable para evitar depender de un alias retirado. La clave permanece en el servidor; `.env` está excluido de Git y Docker.

Solo en modo IA se envían la consulta y los resúmenes a Anthropic. Evita datos personales. La app no guarda conversaciones ni registra su contenido. El proveedor aplica sus propias políticas de datos y cobro. Las pruebas del adaptador usan respuestas simuladas; disponibilidad y calidad del modelo deben comprobarse con credenciales reales.

Los errores de API, timeout, JSON inválido o citas desconocidas se muestran como errores; no hay sustitución silenciosa por una respuesta demo.

## Funcionalidad

- Consultas en español, ejemplos, filtros, carga, errores y copia con referencias.
- Biblioteca con búsqueda sin distinción de acentos y resúmenes desplegables.
- Diez fuentes oficiales en cinco áreas: laboral, consumo, civil, penal y constitucional. Filtros por legislación, jurisprudencia y orientación; búsqueda por tribunal y rol.
- Recuperación léxica por tema y generación opcional con Claude.
- Citas mediante IDs permitidos y enlaces controlados por el servidor.
- Interfaz adaptable con navegación por teclado, etiquetas y avisos accesibles.
- Validación, límites de tamaño y solicitudes, timeout de IA y concurrencia limitada.
- Pruebas de dominio, HTTP y proveedor; CI para Node 22/24.

## Fuentes y límites

| Tema | Institución | Referencia |
| --- | --- | --- |
| Escrituración | [Dirección del Trabajo](https://www.dt.gob.cl/portal/1628/w3-article-60780.html) | Código del Trabajo, art. 9 |
| Contrato sin documento | [Dirección del Trabajo](https://www.dt.gob.cl/portal/1628/w3-article-60785.html) | Código del Trabajo, art. 9 |
| Garantía de productos | [SERNAC](https://www.sernac.gob.cl/portal/617/w3-article-57424.html) | Ley 19.496, arts. 20–21; Ley 21.398 |
| Feriado anual | [Dirección del Trabajo](https://dt.gob.cl/portal/1628/w3-article-60177.html) | Código del Trabajo, arts. 67 y 69 |

Revisión editorial inicial: **21 de septiembre de 2026**. El catálogo reúne cuatro orientaciones institucionales, tres resúmenes legislativos y tres fichas de jurisprudencia. Las normas enlazan a BCN/LeyChile; no se incorpora su texto completo. Dos fichas judiciales provienen de reseñas oficiales del Poder Judicial y una del PDF íntegro del Tribunal Constitucional. La fecha registra la revisión de la fuente; **no certifica vigencia normativa**. No hay búsqueda web ni actualización automática al consultar.

«Cita verificable» significa que el usuario puede abrir el enlace y contrastar el respaldo. La validación automática comprueba que el ID existe y pertenece a la evidencia recuperada; **no demuestra que una afirmación generada esté jurídicamente respaldada**, completa o vigente. La IA puede equivocarse aun citando una fuente real. La demo muestra información relacionada, no respuestas personalizadas. LexChile es informativo y no reemplaza asesoría profesional.

Para ampliar la cobertura, sigue [la guía editorial](docs/SOURCES.md).

### Nuevas áreas y jurisprudencia

| Área | Cobertura inicial | Jurisprudencia |
| --- | --- | --- |
| Civil | Contratos, buena fe y prueba del daño emergente | Corte Suprema, rol 15.355-2025: reseña oficial |
| Penal | Presunción de inocencia y debido proceso | Corte Suprema, rol 55.308-2025: reseña oficial |
| Constitucional | Control preventivo e inaplicabilidad; ejemplo electoral | TC, rol 17.010-25 CPR, 16-10-2025: sentencia íntegra |

Cada ficha muestra tribunal, rol, tipo de documento, localización del fundamento y límites. En las dos reseñas se muestra la fecha de publicación (27-07-2026), **no una fecha de sentencia inferida**; esta última figura como no comprobada. Los enlaces del Poder Judicial pueden exigir verificación humana. Los resúmenes se contrastaron con sus reseñas oficiales indexadas, sin acceso al fallo íntegro. La decisión del TC corresponde a un proyecto de ley y no sustituye la revisión de las reglas electorales vigentes.

La cobertura no incluye todo el derecho civil, penal o constitucional: por ejemplo, herencias, delitos específicos y recursos particulares todavía pueden quedar sin evidencia. No se atribuye a las decisiones particulares alcance general ni valor de precedente obligatorio.

## Arquitectura

```text
public/                   Interfaz HTML/CSS/JS sin compilación
src/server.js             HTTP, validación, límites y recursos públicos
src/config.js             Configuración y validación al iniciar
src/domain/search.js      Búsqueda y recuperación por tema
src/domain/answer.js      Caso de uso, abstención y validación de citas
src/providers/anthropic.js Adaptador Messages API (fetch inyectable)
src/data/sources.js        Catálogo y orientación institucional
src/data/legal-sources.js  Legislación y fichas jurisprudenciales
test/                     Pruebas de dominio, proveedor y HTTP
```

Flujo: navegador → validación → recuperación → resúmenes o Claude → validación de IDs → respuesta con fuentes. El servidor solo sirve recursos públicos enumerados explícitamente. El navegador usa `textContent`, sin ejecutar HTML del modelo o de la consulta.

### API

| Método | Ruta | Uso |
| --- | --- | --- |
| GET | `/api/health` | Estado, modo y número de fuentes |
| GET | `/api/sources?q=15355-2025&area=civil&kind=jurisprudencia` | Áreas: `todas`, `laboral`, `consumo`, `civil`, `penal`, `constitucional`; tipos: `todas`, `legislacion`, `jurisprudencia`, `orientacion` |
| POST | `/api/ask` | JSON: `{"question":"¿Qué garantía tiene un producto defectuoso?","area":"consumo"}` |

Respuesta: `status` (`answered` o `insufficient`), `mode`, `claims` con `sourceIds`, `sources`, `message` y `notice`. Errores: 400 validación, 403 cross-site, 413 tamaño, 415 formato, 429 límite, 502 fallo de IA/citas, 503 capacidad. Consulta: 8–2000 caracteres; cuerpo: 8 KiB; 20 solicitudes por IP/minuto; hasta 4 consultas concurrentes por proceso.

## Pruebas

```sh
npm run check
# Sin npm:
node --check src/server.js
node --check public/app.js
node --test
```

Se cubren recuperación, filtros, abstención, citas inventadas, configuración, contrato del proveedor, errores remotos, rutas HTTP, archivos privados y límites. Las pruebas no consumen API ni consultan sitios oficiales. CI ejecuta los controles con Node 22 y 24.

## Docker y operación

```sh
docker build -t lexchile .
docker run --rm -p 3000:3000 lexchile
# Con IA:
docker run --rm --env-file .env -e HOST=0.0.0.0 -p 3000:3000 lexchile
```

Localmente escucha solo en loopback. Para exposición pública se requieren TLS, autenticación o cuotas por usuario, límites de gasto, monitoreo y revisión jurídica del catálogo. El rate limit es por proceso y usa la IP de conexión: detrás de un proxy los usuarios pueden compartir cupo. No confía en `X-Forwarded-For`. No es una plataforma de asesoría jurídica lista para producción.

## Siguientes pasos

Ingesta versionada de legislación BCN/LeyChile, fragmentos verificables del texto original, búsqueda semántica evaluada, detección de cambios y evaluación jurídica. Ampliar cobertura exige fuentes y pruebas nuevas, no solo prompts.

## Licencia

[MIT](LICENSE) para el código. Las fuentes externas conservan sus condiciones de uso y atribución.
