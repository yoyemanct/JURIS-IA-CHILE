# Hoja de ruta: de prototipo a herramienta de investigación jurídica

Este documento existe porque el objetivo del proyecto creció: pasó de "un buscador con
chat" a "una herramienta completa de derecho chileno, útil para asesorar, investigar,
estudiar y enseñar". Ese objetivo es alcanzable en buena parte, pero no entero, y no de
una sola vez. Acá está el mapa honesto de qué es posible, qué no, y en qué orden.

Última actualización: septiembre de 2026.

## Lo que hay hoy

La app busca artículos legales y le pide a una IA (Claude, o Qwen corriendo local vía
Ollama) que redacte un informe jurídico estructurado citando solo lo que encontró. Las
fuentes actuales son un espejo comunitario de la legislación (leyes.pisanvs.cl), un
corpus local de 11 artículos cargados a mano, y desde ahora el servicio oficial de
LeyChile/BCN.

## El mapa de fuentes

Lo que sigue salió de una investigación hecha en septiembre de 2026 contra cada servicio.
Se distingue lo verificado de lo que es solo referencia de terceros, porque esa diferencia
determina cuánto trabajo cuesta cada integración.

### Legislación — resuelto

El servicio oficial de intercambio XML de la BCN funciona, sin autenticación ni registro:

```
https://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=207436
https://www.leychile.cl/Consulta/obtxml?opt=7&idLey=19496
https://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=172986&idVersion=2005-01-01
```

Tres cosas valiosas de esta fuente. Primero, es oficial: es la misma BCN, no un espejo.
Segundo, `idLey` permite pedir cualquier ley por su número, sin tener que conocer el
identificador interno. Tercero, y lo más importante para uso profesional, `idVersion`
devuelve el texto tal como estaba vigente a una fecha dada — que es exactamente lo que se
necesita para analizar hechos del pasado con la norma que regía entonces.

Además, cada artículo trae su propia fecha de última modificación y su estado de
derogación, de modo que la herramienta puede afirmar la vigencia en vez de suponerla.

Advertencia real: la documentación oficial está congelada en 2009. El servicio funciona,
pero conviene tratarlo como una API de hecho, con caché y con tolerancia a fallas.

Lo que este XML **no** trae: qué ley modificó cada artículo. Sabe *cuándo* cambió, no *por
qué*. Esa cadena hay que reconstruirla comparando versiones o desde otra fuente.

### Tramitación e historia de la ley — accesible

La Cámara de Diputados expone un servicio que, pese a ser SOAP, responde a peticiones GET
simples:

```
https://opendata.camara.cl/camaradiputados/WServices/WSLegislativo.asmx/retornarProyectoLey?prmNumeroBoletin=8575-05
```

El Senado expone XML plano:

```
https://tramitacion.senado.cl/wspublico/tramitacion.php?boletin=8575
```

Ojo con un detalle que cuesta una tarde si no se sabe: la Cámara exige el boletín completo
con guion (`8575-05`) y el Senado lo quiere sin sufijo (`8575`).

La Historia de la Ley (la discusión legislativa completa) está en PDF, pero su URL **no es
derivable** del número de ley: vive en un repositorio con identificadores opacos. Hay que
obtener el enlace desde las relaciones de la norma.

### Jurisprudencia judicial — el problema difícil

El buscador del Poder Judicial está detrás de un muro anti-bot: las peticiones
automatizadas reciben un captcha. Existe un endpoint interno documentado por terceros, que
requiere manejar token CSRF y cookie de sesión, pero no pudo confirmarse.

