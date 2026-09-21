# Mantenimiento del catálogo

1. Seleccionar una página oficial y distinguir legislación, interpretación administrativa y orientación explicativa.
2. Leer el contenido y su contexto temporal. Revisar la norma consolidada en BCN/LeyChile cuando corresponda. Fecha de consulta no equivale a vigencia.
3. Crear un ID estable en `src/data/sources.js` con título, institución, tipo, referencia, URL HTTPS, área, tema, palabras clave y fecha de revisión.
4. Escribir una paráfrasis breve que conserve condiciones y excepciones. No presentarla como cita textual ni afirmar exhaustividad.
5. Añadir términos al recuperador y pruebas positivas, negativas y fuera de alcance. Coincidencias genéricas no deben habilitar respuestas de IA.
6. Revisar enlaces, contenido y resultados antes de publicar. Documentar cambios en el PR. Que una URL exista no demuestra respaldo jurídico.

La versión inicial incluye cuatro páginas de DT/SERNAC. No hay crawler, comprobación automática de vigencia, corpus de sentencias ni legislación consolidada integrada. Los IDs se validan automáticamente; la correspondencia semántica entre afirmación y fuente requiere revisión humana.
