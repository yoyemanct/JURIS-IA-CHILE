# Juris IA Chile

> Open-source AI toolkit for searching, structuring and citing Chilean legislation and legal sources.

**Juris IA Chile**: un buscador + asistente de IA que responde preguntas sobre legislación chilena
citando siempre la ley y el artículo exacto — pensado tanto para abogados como para personas sin
formación legal. Puedes usar **Claude** (de Anthropic, de pago pero muy preciso) o **Qwen
corriendo localmente vía Ollama** (gratis, en tu propio computador) como motor de IA — ver la
sección "Elegir el proveedor de IA" más abajo.

Fuente de datos del corpus jurídico completo: [leyes.pisanvs.cl](https://leyes.pisanvs.cl)
(proyecto [`pisanvs/ley-chile`](https://github.com/pisanvs/ley-chile), AGPLv3), que reconstruye
la legislación chilena desde la Biblioteca del Congreso Nacional. Ver la sección más abajo para
detalles de licencia y de qué tan confiable es esta fuente.

## Publicar en Vercel (recomendado)

La app está lista para desplegarse en [Vercel](https://vercel.com) sin configuración extra:
Vercel detecta el servidor Express (`server.js`) y sirve la interfaz desde `public/`.

1. En Vercel, **Add New → Project** e importa este repositorio.
2. En **Settings → Environment Variables** agrega `AI_GATEWAY_API_KEY` con tu clave de
   Vercel AI Gateway (opcional si usas la autenticación automática de Vercel), y si quieres
   `VERCEL_AI_MODEL` para elegir el modelo (ver `.env.example`).
3. **Deploy.** Listo: la app queda publicada con su propia URL.

Para usarla en tu computador con la misma clave, ponla en tu archivo `.env` y ejecuta
`npm start`.

Límites a tener en cuenta en Vercel: el archivo subido en "Analizar documento" no puede
superar ~4,5 MB (límite de la plataforma), y Qwen local no está disponible allí.

### Por qué responde rápido

- **Streaming:** el informe aparece en pantalla a medida que la IA lo escribe; se empieza a
  leer en uno o dos segundos.
- **Búsqueda en paralelo:** las normas se consultan todas a la vez y no una tras otra. Si el
  corpus remoto tarda, se usa lo que alcanzó a llegar.
- **Caché:** las búsquedas y respuestas recientes quedan guardadas; una pregunta repetida se
  responde al instante.
- **Respaldo entre modelos:** si el modelo principal falla o no responde, el gateway pasa
  solo al siguiente (`VERCEL_AI_MODELOS_RESPALDO`).

### Verificación de vigencia

Cada artículo citado se contrasta, en paralelo al informe, con el XML oficial de LeyChile/BCN
(`POST /api/vigencia`). La interfaz lo marca como "Vigente · versión DD-MM-AAAA" o
"Derogado", y avisa en el informe si alguna norma usada está derogada.

## ¿Cómo funciona?

1. Escribes una pregunta en lenguaje natural (ej: "¿cuántos días de vacaciones tengo al año?").
2. El servidor busca artículos relevantes en **dos fuentes**, en este orden:
   - **Corpus jurídico completo** (remoto): se consulta en vivo el servidor MCP público de
     [leyes.pisanvs.cl](https://leyes.pisanvs.cl) — un proyecto open source que reconstruyó
     ~333.000 normas chilenas (con historial de versiones) desde la Biblioteca del Congreso
     Nacional. Esta es la fuente que le da a Juris IA Chile cobertura amplia de la legislación real,
     sin que tengamos que cargar cada ley a mano.
   - **Corpus local de ejemplo** (`data/corpus.json`): 11 artículos cargados a mano como
     respaldo, para cuando el servicio remoto no responda, y como ejemplos ya verificados.
3. Esos artículos se le pasan a la IA (Claude o Qwen local, según lo que hayas configurado) como
   contexto, con instrucciones estrictas de responder **solo** con esa información y citar
   siempre la ley y el artículo.
4. La respuesta y los documentos usados se muestran en la página, indicando de cuál de las dos
   fuentes vino cada documento y qué proveedor de IA respondió.

Esto se llama un patrón **RAG** (Retrieval-Augmented Generation): en vez de dejar que la IA
"invente" desde su memoria general, la obligamos a responder solo con documentos reales, y a
citarlos. Es clave en un tema legal, donde inventar un artículo sería un problema serio.

## Analizar tus propios documentos

La pestaña "Analizar mi documento" permite subir un contrato, una demanda, una escritura o una
sentencia (PDF, Word `.docx` o texto) y preguntar sobre él. La app extrae el texto, busca las
normas chilenas aplicables según el contenido del documento, y pide un análisis que cita tanto
las cláusulas del documento como los artículos de ley.

**Por qué esto importa para un abogado:** con Qwen local, el documento se lee y se analiza
íntegramente en tu computador. No viaja a ningún servidor y no se guarda copia en disco — el
archivo se procesa en memoria y se descarta. Para material sujeto a secreto profesional, esa es
una diferencia sustantiva frente a cualquier servicio en la nube.

Si tienes Claude configurado y lo seleccionas, el texto del documento **sí** se envía a
Anthropic. La app te lo advierte en pantalla antes de que subas nada, con un aviso que cambia
de color según el proveedor elegido. Esa advertencia es deliberada: la decisión tiene que
tomarse antes de subir el archivo, no después.

Documentos extensos: un modelo local tiene una ventana de lectura limitada. Cuando el documento
excede el presupuesto (`DOC_PRESUPUESTO_CARACTERES`, 18.000 caracteres por omisión), la app no
lo corta por la mitad: lo divide en secciones, puntúa cada una según su relación con tu
pregunta, y analiza las más pertinentes — conservando siempre el inicio, donde están las partes
y el objeto. La interfaz te avisa cuántas secciones se leyeron de cuántas, para que sepas que
hay partes que no se revisaron.

Un PDF escaneado (una imagen, sin texto seleccionable) no se puede leer; la app lo dice en vez
de devolver un análisis vacío. Haría falta pasarle un OCR primero.

## Consultas de vigencia

El corpus remoto guarda el historial completo de versiones de cada norma, y la app lo expone.
Esto responde las tres preguntas que el texto vigente, por sí solo, no contesta:

```
http://localhost:3000/api/versiones?idNorma=61438
http://localhost:3000/api/modificaciones?idNorma=61438
http://localhost:3000/api/diferencias?idNorma=61438&desde=2011-03-08&hasta=2021-04-13
```

La primera lista cada fecha en que la norma cambió y qué ley causó el cambio. La segunda, qué
normas la modificaron y a cuáles modificó ella. La tercera muestra el diff palabra por palabra
entre dos fechas — que es como se determina qué texto se aplicaba a un hecho ocurrido en el
pasado.

El `idNorma` de una norma lo entrega `/api/buscar`.

## Estado de las dos fuentes de legislación

Ambas fueron verificadas contra sus servidores reales en septiembre de 2026, y ambas traen
diagnóstico propio por si algo cambia:

```bash
npm run diagnosticar-mcp        # espejo comunitario con historial de versiones
npm run diagnosticar-leychile   # fuente oficial BCN
```

El código está escrito para degradar sin romperse: si el corpus remoto no responde, la app
sigue funcionando con el corpus local de ejemplos y lo avisa en la interfaz.

## Fuente oficial: LeyChile / BCN

Además del espejo comunitario, la app consulta el servicio oficial de intercambio XML de la
Biblioteca del Congreso Nacional (`fuentes/leyChileOficial.js`). Es la fuente autorizada, sin
registro ni autenticación, y aporta dos cosas que un análisis jurídico serio necesita:

- **Vigencia verificable**: cada artículo trae su fecha de última modificación y su estado de
  derogación, así que la herramienta puede afirmar que un texto está vigente en vez de suponerlo.
- **Versiones históricas**: con una fecha se obtiene el texto tal como regía ese día, que es lo
  que se necesita para analizar hechos del pasado con la norma aplicable entonces.

Puedes consultarla directamente desde la app:

```
http://localhost:3000/api/norma?ley=19496
http://localhost:3000/api/norma?ley=19496&articulo=3
http://localhost:3000/api/norma?idNorma=172986&fecha=2005-01-01
```

**Verificado en vivo** (septiembre de 2026): extrae los 2.796 artículos del Código Civil,
distingue los 68 derogados de los 2.728 vigentes, y entrega correctamente versiones históricas
por fecha. Para volver a comprobarlo cuando haga falta:

```bash
npm run diagnosticar-leychile
```

Para el plan completo de fuentes (jurisprudencia, dictámenes, tramitación, doctrina), qué es
accesible y qué no, y en qué orden conviene integrarlo, ver **[HOJA-DE-RUTA.md](HOJA-DE-RUTA.md)**.

## Sobre la fuente del corpus completo (leyes.pisanvs.cl)

Es importante que sepas exactamente qué estás usando:

- **No es un servicio oficial del Estado.** Es un proyecto comunitario de código abierto
  (`github.com/pisanvs/ley-chile`) que reconstruye la legislación chilena a partir de los datos
  públicos de la BCN. Es impresionante y muy útil, pero no tiene el respaldo institucional de,
  por ejemplo, LeyChile/BCN directamente.
- **Es gratuito, público y de solo lectura** — no requiere autenticación, pero tampoco hay
  garantía de disponibilidad. Si en algún momento ese servicio deja de funcionar o cambia,
  Juris IA Chile debería seguir funcionando igual con el corpus local (aunque mucho más limitado).
- **Licencia:** el código de ese proyecto es AGPLv3. Juris IA Chile **no copia ni incorpora su
  código**, solo lo consume como una API externa (igual que llamarías a cualquier otra API
  pública) — por eso esto no impone condiciones de licencia sobre el código de Juris IA Chile. Si en
  el futuro quieres clonar o modificar el código de ese proyecto directamente (no solo
  consumir su API), ahí sí aplicarían las condiciones de AGPLv3 (básicamente: cualquier
  versión modificada que ofrezcas por red también debe ser de código abierto).
- Dale crédito visible en tu app y tu README a `leyes.pisanvs.cl` / `pisanvs/ley-chile` como
  fuente de datos — es lo correcto y además le da más credibilidad a Juris IA Chile frente a
  abogados que quieran verificar de dónde sale la información.

## Extractos vs. texto completo

Los artículos que vienen del corpus remoto se asumen íntegros (esa es la propuesta de valor de
ese proyecto: texto reconstruido completo, con historial). Los del corpus local, en cambio,
varios están guardados como un *extracto* del párrafo más relevante — cada uno tiene un campo
`"completo": false` y una `"nota"` explicando qué falta. La interfaz muestra etiquetas
("Corpus completo" / "Ejemplo local", "Texto completo" / "Extracto") para que siempre sepas
qué estás leyendo, y Claude también recibe esa distinción para advertirla cuando corresponda.

## Elegir el proveedor de IA: Claude, Qwen local, o ambos

Juris IA Chile puede responder con dos motores de IA distintos. No son excluyentes: puedes
configurar los dos a la vez y elegir cuál usar desde un menú en la propia página.

| | **Claude** (nube) | **Qwen local** (Ollama) |
|---|---|---|
| Costo | De pago (centavos por consulta) | Gratis |
| Precisión citando artículos | Alta | Menor — modelos locales chicos siguen instrucciones estrictas con menos consistencia, y hay más riesgo de que "inventen" un número de artículo |
| Requiere internet | Sí | No (corre en tu computador) |
| Requiere instalar algo | No, solo una clave | Sí: [Ollama](https://ollama.com) + descargar un modelo |

Recomendación: si esto lo va a usar gente además de ti, o si la precisión legal importa mucho,
prioriza Claude. Qwen local es ideal para probar sin gastar, o como respaldo gratuito.

### Opción A: Configurar Claude

1. Ve a **https://console.anthropic.com/** y crea una cuenta (o inicia sesión).
2. Busca la sección **"API Keys"** y crea una nueva clave (cópiala de inmediato, solo se
   muestra una vez).
3. Anthropic normalmente pide cargar algo de crédito (unos pocos dólares alcanzan para miles
   de consultas de prueba) en **"Billing"**.
4. En tu archivo `.env` (ver Paso 3 más abajo), pega la clave en `ANTHROPIC_API_KEY`.

Nunca compartas esa clave ni la subas a GitHub.

### Opción B: Configurar Qwen local (gratis)

1. Instala **Ollama** desde **https://ollama.com** (tiene instalador para Windows, Mac y Linux).
2. Descarga un modelo Qwen. En una terminal:
   ```bash
   ollama pull qwen2.5
   ```
3. Deja Ollama corriendo (normalmente se inicia solo tras instalarlo; si no, ejecuta
   `ollama serve` en una terminal y déjala abierta).
4. En tu archivo `.env`, revisa que `USAR_QWEN=true` y que `OLLAMA_MODEL` coincida exactamente
   con el nombre del modelo que descargaste (`ollama list` te muestra los nombres exactos).
5. No necesitas ninguna clave ni cuenta para esto — corre 100% en tu computador.

Si configuras ambos (Claude y Qwen), en `.env` puedes elegir cuál se usa por defecto con
`PROVEEDOR_IA_PREDETERMINADO`, y la página mostrará un menú para cambiar de uno a otro en
cualquier momento.

## Paso 2: Instala Node.js (si no lo tienes)

Necesitas Node.js 18 o superior (`node --version` para comprobarlo). Descárgalo desde
**https://nodejs.org** (versión "LTS") si no lo tienes.

## Paso 3: Instala y configura el proyecto

Clona este repositorio (o descárgalo) y entra a la carpeta:

```bash
git clone https://github.com/yoyemanct/JURIS-IA-CHILE.git
cd JURIS-IA-CHILE
npm install
cp .env.example .env
```

Abre `.env` y configura el o los proveedores de IA que quieras usar (ver sección de arriba
"Elegir el proveedor de IA").

## Paso 4: Verifica la conexión al corpus completo

```bash
npm run diagnosticar-mcp
```

Lee la sección de arriba ("⚠️ Cosas que debes revisar tú") si algo falla acá.

## Paso 5: Corre el prototipo

```bash
npm start
```

Abre `http://localhost:3000` en tu navegador y prueba preguntas como:

- "¿Cuántos días de vacaciones me corresponden al año?"
- "¿Cuánto es el plazo para avisar que quiero renunciar a mi trabajo?"
- "¿Puedo arrepentirme de una compra que hice por internet?"
- "¿Cuál es el plazo de desahucio si arriendo mes a mes?"
- Preguntas más técnicas de otras áreas del derecho (debería encontrarlas en el corpus
  completo remoto, aunque no estén en los 11 ejemplos locales).

## Acceso directo en el escritorio (Windows)

El archivo `JURIS-IA-CHILE.bat` es un lanzador: enciende el servidor si no esta corriendo,
espera a que responda y abre la app en tu navegador. Si el servidor ya estaba corriendo,
solo abre el navegador (no intenta levantarlo dos veces).

Para crear el acceso directo en el escritorio, pega esto en PowerShell (ajusta la ruta si
tu proyecto esta en otra carpeta):

```powershell
$carpeta = "D:\Proyectos\JURIS-IA-CHILE"
$ws = New-Object -ComObject WScript.Shell
$lnk = $ws.CreateShortcut("$env:USERPROFILE\Desktop\JURIS IA CHILE.lnk")
$lnk.TargetPath = "$carpeta\JURIS-IA-CHILE.bat"
$lnk.WorkingDirectory = $carpeta
$lnk.IconLocation = "$carpeta\public\juris.ico"
$lnk.Description = "Abre Juris IA Chile"
$lnk.WindowStyle = 7
$lnk.Save()
```

El icono (`public/juris.ico`) tambien se usa como favicon de la pagina web.

## Publicarlo para que gente externa lo use

### Antes de abrirlo al público: entiende el costo

Si usas **Claude**, cada pregunta que alguien haga llama a la API y **te la cobran a ti** (a la
API key que pusiste en el servidor). Si el link se comparte y mucha gente lo usa, tu cuenta de
Anthropic va acumulando cobros. Por eso el servidor ya trae protecciones:

> Nota sobre Qwen local y una app pública: **Qwen local no funciona si despliegas la app en un
> servicio como Render**, porque Ollama tendría que correr en el mismo servidor y eso no es
> parte de este proyecto tal como está. Para una app pública, usa Claude. Qwen local es para
> cuando tú (u otras personas en tu misma red/computador) usan la app de forma local.

- **Límite por visitante**: por defecto, 15 preguntas y 60 búsquedas cada 15 minutos por IP.
  Ajustables con `LIMITE_CONSULTAS_IA`, `LIMITE_BUSQUEDAS` y `VENTANA_MINUTOS`.
- **Límite de largo**: las preguntas se cortan a 600 caracteres (`MAX_LARGO_PREGUNTA`), para que
  nadie mande textos gigantes que salen caros.

Además, en la consola de Anthropic (**Billing → Limits / Usage**) configura un **límite de gasto
mensual** y alertas por correo. Esa es tu red de seguridad real: si algo se dispara, corta solo.

### Desplegarlo en Render (la opción más simple)

1. Crea una cuenta en **https://render.com** (puedes entrar con tu cuenta de GitHub).
2. Dale a **"New +" → "Web Service"** y autoriza a Render a ver tus repos de GitHub.
3. Elige el repositorio **`yoyemanct/JURIS-IA-CHILE`**.
4. Configura así:
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: el plan gratuito sirve para empezar (ojo: en el plan gratis el servidor
     se "duerme" tras un rato sin uso y la primera visita después demora ~30 segundos en cargar).
5. En **"Environment Variables"** agrega:
   - `ANTHROPIC_API_KEY` = tu clave real de Anthropic
   - (opcional) `CLAUDE_MODEL` = `claude-sonnet-5`
   - (opcional) `LIMITE_CONSULTAS_IA` = el número de preguntas por visitante que quieras permitir
6. Dale a **"Create Web Service"**. En unos minutos te da una URL pública tipo
   `https://juris-ia-chile.onrender.com` — esa es la que compartes.

Cada vez que hagas `git push` a este repo, Render redespliega solo.

### Antes de compartir el link, revisa esto

- **Aviso legal visible**: la interfaz ya lo trae al pie, pero si la gente va a tomar decisiones
  reales con esto, vale la pena hacerlo más prominente.
- **El corpus remoto es de terceros**: si leyes.pisanvs.cl se cae, tus usuarios verán solo los
  11 ejemplos locales (con el aviso correspondiente en pantalla). Para algo serio conviene, más
  adelante, tener tu propia copia del corpus.
- **Datos de usuarios**: hoy la app no guarda nada de lo que la gente pregunta. Si más adelante
  agregas historial o analítica, ahí sí entras en terreno de datos personales y necesitas una
  política de privacidad.

## Cómo seguir creciendo esto

1. **Revisar y afinar la integración remota** (ver sección de arriba) — es lo primero.
2. **Mejorar cómo se combinan resultados remotos y locales**: hoy es una combinación simple
   (remoto primero, local de respaldo); se puede mejorar el orden/ranking según relevancia.
3. **Historial de conversación**: hoy cada pregunta es independiente; se puede agregar memoria
   para preguntas de seguimiento ("¿y si llevo 3 años trabajando ahí?").
4. **Modo "solo abogados" más técnico**: permitir un modo que muestre historial de versiones y
   modificaciones de una norma (el corpus remoto ya expone `diff_versions` y
   `get_modifications`, que esta primera versión no usa todavía).
5. **Desplegarlo en internet**: servicios como Render, Railway o Fly.io permiten subir un
   proyecto Node.js gratis o muy barato. Solo hay que configurar `ANTHROPIC_API_KEY` (y
   opcionalmente `LEYCHILE_MCP_URL`) como variables de entorno ahí.

## Estructura del proyecto

```
JURIS-IA-CHILE/
├── server.js            # Backend Express: sirve la página y las rutas de la API
├── proveedorIA.js        # Elige y llama al proveedor de IA (Claude o Qwen local vía Ollama)
├── fuentes/
│   ├── leyChileOficial.js # Conector a la fuente oficial BCN/LeyChile (vigencia + versiones)
│   └── documentos.js     # Lee documentos del usuario (PDF/Word/texto) y selecciona fragmentos
├── search.js            # Motor de búsqueda simple por palabras clave (corpus local)
├── mcpLeyChile.js        # Cliente MCP hacia el corpus jurídico completo remoto
├── normalizadorMcp.js    # Interpreta las respuestas del servidor remoto de forma flexible
├── busquedaHibrida.js    # Combina resultados remotos + locales, con fallback si falla el remoto
├── scripts/
│   ├── probar-mcp.js    # Diagnóstico del espejo comunitario (corre esto primero)
│   └── probar-leychile.js # Diagnóstico de la fuente oficial BCN
├── HOJA-DE-RUTA.md       # Plan de fuentes y fases del proyecto
├── data/
│   └── corpus.json      # Los 11 artículos de ejemplo (respaldo local)
├── public/
│   ├── index.html       # Interfaz web (buscador + chat), un solo archivo HTML/CSS/JS
│   └── juris.ico        # Icono de la app (acceso directo + favicon)
├── JURIS-IA-CHILE.bat    # Lanzador para Windows (enciende el servidor y abre el navegador)
├── .env.example          # Plantilla de configuración (copiar a .env)
└── package.json
```

## Aviso legal

Este prototipo entrega información general con fines de demostración y no constituye asesoría
legal. Aunque busca en un corpus jurídico amplio, puede no encontrar la norma correcta, puede
estar desactualizado, y el corpus de respaldo local es muy limitado. Para decisiones legales
reales, consulta a un abogado o abogada, o fuentes oficiales como bcn.cl/leychile.
