# Mantenimiento del catálogo

1. Seleccionar una página oficial y distinguir legislación, interpretación administrativa y orientación explicativa.
2. Leer el contenido y su contexto temporal. Revisar la norma consolidada en BCN/LeyChile cuando corresponda. Fecha de consulta no equivale a vigencia.
3. Crear un ID estable en `src/data/sources.js` con título, institución, tipo, referencia, URL HTTPS, área, tema, palabras clave y fecha de revisión.
4. Escribir una paráfrasis breve que conserve condiciones y excepciones. No presentarla como cita textual ni afirmar exhaustividad.
5. Añadir términos al recuperador y pruebas positivas, negativas y fuera de alcance. Coincidencias genéricas no deben habilitar respuestas de IA.
6. Revisar enlaces, contenido y resultados antes de publicar. Documentar cambios en el PR. Que una URL exista no demuestra respaldo jurídico.

El catálogo incluye cuatro orientaciones DT/SERNAC, tres resúmenes legislativos BCN y tres fichas de jurisprudencia. No hay crawler, comprobación automática de vigencia, corpus exhaustivo de sentencias ni texto legislativo consolidado integrado. Los IDs se validan automáticamente; la correspondencia semántica entre afirmación y fuente requiere revisión humana.

## Fichas jurisprudenciales

Definir `kind: jurisprudencia`, tribunal (`court`), rol (`docket`), fecha del fallo (`decisionDate`, nula si no se comprobó), fecha de reseña (`publishedAt`, cuando corresponde), tipo documental, localizador y límites de aplicación. Nunca convertir fecha de noticia en fecha de fallo. Una reseña se etiqueta como tal; el enlace no se anuncia como sentencia íntegra. No usar nombres de litigantes si no son necesarios para explicar la regla.

Fuentes incorporadas el 21-09-2026:

- Civil: [reseña oficial CS rol 15.355-2025](https://www.pjud.cl/prensa-y-comunicaciones/noticias-del-poder-judicial/147144), publicada 27-07-2026; resumen contrastado con el índice público. Página con control de acceso automatizado; fallo íntegro y fecha de sentencia no comprobados.
- Penal: [reseña oficial CS rol 55.308-2025](https://www.pjud.cl/prensa-y-comunicaciones/noticias-del-poder-judicial/147153), misma fecha y límites de acceso.
- Constitucional: [STC rol 17.010-25 CPR](https://www2.tribunalconstitucional.cl/wp-content/uploads/2025/10/STC_Rol_17_010-25-CPR_.pdf), sentencia de 16-10-2025; considerandos 15–18 y parte resolutiva (pp. 10–12). Conserva referencia a las prevenciones y al proyecto controlado.

La clasificación en un área no habilita respuestas sobre cualquier materia de esa área. Añadir temas requiere evidencia concreta y pruebas de abstención.