Hay dos proyectos chilenos de código abierto trabajando en esto:
[Responsa](https://github.com/djlarrix/Responsa) (Node.js, servidor MCP — mismo stack que
esta app) y [open-legal-chile](https://github.com/elpabloultron/open-legal-chile) (Python).
Este último, revelador: su conector al Poder Judicial no consulta en vivo, sino una base
SQLite local. Señal de que nadie ha resuelto el acceso en vivo de forma estable.

Conclusión práctica: la jurisprudencia judicial es la pieza más valiosa y la más cara de
conseguir. Antes de intentarla hay que leer los términos de uso del sitio desde Chile.

### Dictámenes — desigual

La Contraloría tendría una API JSON real (`/apibusca/search/dictamenes`) que devuelve el
texto íntegro del dictamen. Es el premio mayor de esta categoría: más de 50.000 dictámenes
consultables. No pudo verificarse, y su robots.txt restringe rutas, así que hay que
revisarlo con cuidado antes de construir.

El SII sí quedó verificado, con URLs estables y predecibles, sin captcha ni login:

```
https://www.sii.cl/normativa_legislacion/circulares/2025/circu38.pdf
https://www.sii.cl/normativa_legislacion/jurisprudencia_administrativa/{cuerpo}/{año}/ja{n}.htm
```

La Dirección del Trabajo es la más desordenada: sus dictámenes viven bajo identificadores
internos del gestor de contenidos, no derivables del número de ORD., y su buscador oficial
estaría caído.

### Doctrina — acá hay que ser honestos

**Los manuales de derecho chilenos no se pueden incorporar.** Alessandri, Somarriva, Barros
Bourie, Corral, Ducci: son libros con derecho de autor vigente. No es una limitación
técnica que se pueda sortear con ingenio; es que copiarlos a una base de datos sería una
infracción, y además haría la herramienta imposible de defender frente a un colega.

Lo que sí existe, y es legítimo, es la revista jurídica de acceso abierto. Están
verificadas 20 revistas chilenas de derecho en DOAJ, todas con licencia Creative Commons y
ninguna con cargo por publicación, entre ellas *Ius et Praxis*, *Revista de Derecho* de la
UCN y de la UdeC, y la *Revista Chilena de Derecho* de la PUC. Los repositorios
universitarios exponen OAI-PMH: el de la Universidad de Chile tiene un conjunto dedicado a
la Facultad de Derecho, con tesis y memorias a texto completo.

Hay que codificar una distinción que es legal y también de diseño: **leer, citar y enlazar
siempre es legítimo; copiar el texto íntegro a una base propia solo lo es con licencias CC
BY y CC BY-SA.** Para el resto se indexa metadato y resumen, y se enlaza a la fuente.

La consecuencia honesta: una capa doctrinal abierta da buena cobertura en derecho público,
constitucional, derechos humanos, ambiental y penal, y deja casi descubierto el derecho
civil, contratos, responsabilidad, familia y sucesiones — justo donde los manuales son
insustituibles y donde más se trabaja a diario. Esta capa no reemplaza al manual. Sirve
para encontrar en segundos el artículo de revista que respalda o actualiza lo que el
abogado ya sabe.

## Orden propuesto

**Primero, verificar lo que ya está escrito.** El conector a LeyChile y el conector al
espejo comunitario se escribieron sin poder probarse contra los servicios reales. Nada
nuevo debería construirse encima de cimientos sin verificar. Se prueban con
`npm run diagnosticar-leychile` y `npm run diagnosticar-mcp`.

**Segundo, la capa de vigencia.** Que cada artículo citado en un informe venga con su fecha
de versión y su estado de derogación, verificados contra la fuente oficial. Esto es lo que
más separa una herramienta seria de un chat que suena convincente: poder decir "este es el
texto vigente al día de hoy" y tener con qué respaldarlo.

**Tercero, mejorar la búsqueda.** Hoy la recuperación es una sola pasada de palabras clave.
Un equipo jurídico no busca así: explora, encuentra una norma, sigue sus referencias,
vuelve a buscar. Una recuperación iterativa —varias búsquedas encadenadas, siguiendo lo que
va apareciendo— mejora la calidad más que cualquier ajuste del modelo.

**Cuarto, tramitación e historia de la ley.** Bien delimitado y con fuentes verificadas. Da
acceso a la discusión legislativa, que es donde se encuentra la intención del legislador.

**Quinto, doctrina abierta**, con la distinción de licencias del punto anterior.

**Sexto, dictámenes**, empezando por el SII, siguiendo por Contraloría si sus términos lo
permiten.

**Último, jurisprudencia judicial.** Lo más valioso y lo más difícil. Conviene revisar
antes si conviene colaborar con Responsa o con open-legal-chile en vez de resolverlo solo.

## Sobre "que siga aprendiendo con el tiempo"

Conviene precisar qué significa esto, porque hay dos cosas distintas y solo una es
realista.

Lo que **no** ocurre: el modelo de lenguaje no aprende de su uso. Ni Qwen ni Claude cambian
por responder preguntas. Reentrenar un modelo con material jurídico es posible, pero es
caro, y para citar con exactitud rinde menos que darle buenas fuentes.

Lo que **sí** puede crecer, y es donde está el valor real:

El corpus se amplía cada vez que se agrega una fuente o se cachea una norma consultada. Ese
material queda disponible para todas las consultas siguientes.

Las correcciones se acumulan. Cuando la herramienta se equivoca y el abogado corrige, esa
corrección se puede guardar y recuperarse cuando vuelva a aparecer un caso parecido. Es
memoria del sistema, no del modelo, y funciona.

Los informes verificados se vuelven base de conocimiento. Un análisis que el abogado revisó
y aprobó vale más que uno recién generado, y puede citarse como antecedente propio.

Las búsquedas frecuentes revelan qué áreas importan, y eso orienta qué cuerpos legales
conviene cargar completos.

Esa es la forma honesta de "aprender": el sistema acumula conocimiento verificado, en vez
de simular que el modelo se vuelve más sabio.

## Lo que esta herramienta nunca debería hacer

No debe presentarse como sustituto de un abogado, ni afirmar vigencia que no verificó, ni
citar un artículo que no tiene a la vista, ni ocultar qué no pudo revisar. La sección "Qué
debe verificarse antes de actuar" de cada informe no es un descargo de responsabilidad
decorativo: es lo que permite que un profesional confíe en el resto del análisis.
