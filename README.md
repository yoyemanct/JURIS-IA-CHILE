# Juris IA Chile

> Open-source AI toolkit for searching, structuring and citing Chilean legislation and legal sources.

**Juris IA Chile**: un buscador + asistente de IA (usando Claude, de Anthropic) que responde preguntas
sobre legislación chilena citando siempre la ley y el artículo exacto — pensado tanto para
abogados como para personas sin formación legal.

Fuente de datos del corpus jurídico completo: [leyes.pisanvs.cl](https://leyes.pisanvs.cl)
(proyecto [`pisanvs/ley-chile`](https://github.com/pisanvs/ley-chile), AGPLv3), que reconstruye
la legislación chilena desde la Biblioteca del Congreso Nacional. Ver la sección más abajo para
detalles de licencia y de qué tan confiable es esta fuente.

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
3. Esos artículos se le pasan a Claude como contexto, con instrucciones estrictas de responder
   **solo** con esa información y citar siempre la ley y el artículo.
4. La respuesta de Claude y los documentos usados se muestran en la página, indicando de cuál
   de las dos fuentes vino cada uno.

Esto se llama un patrón **RAG** (Retrieval-Augmented Generation): en vez de dejar que la IA
"invente" desde su memoria general, la obligamos a responder solo con documentos reales, y a
citarlos. Es clave en un tema legal, donde inventar un artículo sería un problema serio.

## ⚠️ Cosas que debes revisar tú (no se probaron en vivo)

Este código se escribió en un entorno con la red restringida a una lista blanca de dominios,
que **no incluía leyes.pisanvs.cl**. Así que la integración con el corpus completo (todo lo que
está en `mcpLeyChile.js` y `busquedaHibrida.js`) se hizo siguiendo la documentación pública de
ese proyecto (`https://leyes.pisanvs.cl/llms.txt`), pero **nunca se ejecutó contra el servidor
real**. Es la parte del proyecto con más chance de necesitar un ajuste menor.

Antes de confiar en esto, corre:

```bash
npm run diagnosticar-mcp
```

Este script se conecta al servidor, imprime la lista real de herramientas disponibles y sus
parámetros exactos, y hace una búsqueda de prueba. Si algo falla, el mensaje de error te dirá
si es un problema de conexión o si hay que ajustar un nombre de parámetro en `mcpLeyChile.js`
(el código está escrito para no romper la app aunque esto falle: si el corpus remoto no
responde, la app sigue funcionando solo con el corpus local, y te lo avisa en la interfaz).

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

## Paso 1: Consigue tu clave (API key) de Anthropic

1. Ve a **https://console.anthropic.com/** y crea una cuenta (o inicia sesión).
2. Busca la sección **"API Keys"** y crea una nueva clave (cópiala de inmediato, solo se
   muestra una vez).
3. Anthropic normalmente pide cargar algo de crédito (unos pocos dólares alcanzan para miles
   de consultas de prueba) en **"Billing"**.

Nunca compartas esa clave ni la subas a GitHub.

## Paso 2: Instala Node.js (si no lo tienes)

Necesitas Node.js 18 o superior (`node --version` para comprobarlo). Descárgalo desde
**https://nodejs.org** (versión "LTS") si no lo tienes.

## Paso 3: Instala y configura el proyecto

Clona este repositorio (o descárgalo) y entra a la carpeta. *(El repo en GitHub todavía se
llama `Lexchile` — si ya lo renombraste desde Settings, usa la URL nueva en vez de esta):*

```bash
git clone https://github.com/yoyemanct/Lexchile.git
cd Lexchile
npm install
cp .env.example .env
```

Abre `.env` y reemplaza `ANTHROPIC_API_KEY=sk-ant-tu-clave-aqui` con tu clave real.

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

## Publicarlo para que gente externa lo use

### Antes de abrirlo al público: entiende el costo

Cada pregunta que alguien haga llama a la API de Claude y **te la cobran a ti** (a la API key
que pusiste en el servidor). Si el link se comparte y mucha gente lo usa, tu cuenta de Anthropic
va acumulando cobros. Por eso el servidor ya trae protecciones:

- **Límite por visitante**: por defecto, 15 preguntas y 60 búsquedas cada 15 minutos por IP.
  Ajustables con `LIMITE_CONSULTAS_IA`, `LIMITE_BUSQUEDAS` y `VENTANA_MINUTOS`.
- **Límite de largo**: las preguntas se cortan a 600 caracteres (`MAX_LARGO_PREGUNTA`), para que
  nadie mande textos gigantes que salen caros.

Además, en la consola de Anthropic (**Billing → Limits / Usage**) configura un **límite de gasto
mensual** y alertas por correo. Esa es tu red de seguridad real: si algo se dispara, corta solo.

### Desplegarlo en Render (la opción más simple)

1. Crea una cuenta en **https://render.com** (puedes entrar con tu cuenta de GitHub).
2. Dale a **"New +" → "Web Service"** y autoriza a Render a ver tus repos de GitHub.
3. Elige el repositorio **`yoyemanct/Lexchile`**.
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
Lexchile/
├── server.js            # Backend Express: sirve la página y las rutas de la API
├── search.js            # Motor de búsqueda simple por palabras clave (corpus local)
├── mcpLeyChile.js        # Cliente MCP hacia el corpus jurídico completo remoto
├── normalizadorMcp.js    # Interpreta las respuestas del servidor remoto de forma flexible
├── busquedaHibrida.js    # Combina resultados remotos + locales, con fallback si falla el remoto
├── scripts/
│   └── probar-mcp.js    # Diagnóstico: corre esto primero (ver más arriba)
├── data/
│   └── corpus.json      # Los 11 artículos de ejemplo (respaldo local)
├── public/
│   └── index.html       # Interfaz web (buscador + chat), un solo archivo HTML/CSS/JS
├── .env.example          # Plantilla de configuración (copiar a .env)
└── package.json
```

## Aviso legal

Este prototipo entrega información general con fines de demostración y no constituye asesoría
legal. Aunque busca en un corpus jurídico amplio, puede no encontrar la norma correcta, puede
estar desactualizado, y el corpus de respaldo local es muy limitado. Para decisiones legales
reales, consulta a un abogado o abogada, o fuentes oficiales como bcn.cl/leychile.
