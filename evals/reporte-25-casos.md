# Evaluación de respuestas — Derecho Chile IA

Fecha: 2026-09-25T05:35:33.049Z. Fuentes reales (LeyChile y buscadores oficiales). Modelo: anthropic/claude-sonnet-4.5.

## Resumen

| Indicador | Antes (main) | Después |
|---|---|---|
| Casos con todos los artículos clave en el material | 52 % | 100 % |
| Casos sin normas de una materia prohibida | 68 % | 100 % |
| Respuestas que citan todos los artículos clave | 68 % | 96 % |
| Respuestas sin frases prohibidas (lo que escribió el modelo) | 8 % | 40 % |
| Respuestas sin frases prohibidas (lo que ve el usuario) | 8 % | 100 % |
| Respuestas sin saludo ni preámbulo | 96 % | 100 % |
| Respuestas con todas las secciones | 0 % | 96 % |
| Respuestas completas (no cortadas) | 4 % | 100 % |
| Roles o dictámenes inventados (total) | 1 | 0 |
| Largo promedio (palabras) | 2317 | 3540 |

## Detalle por caso

| Caso | Artículos clave en el material (antes → después) | Normas de materia prohibida (antes → después) | Citados | Frases prohibidas | Secciones faltantes | Cortada |
|---|---|---|---|---|---|---|
| c01-vacaciones | 1/1 → 1/1 | 0 → 0 | 1 | 1 (busqueda) | — | no |
| c02-necesidades | 2/2 → 2/2 | 0 → 0 | 2 | 0 | — | no |
| c03-garantia | 0/1 → 1/1 | 1 → 0 | 0 | 1 (busqueda) | — | no |
| c04-defectuoso | 0/1 → 1/1 | 0 → 0 | 1 | 1 (busqueda) | — | no |
| c05-alimentos | 0/1 → 1/1 | 0 → 0 | 1 | 0 | — | no |
| c06-prescripcion | 1/1 → 1/1 | 2 → 0 | 1 | 0 | — | no |
| c07-posesion | 1/1 → 1/1 | 1 → 0 | 1 | 0 | — | no |
| c08-me-deben | 1/1 → 1/1 | 1 → 0 | 1 | 0 | — | no |
| c09-echar-arrendatario | 1/1 → 1/1 | 0 → 0 | 1 | 1 (busqueda) | — | no |
| c10-divorcio-argentina | 0/0 → 0/0 | 0 → 0 | 0 | 0 | — | no |
| c11-legitima-defensa | 1/1 → 1/1 | 0 → 0 | 1 | 0 | — | no |
| c12-herencia | 1/1 → 1/1 | 2 → 0 | 1 | 0 | — | no |
| g01-pagare | 2/2 → 2/2 | 1 → 0 | 2 | 1 (busqueda) | — | no |
| g02-despido | 1/2 → 2/2 | 0 → 0 | 2 | 2 (material_apoyo, busqueda) | — | no |
| g03-monitorio | 0/1 → 1/1 | 0 → 0 | 1 | 1 (busqueda) | — | no |
| g04-alimentos | 0/1 → 1/1 | 0 → 0 | 1 | 1 (busqueda) | — | no |
| g05-desalojo | 0/1 → 1/1 | 1 → 0 | 1 | 2 (material_apoyo, busqueda) | — | no |
| g06-proteccion | 1/1 → 1/1 | 0 → 0 | 1 | 1 (busqueda) | — | no |
| g07-posesion-efectiva | 0/1 → 1/1 | 0 → 0 | 1 | 0 | Antes de demandar | no |
| g08-jpl-consumidor | 0/1 → 1/1 | 0 → 0 | 1 | 1 (busqueda) | — | no |
| g09-tutela | 1/1 → 1/1 | 0 → 0 | 1 | 1 (busqueda) | — | no |
| g10-estafa | 1/1 → 1/1 | 0 → 0 | 1 | 1 (material_apoyo) | — | no |
| d01-contrato-trabajo | 0/2 → 2/2 | 0 → 0 | 2 | 0 | — | no |
| d02-contrato-arriendo | 0/1 → 1/1 | 5 → 0 | 1 | 1 (busqueda) | — | no |
| d03-finiquito | 1/2 → 2/2 | 0 → 0 | 2 | 1 (busqueda) | — | no |

## Respuestas completas (versión nueva)

### c01-vacaciones — consulta: ¿Cuántos días de vacaciones me corresponden al año?

<details><summary>Material enviado al modelo (10 normas, 2 fallos o dictámenes, 0 artículos de doctrina; 2 normas descartadas por materia)</summary>

- Código del Trabajo, Artículo 67
- Código del Trabajo, Artículo 68
- Código del Trabajo, Artículo 70
- Código del Trabajo, Artículo 73
- Código del Trabajo, Artículo 69
- Código del Trabajo, Artículo 71
- Código del Trabajo, Artículo 72
- Código del Trabajo, Artículo 74
- Código del Trabajo, Artículo 75
- Ley 11.986, fija escala de sueldos para los miembros de los tribunales ordinarios de justicia y especiales del trabajo y de menores y sus respectivos oficiales subalternos, Artículo 19
- Jurisprudencia: Dirección del Trabajo, Dictamen ORD. Nº706/2, 2011-02-07
- Jurisprudencia: Dirección del Trabajo, Dictamen ORD. Nº3963/75, 2006-09-05
- ~~CIR Bancos 2409, recopilacion actualizada de normas, Artículo 10~~ (sin relación léxica (0 términos en común))
- ~~CIR Bancos 2409, recopilacion actualizada de normas, Artículo 102~~ (sin relación léxica (0 términos en común))

Versión anterior (main):
- Código del Trabajo, Artículo 163
- Código del Trabajo, Artículo 67
- Ley N° 19.496 sobre Protección de los Derechos de los Consumidores, Artículo 3 bis
- Ley N° 18.101 sobre Arrendamiento de Predios Urbanos, Artículo 3
- Código del Trabajo, Artículo 159
- Código del Trabajo, (artículo no identificado)

</details>

#### Respuesta corta

Si tienes más de un año de servicio continuo, te corresponden **15 días hábiles** de feriado anual con remuneración íntegra, según el artículo 67 del Código del Trabajo. Si trabajas en las regiones de Magallanes, Aysén o la Provincia de Palena, son **20 días hábiles**. Con 10 años de trabajo acumulados, se agrega un día adicional por cada tres años nuevos.

#### Qué dice la ley

El **Código del Trabajo, artículo 67** establece:

"Los trabajadores con más de un año de servicio tendrán derecho a un feriado anual de quince días hábiles, con remuneración íntegra que se otorgará de acuerdo con las formalidades que establezca el reglamento."

https://www.bcn.cl/leychile/navegar?idNorma=207436&idParte=8511908

Esto significa que cumplido un año trabajando para el mismo empleador, adquieres el derecho a 15 días hábiles de vacaciones pagadas. El **año de servicio** se cuenta desde la fecha de ingreso o desde que completaste el último período anual.

Para trabajadores de las regiones australes, el mismo artículo 67 dispone:

"Los trabajadores que presten servicios en la Duodécima Región de Magallanes y de la Antártica Chilena, en la Undécima Región de Aysén del General Carlos Ibáñez del Campo, y en la Provincia de Palena, tendrán derecho a un feriado anual de veinte días hábiles."

El **Código del Trabajo, artículo 68** agrega:

"Todo trabajador, con diez años de trabajo, para uno o más empleadores, continuos o no, tendrá derecho a un día adicional de feriado por cada tres nuevos años trabajados, y este exceso será susceptible de negociación individual o colectiva. Con todo, sólo podrán hacerse valer hasta diez años de trabajo prestados a empleadores anteriores."

https://www.bcn.cl/leychile/navegar?idNorma=207436&idParte=8511909

Esto permite acumular antigüedad de distintos empleadores (hasta 10 años máximo de empleadores anteriores) para calcular los días adicionales.

El **Código del Trabajo, artículo 69** precisa:

"Para los efectos del feriado, el día sábado se considerará siempre inhábil."

https://www.bcn.cl/leychile/navegar?idNorma=207436&idParte=8511910

Por tanto, los días hábiles son de lunes a viernes; los sábados, domingos y festivos no se cuentan dentro de los 15 o 20 días de feriado.

#### Explicación

##### Requisito básico: un año de servicio

Para tener derecho al feriado anual completo (15 o 20 días hábiles), debes haber trabajado **más de un año** para el mismo empleador de forma continua. Si tu contrato termina antes de cumplir el año, no tienes derecho al feriado completo, pero sí a una **indemnización proporcional** por el tiempo trabajado (artículo 73, inciso tercero del Código del Trabajo).

##### Días hábiles: lunes a viernes

Los 15 o 20 días de feriado son **días hábiles**, es decir, de lunes a viernes. El sábado siempre se considera inhábil, aunque tu jornada laboral incluya ese día. Los domingos y festivos tampoco cuentan. Ejemplo: si tomas 15 días hábiles corridos, en realidad estarás ausente aproximadamente tres semanas calendario (15 días hábiles + los sábados, domingos y festivos que caigan en ese período).

##### Días adicionales por antigüedad (artículo 68)

A partir de **10 años de trabajo** acumulados (para uno o más empleadores), tienes derecho a **un día hábil adicional por cada tres años nuevos** trabajados. Estos días adicionales se suman a los 15 (o 20) básicos.

**Cómo se cuentan los 10 años:**
- Puedes sumar años trabajados con empleadores anteriores, pero **solo hasta 10 años** de empleadores previos.
- Los años con el empleador actual se suman completos.
- Ejemplo: si trabajaste 8 años con un empleador anterior y llevas 5 años con el actual, sumas 13 años totales. Al cumplir 13 años, tienes derecho a un día adicional (10 años base + 3 años nuevos = 1 día extra). A los 16 años totales, tendrías 2 días adicionales, y así sucesivamente.

**Negociación del exceso:**
El artículo 68 señala que "este exceso será susceptible de negociación individual o colectiva". Esto significa que los días adicionales por antigüedad pueden ser objeto de acuerdo con el empleador (por ejemplo, para compensarlos en dinero o acumularlos), a diferencia de los 15 días básicos que no pueden compensarse en dinero mientras la relación laboral esté vigente.

##### Regiones australes: 20 días hábiles

Si prestas servicios en la **Región de Magallanes y de la Antártica Chilena**, en la **Región de Aysén del General Carlos Ibáñez del Campo** o en la **Provincia de Palena**, tu feriado anual es de **20 días hábiles** desde el primer año, sin necesidad de antigüedad adicional.

##### Fraccionamiento y acumulación (artículo 70)

El feriado debe ser **continuo**. Sin embargo:
- El **exceso sobre 10 días hábiles** puede fraccionarse de común acuerdo. Ejemplo: si tienes 15 días, puedes tomar 10 días corridos y los 5 restantes en otro momento, si tú y el empleador lo acuerdan.
- Puedes **acumular hasta dos períodos consecutivos** de feriado, pero el empleador debe otorgarte al menos el primero antes de que cumplas el año que da derecho al tercero.

https://www.bcn.cl/leychile/navegar?idNorma=207436&idParte=8511911

##### Época de otorgamiento

El feriado se concede **de preferencia en primavera o verano**, considerando las necesidades del servicio. Si tienes el cuidado personal de un niño o niña menor de 14 años, o de un adolescente menor de 18 años con discapacidad o dependencia severa o moderada, tienes **preferencia** para que tu feriado coincida con las vacaciones escolares, siempre que lo solicites con al menos 30 días de anticipación y acompañes los documentos que acrediten la filiación o el cuidado personal (certificado de nacimiento, resolución judicial, certificado del Registro Nacional de la Discapacidad o documento del Ministerio de Desarrollo Social y Familia).

##### Remuneración durante el feriado (artículo 71)

Durante el feriado, recibes **remuneración íntegra**:
- Si tienes **sueldo fijo**, se paga ese sueldo.
- Si tienes **remuneraciones variables** (comisiones, tratos, primas), se paga el **promedio de los últimos tres meses** trabajados.
- Si tienes **sueldo más variables**, se paga el sueldo más el promedio de las variables de los últimos tres meses.
- Se incluyen también otros beneficios que corresponda pagar durante el feriado (por ejemplo, asignación de colación si se paga siempre, según el artículo 71, inciso sexto).

https://www.bcn.cl/leychile/navegar?idNorma=207436&idParte=8511912

##### Prohibición de compensar en dinero (artículo 73)

El feriado **no puede compensarse en dinero** mientras la relación laboral esté vigente. Solo se paga en dinero si:
- **Termina el contrato** antes de que hayas usado el feriado que ya adquiriste (se compensa el tiempo no usado).
- **Termina el contrato antes de cumplir el año**: recibes una indemnización proporcional al tiempo trabajado.

https://www.bcn.cl/leychile/navegar?idNorma=207436&idParte=8511914

##### Casos especiales: empresas que cierran por temporada (artículo 74)

Si trabajas en una empresa que **cierra durante ciertos períodos del año** (por ejemplo, establecimientos educacionales en verano), y ese cierre dura al menos lo que te correspondería de feriado, y durante ese tiempo recibes tu remuneración normal, **no tienes derecho a feriado adicional** (artículo 74). Esto aplica, por ejemplo, a personal administrativo de colegios que cierra en enero-febrero y recibe sueldo completo en ese período.

https://www.bcn.cl/leychile/navegar?idNorma=207436&idParte=8511915

#### Ejemplo o cálculo

**Caso 1: Trabajador con 1 año y 3 meses de servicio, región Metropolitana, sueldo fijo de $600.000**

- Antigüedad: 1 año y 3 meses → derecho a 15 días hábiles de feriado anual.
- Días hábiles: lunes a viernes. Si toma los 15 días corridos, estará ausente aproximadamente 3 semanas calendario (15 días hábiles + 6 sábados y domingos, si no hay festivos en el medio).
- Remuneración durante el feriado: $600.000 (sueldo fijo).
- No puede fraccionar los 15 días sin acuerdo del empleador (solo el exceso sobre 10 días es fraccionable de común acuerdo).

**Caso 2: Trabajadora con 13 años de trabajo acumulados (5 años con empleador anterior, 8 años con el actual), región de Aysén, remuneración variable (promedio últimos 3 meses: $800.000)**

- Región de Aysén → 20 días hábiles base.
- Antigüedad: 13 años totales (5 + 8). Como tiene más de 10 años, tiene derecho a días adicionales: 10 años base + 3 años nuevos = 1 día adicional. Total: 20 + 1 = **21 días hábiles** de feriado anual.
- Remuneración durante el feriado: promedio de los últimos 3 meses = $800.000.
- Puede acumular hasta dos períodos (42 días hábiles), pero el empleador debe otorgarle al menos el primero (21 días) antes de que cumpla el año que da derecho al tercero.

**Caso 3: Trabajador con 16 años de trabajo (10 años con empleador anterior, 6 años con el actual), región Metropolitana**

- Antigüedad computable: solo se pueden hacer valer hasta 10 años de empleadores anteriores. Total: 10 + 6 = 16 años.
- Días adicionales: 10 años base + 6 años nuevos = 2 días adicionales (uno a los 13 años, otro a los 16 años). Total: 15 + 2 = **17 días hábiles** de feriado anual.

**Caso 4: Contrato termina a los 8 meses de servicio, sueldo $500.000**

- No cumplió el año → no tiene derecho al feriado completo.
- Indemnización proporcional: (15 días / 12 meses) × 8 meses = 10 días proporcionales.
- Monto: (500.000 / 30) × 10 = $166.667 (aproximado, según el cálculo diario).

#### Qué puedes hacer

1. **Verifica tu antigüedad:** Revisa tu contrato y liquidaciones para confirmar tu fecha de ingreso y calcular cuántos años llevas con el empleador actual. Si quieres hacer valer años con empleadores anteriores (para los días adicionales del artículo 68), reúne certificados de trabajo o finiquitos que acrediten esos períodos.

2. **Solicita tu feriado por escrito:** Presenta una solicitud formal al empleador, indicando las fechas en que deseas tomar el feriado. Si tienes cuidado personal de niños menores de 14 años o adolescentes con discapacidad, y quieres que tu feriado coincida con las vacaciones escolares, solicítalo con al menos 30 días de anticipación y adjunta los documentos que acrediten la filiación o el cuidado personal (certificado de nacimiento, resolución judicial, certificado del Registro Nacional de la Discapacidad o documento del Ministerio de Desarrollo Social y Familia).

3. **Acuerda fraccionamiento o acumulación si lo necesitas:** Si quieres fraccionar el exceso sobre 10 días hábiles, o acumular dos períodos, negocia por escrito con el empleador y deja constancia del acuerdo (puede ser en un anexo al contrato o en un documento aparte firmado por ambos).

4. **Exige el pago correcto durante el feriado:** Verifica en tu liquidación que durante el feriado te paguen la remuneración íntegra (sueldo fijo, o promedio de los últimos tres meses si tienes variables, más otros beneficios que correspondan). Si hay error, reclama por escrito al empleador.

5. **Si el empleador no otorga el feriado o lo compensa en dinero indebidamente:** Presenta un reclamo ante la **Inspección del Trabajo** (presencial en cualquier oficina, o en línea en www.dt.gob.cl). La Inspección puede fiscalizar, multar al empleador y ordenar que se otorgue el feriado.

6. **Si termina tu contrato y no te pagan el feriado proporcional:** Revisa el finiquito. Si falta el pago del feriado o de la indemnización proporcional, no lo firmes sin hacer la observación por escrito. Si ya firmaste y no te pagaron, puedes reclamar ante la Inspección del Trabajo o demandar ante el juzgado de letras del trabajo dentro del plazo de prescripción.

#### Qué verificar antes de actuar

- **Fecha exacta de ingreso:** Confirma en tu contrato o certificado de antigüedad cuándo cumples cada año de servicio, para saber cuándo adquieres el derecho al feriado anual.
- **Región en que prestas servicios:** Si trabajas en Magallanes, Aysén o Palena, tienes derecho a 20 días hábiles desde el primer año; en el resto del país, 15 días.
- **Antigüedad total para días adicionales:** Si tienes 10 o más años de trabajo (sumando empleadores anteriores hasta un máximo de 10 años), calcula cuántos días adicionales te corresponden (uno por cada tres años nuevos a partir del décimo año).
- **Tipo de remuneración:** Si tienes sueldo fijo, variables o mixto, verifica que el cálculo de la remuneración íntegra durante el feriado sea correcto (promedio de los últimos tres meses si hay variables).
- **Acuerdos previos:** Si fraccionaste el feriado, lo acumulaste o pactaste algo especial con el empleador, revisa que esté por escrito y que se cumpla lo acordado.

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### c02-necesidades — consulta: Me despidieron por necesidades de la empresa, ¿qué indemnización me corresponde?

<details><summary>Material enviado al modelo (15 normas, 2 fallos o dictámenes, 3 artículos de doctrina; 0 normas descartadas por materia)</summary>

- Código del Trabajo, Artículo 161
- Código del Trabajo, Artículo 162
- Código del Trabajo, Artículo 163
- Código del Trabajo, Artículo 168
- Código del Trabajo, Artículo 169
- Código del Trabajo, Artículo 172
- Código del Trabajo, Artículo 177
- Código del Trabajo, Artículo 160
- Código del Trabajo, Artículo 446
- Código del Trabajo, Artículo 159
- Código del Trabajo, Artículo 170
- Código del Trabajo, Artículo 171
- Código del Trabajo, Artículo 161
- Código del Trabajo, Artículo 163
- Código del Trabajo, Artículo 67
- Jurisprudencia: Dirección del Trabajo, Dictamen ORD. Nº1979/31, 2011-05-06
- Jurisprudencia: Dirección del Trabajo, Dictamen ORD. Nº1746/31, 2006-04-27
- Doctrina: Yáñez Monje, Eduardo, "Las necesidades de la empresa como causal de término de contrato. ¿Conversión a un sistema de libre despido?", Revista Chilena de Derecho del Trabajo y de la Seguridad Social, vol. 1, N° 1, (2016), DOI: 10.5354/0719-7551.2010.43019.
- Doctrina: Monteiro Pessoa, Rodrigo, "La teoría de la imprevisión aplicada a la indemnización por término anticipado de los contratos a plazo y por obra o faena en los casos de necesidad de la empresa", Revista de derecho (Coquimbo), vol. 27, (2020), pp. e4300, DOI: 10.22199/issn.0718-9753-2020-0008.
- Doctrina: Rojas Miño, Irene, "La indemnización por término de contrato de trabajo: instrumento de protección ante el despido", Ius et Praxis, vol. 20, N° 1, (2014), pp. 91-122, DOI: 10.4067/s0718-00122014000100005.

Versión anterior (main):
- Código del Trabajo, Artículo 160
- Código del Trabajo, Artículo 161
- Código del Trabajo, Artículo 162
- Código del Trabajo, Artículo 163
- Código del Trabajo, Artículo 168
- Código del Trabajo, Artículo 169
- Código del Trabajo, Artículo 170
- Código del Trabajo, Artículo 171
- Código del Trabajo, Artículo 161
- Código del Trabajo, Artículo 163
- Código del Trabajo, Artículo 67
- Código del Trabajo, (artículo no identificado)
- Código de Procedimiento Civil, (artículo no identificado)

</details>

#### Respuesta corta

Si te despidieron invocando **necesidades de la empresa** (artículo 161 del Código del Trabajo) y tu contrato estuvo vigente un año o más, tienes derecho a la **indemnización por años de servicio** (30 días de remuneración por año trabajado, tope 330 días) más la **indemnización sustitutiva del aviso previo** (30 días) si no te avisaron con 30 días de anticipación. Estas indemnizaciones deben pagarse al momento del finiquito.

#### Qué dice la ley

El **artículo 161 del Código del Trabajo** establece:

"Sin perjuicio de lo señalado en los artículos precedentes, el empleador podrá poner término al contrato de trabajo invocando como causal las necesidades de la empresa, establecimiento o servicio, tales como las derivadas de la racionalización o modernización de los mismos, bajas en la productividad, cambios en las condiciones del mercado o de la economía, que hagan necesaria la separación de uno o más trabajadores."

https://www.bcn.cl/leychile/navegar?idNorma=207436&idParte=8512018

Esta causal permite al empleador terminar el contrato por razones económicas u organizacionales objetivas, sin que exista culpa del trabajador.

El **artículo 163** regula la indemnización por años de servicio:

"Si el contrato hubiere estado vigente un año o más y el empleador le pusiere término en conformidad al artículo 161, deberá pagar al trabajador, la indemnización por años de servicio que las partes hayan convenido individual o colectivamente, siempre que ésta fuere de un monto superior a la establecida en el inciso siguiente. A falta de esta estipulación [...] el empleador deberá pagar al trabajador una indemnización equivalente a treinta días de la última remuneración mensual devengada por cada año de servicio y fracción superior a seis meses, prestados continuamente a dicho empleador. Esta indemnización tendrá un límite máximo de trescientos treinta días de remuneración."

https://www.bcn.cl/leychile/navegar?idNorma=207436&idParte=8512021

El **artículo 162, inciso cuarto**, establece el aviso previo:

"Cuando el empleador invoque la causal señalada en el inciso primero del artículo 161, el aviso deberá darse al trabajador, con copia a la Inspección del Trabajo respectiva, a lo menos con treinta días de anticipación. Sin embargo, no se requerirá esta anticipación cuando el empleador pagare al trabajador una indemnización en dinero efectivo sustitutiva del aviso previo, equivalente a la última remuneración mensual devengada."

https://www.bcn.cl/leychile/navegar?idNorma=207436&idParte=8512020

#### Explicación

##### Requisitos para que proceda la indemnización

1. **Antigüedad mínima**: El contrato debe haber estado vigente **un año o más** para tener derecho a la indemnización por años de servicio. Si trabajaste menos de un año, no hay derecho a esta indemnización (solo a la sustitutiva del aviso previo, si corresponde).

2. **Causal invocada**: El empleador debe haber invocado expresamente el artículo 161 (necesidades de la empresa) en la carta de despido.

3. **Forma y plazo del aviso**: El empleador debe comunicar el despido por escrito, con copia a la Inspección del Trabajo, con **30 días de anticipación** o pagando la indemnización sustitutiva del aviso previo al momento de la separación.

##### Indemnizaciones que corresponden

**a) Indemnización por años de servicio (artículo 163)**

- **Monto**: 30 días de la última remuneración mensual por cada año trabajado y fracción superior a 6 meses.
- **Tope máximo**: 330 días de remuneración (equivalente a 11 años).
- **Base de cálculo**: La última remuneración mensual, que incluye sueldo base, comisiones, bonos habituales y gratificación legal, pero excluye asignación familiar, horas extras y bonos esporádicos (artículo 172). Si tu remuneración es variable, se calcula el promedio de los últimos tres meses.
- **Tope de remuneración**: No se considera una remuneración superior a 90 UF del último día del mes anterior al pago (artículo 172, inciso tercero). A septiembre de 2026, esto equivale a $3.691.465 (90 UF × $41.016,28).

**b) Indemnización sustitutiva del aviso previo (artículo 162, inciso cuarto)**

- **Monto**: Equivalente a la última remuneración mensual devengada.
- **Cuándo procede**: Solo si el empleador **no dio el aviso con 30 días de anticipación**. Si te avisaron con 30 días o más, no corresponde esta indemnización adicional.

##### Plazo y forma de pago

El empleador está **obligado a pagar ambas indemnizaciones en un solo acto al momento de extender el finiquito**, que debe otorgarse dentro de **10 días hábiles** desde la separación (artículo 169, letra a), y artículo 177, inciso primero).

Las partes pueden acordar el pago fraccionado, pero este acuerdo debe ratificarse ante la Inspección del Trabajo. El incumplimiento del pacto hace exigible el total de inmediato y se sanciona con multa.

##### Impugnación del despido

Si consideras que la causal de necesidades de la empresa es **improcedente** (por ejemplo, porque no existen tales necesidades o porque el empleador contrató a otra persona para el mismo cargo), puedes reclamar ante el juzgado de letras del trabajo dentro de **60 días hábiles** desde la separación (artículo 168). Este plazo se suspende si presentas un reclamo ante la Inspección del Trabajo, pero en ningún caso puedes recurrir al tribunal después de 90 días hábiles desde la separación.

Si el tribunal acoge tu reclamo, las indemnizaciones se **aumentan en un 30%** (artículo 168, letra a).

##### Casos en que no procede invocar esta causal

El empleador **no puede** invocar necesidades de la empresa respecto de:

- Trabajadores con **licencia médica** por enfermedad común, accidente del trabajo o enfermedad profesional (artículo 161, inciso tercero).
- Trabajadores con **fuero sindical**, salvo previa autorización judicial (Dictamen ORD. Nº1746/31, 2006).

#### Ejemplo o cálculo

**Supuesto**: Trabajaste 5 años y 8 meses. Tu última remuneración mensual fue de $800.000 (sueldo base $600.000 + gratificación legal mensualizada $200.000). El empleador te despidió el 1 de septiembre de 2026 invocando necesidades de la empresa, sin aviso previo.

**Cálculo**:

1. **Indemnización por años de servicio**:
   - Años completos: 5
   - Fracción superior a 6 meses: 1 (los 8 meses)
   - Total a indemnizar: 6 períodos
   - Monto: 6 × 30 días × $800.000 / 30 = **$4.800.000**

2. **Indemnización sustitutiva del aviso previo**:
   - Como no hubo aviso con 30 días de anticipación: **$800.000**

3. **Total a pagar**: $4.800.000 + $800.000 = **$5.600.000**

Este monto debe pagarse al momento del finiquito, dentro de los 10 días hábiles siguientes a la separación.

#### Jurisprudencia y criterios administrativos

La **Dirección del Trabajo, en Dictamen ORD. Nº1746/31 de 2006**, estableció que no es jurídicamente procedente dar el aviso de término de contrato por necesidades de la empresa a trabajadores que gozan de fuero sindical, ya que el fuero impide al empleador poner término al contrato salvo por las causales del artículo 160 (conductas graves del trabajador) o por vencimiento de plazo o conclusión de obra, previa autorización judicial.

https://www.dt.gob.cl/legislacion/1624/w3-article-89900.html

#### Doctrina

**Irene Rojas Miño**, en "La indemnización por término de contrato de trabajo: instrumento de protección ante el despido" (Ius et Praxis, 2014), analiza la función de la indemnización por años de servicio como mecanismo de protección ante el despido en Chile, destacando que su monto limitado (tope de 330 días) y la facilidad para invocar necesidades de la empresa han generado críticas sobre la efectividad de la protección contra el despido arbitrario.

http://www.scielo.cl/pdf/iusetp/v20n1/art05.pdf

**Eduardo Yáñez Monje**, en Las necesidades de la empresa como causal de término de contrato. ¿Conversión a un sistema de libre despido? (no verificado en esta búsqueda) (Revista Chilena de Derecho del Trabajo, 2016), cuestiona si la amplitud de la causal del artículo 161 y la dificultad probatoria para el trabajador que la impugna han convertido el sistema chileno en uno de despido prácticamente libre, con indemnización tasada.

https://revistatrabajo.uchile.cl/index.php/RDTSS/article/download/43019/44957

#### Qué puedes hacer

1. **Revisa la carta de despido**: Verifica que indique expresamente el artículo 161 como causal, que esté fechada y firmada, y que señale el monto total de las indemnizaciones. Debe haberse enviado copia a la Inspección del Trabajo.

2. **Verifica el pago de cotizaciones previsionales**: El empleador debe acreditar que pagó todas las cotizaciones (AFP, salud, cesantía) hasta el último día del mes anterior al despido. Si no lo hizo, el despido **no produce efecto** hasta que pague (artículo 162, inciso quinto).

3. **Exige el pago dentro de 10 días hábiles**: El finiquito debe otorgarse y pagarse dentro de este plazo. Si el empleador no paga, puedes:
   - Recurrir a la **Inspección del Trabajo** para que medie y exija el pago.
   - Presentar demanda en **procedimiento ejecutivo** ante el juzgado de letras del trabajo, usando la carta de despido como título ejecutivo. El juez puede aumentar las indemnizaciones hasta en un **150%** si no se pagaron oportunamente (artículo 169, letra a).

4. **Firma el finiquito solo ante ministro de fe**: El finiquito debe ratificarse ante un inspector del trabajo, notario, oficial del Registro Civil o secretario municipal para que tenga validez (artículo 177). Puedes formular **reserva de derechos** si consideras que la causal es improcedente o que te adeudan otras sumas.

5. **Impugna el despido si es improcedente**: Si consideras que no existían necesidades reales de la empresa (por ejemplo, si contrataron a alguien para tu puesto o si la empresa no tiene problemas económicos), presenta un reclamo ante la **Inspección del Trabajo** dentro de los 60 días hábiles desde la separación. Esto suspende el plazo para demandar. Luego, puedes demandar ante el **juzgado de letras del trabajo** dentro del mismo plazo (que se extiende hasta 90 días hábiles como máximo).

6. **Reúne antecedentes**: Si vas a impugnar, junta evidencia de que la causal es falsa: estados financieros de la empresa, avisos de contratación posteriores, correos electrónicos, testimonios de compañeros, etc.

7. **Asesoría gratuita**: Si no puedes pagar abogado, acude a la **Corporación de Asistencia Judicial** o al **consultorio jurídico** de alguna universidad.

#### Qué verificar antes de actuar

- **Antigüedad**: Confirma que trabajaste un año o más para tener derecho a la indemnización por años de servicio. Si trabajaste menos, solo corresponde la sustitutiva del aviso previo.
- **Monto de las indemnizaciones**: Calcula tú mismo el monto según tu antigüedad y última remuneración, considerando el tope de 330 días y el tope de 90 UF de remuneración. Verifica que la carta de despido indique correctamente estos montos.
- **Pago de cotizaciones**: Exige al empleador los certificados de las AFP, Isapre o Fonasa, y AFC que acrediten el pago de cotizaciones hasta el mes anterior al despido. Sin esto, el despido no es válido.
- **Plazo para reclamar**: Tienes 60 días hábiles desde la separación para reclamar ante la Inspección del Trabajo o demandar (hasta 90 días hábiles como máximo). No dejes pasar este plazo.
- **Reserva de derechos en el finiquito**: Si firmas el finiquito pero quieres impugnar el despido o reclamar otras sumas, deja constancia expresa de tu reserva de derechos ante el ministro de fe. Esto no impide el pago de las sumas no disputadas.

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### c03-garantia — consulta: ¿Qué plazo tiene el arrendador para devolver la garantía?

<details><summary>Material enviado al modelo (16 normas, 0 fallos o dictámenes, 0 artículos de doctrina; 0 normas descartadas por materia)</summary>

- Código Civil, Artículo 1915
- Código Civil, Artículo 1947
- Código Civil, Artículo 1924
- Código Civil, Artículo 1977
- Código Civil, Artículo 1945
- Código Civil, Artículo 1946
- Código Civil, Artículo 1948
- Ley 18.101, fija normas especiales sobre arrendamiento de predios urbanos, Artículo 1
- Ley 18.101, fija normas especiales sobre arrendamiento de predios urbanos, Artículo 3
- Ley 19.496, establece normas sobre proteccion de los derechos de los consumidores, Artículo 3
- Ley 19.496, establece normas sobre proteccion de los derechos de los consumidores, Artículo 17
- Ley 19.496, establece normas sobre proteccion de los derechos de los consumidores, Artículo 18
- Decreto 3.154, fija texto definitivo de la ley general de bancos, Artículo 69
- Decreto 2.115, texto definitivo de la ley general de bancos, Artículo 75
- Decreto 75, deroga decreto nº15, de 1992, y sus modificaciones posteriores y aprueba reglamento para contratos de obras publicas, Artículo 76
- DL 559, creacion de la superintendencia de las empresas bancarias y lejislacion bancaria., Artículo 75

Versión anterior (main):
- Código Civil, Artículo 1945
- Código Civil, Artículo 1946
- Código Civil, Artículo 1947
- Código Civil, Artículo 1948
- Código Civil, Artículo 1949
- Código Civil, Artículo 1950
- Ley N° 18.101 sobre Arrendamiento de Predios Urbanos, Artículo 3
- Ley N° 19.496 sobre Protección de los Derechos de los Consumidores, Artículo 3 bis
- Código del Trabajo, Artículo 159
- Código Civil, (artículo no identificado)

</details>

#### Respuesta corta

La ley no fija un plazo específico para que el arrendador devuelva la garantía del arriendo. Debe restituirla una vez verificado el estado del inmueble al término del contrato, descontando los deterioros imputables al arrendatario. En la práctica, se entiende que debe hacerlo dentro de un plazo razonable tras la entrega material del bien raíz.

#### Qué dice la ley

El **Código Civil, artículo 1947** regula la obligación de restituir el inmueble al término del arriendo:

"Art. 1947. El arrendatario es obligado a restituir la cosa al fin del arrendamiento.
Deberá restituirla en el estado en que le fue entregada, tomándose en consideración el deterioro ocasionado por el uso y goce legítimos.
Si no constare el estado en que le fue entregada, se entenderá haberla recibido en regular estado de servicio, a menos que pruebe lo contrario.
En cuanto a los daños y pérdidas sobrevenidas durante su goce, deberá probar que no sobrevinieron por su culpa, ni por culpa de sus huéspedes, dependientes o subarrendatarios, y a falta de esta prueba será responsable."

https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8719971

Esta norma establece la obligación del arrendatario de devolver el inmueble en el estado recibido, considerando el desgaste normal. El arrendador tiene derecho a verificar el estado y descontar de la garantía los daños imputables al arrendatario. Sin embargo, ni el Código Civil ni la **Ley 18.101 sobre arrendamiento de predios urbanos** fijan un plazo expreso para la devolución de la garantía.

El **artículo 1948 del Código Civil** precisa cómo se materializa la restitución del inmueble:

"Art. 1948. La restitución de la cosa raíz se verificará desocupándola enteramente, poniéndola a disposición del arrendador y entregándole las llaves."

https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8719972

#### Explicación

**Naturaleza de la garantía**: La garantía de arriendo (generalmente equivalente a un mes de renta) es un depósito que el arrendatario entrega al arrendador para caucionar el cumplimiento de sus obligaciones, especialmente la restitución del inmueble en buen estado y el pago de rentas adeudadas.

**Momento de la devolución**: El arrendador debe devolver la garantía una vez que:

1. El arrendatario haya restituido materialmente el inmueble (desocupado, limpio, con llaves entregadas).
2. El arrendador haya verificado el estado del bien raíz.
3. Se hayan descontado los montos correspondientes a deterioros imputables al arrendatario, rentas impagas, cuentas de servicios pendientes u otros gastos que el contrato autorice descontar.

**Ausencia de plazo legal**: Ni el Código Civil ni la Ley 18.101 establecen un plazo específico. La doctrina y la práctica entienden que la devolución debe hacerse dentro de un **plazo razonable**, que depende de las circunstancias: complejidad de la verificación del estado del inmueble, necesidad de cotizar reparaciones, liquidación de cuentas de servicios básicos, etc. En general, se considera razonable un plazo de **15 a 30 días** desde la entrega material del inmueble.

**Descuentos permitidos**: El arrendador puede descontar de la garantía:

- **Deterioros imputables al arrendatario**: daños que excedan el desgaste normal por uso legítimo (artículo 1947). El arrendatario debe probar que los daños no fueron por su culpa; si no lo hace, es responsable.
- **Rentas impagas**: si al término del contrato hay rentas adeudadas.
- **Cuentas de servicios**: agua, luz, gas, gastos comunes, si el contrato establece que son de cargo del arrendatario y quedan pendientes al término.
- **Otros conceptos pactados**: siempre que estén expresamente contemplados en el contrato.

**Carga de la prueba**: Si el arrendador retiene parte o la totalidad de la garantía alegando deterioros, debe acreditar que esos daños son imputables al arrendatario y que exceden el desgaste normal. Si no consta el estado inicial del inmueble (por ejemplo, mediante un inventario o acta de entrega), se presume que fue recibido en "regular estado de servicio" (artículo 1947, inciso 3°).

**Retención indebida**: Si el arrendador retiene la garantía sin justificación o más allá de un plazo razonable, el arrendatario puede:

- Requerir la devolución por escrito, fijando un plazo prudente.
- Demandar la restitución ante el juzgado de letras competente (civil o de policía local, según la cuantía y naturaleza de la acción).
- En caso de mala fe o abuso, eventualmente reclamar indemnización de perjuicios.

**Contratos de adhesión y protección al consumidor**: Si el arrendamiento es de un inmueble destinado a vivienda y el arrendador es una empresa inmobiliaria o persona jurídica que arrienda habitualmente, podría aplicarse la **Ley 19.496 de Protección al Consumidor** (artículos 3, 17 y 18). En ese caso, cláusulas abusivas sobre retención de garantía podrían ser impugnadas ante el SERNAC o el juzgado de policía local. Sin embargo, la aplicación de esta ley a arriendos de vivienda es discutida y depende de que se configure una relación de consumo (proveedor habitual y consumidor final).

#### Ejemplo o cálculo

**Caso**: Arrendatario entrega un departamento el 1 de septiembre de 2026. La garantía fue de $400.000 (un mes de renta). Al momento de la entrega, el arrendador constata:

- Una mancha de humedad en el baño (por filtración que el arrendatario no reportó a tiempo): reparación cotizada en $80.000.
- Cuenta de luz pendiente: $25.000.
- Resto del inmueble en buen estado, con desgaste normal.

El arrendador puede descontar $105.000 de la garantía y debe devolver $295.000. Si el arrendador verifica el estado el 5 de septiembre y liquida las cuentas el 10 de septiembre, un plazo razonable para devolver los $295.000 sería hasta el 20 o 25 de septiembre (15 a 20 días desde la entrega). Si el 30 de septiembre no ha devuelto el saldo, el arrendatario puede requerir formalmente la devolución y, si no hay respuesta, demandar.

#### Qué puedes hacer

1. **Documentar la entrega**: Al restituir el inmueble, solicita al arrendador que firme un acta de entrega donde conste el estado del bien raíz, la fecha y la entrega de llaves. Idealmente, toma fotografías o video.

2. **Requerir por escrito la devolución**: Si han pasado más de 30 días desde la entrega y el arrendador no devuelve la garantía ni informa descuentos, envía una carta certificada o correo electrónico solicitando la devolución, con copia del contrato y del acta de entrega. Fija un plazo (por ejemplo, 10 días hábiles).

3. **Demandar la restitución**: Si el arrendador no responde o se niega sin justificación:
   - Procedimiento más rápido y sin necesidad de abogado.
   - **Juzgado de letras en lo civil**: si la cuantía es mayor o si demandas además indemnización de perjuicios. Requiere patrocinio de abogado si supera las 10 UTM.

4. **Reunir antecedentes**: Contrato de arriendo, comprobante de pago de la garantía, acta de entrega del inmueble (si existe), fotografías del estado al término, comunicaciones con el arrendador (correos, mensajes), cotizaciones de reparaciones (si el arrendador alega daños).

5. **Asesoría jurídica gratuita**: Si no puedes costear un abogado, acude a la **Corporación de Asistencia Judicial** (CAJ) o a las clínicas jurídicas de universidades. Ellos pueden orientarte y, si corresponde, representarte en juicio.

#### Qué verificar antes de actuar

1. **Estado del inmueble al término**: Asegúrate de haber entregado el inmueble en las condiciones pactadas (limpio, sin daños imputables a ti, con desgaste solo normal). Si hay deterioros, evalúa si son justificables o si el arrendador tiene derecho a descontar.

2. **Cuentas de servicios**: Verifica que no queden cuentas pendientes de luz, agua, gas o gastos comunes a tu nombre. Si las pagaste, conserva los comprobantes.

3. **Plazo transcurrido**: Evalúa si ha pasado un plazo razonable (generalmente 15 a 30 días). Si el arrendador necesita más tiempo por razones justificadas (por ejemplo, esperar la cuenta final de un servicio), considera si es razonable esperar.

4. **Comunicación con el arrendador**: Antes de demandar, intenta una comunicación formal por escrito. Muchas veces la retención se debe a desorganización o falta de liquidez del arrendador, y un requerimiento claro puede resolver el problema.

5. **Monto en disputa y costos del juicio**: Si el monto retenido es bajo, evalúa si vale la pena litigar considerando el tiempo y eventual costo de abogado (salvo que accedas a defensa gratuita). En algunos casos, una mediación o reclamo ante el SERNAC (si aplica la Ley del Consumidor) puede ser más eficiente.

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### c04-defectuoso — consulta: Compré un producto defectuoso, ¿puedo exigir la devolución del dinero?

<details><summary>Material enviado al modelo (12 normas, 0 fallos o dictámenes, 1 artículos de doctrina; 1 normas descartadas por materia)</summary>

- Ley 19.496, establece normas sobre proteccion de los derechos de los consumidores, Artículo 19
- Ley 19.496, establece normas sobre proteccion de los derechos de los consumidores, Artículo 20
- Ley 19.496, establece normas sobre proteccion de los derechos de los consumidores, Artículo 21
- Código Civil, Artículo 1641
- Código Civil, Artículo 1642
- Código Civil, Artículo 1643
- Código Civil, Artículo 1644
- Código Civil, Artículo 1645
- Código Civil, Artículo 1646
- Ley 19.496, establece normas sobre proteccion de los derechos de los consumidores, Artículo 3
- Ley 19.496, establece normas sobre proteccion de los derechos de los consumidores, Artículo 17
- Decreto 71, modifica por razones de interés público, las características de las obras y servicios que indica del contrato de concesión de la obra pública fiscal denominada "autopista santiago - san antonio" y aprueba convenio ad - referéndum nº 5, Artículo 19-
- Doctrina: De la Maza Gazmuri, Iñigo, "VICIOS REDHIBITORIOS, DEFECTOS JURÍDICOS Y PROTECCIÓN DEL COMPRADOR. LOS VICIOS REDHIBITORIOS QUE HABILITAN PARA SOLICITAR LA RESCISIÓN DE LA VENTA SON FÍSICOS (CORTE DE APELACIONES DE VALPARAÍSO, 6 DE AGOSTO DE 2002; CORTE SUPREMA, 1 DE OCTUBRE DE 2003).", Revista Chilena de Derecho Privado, N° 1, (2019), DOI: 10.32995/s0718-80722003383.
- ~~CIR Bancos 2409, recopilacion actualizada de normas, Artículo 137 bis~~ (sin relación léxica (1 términos en común))

Versión anterior (main):
- Código Civil, Artículo 1641
- Código Civil, Artículo 1642
- Código Civil, Artículo 1643
- Código Civil, Artículo 1644
- Código Civil, Artículo 1645
- Ley N° 19.496 sobre Protección de los Derechos de los Consumidores, Artículo 3 bis
- Código Civil, (artículo no identificado)
- Código de Procedimiento Civil, (artículo no identificado)

</details>

#### Respuesta corta

Sí, puedes exigir la devolución del dinero si el producto presenta defectos que lo hagan inapto para su uso o no cumpla las especificaciones ofrecidas. La Ley 19.496 sobre Protección de los Derechos de los Consumidores te otorga el derecho a optar entre la reparación gratuita, la reposición del producto o la devolución de lo pagado, según el tipo de defecto y las circunstancias.

#### Qué dice la ley

**Artículo 20 de la Ley 19.496**: "En los casos que a continuación se señalan, sin perjuicio de la indemnización por los daños ocasionados, el consumidor podrá optar entre la reparación gratuita del bien o, previa restitución, su reposición o la devolución de la cantidad pagada: [...] c) Cuando cualquier producto, por deficiencias de fabricación, elaboración, materiales, partes, piezas, elementos, sustancias, ingredientes, estructura, calidad o condiciones sanitarias, en su caso, no sea enteramente apto para el uso o consumo al que está destinado o al que el proveedor hubiese señalado en su publicidad [...]" (https://www.bcn.cl/leychile/navegar?idNorma=61438&idParte=8542452).

Esta norma establece que cuando un producto tiene defectos de fabricación o no sirve para el uso al que está destinado, tienes tres opciones: que te lo reparen gratis, que te lo repongan por uno nuevo, o que te devuelvan el dinero. La elección es tuya.

**Artículo 19 de la Ley 19.496**: "El consumidor tendrá derecho a la reposición del producto o, en su defecto, a optar por la bonificación de su valor en la compra de otro o por la devolución del precio que haya pagado en exceso, cuando la cantidad o el contenido neto de un producto sea inferior al indicado en el envase o empaque" (https://www.bcn.cl/leychile/navegar?idNorma=61438&idParte=8542451).

Este artículo cubre el caso específico de productos con contenido inferior al declarado: también puedes exigir reposición, bonificación o devolución.

#### Explicación

**Casos en que procede la devolución del dinero**

El artículo 20 enumera siete situaciones en las que puedes ejercer tus derechos:

1. **Productos que no cumplen normas obligatorias de seguridad o calidad** (letra a).
2. **Materiales o ingredientes que no corresponden a lo declarado** en el rotulado o las especificaciones (letra b).
3. **Producto no apto para su uso** por defectos de fabricación, materiales, calidad o condiciones sanitarias, o que no cumple lo prometido en la publicidad (letra c). Este es el caso más común.
4. **Incumplimiento de especificaciones acordadas** entre proveedor y consumidor (letra d).
5. **Deficiencias que persisten después de la primera reparación** en garantía (letra e).
6. **Vicios ocultos** que impiden el uso habitual del producto (letra f). Un vicio oculto es un defecto que no era visible al momento de la compra y que se manifiesta después.
7. **Ley de metales inferior** en artículos de orfebrería o joyería (letra g).

**Requisitos para ejercer el derecho**

- **Plazo general**: Debes reclamar ante el vendedor dentro de **tres meses** desde que recibiste el producto, siempre que el deterioro no sea por tu culpa (artículo 21, inciso 1).
- **Plazo con garantía**: Si el producto tiene garantía, prevalece el plazo de la garantía si es mayor a tres meses.
- **Productos perecibles**: El plazo es el impreso en el envase o, si no hay, **siete días** como máximo.
- **Suspensión del plazo**: El plazo de tres meses o de la garantía se suspende mientras el producto esté en reparación.

**Orden de ejercicio de los derechos**

Si el producto tiene garantía otorgada por el proveedor, **primero debes hacer efectiva la garantía** y agotar las posibilidades que ofrece. Solo después puedes ejercer los derechos del artículo 20 (artículo 21, inciso 7). La póliza de garantía debe estar fechada y timbrada al momento de la entrega, o bien acompañarse de la factura o boleta.

**Ante quién reclamar**

- **Para reparación o reposición**: Puedes dirigirte indistintamente al vendedor, al fabricante o al importador. Una vez que elijas, el requerido no puede derivar tu reclamo a otro (artículo 21, inciso 2).
- **Para devolución del dinero**: Solo puedes reclamar al vendedor (artículo 21, inciso 4).

El reclamo debe hacerse en el mismo local donde compraste o en las oficinas donde el proveedor atiende habitualmente, no en lugares menos cómodos, salvo que tú aceptes (artículo 21, inciso 5).

**Acreditación del acto de compra**

Debes acreditar la compra con la factura o boleta. Si el proveedor tributa bajo renta presunta (por ejemplo, ferias libres, pequeños comerciantes), puedes usar cualquier medio de prueba (artículo 21, inciso final).

**Plazo para la devolución del dinero**

El plazo para exigir la devolución se cuenta desde la fecha de la factura o boleta y **no se suspende** en ningún caso (artículo 21, inciso 8). Si la devolución se acuerda después de que haya pasado el plazo del artículo 70 del DL 825 de 1974 (que regula el IVA), solo recuperas el precio neto, sin los impuestos.

**Responsabilidad solidaria**

El vendedor y el importador son solidariamente responsables por los perjuicios que te ocasionen (artículo 21, inciso 3). Esto significa que puedes cobrar a cualquiera de ellos el total de lo adeudado.

#### Ejemplo o cálculo

Compraste un televisor el 1 de marzo de 2026 por $500.000 (IVA incluido). El 15 de abril descubres que la pantalla tiene píxeles muertos que impiden ver bien las imágenes. El producto tiene garantía de un año.

1. **Primero haces efectiva la garantía**: Llevas el televisor al servicio técnico autorizado. Te lo reparan el 20 de abril.
2. **El defecto persiste**: El 10 de mayo vuelves a notar píxeles muertos. Según el artículo 20 letra e, ahora puedes optar por reparación, reposición o devolución del dinero.
3. **Eliges la devolución**: El 15 de mayo vas a la tienda con la factura y exiges la devolución de los $500.000.
4. **Plazo**: Estás dentro del plazo de garantía (un año desde el 1 de marzo de 2026). Además, el plazo se suspendió entre el 15 de abril y el 20 de abril mientras el producto estuvo en reparación.
5. **Resultado**: La tienda debe devolverte los $500.000. Si se niega, puedes reclamar ante el SERNAC o demandar ante el juzgado de policía local.

#### Qué puedes hacer

1. **Reúne los antecedentes**: Factura o boleta de compra, póliza de garantía (si existe), comprobante de reparaciones previas, fotografías o videos del defecto.

2. **Reclama por escrito al vendedor**: Envía una carta o correo electrónico explicando el defecto, indicando que el producto no es apto para su uso (artículo 20 letra c) y exigiendo la devolución del dinero. Guarda copia con fecha de envío.

3. **Si el vendedor no responde o se niega**: Presenta un reclamo ante el **SERNAC** (Servicio Nacional del Consumidor) a través de su sitio web (www.sernac.cl) o en sus oficinas. El SERNAC mediará entre tú y el proveedor. Este trámite es gratuito.

4. **Si la mediación fracasa**: Puedes demandar ante el **juzgado de policía local** del domicilio del proveedor o donde se celebró el contrato. La demanda puede ser verbal (en audiencia) o escrita. Si es mayor, puedes pedir asesoría gratuita en la **Corporación de Asistencia Judicial** (www.cajmetro.cl) o en las clínicas jurídicas de universidades.

5. **Indemnización de perjuicios**: Además de la devolución, puedes pedir indemnización por los daños materiales y morales que te haya causado el incumplimiento (artículo 3 letra e).

#### Qué verificar antes de actuar

- **Plazo**: Confirma que no han pasado más de tres meses desde que recibiste el producto (o el plazo de garantía si es mayor). Si el producto es perecible, el plazo puede ser de solo siete días.
- **Causa del defecto**: Asegúrate de que el deterioro no sea por tu culpa (mal uso, golpes, exposición a condiciones inadecuadas). Si el vendedor alega que tú lo dañaste, deberá probarlo.
- **Garantía**: Si hay garantía, verifica si ya la hiciste efectiva y si el defecto persiste o es distinto al reparado.
- **Documentación**: Ten a mano la factura o boleta. Si no la tienes y el vendedor tributa bajo renta presunta, prepara otros medios de prueba (testigos, correos, mensajes).
- Confirma este plazo en la normativa tributaria vigente.

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### c05-alimentos — consulta: ¿Cómo se calcula la pensión de alimentos para un hijo?

<details><summary>Material enviado al modelo (11 normas, 0 fallos o dictámenes, 0 artículos de doctrina; 0 normas descartadas por materia)</summary>

- Ley 14.908, fija el texto definitivo y refundido de la ley numero 5.750, con las modificaciones introducidas por la ley numero 14.550, Artículo 3
- Ley 14.908, fija el texto definitivo y refundido de la ley numero 5.750, con las modificaciones introducidas por la ley numero 14.550, Artículo 7
- Código Civil, Artículo 321
- Código Civil, Artículo 323
- Código Civil, Artículo 332
- Código Civil, Artículo 322
- Código Civil, Artículo 324
- Código Civil, Artículo 330
- Ley 19.968, crea los tribunales de familia, Artículo 106
- Ley 19.968, crea los tribunales de familia, Artículo 3
- Ley 19.968, crea los tribunales de familia, Artículo 60

Versión anterior (main):
- Código Civil, Artículo 321
- Código Civil, Artículo 322
- Código Civil, Artículo 323
- Código Civil, Artículo 324
- Código Civil, Artículo 325
- Código de Procedimiento Civil, (artículo no identificado)
- Código Civil, (artículo no identificado)

</details>

#### Respuesta corta

La pensión de alimentos para un hijo se fija judicialmente según las necesidades del alimentario y las facultades económicas del alimentante, sin fórmula matemática predeterminada. El juez de familia pondera caso a caso ambos factores, presumiendo que el padre o madre demandado tiene medios para otorgarlos cuando el menor los solicita.

#### Qué dice la ley

**Código Civil, artículo 323**: "Los alimentos deben habilitar al alimentado para subsistir adecuadamente, resguardando el interés superior, la autonomía progresiva y el desarrollo integral del niño, niña y adolescente. Comprenden la obligación de proporcionar al alimentario menor de veintiún años la enseñanza básica y media, y la de alguna profesión u oficio."

https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8718147

**Código Civil, artículo 330**: "Los alimentos no se deben sino en la parte en que los medios de subsistencia del alimentario no le alcancen para subsistir de un modo correspondiente a su posición social."

https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8718154

**Ley 14.908, artículo 3, inciso final**: "Para los efectos de decretar los alimentos cuando un menor los solicite de su padre o madre, se presumirá que el alimentante tiene los medios para otorgarlos."

https://www.bcn.cl/leychile/navegar?idNorma=27977&idParte=7175827

Esto significa que la pensión debe cubrir lo necesario para que el hijo subsista adecuadamente según su posición social, incluyendo educación básica, media y profesional u oficio hasta los veintiún años (o veintiocho si estudia). El juez no aplica un porcentaje fijo del sueldo del alimentante, sino que evalúa las necesidades concretas del hijo y la capacidad económica del padre o madre obligado. Cuando el menor demanda, la ley presume que el alimentante tiene recursos, invirtiendo la carga de la prueba.

#### Explicación

**Elementos que el juez pondera:**

1. **Necesidades del alimentario (hijo):** Gastos de alimentación, vestuario, vivienda, salud, educación, recreación, transporte y todo lo que requiera para su desarrollo integral. Se consideran las necesidades actuales y previsibles (por ejemplo, matrícula escolar, tratamientos médicos, actividades extraprogramáticas). La posición social del hijo se determina por el nivel de vida que tenía antes de la separación de los padres o por el estándar que corresponde a su familia.

2. **Facultades económicas del alimentante:** Ingresos líquidos (sueldo, honorarios, rentas, pensiones), patrimonio (bienes raíces, vehículos, inversiones), capacidad de trabajo y eventuales cargas familiares (otros hijos, cónyuge). La presunción legal del artículo 3 de la Ley 14.908 obliga al demandado a acreditar que carece de medios o que estos son insuficientes; si no lo hace, el juez puede fijar la pensión igualmente.

3. **Proporcionalidad:** La pensión no puede agotar los recursos del alimentante ni dejarlo en la indigencia, pero tampoco puede ser simbólica si tiene capacidad de pago. El juez busca un equilibrio que asegure el interés superior del niño sin desconocer las obligaciones del alimentante con otros hijos o su propia subsistencia.

**Regla general:** No existe un porcentaje legal mínimo ni máximo. En la práctica, las pensiones suelen oscilar entre el 20% y el 40% del ingreso líquido del alimentante por cada hijo, pero esto es solo una referencia: el juez puede fijar montos mayores o menores según las circunstancias. Si el alimentante tiene ingresos variables (trabajador independiente, comisionista), el juez puede fijar una pensión en UF o UTM para evitar que fluctúe mensualmente.

**Alcance de los alimentos:** Comprenden todo lo necesario para la subsistencia adecuada del hijo: alimentación, habitación, vestuario, salud, educación básica y media, y educación profesional u oficio. La educación superior o técnica está incluida hasta los veintiocho años si el hijo estudia efectivamente. También se consideran gastos extraordinarios (cirugías, tratamientos prolongados, útiles escolares, uniformes) que pueden demandarse por separado o incluirse en la pensión mensual.

**Duración:** Los alimentos se devengan hasta que el hijo cumpla veintiún años, salvo que estudie una profesión u oficio (hasta los veintiocho años), que tenga una incapacidad física o mental que le impida subsistir por sí mismo, o que el juez los considere indispensables por circunstancias calificadas (artículo 332 del Código Civil).

**Modificación:** La pensión puede aumentarse, rebajarse o cesar si cambian las circunstancias que legitimaron la demanda (aumento o disminución de ingresos del alimentante, nuevas necesidades del hijo, cambio en la situación de quien tiene el cuidado personal). La modificación se solicita ante el mismo tribunal que dictó la resolución original o ante el del nuevo domicilio del alimentario.

#### Ejemplo o cálculo

**Supuesto:** Padre con ingreso líquido mensual de $1.200.000, sin otras cargas familiares. Hijo de 8 años que vive con la madre, quien trabaja y gana $800.000 líquidos. Necesidades del hijo: $450.000 mensuales (alimentación $150.000, arriendo proporcional $120.000, vestuario $40.000, colegio $80.000, salud $30.000, recreación y transporte $30.000).

**Cálculo orientativo:**

- Necesidad total del hijo: $450.000.
- Capacidad de la madre (asumiendo que aporta proporcionalmente a su ingreso): $800.000 / ($800.000 + $1.200.000) = 40% de las necesidades = $180.000.
- Capacidad del padre: 60% de las necesidades = $270.000.

El juez podría fijar la pensión en $270.000 mensuales (22,5% del ingreso del padre), o redondear a $300.000 considerando gastos extraordinarios previsibles. Si el padre acredita que tiene otro hijo menor a quien debe alimentos, el juez podría rebajar la pensión a $200.000 o $220.000, distribuyendo su capacidad entre ambos hijos.

**Variante:** Si el padre es trabajador independiente con ingresos variables (promedio $1.500.000 mensuales, pero con meses de $800.000 y otros de $2.200.000), el juez puede fijar la pensión en 6,5 UF mensuales (equivalente a $266.605 al valor de hoy), para evitar que la pensión fluctúe y asegurar estabilidad al hijo.

#### Qué puedes hacer

1. **Mediación previa obligatoria:** Antes de demandar alimentos, debes asistir a mediación familiar en un centro licitado (gratuito) o privado. La mediación es obligatoria salvo que exista condena o anotación por violencia intrafamiliar entre las partes, o medida cautelar vigente. Si no se llega a acuerdo o la otra parte no asiste, el mediador entrega un certificado de mediación frustrada, que habilita para demandar (artículo 106, Ley 19.968).

2. **Presentar la demanda:** Ante el juzgado de familia del domicilio del hijo (alimentario), con patrocinio de abogado. Si no tienes recursos, solicita abogado de turno en el mismo tribunal o acude a la Corporación de Asistencia Judicial. La demanda debe indicar las necesidades del hijo (detalladas y, si es posible, respaldadas con boletas, recibos, cotizaciones) y los ingresos o patrimonio del alimentante (liquidaciones de sueldo, declaraciones de impuestos, información de empleador, bienes a su nombre).

3. **Reunir antecedentes:** Certificado de nacimiento del hijo, certificado de mediación frustrada, comprobantes de gastos del hijo (colegio, salud, arriendo, alimentación, vestuario), antecedentes de ingresos del alimentante (si los tienes: liquidaciones, contratos, declaraciones juradas). Si el alimentante oculta sus ingresos, puedes solicitar al tribunal que oficie a su empleador, al Servicio de Impuestos Internos, a instituciones financieras o al Registro Civil (para conocer bienes inscritos).

4. **Solicitar alimentos provisorios:** En la demanda, pide que el juez fije alimentos provisorios desde la primera audiencia, mientras dura el juicio. El juez puede decretarlos de inmediato si las necesidades del hijo son urgentes y hay antecedentes que hagan verosímil la obligación del alimentante.

5. **Asistir a las audiencias:** Debes comparecer personalmente a la audiencia preparatoria y a la de juicio, salvo que el juez te exima por motivos fundados. Si vives en otra región, puedes contestar por escrito ante el juzgado de familia de tu domicilio y designar un representante para las audiencias (artículo 60, Ley 19.968).

6. **Ejecutar la sentencia:** Una vez fijada la pensión, si el alimentante no paga, puedes iniciar ejecución ante el mismo tribunal o ante el del nuevo domicilio del hijo. La resolución que fija alimentos tiene mérito ejecutivo (artículo 7, Ley 14.908). Las medidas de apremio incluyen retención judicial de la pensión del sueldo del alimentante, arresto hasta por quince días, suspensión de licencia de conducir y prohibición de salida del país.

#### Qué verificar antes de actuar

- **Domicilio del hijo:** La demanda se presenta en el juzgado de familia del lugar donde vive el hijo, no del alimentante. Si el hijo cambió de domicilio por abandono de hogar del alimentante, la demanda se presenta en el domicilio de este último.

- **Vigencia de la mediación:** El certificado de mediación frustrada tiene una vigencia de sesenta días corridos (no verificado en esta búsqueda) para presentar la demanda. Verifica el plazo en el certificado que te entregue el mediador.

- **Ingresos y patrimonio del alimentante:** Reúne toda la información disponible antes de demandar. Si el alimentante es trabajador dependiente, su empleador está obligado a informar al tribunal. Si es independiente, el juez puede oficiar al SII o requerir sus declaraciones de impuestos.

- **Gastos del hijo:** Detalla y respalda cada partida de gasto. Los gastos genéricos ("necesita $500.000") son menos convincentes que los específicos ("colegio $120.000, salud $40.000, alimentación $180.000, vestuario $50.000, transporte $30.000, recreación $20.000, útiles escolares $15.000 mensuales promedio").

- **Plazos de ejecución:** Si ya tienes una sentencia y el alimentante no paga, no dejes pasar el tiempo. Las pensiones insolutas (atrasadas) prescriben en tres años desde que se hicieron exigibles (no verificado en esta búsqueda). Ejecuta apenas se produzca el primer incumplimiento.

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### c06-prescripcion — consulta: ¿En qué plazo prescribe una deuda en Chile?

<details><summary>Material enviado al modelo (11 normas, 0 fallos o dictámenes, 1 artículos de doctrina; 5 normas descartadas por materia)</summary>

- Código Civil, Artículo 2492
- Código Civil, Artículo 2514
- Código Civil, Artículo 2515
- Código Civil, Artículo 2518
- Código Civil, Artículo 2516
- Código Civil, Artículo 2517
- Código Civil, Artículo 2519
- Código Civil, Artículo 2520
- Código Civil, Artículo 2521
- Ley 18.092, dicta nuevas normas sobre letra de cambio y pagare y deroga disposiciones del codigo de comercio, Artículo 98
- Ley N° 18.101 sobre Arrendamiento de Predios Urbanos, Artículo 3
- Doctrina: Pizarro Wilson, Carlos, "LA NOCIÓN Y FUNCIÓN DE LA EXIGIBILIDAD PARA LA FIJACIÓN DEL PUNTO DE PARTIDA DE LA PRESCRIPCIÓN EXTINTIVA DE LAS OBLIGACIONES", Revista chilena de derecho, vol. 47, N° 2, (2020), pp. 543-563, DOI: 10.4067/s0718-34372020000200543.
- ~~Código del Trabajo, Artículo 67~~ (materia laboral ajena a civil/procesal_civil/comercial/arrendamiento/familia)
- ~~Código del Trabajo, Artículo 159~~ (materia laboral ajena a civil/procesal_civil/comercial/arrendamiento/familia)
- ~~Ley N° 19.496 sobre Protección de los Derechos de los Consumidores, Artículo 3 bis~~ (materia consumidor ajena a civil/procesal_civil/comercial/arrendamiento/familia)
- ~~Constitución Política de la República de Chile, Artículo 19, N° 1~~ (materia constitucional ajena a civil/procesal_civil/comercial/arrendamiento/familia)
- ~~Constitución Política de la República de Chile, Artículo 19, N° 24~~ (materia constitucional ajena a civil/procesal_civil/comercial/arrendamiento/familia)

Versión anterior (main):
- Código Civil, Artículo 2514
- Código Civil, Artículo 2515
- Código Civil, Artículo 2516
- Código Civil, Artículo 2517
- Código Civil, Artículo 2518
- Código Civil, Artículo 2519
- Código Civil, Artículo 2520
- Ley N° 18.101 sobre Arrendamiento de Predios Urbanos, Artículo 3
- Código del Trabajo, Artículo 67
- Código del Trabajo, Artículo 159
- Ley N° 19.496 sobre Protección de los Derechos de los Consumidores, Artículo 3 bis
- Constitución Política de la República de Chile, Artículo 19, N° 1
- Constitución Política de la República de Chile, Artículo 19, N° 24
- Código Civil, (artículo no identificado)

</details>

#### Respuesta corta

En Chile, las deudas prescriben en **tres años** si se cobran por la vía ejecutiva y en **cinco años** si se cobran por la vía ordinaria, contados desde que la obligación se hizo exigible (Código Civil, artículos 2514 y 2515). Existen plazos especiales más breves para ciertos créditos (letras de cambio, honorarios profesionales, impuestos).

#### Qué dice la ley

El Código Civil regula la prescripción extintiva en los artículos 2492 y siguientes. El artículo 2492 la define:

"La prescripción es un modo de adquirir las cosas ajenas, o de extinguir las acciones y derechos ajenos, por haberse poseído las cosas o no haberse ejercido dichas acciones y derechos durante cierto lapso de tiempo, y concurriendo los demás requisitos legales. Una acción o derecho se dice prescribir cuando se extingue por la prescripción."
https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8720564

El artículo 2514 establece el punto de partida del cómputo:

"La prescripción que extingue las acciones y derechos ajenos exige solamente cierto lapso de tiempo, durante el cual no se hayan ejercido dichas acciones. Se cuenta este tiempo desde que la obligación se haya hecho exigible."
https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8720589

El artículo 2515 fija los plazos generales:

"Este tiempo es en general de tres años para las acciones ejecutivas y de cinco para las ordinarias. La acción ejecutiva se convierte en ordinaria por el lapso de tres años, y convertida en ordinaria durará solamente otros dos."
https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8720591

En lenguaje simple: la prescripción extingue el derecho del acreedor a cobrar judicialmente una deuda si no lo ejerce dentro de cierto plazo. Ese plazo depende de la vía de cobro: tres años si el acreedor tiene título ejecutivo (pagaré, cheque, sentencia firme, escritura pública de reconocimiento de deuda) y cinco años si solo tiene un documento privado o ningún título que permita juicio ejecutivo. Transcurridos tres años desde que la deuda se hizo exigible, el acreedor pierde la vía ejecutiva pero conserva la vía ordinaria por dos años más, completando los cinco.

#### Explicación

**Punto de partida del cómputo:** El plazo se cuenta desde que la obligación se hizo exigible, es decir, desde que el acreedor pudo legalmente exigir el pago. En una deuda a plazo, desde el vencimiento del plazo; en una deuda pura y simple (sin plazo ni condición), desde que se contrajo; en una deuda sujeta a condición suspensiva, desde que se cumple la condición. La exigibilidad es el momento en que nace el derecho del acreedor a demandar.

**Plazos generales:**
- **Tres años** para la acción ejecutiva: el acreedor que tiene un título ejecutivo (pagaré, letra de cambio, cheque, sentencia firme, escritura pública de reconocimiento de deuda, confesión judicial) puede demandar en juicio ejecutivo dentro de tres años desde la exigibilidad.
- **Cinco años** para la acción ordinaria: el acreedor que no tiene título ejecutivo, o que dejó pasar los tres años, puede demandar en juicio ordinario dentro de cinco años desde la exigibilidad. Si tenía título ejecutivo y pasaron tres años, la acción ejecutiva se convierte en ordinaria y dura solo dos años más (total cinco).

**Plazos especiales más breves:**
- **Un año** para las acciones cambiarias del portador de una letra de cambio o pagaré, contado desde el vencimiento del documento (Ley 18.092, artículo 98).
https://www.bcn.cl/leychile/navegar?idNorma=29517&idParte=8529597
- **Dos años** para honorarios de profesionales liberales (abogados, médicos, ingenieros, profesores, etc.) (Código Civil, artículo 2521).
https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8720597
- **Tres años** para acciones a favor o en contra del Fisco y municipalidades por impuestos (Código Civil, artículo 2521).

**Interrupción de la prescripción:** El plazo se detiene y vuelve a cero si ocurre alguno de estos hechos (artículo 2518):
https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8720594
- **Interrupción natural:** el deudor reconoce la deuda, expresa o tácitamente (por ejemplo, paga una cuota, pide prórroga, firma un nuevo pagaré por el saldo).
- **Interrupción civil:** el acreedor presenta demanda judicial. La interrupción se produce con la notificación válida de la demanda al deudor. Si la demanda se desestima por abandono del procedimiento o por incompetencia del tribunal, la interrupción no produce efecto.

**Suspensión de la prescripción:** El plazo se detiene (no corre) mientras subsista la causal de suspensión, y luego continúa. El artículo 2520 suspende la prescripción extintiva solo a favor de menores de edad y personas bajo interdicción por demencia o prodigalidad (las mismas del artículo 2509 números 1 y 2). Transcurridos diez años desde la exigibilidad, la prescripción opera de todos modos, sin considerar la suspensión.
https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8720596

**Obligaciones accesorias:** La acción hipotecaria y las demás que proceden de una obligación accesoria (prenda, fianza) prescriben junto con la obligación principal (artículo 2516).
https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8720592

**Pluralidad de acreedores o deudores:** La interrupción que favorece a uno de varios acreedores no aprovecha a los otros, ni la que perjudica a uno de varios deudores perjudica a los otros, salvo que haya solidaridad (artículo 2519).
https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8720595

#### Ejemplo o cálculo

**Caso 1 (deuda con pagaré):** El 1 de octubre de 2021 Juan firma un pagaré a favor de Pedro por $2.000.000, con vencimiento el 1 de octubre de 2022. Pedro no cobra. El plazo de prescripción de la acción ejecutiva (tres años) comienza a correr el 2 de octubre de 2022 (día siguiente al vencimiento) y vence el 1 de octubre de 2025. Si Pedro demanda el 2 de octubre de 2025, ya no puede usar juicio ejecutivo, pero puede demandar en juicio ordinario hasta el 1 de octubre de 2027 (dos años más). Si no demanda antes de esa fecha, la deuda prescribe completamente.

**Caso 2 (deuda sin título ejecutivo):** El 15 de marzo de 2023 María presta $1.500.000 a José, quien se compromete a devolver el dinero el 15 de marzo de 2024, sin firmar pagaré ni escritura pública. María solo tiene un comprobante de transferencia bancaria. El plazo de prescripción de la acción ordinaria (cinco años) comienza a correr el 16 de marzo de 2024 y vence el 15 de marzo de 2029. Si María demanda antes de esa fecha, interrumpe la prescripción.

**Caso 3 (honorarios de abogado):** El 10 de enero de 2025 un abogado termina de prestar servicios a un cliente y le cobra $800.000. El cliente no paga. El plazo de prescripción es de dos años (artículo 2521), contado desde que los honorarios se hicieron exigibles (10 de enero de 2025). Prescribe el 10 de enero de 2027. Si el cliente reconoce la deuda el 5 de enero de 2027 (por ejemplo, en un correo electrónico), interrumpe la prescripción y el plazo de dos años vuelve a correr desde esa fecha.

#### Doctrina

Carlos Pizarro Wilson analiza el concepto de exigibilidad como punto de partida de la prescripción extintiva. Señala que la exigibilidad no es un concepto unívoco: depende de la estructura de cada obligación (plazo, condición, modalidad). La regla del artículo 2514 ("desde que la obligación se haya hecho exigible") exige determinar en cada caso cuándo nace el derecho del acreedor a demandar. En obligaciones de tracto sucesivo (por ejemplo, rentas de arrendamiento), cada cuota tiene su propia exigibilidad y su propio plazo de prescripción. En obligaciones sujetas a condición suspensiva, la prescripción no corre mientras la condición no se cumple, porque la obligación no es exigible. El autor critica la aplicación mecánica de plazos sin atender a la naturaleza de la obligación.

Pizarro Wilson, Carlos, "LA NOCIÓN Y FUNCIÓN DE LA EXIGIBILIDAD PARA LA FIJACIÓN DEL PUNTO DE PARTIDA DE LA PRESCRIPCIÓN EXTINTIVA DE LAS OBLIGACIONES", *Revista chilena de derecho*, vol. 47, N° 2, (2020), pp. 543-563.
http://www.scielo.cl/pdf/rchilder/v47n2/0718-3437-rchilder-47-02-543.pdf

#### Qué puedes hacer

1. **Determina la fecha de exigibilidad de tu deuda:** revisa el contrato, pagaré, factura o documento que acredite la obligación. Si la deuda tiene plazo, la exigibilidad es el día siguiente al vencimiento. Si no tiene plazo, es exigible desde que se contrajo.

2. **Calcula el plazo de prescripción:** si tienes título ejecutivo (pagaré, cheque, escritura pública, sentencia), tres años para la vía ejecutiva y cinco para la ordinaria. Si no tienes título ejecutivo, cinco años para la vía ordinaria. Si se trata de honorarios profesionales, dos años. Si es una letra de cambio o pagaré y eres el portador, un año.

3. **Verifica si hubo interrupción:** revisa si el deudor reconoció la deuda (correos, mensajes, pagos parciales, firma de un nuevo documento) o si tú presentaste demanda judicial. Cada interrupción reinicia el plazo.

4. **Si eres acreedor y el plazo está por vencer:** presenta demanda antes del vencimiento. Puedes hacerlo ante el juzgado de letras en lo civil del domicilio del deudor (juicio ejecutivo si tienes título, ordinario si no). Si el monto es inferior a 10 UTM (actualmente $717.210), puedes demandar ante el juzgado de policía local por procedimiento monitorio o verbal, según corresponda.

5. **Si eres deudor y la deuda prescribió:** la prescripción no opera de oficio; debes alegarla como excepción en el juicio que te entable el acreedor, o como acción (demanda de prescripción) si el acreedor no ha demandado pero te amenaza con hacerlo. Reúne los antecedentes que acrediten la fecha de exigibilidad y el transcurso del plazo sin interrupción.

6. **Asesoría gratuita:** si no puedes pagar abogado, acude a la Corporación de Asistencia Judicial de tu región o a las clínicas jurídicas de universidades.

#### Qué verificar antes de actuar

- **Fecha exacta de exigibilidad:** un error de un día puede significar que la prescripción aún no ha operado o que ya operó. Revisa el documento original.
- **Interrupciones:** cualquier reconocimiento del deudor (pago parcial, correo, mensaje) o demanda judicial reinicia el plazo. Revisa tu historial de comunicaciones y pagos.
- **Tipo de obligación:** si es una deuda cambiaria (letra, pagaré), honorarios profesionales o impuestos, el plazo es más breve que el general.
- **Suspensión:** si el acreedor o deudor es menor de edad o está bajo interdicción, el plazo puede estar suspendido (no corre) hasta que cese la incapacidad o hasta que transcurran diez años.
- **Conversión de acción ejecutiva en ordinaria:** si dejaste pasar los tres años con título ejecutivo, aún tienes dos años más para demandar en juicio ordinario, pero deberás probar la existencia de la deuda en un juicio más largo y costoso.

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### c07-posesion — consulta: ¿Qué es la posesión en Chile?

<details><summary>Material enviado al modelo (20 normas, 0 fallos o dictámenes, 1 artículos de doctrina; 1 normas descartadas por materia)</summary>

- Código Civil, Artículo 700
- Código Civil, Artículo 702
- Código Civil, Artículo 714
- Código Civil, Artículo 724
- Código Civil, Artículo 730
- Código Civil, Artículo 2492
- Código Civil, Artículo 2498
- Código Civil, Artículo 2508
- Código Civil, Artículo 2511
- Código Civil, Artículo 701
- Código Civil, Artículo 703
- Código Civil, Artículo 704
- DFL 2, estatutos del colegio de administradores publicos, Artículo 21
- DFL 1, estatutos del colegio de kinesiologos, Artículo 21
- DFL 1, fija dependencia, atribuciones y las plantas del personal de la direccion de asuntos indigenas, Artículo 6
- DFL 1, fija dependencia, atribuciones y las plantas del personal de la direccion de asuntos indigenas, Artículo 7
- DFL 1, estatuto del personal de policia de investigaciones de chile., Artículo 129
- DFL 1, estatuto del personal de policia de investigaciones de chile., Artículo 35
- DFL 1, estatuto del personal de policia de investigaciones de chile., Artículo 133
- DFL 2, señala normas complementarias relativas a la constitucion y funcionamiento de los tribunales agrarios provinciales y de apelaciones, creados en el titulo viii de la ley 16.640, sobre reforma agraria, Artículo 23
- Doctrina: Serrano, Manuel Francisco, "Los elementos constitutivos del concepto de pena natural", Política criminal, vol. 17, N° 34, (2022), pp. 856-884, DOI: 10.4067/s0718-33992022000200856.
- ~~DFL 1, estatuto del personal de policia de investigaciones de chile., Artículo 17 bis~~ (sin relación léxica (0 términos en común))

Versión anterior (main):
- Código Civil, Artículo 700
- Código Civil, Artículo 701
- Código Civil, Artículo 702
- Código Civil, Artículo 703
- Código Civil, Artículo 704
- Código Civil, Artículo 705
- Código Civil, Artículo 724
- Código Civil, Artículo 730
- Código Civil, Artículo 2492
- Código del Trabajo, Artículo 67
- Constitución Política de la República de Chile, Artículo 19, N° 1
- Constitución Política de la República de Chile, Artículo 19, N° 24
- Código Civil, (artículo no identificado)

</details>

#### Respuesta corta

La posesión es la tenencia de una cosa determinada con ánimo de señor o dueño, sea que quien se da por tal la tenga por sí mismo o por medio de otra persona. El poseedor es reputado dueño mientras otra persona no justifique serlo, y la posesión puede conducir a adquirir el dominio por prescripción.

#### Qué dice la ley

El **Código Civil, artículo 700**, define la posesión:

> "La posesión es la tenencia de una cosa determinada con ánimo de señor o dueño, sea que el dueño o el que se da por tal tenga la cosa por sí mismo, o por otra persona que la tenga en lugar y a nombre de él. El poseedor es reputado dueño, mientras otra persona no justifica serlo."

https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8718570

La posesión es un hecho jurídico que se compone de dos elementos: la **tenencia material** de la cosa (corpus) y el **ánimo de señor o dueño** (animus). Este ánimo significa que quien posee se comporta como si fuera el dueño, sin reconocer dominio ajeno. La posesión puede ejercerse directamente o a través de otra persona que tenga la cosa en nombre del poseedor.

El **artículo 701** agrega que "se puede poseer una cosa por varios títulos" (https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8718573), lo que significa que una misma cosa puede ser objeto de posesión fundada en distintos antecedentes jurídicos.

#### Explicación

##### Elementos de la posesión

La posesión requiere dos elementos concurrentes:

1. **Corpus (tenencia material)**: la aprehensión física o control de la cosa. No es necesario tener la cosa en la mano en todo momento; basta con tenerla bajo control efectivo, incluso a través de otra persona que la detente en nombre del poseedor.

2. **Animus (ánimo de señor o dueño)**: la intención de comportarse como dueño, sin reconocer dominio ajeno. Este elemento es subjetivo y se presume cuando existe el corpus, salvo que conste que la tenencia es en nombre de otro.

##### Diferencia con la mera tenencia

El **artículo 714** distingue la posesión de la **mera tenencia**:

> "Se llama mera tenencia la que se ejerce sobre una cosa, no como dueño, sino en lugar o a nombre del dueño. El acreedor prendario, el secuestre, el usufructuario, el usuario, el que tiene el derecho de habitación, son meros tenedores de la cosa empeñada, secuestrada, o cuyo usufructo, uso o habitación les pertenece. Lo dicho se aplica generalmente a todo el que tiene una cosa reconociendo dominio ajeno."

https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8718588

El mero tenedor tiene el corpus pero carece del animus: reconoce que la cosa es ajena y la detenta en nombre de otro. Ejemplos típicos son el arrendatario, el comodatario, el depositario y el usufructuario. La mera tenencia no conduce a la prescripción adquisitiva.

##### Clases de posesión

El **artículo 702** clasifica la posesión en **regular** e **irregular**:

> "La posesión puede ser regular o irregular. Se llama posesión regular la que procede de justo título y ha sido adquirida de buena fe; aunque la buena fe no subsista después de adquirida la posesión. Se puede ser por consiguiente poseedor regular y poseedor de mala fe, como viceversa el poseedor de buena fe puede ser poseedor irregular. Si el título es translaticio de dominio, es también necesaria la tradición. La posesión de una cosa a ciencia y paciencia del que se obligó a entregarla, hará presumir la tradición; a menos que ésta haya debido efectuarse por la inscripción del título."

https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8718574

**Posesión regular**: requiere justo título y buena fe inicial. Si el título es translaticio de dominio (venta, permuta, donación), también se exige tradición. La buena fe es la conciencia de haber adquirido la cosa por medios legítimos, exentos de fraude y de todo otro vicio. Esta posesión permite adquirir el dominio por prescripción ordinaria.

**Posesión irregular**: es aquella a la que le falta justo título o buena fe inicial. Igualmente habilita para adquirir el dominio, pero por prescripción extraordinaria, que exige mayor plazo.

##### Justo título

El **artículo 703** define el justo título como constitutivo o translaticio de dominio. Son constitutivos la ocupación, la accesión y la prescripción. Son translaticios los que por su naturaleza sirven para transferir el dominio: venta, permuta, donación entre vivos, sentencias de adjudicación en juicios divisorios y actos legales de partición.

https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8718575

El **artículo 704** enumera los títulos que **no son justos**:

1. El falsificado (no otorgado realmente por quien se pretende).
2. El conferido por un mandatario o representante sin serlo.
3. El que adolece de un vicio de nulidad (por ejemplo, enajenación sin autorización judicial cuando era necesaria).
4. El meramente putativo (el del heredero aparente que no es heredero, el del legatario cuyo legado fue revocado).

Sin embargo, al heredero putativo a quien se haya otorgado la posesión efectiva por decreto judicial o resolución administrativa le sirve de justo título ese decreto o resolución; al legatario putativo, el acto testamentario legalmente ejecutado.

https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8718576

##### Posesión inscrita (bienes raíces)

El **artículo 724** establece una regla especial para los bienes raíces:

> "Si la cosa es de aquellas cuya tradición deba hacerse por inscripción en el Registro del Conservador, nadie podrá adquirir la posesión de ella sino por este medio."

https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8718600

En Chile, la posesión de bienes raíces se adquiere, conserva y pierde mediante la inscripción en el Registro de Propiedad del Conservador de Bienes Raíces. La inscripción es requisito, prueba y garantía de la posesión. Mientras subsista la inscripción, el que se da por dueño no pierde la posesión, aunque otro ocupe materialmente el inmueble.

El **artículo 730** refuerza esta regla:

> "Si el que tiene la cosa en lugar y a nombre de otro, la usurpa dándose por dueño de ella, no se pierde por una parte la posesión ni se adquiere por otra; a menos que el usurpador enajene a su propio nombre la cosa. En este caso la persona a quien se enajena adquiere la posesión de la cosa, y pone fin a la posesión anterior. Con todo, si el que tiene la cosa en lugar y a nombre de un poseedor inscrito, se da por dueño de ella y la enajena, no se pierde por una parte la posesión ni se adquiere por otra, sin la competente inscripción."

https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8718606

El mero tenedor de un inmueble inscrito no puede, por su sola voluntad, transformarse en poseedor ni hacer perder la posesión al poseedor inscrito, aunque enajene la cosa a un tercero. La nueva inscripción es indispensable.

##### Efectos de la posesión

1. **Presunción de dominio**: el artículo 700 dispone que "el poseedor es reputado dueño, mientras otra persona no justifica serlo". Esta presunción simplemente legal invierte la carga de la prueba: quien alega ser dueño debe probarlo; el poseedor no necesita probar su dominio.

2. **Prescripción adquisitiva**: la posesión continuada durante cierto tiempo, con los demás requisitos legales, permite adquirir el dominio por prescripción. El **artículo 2492** define la prescripción como "un modo de adquirir las cosas ajenas, o de extinguir las acciones y derechos ajenos, por haberse poseído las cosas o no haberse ejercido dichas acciones y derechos durante cierto lapso de tiempo, y concurriendo los demás requisitos legales" (https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8720564).

3. **Acciones posesorias**: el poseedor puede defender su posesión mediante acciones posesorias (querella de amparo, querella de restitución, querella de restablecimiento) contra quien la perturbe o despoje, sin necesidad de probar el dominio.

##### Plazos de prescripción adquisitiva

El **artículo 2498** establece que "se gana por prescripción el dominio de los bienes corporales raíces o muebles, que están en el comercio humano, y se han poseído con las condiciones legales. Se ganan de la misma manera los otros derechos reales que no están especialmente exceptuados" (https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8720572).

**Prescripción ordinaria** (artículo 2508): requiere posesión regular (justo título y buena fe inicial). El plazo es de **dos años para muebles** y **cinco años para bienes raíces** (https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8720583).

**Prescripción extraordinaria** (artículo 2511): no requiere título ni buena fe; basta la posesión irregular. El plazo es de **diez años contra toda persona** y no se suspende (https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8720586). La suspensión de la prescripción ordinaria a favor de ciertas personas (menores, dementes, etc.) no opera en la extraordinaria.

#### Ejemplo o cálculo

**Caso 1 (posesión regular de bien raíz)**: Juan compra un inmueble a Pedro mediante escritura pública de compraventa el 1 de marzo de 2021. La compraventa se inscribe en el Conservador de Bienes Raíces el 10 de marzo de 2021. Juan ignora que Pedro no era el verdadero dueño (buena fe). Juan tiene posesión regular desde el 10 de marzo de 2021 (fecha de la inscripción, que es la tradición). Si mantiene esa posesión inscrita de forma continua, ininterrumpida y sin reconocer dominio ajeno, adquirirá el dominio por prescripción ordinaria el 10 de marzo de 2026 (cinco años después).

**Caso 2 (posesión irregular de bien raíz)**: María ocupa un sitio eriazo desde el 15 de enero de 2016, lo cierra, construye una mediagua y vive en él. No tiene título alguno. Su posesión es irregular (sin justo título). Si mantiene esa posesión material de forma continua, pacífica y pública durante diez años, podrá alegar prescripción extraordinaria el 15 de enero de 2026. Sin embargo, como se trata de un bien raíz, para que la posesión sea oponible a terceros y conduzca a la prescripción, María deberá inscribir su posesión (por ejemplo, mediante una inscripción de posesión efectiva o una sentencia que declare la prescripción, la que se inscribirá). La ocupación material sin inscripción no constituye posesión inscrita y no hace perder la posesión al titular inscrito.

**Caso 3 (mera tenencia)**: Luis arrienda una casa a Carmen por tres años. Luis es mero tenedor: tiene el corpus (vive en la casa) pero no el animus (reconoce que la casa es de Carmen). Aunque Luis permanezca en la casa por diez años, no adquiere la posesión ni puede ganar el dominio por prescripción, porque la mera tenencia no muda en posesión por el solo transcurso del tiempo ni por acto de voluntad del mero tenedor (artículo 730, inciso segundo, en relación con el artículo 716, no citado en el material pero aplicable).

#### Qué puedes hacer

Si necesitas acreditar o defender tu posesión, o alegar prescripción adquisitiva:

1. **Reunir antecedentes de la posesión**: escrituras, inscripciones en el Conservador de Bienes Raíces, recibos de contribuciones, cuentas de servicios básicos a tu nombre, fotografías, testimonios de vecinos que acrediten la ocupación continua, pacífica y pública del bien.

2. **Verificar las inscripciones**: solicitar un certificado de dominio vigente y de hipotecas y gravámenes en el Conservador de Bienes Raíces correspondiente al inmueble. Este certificado muestra quién figura como poseedor inscrito y si hay embargos, hipotecas u otros gravámenes.

3. **Acciones posesorias**: si alguien perturba o despoja tu posesión, puedes interponer una querella posesoria ante el juzgado de letras en lo civil del lugar donde está el bien, dentro del plazo de un año desde la perturbación o el despojo. No necesitas probar el dominio, solo la posesión y el hecho de la perturbación o despojo.

4. **Acción de prescripción adquisitiva**: si has poseído el bien durante el plazo legal (cinco o diez años, según el caso), puedes demandar la declaración judicial de prescripción adquisitiva ante el juzgado de letras en lo civil del lugar donde está el inmueble. La sentencia que acoge la demanda se inscribe en el Conservador y te convierte en dueño inscrito.

5. **Asesoría jurídica**: consulta a un abogado para evaluar si tu situación constituye posesión o mera tenencia, si la posesión es regular o irregular, si se han cumplido los plazos de prescripción y si existen interrupciones o suspensiones que deban considerarse.

6. **Corporación de Asistencia Judicial**: si no cuentas con recursos para contratar un abogado particular, puedes solicitar asesoría gratuita en la Corporación de Asistencia Judicial de tu región, si cumples los requisitos de vulnerabilidad económica.

#### Qué verificar antes de actuar

- **Distinguir posesión de mera tenencia**: si reconoces dominio ajeno (eres arrendatario, comodatario, depositario, usufructuario), no eres poseedor y no puedes adquirir por prescripción. La mera tenencia no se transforma en posesión por el solo transcurso del tiempo.

- **Inscripción en el Conservador (bienes raíces)**: la posesión de inmuebles se adquiere, conserva y pierde por inscripción. La ocupación material sin inscripción no constituye posesión inscrita y no hace perder la posesión al titular inscrito. Verifica siempre el estado de las inscripciones antes de alegar posesión o prescripción.

- **Plazos de prescripción**: cinco años para prescripción ordinaria de bienes raíces (con justo título y buena fe), diez años para prescripción extraordinaria (sin título ni buena fe). Los plazos se cuentan desde que se inició la posesión (fecha de la inscripción en el caso de posesión regular de inmuebles). Verifica si ha habido interrupciones (demanda judicial notificada, reconocimiento del derecho ajeno) o suspensiones (solo en prescripción ordinaria, a favor de menores, dementes, etc.).

- **Buena fe y justo título**: para alegar prescripción ordinaria, debes haber adquirido la posesión de buena fe (ignorando que lesionabas derecho ajeno) y con justo título (un título que por su naturaleza sirve para transferir el dominio y que no adolece de vicios de nulidad, falsedad o falta de representación). La buena fe se presume y basta que exista al momento de adquirir la posesión.

- **Continuidad de la posesión**: la posesión debe ser continua (sin abandonos), pacífica (sin violencia) y pública (no clandestina). Si hubo interrupciones, el plazo de prescripción se cuenta desde cero después de cada interrupción.

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### c08-me-deben — consulta: Me deben plata hace años, ¿todavía puedo cobrar?

<details><summary>Material enviado al modelo (12 normas, 0 fallos o dictámenes, 3 artículos de doctrina; 5 normas descartadas por materia)</summary>

- Código Civil, Artículo 2492
- Código Civil, Artículo 2514
- Código Civil, Artículo 2515
- Código Civil, Artículo 2518
- Código Civil, Artículo 2516
- Código Civil, Artículo 2517
- Código Civil, Artículo 2519
- Código Civil, Artículo 2520
- Ley 18.092, dicta nuevas normas sobre letra de cambio y pagare y deroga disposiciones del codigo de comercio, Artículo 98
- Código de Procedimiento Civil, Artículo 434
- Código de Procedimiento Civil, Artículo 441
- Código de Procedimiento Civil, Artículo 443
- Doctrina: Barría, Manuel, "EL INICIO DEL CÓMPUTO DEL PLAZO DE PRESCRIPCIÓN EXTINTIVA EN EL DERECHO SUCESORIO", Revista Chilena de Derecho Privado, (2024), DOI: 10.32995/s0718-80722024728.
- Doctrina: Munita Marambio, Renzo Esteban, "EL DIES A QUO DE LA PRESCRIPCIÓN EXTINTIVA EN EL CONTEXTO DE DAÑOS DERIVADOS DE PRODUCTOS SANITARIOS DEFECTUOSOS. UNA APROXIMACIÓN COMPARADA", Revista Chilena de Derecho Privado, (2024), DOI: 10.32995/s0718-80722024729.
- Doctrina: Pizarro Wilson, Carlos, "ACERCA DEL CÓMPUTO DEL PLAZO DE LA PRESCRIPCIÓN EXTINTIVA DE LA ACCIÓN DE INDEMNIZACIÓN CONTRACTUAL", Revista Chilena de Derecho Privado, (2024), DOI: 10.32995/s0718-80722024714.
- ~~Decreto 997, modifica arancel aduanero nacional, Artículo 5~~ (sin relación léxica (0 términos en común))
- ~~Decreto 1.019, modifica arancel aduanero nacional, Artículo 4~~ (sin relación léxica (0 términos en común))
- ~~Decreto 1.519, modifica arancel aduanero nacional de la republica de chile, Artículo 4~~ (sin relación léxica (0 términos en común))
- ~~Decreto 1.148, modifica arancel aduanero nacional de la república de chile, Artículo 5~~ (sin relación léxica (0 términos en común))
- ~~DFL 2, aprueba y tengase como oficial de la republica de chile el arancel aduanero que indica, Artículo tercero~~ (sin relación léxica (0 términos en común))

Versión anterior (main):
- Código Civil, Artículo 2514
- Código Civil, Artículo 2515
- Código Civil, Artículo 2516
- Código Civil, Artículo 2517
- Código Civil, Artículo 2518
- Código Civil, Artículo 2519
- Código Civil, Artículo 2520
- Código de Procedimiento Civil, Artículo 434
- Código de Procedimiento Civil, Artículo 441
- Código de Procedimiento Civil, Artículo 459
- Código del Trabajo, Artículo 163
- Código Civil, Artículo 1438
- Ley N° 18.101 sobre Arrendamiento de Predios Urbanos, Artículo 3
- Código Civil, (artículo no identificado)
- Código de Procedimiento Civil, (artículo no identificado)

</details>

#### Respuesta corta

Depende del tiempo transcurrido y del tipo de documento que respalde la deuda. Las acciones ejecutivas prescriben en tres años y las ordinarias en cinco, contados desde que la obligación se hizo exigible. Si el plazo ya corrió, perdiste la acción para exigir el pago judicialmente, salvo que el deudor haya reconocido la deuda o hayas interrumpido la prescripción con una demanda.

#### Qué dice la ley

El **Código Civil, artículo 2514** establece: "La prescripción que extingue las acciones y derechos ajenos exige solamente cierto lapso de tiempo, durante el cual no se hayan ejercido dichas acciones. Se cuenta este tiempo desde que la obligación se haya hecho exigible." (https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8720589)

Esto significa que el plazo comienza a correr desde el día en que pudiste exigir el pago. Si la deuda era de plazo vencido (por ejemplo, un préstamo con fecha de devolución), el cómputo parte desde esa fecha. Si no había plazo, desde que se contrajo la obligación.

El **Código Civil, artículo 2515** fija los plazos generales: "Este tiempo es en general de tres años para las acciones ejecutivas y de cinco para las ordinarias. La acción ejecutiva se convierte en ordinaria por el lapso de tres años, y convertida en ordinaria durará solamente otros dos." (https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8720591)

La **acción ejecutiva** es la que permite cobrar mediante embargo directo de bienes, sin discutir previamente la existencia de la deuda, cuando tienes un título ejecutivo (pagaré, cheque, escritura pública, sentencia). La **acción ordinaria** es la que exige probar primero la deuda en un juicio declarativo. Si dejaste pasar tres años sin cobrar, perdiste la vía ejecutiva; si dejaste pasar cinco, perdiste toda acción judicial.

El **Código Civil, artículo 2518** regula la interrupción: "La prescripción que extingue las acciones ajenas puede interrumpirse, ya natural, ya civilmente. Se interrumpe naturalmente por el hecho de reconocer el deudor la obligación, ya expresa, ya tácitamente. Se interrumpe civilmente por la demanda judicial; salvos los casos enumerados en el artículo 2503." (https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8720594)

La interrupción **natural** ocurre cuando el deudor reconoce la deuda (por ejemplo, paga una parte, pide prórroga, firma un nuevo documento). La interrupción **civil** se produce al presentar la demanda judicial. Ambas detienen el plazo y lo hacen comenzar de nuevo desde cero.

Para documentos cambiarios (letras de cambio y pagarés), la **Ley 18.092, artículo 98** establece un plazo especial: "El plazo de prescripción de las acciones cambiarias del portador contra los obligados al pago es de un año, contado desde el día del vencimiento del documento." (https://www.bcn.cl/leychile/navegar?idNorma=29517&idParte=8529597)

#### Explicación

**Requisitos para que opere la prescripción extintiva:**

1. **Transcurso del plazo legal** sin ejercer la acción (tres o cinco años según el caso, un año para documentos cambiarios).
2. **Inactividad del acreedor**: no haber demandado ni obtenido reconocimiento del deudor.
3. **Exigibilidad de la obligación**: el plazo corre solo desde que pudiste cobrar, no desde que nació la deuda si esta estaba sujeta a plazo o condición.

**Regla general y excepciones:**

- **Regla general**: tres años para acciones ejecutivas (cuando tienes título ejecutivo) y cinco para ordinarias (cuando solo tienes prueba de la deuda sin título formal).
- **Excepción cambiaria**: un año para letras de cambio y pagarés, contado desde el vencimiento.
- **Conversión de la acción**: si pasaron tres años, la acción ejecutiva se convierte en ordinaria y dura solo dos años más (total cinco). Después de cinco años, no hay acción judicial.

**Efectos de la prescripción:**

- **Extingue la acción**, no la obligación: el deudor sigue debiendo moralmente, pero tú no puedes exigirle el pago por vía judicial. Si paga voluntariamente después de prescrita la deuda, no puede pedir devolución (pago de lo debido).
- **Debe ser alegada**: la prescripción no opera de oficio; el deudor debe invocarla como excepción en el juicio ejecutivo o como defensa en el ordinario.

**Plazos y su cómputo:**

- **Inicio**: desde que la obligación se hizo exigible. Si era un préstamo a 30 días, desde el día 31. Si no había plazo, desde que se contrajo la deuda.
- **Suspensión**: solo en favor de menores de edad e incapaces (artículo 2520), pero con tope de diez años.
- **Interrupción natural**: cualquier acto del deudor que reconozca la deuda (pago parcial, carta pidiendo plazo, firma de nuevo pagaré). El plazo comienza de nuevo desde cero.
- **Interrupción civil**: presentación de la demanda judicial. El plazo se detiene mientras dure el juicio.

**Casos típicos:**

- **Préstamo sin documento formal** (solo WhatsApp o transferencia): acción ordinaria de cinco años desde que debió devolver el dinero.
- **Pagaré firmado**: acción ejecutiva de un año desde el vencimiento (Ley 18.092). Pasado el año, acción ordinaria por cuatro años más (total cinco).
- **Cheque protestado**: acción ejecutiva de un año desde el protesto.
- **Deuda reconocida en escritura pública**: acción ejecutiva de tres años desde la exigibilidad.
- **Sentencia que condena a pagar**: acción ejecutiva de tres años desde que quedó firme.

#### Ejemplo o cálculo

**Supuesto:** Prestaste $1.000.000 el 1 de marzo de 2020, con devolución pactada para el 1 de septiembre de 2020. El deudor firmó un pagaré con esa fecha de vencimiento.

- **1 de septiembre de 2020**: vence el pagaré. Comienza a correr el plazo de un año para la acción cambiaria (Ley 18.092).
- **1 de septiembre de 2021**: prescribe la acción cambiaria. Aún tienes acción ordinaria por cuatro años más (hasta el 1 de septiembre de 2025).
- **15 de enero de 2022**: el deudor te envía un mensaje reconociendo la deuda y pidiendo plazo. Esto interrumpe naturalmente la prescripción. El plazo de cinco años comienza de nuevo desde el 15 de enero de 2022.
- **15 de enero de 2027**: si no hiciste nada más, prescribe la acción ordinaria. Ya no puedes cobrar judicialmente.

**Supuesto 2:** Mismo préstamo, pero sin pagaré (solo transferencia bancaria y WhatsApp).

- **1 de septiembre de 2020**: vence el plazo de devolución. Comienza a correr el plazo de cinco años para la acción ordinaria.
- **1 de septiembre de 2025**: prescribe la acción ordinaria. Ya no puedes cobrar judicialmente.

#### Qué puedes hacer

1. **Determina cuándo se hizo exigible la deuda**: revisa el documento, el mensaje o el acuerdo verbal. Si no había plazo, la deuda era exigible desde que se contrajo.

2. **Calcula el plazo transcurrido**: cuenta desde la exigibilidad hasta hoy (25 de septiembre de 2026). Si tienes pagaré o letra de cambio, el plazo es de un año; si tienes escritura pública o sentencia, tres años; si solo tienes prueba informal, cinco años.

3. **Verifica si hubo interrupciones**: revisa si el deudor reconoció la deuda (mensajes, correos, pagos parciales) o si presentaste demanda. Cada reconocimiento reinicia el plazo.

4. **Si el plazo no ha vencido y tienes título ejecutivo** (pagaré, cheque, escritura pública): presenta demanda ejecutiva ante el juzgado de letras civil del domicilio del deudor. Necesitas el original del documento y, si es pagaré o cheque, el protesto por falta de pago.

5. **Si el plazo ejecutivo venció pero no el ordinario**: presenta demanda ordinaria de cobro de pesos. Deberás probar la deuda con testigos, documentos, transferencias bancarias, mensajes.

6. **Si el plazo ya prescribió**: intenta que el deudor reconozca la deuda por escrito (correo, mensaje, carta). Ese reconocimiento interrumpe la prescripción y te permite cobrar. Si paga voluntariamente, no puede pedir devolución.

7. **Reúne antecedentes**: documento original de la deuda, comprobantes de transferencia, mensajes, correos, testigos del préstamo. Si es pagaré o cheque, el protesto notarial.

8. **Plazos que están corriendo**: si la deuda se hizo exigible hace menos de un año (pagaré), tres años (título ejecutivo) o cinco años (sin título), el plazo de prescripción sigue corriendo. Cada día que pasa sin demandar acerca la pérdida de la acción.

9. **Asesoría gratuita**: si no puedes pagar abogado, acude a la Corporación de Asistencia Judicial de tu región. Evalúan tu caso y, si procede, te representan sin costo.

#### Qué verificar antes de actuar

- **Fecha exacta de exigibilidad**: si la deuda tenía plazo, desde el vencimiento; si no, desde que se contrajo. Un error de un día puede cambiar si prescribió o no.
- **Tipo de documento**: pagaré y letra de cambio prescriben en un año; escritura pública y sentencia en tres; deuda sin título formal en cinco. Confirma qué tienes.
- **Reconocimientos del deudor**: cualquier mensaje, correo, pago parcial o promesa de pago interrumpe la prescripción. Guarda todo.
- **Domicilio actual del deudor**: la demanda se presenta en el juzgado de su domicilio. Si no sabes dónde vive, averigua antes de demandar.
- **Costas del juicio**: si demandas y pierdes (por ejemplo, porque prescribió), puedes ser condenado a pagar las costas del deudor. Evalúa el riesgo con un abogado.

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### c09-echar-arrendatario — consulta: ¿Puedo echar a mi arrendatario?

<details><summary>Material enviado al modelo (11 normas, 0 fallos o dictámenes, 3 artículos de doctrina; 0 normas descartadas por materia)</summary>

- Ley 18.101, fija normas especiales sobre arrendamiento de predios urbanos, Artículo 1
- Ley 18.101, fija normas especiales sobre arrendamiento de predios urbanos, Artículo 3
- Ley 18.101, fija normas especiales sobre arrendamiento de predios urbanos, Artículo 8
- Código Civil, Artículo 1977
- Código Civil, Artículo 1915
- Código Civil, Artículo 1924
- Código Civil, Artículo 1947
- Ley 18.101, fija normas especiales sobre arrendamiento de predios urbanos, Artículo 2
- Ley 18.101, fija normas especiales sobre arrendamiento de predios urbanos, Artículo 4
- Ley 18.101, fija normas especiales sobre arrendamiento de predios urbanos, Artículo 5
- Ley N° 18.101 sobre Arrendamiento de Predios Urbanos, Artículo 3
- Doctrina: López Díaz, Patricia, "TERMINACIÓN DEL CONTRATO DE ARRENDAMIENTO POR NO PAGO DE RENTAS. INCUMPLIMIENTO DE LA OBLIGACIÓN DE HABILITAR EL INMUEBLE ARRENDADO COMO LOCAL COMERCIAL. RECURSO A LOS ARTS. 1563, 1564 Y 1566 DEL CÓDIGO CIVIL. PROCEDENCIA DE UN EVENTUAL CONCURSO DE TUTELAS Y DE LA OPCIÓN DEL ACREEDOR. CORTE SUPREMA, 20 DE FEBRERO DE 2019, ROL 31.512-2018. CITA EN LÍNEA LEGALPUBLISHING CL/JUR/907/2019.", Revista Chilena de Derecho Privado, N° 32, (2019), DOI: 10.32995/s0718-80722019419.
- Doctrina: Vidal Olivares, Álvaro; Peña Calderón, Natanael, "La protección del arrendatario ante el incumplimiento del arrendador en el contrato celebrado mediante una plataforma digital:  El caso de Airbnb", Revista Chilena de Derecho y Tecnología, vol. 12, (2023), DOI: 10.5354/0719-2584.2023.70963.
- Doctrina: Vidal Olivares, Álvaro, "EL INCUMPLIMIENTO Y LOS REMEDIOS DEL ACREEDOR EN LA PROPUESTA DE MODERNIZACIÓN DEL DERECHO DE LAS OBLIGACIONES Y CONTRATOS ESPAÑOL", Revista Chilena de Derecho Privado, N° 16, (2019), DOI: 10.32995/s0718-80722011234.

Versión anterior (main):
- Código de Procedimiento Civil, Artículo 680
- Código de Procedimiento Civil, Artículo 681
- Ley N° 18.101 sobre Arrendamiento de Predios Urbanos, Artículo 3
- Código de Procedimiento Civil, (artículo no identificado)

</details>

#### Respuesta corta

Sí, pero solo por las causales legales y siguiendo el procedimiento que la ley establece. En arriendos urbanos, las causales principales son el no pago de la renta, el término del plazo pactado, el desahucio (en contratos mes a mes o indefinidos) y el incumplimiento grave de obligaciones del arrendatario. El desahucio o la demanda de terminación deben notificarse judicialmente o por notario, y el arrendatario tiene derecho a plazos de restitución que varían según el tipo de contrato.

#### Qué dice la ley

La **Ley 18.101** regula el arrendamiento de predios urbanos, es decir, inmuebles ubicados dentro del radio urbano, y también viviendas fuera de ese radio si no exceden una hectárea (artículo 1, https://www.bcn.cl/leychile/navegar?idNorma=29526&idParte=7180796). Esta ley establece reglas especiales sobre terminación del contrato y restitución del inmueble; en lo no previsto, se aplica el Código Civil.

El **Código Civil, artículo 1915**, define el arrendamiento como el contrato en que una parte concede el goce de una cosa y la otra paga un precio (https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8719935). El arrendatario está obligado a restituir la cosa al fin del arrendamiento (artículo 1947, https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8719971).

La causal más común de terminación es la **mora en el pago de la renta**. El Código Civil, artículo 1977, dispone:

> "La mora de un período entero en el pago de la renta, dará derecho al arrendador, después de dos reconvenciones, entre las cuales medien a lo menos cuatro días, para hacer cesar inmediatamente el arriendo, si no se presta seguridad competente de que se verificará el pago dentro de un plazo razonable, que no bajará de treinta días."

(https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8720003)

Esto significa que si el arrendatario no paga un mes completo de renta, el arrendador debe reconvenirlo (requerirle el pago) dos veces, con al menos cuatro días entre una y otra. Si tras la segunda reconvención el arrendatario no paga ni ofrece garantía suficiente de que pagará en un plazo razonable (mínimo 30 días), el arrendador puede demandar la terminación del contrato.

En **contratos mes a mes o de duración indefinida**, el arrendador puede poner término mediante **desahucio**. La Ley 18.101, artículo 3, establece:

> "En los contratos en que el plazo del arrendamiento se haya pactado mes a mes y en los de duración indefinida, el desahucio dado por el arrendador sólo podrá efectuarse judicialmente o mediante notificación personal efectuada por un notario. En los casos mencionados en el inciso anterior, el plazo de desahucio será de dos meses, contado desde su notificación, y se aumentará en un mes por cada año completo que el arrendatario hubiera ocupado el inmueble. Dicho plazo más el aumento no podrá exceder, en total, de seis meses."

(https://www.bcn.cl/leychile/navegar?idNorma=29526&idParte=7180799)

El desahucio es la comunicación unilateral del arrendador de que quiere terminar el contrato. Debe notificarse judicialmente (mediante demanda) o personalmente por un notario. El arrendatario tiene derecho a un plazo mínimo de dos meses para desocupar, más un mes adicional por cada año completo de ocupación, con un tope de seis meses en total.

En **contratos de plazo fijo que no exceda de un año**, el arrendador solo puede solicitar la restitución judicialmente al vencimiento del plazo. La Ley 18.101, artículo 4, señala:

> "En los contratos de plazo fijo que no exceda de un año el arrendador sólo podrá solicitar judicialmente la restitución del inmueble y, en tal evento, el arrendatario tendrá derecho a un plazo de dos meses, contado desde la notificación de la demanda."

(https://www.bcn.cl/leychile/navegar?idNorma=29526&idParte=7180801)

Esto implica que, aunque el plazo haya vencido, el arrendatario tiene dos meses adicionales desde que se le notifica la demanda para restituir el inmueble.

#### Explicación

##### Causales de terminación

1. **No pago de la renta (artículo 1977 del Código Civil)**: Mora de un período entero. Requiere dos reconvenciones previas con al menos cuatro días entre ellas. Si el arrendatario no paga ni ofrece garantía suficiente, el arrendador puede demandar la terminación inmediata.

2. **Vencimiento del plazo pactado**: En contratos de plazo fijo, el arrendamiento termina al cumplirse el plazo. Si el plazo es de un año o menos, el arrendador debe demandar judicialmente la restitución (artículo 4 de la Ley 18.101), y el arrendatario tiene dos meses desde la notificación de la demanda para desocupar. En contratos de plazo superior a un año, la ley no establece un plazo adicional de gracia, pero en la práctica el arrendador debe demandar si el arrendatario no restituye voluntariamente.

3. **Desahucio (artículo 3 de la Ley 18.101)**: Aplicable solo a contratos mes a mes o indefinidos. El arrendador puede desahuciar sin expresar causa, pero debe notificar judicialmente o por notario. El plazo de desahucio es de dos meses, más un mes por cada año completo de ocupación, con tope de seis meses.

4. **Incumplimiento grave de obligaciones del arrendatario**: Por ejemplo, daños graves al inmueble, uso distinto al pactado, subarriendo no autorizado. El arrendador puede demandar la terminación del contrato por incumplimiento, invocando las reglas generales del Código Civil (artículos 1563, 1564, 1566) sobre resolución de contratos bilaterales. La Ley 18.101, artículo 8 número 7 bis, permite al juez ordenar la **restitución anticipada** del inmueble si el arrendatario ha destruido parcialmente el bien o lo ha dejado inutilizado por acción u omisión en su cuidado, siempre que exista presunción grave del derecho del arrendador.

##### Procedimiento

La terminación del arrendamiento y la restitución del inmueble se tramitan mediante un **juicio de arrendamiento** ante el juzgado de letras civil del lugar donde está ubicado el inmueble. El procedimiento es verbal y concentrado (artículo 8 de la Ley 18.101, https://www.bcn.cl/leychile/navegar?idNorma=29526&idParte=7180806):

- **Demanda**: Se presenta por escrito, indicando los hechos, la causal de terminación y los medios de prueba. Se cita a audiencia para el quinto día hábil después de la última notificación.
- **Notificación**: Personal al arrendatario en el domicilio del inmueble arrendado (se presume de pleno derecho que ese es su domicilio).
- **Audiencia**: Relación de la demanda, contestación del demandado, llamado obligatorio a conciliación, fijación de puntos controvertidos y recepción de prueba en el acto. Si no hay conciliación, el juez cita a oír sentencia.
- **Sentencia**: Apelable en el solo efecto devolutivo (es decir, se puede ejecutar aunque se apele).

El arrendatario puede reconvenir (contrademandar) en la misma audiencia, por ejemplo, cobrando mejoras o reparaciones que hizo al inmueble.

##### Plazos de restitución

- **Contratos mes a mes o indefinidos (desahucio)**: Dos meses desde la notificación, más un mes por cada año completo de ocupación, con tope de seis meses.
- **Contratos de plazo fijo de un año o menos**: Dos meses desde la notificación de la demanda de restitución.
- **No pago de renta**: Si se demanda por mora, el arrendatario puede pagar o dar garantía dentro del plazo razonable que fije el juez (mínimo 30 días). Si no lo hace, el juez ordena la restitución inmediata.
- **Restitución anticipada por daños graves**: El juez puede ordenarla en la misma audiencia si hay presunción grave del derecho del arrendador (artículo 8 número 7 bis).

El arrendatario puede restituir el inmueble antes de que expire el plazo y solo debe pagar la renta hasta el día de la restitución efectiva (artículos 3 y 4 de la Ley 18.101).

##### Excepciones y casos especiales

La Ley 18.101 no se aplica a ciertos inmuebles (artículo 2, https://www.bcn.cl/leychile/navegar?idNorma=29526&idParte=7180798):

- Predios de más de una hectárea con aptitud agrícola.
- Inmuebles fiscales.
- Viviendas arrendadas por temporadas de hasta tres meses, amobladas, para descanso o turismo.
- Hoteles y residenciales.
- Estacionamientos.
- Viviendas regidas por la Ley 19.281 (viviendas sociales).

En estos casos, se aplica el Código Civil, salvo que el juicio se tramite por el procedimiento de la Ley 18.101 (como ocurre con arriendos de temporada y estacionamientos).

#### Ejemplo o cálculo

**Caso 1: Desahucio en contrato mes a mes**

Supuestos: Contrato de arrendamiento mes a mes de una vivienda en Santiago. El arrendatario lleva ocupando el inmueble 3 años y 4 meses. El arrendador decide desahuciar sin expresar causa.

- Plazo base de desahucio: 2 meses.
- Años completos de ocupación: 3 años.
- Aumento: 3 meses (1 mes por cada año completo).
- Plazo total: 2 + 3 = 5 meses desde la notificación del desahucio.

El arrendador debe notificar el desahucio judicialmente o por notario. El arrendatario tiene 5 meses para desocupar. Si restituye antes, solo paga renta hasta el día de la restitución.

**Caso 2: No pago de renta**

Supuestos: Contrato de arrendamiento de un departamento, renta mensual $400.000. El arrendatario no paga la renta de marzo (período completo).

- El arrendador debe reconvenir al arrendatario dos veces, con al menos 4 días entre una y otra (por ejemplo, el 5 de abril y el 10 de abril).
- Si tras la segunda reconvención el arrendatario no paga ni ofrece garantía suficiente de que pagará en un plazo razonable (mínimo 30 días), el arrendador puede demandar la terminación del contrato.
- En la demanda, el arrendador solicita la terminación y la restitución del inmueble. El juez puede ordenar la restitución inmediata si el arrendatario no paga o no da garantía en el plazo que el juez fije.

#### Qué puedes hacer

1. **Identifica la causal de terminación**: No pago de renta, vencimiento del plazo, desahucio (solo en contratos mes a mes o indefinidos), o incumplimiento grave (daños, uso indebido, subarriendo no autorizado).

2. **Si es por no pago de renta**: Reconvén al arrendatario dos veces, por escrito (carta certificada o correo electrónico con acuse de recibo), con al menos cuatro días entre una y otra. Guarda las constancias de envío y recepción.

3. **Si es desahucio (contrato mes a mes o indefinido)**: Notifica el desahucio judicialmente (presentando demanda) o mediante notario (notificación personal). El notario debe dejar constancia de la notificación personal al arrendatario.

4. **Presenta la demanda de terminación y restitución** ante el juzgado de letras civil del lugar donde está el inmueble. Puedes hacerlo personalmente si la renta vigente no supera 4 UTM (artículo 8 número 10 de la Ley 18.101), o con abogado si supera ese monto. La demanda debe indicar:
   - Identificación de las partes.
   - Hechos: tipo de contrato, fecha de inicio, renta, causal de terminación.
   - Medios de prueba: contrato, comprobantes de pago (o de falta de pago), reconvenciones, testigos (máximo 4).
   - Petición: terminación del contrato, restitución del inmueble, pago de rentas insolutas y reajustes.

5. **Asiste a la audiencia**: El tribunal cita a audiencia para el quinto día hábil después de la notificación. En la audiencia se intenta conciliación, se fijan los puntos controvertidos y se recibe la prueba. Si el arrendatario no comparece, el juicio sigue con tu sola presencia.

6. **Obtén la sentencia y ejecuta el lanzamiento**: Si el juez acoge la demanda, ordena la restitución del inmueble. Si el arrendatario no desocupa voluntariamente, solicitas el lanzamiento (desalojo forzado) con auxilio de la fuerza pública, a través de un receptor judicial.

7. **Antecedentes a reunir**:
   - Contrato de arrendamiento.
   - Comprobantes de pago de rentas (o constancia de falta de pago).
   - Reconvenciones (si es por mora).
   - Notificación de desahucio (si es por desahucio).
   - Fotografías o informes de daños (si es por incumplimiento grave).
   - Nómina de testigos (vecinos, conserjes, etc.).

8. **Plazos que están corriendo**: Si el arrendatario no paga, el plazo para reconvenir corre desde el día siguiente al vencimiento del período de renta. Si ya reconveniste dos veces, puedes demandar de inmediato. Si es desahucio, el plazo de restitución corre desde la notificación. Si el contrato de plazo fijo venció, puedes demandar en cualquier momento, pero el arrendatario tiene dos meses desde la notificación de la demanda para restituir.

#### Qué verificar antes de actuar

1. **Tipo de contrato**: Revisa si es mes a mes, plazo fijo (y de cuánto), o indefinido. Esto determina la causal y el procedimiento aplicables.

2. **Causal de terminación**: Asegúrate de que la causal esté bien configurada. Si es por mora, verifica que sea un período completo impago y que hayas reconvenido dos veces con al menos cuatro días de diferencia. Si es por vencimiento del plazo, verifica la fecha de término. Si es desahucio, confirma que el contrato sea mes a mes o indefinido.

3. **Notificación del desahucio**: Si vas a desahuciar, la notificación debe ser judicial o por notario (personal). Una carta certificada o un correo electrónico no bastan.

5. **Plazos de restitución**: Ten presente que el arrendatario tiene derecho a plazos de restitución (dos meses en contratos de plazo fijo de un año o menos, dos a seis meses en desahucio). No puedes desalojarlo antes de que expire ese plazo, salvo que el juez ordene restitución anticipada por daños graves.

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### c10-divorcio-argentina — consulta: ¿Cómo me divorcio en Argentina?

<details><summary>Material enviado al modelo (2 normas, 0 fallos o dictámenes, 3 artículos de doctrina; 0 normas descartadas por materia)</summary>

- Ley 19.947, establece nueva ley de matrimonio civil, Artículo 54
- Ley 19.947, establece nueva ley de matrimonio civil, Artículo 55
- Doctrina: Tanzi, Silvia Y.; Papillú, Juan M., "DAÑOS Y PERJUICIOS DERIVADOS DEL DIVORCIO. (DOCTRINA Y JURISPRUDENCIA EN ARGENTINA)", Revista Chilena de Derecho Privado, N° 16, (2019), DOI: 10.32995/s0718-80722011231.
- Doctrina: Robba, Mercedes; Lerussi, Romina, "Compensaciones económicas por trabajo doméstico y de cuidados tras la disolución del matrimonio por divorcio, o de la pareja por cese de la unión convivencial en Argentina. Una lectura jurídica feminista", Ius et Praxis, vol. 24, N° 2, (2018), pp. 595-620, DOI: 10.4067/s0718-00122018000200595.
- Doctrina: Precht Pizarro, Jorge, "Constitución y divorcio vincular", Revista de Derecho Público, vol. 0, N° 53/54, (2016), DOI: 10.5354/0719-5249.1993.43431.

Versión anterior (main):

</details>

#### Respuesta corta

El derecho chileno no regula el divorcio en Argentina. Si estás en Chile y te casaste en Argentina, o si uno de los cónyuges reside en Chile, puedes solicitar el divorcio ante los tribunales chilenos según la Ley 19.947. Para divorciarte en Argentina debes consultar a un abogado argentino, pues rige la legislación de ese país.

#### Qué dice la ley

El derecho chileno establece dos vías de divorcio en la **Ley 19.947, que establece nueva Ley de Matrimonio Civil**:

**Artículo 54**: "El divorcio podrá ser demandado por uno de los cónyuges, por falta imputable al otro, siempre que constituya una violación grave de los deberes y obligaciones que les impone el matrimonio, o de los deberes y obligaciones para con los hijos, que torne intolerable la vida en común." Entre las causales se cuentan atentados contra la vida o malos tratos, transgresión grave de los deberes de convivencia, socorro y fidelidad, condena por delitos contra la familia o las personas, alcoholismo o drogadicción grave, y tentativa de prostitución del cónyuge o los hijos.

**Artículo 55**: "Sin perjuicio de lo anterior, el divorcio será decretado por el juez si ambos cónyuges lo solicitan de común acuerdo y acreditan que ha cesado su convivencia durante un lapso mayor de un año." También procede el divorcio unilateral "cuando se verifique un cese efectivo de la convivencia conyugal durante el transcurso de, a lo menos, tres años", salvo que el demandante haya incumplido reiteradamente su obligación de alimentos pudiendo hacerlo.

Estas normas rigen para los matrimonios celebrados en Chile o en el extranjero, cuando el divorcio se tramita ante tribunales chilenos. La competencia de los tribunales chilenos se determina por el domicilio de los cónyuges o el lugar de celebración del matrimonio, según las reglas de derecho internacional privado chileno.

#### Explicación

**Si deseas divorciarte en Argentina**, debes someterte a la legislación argentina vigente (Código Civil y Comercial de la Nación, Ley 26.618 y reformas posteriores). El derecho chileno no tiene aplicación en ese país. Necesitarás contratar un abogado matriculado en Argentina, quien te orientará sobre:

- Las causales o modalidades de divorcio que reconoce el derecho argentino (actualmente, el divorcio es incausado y puede ser solicitado por uno o ambos cónyuges sin necesidad de invocar motivos).
- El tribunal competente (generalmente, el del último domicilio conyugal o el del demandado).
- Los requisitos de procedimiento, plazos y documentación.
- La regulación de alimentos, compensaciones económicas, régimen de bienes y cuidado de los hijos, que en Argentina tiene particularidades propias.

**Si deseas divorciarte en Chile** (porque tú o tu cónyuge residen aquí, o porque el matrimonio se celebró en Chile), la Ley 19.947 chilena te ofrece tres vías:

1. **Divorcio de común acuerdo** (artículo 55, inciso 1°): ambos cónyuges solicitan el divorcio conjuntamente, acreditan cese de convivencia superior a un año y presentan un acuerdo completo y suficiente que regule relaciones mutuas, alimentos, régimen de bienes, cuidado personal y relación directa y regular con los hijos (artículo 21 de la misma ley). El acuerdo debe ser completo (regular todas las materias) y suficiente (resguardar el interés superior de los hijos, aminorar el menoscabo económico de la ruptura y establecer relaciones equitativas).

2. **Divorcio unilateral por cese de convivencia** (artículo 55, inciso 3°): uno de los cónyuges demanda el divorcio acreditando cese efectivo de la convivencia por al menos tres años. El demandado puede oponerse si prueba que el demandante incumplió reiteradamente su obligación de alimentos respecto del cónyuge y los hijos comunes, pudiendo hacerlo.

3. **Divorcio por culpa** (artículo 54): uno de los cónyuges demanda invocando una causal de culpa del otro (atentado contra la vida, malos tratos, transgresión grave de deberes conyugales, condena penal, alcoholismo o drogadicción grave, tentativa de prostitución). Debe probarse que la conducta torna intolerable la vida en común.

**Cómputo del cese de convivencia**: se cuenta desde que uno de los cónyuges manifiesta al otro su voluntad de poner fin a la convivencia (artículo 22) o desde la notificación de la demanda de divorcio, nulidad o separación (artículo 25). La reanudación de la vida en común con ánimo de permanencia interrumpe el plazo.

**Reconocimiento en Chile de un divorcio argentino**: si te divorcias en Argentina, la sentencia extranjera debe ser reconocida en Chile mediante exequátur ante la Corte Suprema (artículos 242 y siguientes del Código de Procedimiento Civil), para que produzca efectos en Chile (por ejemplo, para volver a casarte en Chile o modificar el estado civil en el Registro Civil chileno).

#### Qué puedes hacer

**Si quieres divorciarte en Argentina**:

1. Consulta a un abogado matriculado en Argentina, quien te informará sobre el procedimiento, costos y plazos según la legislación de ese país.
2. Si luego necesitas que la sentencia argentina produzca efectos en Chile (para casarte nuevamente en Chile, por ejemplo), tramita el exequátur ante la Corte Suprema de Chile, con patrocinio de abogado chileno.

**Si quieres divorciarte en Chile** (porque tú o tu cónyuge residen aquí):

1. **Divorcio de común acuerdo**: redacta con tu cónyuge un acuerdo completo y suficiente (puedes recurrir a la Corporación de Asistencia Judicial si no tienes recursos para abogado particular). Presenta la demanda conjunta ante el juzgado de familia del domicilio de cualquiera de los cónyuges, acompañando certificado de matrimonio, acreditación del cese de convivencia (declaración de testigos, contratos de arriendo separados, etc.) y el acuerdo.

2. **Divorcio unilateral por cese de convivencia**: presenta demanda ante el juzgado de familia del domicilio del demandado o del último domicilio común, acreditando tres años de cese de convivencia. Acompaña certificado de matrimonio, prueba del cese (testigos, documentos) y propuesta de regulación de alimentos, bienes e hijos.

3. **Divorcio por culpa**: presenta demanda ante el mismo tribunal, invocando la causal específica y ofreciendo prueba (testigos, documentos, peritajes). Este proceso es contradictorio y puede ser más largo.

4. **Antecedentes a reunir**: certificado de matrimonio actualizado, cédulas de identidad, certificados de nacimiento de los hijos, antecedentes de ingresos y patrimonio (para alimentos y compensación económica), prueba del cese de convivencia.

5. **Plazos**: el divorcio de común acuerdo suele resolverse en audiencia única (dos a cuatro meses desde la demanda, según la carga del tribunal). El divorcio contencioso puede tardar seis meses a dos años, según la complejidad de la prueba y las apelaciones.

#### Qué verificar antes de actuar

1. **Competencia del tribunal**: confirma que el tribunal chileno es competente (domicilio de uno de los cónyuges en Chile, o matrimonio celebrado en Chile y ambos cónyuges de nacionalidad chilena).

2. **Plazo de cese de convivencia**: verifica que puedas acreditar el plazo (un año para divorcio de común acuerdo, tres años para divorcio unilateral). La fecha de inicio del cese debe ser posterior a la notificación de una demanda previa de divorcio, nulidad o separación, o posterior a la manifestación de voluntad de poner fin a la convivencia.

3. **Acuerdo completo y suficiente**: si optas por el divorcio de común acuerdo, asegúrate de que el acuerdo regule todas las materias del artículo 21 de la Ley 19.947 (alimentos, régimen de bienes, cuidado personal, relación directa y regular, patria potestad). El juez puede rechazar el acuerdo si lo estima incompleto o insuficiente.

4. **Reconocimiento de sentencia extranjera**: si te divorcias en Argentina, la sentencia no produce efectos automáticos en Chile. Deberás tramitar el exequátur ante la Corte Suprema, proceso que puede tardar seis meses a un año.

5. **Asesoría legal**: tanto en Argentina como en Chile, el divorcio requiere patrocinio de abogado. Si no tienes recursos, acude a la Corporación de Asistencia Judicial (en Chile) o a los servicios de asistencia jurídica gratuita que existan en Argentina.

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### c11-legitima-defensa — consulta: ¿Cuándo se configura la legítima defensa?

<details><summary>Material enviado al modelo (3 normas, 0 fallos o dictámenes, 1 artículos de doctrina; 5 normas descartadas por materia)</summary>

- Código Penal, Artículo 10
- Código Penal, Artículo 34
- SEN S/N, sentencia rol nº 740-07-cds, Artículo 243
- Doctrina: Olivares Rodríguez, Ernesto, "EL ESTADO DE NECESIDAD RACIONAL DE LA LEGÍTIMA DEFENSA: ANÁLISIS JURISPRUDENCIAL SOBRE LA FORMA DE APRECIAR LA NECESIDAD RACIONAL DEL MEDIO EMPLEADO FRENTE A LA AGRESIÓN ILEGÍTIMA", Política criminal, vol. 8, N° 15, (2013), pp. 01-22, DOI: 10.4067/s0718-33992013000100001.
- ~~Resolución 3953 EXENTA, ordena publicación en el diario oficial de anexo de decreto supremo n° 239, de 2004, del ministerio de educación, que establece objetivos fundamentales y contenidos mínimos obligatorios para la educación de adultos y fija normas generales para su aplicación, Artículo 2~~ (sin relación léxica (0 términos en común))
- ~~Decreto 257, establece objetivos fundamentales y contenidos mínimos obligatorios para la educación de adultos y fija normas generales para su aplicación y deroga decreto supremo nº 239, de 2004, del ministerio de educación y sus modificaciones en la forma que señala, Artículo 10~~ (sin relación léxica (0 términos en común))
- ~~Decreto 614, establece bases curriculares de 7º año básico a 2º año medio en asignaturas que indica, Artículo 30~~ (sin relación léxica (0 términos en común))
- ~~AVI S/N, complementa publicación del decreto supremo nº 614, de 2013, del ministerio de educación, que establece las bases curriculares de 7º año básico a 2º año medio, en asignaturas que indica, publicado en la edición del diario oficial nº 40.798, del día 4 de marzo de 2014, la cual debe incorporar el siguiente anexo:, Artículo 30~~ (sin relación léxica (0 términos en común))
- ~~SEN S/N, sentencia rol nº 740-07-cds, Artículo 7~~ (sin relación léxica (0 términos en común))

Versión anterior (main):
- Código Penal, Artículo 10
- Código Penal, Artículo 34
- Código Penal, (artículo no identificado)
- Código Procesal Penal, (artículo no identificado)

</details>

#### Respuesta corta

La legítima defensa se configura cuando una persona repele o impide una agresión ilegítima contra su persona o derechos, empleando un medio racionalmente necesario y sin haber provocado suficientemente al agresor. Está regulada en el artículo 10 N° 4 del Código Penal y exime de responsabilidad penal.

#### Qué dice la ley

El **Código Penal, artículo 10 N° 4** dispone:

"El que obra en defensa de su persona o derechos, siempre que concurran las circunstancias siguientes:
Primera.-Agresión Ilegítima.
Segunda.- Necesidad racional del medio empleado para impedirla o repelerla.
Tercera.-Falta de provocación suficiente por parte del que se defiende."

https://www.bcn.cl/leychile/navegar?idNorma=1984&idParte=9672209

Esta norma establece una **eximente de responsabilidad penal**: quien actúa en legítima defensa no comete delito, porque su conducta está justificada por el ordenamiento jurídico. La legítima defensa protege tanto la vida e integridad física como los derechos patrimoniales y la libertad sexual, entre otros bienes jurídicos.

#### Explicación

Para que se configure la legítima defensa deben concurrir **tres requisitos copulativos**:

**1. Agresión ilegítima**

Es el ataque actual o inminente contra la persona o derechos del que se defiende. Debe ser:

- **Ilegítima**: contraria a derecho, sin que el agresor tenga facultad legal para actuar así. No hay agresión ilegítima si quien actúa lo hace en ejercicio legítimo de un derecho (por ejemplo, un policía que detiene conforme a la ley).
- **Actual o inminente**: que esté ocurriendo o a punto de ocurrir. No procede legítima defensa contra agresiones pasadas (sería venganza) ni meramente hipotéticas.
- **Real**: no basta una agresión imaginaria o producto de un error, salvo que se configure legítima defensa putativa (que puede dar lugar a otras eximentes, como el error de prohibición).

La agresión puede dirigirse contra cualquier bien jurídico: vida, integridad física, libertad, honor, propiedad. La jurisprudencia ha admitido legítima defensa en casos de violación, robo con violencia, lesiones y amenazas graves.

**2. Necesidad racional del medio empleado**

El medio de defensa debe ser **racionalmente necesario** para impedir o repeler la agresión. Esto implica:

- **Proporcionalidad**: relación de equilibrio entre la gravedad de la agresión y la intensidad de la defensa. No se exige equivalencia matemática, pero sí que el medio no sea manifiestamente excesivo. Por ejemplo, no es racional disparar contra quien intenta hurtar una fruta, pero sí puede serlo contra quien ingresa violentamente a un domicilio de noche.
- **Subsidiariedad**: si existe un medio menos lesivo e igualmente eficaz, debe preferirse. Sin embargo, no se exige al agredido que huya o se exponga a un riesgo mayor; la ley no impone un deber de fuga.
- **Oportunidad**: la defensa debe ejercerse mientras dura la agresión. Si el peligro ya cesó, la reacción posterior no es defensa sino represalia.

La doctrina y jurisprudencia chilenas han debatido intensamente este requisito. Según Olivares Rodríguez (2013), los tribunales tienden a apreciar la necesidad racional considerando las circunstancias concretas del caso: hora, lugar, medios disponibles, características del agresor y del agredido, sorpresa del ataque. La evaluación es **ex ante** (desde la perspectiva del agredido en el momento de los hechos) y no **ex post** (con la información completa que tiene el juez después).

**3. Falta de provocación suficiente**

El que se defiende no debe haber provocado la agresión de manera suficiente. Provocación suficiente es aquella conducta previa que, por su entidad, justifica o explica razonablemente la reacción del agresor. Ejemplos: insultos graves, amenazas, agresiones menores previas.

Si hubo provocación suficiente, no se configura la legítima defensa, aunque podría operar una atenuante (artículo 11 N° 1 del Código Penal: "eximente incompleta"). Si la provocación fue leve o desproporcionada respecto de la agresión recibida, no impide la eximente.

**Efectos de la legítima defensa**

- **Exención total de responsabilidad penal**: quien actúa en legítima defensa no es condenado.
- **No hay pena ni antecedentes penales**.
- **Responsabilidad civil**: en principio, quien actúa en legítima defensa no responde civilmente por los daños causados al agresor, salvo que haya exceso (artículo 2314 del Código Civil en relación con el artículo 10 N° 4 del Código Penal).

**Legítima defensa de terceros**

El Código Penal también reconoce la defensa de parientes (artículo 10 N° 5) y de extraños (artículo 10 N° 6), con requisitos similares, salvo que en la defensa de extraños se exige que el defensor no actúe por venganza, resentimiento u otro motivo ilegítimo.

**Presunciones legales de legítima defensa**

El artículo 10 N° 6 establece presunciones legales (que no admiten prueba en contrario) de que concurren los requisitos de legítima defensa en dos casos:

- Quien rechaza el **escalamiento** (ingreso por vía no destinada al efecto, con fuerza en las cosas o violencia en las personas) en casa, departamento u oficina habitados, o sus dependencias, o de noche en local comercial o industrial.
- Quien impide o trata de impedir la consumación de delitos graves: secuestro, sustracción de menores, violación, abuso sexual, parricidio, homicidio, robo con violencia o intimidación, robo por sorpresa.

En estos casos, **cualquiera sea el daño ocasionado al agresor**, se presume que hubo legítima defensa.

**Presunción para fuerzas de orden y seguridad**

El mismo artículo 10 N° 6 presume legítima defensa para Carabineros, PDI, Gendarmería y Fuerzas Armadas en funciones de orden público, cuando repelen una agresión que pueda afectar gravemente su integridad física o vida, o la de terceros, empleando armas u otro medio de defensa. Sin embargo, si no había necesidad racional de usar el arma en toda su extensión, los tribunales pueden rebajar la pena en uno, dos o tres grados como atenuante, salvo que concurra dolo.

#### Jurisprudencia y criterios administrativos

Según Olivares Rodríguez (2013), la jurisprudencia chilena ha desarrollado criterios para apreciar la **necesidad racional del medio empleado**:

- Los tribunales evalúan las circunstancias concretas: si el agredido disponía de otros medios, si podía prever la intensidad de la agresión, si actuó en estado de sorpresa o temor.
- Se admite un margen de error del agredido: no se le exige calcular con precisión matemática la respuesta adecuada en medio de un ataque violento.
- La proporcionalidad no es aritmética: se tolera cierto exceso si las circunstancias lo explican (por ejemplo, disparar varios tiros en vez de uno solo, si el agresor seguía avanzando).
- Si el exceso es manifiesto y evitable, puede configurarse **legítima defensa con exceso**, que no exime totalmente pero puede atenuar la pena (eximente incompleta del artículo 73 del Código Penal).

#### Qué puedes hacer

Si enfrentas una situación de agresión y reaccionas en defensa propia:

1. **Reporta inmediatamente a Carabineros o PDI** lo ocurrido, idealmente desde el lugar de los hechos o apenas estés a salvo. La denuncia oportuna refuerza la credibilidad de tu versión.

2. **Reúne antecedentes**: testigos, grabaciones de cámaras de seguridad, mensajes o amenazas previas del agresor, certificados médicos si resultaste lesionado, fotografías del lugar.

3. **Consulta a un abogado penalista** antes de declarar ante la policía o el Ministerio Público. Tienes derecho a declarar con abogado presente (artículo 93 letra f del Código Procesal Penal).

4. **Si eres formalizado o acusado**, tu defensa debe acreditar los tres requisitos de la legítima defensa. La carga de la prueba recae en quien alega la eximente, aunque el Ministerio Público debe probar el delito más allá de toda duda razonable.

5. **Corporación de Asistencia Judicial** (si no puedes costear abogado particular): solicita defensoría penal pública en el tribunal de garantía correspondiente.

6. **Plazo**: no hay plazo para alegar legítima defensa; es una defensa de fondo que se hace valer durante todo el proceso penal, desde la formalización hasta el juicio oral.

#### Qué verificar antes de actuar

- **¿La agresión era actual o inminente?** Si ya cesó, tu reacción posterior no es defensa sino venganza.
- **¿Había otro medio menos lesivo disponible?** Si podías evitar el daño huyendo sin riesgo o llamando a la policía, el tribunal puede cuestionar la necesidad racional.
- **¿Provocaste la agresión?** Revisa si tu conducta previa (insultos, amenazas, agresión menor) pudo motivar razonablemente el ataque.
- **¿El medio empleado fue proporcionado?** Compara la gravedad de la agresión (por ejemplo, empujón, golpe de puño, arma blanca, arma de fuego) con la intensidad de tu respuesta.
- **¿Tienes pruebas de la agresión?** Testigos, lesiones, mensajes, antecedentes de violencia previa del agresor. La palabra contra palabra dificulta la acreditación de la eximente.

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### c12-herencia — consulta: Mi papá murió sin testamento, ¿quiénes heredan?

<details><summary>Material enviado al modelo (12 normas, 0 fallos o dictámenes, 0 artículos de doctrina; 3 normas descartadas por materia)</summary>

- Código Civil, Artículo 980
- Código Civil, Artículo 983
- Código Civil, Artículo 988
- Código Civil, Artículo 989
- Código Civil, Artículo 990
- Código Civil, Artículo 984
- Código Civil, Artículo 985
- Código Civil, Artículo 986
- Código Civil, Artículo 987
- Código Civil, Artículo 1000
- Código Civil, Artículo 1001
- Ley 19.903, sobre procedimiento para el otorgamiento de la posesion efectiva de la herencia y adecuaciones de la normativa procesal, civil y tributaria sobre la materia, Artículo 1
- ~~Código del Trabajo, Artículo 22~~ (materia laboral ajena a familia/civil/procesal_civil/comercial/arrendamiento)
- ~~Código del Trabajo, Artículo 161~~ (materia laboral ajena a familia/civil/procesal_civil/comercial/arrendamiento)
- ~~Ley N° 19.496 sobre Protección de los Derechos de los Consumidores, Artículo 3 bis~~ (materia consumidor ajena a familia/civil/procesal_civil/comercial/arrendamiento)

Versión anterior (main):
- Código Civil, Artículo 983
- Código Civil, Artículo 984
- Código Civil, Artículo 985
- Código Civil, Artículo 986
- Código Civil, Artículo 987
- Código Civil, Artículo 988
- Código Civil, Artículo 989
- Código Civil, Artículo 990
- Código Civil, Artículo 1182
- Código Civil, Artículo 1183
- Código del Trabajo, Artículo 22
- Código del Trabajo, Artículo 161
- Ley N° 19.496 sobre Protección de los Derechos de los Consumidores, Artículo 3 bis
- Código Civil, (artículo no identificado)

</details>

#### Respuesta corta

Si tu papá murió sin testamento, heredan sus descendientes (hijos), el cónyuge sobreviviente si lo hay, y a falta de ellos, sus ascendientes (padres), hermanos y, en último término, el Fisco. La ley regula esta sucesión intestada en los artículos 980 y siguientes del Código Civil, estableciendo un orden de prelación entre los herederos.

#### Qué dice la ley

El **Código Civil, artículo 980** dispone: "Las leyes reglan la sucesión en los bienes de que el difunto no ha dispuesto, o si dispuso, no lo hizo conforme a derecho, o no han tenido efecto sus disposiciones." (https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8718873)

Esto significa que cuando una persona fallece sin testamento válido, la ley determina quiénes son los herederos y en qué proporción reciben los bienes.

El **artículo 983** establece quiénes pueden ser llamados a heredar: "Son llamados a la sucesión intestada los descendientes del difunto, sus ascendientes, el cónyuge sobreviviente, sus colaterales, el adoptado, en su caso, y el Fisco." (https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8718877)

La ley establece un orden de prelación, donde ciertos parientes excluyen a otros más lejanos.

#### Explicación

##### Orden de sucesión intestada

**1. Primer orden: Hijos y cónyuge sobreviviente**

El **artículo 988** señala: "Los hijos excluyen a todos los otros herederos, a menos que hubiere también cónyuge sobreviviente, caso en el cual éste concurrirá con aquéllos." (https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8718882)

Cuando hay hijos, ellos heredan, excluyendo a padres, hermanos y otros parientes. Si además existe cónyuge sobreviviente (la persona con quien el fallecido estaba casado al momento de morir), éste hereda junto con los hijos.

**Distribución con hijos y cónyuge:**
- El cónyuge recibe una porción equivalente al doble de lo que corresponde a cada hijo por legítima rigorosa o efectiva.
- Si hay un solo hijo, el cónyuge recibe una porción igual a la de ese hijo.
- En ningún caso la porción del cónyuge puede ser inferior a la cuarta parte de la herencia o de la mitad legitimaria.
- Si al cónyuge le corresponde la cuarta parte, el resto se divide entre los hijos por partes iguales.

**Distribución solo con hijos (sin cónyuge):**
Los hijos heredan por partes iguales toda la herencia.

**Derecho de representación:** Si un hijo del fallecido murió antes que él, o no puede o no quiere heredar, sus propios hijos (nietos del causante) lo representan y toman la parte que le habría correspondido, dividiéndola entre ellos por partes iguales. El **artículo 986** establece: "Hay siempre lugar a la representación en la descendencia del difunto" (https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8718880). Esto significa que heredan por estirpes, no por cabezas.

**2. Segundo orden: Ascendientes y cónyuge sobreviviente**

El **artículo 989** dispone: "Si el difunto no ha dejado posteridad, le sucederán el cónyuge sobreviviente y sus ascendientes de grado más próximo. En este caso, la herencia se dividirá en tres partes, dos para el cónyuge y una para los ascendientes. A falta de éstos, llevará todos los bienes el cónyuge, y, a falta de cónyuge, los ascendientes." (https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8718883)

Cuando no hay hijos ni otros descendientes:
- Si hay cónyuge y ascendientes (padre, madre o abuelos del grado más cercano): el cónyuge recibe 2/3 y los ascendientes 1/3.
- Si hay solo cónyuge: hereda todo.
- Si hay solo ascendientes: heredan todo, dividiéndose por partes iguales entre los del grado más próximo (primero los padres; si no hay padres, los abuelos).

**3. Tercer orden: Hermanos**

El **artículo 990** señala: "Si el difunto no hubiere dejado descendientes, ni ascendientes, ni cónyuge, le sucederán sus hermanos. Entre los hermanos de que habla este artículo se comprenderán los de simple y doble conjunción, pero la porción de los primeros será la mitad que la que corresponda a los segundos." (https://www.bcn.cl/leychile/navegar?idNorma=172986&idParte=8718884)

Cuando no hay descendientes, ascendientes ni cónyuge, heredan los hermanos:
- **Hermanos de doble conjunción** (carnales, que comparten ambos padres con el fallecido): reciben el doble que los hermanos de simple conjunción.
- **Hermanos de simple conjunción** (medios hermanos, que comparten solo un padre con el fallecido): reciben la mitad.

Los sobrinos pueden representar a un hermano premuerto del causante, según el artículo 986.

**4. Cuarto orden: Otros colaterales**

A falta de los anteriores, heredan otros parientes colaterales hasta el sexto grado (no verificado en esta búsqueda).

**5. Último llamado: El Fisco**

Si no hay ningún heredero de los anteriores, la herencia pasa al Fisco (Estado de Chile).

##### Conceptos clave

- **Sucesión intestada o abintestato:** aquella que se rige por la ley porque el causante no dejó testamento válido.
- **Causante:** la persona fallecida.
- **Herederos:** quienes tienen derecho a suceder en los bienes del causante.
- **Derecho de representación:** ficción legal por la cual los descendientes de un heredero que no puede o no quiere heredar ocupan su lugar y reciben su cuota, dividiéndola entre ellos por partes iguales (por estirpes).
- **Legítima rigorosa o efectiva:** porción de la herencia que la ley asigna a ciertos herederos forzosos.

#### Ejemplo o cálculo

**Caso 1: Fallecido con cónyuge y tres hijos**

Herencia: $60.000.000

Aplicando el artículo 988, si hay más de un hijo, el cónyuge recibe el doble de lo que corresponde a cada hijo por legítima. Sin embargo, la cuota del cónyuge no puede bajar de 1/4 de la herencia.

Cálculo simplificado (asumiendo que toda la herencia es legitimaria):
- Si dividimos en 5 partes (cónyuge = 2 partes, cada hijo = 1 parte):
  - Cónyuge: 2/5 = $24.000.000
  - Cada hijo: 1/5 = $12.000.000

Como 2/5 es mayor que 1/4, se aplica esta distribución.

**Caso 2: Fallecido con cónyuge y un hijo**

Herencia: $60.000.000

El cónyuge recibe una porción igual a la del hijo, pero no menos de 1/4:
- Cónyuge: 1/2 = $30.000.000
- Hijo: 1/2 = $30.000.000

**Caso 3: Fallecido sin cónyuge, con dos hijos, uno de ellos premuerto que dejó dos nietos**

Herencia: $60.000.000

El hijo vivo hereda 1/2 = $30.000.000.
Los dos nietos representan a su padre premuerto y se dividen la otra mitad:
- Cada nieto: $15.000.000

**Caso 4: Fallecido sin descendientes, con cónyuge y madre viva**

Herencia: $60.000.000

- Cónyuge: 2/3 = $40.000.000
- Madre: 1/3 = $20.000.000

#### Qué puedes hacer

1. **Solicitar la posesión efectiva:** Es el trámite que reconoce la calidad de herederos y permite disponer de los bienes.
   - **Sucesión intestada:** Se tramita ante el **Servicio de Registro Civil e Identificación**, según la Ley 19.903, artículo 1 (https://www.bcn.cl/leychile/navegar?idNorma=215613&idParte=8649341).
   - **Sucesión testada o mixta:** Se tramita ante el tribunal civil competente (juzgado de letras del último domicilio del causante).

2. **Reunir los antecedentes necesarios:**
   - Certificado de defunción del causante.
   - Certificado de nacimiento de los herederos.
   - Certificado de matrimonio si hay cónyuge sobreviviente.
   - Certificado de defunción de herederos premuertos (para acreditar representación).
   - Inventario simple de bienes (no verificado en esta búsqueda).

3. **Presentar la solicitud:**
   - En el Registro Civil: presencialmente o en línea, según disponibilidad del servicio.
   - Pagar los derechos correspondientes.

4. **Inscribir la posesión efectiva:** Una vez otorgada, debe inscribirse en el Registro de Propiedad del Conservador de Bienes Raíces si hay inmuebles, y en el Registro Nacional de Vehículos Motorizados si hay vehículos.

5. **Realizar las inscripciones especiales de herencia:** Inscribir los inmuebles a nombre de los herederos en el Conservador de Bienes Raíces respectivo.

6. **Liquidar y adjudicar los bienes:** Los herederos deben ponerse de acuerdo sobre cómo repartir los bienes. Si no hay acuerdo, cualquiera puede pedir la partición judicial ante el tribunal civil.

7. **Pagar el impuesto a la herencia:** Declarar y pagar el impuesto dentro del plazo legal ante el Servicio de Impuestos Internos (no verificado en esta búsqueda).

#### Qué verificar antes de actuar

- **Existencia de testamento:** Aunque creas que no hay testamento, verifica en el Registro Nacional de Testamentos del Registro Civil. Si aparece un testamento, la sucesión se rige por él (sucesión testada) y el trámite cambia.

- **Identificar a todos los herederos:** Asegúrate de conocer a todos los hijos del causante (incluyendo hijos no matrimoniales reconocidos), al cónyuge sobreviviente y, en su caso, a los ascendientes o hermanos. La omisión de un heredero puede anular la posesión efectiva.

- **Estado civil del causante al fallecer:** Confirma si estaba casado, divorciado o separado judicialmente. El cónyuge divorciado o que dio causa a la separación judicial no hereda (no verificado en esta búsqueda).

- **Deudas de la herencia:** Los herederos responden de las deudas del causante hasta el monto de lo que reciben. Si las deudas superan el activo, puedes repudiar la herencia o aceptarla con beneficio de inventario.

- **Plazos:** No hay plazo fatal para solicitar la posesión efectiva, pero el impuesto a la herencia debe declararse dentro de dos años desde el fallecimiento (no verificado en esta búsqueda). Además, mientras no se tramite la posesión efectiva, no se pueden enajenar ni inscribir los bienes hereditarios.

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### g01-pagare — procedimiento: Juicio ejecutivo de cobro de pagaré

<details><summary>Material enviado al modelo (15 normas, 0 fallos o dictámenes, 1 artículos de doctrina; 1 normas descartadas por materia)</summary>

- Código de Procedimiento Civil, Artículo 434
- Código de Procedimiento Civil, Artículo 441
- Código de Procedimiento Civil, Artículo 443
- Código de Procedimiento Civil, Artículo 459
- Código de Procedimiento Civil, Artículo 464
- Código de Procedimiento Civil, Artículo 470
- Código de Procedimiento Civil, Artículo 475
- Ley 18.092, dicta nuevas normas sobre letra de cambio y pagare y deroga disposiciones del codigo de comercio, Artículo 102
- Ley 18.092, dicta nuevas normas sobre letra de cambio y pagare y deroga disposiciones del codigo de comercio, Artículo 107
- Ley 18.092, dicta nuevas normas sobre letra de cambio y pagare y deroga disposiciones del codigo de comercio, Artículo 108
- Código de Procedimiento Civil, Artículo 173
- DFL 197, Artículo 24
- DFL 1, fija texto refundido, coordinado y sistematizado del decreto ley n° 1.349, de 1976, que crea la comision chilena del cobre, Artículo 14
- DFL 15, establece el estatuto del fondo de fomento y desarrollo creado por el articulo 38° del decreto ley 3529, de 1980, Artículo 11
- DL 1.292, aprueba modificaciones al convenio constitutivo del banco interamericano de desarrollo, Artículo 1
- Doctrina: Aguirrezabal Grünstein, Maite, "REVISIÓN DE ALGUNOS ASPECTOS PROCESALES EN TORNO A LA DEFENSA DEL EJECUTADO Y LA OPONIBILIDAD DE EXCEPCIONES EN EL PROCEDIMIENTO EJECUTIVO DE COBRO DE FACTURAS", Revista Chilena de Derecho Privado, N° 39, (2022), DOI: 10.32995/s0718-80722022680.
- ~~DFL 15, modifica leyes de control aplicables por el ministerio de agricultura, establece normas sobre actividades apicolas y sanciona la explotacion ilegal de maderas, Artículo 6~~ (sin relación léxica (1 términos en común))

Versión anterior (main):
- Código de Procedimiento Civil, Artículo 434
- Código de Procedimiento Civil, Artículo 441
- Código de Procedimiento Civil, Artículo 443
- Código de Procedimiento Civil, Artículo 459
- Código de Procedimiento Civil, Artículo 464
- Código de Procedimiento Civil, Artículo 470
- Código de Procedimiento Civil, Artículo 475
- Código de Procedimiento Civil, (artículo no identificado)
- Código del Trabajo, Artículo 161

</details>

#### Ficha del procedimiento

| Aspecto | Detalle |
|---------|---------|
| **Tipo de procedimiento** | Juicio ejecutivo de obligación de dar (cobro de pagaré) |
| **Normas aplicables** | Código de Procedimiento Civil, artículos 434 a 478; Ley 18.092 sobre Letra de Cambio y Pagaré, artículos 102, 107 y siguientes; Ley 18.120 (comparecencia); Ley 20.886 (tramitación electrónica) |
| **Tribunal competente** | **Materia:** Juzgado de Letras en lo Civil (o Juzgado de Letras con competencia común). **Cuantía:** Mayor o menor cuantía según el monto de la deuda; si excede 10 UTM ($717.210 al septiembre 2026) es mayor cuantía. **Territorio:** Lugar convenido para el pago en el pagaré; si no se indicó, el lugar de expedición del documento (Ley 18.092, artículo 102 N° 3); subsidiariamente, domicilio del deudor (regla general del CPC, artículo 134). |
| **Comparecencia** | Ley 18.120: el ejecutante debe actuar con patrocinio de abogado habilitado (patrocinio) y conferir poder a abogado o procurador del número (mandato judicial). El ejecutado puede comparecer personalmente si la cuantía es menor; en mayor cuantía, requiere patrocinio y poder. |
| **Tramitación electrónica** | Ley 20.886: obligatoria en tribunales con sistema de tramitación electrónica (SITCI). Presentación de demanda, escritos y documentos por Oficina Judicial Virtual (OJV). Notificaciones por el estado diario electrónico, salvo la primera notificación al demandado (personal o sustitutiva del artículo 44 CPC) y el requerimiento de pago (siempre personal o sustitutivo). Verificar en el sitio del Poder Judicial si el tribunal tiene SITCI activo. |

---

#### Antes de demandar

**Antecedentes y documentos necesarios:**

1. **Pagaré original** con todos los requisitos del artículo 102 de la Ley 18.092:
   - Indicación de ser "pagaré" en el texto.
   - Promesa no sujeta a condición de pagar suma determinada o determinable.
   - Lugar y época de pago (si falta lugar, se entiende el de expedición; si falta fecha de vencimiento, es a la vista).
   - Nombre del beneficiario o indicación de ser al portador.
   - Lugar y fecha de expedición.
   - Firma del suscriptor.

2. Si el ejecutado es el suscriptor directo, el protesto no es requisito de la acción ejecutiva, pero sí puede serlo para interrumpir prescripción o acreditar el vencimiento en pagarés a la vista.

3. **Cálculo de la deuda:** capital adeudado, intereses (si el pagaré los estipula), reajustes (si los hay) y costas estimadas. Si el pagaré no indica tasa de interés, no se cobran intereses (salvo pacto aparte).

5. **Poder del abogado** que patrocina y del mandatario judicial, si no consta en escritura pública inscrita.

**Gestiones previas:**

- **No hay gestión preparatoria obligatoria** para el pagaré que cumpla los requisitos del artículo 102 de la Ley 18.092 y esté suscrito por el deudor. El pagaré es título ejecutivo perfecto por sí mismo (CPC, artículo 434 N° 4, en relación con Ley 18.092).

- **Si la firma del suscriptor fue autorizada por notario u Oficial del Registro Civil** (en comunas sin notario), el pagaré tiene mérito ejecutivo sin necesidad de reconocimiento previo (CPC, artículo 434 N° 4, inciso segundo).

- **Si la firma no está autorizada ante ministro de fe**, el pagaré requiere reconocimiento judicial previo (gestión preparatoria de reconocimiento de firma, CPC, artículos 435 N° 2 y 435 bis) o que el suscriptor, al ser protestado personalmente por falta de pago, no haya puesto tacha de falsedad a su firma, o que, notificado judicialmente del protesto, no alegue tacha de falsedad en ese acto o dentro de tercero día (CPC, artículo 434 N° 4, inciso primero).

- **Notificación previa al deudor:** no es requisito legal, pero puede ser conveniente para evitar costas si el deudor paga voluntariamente.

---

#### Tramitación paso a paso

##### Etapa 1: Presentación de la demanda ejecutiva

- **Qué se hace:** El ejecutante presenta demanda ejecutiva ante el tribunal competente, acompañando el pagaré original y los documentos que acrediten su personería. La demanda debe cumplir los requisitos del artículo 254 CPC (designación del tribunal, nombre y domicilio del demandante y demandado, exposición clara de los hechos y fundamentos de derecho, peticiones concretas) y señalar el monto de la deuda (capital, intereses, reajustes si los hay).

- **Quién:** El ejecutante, por intermedio de abogado patrocinante y mandatario judicial.

- **Plazo y cómputo:** No hay plazo para demandar, salvo el de prescripción de la acción ejecutiva (1 año desde el vencimiento del pagaré). La demanda se presenta en cualquier momento dentro de ese año.

- **Norma:** CPC, artículos 254, 434 N° 4; Ley 18.092, artículos 102, 107.

- **Si se omite:** Si se deja prescribir la acción ejecutiva (1 año), solo queda la acción ordinaria.

---

##### Etapa 2: Examen del título y despacho o denegación del mandamiento de ejecución

- **Qué se hace:** El tribunal examina el título (pagaré) y la demanda, sin audiencia ni notificación del demandado. Si el título cumple los requisitos del artículo 434 N° 4 CPC y la demanda es formalmente correcta, el tribunal despacha el **mandamiento de ejecución y embargo**. Si el título es insuficiente o la demanda inepta, deniega la ejecución.

- **Quién:** El juez, de oficio.

- Es una resolución de mera tramitación.

- **Norma:** CPC, artículo 441.

- **Si se omite:** Si el tribunal no resuelve, el ejecutante puede solicitar que se despache el mandamiento (solicitud de pronto despacho). Si el tribunal deniega la ejecución, el ejecutante puede apelar (artículo 441, inciso tercero); la apelación se concede en el solo efecto devolutivo y el tribunal eleva el proceso al superior sin notificar al demandado.

**Contenido del mandamiento de ejecución (artículo 443 CPC):**

1. Orden de **requerir de pago** al deudor (personalmente o por artículo 44 si no es habido).
2. Orden de **embargar bienes** suficientes si no paga en el acto.
3. Designación de **depositario provisional** (puede ser el acreedor, el deudor, o un tercero de reconocida solvencia; no puede ser empleado del tribunal ni quien ya sea depositario en tres o más juicios del mismo juzgado).
4. Si el acreedor señaló bienes a embargar en la demanda, el mandamiento los designa.

---

##### Etapa 3: Requerimiento de pago y embargo

- **Qué se hace:** El receptor judicial notifica al deudor el mandamiento de ejecución, requiriéndolo de pago. Si el deudor paga en el acto, el juicio termina. Si no paga, el receptor procede de inmediato al embargo de bienes suficientes para cubrir la deuda, intereses y costas. El embargo se traba retirando especies muebles o inscribiendo la prohibición de celebrar actos y contratos sobre bienes raíces o vehículos (según el bien embargado). Los bienes embargados quedan en poder del depositario designado.

- **Quién:** Receptor judicial (ministro de fe).

- **Plazo y cómputo:** El requerimiento debe hacerse **personalmente** al deudor. Si no es habido, se procede conforme al artículo 44 CPC: se le deja cédula en su morada o lugar de trabajo, indicando día, hora y lugar para el requerimiento; si no concurre, se hace el embargo de inmediato, sin más trámite (artículo 443 N° 1).

- **Norma:** CPC, artículos 443, 44, 450 a 457 (embargo).

- **Si se omite:** Si no se requiere de pago al deudor, no corre el plazo para oponer excepciones y el juicio no avanza. Si el embargo es defectuoso (por ejemplo, se embargan bienes inembargables del artículo 445 CPC), el deudor puede pedir el alzamiento del embargo o invocar la nulidad procesal.

---

##### Etapa 4: Oposición de excepciones o rebeldía del ejecutado

**Camino A: El ejecutado NO opone excepciones (rebeldía)**

- **Qué se hace:** Si el deudor no opone excepciones dentro del plazo de 8 días útiles desde el requerimiento de pago, se le tiene por rebelde. El tribunal, a petición del ejecutante (solicitud de "acuse de rebeldía"), omite la tramitación de la contestación y cita a las partes a oír sentencia.

- **Quién:** El ejecutante solicita el acuse de rebeldía; el tribunal lo declara de oficio o a petición de parte.

- **Plazo y cómputo:** El ejecutante puede pedir el acuse de rebeldía al día siguiente de vencido el plazo de 8 días útiles para oponer excepciones. El tribunal resuelve de inmediato.

- **Si se omite:** Si el ejecutante no pide el acuse de rebeldía, el juicio se paraliza.

**Camino B: El ejecutado opone excepciones**

- **Qué se hace:** El ejecutado presenta escrito de oposición de excepciones dentro del plazo de 8 días útiles desde el requerimiento de pago. Solo puede oponer las excepciones taxativas del artículo 464 CPC (18 excepciones, entre ellas: incompetencia, falta de personería, litispendencia, ineptitud del libelo, falsedad del título, falta de requisitos del título, pago, remisión, novación, compensación, nulidad, prescripción, cosa juzgada, etc.). Cada excepción debe fundarse en hechos concretos y acompañar los documentos que la acrediten.

- **Quién:** El ejecutado, personalmente (si la cuantía lo permite) o por abogado.

- **Plazo y cómputo:** **8 días útiles** desde el requerimiento de pago, si el requerimiento se hizo en el territorio jurisdiccional del tribunal (artículo 459). Los días útiles son los no feriados (lunes a viernes, excluidos festivos). El plazo es fatal: vencido, precluye el derecho a oponer excepciones.

- **Norma:** CPC, artículos 459, 464.

- **Si se omite:** Si el ejecutado no opone excepciones en plazo, se le tiene por rebelde y se dicta sentencia de pago sin más trámite. Si opone excepciones fuera de plazo, el tribunal las rechaza de plano (inadmisibilidad). Si opone excepciones no contempladas en el artículo 464, el tribunal las desestima en la sentencia (son inadmisibles).

---

##### Etapa 5: Tramitación de las excepciones

- **Qué se hace:** Opuestas las excepciones, el tribunal confiere traslado al ejecutante por el plazo de **8 días útiles** para que las conteste (escrito de "réplica" o "contestación de excepciones"). Contestadas las excepciones o vencido el plazo, el tribunal puede recibir la causa a prueba si hay hechos sustanciales, pertinentes y controvertidos, o citar a las partes a oír sentencia si las excepciones son de puro derecho o los hechos están acreditados con los documentos acompañados.

- **Quién:** Ejecutante (contesta excepciones); tribunal (resuelve si hay prueba).

- **Plazo y cómputo:** **8 días útiles** para contestar excepciones, desde la notificación por el estado diario del escrito de excepciones.

- **Norma:** CPC, artículos 465 (traslado de excepciones), 466 (contestación), 467 (prueba en el ejecutivo).

- Si el tribunal omite recibir la causa a prueba habiendo hechos controvertidos, la sentencia puede ser nula por falta de emplazamiento (casación en la forma).

**Prueba en el juicio ejecutivo:**

- Rigen las reglas del juicio ordinario sobre prueba (testimonial, documental, confesional, pericial, inspección personal).
- Vencido el término probatorio, el tribunal cita a las partes a oír sentencia.

---

##### Etapa 6: Sentencia definitiva

- **Qué se hace:** El tribunal dicta sentencia definitiva, acogiendo o rechazando las excepciones. Si rechaza todas las excepciones, ordena seguir adelante la ejecución (sentencia de pago). Si acoge alguna excepción que extingue la obligación (pago, prescripción, nulidad, etc.), rechaza la demanda ejecutiva. Si acoge una excepción dilatoria (incompetencia, falta de personería), puede dar plazo para subsanarla o rechazar la demanda.

- **Quién:** El juez.

- **Plazo y cómputo:** **10 días** desde que la causa queda en estado de sentencia (conclusos los autos), según el artículo 470 CPC. Es un plazo para el tribunal, no fatal; su incumplimiento no anula la sentencia.

- **Norma:** CPC, artículo 470.

**Contenido de la sentencia de pago:**

- Ordena seguir adelante la ejecución.
- Manda rematar los bienes embargados para pagar la deuda (capital, intereses, reajustes y costas).
- Condena en costas al ejecutado (salvo que haya motivo plausible para litigar; artículo 144 CPC).

**Contenido de la sentencia que acoge excepciones:**

- Rechaza la demanda ejecutiva (total o parcialmente).
- Alza el embargo.
- Condena en costas al ejecutante (si las excepciones prosperan totalmente).

---

##### Etapa 7: Recursos contra la sentencia definitiva

**Recurso de apelación:**

- **Qué se hace:** La parte agraviada (ejecutante o ejecutado) apela de la sentencia ante la Corte de Apelaciones respectiva.

- **Quién:** Ejecutante o ejecutado.

- El plazo es fatal.

- **Norma:** CPC, artículos 187 y siguientes (apelación).

- **Si se omite:** Si no se apela en plazo, la sentencia queda firme y ejecutoriada.

**Efectos de la apelación de la sentencia de pago:**

- Esto significa que el ejecutante puede pedir el cumplimiento de la sentencia (remate de los bienes embargados) **caucionando las resultas del recurso** (artículo 475 CPC): debe rendir fianza, boleta bancaria o consignación suficiente para responder de la eventual devolución de lo pagado si la Corte revoca la sentencia.

- Si el ejecutante no cauciona, no puede rematar hasta que la Corte resuelva la apelación.

**Recurso de casación en la forma:**

- Procede si la sentencia tiene vicios formales (artículo 768 CPC): incompetencia del tribunal, falta de emplazamiento, omisión de trámites esenciales, etc.

- Se interpone ante el tribunal que dictó la sentencia; lo conoce la Corte de Apelaciones.

**Recurso de casación en el fondo:**

- Plazo: **15 días hábiles** desde la notificación de la sentencia.

- Se interpone ante el tribunal que dictó la sentencia; lo conoce la Corte Suprema.

---

##### Etapa 8: Cumplimiento de la sentencia de pago (realización de los bienes embargados)

**Si la sentencia de pago está firme o el ejecutante caucionó las resultas de la apelación:**

- **Qué se hace:** El ejecutante solicita que se tasen los bienes embargados (si son muebles) o se designen peritos para avaluarlos (si son raíces). Hecha la tasación, se fija día y hora para el remate en pública subasta. Los bienes se rematan al mejor postor. Con el producto del remate se paga al ejecutante (capital, intereses, reajustes y costas); el saldo, si lo hay, se entrega al ejecutado.

- **Quién:** Ejecutante (solicita el remate); tribunal (ordena la tasación y el remate); martillero público (en el caso de bienes raíces) o receptor judicial (en el caso de bienes muebles).

- **Norma:** CPC, artículos 479 a 489 (realización de bienes muebles), 485 a 489 (realización de bienes raíces).

- **Si se omite:** Si no se rematan los bienes, el ejecutante no cobra. Si el ejecutado estima que el remate es irregular (por ejemplo, precio vil), puede oponerse antes de que se apruebe el remate o apelar de la resolución que lo aprueba.

**Tercerías:**

- Si un tercero reclama dominio sobre los bienes embargados (**tercería de dominio**) o un mejor derecho a ser pagado con el producto del remate (**tercería de prelación** o **de pago**), debe deducir demanda de tercería en el mismo expediente. La tercería de dominio suspende el remate; la de prelación o pago no lo suspende, pero el producto del remate queda retenido hasta que se resuelva.

---

##### Etapa 9: Liquidación del crédito y pago al ejecutante

- **Qué se hace:** Aprobado el remate, el tribunal ordena que se liquide el crédito (capital, intereses, reajustes y costas). Si las partes están de acuerdo en el monto, el tribunal aprueba la liquidación y ordena el pago al ejecutante. Si hay desacuerdo, el tribunal resuelve (incidente de liquidación). Pagado el ejecutante, se alza el embargo y se devuelve el saldo al ejecutado (si lo hay).

- **Quién:** Ejecutante (presenta liquidación); tribunal (aprueba y ordena pago).

- **Plazo y cómputo:** No hay plazo legal. La liquidación se presenta después de aprobado el remate. El tribunal resuelve en cuenta (sin audiencia) si no hay oposición, o con audiencia si el ejecutado objeta la liquidación.

- **Si se omite:** Si no se liquida el crédito, no se puede pagar al ejecutante. Si la liquidación es excesiva, el ejecutado puede objetarla y el tribunal la reduce.

---

#### Escritos clave

##### 1. Demanda ejecutiva de cobro de pagaré

**Suma:**
- En lo principal: demanda ejecutiva de cobro de pagaré.
- Primer otrosí: patrocinio y poder.
- Segundo otrosí: acompaña documentos.

**Estructura y contenido mínimo:**

**En lo principal:**

S. J. L. en lo Civil de [ciudad]

[Nombre del ejecutante], [nacionalidad], [profesión u oficio], cédula de identidad N° [número], domiciliado en [calle y número, comuna], a US. respetuosamente digo:

Vengo en demandar ejecutivamente a [nombre del ejecutado], [nacionalidad], [profesión u oficio], cédula de identidad N° [número], domiciliado en [calle y número, comuna], para que pague la suma de $[monto en pesos] ([monto en letras] pesos), más intereses y reajustes según se dirá, y las costas de la causa, todo ello en virtud del pagaré que se acompaña en original y que se individualiza a continuación.

**TÍTULO EJECUTIVO:**

Pagaré suscrito por el demandado en [ciudad], con fecha [día, mes, año], por la suma de $[monto], pagadero el [fecha de vencimiento] en [lugar de pago], a la orden de [nombre del beneficiario o del ejecutante si es endosatario]. El documento consta de [número] folio(s) y se acompaña en original marcado con la letra A.

[Si la firma está autorizada ante notario u Oficial del Registro Civil, agregar: La firma del suscriptor fue autorizada ante [nombre del notario u Oficial del Registro Civil] con fecha [fecha], según consta al pie del documento, por lo que tiene mérito ejecutivo sin necesidad de reconocimiento previo, conforme al artículo 434 N° 4 inciso segundo del Código de Procedimiento Civil. (no verificado en esta búsqueda)]

**MONTO DE LA DEUDA:**

Capital adeudado: $[monto].
Intereses: [indicar tasa y período, si el pagaré los estipula; si no, omitir].
Reajustes: [indicar índice y período, si el pagaré los estipula; si no, omitir].
Total adeudado a la fecha: $[monto total].

**FUNDAMENTO DE DERECHO:**

La acción se funda en el artículo 434 N° 4 del Código de Procedimiento Civil, que otorga mérito ejecutivo al pagaré suscrito por el deudor, y en la Ley 18.092 sobre Letra de Cambio y Pagaré, artículos 102 y 107.

**POR TANTO y en mérito de lo expuesto,**

RUEGO A US. se sirva tener por interpuesta demanda ejecutiva en contra de [nombre del ejecutado], ordenar se le requiera de pago y, en su defecto, se embarguen bienes de su propiedad suficientes para responder de la deuda, intereses, reajustes y costas, designándose depositario provisional a [nombre del depositario o "el propio ejecutante" o "la persona que US. estime conveniente"], y en definitiva, acoger la demanda, ordenando seguir adelante la ejecución hasta hacer íntegro pago al ejecutante, con costas.

**PRIMER OTROSÍ:** Ruego a US. tener por constituido patrocinio en la persona del abogado [nombre], cédula de identidad N° [número], domiciliado para estos efectos en [calle y número, comuna], y conferido poder a [nombre del mandatario], abogado, cédula de identidad N° [número], domiciliado en [calle y número, comuna], todo ello conforme a la Ley 18.120.

**SEGUNDO OTROSÍ:** Acompaño en original el pagaré marcado con la letra A, y en copia autorizada [certificado de vigencia de personería del ejecutante, si es persona jurídica; poder del abogado, si no consta en escritura pública inscrita; etc.].

---

##### 2. Escrito de oposición de excepciones

**Suma:**
- En lo principal: opone excepciones.
- Primer otrosí: patrocinio y poder.
- Segundo otrosí: acompaña documentos.

**Estructura y contenido mínimo:**

**En lo principal:**

S. J. L. en lo Civil de [ciudad]
Rol C-[número]-[año]
Ejecutivo [nombre del ejecutante] con [nombre del ejecutado]

[Nombre del ejecutado], ya individualizado en autos, a US. respetuosamente digo:

Dentro del plazo legal de ocho días útiles que me confiere el artículo 459 del Código de Procedimiento Civil, vengo en oponer las siguientes excepciones a la demanda ejecutiva deducida en mi contra:

**PRIMERA EXCEPCIÓN: Pago de la deuda (artículo 464 N° 9 CPC).**

La obligación contenida en el pagaré acompañado por el ejecutante fue íntegramente pagada con fecha [fecha de pago], según consta del comprobante de pago que acompaño marcado con la letra A. [Relatar circunstancias del pago: forma, lugar, persona que recibió el pago, etc.].

**SEGUNDA EXCEPCIÓN: Prescripción de la acción ejecutiva (artículo 464 N° 17 CPC).**

El pagaré venció el [fecha de vencimiento]. Desde esa fecha hasta la presentación de la demanda ejecutiva ([fecha de presentación de la demanda]) transcurrieron más de [número] días, excediendo el plazo de un año que establece el artículo 98 de la Ley 18.092 para ejercer la acción ejecutiva. Por tanto, la acción ejecutiva está prescrita, sin perjuicio de la acción ordinaria que pudiere corresponder al ejecutante.

[Agregar otras excepciones si corresponde, siempre dentro del catálogo del artículo 464 CPC.]

**POR TANTO,**

RUEGO A US. tener por opuestas las excepciones precedentes, acogerlas en la sentencia definitiva y, en consecuencia, rechazar la demanda ejecutiva, alzar el embargo trabado sobre mis bienes y condenar en costas al ejecutante.

**PRIMER OTROSÍ:** Ruego a US. tener por constituido patrocinio en la persona del abogado [nombre], cédula de identidad N° [número], domiciliado para estos efectos en [calle y número, comuna], y conferido poder a [nombre del mandatario], abogado, cédula de identidad N° [número], domiciliado en [calle y número, comuna].

**SEGUNDO OTROSÍ:** Acompaño en copia simple [comprobante de pago, certificado de prescripción, etc.], marcados con las letras A, B, etc.

---

##### 3. Escrito de contestación de excepciones (réplica del ejecutante)

**Suma:**
- En lo principal: contesta excepciones.

**Estructura y contenido mínimo:**

**En lo principal:**

S. J. L. en lo Civil de [ciudad]
Rol C-[número]-[año]
Ejecutivo [nombre del ejecutante] con [nombre del ejecutado]

[Nombre del ejecutante], ya individualizado en autos, a US. respetuosamente digo:

Dentro del plazo legal, vengo en contestar las excepciones opuestas por el ejecutado, solicitando su rechazo por las razones que expongo:

**RESPECTO DE LA EXCEPCIÓN DE PAGO:**

El ejecutado no ha pagado la deuda. El documento acompañado por él como comprobante de pago [describir el documento: fecha, monto, firma, etc.] no acredita el pago de la obligación contenida en el pagaré, por las siguientes razones: [por ejemplo: el monto es inferior, la fecha es anterior al vencimiento, no consta la firma del ejecutante o de persona autorizada para recibir el pago, etc.]. En subsidio, si US. estima que el documento amerita prueba, solicito se reciba la causa a prueba para acreditar que no hubo pago.

**RESPECTO DE LA EXCEPCIÓN DE PRESCRIPCIÓN:**

La acción ejecutiva no está prescrita. El pagaré venció el [fecha de vencimiento] y la demanda se presentó el [fecha de presentación], es decir, [número] días después, dentro del plazo de un año que establece el artículo 98 de la Ley 18.092. [Si hubo actos interruptivos de la prescripción, mencionarlos: protesto, requerimiento, reconocimiento de deuda, etc.].

**POR TANTO,**

RUEGO A US. tener por contestadas las excepciones, rechazarlas en la sentencia definitiva y acoger la demanda ejecutiva, con costas.

---

##### 4. Solicitud de acuse de rebeldía

**Suma:**
- En lo principal: solicita acuse de rebeldía.

**Estructura y contenido mínimo:**

**En lo principal:**

S. J. L. en lo Civil de [ciudad]
Rol C-[número]-[año]
Ejecutivo [nombre del ejecutante] con [nombre del ejecutado]

[Nombre del ejecutante], ya individualizado en autos, a US. respetuosamente digo:

El ejecutado fue requerido de pago con fecha [fecha del requerimiento], según consta del acta de requerimiento y embargo de fs. [folio]. Desde esa fecha han transcurrido más de ocho días útiles sin que el ejecutado haya opuesto excepciones. Por tanto, ha precluido su derecho a oponerlas y debe tenérsele por rebelde.

**POR TANTO,**

RUEGO A US. tener por rebelde al ejecutado, omitir la tramitación de la contestación y citar a las partes a oír sentencia definitiva.

---

##### 5. Solicitud de remate de bienes embargados

**Suma:**
- En lo principal: solicita remate de bienes embargados.

**Estructura y contenido mínimo:**

**En lo principal:**

S. J. L. en lo Civil de [ciudad]
Rol C-[número]-[año]
Ejecutivo [nombre del ejecutante] con [nombre del ejecutado]

[Nombre del ejecutante], ya individualizado en autos, a US. respetuosamente digo:

La sentencia definitiva de fecha [fecha de la sentencia], que ordenó seguir adelante la ejecución, se encuentra firme y ejecutoriada [o "caucioné las resultas de la apelación mediante boleta bancaria de fs. [folio]"]. Los bienes embargados al ejecutado son los siguientes: [individualizar los bienes: muebles, raíces, vehículos, etc.].

**POR TANTO,**

RUEGO A US. ordenar la tasación de los bienes embargados [o "designar peritos para avaluarlos", si son raíces] y, en su mérito, fijar día y hora para el remate en pública subasta, con arreglo a los artículos 479 y siguientes del Código de Procedimiento Civil.

---

#### Tabla de plazos

| Etapa | Plazo | Cómputo | Norma | Consecuencia si se omite |
|-------|-------|---------|-------|--------------------------|
| Prescripción de la acción ejecutiva | 1 año | Desde el vencimiento del pagaré | Ley 18.092, art. 98 (aplicable al pagaré por art. 107) | Solo queda acción ordinaria (3 años más) |
| Oposición de excepciones | 8 días útiles | Desde el requerimiento de pago | CPC, art. 459 | Rebeldía del ejecutado; sentencia de pago sin más trámite |
| Contestación de excepciones | 8 días útiles | Desde la notificación por estado diario del escrito de excepciones | CPC, art. 465 | Pérdida de oportunidad de controvertir hechos |
| Término probatorio | 10 días útiles (no verificado) | Desde la resolución que recibe la causa a prueba | CPC, art. 468 (verificar) | Preclusión del derecho a rendir prueba |
| Sentencia definitiva | 10 días | Desde que la causa queda conclusa | CPC, art. 470 | Plazo para el tribunal; no es fatal |
| Apelación de la sentencia | 5 días hábiles (no verificado) | Desde la notificación de la sentencia por estado diario | CPC, art. 189 (verificar) | Sentencia queda firme |
| Casación en la forma | 5 días hábiles (no verificado) | Desde la notificación de la sentencia | CPC, art. 768 (verificar) | Sentencia queda firme |
| Casación en el fondo | 15 días hábiles | Desde la notificación de la sentencia | CPC, art. 770 | Sentencia queda firme |
| Abandono del procedimiento (cumplimiento) | 3 años | Desde que la sentencia quedó firme | CPC, art. 152 | El ejecutado puede pedir que se declare abandonado el procedimiento |

---

#### Recursos

##### Recurso de apelación

**Contra qué resolución:** Sentencia definitiva que acoge o rechaza la demanda ejecutiva; resolución que deniega el mandamiento de ejecución (artículo 441 inciso tercero); resolución que aprueba el remate.

**Tribunal ante el que se interpone:** Tribunal que dictó la resolución.

**Tribunal que conoce:** Corte de Apelaciones respectiva.

**Efectos:** 
- El ejecutante puede pedir el cumplimiento caucionando las resultas (artículo 475 CPC).
- Apelación de la resolución que deniega el mandamiento: se concede en el solo efecto devolutivo; el tribunal eleva el proceso sin notificar al demandado (artículo 441 inciso tercero).
- Apelación de la sentencia que rechaza la demanda: se concede en ambos efectos (suspende el cumplimiento).

##### Recurso de casación en la forma

**Contra qué resolución:** Sentencia definitiva que tiene vicios formales del artículo 768 CPC (incompetencia del tribunal, falta de emplazamiento, omisión de trámites esenciales, ultrapetita, falta de decisión del asunto controvertido, etc.).

**Tribunal ante el que se interpone:** Tribunal que dictó la sentencia.

**Tribunal que conoce:** Corte de Apelaciones respectiva.

**Efectos:** No suspende el cumplimiento de la sentencia, salvo que se ordene la suspensión como medida precautoria.

##### Recurso de casación en el fondo

**Plazo:** 15 días hábiles desde la notificación de la sentencia.

**Tribunal ante el que se interpone:** Tribunal que dictó la sentencia.

**Tribunal que conoce:** Corte Suprema.

**Efectos:** No suspende el cumplimiento de la sentencia, salvo que se ordene la suspensión.

##### Recurso de reposición

**Contra qué resolución:** Resoluciones de mera tramitación (por ejemplo, resolución que ordena notificar por cédula, que designa depositario, etc.).

**Tribunal ante el que se interpone y que conoce:** El mismo tribunal que dictó la resolución.

**Efectos:** No suspende el cumplimiento de la resolución, salvo que el tribunal lo ordene.

---

#### Errores frecuentes y estrategia

##### Errores frecuentes que más cuestan

1. **Demandar con un pagaré que no cumple los requisitos del artículo 102 de la Ley 18.092:** Si falta alguna mención esencial (promesa de pagar, monto, fecha de vencimiento, firma del suscriptor), el pagaré no es título ejecutivo. El tribunal denegará el mandamiento de ejecución. **Solución:** Verificar antes de demandar que el pagaré contenga todas las menciones del artículo 102; si falta alguna, intentar subsanarla (por ejemplo, si falta el lugar de pago, se entiende que es el lugar de expedición) o demandar por la vía ordinaria.

2. Si no protesta, pierde la acción ejecutiva contra esos obligados. **Solución:** Si el ejecutante es endosatario, verificar si el pagaré fue protestado; si no, demandar solo al suscriptor directo (que no requiere protesto).

3. **Dejar prescribir la acción ejecutiva:** El plazo de 1 año desde el vencimiento es fatal. Si se deja pasar, solo queda la acción ordinaria (más lenta y costosa). **Solución:** Demandar dentro del año; si el plazo está por vencer, presentar la demanda aunque falten antecedentes (se pueden acompañar después) y pedir que se despache el mandamiento de inmediato.

4. **Requerir de pago al deudor en forma defectuosa:** Si el requerimiento no es personal (o sustitutivo del artículo 44 cuando el deudor no es habido), el plazo para oponer excepciones no corre y el juicio se paraliza. **Solución:** Instruir al receptor para que requiera personalmente al deudor; si no lo encuentra, que proceda conforme al artículo 44 (cédula con día y hora para el requerimiento).

5. **Oponer excepciones fuera del catálogo del artículo 464 CPC:** El ejecutado solo puede oponer las 18 excepciones taxativas. Si opone otras (por ejemplo, "lesión enorme", "error en el monto), el tribunal las desestima. **Solución:** Encuadrar la defensa en alguna de las excepciones del artículo 464; por ejemplo, si hay error en el monto, oponer (no verificado en esta búsqueda)falta de requisitos del título" (N° 7) o "exceso de avalúo" (N° 8, si aplica).

6. **No contestar las excepciones del ejecutado:** Aunque el ejecutante no quede rebelde, pierde la oportunidad de controvertir los hechos y de pedir prueba. **Solución:** Contestar siempre las excepciones, aunque sean infundadas, para fijar la controversia y solicitar prueba si es necesario.

7. **No caucionar las resultas de la apelación:** Si el ejecutante apela de la sentencia que rechaza la demanda y quiere que se suspenda el alzamiento del embargo, debe caucionar. Si el ejecutado apela de la sentencia de pago y el ejecutante quiere rematar, debe caucionar.

8. **Embargar bienes inembargables:** Si se embargan bienes del artículo 445 CPC (lecho, ropa, herramientas de trabajo, etc.), el ejecutado pide el alzamiento y el ejecutante pierde tiempo y dinero. **Solución:** Antes de embargar, verificar que los bienes no sean inembargables; si el deudor no tiene bienes embargables, pedir que se declare la insolvencia o desistirse de la demanda.

9. **No liquidar el crédito antes de pedir el pago:** Si el ejecutante pide que se le pague sin presentar liquidación, el tribunal no puede ordenar el pago. **Solución:** Después de aprobado el remate, presentar liquidación detallada (capital, intereses día a día, reajustes según índice, costas procesales y personales).

10. **No verificar la vigencia de la personería del ejecutante:** Si el ejecutante es persona jurídica y su representante legal cambió, el poder del abogado puede ser inválido.

##### Decisiones estratégicas relevantes

1. **¿Demandar ejecutivamente o por la vía ordinaria?** Si el pagaré cumple los requisitos del artículo 102 y la firma está autorizada ante notario, la vía ejecutiva es más rápida (sentencia en 2 a 4 meses, versus 1 a 2 años en juicio ordinario). Pero si el deudor tiene defensas sólidas (pago, nulidad, prescripción), puede ser preferible la vía ordinaria, donde el ejecutante tiene más oportunidades de probar su crédito.

2. **¿Embargar bienes muebles o raíces?** Los muebles se rematan más rápido (10 a 20 días), pero suelen tener menor valor de realización. Los raíces tardan más (3 a 6 meses entre tasación, publicación de avisos y remate), pero aseguran mejor el pago. **Estrategia:** Si la deuda es pequeña y urgente, embargar muebles; si es grande, embargar raíces o vehículos (que se inscriben en el Registro de Prohibiciones del Conservador de Bienes Raíces o del Registro de Vehículos Motorizados).

3. **¿Designar como depositario al ejecutante, al deudor o a un tercero?** Si se designa al ejecutante, él controla los bienes y puede usarlos (por ejemplo, arrendar un inmueble embargado y cobrar las rentas). Si se designa al deudor, él sigue usando los bienes, pero responde como depositario (puede ser apremiado si los enajena). Si se designa a un tercero, hay más garantía de imparcialidad, pero el depositario cobra honorarios (que se cargan a las costas). **Estrategia:** Designar al ejecutante si los bienes producen renta; al deudor si son de uso personal (vehículo, maquinaria) y se quiere evitar conflicto; a un tercero si hay riesgo de que el deudor enajene los bienes.

4. **¿Apelar de la sentencia de pago o conformarse?** Si el ejecutado tiene defensas débiles y la sentencia es correcta, apelar solo dilata el pago y aumenta las costas. Pero si hay un vicio formal (falta de emplazamiento, omisión de prueba) o un error de derecho (por ejemplo, el tribunal rechazó la excepción de prescripción estando prescrita la acción), la apelación puede prosperar. **Estrategia:** Apelar solo si hay fundamento serio; en caso contrario, pagar o negociar con el ejecutante.

5. **¿Pedir el cumplimiento de la sentencia caucionando las resultas de la apelación?** Si el ejecutante necesita cobrar urgentemente y tiene recursos para caucionar, puede rematar los bienes aunque el ejecutado haya apelado. Pero si la Corte revoca la sentencia, deberá devolver lo pagado (con reajustes e intereses), lo que puede ser costoso. **Estrategia:** Caucionar solo si la sentencia es sólida y el riesgo de revocación es bajo; en caso contrario, esperar el fallo de la Corte.

---

#### Lista de verificación

**Antes de demandar:**

- [ ] Pagaré original en poder, con todas las menciones del artículo 102 de la Ley 18.092 (indicación de ser pagaré, promesa de pagar, monto, fecha de vencimiento, beneficiario, lugar y fecha de expedición, firma del suscriptor).
- [ ] Firma del suscriptor autorizada ante notario u Oficial del Registro Civil (si no, verificar si se hizo gestión preparatoria de reconocimiento o si el pagaré fue protestado personalmente sin tacha de falsedad).
- [ ] Acción ejecutiva no prescrita (menos de 1 año desde el vencimiento).
- [ ] Cálculo de la deuda actualizado (capital, intereses si los hay, reajustes si los hay).
- [ ] Certificado de vigencia de personería del ejecutante (si es persona jurídica), con antigüedad no superior a 60 días (no verificado en esta búsqueda).
- [ ] Patrocinio de abogado habilitado y poder a mandatario judicial.
- [ ] Tribunal competente verificado (lugar de pago o de expedición del pagaré, o domicilio del deudor).

**Al presentar la demanda:**

- [ ] Demanda cumple requisitos del artículo 254 CPC (designación del tribunal, individualización de las partes, exposición de hechos y fundamentos, peticiones concretas).
- [ ] Pagaré original acompañado y marcado.
- [ ] Documentos de personería acompañados (certificado de vigencia, poder, etc.).
- [ ] Patrocinio y poder constituidos en primer y segundo otrosí.
- [ ] Designación de depositario provisional (o solicitud de que se designe al ejecutante o al deudor).
- [ ] Bienes a embargar individualizados (si se conocen).

**Después del despacho del mandamiento:**

- [ ] Mandamiento entregado al receptor judicial con instrucciones claras (requerir personalmente al deudor; si no es habido, proceder conforme al artículo 44).
- [ ] Receptor notificó el mandamiento y requirió de pago al deudor (verificar acta de requerimiento).
- [ ] Embargo trabado sobre bienes suficientes (verificar acta de embargo).
- [ ] Depositario aceptó el cargo (verificar acta de aceptación).

**Si el ejecutado opone excepciones:**

- [ ] Excepciones opuestas dentro del plazo de 8 días útiles desde el requerimiento.
- [ ] Excepciones contestadas dentro del plazo de 8 días útiles desde la notificación por estado diario.
- [ ] Prueba solicitada si hay hechos controvertidos (lista de testigos, documentos, etc.).
- [ ] Prueba rendida dentro del término probatorio.

**Antes de la sentencia:**

- [ ] Causa en estado de sentencia (conclusos los autos).

**Después de la sentencia:**

- [ ] Sentencia notificada por el estado diario (verificar fecha de notificación para contar plazo de recursos).
- [ ] Recursos interpuestos en plazo (apelación, casación) si corresponde.
- [ ] Sentencia firme y ejecutoriada (si no se apeló o si la Corte confirmó).

**Al pedir el cumplimiento:**

- [ ] Bienes embargados tasados o avaluados.
- [ ] Día y hora de remate fijados.
- [ ] Avisos de remate publicados (si son bienes raíces; verificar artículo 489 CPC).
- [ ] Remate realizado y aprobado.
- [ ] Liquidación del crédito presentada y aprobada.
- [ ] Pago al ejecutante ordenado y efectuado.
- [ ] Embargo alzado y saldo devuelto al ejecutado (si lo hay).

---

#### Qué verificar antes de actuar

- **Datos marcados como no verificados en esta guía:** Plazo de prescripción de la acción ejecutiva del pagaré a la vista (verificar en Ley 18.092); plazo para apelar de la sentencia en el juicio ejecutivo (verificar si es 5 o 15 días); término probatorio en el ejecutivo (verificar si es 10 días útiles); monto de la cuantía para casación en el fondo (verificar si es 1.000 UTM o ha sido modificado); antigüedad del certificado de vigencia de personería (verificar práctica del tribunal); necesidad de protesto del pagaré para conservar acciones contra endosantes y avalistas (verificar Ley 18.092).

- **Autos acordados aplicables:** Verificar en el sitio del Poder Judicial si el tribunal tiene autos acordados sobre tramitación electrónica, remates, liquidación de créditos, etc.

- **Vigencia de normas:** La Ley 21.394 de 2021 modificó plazos del Código de Procedimiento Civil (por ejemplo, el plazo para oponer excepciones en el ejecutivo pasó de 4 a 8 días útiles, según el artículo 459 vigente). Verificar que los plazos citados en esta guía correspondan a la versión vigente del CPC a la fecha de hoy (25 de septiembre de 2026).

- **Criterios del tribunal:** Algunos tribunales exigen que el certificado de vigencia de personería tenga antigüedad no superior a 30 o 60 días; otros aceptan certificados más antiguos. Algunos exigen que la liquidación del crédito se presente en formato de planilla Excel; otros aceptan liquidación en el cuerpo del escrito. Verificar la práctica del tribunal antes de presentar la demanda o la liquidación.

- **Valor de la UF y la UTM:** Los valores indicados en esta guía (UF $41.016,28 y UTM $71.721) corresponden al 25 de septiembre de 2026. Si la demanda se presenta en otra fecha, verificar el valor vigente en el sitio del Banco Central o del SII.

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### g02-despido — procedimiento: Demanda por despido injustificado en procedimiento de aplicación general

<details><summary>Material enviado al modelo (14 normas, 2 fallos o dictámenes, 1 artículos de doctrina; 0 normas descartadas por materia)</summary>

- Código del Trabajo, Artículo 160
- Código del Trabajo, Artículo 161
- Código del Trabajo, Artículo 162
- Código del Trabajo, Artículo 163
- Código del Trabajo, Artículo 168
- Código del Trabajo, Artículo 446
- Código del Trabajo, Artículo 169
- Código del Trabajo, Artículo 170
- Código del Trabajo, Artículo 171
- Código del Trabajo, Artículo 172
- Código de Procedimiento Civil, Artículo 254
- Código de Procedimiento Civil, Artículo 255
- CIR Bancos 2409, recopilacion actualizada de normas, Artículo 102
- Ley 20.260, modifica el libro v del código del trabajo y la ley n° 20.087, que establece un nuevo procedimiento laboral, Artículo 484
- Jurisprudencia: Dirección del Trabajo, Dictamen ORD. N°887, 2021-03-10
- Jurisprudencia: Dirección del Trabajo, Dictamen ORD. Nº4646/43, 2012-10-23
- Doctrina: Castro-Morales, Álvaro; Contreras-Chaimovich, Lautaro, "Revocación de la libertad condicional: alcance y sentido de la causal de incumplimiento injustificado del plan de intervención", Revista de derecho (Valdivia), vol. 38, N° 1, (2025), pp. 201-226, DOI: 10.4067/s0718-09502025000100201.

Versión anterior (main):
- Código del Trabajo, Artículo 160
- Código del Trabajo, Artículo 161
- Código del Trabajo, Artículo 162
- Código del Trabajo, Artículo 163
- Código del Trabajo, Artículo 168
- Código del Trabajo, Artículo 169
- Código del Trabajo, Artículo 171
- Código del Trabajo, Artículo 172
- Código del Trabajo, Artículo 173
- Código de Procedimiento Civil, Artículo 254
- Código del Trabajo, (artículo no identificado)
- Código del Trabajo, Artículo 161
- Código del Trabajo, Artículo 67

</details>

#### Ficha del procedimiento

| Aspecto | Detalle |
|---------|---------|
| **Tipo de procedimiento** | Juicio laboral por despido injustificado, indebido o improcedente (procedimiento de aplicación general) |
| **Normas aplicables** | Código del Trabajo, artículos 160, 161, 162, 163, 168, 169, 170, 171, 172, 446 y siguientes; Ley 20.260 (procedimiento laboral); Código de Procedimiento Civil (supletorio) |
| **Tribunal competente** | **Materia:** Juzgado de Letras del Trabajo. **Cuantía:** Sin límite mínimo; si la cuantía es igual o inferior a 10 ingresos mínimos mensuales (sin considerar aumentos de los incisos 5° y 7° del artículo 162), procede procedimiento monitorio (artículo 496). **Territorio:** Domicilio del demandado o lugar de prestación de servicios, a elección del trabajador (no verificado en esta búsqueda). |
| **Comparecencia** | Ley 18.120: el trabajador puede comparecer personalmente en primera instancia si la cuantía no excede 10 ingresos mínimos mensuales; en los demás casos, requiere patrocinio de abogado habilitado. El empleador siempre debe comparecer con patrocinio y poder. |
| **Prescripción o caducidad** | **Plazo:** 60 días hábiles desde la separación (artículo 168, inciso 1°). **Suspensión:** Se suspende si dentro de ese plazo el trabajador reclama ante la Inspección del Trabajo; el plazo continúa una vez concluido el trámite administrativo. **Plazo máximo:** En ningún caso puede recurrirse al tribunal transcurridos 90 días hábiles desde la separación (artículo 168, inciso final). |
| **Tramitación electrónica** | Ley 20.886: Oficina Judicial Virtual obligatoria para presentación de escritos y notificaciones electrónicas. El abogado patrocinante y el mandatario judicial deben designar medio de notificación electrónico en la demanda (artículo 254 N° 2 CPC, aplicable supletoriamente). |

#### Antes de demandar

**Antecedentes y documentos necesarios:**

- **Carta de despido:** Comunicación escrita del empleador que invoca la causal de término (artículo 162), con indicación de la causal, los hechos y el monto de indemnizaciones si corresponde.
- **Contrato de trabajo:** Original o copia, con todas sus modificaciones.
- **Liquidaciones de remuneraciones:** Últimos tres meses (para calcular la base de indemnización si hay remuneraciones variables, artículo 172).
- **Comprobantes de pago de cotizaciones previsionales:** Hasta el último día del mes anterior al despido (artículo 162, inciso 5°).
- **Finiquito (si existe):** Para verificar si se firmó con o sin reserva de derechos.
- **Comunicaciones, correos, testigos:** Cualquier prueba que acredite que la causal invocada es injustificada, indebida o improcedente, o que no se invocó causal alguna.

**Gestiones previas:**

- **Reclamo ante la Inspección del Trabajo (opcional pero recomendable):** Aunque no es obligatorio en el procedimiento de aplicación general (a diferencia del monitorio), presentar un reclamo administrativo **suspende** el plazo de 60 días hábiles para demandar (artículo 168, inciso final). Esto permite ganar tiempo y eventualmente obtener una conciliación. El plazo de 60 días continúa corriendo una vez concluido el trámite ante la Inspección, pero en ningún caso puede recurrirse al tribunal después de 90 días hábiles desde la separación.
- **Revisión de la carta de despido:** Verificar que cumpla con los requisitos del artículo 162: comunicación dentro de 3 días hábiles (o 6 si es la causal del artículo 159 N° 6), con indicación precisa de la causal y los hechos, y copia a la Inspección del Trabajo. Si hay errores u omisiones no relacionados con el pago de cotizaciones, no invalidan el despido, pero pueden ser argumentos para impugnarlo (artículo 162, inciso 9°).
- **Verificación del pago de cotizaciones:** Si el empleador no pagó íntegramente las cotizaciones previsionales devengadas hasta el último día del mes anterior al despido, el despido **no produce efecto** (artículo 162, inciso 5°). El empleador puede convalidarlo pagando las imposiciones morosas y comunicándolo por carta certificada con documentación de las instituciones previsionales (artículo 162, inciso 6°). Si el monto adeudado no excede el 10% de la deuda previsional o 2 UTM, y se paga dentro de 15 días hábiles desde la notificación de la demanda, el empleador no debe las remuneraciones del período intermedio (artículo 162, inciso 7°).

#### Tramitación paso a paso

##### Etapa 1: Presentación de la demanda

**Qué se hace:** El trabajador presenta demanda escrita ante el Juzgado de Letras del Trabajo competente, solicitando que se declare el despido injustificado, indebido o improcedente, y se condene al empleador al pago de las indemnizaciones legales con los recargos correspondientes.

**Quién:** El trabajador, personalmente (si la cuantía no excede 10 ingresos mínimos mensuales) o a través de abogado patrocinante y mandatario judicial.

**Plazo y cómputo:** Dentro de 60 días hábiles desde la separación, o dentro de 90 días hábiles como plazo máximo si se suspendió el plazo por reclamo administrativo (artículo 168, inciso 1° y final). Días hábiles: de lunes a viernes, excluyendo feriados.

**Norma:** Artículos 168 inciso 1°, 446 Código del Trabajo.

**Si se omite:** Preclusión del derecho a reclamar; el despido queda firme con la causal invocada por el empleador o sin indemnización si no se invocó causal.

**Contenido de la demanda (artículo 446):**

1. Designación del tribunal.
2. Nombre, apellidos, domicilio y profesión u oficio del demandante y de sus representantes, y naturaleza de la representación.
3. Nombre, apellidos, domicilio y profesión u oficio del demandado.
4. Exposición clara y circunstanciada de los hechos y consideraciones de derecho.
5. Enunciación precisa y concreta de las peticiones.

**Documentos a acompañar:** La prueba documental solo puede presentarse en la audiencia preparatoria, **excepto** aquella que dé cuenta de actuaciones administrativas referidas a los hechos de la demanda (artículo 446, inciso 2°). Por tanto, si hubo reclamo ante la Inspección del Trabajo, debe acompañarse el acta o resolución administrativa con la demanda.

##### Etapa 2: Examen de admisibilidad y traslado

**Qué se hace:** El tribunal examina si la demanda cumple los requisitos formales. Si los cumple, confiere traslado al demandado para que conteste. Si no los cumple, puede declarar la inadmisibilidad o conceder un plazo para subsanar.

**Quién:** El juez del trabajo.

**Plazo y cómputo:** El tribunal debe pronunciarse de inmediato.

**Norma:** Artículos 446, 447 y siguientes del Código del Trabajo.

**Si se omite:** Si el tribunal no confiere traslado, el procedimiento no avanza; el trabajador puede solicitar que se dé curso a la demanda.

##### Etapa 3: Notificación de la demanda

**Qué se hace:** Se notifica la demanda y la resolución que confiere traslado al empleador demandado.

**Quién:** Receptor judicial o notificación electrónica (si el demandado tiene medio de notificación electrónico designado).

**Plazo y cómputo:** La notificación debe practicarse dentro del plazo que fije el tribunal.

**Norma:** Artículos sobre notificaciones del Código del Trabajo y CPC (supletorio).

**Si se omite:** Si no se notifica, el demandado no queda emplazado y el procedimiento no puede continuar.

##### Etapa 4: Contestación de la demanda

**Qué se hace:** El empleador demandado contesta la demanda por escrito, exponiendo sus defensas, excepciones y pruebas. Puede allanarse, oponerse o reconocer parcialmente los hechos.

**Quién:** El empleador, a través de abogado patrocinante y mandatario judicial.

**Norma:** Artículos sobre contestación de la demanda en el Código del Trabajo.

**Si se omite:** Si el demandado no contesta, se le tiene por rebelde. La rebeldía no equivale a confesión, pero el tribunal puede estimar los hechos de la demanda como no controvertidos si no se oponen defensas.

**Bifurcación:**

- **Si el demandado se allana:** Reconoce los hechos y la procedencia de las indemnizaciones. El tribunal puede dictar sentencia de inmediato o citar a audiencia para fijar el monto.
- **Si el demandado contesta oponiendo excepciones:** El procedimiento continúa con la audiencia preparatoria.
- **Si el demandado no contesta (rebeldía):** El tribunal cita a audiencia preparatoria de todos modos, pero puede tener por no controvertidos los hechos de la demanda.

##### Etapa 5: Audiencia preparatoria

**Qué se hace:** Audiencia oral ante el juez, en la que se intenta conciliar, se precisan los hechos controvertidos, se reciben las excepciones dilatorias, se fija el objeto del juicio y se ofrece y admite la prueba.

**Quién:** El juez del trabajo, el trabajador (o su abogado) y el empleador (o su abogado).

**Norma:** Artículos sobre audiencia preparatoria en el Código del Trabajo.

**Si se omite:** Si alguna parte no comparece, la audiencia se celebra con la que asista. Si no comparece el demandante, puede tenerse por abandonada la demanda. Si no comparece el demandado, se tiene por rebelde.

**Desarrollo de la audiencia:**

1. **Conciliación:** El juez llama a las partes a conciliar. Si hay acuerdo, se levanta acta y se aprueba por sentencia. Si no hay acuerdo, continúa la audiencia.
2. **Excepciones dilatorias:** El demandado puede oponer excepciones dilatorias (incompetencia, falta de capacidad, etc.). El juez las resuelve de inmediato o las deja para la sentencia definitiva.
3. **Precisión de hechos controvertidos:** Las partes exponen los hechos que aceptan y los que controvierten.
4. **Ofrecimiento de prueba:** Cada parte ofrece sus medios de prueba (testigos, documentos, peritajes, etc.). La prueba documental debe presentarse en esta audiencia (artículo 446, inciso 2°).
5. **Admisión de prueba:** El juez admite o rechaza la prueba ofrecida, según su pertinencia y legalidad.

##### Etapa 6: Audiencia de juicio oral

**Qué se hace:** Audiencia oral en la que se rinde la prueba, se formulan alegatos y el juez dicta sentencia.

**Quién:** El juez del trabajo, el trabajador (o su abogado) y el empleador (o su abogado).

**Norma:** Artículos sobre audiencia de juicio en el Código del Trabajo.

**Si se omite:** Si alguna parte no comparece, la audiencia se celebra con la que asista. Si no comparece el demandante, puede tenerse por abandonada la demanda. Si no comparece el demandado, se tiene por rebelde y se rinde la prueba del demandante.

**Desarrollo de la audiencia:**

1. **Rendición de prueba:** Se reciben los testimonios, se exhiben los documentos, se practican los peritajes, etc. El juez interroga a los testigos y las partes pueden repreguntar.
2. **Alegatos de clausura:** Cada parte formula sus alegatos finales, resumiendo la prueba y sus argumentos jurídicos.
3. La sentencia debe contener las menciones del artículo 459 del Código del Trabajo (no verificado en esta búsqueda).

##### Etapa 7: Notificación de la sentencia

**Qué se hace:** Se notifica la sentencia a las partes.

**Quién:** El tribunal, por el estado diario o por notificación electrónica.

**Plazo y cómputo:** La sentencia se entiende notificada desde que se dicta en la audiencia, si las partes estuvieron presentes. Si no, se notifica por el estado diario o electrónicamente.

**Norma:** Artículos sobre notificaciones del Código del Trabajo.

**Si se omite:** Si no se notifica, no corre el plazo para recurrir.

##### Etapa 8: Recursos

**Qué se hace:** Las partes pueden interponer recursos de reposición, apelación o nulidad, según corresponda.

**Quién:** La parte agraviada.

**Plazo y cómputo:** 

**Norma:** Artículos sobre recursos en el Código del Trabajo.

**Si se omite:** Si no se recurre dentro del plazo, la sentencia queda firme y ejecutoriada.

##### Etapa 9: Sentencia firme y ejecutoriada

**Qué se hace:** Una vez que la sentencia queda firme (porque no se recurrió o porque se resolvieron los recursos), puede ejecutarse.

**Quién:** El tribunal de primera instancia.

**Plazo y cómputo:** La sentencia queda firme cuando transcurren los plazos para recurrir sin que se haya recurrido, o cuando se resuelven los recursos interpuestos.

**Norma:** Artículos sobre ejecución de sentencias en el Código del Trabajo y CPC (supletorio).

**Si se omite:** Si no se ejecuta, el trabajador no cobra las indemnizaciones.

##### Etapa 10: Cumplimiento de la sentencia

**Qué se hace:** Si el empleador no paga voluntariamente, el trabajador solicita el cumplimiento forzado de la sentencia mediante procedimiento ejecutivo laboral.

**Quién:** El trabajador, a través de su abogado.

**Norma:** Artículos sobre ejecución de sentencias laborales en el Código del Trabajo.

**Si se omite:** Si no se solicita el cumplimiento, el empleador no paga y el trabajador pierde el derecho por prescripción.

#### Escritos clave

##### Demanda por despido injustificado

**Suma:**
- En lo principal: Demanda por despido injustificado.
- Primer otrosí: Acompaña documentos.
- Segundo otrosí: Patrocinio y poder.

**Estructura y contenido mínimo:**

**EN LO PRINCIPAL:**

S.J.L. del Trabajo de [ciudad]

[Nombre del trabajador], [profesión u oficio], domiciliado en [dirección], RUT [número], patrocinado por el abogado [nombre], domiciliado en [dirección], a US. respetuosamente digo:

Que, por la presente, vengo en demandar a [nombre del empleador], [profesión u oficio o giro], domiciliado en [dirección], RUT [número], por despido injustificado, indebido o improcedente, solicitando se declare la improcedencia de la causal invocada y se condene al demandado al pago de las indemnizaciones legales con los recargos correspondientes, conforme a los siguientes hechos y fundamentos de derecho:

**I. HECHOS:**

1. Con fecha [fecha de inicio], ingresé a prestar servicios para el demandado en calidad de [cargo], con una remuneración mensual de $[monto] (o [monto] UF).

2. El contrato de trabajo se mantuvo vigente hasta el [fecha de término], fecha en que el empleador me comunicó el término del contrato invocando la causal del artículo [160 o 161] del Código del Trabajo, consistente en [descripción de la causal].

3. La causal invocada es [injustificada/indebida/improcedente] por las siguientes razones: [exponer los hechos que demuestran que la causal no se configuró, que no se acreditó, que no se cumplieron los requisitos legales, etc.].

4. [Si corresponde:] El empleador no pagó íntegramente las cotizaciones previsionales devengadas hasta el último día del mes anterior al despido, por lo que el despido no produjo efecto conforme al artículo 162 inciso 5° del Código del Trabajo.

5. [Si corresponde:] El empleador no cumplió con los requisitos formales del artículo 162, tales como [no envió la carta dentro del plazo, no indicó los hechos, no envió copia a la Inspección del Trabajo, etc.].

**II. FUNDAMENTOS DE DERECHO:**

1. El despido es injustificado [o indebido o improcedente] conforme al artículo 168 del Código del Trabajo, por cuanto [argumentar jurídicamente].

2. Corresponde el pago de la indemnización sustitutiva del aviso previo del artículo 162 inciso 4°, equivalente a la última remuneración mensual devengada, esto es, $[monto].

3. Corresponde el pago de la indemnización por años de servicio del artículo 163 inciso 2°, equivalente a 30 días de la última remuneración mensual por cada año de servicio y fracción superior a 6 meses, con un tope de 330 días. En mi caso, trabajé [número] años y [número] meses, por lo que la indemnización asciende a $[monto].

4. Conforme al artículo 168, la indemnización del artículo 163 debe incrementarse en un [30%, 50%, 80% o 100%], según corresponda, por lo que el monto total asciende a $[monto].

5. [Si corresponde:] Conforme al artículo 162 inciso 7°, el empleador debe pagar las remuneraciones y demás prestaciones del período comprendido entre la fecha del despido y la fecha de convalidación del despido por pago de cotizaciones morosas, esto es, $[monto].

**III. PETICIONES:**

Por tanto, y en conformidad a lo expuesto y a lo dispuesto en los artículos 160, 161, 162, 163, 168 y siguientes del Código del Trabajo,

RUEGO A US. tener por interpuesta demanda por despido injustificado [o indebido o improcedente] en contra de [nombre del empleador], acogerla a tramitación, conferir traslado al demandado y, en definitiva, acogerla en todas sus partes, declarando que el despido es injustificado [o indebido o improcedente] y condenando al demandado a pagar las siguientes sumas:

a) Indemnización sustitutiva del aviso previo: $[monto].
b) Indemnización por años de servicio: $[monto].
c) Recargo del [30%, 50%, 80% o 100%] sobre la indemnización por años de servicio: $[monto].
d) [Si corresponde:] Remuneraciones del período intermedio: $[monto].
e) Reajustes e intereses legales desde la fecha de la mora hasta el pago efectivo.
f) Costas de la causa.

**PRIMER OTROSÍ:** Acompaño los siguientes documentos:

1. Copia de la carta de despido de fecha [fecha].
2. [Si corresponde:] Acta de comparendo ante la Inspección del Trabajo de fecha [fecha].
3. [Otros documentos que den cuenta de actuaciones administrativas].

**SEGUNDO OTROSÍ:** Patrocinio y poder.

Designo como abogado patrocinante a don [nombre], RUT [número], domiciliado en [dirección], y confiero poder a don [nombre], RUT [número], domiciliado en [dirección], ambos con el siguiente medio de notificación electrónico: [correo electrónico].

[Lugar y fecha]

[Firma del trabajador]
[Firma del abogado patrocinante]

---

##### Contestación de la demanda (modelo para el empleador)

**Suma:**
- En lo principal: Contesta demanda.
- Primer otrosí: Acompaña documentos.
- Segundo otrosí: Patrocinio y poder.

**Estructura y contenido mínimo:**

**EN LO PRINCIPAL:**

S.J.L. del Trabajo de [ciudad]

[Nombre del empleador], [profesión u oficio o giro], domiciliado en [dirección], RUT [número], patrocinado por el abogado [nombre], domiciliado en [dirección], en autos Rol C-[número]-[año], caratulados "[Nombre del trabajador] con [Nombre del empleador]", a US. respetuosamente digo:

Que, dentro del plazo legal, vengo en contestar la demanda interpuesta en mi contra por don [nombre del trabajador], solicitando su rechazo en todas sus partes, conforme a los siguientes hechos y fundamentos de derecho:

**I. HECHOS:**

1. Es efectivo que el demandante prestó servicios para mi representada desde el [fecha de inicio] hasta el [fecha de término], en calidad de [cargo], con una remuneración mensual de $[monto].

2. Es efectivo que el contrato de trabajo terminó el [fecha de término], invocándose la causal del artículo [160 o 161] del Código del Trabajo, consistente en [descripción de la causal].

3. La causal invocada es procedente y se encuentra debidamente acreditada, por cuanto [exponer los hechos que demuestran que la causal se configuró, que se cumplieron los requisitos legales, etc.].

4. [Si corresponde:] Se cumplió con todos los requisitos formales del artículo 162, tales como [envío de la carta dentro del plazo, indicación de los hechos, envío de copia a la Inspección del Trabajo, pago de cotizaciones previsionales, etc.].

5. [Si corresponde:] Se pagaron íntegramente las cotizaciones previsionales devengadas hasta el último día del mes anterior al despido, conforme consta en los comprobantes que se acompañan.

**II. FUNDAMENTOS DE DERECHO:**

1. El despido es justificado [o procedente] conforme al artículo [160 o 161] del Código del Trabajo, por cuanto [argumentar jurídicamente].

2. No corresponde el pago de indemnizaciones con recargo, por cuanto la causal invocada es procedente y se encuentra debidamente acreditada.

3. [Si corresponde:] Se pagaron las indemnizaciones legales al momento del despido, conforme consta en el finiquito que se acompaña.

**III. PETICIONES:**

Por tanto, y en conformidad a lo expuesto y a lo dispuesto en los artículos 160, 161, 162, 163, 168 y siguientes del Código del Trabajo,

RUEGO A US. tener por contestada la demanda, rechazarla en todas sus partes y, en definitiva, absolver a mi representada de todos los cargos formulados en su contra, con expresa condenación en costas al demandante.

**PRIMER OTROSÍ:** Acompaño los siguientes documentos:

1. Copia del contrato de trabajo.
2. Copia de la carta de despido.
3. Comprobantes de pago de cotizaciones previsionales.
4. [Si corresponde:] Finiquito.
5. [Otros documentos que acrediten la procedencia de la causal].

**SEGUNDO OTROSÍ:** Patrocinio y poder.

Designo como abogado patrocinante a don [nombre], RUT [número], domiciliado en [dirección], y confiero poder a don [nombre], RUT [número], domiciliado en [dirección], ambos con el siguiente medio de notificación electrónico: [correo electrónico].

[Lugar y fecha]

[Firma del empleador o representante legal]
[Firma del abogado patrocinante]

#### Tabla de plazos

| Etapa | Plazo | Cómputo | Norma | Consecuencia |
|-------|-------|---------|-------|--------------|
| Presentación de la demanda | 60 días hábiles (o 90 días hábiles como máximo si hubo reclamo administrativo) | Desde la separación | Art. 168 inc. 1° y final CT | Preclusión del derecho a reclamar |
| Contestación de la demanda | 15 días hábiles (no verificado en esta búsqueda) | Desde la notificación de la demanda | Arts. sobre contestación CT | Rebeldía del demandado |
| Audiencia preparatoria | 20 días (no verificado en esta búsqueda) | Desde la contestación o vencimiento del plazo para contestar | Arts. sobre audiencia preparatoria CT | Retraso en el procedimiento |
| Audiencia de juicio oral | 30 días (no verificado en esta búsqueda) | Desde la audiencia preparatoria | Arts. sobre audiencia de juicio CT | Retraso en el procedimiento |
| Sentencia | 15 días (no verificado en esta búsqueda) | Desde el término de la audiencia de juicio | Arts. sobre sentencia CT | Retraso en el procedimiento |
| Recurso de reposición | 5 días hábiles (no verificado en esta búsqueda) | Desde la notificación de la resolución | Arts. sobre recursos CT | Preclusión del derecho a recurrir |
| Recurso de apelación | 5 días hábiles (no verificado en esta búsqueda) | Desde la notificación de la sentencia | Arts. sobre recursos CT | Preclusión del derecho a recurrir |
| Recurso de nulidad | 10 días hábiles (no verificado en esta búsqueda) | Desde la notificación de la sentencia | Arts. sobre recursos CT | Preclusión del derecho a recurrir |

#### Recursos

**Contra la sentencia definitiva:**

- **Recurso de apelación:** Procede contra la sentencia definitiva de primera instancia. Plazo: 5 días hábiles desde la notificación (no verificado en esta búsqueda). Se interpone ante el tribunal que dictó la sentencia y lo conoce la Corte de Apelaciones respectiva. Efecto: suspensivo (no verificado en esta búsqueda).

- **Recurso de nulidad:** Procede por vicios del procedimiento o de la sentencia que influyan sustancialmente en lo dispositivo del fallo. Plazo: 10 días hábiles desde la notificación (no verificado en esta búsqueda). Se interpone ante el tribunal que dictó la sentencia y lo conoce la Corte de Apelaciones respectiva. Efecto: suspensivo (no verificado en esta búsqueda).

- **Recurso de unificación de jurisprudencia:** No procede en el procedimiento de aplicación general, según el artículo 502 del Código del Trabajo (aplicable al procedimiento monitorio, pero no al de aplicación general; verificar si aplica al procedimiento de aplicación general).

**Contra resoluciones interlocutorias:**

- **Recurso de reposición:** Procede contra resoluciones interlocutorias. Plazo: 5 días hábiles desde la notificación (no verificado en esta búsqueda). Se interpone ante el mismo tribunal que dictó la resolución. Efecto: no suspensivo, salvo que se solicite expresamente y el tribunal lo conceda.

- **Recurso de apelación:** Procede contra resoluciones interlocutorias que pongan término al juicio o hagan imposible su continuación. Plazo: 5 días hábiles desde la notificación (no verificado en esta búsqueda). Se interpone ante el tribunal que dictó la resolución y lo conoce la Corte de Apelaciones respectiva. Efecto: suspensivo (no verificado en esta búsqueda).

#### Errores frecuentes y estrategia

**Errores frecuentes:**

1. **Dejar pasar el plazo de 60 días hábiles:** Es el error más grave. El plazo es fatal y no se puede prorrogar. Si se deja pasar, se pierde el derecho a reclamar. **Solución:** Presentar la demanda dentro del plazo, aunque falten antecedentes; se pueden completar después. Si se está cerca del plazo, presentar un reclamo ante la Inspección del Trabajo para suspenderlo.

2. **No acompañar el acta de la Inspección del Trabajo con la demanda:** Si hubo reclamo administrativo, el acta debe acompañarse con la demanda (artículo 446, inciso 2°). Si no se acompaña, el tribunal puede rechazar la demanda o conceder un plazo para subsanar.

3. **No verificar el pago de cotizaciones previsionales:** Si el empleador no pagó las cotizaciones, el despido no produce efecto (artículo 162, inciso 5°). Esto debe alegarse en la demanda y acreditarse. **Solución:** Solicitar a la AFP, Isapre o Fonasa un certificado de cotizaciones impagas.

4. **No calcular correctamente la base de la indemnización:** La base es la última remuneración mensual, que incluye todas las cantidades que el trabajador percibía al momento del término, con exclusión de asignación familiar, sobretiempo y beneficios esporádicos (artículo 172). Si hay remuneraciones variables, se calcula sobre el promedio de los últimos 3 meses. El tope es 90 UF. **Solución:** Revisar las liquidaciones de los últimos 3 meses y calcular correctamente.

5. **No solicitar el recargo correcto:** El recargo depende de la causal invocada y de si el despido es injustificado, indebido o improcedente (artículo 168). **Solución:** Identificar correctamente la causal y el tipo de improcedencia, y solicitar el recargo correspondiente.

6. **No presentar prueba documental en la audiencia preparatoria:** La prueba documental solo puede presentarse en la audiencia preparatoria (artículo 446, inciso 2°), salvo la que dé cuenta de actuaciones administrativas. Si no se presenta, no se puede rendir después. **Solución:** Preparar toda la prueba documental antes de la audiencia preparatoria.

7. **No comparecer a las audiencias:** Si el trabajador no comparece a la audiencia preparatoria o de juicio, puede tenerse por abandonada la demanda. Si el empleador no comparece, se tiene por rebelde. **Solución:** Asistir siempre a las audiencias, aunque sea solo para solicitar una suspensión.

**Estrategia:**

- **Para el trabajador:**
  - **Presentar la demanda dentro del plazo:** No esperar hasta el último día; presentarla con tiempo para corregir errores.
  - **Reclamar ante la Inspección del Trabajo:** Aunque no sea obligatorio, permite suspender el plazo de 60 días y eventualmente obtener una conciliación.
  - **Acreditar el no pago de cotizaciones:** Si el empleador no pagó las cotizaciones, el despido no produce efecto. Esto es un argumento muy fuerte.
  - **Solicitar el recargo máximo:** Si la causal es del artículo 160 (conductas graves), el recargo es del 80% o 100%. Si es del artículo 161 (necesidades de la empresa), el recargo es del 30%.
  - **Preparar bien la prueba:** Testigos, correos, mensajes, documentos que acrediten que la causal no se configuró o que el empleador no cumplió los requisitos formales.
  - **Conciliar si la oferta es razonable:** En la audiencia preparatoria, evaluar si la oferta del empleador es razonable. A veces es mejor conciliar que arriesgarse a perder el juicio.

- **Para el empleador:**
  - **Cumplir con los requisitos formales del artículo 162:** Enviar la carta de despido dentro del plazo (3 o 6 días hábiles), con indicación precisa de la causal y los hechos, y copia a la Inspección del Trabajo. Pagar las cotizaciones previsionales hasta el último día del mes anterior al despido.
  - **Acreditar la causal:** Preparar prueba documental y testimonial que acredite que la causal se configuró. Por ejemplo, si es falta de probidad, acreditar el hecho concreto; si es necesidades de la empresa, acreditar la baja en la productividad o los cambios en el mercado.
  - **Pagar las indemnizaciones legales:** Si se invocó la causal del artículo 161, pagar las indemnizaciones legales al momento del despido. Esto evita que el trabajador reclame y, si reclama, reduce el riesgo de recargo.
  - **Conciliar si el riesgo es alto:** Si la causal es débil o no se cumplieron los requisitos formales, evaluar conciliar en la audiencia preparatoria para evitar el recargo.

#### Lista de verificación

**Antes de demandar:**

- [ ] Verificar que no han transcurrido más de 60 días hábiles desde la separación (o 90 días hábiles si hubo reclamo administrativo).
- [ ] Obtener copia de la carta de despido.
- [ ] Obtener copia del contrato de trabajo y sus modificaciones.
- [ ] Obtener liquidaciones de remuneraciones de los últimos 3 meses.
- [ ] Obtener certificado de cotizaciones previsionales (AFP, Isapre, Fonasa).
- [ ] Verificar si el empleador pagó las cotizaciones hasta el último día del mes anterior al despido.
- [ ] Calcular la base de la indemnización (última remuneración mensual o promedio de los últimos 3 meses si hay remuneraciones variables).
- [ ] Calcular el monto de la indemnización por años de servicio (30 días por año, tope 330 días, base tope 90 UF).
- [ ] Identificar la causal invocada y el tipo de improcedencia (injustificada, indebida o improcedente).
- [ ] Calcular el recargo correspondiente (30%, 50%, 80% o 100%).
- [ ] Presentar reclamo ante la Inspección del Trabajo (opcional, pero recomendable para suspender el plazo).
- [ ] Obtener copia del acta del comparendo ante la Inspección del Trabajo (si hubo reclamo).

**Al presentar la demanda:**

- [ ] Verificar que la demanda contiene todas las menciones del artículo 446 (designación del tribunal, nombre y domicilio de las partes, exposición de hechos y derecho, peticiones).
- [ ] Acompañar el acta del comparendo ante la Inspección del Trabajo (si hubo reclamo).
- [ ] Designar abogado patrocinante y mandatario judicial, con medio de notificación electrónico.
- [ ] Solicitar todas las indemnizaciones que correspondan (sustitutiva del aviso previo, por años de servicio, recargo, remuneraciones del período intermedio, reajustes e intereses, costas).
- [ ] Verificar que el monto de las peticiones está correctamente calculado.

**Antes de la audiencia preparatoria:**

- [ ] Preparar toda la prueba documental (contratos, liquidaciones, correos, mensajes, certificados, etc.).
- [ ] Identificar y contactar a los testigos.
- [ ] Preparar un listado de los hechos que se aceptan y los que se controvierten.
- [ ] Preparar los argumentos para la conciliación (monto mínimo aceptable).
- [ ] Verificar la fecha, hora y lugar de la audiencia.
- [ ] Confirmar asistencia del abogado y del trabajador (si es necesario que comparezca personalmente).

**Antes de la audiencia de juicio:**

- [ ] Confirmar asistencia de los testigos.
- [ ] Preparar el interrogatorio de los testigos propios y las repreguntas a los testigos de la contraparte.
- [ ] Preparar los alegatos de clausura (resumen de la prueba y argumentos jurídicos).
- [ ] Revisar la prueba documental admitida en la audiencia preparatoria.
- [ ] Verificar la fecha, hora y lugar de la audiencia.

**Después de la sentencia:**

- [ ] Verificar si la sentencia acogió o rechazó la demanda.
- [ ] Calcular el plazo para recurrir (5 o 10 días hábiles, según el recurso).
- [ ] Evaluar si procede interponer recurso de apelación o nulidad.
- [ ] Si la sentencia es favorable, verificar si el empleador paga voluntariamente.
- [ ] Si el empleador no paga, solicitar el cumplimiento forzado mediante procedimiento ejecutivo.

**En el procedimiento ejecutivo:**

- [ ] Presentar demanda ejecutiva con copia autorizada de la sentencia firme.
- [ ] Solicitar el embargo de bienes del empleador.
- [ ] Verificar que el embargo se practique efectivamente.
- [ ] Solicitar el remate de los bienes embargados.
- [ ] Verificar que se pague el monto de la sentencia con el producto del remate.

#### Qué verificar antes de actuar

- Plazo para contestar la demanda (se indicó 15 días hábiles; confirmar en artículo 447 o siguientes del Código del Trabajo).
- Plazo para celebrar la audiencia preparatoria (se indicó 20 días; confirmar en el Código del Trabajo).
- Plazo para celebrar la audiencia de juicio (se indicó 30 días; confirmar en el Código del Trabajo).
- Plazo para dictar sentencia (se indicó 15 días; confirmar en el Código del Trabajo).
- Plazos para interponer recursos de reposición, apelación y nulidad (se indicaron 5, 5 y 10 días hábiles; confirmar en el Código del Trabajo).
- Efectos de los recursos (suspensivo o no suspensivo; confirmar en el Código del Trabajo).
- Tribunal competente por territorio (se indicó domicilio del demandado o lugar de prestación de servicios; confirmar en el Código del Trabajo o Código Orgánico de Tribunales).
- Plazo de prescripción de la acción ejecutiva (se indicó 3 años; confirmar en el Código del Trabajo o Código Civil).
- Menciones de la sentencia (se indicó artículo 459 del Código del Trabajo; confirmar su contenido).
- Procedencia del recurso de unificación de jurisprudencia en el procedimiento de aplicación general (se indicó que no procede según artículo 502, pero ese artículo se refiere al procedimiento monitorio; confirmar si aplica al procedimiento de aplicación general).

**Autos acordados aplicables:**

- Verificar si existen autos acordados de la Corte Suprema o de las Cortes de Apelaciones sobre tramitación de causas laborales, notificaciones electrónicas, audiencias telemáticas, etc.

**Vigencia de normas:**

- Sin embargo, verificar en LeyChile si ha habido reformas recientes que modifiquen plazos, montos o requisitos.
- La Ley 21.394 de 2021 modificó varios plazos del Código de Procedimiento Civil (aplicable supletoriamente); verificar si afecta al procedimiento laboral.

**Criterios del tribunal:**

- Consultar con abogados laboralistas locales sobre los criterios del Juzgado de Letras del Trabajo competente en materia de despidos: si es más o menos riguroso en la acreditación de las causales, si suele conceder los recargos máximos, si privilegia la conciliación, etc.
- Revisar jurisprudencia reciente del tribunal sobre casos similares (si está disponible en el sitio web del Poder Judicial o en bases de datos especializadas).

**Valor de la UF:**

- El tope de la base de cálculo de la indemnización es 90 UF (artículo 172, inciso 3°). Verificar el valor de la UF del último día del mes anterior al pago para convertir a pesos, si es necesario. A la fecha de hoy (25 de septiembre de 2026), verificar el valor vigente en el sitio web del Banco Central o del SII.

**Cotizaciones previsionales:**

- Verificar en el sitio web de la AFP, Isapre o Fonasa si el empleador pagó las cotizaciones hasta el último día del mes anterior al despido. Solicitar un certificado de cotizaciones impagas si corresponde.

**Finiquito:**

- Si el trabajador firmó un finiquito, verificar si lo hizo con o sin reserva de derechos. Si lo firmó sin reserva, puede haber renunciado a reclamar (salvo que se acredite vicio del consentimiento). Si lo firmó con reserva, puede reclamar los derechos reservados.

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### g03-monitorio — procedimiento: Procedimiento monitorio laboral por cobro de prestaciones

<details><summary>Material enviado al modelo (12 normas, 2 fallos o dictámenes, 3 artículos de doctrina; 0 normas descartadas por materia)</summary>

- Código del Trabajo, Artículo 496
- Código del Trabajo, Artículo 497
- Código del Trabajo, Artículo 500
- Código del Trabajo, Artículo 445
- Código del Trabajo, Artículo 446
- Código del Trabajo, Artículo 447
- Código del Trabajo, Artículo 448
- Código del Trabajo, Artículo 449
- Código del Trabajo, Artículo 450
- Código del Trabajo, Artículo 451
- Código del Trabajo, Artículo 452
- Código de Procedimiento Civil, Artículo 409
- Jurisprudencia: Dirección del Trabajo, Dictamen ORD. N°884, 2021-03-10
- Jurisprudencia: Dirección del Trabajo, Dictamen ORD. N°834, 2021-03-05
- Doctrina: Palavecino Cáceres, Claudio; Ramírez Soto, Cristián Pablo, "Examen crítico de la sentencia anticipada en el Procedimiento Monitorio Laboral", Revista Chilena de Derecho del Trabajo y de la Seguridad Social, vol. 1, N° 2, (2016), DOI: 10.5354/0719-7551.2010.43052.
- Doctrina: Delgado Castro, Jordi; Palomo Vélez, Diego; Acevedo Sazo, René, "La motivación de la sentencia en el procedimiento monitorio laboral: ¿una concesión graciosa del órgano jurisdiccional?", Revista chilena de derecho, vol. 46, N° 3, (2019), pp. 717-739, DOI: 10.4067/s0718-34372019000300717.
- Doctrina: Delgado Castro, Jordi; Palomo Vélez, Diego, "El rol del juez laboral en la admisibilidad del procedimiento monitorio", Revista de derecho (Valdivia), vol. 32, N° 1, (2019), pp. 237-254, DOI: 10.4067/s0718-09502019000100237.

Versión anterior (main):
- Código del Trabajo, Artículo 445
- Código del Trabajo, Artículo 446
- Código del Trabajo, Artículo 447
- Código del Trabajo, Artículo 448
- Código del Trabajo, Artículo 449
- Código del Trabajo, Artículo 450
- Código del Trabajo, Artículo 451
- Código del Trabajo, Artículo 452
- Código de Procedimiento Civil, Artículo 409
- Código de Procedimiento Civil, Artículo 410
- Código del Trabajo, (artículo no identificado)

</details>

#### Ficha del procedimiento

| Aspecto | Detalle |
|---------|---------|
| **Tipo de procedimiento** | Procedimiento monitorio laboral (Párrafo 3°, Título I, Libro V del Código del Trabajo) |
| **Normas aplicables** | Código del Trabajo, artículos 496 a 502; supletoriamente Código de Procedimiento Civil |
| **Tribunal competente** | **Materia:** Juzgado de Letras del Trabajo. **Cuantía:** Contiendas de cuantía igual o inferior a 15 ingresos mínimos mensuales (sin considerar aumentos de los incisos 5° y 7° del artículo 162 CT) y contiendas del artículo 201 CT (multas por infracción a normas laborales, previsionales o de seguridad social). **Territorio:** Domicilio del demandado o lugar de prestación de servicios, a elección del demandante (artículo 423 CT). |
| **Comparecencia** | Ley 18.120: trabajador puede comparecer personalmente o con abogado habilitado (patrocinio y poder). Empleador debe comparecer con abogado habilitado. |
| **Prescripción o caducidad** | Depende de la acción: remuneraciones y beneficios prescriben en 6 meses desde que se hicieron exigibles (artículo 510 CT); indemnizaciones por término de contrato prescriben en 6 meses desde la separación (artículo 510 CT); cotizaciones previsionales prescriben en 3 o 5 años según la norma previsional aplicable. El tribunal debe declarar de oficio la caducidad si se desprende claramente de la demanda (artículo 447 CT). |
| **Tramitación electrónica** | Ley 20.886: presentación electrónica obligatoria en tribunales con sistema habilitado. Oficina Judicial Virtual (OJV) para consulta de causas, notificaciones electrónicas y presentación de escritos. Verificar estado de implementación en el tribunal respectivo. |

#### Antes de demandar

**Antecedentes y documentos necesarios:**

- Contrato de trabajo (escrito o elementos para acreditar relación laboral).
- Liquidaciones de remuneraciones, comprobantes de pago, boletas de honorarios si las hubiere.
- Registro de asistencia, correos electrónicos, comunicaciones internas que acrediten prestación de servicios y montos adeudados.
- Cálculo detallado de las prestaciones reclamadas (remuneraciones, horas extras, gratificaciones, indemnizaciones, cotizaciones impagas, etc.).
- Certificado de deuda de instituciones de seguridad social si se reclaman cotizaciones.
- Finiquito (si existe) y carta de despido o aviso de término de contrato.
- Acta de comparendo de conciliación ante la Inspección del Trabajo (requisito previo obligatorio, salvo excepciones).

**Gestiones previas obligatorias:**

1. **Reclamo ante la Inspección del Trabajo (artículo 497 CT):** Es requisito previo obligatorio para iniciar la acción judicial, salvo en materias del artículo 201 CT (multas por infracción a normas laborales, previsionales o de seguridad social).

   - **Procedimiento:** Presentar reclamo escrito en la Inspección del Trabajo del domicilio del empleador o del lugar de prestación de servicios. La Inspección fija día y hora para comparendo de conciliación al momento de ingresar el reclamo.
   
   - **Citación:** Por carta certificada (artículo 508 CT) o por funcionario de la Inspección (ministro de fe), quien entrega personalmente la citación al empleador o a persona adulta en su domicilio.
   
   - **Comparendo:** Las partes deben concurrir con instrumentos probatorios (contrato, balances, comprobantes de remuneraciones, registros de asistencia, etc.). Se levanta acta de lo obrado y se entrega copia autorizada a las partes asistentes.
   
   - **Resultado:** Si hay conciliación, se suscribe acta que tiene mérito ejecutivo. Si no hay conciliación o el empleador no comparece, el trabajador queda habilitado para demandar judicialmente, adjuntando copia del acta de comparendo a la demanda.

2. **Resolución final de la entidad de previsión o seguridad social (artículo 446 inciso 3° CT):** Cuando se demande a una institución de previsión o seguridad social, debe acompañarse la resolución final de la entidad o de la entidad fiscalizadora que se pronuncia sobre la materia demandada. Sin este documento, el juez rechazará de plano la demanda (artículo 447 inciso 3° CT).

#### Tramitación paso a paso

##### Etapa 1: Presentación de la demanda

- **Qué se hace:** Presentar demanda escrita en el Juzgado de Letras del Trabajo competente, cumpliendo los requisitos del artículo 446 CT.

- **Quién:** Trabajador o su abogado patrocinante.

- **Plazo y cómputo:** No hay plazo para presentar la demanda desde el comparendo fallido en la Inspección, pero la acción está sujeta a prescripción (6 meses desde que la obligación se hizo exigible, artículo 510 CT). Días corridos.

- **Norma:** Artículos 446, 447 y 496 CT.

- **Si se omite:** No se inicia el procedimiento. Si se presenta fuera de plazo de prescripción y ello se desprende claramente de la demanda, el tribunal declarará de oficio la caducidad y no admitirá a tramitación (artículo 447 inciso 2° CT).

**Contenido de la demanda (artículo 446 CT):**

1. Designación del tribunal.
2. Nombre, apellidos, domicilio, profesión u oficio del demandante y de quien lo representa (naturaleza de la representación).
3. Nombre, apellidos, domicilio, profesión u oficio del demandado.
4. Exposición clara y circunstanciada de los hechos y consideraciones de derecho.
5. Enunciación precisa y concreta de las peticiones.

**Documentos a acompañar con la demanda:**

- Acta de comparendo de conciliación ante la Inspección del Trabajo (artículo 446 inciso 2° CT: prueba documental de actuaciones administrativas referidas a los hechos de la demanda).
- Resolución final de la entidad de previsión o seguridad social, si se demanda a una de ellas (artículo 446 inciso 3° CT).
- Poder y patrocinio (Ley 18.120).

##### Etapa 2: Examen de admisibilidad y resolución inicial del tribunal

- **Qué se hace:** El juez examina la demanda y dicta resolución: (a) declara incompetencia de oficio y envía antecedentes al tribunal competente; (b) declara de oficio la caducidad si se desprende claramente de la demanda y no la admite a tramitación; (c) rechaza de plano la demanda si no se acompañó la resolución de la entidad de previsión en materias de seguridad social; o (d) admite a tramitación y dicta sentencia anticipada acogiendo o rechazando de plano las pretensiones del demandante (artículo 500 inciso 1° CT).

- **Quién:** Juez de Letras del Trabajo.

- **Plazo y cómputo:** De inmediato, sin plazo legal específico. Días hábiles.

- **Norma:** Artículos 447 y 500 CT.

- **Si se omite:** No aplicable (resolución de oficio del tribunal).

**Criterios para la sentencia anticipada (artículo 500 inciso 1° CT):**

El juez acoge o rechaza de plano las pretensiones si las estima fundadas o infundadas, considerando:

- Complejidad del asunto.
- Comparecencia de las partes en la etapa administrativa (Inspección del Trabajo).
- Existencia de pagos efectuados por el demandado.

**Si no hay antecedentes suficientes:** El tribunal cita a audiencia única de conciliación, contestación y prueba (artículo 500 inciso 5°, segunda parte).

##### Etapa 3: Notificación de la sentencia anticipada al demandado

- **Qué se hace:** Notificar al demandado la resolución que acoge o rechaza de plano las pretensiones, conforme a las reglas generales (personalmente, por cédula o por carta certificada, según artículo 508 CT).

- **Quién:** Receptor judicial o funcionario del tribunal.

- **Plazo y cómputo:** Sin plazo específico; se practica según las reglas generales. Días hábiles.

- **Norma:** Artículo 500 inciso 3° CT; artículo 508 CT (notificación por carta certificada).

- **Si se omite:** La notificación es requisito para que corra el plazo de reclamo del demandado. Sin notificación válida, no hay plazo.

**Contenido de la notificación (artículo 500 inciso 4° CT):** Debe hacerse constar los efectos que producirá la falta de reclamo o su presentación extemporánea (sentencia firme y ejecutoriada).

##### Etapa 4: Reclamo del demandado (si procede)

- **Qué se hace:** El demandado puede reclamar de la sentencia anticipada que acoge las pretensiones del demandante, total o parcialmente.

- **Quién:** Demandado o su abogado.

- **Plazo y cómputo:** 10 días hábiles contados desde la notificación de la sentencia anticipada (artículo 500 inciso 2° CT). Días hábiles.

- **Norma:** Artículo 500 inciso 2° CT.

- **Si se omite:** La sentencia anticipada queda firme y ejecutoriada. No procede ningún otro recurso contra ella (artículo 500 inciso 2° CT). El demandante puede solicitar el cumplimiento inmediato.

**Reclamo parcial (artículo 500 inciso 6° CT):** Si el empleador reclama parcialmente, se aplica el artículo 462 CT: la parte no reclamada queda firme y ejecutoriada, y puede cumplirse de inmediato.

##### Etapa 5: Audiencia única de conciliación, contestación y prueba (si hay reclamo o si el tribunal citó por falta de antecedentes)

- **Qué se hace:** Presentado el reclamo dentro de plazo, el juez cita a audiencia única de conciliación, contestación y prueba. Si el tribunal citó a audiencia por falta de antecedentes suficientes (artículo 500 inciso 1°), se celebra esta audiencia.

- **Quién:** Juez, demandante y demandado.

- **Plazo y cómputo:** 
  - **Si hay reclamo:** Audiencia dentro de los 15 días siguientes a la presentación del reclamo (artículo 500 inciso 5°, primera parte). Días hábiles.
  - **Si el tribunal citó por falta de antecedentes:** Audiencia dentro de los 20 días siguientes a la resolución que la ordena, debiendo mediar a lo menos 5 días entre la notificación y la celebración (artículo 500 inciso 5°, segunda parte). Días hábiles.

- **Norma:** Artículo 500 inciso 5° CT.

- **Si se omite:** No aplicable (citación de oficio del tribunal). Si las partes no comparecen, se aplican las reglas de rebeldía (artículos 453 y siguientes CT).

**Desarrollo de la audiencia:**

1. **Conciliación:** El juez llama a conciliación (artículo 453 CT). Si hay acuerdo, se levanta acta que tiene carácter de sentencia ejecutoriada. Si no hay acuerdo, se continúa con la contestación y prueba.

2. **Contestación de la demanda:** Si el demandado no contestó por escrito con 5 días de antelación (artículo 452 CT), puede contestar verbalmente en la audiencia. Debe pronunciarse sobre los hechos de la demanda, aceptándolos o negándolos expresa y concretamente, y oponer excepciones o reconvención si corresponde.

3. **Prueba:** Las partes rinden la prueba ofrecida y admitida. El juez puede decretar prueba de oficio.

4. **Observaciones finales:** Las partes formulan observaciones sobre la prueba rendida.

##### Etapa 6: Sentencia definitiva

- **Qué se hace:** El juez dicta sentencia definitiva, acogiendo o rechazando la demanda, total o parcialmente. Debe pronunciarse sobre las costas (artículo 445 CT).

- **Quién:** Juez de Letras del Trabajo.

- **Plazo y cómputo:** Dentro de los 15 días siguientes a la audiencia de juicio (artículo 457 CT, aplicable supletoriamente). Días hábiles.

- **Norma:** Artículos 445, 457 y 500 CT.

- **Si se omite:** No aplicable (obligación del tribunal). La demora no invalida la sentencia, pero puede dar lugar a queja disciplinaria.

**Contenido de la sentencia:** Debe contener los requisitos del artículo 459 CT: individualización de las partes, enunciación breve de las peticiones y defensas, análisis de la prueba, razonamientos de hecho y de derecho, y decisión del asunto controvertido.

##### Etapa 7: Notificación de la sentencia definitiva

- **Qué se hace:** Notificar la sentencia a las partes por el estado diario (si se dictó en la audiencia) o por carta certificada (si se dictó fuera de audiencia).

- **Quién:** Tribunal.

- **Plazo y cómputo:** Sin plazo específico; se practica según las reglas generales. Días hábiles.

- **Norma:** Artículo 508 CT.

- **Si se omite:** No corre el plazo para interponer recursos.

##### Etapa 8: Recursos (si proceden)

- **Qué se hace:** Las partes pueden interponer recurso de nulidad (artículo 477 CT) si concurren las causales legales. No procede apelación en el procedimiento monitorio.

- **Quién:** Parte agraviada.

- **Plazo y cómputo:** 10 días hábiles contados desde la notificación de la sentencia definitiva (artículo 481 CT). Días hábiles.

- **Norma:** Artículos 477 a 482 CT.

- **Si se omite:** La sentencia queda firme y ejecutoriada.

##### Etapa 9: Cumplimiento de la sentencia

- **Qué se hace:** Firme la sentencia, el demandante solicita su cumplimiento. Si es condenatoria de pagar suma de dinero, se tramita como juicio ejecutivo laboral (artículos 463 y siguientes CT).

- **Quién:** Demandante (trabajador).

- **Plazo y cómputo:** Sin plazo para solicitar el cumplimiento; la acción ejecutiva prescribe en 3 años desde que la obligación se hizo exigible (artículo 442 CT). Días corridos.

- **Norma:** Artículos 463 a 473 CT.

- **Si se omite:** La sentencia no se ejecuta. Si transcurre el plazo de prescripción de la acción ejecutiva, no podrá exigirse el cumplimiento forzado.

#### Escritos clave

##### 1. Demanda en procedimiento monitorio laboral

**Suma:**
- En lo principal: Demanda de cobro de remuneraciones y prestaciones laborales en procedimiento monitorio.
- Primer otrosí: Acompaña documentos.
- Segundo otrosí: Patrocinio y poder.

**Estructura y contenido mínimo:**

1. **Tribunal competente:** Juzgado de Letras del Trabajo de [ciudad].
2. **Individualización del demandante:** Nombre completo, RUT, domicilio, profesión u oficio.
3. **Individualización del demandado:** Nombre completo o razón social, RUT, domicilio, giro.
4. **Exposición de hechos:**
   - Relación laboral (fecha de inicio, cargo, lugar de prestación de servicios, remuneración pactada).
   - Término de la relación laboral (fecha, causa).
   - Prestaciones adeudadas (detalle de cada ítem: remuneraciones, horas extras, gratificaciones, indemnizaciones, cotizaciones, etc., con montos y períodos).
   - Gestión administrativa previa ante la Inspección del Trabajo (fecha de comparendo, resultado).
5. **Fundamentos de derecho:** Artículos del Código del Trabajo aplicables (artículos 41, 42, 44, 45, 47, 50, 63, 162, 163, 496 y siguientes CT, según corresponda).
6. **Peticiones concretas:**
   - Que se acoja la demanda y se condene al demandado a pagar la suma total de $[monto] o [X] UF, con el detalle de cada ítem.
   - Que se condene en costas.
   - Que se ordene notificar a las instituciones de seguridad social si se reclaman cotizaciones impagas (artículo 446 inciso 4° CT).

**Modelo:**

```
S.J.L. DEL TRABAJO DE [CIUDAD]

[Nombre completo del demandante], RUT [número], [profesión u oficio], domiciliado en [dirección, ciudad], a US. respetuosamente digo:

En lo principal: Demanda de cobro de remuneraciones y prestaciones laborales en procedimiento monitorio; Primer otrosí: Acompaña documentos; Segundo otrosí: Patrocinio y poder.

EN LO PRINCIPAL:

Que, en conformidad a los artículos 496 y siguientes del Código del Trabajo, vengo en demandar a [nombre o razón social del demandado], RUT [número], domiciliado en [dirección, ciudad], el pago de las siguientes prestaciones laborales adeudadas:

I. HECHOS

1. Con fecha [día/mes/año] inicié una relación laboral con el demandado, desempeñándome como [cargo], en [lugar de prestación de servicios], con una remuneración mensual de $[monto] o [X] UF.

2. La relación laboral se extendió hasta el [día/mes/año], fecha en que fui despedido sin causa justificada / renuncié / terminó el contrato por [causa].

3. El demandado adeuda las siguientes prestaciones:

   a) Remuneraciones de los meses de [mes/año] a [mes/año]: $[monto] o [X] UF.
   
   b) Horas extraordinarias no pagadas del período [mes/año] a [mes/año]: $[monto] o [X] UF.
   
   c) Gratificación legal del año [año]: $[monto] o [X] UF.
   
   d) Indemnización por años de servicio (artículo 163 CT): $[monto] o [X] UF.
   
   e) Indemnización sustitutiva del aviso previo (artículo 162 inciso 4° CT): $[monto] o [X] UF.
   
   f) Cotizaciones previsionales impagas del período [mes/año] a [mes/año]: $[monto] o [X] UF.
   
   TOTAL ADEUDADO: $[monto total] o [X] UF.

4. Con fecha [día/mes/año] presenté reclamo ante la Inspección del Trabajo de [ciudad], la que citó a comparendo de conciliación para el [día/mes/año]. El demandado no compareció / compareció pero no se llegó a acuerdo, según consta en acta que acompaño.

II. FUNDAMENTOS DE DERECHO

La relación laboral se rige por los artículos 7°, 41, 42 y siguientes del Código del Trabajo. Las remuneraciones adeudadas son de cargo del empleador conforme a los artículos 41 y 44 CT. Las horas extraordinarias se rigen por el artículo 32 CT. La gratificación legal se rige por el artículo 47 CT. Las indemnizaciones por término de contrato se rigen por los artículos 162 y 163 CT. Las cotizaciones previsionales son de cargo del empleador conforme al artículo 58 CT y D.L. 3.500.

El procedimiento aplicable es el monitorio laboral de los artículos 496 y siguientes del Código del Trabajo, por tratarse de una contienda de cuantía inferior a 15 ingresos mínimos mensuales.

III. PETICIONES

Por tanto, y en mérito de lo expuesto,

RUEGO A US.: Tener por presentada esta demanda, admitirla a tramitación, acogerla en todas sus partes y, en definitiva, condenar al demandado a pagar a mi representado la suma total de $[monto] o [X] UF, con el detalle indicado en el numeral 3 de los hechos, más reajustes, intereses y costas.

PRIMER OTROSÍ: Acompaño los siguientes documentos:

1. Acta de comparendo de conciliación ante la Inspección del Trabajo de [ciudad], de fecha [día/mes/año].
2. Contrato de trabajo de fecha [día/mes/año].
3. Liquidaciones de remuneraciones de los meses [mes/año] a [mes/año].
4. Carta de despido / renuncia / término de contrato de fecha [día/mes/año].
5. Certificado de cotizaciones impagas emitido por [AFP/Isapre/IPS] de fecha [día/mes/año].

SEGUNDO OTROSÍ: Patrocinio y poder. Confiero patrocinio y poder a don(a) [nombre del abogado], RUT [número], abogado, domiciliado para estos efectos en [dirección, ciudad], en los términos del artículo 1° de la Ley 18.120.

[Firma del demandante]
[Firma y timbre del abogado patrocinante]
```

##### 2. Reclamo contra sentencia anticipada

**Suma:**
- En lo principal: Reclama de sentencia anticipada.
- Primer otrosí: Solicita audiencia única.

**Estructura y contenido mínimo:**

1. **Identificación de la sentencia reclamada:** Rol, fecha, resolución que se reclama.
2. **Fundamentos del reclamo:** Hechos y derecho que justifican la impugnación (errores de hecho o de derecho, falta de consideración de antecedentes, etc.).
3. **Peticiones:** Que se deje sin efecto la sentencia anticipada, se cite a audiencia única y se rechace la demanda o se acoja parcialmente.

**Modelo:**

```
S.J.L. DEL TRABAJO DE [CIUDAD]
Rol C-[número]-[año]

[Nombre o razón social del demandado], RUT [número], representado por don(a) [nombre del representante legal], RUT [número], ambos domiciliados en [dirección, ciudad], a US. respetuosamente digo:

En lo principal: Reclama de sentencia anticipada; Primer otrosí: Solicita audiencia única.

EN LO PRINCIPAL:

Que, dentro del plazo legal del artículo 500 inciso 2° del Código del Trabajo, vengo en reclamar de la sentencia anticipada dictada con fecha [día/mes/año] en estos autos, que acogió las pretensiones del demandante, por las siguientes razones:

I. FUNDAMENTOS DEL RECLAMO

1. La sentencia anticipada se dictó sin considerar que mi representado efectuó pagos parciales al demandante por las sumas reclamadas, según consta en los comprobantes de pago que acompaño en este acto.

2. La sentencia no consideró que parte de las remuneraciones reclamadas corresponden a períodos en que el demandante no prestó servicios, por encontrarse con licencia médica.

3. La sentencia no consideró que las horas extraordinarias reclamadas no fueron autorizadas por escrito, como exige el artículo 32 del Código del Trabajo.

4. La cuantía de la indemnización por años de servicio fue calculada erróneamente, sin considerar el tope de 90 UF del artículo 163 inciso 2° del Código del Trabajo.

II. PETICIONES

Por tanto, y en mérito de lo expuesto,

RUEGO A US.: Tener por presentado este reclamo dentro de plazo, acogerlo, dejar sin efecto la sentencia anticipada de fecha [día/mes/año] y citar a audiencia única de conciliación, contestación y prueba, para que en ella se resuelva el asunto controvertido.

PRIMER OTROSÍ: Solicito se cite a audiencia única de conciliación, contestación y prueba, conforme al artículo 500 inciso 5° del Código del Trabajo.

[Firma del representante legal]
[Firma y timbre del abogado patrocinante]
```

##### 3. Solicitud de cumplimiento de sentencia firme

**Suma:**
- En lo principal: Solicita cumplimiento de sentencia.
- Primer otrosí: Acompaña certificado de ejecutoria.

**Estructura y contenido mínimo:**

1. **Identificación de la sentencia:** Rol, fecha, resolución que se solicita cumplir.
2. **Estado de la sentencia:** Firme y ejecutoriada (acompañar certificado).
3. **Peticiones:** Que se despache mandamiento de ejecución y embargo conforme a los artículos 463 y siguientes del Código del Trabajo.

**Modelo:**

```
S.J.L. DEL TRABAJO DE [CIUDAD]
Rol C-[número]-[año]

[Nombre completo del demandante], RUT [número], domiciliado en [dirección, ciudad], a US. respetuosamente digo:

En lo principal: Solicita cumplimiento de sentencia; Primer otrosí: Acompaña certificado.

EN LO PRINCIPAL:

Que, encontrándose firme y ejecutoriada la sentencia definitiva dictada con fecha [día/mes/año] en estos autos, que condenó al demandado [nombre o razón social] a pagar a mi parte la suma de $[monto] o [X] UF, más reajustes, intereses y costas, y no habiendo el demandado dado cumplimiento voluntario a dicha sentencia, vengo en solicitar su cumplimiento forzado.

Por tanto,

RUEGO A US.: Ordenar el cumplimiento de la sentencia firme y ejecutoriada de fecha [día/mes/año], despachando mandamiento de ejecución y embargo en contra del demandado, conforme a los artículos 463 y siguientes del Código del Trabajo.

PRIMER OTROSÍ: Acompaño certificado de ejecutoria de la sentencia de fecha [día/mes/año], expedido por el Secretario del Tribunal con fecha [día/mes/año].

[Firma del demandante]
[Firma y timbre del abogado patrocinante]
```

#### Tabla de plazos

| Etapa | Plazo | Cómputo | Norma | Consecuencia |
|-------|-------|---------|-------|--------------|
| Prescripción de la acción (remuneraciones e indemnizaciones) | 6 meses | Desde que la obligación se hizo exigible (término de contrato o fecha de pago) | Art. 510 CT | Caducidad de la acción; tribunal la declara de oficio si se desprende de la demanda |
| Contestación de la demanda por escrito | 5 días antes de la audiencia preparatoria | Días hábiles, contados hacia atrás desde la fecha de la audiencia | Art. 452 CT | Puede contestar verbalmente en la audiencia; preclusión del derecho a presentar prueba documental no acompañada oportunamente |
| Reclamo contra sentencia anticipada | 10 días hábiles | Desde la notificación de la sentencia anticipada | Art. 500 inc. 2° CT | Sentencia queda firme y ejecutoriada; no procede ningún otro recurso |
| Audiencia única (si hay reclamo) | Dentro de 15 días | Desde la presentación del reclamo | Art. 500 inc. 5° CT | No aplicable (citación de oficio) |
| Audiencia única (si el tribunal citó por falta de antecedentes) | Dentro de 20 días, con 5 días de anticipación entre notificación y audiencia | Desde la resolución que ordena la audiencia | Art. 500 inc. 5° CT | No aplicable (citación de oficio) |
| Sentencia definitiva | 15 días (no verificado en esta búsqueda) | Desde la audiencia de juicio | Art. 457 CT (supletorio) | Demora no invalida la sentencia; puede dar lugar a queja disciplinaria |
| Recurso de nulidad | 10 días hábiles | Desde la notificación de la sentencia definitiva | Art. 481 CT | Sentencia queda firme y ejecutoriada |
| Acción ejecutiva para cumplir sentencia | 3 años | Desde que la obligación se hizo exigible | Art. 442 CT | Prescripción de la acción ejecutiva |

#### Recursos

**Contra la sentencia anticipada:**

- **Reclamo (artículo 500 inciso 2° CT):** Procede contra la sentencia anticipada que acoge las pretensiones del demandante, total o parcialmente. Plazo: 10 días hábiles desde la notificación. Se interpone ante el mismo tribunal que la dictó. Efecto: Si se presenta dentro de plazo, se cita a audiencia única; si no se presenta o se presenta fuera de plazo, la sentencia queda firme. No procede ningún otro recurso contra la sentencia anticipada.

**Contra la sentencia definitiva:**

- **Recurso de nulidad (artículos 477 a 482 CT):** Procede contra la sentencia definitiva por las causales del artículo 477 CT (infracción de ley que influye sustancialmente en lo dispositivo del fallo; error de hecho en la apreciación de la prueba instrumental; etc.). Plazo: 10 días hábiles desde la notificación de la sentencia. Se interpone ante el tribunal que dictó la sentencia y lo conoce la Corte de Apelaciones respectiva. Efecto: Suspensivo si se concede (no se ejecuta la sentencia mientras se tramita el recurso).

- **Recurso de unificación de jurisprudencia (artículo 483 CT):** Procede contra sentencias de Cortes de Apelaciones que resuelven recursos de nulidad, cuando existen distintas interpretaciones sobre la materia de derecho objeto del recurso. Plazo: 15 días hábiles desde la notificación de la sentencia de la Corte. Se interpone ante la Corte Suprema. Efecto: No suspensivo (la sentencia se ejecuta).

**No procede apelación** en el procedimiento monitorio laboral ni en el procedimiento laboral ordinario (artículo 476 CT).

#### Errores frecuentes y estrategia

**Errores frecuentes:**

1. **No realizar el trámite previo ante la Inspección del Trabajo:** Es requisito obligatorio (salvo en materias del artículo 201 CT). Si se omite, el tribunal puede rechazar la demanda o el demandado puede oponer la excepción de falta de gestión administrativa previa.

2. **No acompañar el acta de comparendo con la demanda:** El artículo 446 inciso 2° CT exige acompañar la prueba documental de las actuaciones administrativas. Sin el acta, el tribunal puede no admitir a tramitación o el demandado puede alegar falta de requisito.

3. **No acompañar la resolución de la entidad de previsión en materias de seguridad social:** El artículo 447 inciso 3° CT ordena rechazar de plano la demanda si no se acompaña este documento.

4. **Calcular mal la cuantía y elegir el procedimiento equivocado:** Si la cuantía supera los 15 ingresos mínimos mensuales, no procede el monitorio sino el procedimiento ordinario. El tribunal puede declararse incompetente de oficio.

5. **No reclamar dentro de los 10 días hábiles contra la sentencia anticipada:** Vencido el plazo, la sentencia queda firme y no procede ningún recurso. Este plazo es fatal y de días hábiles.

6. **No contestar la demanda por escrito con 5 días de antelación a la audiencia:** Aunque puede contestar verbalmente en la audiencia, pierde la oportunidad de presentar prueba documental que no acompañó oportunamente.

7. **No solicitar la notificación a las instituciones de seguridad social cuando se reclaman cotizaciones impagas:** El artículo 446 inciso 4° CT ordena al juez notificar a las instituciones al conferir traslado de la demanda. Si no se solicita, las instituciones no serán parte y no podrán cobrar las cotizaciones.

8. **Dejar prescribir la acción:** Las remuneraciones e indemnizaciones prescriben en 6 meses desde que se hicieron exigibles (artículo 510 CT). Este plazo es de días corridos y corre desde el término del contrato o desde la fecha en que debió pagarse cada remuneración.

**Estrategia:**

1. **Preparar bien el comparendo ante la Inspección del Trabajo:** Llevar todos los documentos probatorios (contrato, liquidaciones, correos, registros de asistencia). Si el empleador no comparece o no se llega a acuerdo, el acta será prueba en juicio de la gestión administrativa y de la posición de las partes.

2. **Calcular con precisión las sumas adeudadas:** Detallar cada ítem (remuneraciones, horas extras, gratificaciones, indemnizaciones, cotizaciones) con montos, períodos y base de cálculo. Adjuntar planilla de cálculo. Esto facilita que el juez acoja la demanda en sentencia anticipada.

3. **Acompañar toda la prueba documental con la demanda o en la contestación:** Aunque el artículo 446 inciso 2° CT permite presentar prueba documental en la audiencia preparatoria, en el monitorio no hay audiencia preparatoria si el juez dicta sentencia anticipada. Por eso, conviene acompañar toda la prueba con la demanda.

4. **Si es demandado, contestar por escrito con 5 días de antelación:** Esto permite presentar prueba documental y oponer excepciones o reconvención. Si solo contesta verbalmente en la audiencia, puede ser tarde para presentar documentos.

5. **Si es demandado y la sentencia anticipada es parcialmente favorable, no reclamar la parte favorable:** El artículo 500 inciso 6° CT remite al artículo 462 CT: la parte no reclamada queda firme y puede cumplirse de inmediato. Reclamar solo lo desfavorable.

6. **Si es demandante y el demandado no reclama, solicitar de inmediato el cumplimiento:** La sentencia anticipada no reclamada queda firme al vencimiento del plazo de 10 días hábiles. No esperar: solicitar certificado de ejecutoria y cumplimiento forzado.

7. **En materias de cotizaciones previsionales, solicitar siempre la notificación a las instituciones:** Esto permite que las instituciones cobren directamente las cotizaciones adeudadas y evita que el trabajador deba tramitar después el pago ante la AFP, Isapre o IPS.

8. **Considerar la conciliación en la audiencia única:** Si el demandado reclama y se cita a audiencia, el juez llamará a conciliación. Un acuerdo en esta etapa evita el riesgo de perder el juicio y permite obtener un pago inmediato o en cuotas, con acta que tiene mérito ejecutivo.

#### Lista de verificación

**Antes de demandar:**

- [ ] Verificar que la cuantía no supera los 15 ingresos mínimos mensuales (sin considerar aumentos de los incisos 5° y 7° del artículo 162 CT).
- [ ] Verificar que la acción no está prescrita (6 meses desde que la obligación se hizo exigible).
- [ ] Presentar reclamo ante la Inspección del Trabajo (salvo en materias del artículo 201 CT).
- [ ] Asistir al comparendo de conciliación con todos los documentos probatorios.
- [ ] Obtener copia autorizada del acta de comparendo.
- [ ] Si se demanda a institución de previsión o seguridad social, obtener resolución final de la entidad o entidad fiscalizadora.
- [ ] Calcular con precisión las sumas adeudadas (remuneraciones, horas extras, gratificaciones, indemnizaciones, cotizaciones).
- [ ] Reunir todos los documentos probatorios (contrato, liquidaciones, carta de despido, certificados de cotizaciones, etc.).

**Al presentar la demanda:**

- [ ] Verificar competencia del tribunal (materia, cuantía, territorio).
- [ ] Incluir todas las menciones del artículo 446 CT (tribunal, individualización de partes, hechos, derecho, peticiones).
- [ ] Acompañar acta de comparendo de conciliación ante laInspección del Trabajo.
- [ ] Acompañar resolución final de la entidad de previsión o seguridad social (si corresponde).
- [ ] Acompañar contrato de trabajo, liquidaciones, carta de despido y demás documentos probatorios.
- [ ] Conferir patrocinio y poder (Ley 18.120).
- [ ] Solicitar notificación a instituciones de seguridad social si se reclaman cotizaciones impagas.
- [ ] Verificar que la demanda se presenta en tribunal con tramitación electrónica habilitada (Ley 20.886, OJV).

**Si es demandado:**

- [ ] Verificar fecha de notificación de la sentencia anticipada.
- [ ] Calcular plazo de 10 días hábiles para reclamar (desde la notificación).
- [ ] Revisar si la sentencia consideró todos los antecedentes (pagos efectuados, complejidad del asunto, comparecencia en la Inspección).
- [ ] Decidir si reclamar total o parcialmente (la parte no reclamada queda firme).
- [ ] Preparar reclamo con fundamentos de hecho y derecho.
- [ ] Acompañar documentos probatorios con el reclamo o reservarlos para la audiencia.
- [ ] Si no se reclama, verificar si procede cumplimiento voluntario para evitar ejecución forzada.

**Si hay audiencia única:**

- [ ] Verificar fecha y hora de la audiencia (15 días desde presentación del reclamo, o 20 días desde resolución que cita por falta de antecedentes).
- [ ] Contestar la demanda por escrito con 5 días de antelación (si es demandado y no lo hizo antes).
- [ ] Preparar prueba documental, testimonial y pericial a rendir en la audiencia.
- [ ] Preparar lista de testigos con individualización completa.
- [ ] Evaluar posibilidad de conciliación y condiciones aceptables.
- [ ] Asistir personalmente o con representante con poder suficiente para conciliar.
- [ ] Llevar todos los documentos probatorios originales.

**Después de la sentencia definitiva:**

- [ ] Verificar fecha de notificación de la sentencia.
- [ ] Calcular plazo de 10 días hábiles para recurso de nulidad (si procede).
- [ ] Evaluar causales de nulidad del artículo 477 CT (infracción de ley, error de hecho en prueba instrumental).
- [ ] Si no se recurre, esperar que la sentencia quede firme (vencimiento del plazo de recurso).
- [ ] Solicitar certificado de ejecutoria al Secretario del Tribunal.
- [ ] Solicitar cumplimiento de la sentencia si el demandado no paga voluntariamente.

**Para el cumplimiento:**

- [ ] Verificar que la sentencia está firme y ejecutoriada.
- [ ] Obtener certificado de ejecutoria.
- [ ] Presentar solicitud de cumplimiento con certificado.
- [ ] Indicar bienes del demandado susceptibles de embargo (inmuebles, vehículos, cuentas bancarias, remuneraciones).
- [ ] Solicitar embargo y tasación de bienes.
- [ ] Seguir tramitación del juicio ejecutivo laboral (artículos 463 y siguientes CT).

#### Qué verificar antes de actuar

- Plazo de 15 días para dictar sentencia definitiva desde la audiencia de juicio (artículo 457 CT, aplicable supletoriamente): verificar en el Código del Trabajo, artículo 457.

**Autos acordados aplicables:**

- Verificar en el sitio web del Poder Judicial (www.pjud.cl) si existen autos acordados de la Corte Suprema o de la Corte de Apelaciones respectiva sobre tramitación electrónica, notificaciones por carta certificada, o funcionamiento de los Juzgados de Letras del Trabajo.

**Vigencia de normas:**

- La Ley 21.394 de 2021 modificó plazos y procedimientos del Código del Trabajo. Verificar en www.bcn.cl/leychile que los artículos citados (496 a 502 CT) corresponden a la versión vigente a la fecha de presentación de la demanda.
- Verificar valor de la UF y del ingreso mínimo mensual vigente a la fecha de cálculo de la cuantía y de las prestaciones reclamadas (www.sii.cl, www.dt.gob.cl).

**Criterios del tribunal:**

- Consultar en la Oficina Judicial Virtual (OJV) o en el tribunal respectivo si existen criterios locales sobre admisibilidad de demandas en procedimiento monitorio, requisitos de la prueba documental, o forma de calcular indemnizaciones.
- Verificar si el tribunal respectivo tiene implementada la tramitación electrónica obligatoria (Ley 20.886) y si exige presentación de escritos por la OJV.

**Otros aspectos a verificar:**

- Si el demandado es una persona jurídica, verificar vigencia de la sociedad y representante legal en el Registro de Comercio o Conservador de Bienes Raíces respectivo.
- Si se reclaman cotizaciones previsionales, verificar en la AFP, Isapre o IPS el monto exacto de la deuda y los períodos impagos.
- Si el trabajador tiene privilegio de pobreza, verificar si fue otorgado por la Corporación de Asistencia Judicial o por el tribunal, y si está vigente.

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### g04-alimentos — procedimiento: Demanda de alimentos para un hijo menor de edad, con mediación previa

<details><summary>Material enviado al modelo (12 normas, 0 fallos o dictámenes, 1 artículos de doctrina; 4 normas descartadas por materia)</summary>

- Ley 14.908, fija el texto definitivo y refundido de la ley numero 5.750, con las modificaciones introducidas por la ley numero 14.550, Artículo 3
- Ley 14.908, fija el texto definitivo y refundido de la ley numero 5.750, con las modificaciones introducidas por la ley numero 14.550, Artículo 7
- Código Civil, Artículo 321
- Código Civil, Artículo 323
- Código Civil, Artículo 332
- Ley 19.968, crea los tribunales de familia, Artículo 106
- Ley 19.968, crea los tribunales de familia, Artículo 1
- Ley 19.968, crea los tribunales de familia, Artículo 3
- Ley 19.968, crea los tribunales de familia, Artículo 8
- Ley 19.968, crea los tribunales de familia, Artículo 9
- Ley 19.968, crea los tribunales de familia, Artículo 16
- Ley 19.968, crea los tribunales de familia, Artículo 17
- Doctrina: Palomo Vélez, Diego; Valenzuela Villalobos, Williams, "DESCARTE DE LA INCONSTITUCIONALIDAD DE LA OBLIGATORIEDAD DE LA MEDIACIÓN PREJUDICIAL QUE ESTABLECE LEY N19.966: LECTURA CRÍTICA DE LA SENTENCIA DEL TRIBUNAL CONSTITUCIONAL", Ius et Praxis, vol. 18, N° 2, (2012), pp. 387-426, DOI: 10.4067/s0718-00122012000200014.
- ~~Resolución 3953 EXENTA, ordena publicación en el diario oficial de anexo de decreto supremo n° 239, de 2004, del ministerio de educación, que establece objetivos fundamentales y contenidos mínimos obligatorios para la educación de adultos y fija normas generales para su aplicación, Artículo 2~~ (sin relación léxica (0 términos en común))
- ~~Decreto 182, establece plan nacional de evaluaciones nacionales e internacionales para el período 2016 – 2020, Artículo único~~ (sin relación léxica (1 términos en común))
- ~~Decreto 257, establece objetivos fundamentales y contenidos mínimos obligatorios para la educación de adultos y fija normas generales para su aplicación y deroga decreto supremo nº 239, de 2004, del ministerio de educación y sus modificaciones en la forma que señala, Artículo 10~~ (sin relación léxica (0 términos en común))
- ~~Decreto 481, aprueba bases curriculares de la educación parvularia y deja sin efecto decreto que indica, Artículo 28~~ (sin relación léxica (0 términos en común))

Versión anterior (main):
- Código Civil, Artículo 321
- Constitución Política de la República de Chile, Artículo 19, N° 24

</details>

#### Ficha del procedimiento

| Aspecto | Detalle |
|---------|---------|
| **Tipo de procedimiento** | Juicio de alimentos para hijo menor de edad (procedimiento ordinario de familia) |
| **Normas aplicables** | Ley 14.908 sobre abandono de familia y pago de pensiones alimenticias; Código Civil, artículos 321 a 337; Ley 19.968 que crea los Tribunales de Familia; Ley 19.947 de Matrimonio Civil (supletoriamente) |
| **Tribunal competente** | **Materia:** Juzgado de Familia (Ley 19.968, artículo 8 N° 4).<br>**Cuantía:** Sin límite.<br>**Territorio:** Residencia del alimentario (hijo menor); si éste cambió de residencia por abandono de hogar o rapto, domicilio del alimentante (Ley 14.908, artículo 3). |
| **Comparecencia** | **Patrocinio:** Obligatorio (Ley 18.120, artículo 1). El demandante debe actuar patrocinado por abogado habilitado.<br>**Poder:** No es obligatorio que el abogado tenga poder; puede actuar solo con patrocinio. Si comparece un procurador, requiere poder judicial (mandato judicial).<br>**Excepción:** La Corporación de Asistencia Judicial y otros servicios de asistencia jurídica gratuita pueden comparecer sin patrocinio externo. |
| **Prescripción o caducidad** | No hay prescripción ni caducidad para demandar alimentos mientras subsista el estado de necesidad del alimentario y la capacidad económica del alimentante. Los alimentos se devengan desde la primera demanda (Código Civil, artículo 331). |
| **Tramitación electrónica** | Sí, obligatoria desde la entrada en vigencia de la Ley 20.886 en el territorio jurisdiccional respectivo. Presentación de escritos y notificaciones por la Oficina Judicial Virtual (OJV). Verificar vigencia en el tribunal específico. |
| **Mediación previa obligatoria** | **Sí, obligatoria** (Ley 19.968, artículo 106 inciso 1). Debe acreditarse mediación frustrada o acuerdo previo antes de presentar la demanda. **Excepciones:** Si existe condena previa por violencia intrafamiliar, anotaciones en el Registro Especial de la Ley 20.066, medida cautelar o de protección vigente entre las partes, o suspensión condicional (artículo 106 inciso final). |

#### Antes de demandar

**Antecedentes y documentos necesarios:**

1. **Certificado de nacimiento del hijo menor** (original o copia autorizada), que acredite la filiación respecto del demandado.
2. **Certificado de mediación frustrada** expedido por mediador inscrito en el Registro de Mediadores de la Ley 19.968, o acuerdo privado previo sobre alimentos ante mediador registrado (Ley 19.968, artículo 106 inciso 3).
3. **Antecedentes de ingresos del alimentante** (liquidaciones de sueldo, declaraciones de impuestos, contratos de trabajo, inicio de actividades, patentes comerciales, información de bienes raíces o vehículos). Si no se tienen, identificar fuentes de información (empleador, SII, Registro Civil, Conservador de Bienes Raíces).
4. **Antecedentes de gastos del menor** (comprobantes de colegio, salud, vestuario, alimentación, actividades extraprogramáticas, tratamientos médicos). Elaborar presupuesto mensual detallado.
5. **Certificado de residencia del menor** (para acreditar competencia territorial). Puede ser declaración jurada ante notario o certificado municipal.
6. **Antecedentes de la madre o guardador** (si es quien demanda): cédula de identidad, certificado de residencia, antecedentes de ingresos propios (para determinar capacidad de contribuir).

**Gestiones previas obligatorias:**

1. **Mediación previa:** Solicitar hora en un centro de mediación familiar licitado o privado inscrito en el Registro de Mediadores (consultar en www.mediacionchile.cl). La mediación es gratuita en centros licitados si el demandante carece de recursos. Llevar certificado de nacimiento del menor y cédulas de identidad de ambos padres. Si el demandado no comparece a dos citaciones o la mediación fracasa, el mediador emite certificado de mediación frustrada. **Plazo de la mediación:** hasta 60 días corridos desde la primera sesión, prorrogables por acuerdo (no verificado en esta búsqueda).
2. **Verificar excepciones a la mediación:** Si existe violencia intrafamiliar (condena, anotación en Registro Especial, medida cautelar vigente), la mediación está prohibida. En ese caso, adjuntar a la demanda certificado del tribunal que dictó la medida o del Registro Civil (Registro Especial VIF).

**Gestiones preparatorias (opcionales):**

- Si se desconoce el domicilio del demandado, solicitar al Registro Civil información de su última dirección registrada (Ley 19.477, artículo 2).
- Si se desconocen los ingresos del demandado, se puede solicitar al tribunal, en la demanda o antes, que oficie al empleador, SII, AFP, Isapre o Fonasa para obtener antecedentes (facultad oficiosa del juez de familia, Ley 19.968, artículo 9).

#### Tramitación paso a paso

##### Etapa 1: Presentación de la demanda

- **Qué se hace:** Se presenta demanda escrita ante el Juzgado de Familia competente, por la Oficina Judicial Virtual (si está vigente) o en papel en la Unidad de Atención de Público del tribunal. La demanda debe cumplir los requisitos del artículo 57 de la Ley 19.968 (no verificado en esta búsqueda): individualización de las partes, hechos, fundamentos de derecho, peticiones concretas, monto de la pensión solicitada (en pesos o porcentaje del ingreso del demandado o en UF), acompañar certificado de mediación frustrada y documentos fundantes.
- **Quién:** El demandante (madre, padre o guardador del menor) patrocinado por abogado, o la Corporación de Asistencia Judicial.
- **Plazo y cómputo:** No hay plazo para presentar la demanda (mientras subsista el estado de necesidad). Los alimentos se devengan desde la primera demanda (Código Civil, artículo 331).
- **Norma:** Ley 19.968, artículos 8 N° 4, 55 y siguientes; Ley 14.908, artículo 3.
- **Si se omite:** No se inicia el procedimiento. Si se omite el certificado de mediación frustrada, el tribunal puede declarar inadmisible la demanda o suspender su tramitación hasta que se acompañe (Ley 19.968, artículo 106).

**Contenido mínimo de la demanda:**

- Tribunal competente.
- Individualización completa del demandante y del demandado (nombre, RUT, domicilio, profesión u oficio).
- Individualización del menor alimentario (nombre, RUT, fecha de nacimiento, filiación).
- Relación de hechos: convivencia o separación de los padres, con quién vive el menor, necesidades del menor (educación, salud, vestuario, recreación), capacidad económica del demandado (ingresos, bienes, profesión).
- Fundamentos de derecho: Código Civil, artículos 321 N° 2, 323, 330; Ley 14.908.
- Peticiones concretas: monto de la pensión alimenticia mensual (en pesos, UF o porcentaje del ingreso líquido del demandado), forma de pago (depósito en cuenta bancaria o cuenta vista del Banco Estado a nombre del demandante), periodicidad (mensual, anticipada), reajustabilidad (IPC o variación de remuneraciones del demandado), fecha desde la cual se devengan (primera demanda), costas.
- Acompañar certificado de mediación frustrada, certificado de nacimiento del menor, antecedentes de ingresos y gastos.

##### Etapa 2: Examen de admisibilidad y primera resolución

- **Qué se hace:** El tribunal examina si la demanda cumple los requisitos legales (competencia, patrocinio, mediación previa, documentos).
- **Quién:** El juez de familia.
- **Plazo y cómputo:** El tribunal debe pronunciarse dentro de los 2 días hábiles siguientes a la presentación (no verificado en esta búsqueda).
- **Norma:** Ley 19.968, artículos 57, 60 (no verificado en esta búsqueda); Ley 14.908.
- **Si se omite:** Si el tribunal no se pronuncia, el demandante puede solicitar que se despache la causa (cuenta). Si se declara inadmisible y no se subsana, se tiene por no presentada la demanda.

**Alimentos provisorios:**

Si el demandante solicita alimentos provisorios en la demanda, debe fundarlos en antecedentes concretos (certificado de nacimiento, presunción legal de capacidad económica del padre, Ley 14.908, artículo 3 inciso final).

##### Etapa 3: Notificación de la demanda

- **Qué se hace:** Se notifica personalmente al demandado la resolución que acoge a tramitación la demanda, con copia íntegra de la demanda y de los documentos acompañados, y la fecha de la audiencia preparatoria. La notificación personal puede practicarse por receptor judicial, por funcionario del tribunal habilitado, o por notificación electrónica si el demandado tiene casilla judicial electrónica activa (Ley 20.886).
- **Quién:** Receptor judicial o funcionario del tribunal.
- **Plazo y cómputo:** Debe practicarse con al menos 15 días de anticipación a la audiencia preparatoria (no verificado en esta búsqueda). Si no se logra notificar, se puede solicitar nueva fecha de audiencia o autorización para notificar por cédula (si se acredita que el demandado elude la notificación) o por avisos (si se ignora su paradero).
- **Norma:** Ley 19.968, artículos 20, 21, 22 (no verificado en esta búsqueda); Código de Procedimiento Civil, artículos 40 y siguientes (supletoriamente).
- **Si se omite:** Sin notificación válida, la audiencia no puede realizarse respecto del demandado. Si éste no comparece por falta de notificación, no se le puede declarar rebelde. El tribunal debe ordenar nueva notificación o habilitar otra forma.

**Notificación por cédula o avisos:**

Si el demandado no es habido en su domicilio después de dos intentos en días y horas distintos, el receptor certifica que elude la notificación. El demandante puede solicitar autorización para notificar por cédula (dejada en el domicilio con cualquier persona adulta o, si no hay nadie, fijada en la puerta). Si se ignora el paradero del demandado, se solicita notificación por avisos en el Diario Oficial (tres publicaciones) y en un diario de la comuna o región (no verificado en esta búsqueda).

##### Etapa 4: Contestación de la demanda (en audiencia preparatoria)

- **Qué se hace:** El demandado comparece a la audiencia preparatoria y contesta la demanda oralmente o por escrito presentado en la audiencia. Puede: (a) allanarse (aceptar la demanda); (b) oponerse, negando los hechos o la capacidad económica, o alegando que ya paga alimentos o que el demandante tiene recursos suficientes; (c) reconvenir, demandando alimentos para sí (si es cónyuge) o rebaja de alimentos provisorios; (d) oponer excepciones (incompetencia, falta de legitimación, cosa juzgada, transacción).
- **Quién:** El demandado, personalmente o representado por abogado.
- **Plazo y cómputo:** La contestación se produce en la audiencia preparatoria, en la fecha fijada por el tribunal. No hay plazo escrito previo; la contestación es oral o se presenta escrito en la audiencia.
- **Norma:** Ley 19.968, artículos 60, 61 (no verificado en esta búsqueda).
- **Si se omite:** Si el demandado no comparece a la audiencia preparatoria, se le declara rebelde (Etapa 5).

**Allanamiento:**

Si el allanamiento es parcial (acepta pagar menos), se fija audiencia de juicio para determinar el monto definitivo.

**Oposición:**

El demandado debe indicar los hechos que niega, los que acepta y sus fundamentos. Debe ofrecer medios de prueba (documentos, testigos, informes periciales) en la misma audiencia preparatoria. Si alega falta de capacidad económica, debe acompañar liquidaciones de sueldo, declaración de impuestos o declaración jurada de ingresos. Si alega que el demandante tiene recursos, debe probarlo.

##### Etapa 5: Rebeldía del demandado

- **Qué se hace:** Si el demandado, legalmente notificado, no comparece a la audiencia preparatoria, el juez lo declara rebelde. La causa sigue adelante sin su intervención. El demandado rebelde puede comparecer en cualquier momento posterior, pero acepta todo lo obrado (no puede retrotraer el procedimiento).
- **Quién:** El juez, de oficio.
- **Plazo y cómputo:** Se declara en la misma audiencia preparatoria, al constatarse la incomparecencia.
- **Norma:** Ley 19.968, artículo 64 (no verificado en esta búsqueda); Código de Procedimiento Civil, artículo 79 (supletorio).
- **Si se omite:** Si el tribunal no declara la rebeldía, no puede seguir adelante sin el demandado. El demandante debe solicitar que se declare rebelde.

**Efectos de la rebeldía:**

- La causa sigue su curso sin esperar al rebelde.
- No se le notifican las resoluciones posteriores (salvo la sentencia definitiva, que se notifica por el estado diario).
- El demandante debe probar sus alegaciones en audiencia de juicio, pero la presunción legal del artículo 3 inciso final de la Ley 14.908 ("se presumirá que el alimentante tiene los medios para otorgarlos") facilita la prueba.
- El rebelde puede comparecer después, pero acepta todo lo obrado.

##### Etapa 6: Audiencia preparatoria

- **Qué se hace:** Comparecen ambas partes (o solo el demandante si el demandado está rebelde). El juez dirige la audiencia, que es oral, registrada en audio.
- **Quién:** El juez, el demandante y el demandado (si no está rebelde).
- Puede suspenderse una sola vez por causa justificada (enfermedad, fuerza mayor), fijándose nueva fecha dentro de los 15 días siguientes (no verificado en esta búsqueda).
- **Norma:** Ley 19.968, artículos 60, 61 (no verificado en esta búsqueda).
- **Si se omite:** Si no se realiza la audiencia preparatoria, no puede fijarse audiencia de juicio. Si el demandante no comparece, se puede tener por abandonada la demanda (no verificado en esta búsqueda). Si el demandado no comparece, se le declara rebelde (Etapa 5).

**Conciliación:**

El juez debe llamar a conciliación en toda audiencia (Ley 19.968, artículo 9, principio de búsqueda de soluciones colaborativas). Propone bases de arreglo considerando el interés superior del menor, los ingresos del demandado y las necesidades del menor. Si las partes acuerdan, el juez dicta sentencia homologatoria en la misma audiencia, que pone fin al juicio. El acuerdo debe constar en acta y ser firmado por las partes. Si no hay acuerdo, se sigue adelante.

**Ofrecimiento de pruebas:**

Cada parte ofrece sus medios de prueba: documentos (que deben acompañarse en ese momento o indicar dónde se encuentran para que el tribunal los requiera), testigos (individualizándolos con nombre, RUT, domicilio y hechos sobre los que declararán), informes periciales (indicando la materia y el perito propuesto), oficios a instituciones (empleador, SII, AFP, Isapre, Registro Civil, Conservador de Bienes Raíces). El juez admite las pruebas pertinentes y rechaza las impertinentes, superfluas o dilatorias. Puede decretar de oficio diligencias probatorias (Ley 19.968, artículo 9, actuación de oficio).

##### Etapa 7: Período de prueba (entre audiencia preparatoria y audiencia de juicio)

- **Qué se hace:** Se rinden las pruebas que requieren diligencias previas: oficios a instituciones, peritajes, inspección personal del tribunal. Los documentos ya deben estar acompañados. Los testigos se citan para la audiencia de juicio.
- **Quién:** Las partes, el tribunal (de oficio), los peritos, las instituciones oficiadas.
- Los oficios deben despacharse dentro de los 5 días siguientes a la audiencia preparatoria (no verificado en esta búsqueda) y responderse antes de la audiencia de juicio.
- **Norma:** Ley 19.968, artículos 28, 29, 30 (no verificado en esta búsqueda).
- **Si se omite:** Si no se rinden las pruebas, la parte que las ofreció no podrá acreditarlas en juicio. Si el tribunal no despacha los oficios decretados de oficio, la parte interesada debe solicitar que se despachen (cuenta).

**Prueba pericial:**

Si se decretó peritaje (por ejemplo, avalúo de bienes del demandado, informe psicológico del menor), el perito designado debe presentar su informe por escrito antes de la audiencia de juicio. Puede ser citado a declarar en la audiencia para aclarar su informe.

##### Etapa 8: Audiencia de juicio

- **Qué se hace:** Comparecen las partes. El juez dirige la audiencia, que es oral, pública (salvo que se decrete reserva por el interés superior del menor) y registrada en audio. Se desarrolla en el siguiente orden: (a) nuevo llamado a conciliación; (b) si no hay acuerdo, rendición de pruebas: declaración de testigos (interrogados por las partes y el juez), ratificación de informes periciales, lectura de documentos; (c) alegatos finales de las partes (orales, breves); (d) el juez puede dictar sentencia en la misma audiencia o anunciar que la dictará dentro de los 15 días siguientes (no verificado en esta búsqueda).
- **Quién:** El juez, las partes, los testigos, los peritos.
- Puede suspenderse una sola vez por causa grave, fijándose nueva fecha dentro de los 5 días siguientes (no verificado en esta búsqueda).
- **Norma:** Ley 19.968, artículos 62, 63, 64, 65, 66, 67 (no verificado en esta búsqueda).
- **Si se omite:** Si no se realiza la audiencia de juicio, no puede dictarse sentencia. Si el demandante no comparece, se puede tener por abandonada la demanda (no verificado en esta búsqueda). Si el demandado no comparece (estando rebelde o notificado de la audiencia), la audiencia se realiza sin él.

**Declaración de testigos:**

Cada parte puede presentar hasta 4 testigos por cada hecho controvertido (no verificado en esta búsqueda). Los testigos declaran oralmente, bajo juramento, respondiendo a las preguntas de la parte que los presenta, de la contraparte (contrainterrogatorio) y del juez. El juez puede limitar las preguntas impertinentes o repetitivas. La declaración se registra en audio; no se levanta acta escrita (salvo síntesis en el acta de audiencia).

**Alegatos finales:**

Cada parte resume su posición, destaca las pruebas rendidas y formula sus peticiones finales. El demandante puede aumentar o disminuir el monto solicitado si la prueba lo justifica. El demandado puede ofrecer pagar un monto menor. El juez puede formular preguntas finales.

##### Etapa 9: Sentencia definitiva

- **Qué se hace:** El juez dicta sentencia definitiva, que puede: (a) acoger la demanda, fijando el monto de la pensión alimenticia mensual, la forma de pago, la periodicidad, la reajustabilidad, la fecha desde la cual se devenga (primera demanda) y las costas; (b) rechazar la demanda, si no se probó la necesidad del menor o la capacidad del demandado; (c) acoger parcialmente, fijando un monto menor al solicitado.
- **Quién:** El juez de familia.
- **Plazo y cómputo:** Si no se dictó en la audiencia de juicio, debe dictarse dentro de los 15 días siguientes (no verificado en esta búsqueda). Se notifica por el estado diario (publicación en el sitio web del Poder Judicial) al día siguiente de su dictación.
- **Norma:** Ley 19.968, artículos 67, 68 (no verificado en esta búsqueda); Código Civil, artículos 323, 329, 330, 332.
- **Si se omite:** Si no se dicta sentencia, la parte interesada puede solicitar que se despache (cuenta) o reclamar ante la Corte de Apelaciones por denegación de justicia (no verificado en esta búsqueda).

**Contenido de la sentencia:**

- Individualización de las partes y del menor.
- Síntesis de la demanda, la contestación y las pruebas rendidas.
- Consideraciones de hecho y de derecho: necesidades del menor (detalladas: colegio, salud, alimentación, vestuario, recreación), capacidad económica del demandado (ingresos líquidos, bienes, profesión), aplicación de los artículos 321 N° 2, 323, 329, 330 del Código Civil.
- Forma de pago: depósito en cuenta bancaria o cuenta vista del Banco Estado a nombre del demandante (madre o guardador), dentro de los primeros 5 días de cada mes (no verificado en esta búsqueda).
- Reajustabilidad: IPC o variación de las remuneraciones del demandado (si es trabajador dependiente).
- Fecha desde la cual se devenga: desde la primera demanda (Código Civil, artículo 331). Si se decretaron alimentos provisorios, éstos se imputan a los definitivos.
- Costas: generalmente se condenan al demandado si se acoge la demanda (no verificado en esta búsqueda).

##### Etapa 10: Notificación de la sentencia

- **Qué se hace:** La sentencia se notifica por el estado diario (publicación en el sitio web del Poder Judicial) al día siguiente de su dictación. Si el demandado está rebelde, se notifica igual por el estado diario (no se requiere notificación personal).
- **Quién:** El tribunal, automáticamente.
- **Plazo y cómputo:** Al día siguiente de dictada la sentencia.
- **Norma:** Ley 19.968, artículo 23 (no verificado en esta búsqueda); Código de Procedimiento Civil, artículo 50 (supletorio).
- **Si se omite:** Si no se publica en el estado diario, la sentencia no se entiende notificada y no corren los plazos para recurrir. La parte interesada debe solicitar que se publique.

##### Etapa 11: Recursos (apelación o casación)

- **Qué se hace:** La parte agraviada puede apelar de la sentencia definitiva ante la Corte de Apelaciones respectiva, dentro de 5 días hábiles desde la notificación (no verificado en esta búsqueda). La apelación se presenta por escrito ante el mismo Juzgado de Familia, fundada (indicando los errores de hecho o de derecho). El tribunal de familia concede o deniega la apelación. Si la concede, eleva los autos a la Corte de Apelaciones, que fija fecha para la vista de la causa (alegatos orales) o falla en cuenta (sin alegatos). La Corte puede confirmar, modificar o revocar la sentencia.
- **Quién:** El demandante o el demandado.
- **Plazo y cómputo:** 5 días hábiles desde la notificación de la sentencia por el estado diario (no verificado en esta búsqueda). Días hábiles: lunes a viernes, excluidos feriados.
- **Norma:** Ley 19.968, artículos 67, 68 (no verificado en esta búsqueda); Código de Procedimiento Civil, artículos 186 y siguientes (supletorios).
- **Si se omite:** Si no se apela en plazo, la sentencia queda firme y ejecutoriada (Etapa 12). Precluye el derecho a recurrir.

**Casación:**

Contra la sentencia de la Corte de Apelaciones que falla la apelación, procede recurso de casación en la forma (por vicios de procedimiento) o en el fondo (por infracción de ley) ante la Corte Suprema, dentro de 5 días hábiles desde la notificación (no verificado en esta búsqueda). Es excepcional en materia de familia; generalmente se rechaza por falta de interés casacional (no verificado en esta búsqueda).

##### Etapa 12: Sentencia firme y ejecutoriada

- **Qué se hace:** Si no se apeló en plazo, o si se rechazó la apelación, la sentencia queda firme y ejecutoriada. El tribunal certifica que está firme (de oficio o a petición de parte). Desde ese momento, la sentencia tiene mérito ejecutivo (Ley 14.908, artículo 7) y puede cumplirse forzadamente.
- **Quién:** El tribunal, de oficio o a petición de parte.
- **Plazo y cómputo:** La sentencia queda firme al vencimiento del plazo para apelar (5 días hábiles) sin que se haya apelado, o al notificarse la sentencia de la Corte de Apelaciones que rechaza la apelación.
- **Norma:** Código de Procedimiento Civil, artículo 174 (supletorio); Ley 14.908, artículo 7.

##### Etapa 13: Cumplimiento voluntario o ejecución forzada

- **Qué se hace:** El demandado debe pagar la pensión alimenticia en la forma, monto y periodicidad fijados en la sentencia. Si no paga, el demandante puede solicitar el cumplimiento forzado ante el mismo Juzgado de Familia que dictó la sentencia o ante el del nuevo domicilio del alimentario (Ley 14.908, artículo 7).
- **Quién:** El demandante (alimentario o su representante).
- **Plazo y cómputo:** No hay plazo para solicitar el cumplimiento; puede hacerse en cualquier momento mientras esté vigente la obligación. Cada pensión impaga prescribe en 3 años desde que se hizo exigible (no verificado en esta búsqueda).
- **Norma:** Ley 14.908, artículos 7, 14, 15, 16 (no verificado en esta búsqueda); Código de Procedimiento Civil, artículos 434 y siguientes (supletorios).
- **Si se omite:** Si no se solicita el cumplimiento, el demandado puede seguir sin pagar. Las pensiones impagas se acumulan y generan reajustes e intereses (no verificado en esta búsqueda).

**Retención de remuneraciones:**

Es el mecanismo más eficaz. El tribunal oficia al empleador del demandado ordenándole retener de su remuneración líquida el monto de la pensión alimenticia y depositarlo directamente en la cuenta del demandante. El empleador que no retiene es solidariamente responsable del pago (no verificado en esta búsqueda).

**Arresto nocturno:**

Si el demandado no paga y no tiene remuneraciones retenibles, el tribunal puede decretar arresto nocturno (de 22:00 a 06:00 horas) hasta por 15 días (no verificado en esta búsqueda), renovable. No extingue la deuda.

**Suspensión de licencia de conducir:**

El tribunal oficia al Registro Civil para que suspenda la licencia de conducir del demandado mientras no pague las pensiones impagas (no verificado en esta búsqueda). Se levanta al pagar.

##### Etapa 14: Modificación de la pensión (aumento, rebaja o cese)

- **Qué se hace:** Cualquiera de las partes puede solicitar aumento, rebaja o cese de la pensión alimenticia si cambian las circunstancias que legitimaron la demanda (Código Civil, artículo 332). El aumento lo solicita el alimentario (o su representante) si aumentan sus necesidades o los ingresos del demandado. La rebaja la solicita el demandado si disminuyen sus ingresos o aumentan sus cargas familiares. El cese lo solicita el demandado si el alimentario cumple 21 años (salvo que estudie una profesión u oficio, caso en que cesa a los 28 años, o que tenga incapacidad física o mental, Código Civil, artículo 332). Se tramita como demanda nueva, con mediación previa obligatoria, ante el mismo tribunal o el del nuevo domicilio del alimentario (Ley 14.908, artículo 7).
- **Quién:** El alimentario (o su representante) o el alimentante.
- **Plazo y cómputo:** No hay plazo; puede solicitarse en cualquier momento mientras subsista la obligación.
- **Norma:** Código Civil, artículo 332; Ley 14.908, artículo 7; Ley 19.968, artículo 106.
- **Si se omite:** Si no se solicita la modificación, la pensión sigue vigente en el monto original (reajustado). Si el demandado deja de pagar alegando que cesó la obligación (por ejemplo, porque el hijo cumplió 21 años), el alimentario puede ejecutar la sentencia original hasta que se dicte sentencia que declare el cese.

#### Escritos clave

##### Demanda de alimentos

**Suma:**
- En lo principal: Demanda de alimentos.
- Primer otrosí: Acompaña documentos.
- Segundo otrosí: Solicita alimentos provisorios.
- Tercer otrosí: Patrocinio y poder.

**Estructura y contenido mínimo:**

**EN LO PRINCIPAL:**

S. J. L.  
[Nombre del demandante], [profesión u oficio], cédula nacional de identidad N° [RUT], domiciliado en [dirección completa, comuna], en representación de mi hijo menor [nombre del menor], nacido el [fecha de nacimiento], a S.S. respetuosamente digo:

Que, por la presente y en conformidad a lo dispuesto en los artículos 321 N° 2, 323 y 330 del Código Civil y en la Ley 14.908 sobre Abandono de Familia y Pago de Pensiones Alimenticias, vengo en demandar de alimentos a don [nombre del demandado], [profesión u oficio], cédula nacional de identidad N° [RUT], domiciliado en [dirección completa, comuna], para que pague a mi hijo menor [nombre del menor] una pensión alimenticia mensual de [monto en pesos, UF o porcentaje del ingreso líquido del demandado], reajustable según el IPC [o según la variación de las remuneraciones del demandado], pagadera dentro de los primeros cinco días de cada mes, mediante depósito en la cuenta [bancaria o cuenta vista del Banco Estado] N° [número], a nombre de [nombre del demandante], con costas.

**HECHOS:**

1. Soy madre de [nombre del menor], nacido el [fecha de nacimiento], según consta del certificado de nacimiento que acompaño, hijo de don [nombre del demandado].

2. El menor vive bajo mi cuidado personal en [dirección], desde [fecha de separación o desde siempre].

3. El demandado es [profesión u oficio], trabaja en [nombre del empleador o actividad independiente], con ingresos mensuales líquidos de [monto] aproximadamente, según [liquidaciones de sueldo, declaración de impuestos u otros antecedentes que se acompañan o se solicita oficiar].

4. El menor tiene las siguientes necesidades mensuales:
   - Educación (colegio, útiles, uniforme): $[monto]
   - Salud (Isapre/Fonasa, medicamentos, controles): $[monto]
   - Alimentación: $[monto]
   - Vestuario: $[monto]
   - Recreación y desarrollo integral: $[monto]
   - Total mensual: $[monto]

5. Yo trabajo como [profesión u oficio] con ingresos mensuales de $[monto], insuficientes para cubrir por sí solos las necesidades del menor.

6. El demandado no ha contribuido al sustento del menor [o ha contribuido solo con $[monto] mensual, insuficiente].

7. Se cumplió con la mediación previa obligatoria ante [nombre del centro de mediación], la que resultó frustrada según certificado que acompaño.

**FUNDAMENTOS DE DERECHO:**

Código Civil, artículos 321 N° 2 (obligación de alimentos a los descendientes), 323 (contenido de los alimentos: subsistencia adecuada, educación básica, media y profesional u oficio), 329 (alimentos según facultades del deudor y necesidades del alimentario), 330 (alimentos se deben desde la primera demanda), 332 (alimentos se devengan hasta los 21 años, o 28 si estudia profesión u oficio).

Ley 14.908, artículo 3 inciso final: "Para los efectos de decretar los alimentos cuando un menor los solicite de su padre o madre, se presumirá que el alimentante tiene los medios para otorgarlos."

Ley 19.968, artículo 8 N° 4 (competencia de los juzgados de familia), artículo 16 (interés superior del niño).

**POR TANTO:**

Ruego a S.S. tener por interpuesta demanda de alimentos en contra de don [nombre del demandado], acogerla a tramitación, conferir traslado, fijar audiencia preparatoria, ordenar notificar personalmente al demandado y, en definitiva, acogerla, condenando al demandado a pagar a mi hijo menor [nombre del menor] una pensión alimenticia mensual de [monto], reajustable según el IPC, pagadera dentro de los primeros cinco días de cada mes mediante depósito en la cuenta [número] a mi nombre, devengada desde la fecha de esta demanda, con costas.

**PRIMER OTROSÍ:** Ruego a S.S. tener por acompañados los siguientes documentos:
1. Certificado de nacimiento de [nombre del menor].
2. Certificado de mediación frustrada de [centro de mediación], de fecha [fecha].
3. [Liquidaciones de sueldo del demandado / declaración de impuestos / certificado de empleador / etc.].
4. Comprobantes de gastos del menor: [matrícula escolar, boletas de Isapre, etc.].

**SEGUNDO OTROSÍ:** En conformidad al artículo [1] de la Ley 14.908, solicito se decreten alimentos provisorios a favor de mi hijo menor, desde ya, en el monto de [40% del ingreso mínimo mensual o porcentaje del sueldo del demandado], atendido que el certificado de nacimiento acredita la filiación y la presunción legal del artículo 3 inciso final de la Ley 14.908 hace verosímil la capacidad económica del demandado.

**TERCER OTROSÍ:** Ruego a S.S. tener por patrocinante y conferido poder a don [nombre del abogado], abogado, cédula nacional de identidad N° [RUT], domiciliado para estos efectos en [dirección], correo electrónico [email].

---

##### Contestación de la demanda (escrito presentado en audiencia preparatoria)

**Suma:**
- En lo principal: Contesta demanda de alimentos.
- Primer otrosí: Acompaña documentos.
- Segundo otrosí: Ofrece medios de prueba.

**Estructura y contenido mínimo:**

**EN LO PRINCIPAL:**

S. J. L.  
[Nombre del demandado], [profesión u oficio], cédula nacional de identidad N° [RUT], domiciliado en [dirección], en autos Rol [letra]-[número]-[año] sobre alimentos, a S.S. respetuosamente digo:

Que, dentro del plazo legal, vengo en contestar la demanda de alimentos deducida en mi contra por doña [nombre de la demandante] en representación de mi hijo menor [nombre del menor], solicitando su rechazo o, subsidiariamente, que se fije una pensión alimenticia prudencial acorde a mi real capacidad económica.

**HECHOS:**

1. Reconozco ser padre de [nombre del menor] y mi obligación legal de contribuir a su sustento.

2. No es efectivo que mis ingresos mensuales sean de $[monto alegado por la demandante]. Mis ingresos líquidos reales son de $[monto real], según liquidaciones de sueldo que acompaño [o declaración jurada de ingresos si soy independiente].

3. Tengo las siguientes cargas familiares que la demandante no consideró:
   - [Cónyuge o conviviente sin ingresos]
   - [Otros hijos menores: nombres, edades]
   - [Padres o ascendientes a quienes debo alimentos]
   - [Deudas: arriendo, dividendo, créditos, detallando montos mensuales]

4. Ya contribuyo al sustento del menor con [entregas voluntarias de $[monto] mensual / pago directo de colegio, salud, etc.], lo que la demandante no ha considerado.

5. [Si corresponde:] El monto solicitado ($[monto]) es desproporcionado y excede mi capacidad económica, pues representa el [porcentaje]% de mi ingreso líquido, dejándome solo $[monto] para mi subsistencia y otras cargas.

6. [Si corresponde:] La demandante tiene ingresos propios de $[monto] mensuales y debe contribuir proporcionalmente al sustento del menor.

**FUNDAMENTOS DE DERECHO:**

Código Civil, artículo 329: En la tasación de los alimentos se deberán tomar siempre en consideración las facultades del deudor y sus circunstancias domésticas. (no verificado en esta búsqueda)

Código Civil, artículo 330: Los alimentos no se deben sino en la parte en que los medios de subsistencia del alimentario no le alcancen para subsistir de un modo correspondiente a su posición social. (no verificado en esta búsqueda)

**POR TANTO:**

Ruego a S.S. tener por contestada la demanda, rechazarla por no ajustarse a mi real capacidad económica o, subsidiariamente, fijar una pensión alimenticia prudencial de $[monto] mensual, con costas.

**PRIMER OTROSÍ:** Ruego a S.S. tener por acompañados:
1. Liquidaciones de sueldo de los últimos [tres] meses.
2. [Certificados de nacimiento de otros hijos menores].
3. [Contrato de arriendo / certificado de dividendo hipotecario].
4. [Comprobantes de pagos realizados al menor: transferencias, boletas, etc.].

**SEGUNDO OTROSÍ:** Ofrezco rendir las siguientes pruebas:
1. **Documental:** Los documentos acompañados en el otrosí anterior.
2. **Testimonial:** Declaración de los siguientes testigos:
   - Don [nombre], RUT [número], domiciliado en [dirección], quien declarará sobre mis ingresos reales y cargas familiares.
   - Don [nombre], RUT [número], domiciliado en [dirección], quien declarará sobre los aportes que he realizado al menor.
3. **Oficios:** Solicito se oficie a [empleador] para que informe mis remuneraciones líquidas de los últimos [seis] meses.

---

##### Solicitud de cumplimiento (ejecución de sentencia)

**Suma:**
- En lo principal: Solicita cumplimiento de sentencia de alimentos.
- Primer otrosí: Solicita retención de remuneraciones.
- Segundo otrosí: Subsidiariamente, solicita apremios.

**Estructura y contenido mínimo:**

**EN LO PRINCIPAL:**

S. J. L.  
[Nombre del demandante], en autos Rol [letra]-[número]-[año] sobre alimentos, a S.S. respetuosamente digo:

Que, en conformidad al artículo 7 de la Ley 14.908, vengo en solicitar el cumplimiento forzado de la sentencia definitiva de fecha [fecha], ejecutoriada con fecha [fecha], que condenó a don [nombre del demandado] a pagar a mi hijo menor [nombre del menor] una pensión alimenticia mensual de [monto], por cuanto el demandado adeuda las pensiones de los meses [enumerar meses], por un total de $[monto total adeudado], reajustado según el IPC.

**POR TANTO:**

Ruego a S.S. ordenar el cumplimiento forzado de la sentencia, despachando los oficios y decretando los apremios que solicito en los otrosíes.

**PRIMER OTROSÍ:** En conformidad al artículo [14] de la Ley 14.908, solicito se oficie a [nombre del empleador del demandado], RUT [número], domiciliado en [dirección], para que retenga de las remuneraciones mensuales líquidas de don [nombre del demandado] la suma de $[monto de la pensión mensual], reajustada según el IPC, y la deposite directamente en la cuenta [número] a mi nombre, dentro de los primeros cinco días de cada mes, bajo apercibimiento de hacerse solidariamente responsable del pago.

**SEGUNDO OTROSÍ:** Subsidiariamente, para el caso que el demandado no tenga remuneraciones retenibles, solicito:
1. Se decrete arresto nocturno del demandado por [15] días, renovable mientras no pague.
2. Se oficie al Servicio de Registro Civil e Identificación para que suspenda la licencia de conducir del demandado mientras no pague las pensiones adeudadas.
3. Se oficie al Servicio de Impuestos Internos para que retenga cualquier devolución de impuestos a favor del demandado y la deposite en la cuenta [número] a mi nombre.
4. Se decrete embargo sobre los bienes del demandado.

---

##### Demanda de aumento de pensión alimenticia

**Suma:**
- En lo principal: Demanda aumento de pensión alimenticia.
- Primer otrosí: Acompaña documentos.
- Segundo otrosí: Patrocinio y poder.

**Estructura y contenido mínimo:**

**EN LO PRINCIPAL:**

S. J. L.  
[Nombre del demandante], en autos Rol [letra]-[número]-[año] sobre alimentos [o "en nueva demanda"], a S.S. respetuosamente digo:

Que, en conformidad al artículo 332 del Código Civil, vengo en solicitar el aumento de la pensión alimenticia que don [nombre del demandado] paga a mi hijo [nombre del menor], actualmente fijada en [monto original] por sentencia de fecha [fecha], a la suma de [nuevo monto solicitado], por haber cambiado las circunstancias que legitimaron la demanda original.

**HECHOS:**

1. Por sentencia de fecha [fecha], ejecutoriada, se fijó pensión alimenticia de [monto original] mensual.

2. Desde esa fecha han cambiado las siguientes circunstancias:
   - **Aumento de necesidades del menor:** [Ejemplo: ingresó a enseñanza media con mayor costo de matrícula y mensualidad; requiere tratamiento médico especializado; practica deporte que implica gastos adicionales]. Las nuevas necesidades mensuales son:
     - Educación: $[monto]
     - Salud: $[monto]
     - [Otros ítems]: $[monto]
     - Total: $[monto]
   
   - **Aumento de ingresos del demandado:** [Ejemplo: fue ascendido; cambió de empleo; inició actividad comercial adicional]. Sus ingresos actuales son de $[monto], según [antecedentes que se acompañan o se solicita oficiar].

3. La pensión actual de [monto original], reajustada, equivale a $[monto reajustado], insuficiente para cubrir las necesidades actuales del menor.

4. Se cumplió con la mediación previa obligatoria ante [centro de mediación], frustrada según certificado que acompaño.

**FUNDAMENTOS DE DERECHO:**

Código Civil, artículo 332: "Los alimentos que se deben por ley se entienden concedidos para toda la vida del alimentario, continuando las circunstancias que legitimaron la demanda."

El cambio de circunstancias (aumento de necesidades y/o de ingresos del alimentante) habilita para solicitar aumento.

**POR TANTO:**

Ruego a S.S. tener por interpuesta demanda de aumento de pensión alimenticia, acogerla a tramitación y, en definitiva, aumentar la pensión a [nuevo monto], devengada desde la fecha de esta demanda, con costas.

**PRIMER OTROSÍ:** Acompaño:
1. Certificado de mediación frustrada.
2. Copia autorizada de la sentencia que fijó la pensión original.
3. [Certificado de matrícula escolar con nuevo arancel].
4. [Presupuesto de tratamiento médico].
5. [Liquidaciones de sueldo actuales del demandado / certificado de empleador].

**SEGUNDO OTROSÍ:** Patrocinio y poder a don [nombre del abogado], abogado, RUT [número], domiciliado en [dirección], correo electrónico [email].

---

#### Tabla de plazos

| Etapa | Plazo | Cómputo | Norma | Consecuencia si se omite |
|-------|-------|---------|-------|--------------------------|
| Mediación previa | 60 días corridos desde primera sesión (no verificado en esta búsqueda) | Desde primera sesión | Ley 19.968, art. 106 | Demanda inadmisible |
| Presentación de demanda | Sin plazo (mientras subsista necesidad) | — | Código Civil, art. 331 | Alimentos se devengan desde primera demanda; demora implica pérdida de pensiones anteriores |
| Examen de admisibilidad | 2 días hábiles (no verificado en esta búsqueda) | Desde presentación | Ley 19.968 | Demora en tramitación |
| Notificación de la demanda | Al menos 15 días antes de audiencia preparatoria (no verificado en esta búsqueda) | Desde resolución que fija audiencia | Ley 19.968 | Audiencia no puede realizarse; rebeldía inválida |
| Audiencia preparatoria | Entre 20 y 40 días desde notificación (no verificado en esta búsqueda) | Desde notificación de la demanda | Ley 19.968 | — |
| Contestación de demanda | En la audiencia preparatoria | — | Ley 19.968 | Rebeldía del demandado |
| Audiencia de juicio | Dentro de 30 días desde audiencia preparatoria (no verificado en esta búsqueda) | Desde audiencia preparatoria | Ley 19.968 | Demora en dictación de sentencia |
| Dictación de sentencia | En audiencia de juicio o dentro de 15 días (no verificado en esta búsqueda) | Desde audiencia de juicio | Ley 19.968 | Denegación de justicia (reclamable) |
| Apelación | 5 días hábiles (no verificado en esta búsqueda) | Desde notificación por estado diario | Ley 19.968; CPC | Sentencia queda firme; preclusión del recurso |
| Casación | 5 días hábiles (no verificado en esta búsqueda) | Desde notificación sentencia Corte Apelaciones | Ley 19.968; CPC | Sentencia de Corte queda firme |
| Cumplimiento forzado | Sin plazo (mientras esté vigente obligación) | — | Ley 14.908, art. 7 | Pensiones impagas prescriben en 3 años (no verificado en esta búsqueda) |

---

#### Recursos

##### Apelación

- **Procede contra:** Sentencia definitiva de primera instancia; resoluciones que decretan, modifican o rechazan alimentos provisorios (no verificado en esta búsqueda); resoluciones que decretan o rechazan apremios.
- **Plazo:** 5 días hábiles desde la notificación por el estado diario (no verificado en esta búsqueda).
- **Tribunal ante el que se interpone:** Juzgado de Familia que dictó la resolución (por escrito fundado).
- **Tribunal que conoce:** Corte de Apelaciones respectiva.
- **Efectos:** La apelación de la sentencia definitiva se concede en el solo efecto devolutivo (no verificado en esta búsqueda), es decir, la sentencia se cumple mientras se tramita la apelación.

##### Casación en la forma

- **Procede contra:** Sentencia de la Corte de Apelaciones que falla la apelación, por vicios de procedimiento (ultrapetita, falta de fundamentos, omisión de diligencias probatorias decretadas).
- **Plazo:** 5 días hábiles desde la notificación de la sentencia de la Corte de Apelaciones (no verificado en esta búsqueda).
- **Tribunal ante el que se interpone:** Corte de Apelaciones que dictó la sentencia.
- **Tribunal que conoce:** Corte Suprema.
- **Efectos:** Se concede en el solo efecto devolutivo (no verificado en esta búsqueda). Es excepcional en materia de familia; generalmente se rechaza por falta de interés casacional.

##### Casación en el fondo

- **Procede contra:** Sentencia de la Corte de Apelaciones que falla la apelación, por infracción de ley que influye sustancialmente en lo dispositivo del fallo.
- **Plazo:** 5 días hábiles desde la notificación de la sentencia de la Corte de Apelaciones (no verificado en esta búsqueda).
- **Tribunal ante el que se interpone:** Corte de Apelaciones que dictó la sentencia.
- **Tribunal que conoce:** Corte Suprema.
- **Efectos:** Se concede en el solo efecto devolutivo (no verificado en esta búsqueda). Excepcional en materia de familia.

##### Reposición

- **Procede contra:** Resoluciones de mero trámite (autos y decretos) del Juzgado de Familia.
- **Plazo:** 3 días hábiles desde la notificación (no verificado en esta búsqueda).
- **Tribunal que conoce:** El mismo Juzgado de Familia que dictó la resolución.
- **Efectos:** No suspende la tramitación (salvo que se conceda con efecto suspensivo, excepcional).

---

#### Errores frecuentes y estrategia

##### Errores frecuentes

1. **Omitir la mediación previa obligatoria:** La demanda será declarada inadmisible.

2. **No acreditar ingresos del demandado:** Si no se acompañan liquidaciones de sueldo, declaraciones de impuestos o antecedentes de ingresos, solicitar en la demanda que el tribunal oficie de oficio al empleador, SII, AFP o Isapre. La presunción del artículo 3 inciso final de la Ley 14.908 ayuda, pero no exime de probar.

3. **Solicitar monto desproporcionado:** Un monto excesivo (por ejemplo, 80% del ingreso del demandado) será rechazado. Lo prudente es solicitar entre 20% y 40% del ingreso líquido por un hijo (no verificado en esta búsqueda), fundamentando en las necesidades reales del menor.

4. **No detallar las necesidades del menor:** Una demanda genérica ("necesita alimentos") será débil. Detallar mensualmente: educación (matrícula, mensualidad, útiles, uniforme), salud (Isapre/Fonasa, copagos, medicamentos), alimentación, vestuario, recreación, transporte. Acompañar comprobantes.

5. Siempre solicitarlos, fundados en la presunción legal.

6. **No notificar correctamente al demandado:** Una notificación defectuosa invalida todo lo obrado. Verificar que el receptor certifique domicilio exacto, persona con quien se entiende la diligencia, y que entregue copia íntegra de la demanda y documentos.

7. **No comparecer a la audiencia preparatoria:** Si el demandante no comparece, el tribunal puede tener por abandonada la demanda (no verificado en esta búsqueda). Si el demandado no comparece, se le declara rebelde, pero el demandante debe probar igual en audiencia de juicio.

8. **No ofrecer pruebas en audiencia preparatoria:** La prueba se ofrece en la audiencia preparatoria. Si no se ofrece ahí, precluye el derecho (salvo prueba sobreviniente, excepcional). Llevar individualizados los testigos (nombre, RUT, domicilio, hechos sobre los que declararán) y los documentos.

9. **No ejecutar la sentencia oportunamente:** Las pensiones impagas prescriben en 3 años (no verificado en esta búsqueda). Si el demandado no paga, solicitar inmediatamente retención de remuneraciones. No esperar a que se acumulen muchas pensiones impagas.

10. **No solicitar modificación cuando cambian las circunstancias:** Si aumentan las necesidades del menor (ingreso a universidad, enfermedad) o los ingresos del demandado, solicitar aumento. Si disminuyen los ingresos del demandado, éste puede solicitar rebaja; si no lo hace y deja de pagar, se acumulan pensiones impagas ejecutables.

##### Estrategia

1. **Preparar bien la mediación:** Llevar a la mediación un presupuesto detallado de las necesidades del menor y antecedentes de ingresos del demandado. Proponer un monto razonable. Si el demandado no comparece o rechaza sin fundamento, el mediador emitirá certificado de mediación frustrada, pero haber intentado seriamente el acuerdo fortalece la posición ante el juez.

2. **Fijar el monto en porcentaje del ingreso líquido, no en pesos fijos:** Si el demandado es trabajador dependiente, solicitar un porcentaje de su remuneración líquida (por ejemplo, 30%). Así la pensión aumenta automáticamente si aumenta el sueldo, sin necesidad de demandar aumento. Si se fija en pesos o UF, queda congelada (salvo reajuste IPC).

3. **Solicitar retención de remuneraciones desde la sentencia:** En la demanda, solicitar que la sentencia ordene directamente la retención por el empleador. Así, apenas quede firme, se despacha el oficio de retención sin necesidad de juicio ejecutivo.

4. **Acumular todas las pretensiones en una sola demanda:** Si además de alimentos se requiere regular cuidado personal o relación directa y regular, acumular todas las materias en una sola demanda (Ley 19.968, artículo 17), con una sola mediación previa. Evita duplicar trámites y costos.

5. **Usar la presunción legal del artículo 3 inciso final de la Ley 14.908:** Si el demandado no acredita sus ingresos o alega que no tiene, invocar la presunción: "se presumirá que el alimentante tiene los medios para otorgarlos".

6. **Actualizar la demanda de aumento cada vez que cambian las circunstancias:** No esperar años. Si el menor ingresa a enseñanza media, universidad, o requiere tratamiento médico, demandar aumento inmediatamente. Los alimentos aumentados se devengan desde la demanda de aumento, no retroactivamente.

7. **En caso de violencia intrafamiliar, no ir a mediación:** Si existe condena previa, anotación en el Registro Especial VIF, o medida cautelar vigente, la mediación está prohibida (Ley 19.968, artículo 106 inciso final). Presentar la demanda directamente, acompañando certificado del tribunal o del Registro Civil que acredite la excepción.

8. **Si el demandado es independiente o informal, solicitar oficios amplios:** Oficiar al SII (declaraciones de impuestos, inicio de actividades, patentes), al Registro Civil (vehículos), al Conservador de Bienes Raíces (propiedades). Si tiene actividad comercial, solicitar peritaje contable.

9. **Llevar testigos a la audiencia de juicio:** Aunque se hayan individualizado en la audiencia preparatoria, asegurarse de que comparezcan a la audiencia de juicio. Llamarlos el día anterior para confirmar. Si no comparecen, se pierde esa prueba.

10. **Apelar solo si hay error manifiesto:** La apelación en familia es en el solo efecto devolutivo (la sentencia se cumple igual) y tarda meses. Apelar solo si el monto fijado es irrisorio o si hay error de derecho grave. Si el monto es razonable aunque menor al solicitado, mejor no apelar y, si cambian las circunstancias, demandar aumento.

---

#### Lista de verificación

**Antes de demandar:**

- [ ] Certificado de nacimiento del menor (original o copia autorizada) que acredite filiación respecto del demandado.
- [ ] Verificar excepciones a la mediación: si hay violencia intrafamiliar (condena, anotación Registro VIF, medida cautelar), acompañar certificado que acredite la excepción.
- [ ] Antecedentes de ingresos del demandado: liquidaciones de sueldo, declaraciones de impuestos, contratos, inicio de actividades, patentes, información de bienes.
- [ ] Presupuesto mensual detallado de necesidades del menor: educación, salud, alimentación, vestuario, recreación. Acompañar comprobantes (certificado de matrícula, boletas de Isapre, etc.).
- [ ] Certificado de residencia del menor (para acreditar competencia territorial): declaración jurada notarial o certificado municipal.
- [ ] Antecedentes propios (demandante): cédula de identidad, certificado de residencia, antecedentes de ingresos (para demostrar que no alcanzan a cubrir necesidades del menor).
- [ ] Determinar tribunal competente: Juzgado de Familia de la residencia del menor (o del demandado si el menor cambió residencia por abandono o rapto).
- [ ] Patrocinio de abogado habilitado o asistencia de Corporación de Asistencia Judicial.

**Al presentar la demanda:**

- [ ] Demanda cumple requisitos del artículo 57 de la Ley 19.968 (no verificado en esta búsqueda): individualización de partes, hechos, fundamentos de derecho, peticiones concretas.
- [ ] Monto solicitado: en pesos, UF o porcentaje del ingreso líquido del demandado. Fundamentado en necesidades del menor y capacidad del demandado.
- [ ] Solicitud de alimentos provisorios en otrosí, fundada en presunción legal del artículo 3 inciso final de la Ley 14.908.
- [ ] Acompañar certificado de mediación frustrada y documentos fundantes.
- [ ] Patrocinio y poder en otrosí.
- [ ] Presentación por Oficina Judicial Virtual (si está vigente) o en papel en Unidad de Atención de Público.

**Después de la primera resolución:**

- [ ] Verificar que la resolución fijó audiencia preparatoria y ordenó notificar al demandado.
- [ ] Verificar que se decretaron alimentos provisorios (si se solicitaron). Si no, solicitar reposición.
- [ ] Coordinar notificación personal del demandado: entregar al receptor copia íntegra de la demanda, documentos y resolución. Indicar domicilio exacto y horarios en que puede encontrarse al demandado.
- [ ] Verificar que la notificación se practicó correctamente: receptor certifica domicilio, persona con quien se entiende la diligencia, entrega de copias.

**Antes de la audiencia preparatoria:**

- [ ] Verificar que el demandado fue notificado con al menos 15 días de anticipación (no verificado en esta búsqueda).
- [ ] Preparar alegaciones orales: ratificar demanda, destacar necesidades del menor y capacidad del demandado.
- [ ] Preparar propuesta de conciliación: monto mínimo aceptable.
- [ ] Llevar documentos adicionales si los hay (no acompañados en la demanda).
- [ ] Individualizar testigos para ofrecer en audiencia: nombre, RUT, domicilio, hechos sobre los que declararán.
- [ ] Solicitar oficios a empleador, SII, AFP, Isapre si no se tienen antecedentes de ingresos del demandado.

**En la audiencia preparatoria:**

- [ ] Comparecer personalmente (demandante) o representado por abogado.
- [ ] Ratificar la demanda.
- [ ] Escuchar propuesta de conciliación del juez; evaluar si es conveniente aceptar.
- [ ] Si no hay acuerdo, ofrecer medios de prueba: documentos, testigos, oficios, peritajes.
- [ ] Verificar que el juez fijó hechos controvertidos y admitió las pruebas ofrecidas.
- [ ] Anotar fecha y hora de audiencia de juicio.

**Entre audiencia preparatoria y audiencia de juicio:**

- [ ] Verificar que se despacharon los oficios decretados (a empleador, SII, etc.). Si no, solicitar que se despachen (cuenta).
- [ ] Coordinar comparecencia de testigos a audiencia de juicio: llamarlos con anticipación, confirmar el día anterior.
- [ ] Si se decretó peritaje, verificar que el perito presentó su informe.
- [ ] Revisar las respuestas a los oficios: si el empleador informó remuneraciones del demandado, si el SII informó declaraciones de impuestos, etc.

**En la audiencia de juicio:**

- [ ] Comparecer personalmente o representado por abogado.
- [ ] Llevar a los testigos ofrecidos.
- [ ] Escuchar nueva propuesta de conciliación; evaluar.
- [ ] Interrogar a los testigos propios; contrainterrogar a los del demandado.
- [ ] Alegar finalmente: resumir pruebas rendidas, destacar necesidades del menor y capacidad del demandado, reiterar monto solicitado.
- [ ] Verificar si el juez dictó sentencia en la audiencia o anunció que la dictará dentro de 15 días (no verificado en esta búsqueda).

**Después de la sentencia:**

- [ ] Verificar que la sentencia se notificó por el estado diario (publicación en sitio web del Poder Judicial).
- [ ] Leer la sentencia: monto fijado, forma de pago, periodicidad, reajustabilidad, fecha desde la cual se devenga.
- [ ] Apelar solo si hay error manifiesto.
- [ ] Si no se apela, esperar que quede firme (5 días hábiles desde notificación).
- [ ] Solicitar certificado de ejecutoriedad.

**Cumplimiento de la sentencia:**

- [ ] Verificar que el demandado paga en la forma, monto y plazo fijados.
- [ ] Si no paga, solicitar inmediatamente cumplimiento forzado: retención de remuneraciones (oficio al empleador).
- [ ] Si no tiene remuneraciones retenibles, solicitar apremios: arresto nocturno, suspensión de licencia de conducir, retención de devolución de impuestos, embargo de bienes.
- [ ] Llevar registro de pensiones pagadas e impagas (con fechas y montos reajustados).

**Modificación de la pensión:**

- [ ] Si aumentan las necesidades del menor o los ingresos del demandado, preparar demanda de aumento: nueva mediación previa, antecedentes actualizados.
- [ ] Si disminuyen los ingresos del demandado, estar preparado para oponerse a demanda de rebaja: verificar que la disminución es real y no simulada.
- [ ] Si el menor cumple 21 años, verificar si estudia profesión u oficio (pensión sigue hasta los 28 años) o tiene incapacidad (pensión sigue indefinidamente). Si no, el demandado puede solicitar cese.

---

#### Qué verificar antes de actuar

- **Excepciones a la mediación:** Si existe violencia intrafamiliar, verificar en el Registro Civil (Registro Especial de la Ley 20.066) si hay anotaciones del demandado por agredir al demandante. Solicitar certificado. Verificar en el tribunal de familia si hay medidas cautelares o de protección vigentes entre las partes.

- **Competencia territorial:** Confirmar la residencia actual del menor (certificado de residencia, declaración jurada notarial). Si el menor cambió de residencia por abandono de hogar o rapto, el tribunal competente es el del domicilio del demandado (Ley 14.908, artículo 3).

- **Tramitación electrónica:** Verificar en el sitio web del Poder Judicial (www.pjud.cl) si el Juzgado de Familia respectivo tiene vigente la tramitación electrónica (Ley 20.886). Si sí, la presentación de escritos y notificaciones es por la Oficina Judicial Virtual. Si no, es en papel.

- **Autos acordados del tribunal:** Consultar en el sitio web del tribunal o en la Unidad de Atención de Público si hay autos acordados sobre horarios de audiencias, forma de presentación de escritos, individualización de testigos, etc.

- **Reformas legales recientes:** Verificar en LeyChile (www.bcn.cl/leychile) si hubo reformas recientes a la Ley 14.908, al Código Civil (artículos sobre alimentos) o a la Ley 19.968 que cambien plazos, montos o procedimientos. Por ejemplo, la Ley 21.484 de 2022 modificó el artículo 323 del Código Civil (contenido de los alimentos, resguardando el interés superior del niño).

- **Criterios del tribunal:** Si es posible, consultar con abogados que litigan habitualmente en el Juzgado de Familia respectivo sobre los criterios del juez en materia de alimentos: montos que suele fijar, si decreta alimentos provisorios de oficio, si acoge o rechaza apremios, etc. Esto permite ajustar la estrategia.

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### g05-desalojo — procedimiento: Juicio de terminación de arrendamiento y desalojo por no pago de rentas

<details><summary>Material enviado al modelo (14 normas, 0 fallos o dictámenes, 3 artículos de doctrina; 2 normas descartadas por materia)</summary>

- Ley 18.101, fija normas especiales sobre arrendamiento de predios urbanos, Artículo 1
- Ley 18.101, fija normas especiales sobre arrendamiento de predios urbanos, Artículo 3
- Ley 18.101, fija normas especiales sobre arrendamiento de predios urbanos, Artículo 8
- Código Civil, Artículo 1977
- Código Civil, Artículo 1915
- Código Civil, Artículo 1924
- Código Civil, Artículo 1947
- Código Civil, Artículo 1945
- Código Civil, Artículo 1950
- Código Civil, Artículo 1951
- Código Civil, Artículo 1955
- Código Civil, Artículo 1956
- CIR Filiales 37, sociedades filiales. modifica normas generales., Artículo 19
- CIR Bancos 2409, recopilacion actualizada de normas, Artículo 102
- Doctrina: López Díaz, Patricia, "TERMINACIÓN DEL CONTRATO DE ARRENDAMIENTO POR NO PAGO DE RENTAS. INCUMPLIMIENTO DE LA OBLIGACIÓN DE HABILITAR EL INMUEBLE ARRENDADO COMO LOCAL COMERCIAL. RECURSO A LOS ARTS. 1563, 1564 Y 1566 DEL CÓDIGO CIVIL. PROCEDENCIA DE UN EVENTUAL CONCURSO DE TUTELAS Y DE LA OPCIÓN DEL ACREEDOR. CORTE SUPREMA, 20 DE FEBRERO DE 2019, ROL 31.512-2018. CITA EN LÍNEA LEGALPUBLISHING CL/JUR/907/2019.", Revista Chilena de Derecho Privado, N° 32, (2019), DOI: 10.32995/s0718-80722019419.
- Doctrina: Erbetta Mattig, Andrés, "Carga de la prueba, rebeldía del demandado e Incumplimiento parcial de la obligación de pagar las rentas de arrendamiento: ¿cómo se debe aplicar la regla del art. 1698 inciso primero del Código Civil? Reflexiones a partir de la sentencia de la Corte Supre", Revista Chilena de Derecho y Ciencia Política, vol. 13, N° 2, (2022), pp. 229-241, DOI: 10.7770/rchdcp-v13n2-art2709.
- Doctrina: De la Maza Gazmuri, Iñigo, "COMENTARIO. TERMINACIÓN DE CONTRATO DE ARRENDAMIENTO POR MAL ESTADO O CALIDAD DE LA COSA. CORTE DE APELACIONES DE SANTIAGO, Nº LEGAL PUBLISHING 43257.", Revista Chilena de Derecho Privado, N° 15, (2019), DOI: 10.32995/s0718-80722010305.
- ~~CIR Bancos 3521, recopilación actualizada de normas. capítulos 1-1, 2-1, 2-11, 3-1, 5-2, 7-1, 8-8, 8-37, 10-1, 11-7, 12-3, 18-11 y 19-2. actualiza instrucciones, Artículo 61~~ (sin relación léxica (0 términos en común))
- ~~CIR Bancos 3444, recopilación actualizada de normas. capítulos 1-1, 1-7,1-8, 7-1, 7-3, 7-4, 7-7, 7-10, 8-3, 8-26, 8-29, 8-37, 8-40, 9-1, 10-1, 10-2, 11-6, 11-7, 12-9, 16-4, 8-1, 18-6,18-13 y 20-3. modifica, complementa y suprime instrucciones, Artículo 137~~ (sin relación léxica (1 términos en común))

Versión anterior (main):
- Código Civil, Artículo 1945
- Código Civil, Artículo 1950
- Código Civil, Artículo 1951
- Código Civil, Artículo 1955
- Código Civil, Artículo 1956
- Código de Procedimiento Civil, Artículo 434
- Código de Procedimiento Civil, Artículo 441
- Código de Procedimiento Civil, Artículo 443
- Código de Procedimiento Civil, Artículo 459
- Código de Procedimiento Civil, Artículo 464
- Código de Procedimiento Civil, (artículo no identificado)
- Código Civil, (artículo no identificado)
- Ley N° 18.101 sobre Arrendamiento de Predios Urbanos, Artículo 3
- Código del Trabajo, Artículo 161

</details>

#### Ficha del procedimiento

| Aspecto | Detalle |
|---------|---------|
| **Tipo de procedimiento** | Juicio de terminación de contrato de arrendamiento y restitución del inmueble por no pago de rentas (procedimiento especial verbal) |
| **Normas aplicables** | Ley 18.101, artículos 3, 8 y 9; Código Civil, artículos 1915, 1924, 1945, 1947, 1950, 1951, 1955, 1956, 1977; Código de Procedimiento Civil (supletorio) |
| **Tribunal competente** | **Materia:** Juzgado de Letras en lo Civil del lugar donde se ubica el inmueble arrendado. **Cuantía:** Sin límite. **Territorio:** Domicilio del demandado, que se presume de pleno derecho el del inmueble arrendado (artículo 8 N° 2, Ley 18.101) |
| **Comparecencia** | Ley 18.120: patrocinio de abogado habilitado y poder cuando se actúe por mandatario. **Excepción:** En primera instancia, las partes pueden comparecer y defenderse personalmente si la renta vigente al tiempo de interponer la demanda no supera 4 UTM (artículo 8 N° 10, Ley 18.101). 4 UTM = $286.884 (septiembre 2026) |
| **Prescripción o caducidad** | Acción de terminación por no pago: no tiene plazo especial de prescripción; se rige por las reglas generales del Código Civil (5 años, artículo 2515). La acción de cobro de rentas insolutas prescribe en 3 años (artículo 2521) |
| **Tramitación electrónica** | Ley 20.886: obligatoria en tribunales con sistema tramitación electrónica implementado. Presentación vía Oficina Judicial Virtual (OJV). Verificar estado de implementación en el tribunal respectivo |

#### Antes de demandar

**Antecedentes necesarios:**
- Contrato de arrendamiento (original o copia autorizada)
- Comprobantes de pago de rentas anteriores que acrediten la relación arrendaticia
- Certificado de dominio vigente del inmueble (si el arrendador es propietario) o título que acredite su calidad de arrendador
- Cálculo detallado de rentas adeudadas, con indicación de períodos y montos
- Comprobantes de envío de las dos reconvenciones previas (si se efectuaron)

**Documentos que deben acompañarse a la demanda:**
- Contrato de arrendamiento
- Documentos que acrediten la calidad de arrendador
- Comprobantes de las reconvenciones (cartas certificadas, correos electrónicos, notificaciones notariales)
- Nómina de hasta cuatro testigos con su individualización completa (nombre, RUT, profesión u oficio, domicilio)

**Gestiones previas obligatorias:**

Según el artículo 1977 del Código Civil, antes de demandar la terminación por mora en el pago de rentas, el arrendador debe efectuar **dos reconvenciones** al arrendatario, cumpliendo estos requisitos:

1. **Contenido:** Requerimiento de pago de la renta adeudada, con advertencia de que, de no pagarse, se ejercerá la acción de terminación
2. **Plazo entre reconvenciones:** Mínimo 4 días entre la primera y la segunda reconvención
3. **Forma:** Cualquier medio que deje constancia fehaciente (carta certificada, notificación notarial, correo electrónico con acuse de recibo, WhatsApp con captura de pantalla). Se recomienda notificación por ministro de fe (notario o receptor judicial)
4. **Oportunidad:** Después de vencido el período de renta completo impago

**Advertencia:** Si el arrendatario paga dentro de un plazo razonable (no inferior a 30 días) y presta seguridad competente, no procede la terminación (artículo 1977 CC). La jurisprudencia entiende que este plazo corre desde la segunda reconvención.

**Gestión preparatoria opcional:**
Si no se cuenta con el contrato escrito o hay dudas sobre su contenido, puede solicitarse exhibición de documentos (artículo 273 N° 2 CPC).

#### Tramitación paso a paso

##### Etapa 1: Presentación de la demanda
- **Qué se hace:** El arrendador presenta demanda de terminación de contrato de arrendamiento y restitución del inmueble, indicando los medios de prueba (especialmente la nómina de testigos).
- **Quién:** Arrendador o su apoderado, con patrocinio de abogado (salvo excepción de renta bajo 4 UTM).
- **Plazo y cómputo:** Sin plazo. Puede demandarse en cualquier momento después de cumplidas las dos reconvenciones y transcurrido el plazo razonable sin pago.
- **Norma:** Artículo 8 N° 1 y 3, Ley 18.101.
- **Si se omite:** No se inicia el procedimiento. Si se omite la nómina de testigos, no podrán declarar en la audiencia.

**Contenido mínimo de la demanda:**
- Individualización completa de las partes
- Exposición clara de los hechos: celebración del contrato, monto de la renta, períodos adeudados, reconvenciones efectuadas
- Fundamentos de derecho: artículos 1977 CC, 1950 N° 4 CC, Ley 18.101
- Peticiones concretas: terminación del contrato, restitución del inmueble, pago de rentas insolutas, intereses, costas
- Medios de prueba: documental (contrato, reconvenciones), testimonial (nómina de hasta 4 testigos con individualización completa)
- Patrocinio y poder

##### Etapa 2: Examen de admisibilidad y citación a audiencia
- **Qué se hace:** El tribunal examina si la demanda cumple requisitos formales y cita a audiencia para el quinto día hábil después de la última notificación.
- **Quién:** Tribunal de oficio.
- Audiencia se fija para el quinto día hábil después de la última notificación.
- **Norma:** Artículo 8 N° 1, Ley 18.101.
- **Si se omite:** Demanda no tramitada; puede solicitarse proveer.

**Resolución tipo:** "Santiago, [fecha]. A lo principal: Por interpuesta demanda de terminación de contrato de arrendamiento y restitución de inmueble. Traslado. Cítase a las partes a audiencia de contestación, conciliación y prueba para el día [quinto día hábil después de notificado el demandado], a las [hora], en la sala de audiencias de este tribunal. Notifíquese."

##### Etapa 3: Notificación de la demanda
- **Qué se hace:** Notificación personal al demandado en el domicilio del inmueble arrendado.
- **Quién:** Receptor judicial.
- **Plazo y cómputo:** Debe practicarse antes de la audiencia. El receptor tiene hasta dos días antes de la audiencia para notificar (práctica forense; verificar en cada tribunal).
- **Norma:** Artículo 8 N° 2, Ley 18.101; artículo 553 inciso 1° CPC (notificación personal); artículo 44 CPC (presunción de domicilio).
- **Si se omite:** Audiencia no puede realizarse; debe fijarse nueva fecha.

**Particularidad:** Se presume de pleno derecho como domicilio del demandado el del inmueble arrendado, aunque no viva allí. Basta notificar en ese lugar a cualquier persona adulta que se encuentre, o si está cerrado, fijar aviso (artículo 44 CPC).

##### Etapa 4: Presentación de nómina de testigos del demandado (si corresponde)
- **Qué se hace:** Si el demandado quiere rendir prueba testimonial, presenta nómina de hasta 4 testigos con su individualización.
- **Quién:** Demandado o su apoderado.
- **Plazo y cómputo:** Hasta antes de las 12:00 horas del día que preceda al de la audiencia. Día hábil.
- **Norma:** Artículo 8 N° 3, Ley 18.101.
- **Si se omite:** No podrá rendir prueba testimonial en la audiencia.

##### Etapa 5: Audiencia de contestación, conciliación y prueba
- **Qué se hace:** Audiencia única donde se contesta la demanda, se llama a conciliación, se fijan hechos controvertidos y se recibe la prueba.
- **Quién:** Juez, partes y testigos.
- **Plazo y cómputo:** Quinto día hábil después de la última notificación. Días hábiles.
- **Norma:** Artículo 8 N° 1, 4, 6, Ley 18.101.
- **Si se omite:** Si no comparece el demandante, se entiende abandonada la demanda. Si no comparece el demandado, se realiza la audiencia en su rebeldía.

**Desarrollo de la audiencia:**

**a) Relación de la demanda:**
El juez o el secretario relata verbalmente el contenido de la demanda.

**b) Contestación de la demanda:**
El demandado contesta verbalmente (puede presentar minuta escrita). Puede:
- **Allanarse:** Acepta la demanda. El juez dicta sentencia de inmediato o cita a oír sentencia.
- **Defenderse:** Niega los hechos, opone excepciones (pago, prescripción, nulidad del contrato, incumplimiento del arrendador que justifica la retención de rentas por excepción de contrato no cumplido).
- **Reconvenir:** Demanda al arrendador (por ejemplo, por indemnización de perjuicios por incumplimiento de obligaciones del arrendador, devolución de garantía). De la reconvención se da traslado al demandante, quien puede contestar de inmediato o reservar para audiencia posterior (dentro de 5 días).

**c) Llamado a conciliación (obligatorio):**
El juez propone bases de arreglo. Si hay acuerdo total, se levanta acta y el juez dicta sentencia aprobatoria. Si hay acuerdo parcial o no hay acuerdo, continúa la audiencia.

**d) Fijación de hechos sustanciales, pertinentes y controvertidos:**
El juez establece qué debe probarse. Si no hay hechos controvertidos, cita de inmediato a oír sentencia.

**e) Recepción de la prueba:**
- **Documental:** Se reconocen o impugnan los documentos acompañados.
- **Testimonial:** Declaran los testigos de la nómina (máximo 4 por parte). No pueden declarar ante tribunal distinto.
- **Otras:** Confesional, pericial (excepcional en estos juicios).

La prueba se aprecia según sana crítica (artículo 8 N° 7, Ley 18.101).

**f) Citación a oír sentencia:**
Concluida la prueba, el juez cita a las partes a oír sentencia.

**Particularidad si hay reconvención:**
Si el demandante no contestó la reconvención en el acto, se cita a nueva audiencia dentro de los 5 días siguientes para contestación y prueba de la reconvención. Las partes se entienden citadas de pleno derecho (no requiere nueva notificación).

##### Etapa 6: Tramitación de incidentes (si se promueven)
- **Qué se hace:** Los incidentes (nulidad procesal, acumulación de autos, etc.) se promueven y tramitan en la misma audiencia, conjuntamente con la cuestión principal.
- **Quién:** Parte que los promueve; juez que los resuelve.
- **Plazo y cómputo:** En la audiencia, sin paralizar el curso del juicio.
- **Norma:** Artículo 8 N° 8, Ley 18.101.
- **Si se omite:** Preclusión de la oportunidad para promover el incidente.

**Resolución:** La sentencia definitiva se pronuncia sobre la acción principal y sobre los incidentes, o solo sobre estos si son previos o incompatibles con aquella.

##### Etapa 7: Sentencia definitiva
- **Qué se hace:** El juez dicta sentencia definitiva acogiendo o rechazando la demanda (y la reconvención, si la hay).
- **Quién:** Juez.
- **Plazo y cómputo:** No hay plazo legal específico. En la práctica, entre 10 y 30 días desde la citación a oír sentencia (no verificado en esta búsqueda).
- **Norma:** Artículo 8 N° 6 y 8, Ley 18.101; artículos 158 y siguientes CPC (requisitos de la sentencia).
- **Si se omite:** Puede solicitarse autos en relación o pronto despacho.

**Contenido de la sentencia que acoge la demanda:**
- Declara terminado el contrato de arrendamiento
- Ordena la restitución del inmueble al arrendador
- Condena al pago de rentas insolutas, con intereses y reajustes (si corresponde)
- Condena en costas al demandado (si no tuvo motivo plausible para litigar)

**Contenido de la sentencia que rechaza la demanda:**
- Rechaza la terminación del contrato
- Mantiene vigente el arrendamiento
- Puede condenar en costas al demandante

##### Etapa 8: Notificación de la sentencia
- **Qué se hace:** Notificación por el estado diario.
- **Quién:** Tribunal (secretario).
- **Plazo y cómputo:** Al día siguiente de dictada la sentencia (artículo 50 CPC).
- **Norma:** Artículo 50 CPC.
- **Si se omite:** Sentencia no produce efectos; no corre plazo de apelación.

##### Etapa 9: Apelación (si se interpone)
- **Qué se hace:** Parte agraviada apela de la sentencia definitiva.
- **Quién:** Demandante o demandado.
- **Plazo y cómputo:** 5 días hábiles desde la notificación de la sentencia (artículo 189 CPC).
- **Norma:** Artículo 8 N° 9, Ley 18.101; artículo 189 CPC.
- **Si se omite:** Sentencia queda firme.

**Tramitación de la apelación:**
- Se concede en el **solo efecto devolutivo** (artículo 8 N° 9, Ley 18.101): la sentencia se cumple aunque esté apelada.
- Se eleva a la Corte de Apelaciones respectiva.
- Tiene preferencia para vista y fallo.
- No se puede conceder orden de no innovar.
- La Corte puede pronunciarse sobre todas las cuestiones debatidas en primera instancia, aunque no hayan sido resueltas en el fallo apelado (artículo 8 N° 9, Ley 18.101).

##### Etapa 10: Sentencia de segunda instancia
- **Qué se hace:** Corte de Apelaciones confirma, revoca o modifica la sentencia de primera instancia.
- **Quién:** Corte de Apelaciones.
- **Plazo y cómputo:** Variable; en la práctica, entre 2 y 6 meses (no verificado en esta búsqueda).
- **Norma:** Artículo 8 N° 9, Ley 18.101; artículos 186 y siguientes CPC.
- **Si se omite:** No aplicable.

**Recursos contra la sentencia de segunda instancia:**
- **Casación en la forma:** Procede si hay vicios formales (artículo 768 CPC). Plazo: 10 días hábiles desde notificación.
- **Casación en el fondo:** Procede si hay infracción de ley que influyó sustancialmente en lo dispositivo del fallo (artículo 767 CPC). Plazo: 15 días hábiles desde notificación.

##### Etapa 11: Cumplimiento de la sentencia firme
- **Qué se hace:** Ejecutar la sentencia: lanzamiento del arrendatario y entrega material del inmueble; cobro de rentas insolutas.
- **Quién:** Arrendador solicita; receptor judicial ejecuta el lanzamiento.
- **Plazo y cómputo:** Desde que la sentencia queda firme o ejecutoriada. Sin plazo para solicitarlo (pero rentas prescriben en 3 años).
- **Norma:** Artículos 231 y siguientes CPC (ejecución de resoluciones); artículo 8 N° 9, Ley 18.101 (apelación en solo efecto devolutivo permite cumplimiento inmediato).
- **Si se omite:** Sentencia no se materializa; arrendatario permanece en el inmueble.

**Lanzamiento:**
- Se solicita al tribunal que ordene el lanzamiento.
- Se fija día y hora para la diligencia.
- Receptor judicial, con auxilio de la fuerza pública si es necesario, desaloja al arrendatario y sus bienes, y entrega materialmente el inmueble al arrendador.
- Si el arrendatario no está presente, se procede igual; sus bienes se depositan en un lugar seguro o se entregan a quien él designe.

**Cobro de rentas insolutas:**
- Si la sentencia condenó al pago de rentas, se ejecuta como juicio ejecutivo (artículos 434 y siguientes CPC).
- Título ejecutivo: sentencia firme.
- Se requiere de pago; si no paga, se embargan bienes y se rematan.

##### Etapa 12: Restitución anticipada del inmueble (medida excepcional)
- **Qué se hace:** A solicitud del demandante, el juez puede ordenar la restitución anticipada del inmueble y el lanzamiento antes de la sentencia definitiva, con el mérito de lo obrado en la audiencia.
- **Quién:** Demandante solicita; juez resuelve.
- **Plazo y cómputo:** En la audiencia o inmediatamente después.
- **Norma:** Artículo 8 N° 7 bis, Ley 18.101.
- **Si se omite:** No se obtiene restitución anticipada; debe esperarse sentencia firme.

**Requisitos:**
- Demanda de terminación por destrucción parcial del inmueble o inutilización para su uso, por acción u omisión del arrendatario en su cuidado.
- Presunción grave del derecho reclamado, acreditada con los antecedentes de la demanda y lo ventilado en la audiencia.
- El juez puede exigir caución al demandante para indemnizar al arrendatario si la sentencia definitiva no lo condena a restituir.

**Advertencia:** Esta medida NO procede en juicios por no pago de rentas, sino solo por destrucción o inutilización del inmueble por culpa del arrendatario.

#### Escritos clave

##### Demanda de terminación de contrato de arrendamiento y restitución de inmueble

**Suma:**
"En lo principal: Demanda terminación de contrato de arrendamiento y restitución de inmueble. Primer otrosí: Acompaña documentos. Segundo otrosí: Patrocinio y poder."

**Estructura y contenido:**

**EN LO PRINCIPAL:**

S.J.L. en lo Civil de [ciudad]

[Nombre del demandante], [profesión u oficio], RUT [número], domiciliado en [dirección], a US. respetuosamente digo:

Que, por la presente y en conformidad a lo dispuesto en los artículos 1977 y 1950 N° 4 del Código Civil y en la Ley 18.101, vengo en demandar a [nombre del demandado], RUT [número], domiciliado en [dirección del inmueble arrendado], la **terminación del contrato de arrendamiento** celebrado entre las partes y la **restitución del inmueble** arrendado, ubicado en [dirección completa], comuna de [nombre], Rol de Avalúo [número], por las siguientes razones de hecho y de derecho:

**I. HECHOS**

1. Con fecha [día/mes/año], mi representado celebró con el demandado un contrato de arrendamiento del inmueble ubicado en [dirección], cuyo original acompaño en el primer otrosí.

2. El contrato se pactó por un plazo de [número] meses, desde el [fecha] hasta el [fecha] / mes a mes / duración indefinida, con una renta mensual de $[monto] / [número] UF, pagadera dentro de los primeros [número] días de cada mes.

3. El demandado ha incurrido en mora en el pago de las rentas correspondientes a los meses de [enumerar meses], adeudando a la fecha la suma total de $[monto] / [número] UF.

4. Con fecha [día/mes/año], mi representado efectuó la primera reconvención al demandado, requiriéndole el pago de las rentas adeudadas, mediante [carta certificada / notificación notarial / correo electrónico], cuya copia acompaño.

5. Con fecha [día/mes/año], transcurridos más de cuatro días desde la primera reconvención, mi representado efectuó la segunda reconvención, en los mismos términos, cuya copia acompaño.

6. A la fecha, han transcurrido más de [número] días desde la segunda reconvención, sin que el demandado haya efectuado el pago de las rentas adeudadas ni haya prestado seguridad competente para su pago.

**II. DERECHO**

El artículo 1977 del Código Civil dispone: "La mora de un período entero en el pago de la renta, dará derecho al arrendador, después de dos reconvenciones, entre las cuales medien a lo menos cuatro días, para hacer cesar inmediatamente el arriendo, si no se presta seguridad competente de que se verificará el pago dentro de un plazo razonable, que no bajará de treinta días."

El artículo 1950 N° 4 del Código Civil establece que el arrendamiento expira "por sentencia del juez en los casos que la ley ha previsto."

Habiéndose cumplido todos los requisitos legales, procede la terminación del contrato y la restitución del inmueble.

**III. MEDIOS DE PRUEBA**

1. **Prueba documental:** Contrato de arrendamiento, reconvenciones, comprobantes de pago de rentas anteriores, certificado de dominio, que acompaño en el primer otrosí.

2. **Prueba testimonial:** Declararán los siguientes testigos:
   - [Nombre completo], RUT [número], [profesión u oficio], domiciliado en [dirección completa].
   - [Nombre completo], RUT [número], [profesión u oficio], domiciliado en [dirección completa].
   - [Nombre completo], RUT [número], [profesión u oficio], domiciliado en [dirección completa].
   - [Nombre completo], RUT [número], [profesión u oficio], domiciliado en [dirección completa].

**IV. PETICIONES**

Por tanto, y en mérito de lo expuesto,

RUEGO A US.: Tener por interpuesta demanda de terminación de contrato de arrendamiento y restitución de inmueble en contra de [nombre del demandado]; acogerla a tramitación; citar a las partes a la audiencia de contestación, conciliación y prueba; y, en definitiva, acogerla en todas sus partes, declarando:

1. Terminado el contrato de arrendamiento celebrado entre las partes con fecha [día/mes/año].
2. Que el demandado debe restituir a mi representado el inmueble ubicado en [dirección], libre de ocupantes y en el estado en que lo recibió.
3. Que el demandado debe pagar a mi representado la suma de $[monto] / [número] UF, por concepto de rentas insolutas correspondientes a los meses de [enumerar], con los reajustes e intereses legales correspondientes.
4. Condenar al demandado al pago de las costas de la causa.

**PRIMER OTROSÍ:** Acompaño los siguientes documentos:
1. Contrato de arrendamiento de fecha [día/mes/año].
2. Primera reconvención de fecha [día/mes/año].
3. Segunda reconvención de fecha [día/mes/año].
4. Certificado de dominio vigente del inmueble.
5. Comprobantes de pago de rentas de los meses [enumerar].

**SEGUNDO OTROSÍ:** Patrocinio y poder. Designo abogado patrocinante a don [nombre], RUT [número], domiciliado para estos efectos en [dirección]. Confiero poder a [nombre], RUT [número], abogado, domiciliado en [dirección], en los términos del artículo 7 del Código de Procedimiento Civil / Acompaño mandato judicial otorgado por escritura pública de fecha [día/mes/año] ante el Notario [nombre].

---

##### Contestación de la demanda (oposición)

**Suma:**
"En lo principal: Contesta demanda. Primer otrosí: Opone excepciones. Segundo otrosí: Nómina de testigos."

**Estructura y contenido:**

**EN LO PRINCIPAL:**

S.J.L. en lo Civil de [ciudad]
Rol C-[número]-[año]

[Nombre del demandado], RUT [número], domiciliado en [dirección del inmueble arrendado], en autos sobre terminación de contrato de arrendamiento seguidos en mi contra por [nombre del demandante], a US. respetuosamente digo:

Que, dentro del plazo legal, vengo en **contestar la demanda** deducida en mi contra, solicitando su rechazo con costas, por las siguientes razones:

**I. HECHOS**

1. Es efectivo que celebré con el demandante un contrato de arrendamiento del inmueble ubicado en [dirección], con fecha [día/mes/año].

2. **Niego** que adeude las rentas de los meses [enumerar]. He pagado puntualmente todas las rentas / He pagado parcialmente las rentas, adeudando solo [monto] / He retenido las rentas por incumplimiento del arrendador de su obligación de mantener el inmueble en estado de servir para el fin arrendado.

3. El demandante no ha cumplido con su obligación de [describir incumplimiento: reparar filtraciones, mantener instalaciones eléctricas, etc.], lo que me ha impedido el goce normal del inmueble y justifica la retención de rentas en ejercicio de la excepción de contrato no cumplido (artículo 1552 del Código Civil).

4. Las reconvenciones invocadas por el demandante [no se efectuaron / no cumplen los requisitos legales / fueron efectuadas antes de vencer el período completo de renta].

**II. DERECHO**

El artículo 1924 N° 2 del Código Civil obliga al arrendador a mantener [la cosa arrendada] en el estado de servir para el fin a que ha sido arrendada. (no verificado en esta búsqueda)

El artículo 1552 del Código Civil establece la excepción de contrato no cumplido: En los contratos bilaterales ninguno de los contratantes está en mora dejando de cumplir lo pactado, mientras el otro no lo cumple por su parte, o no se allana a cumplirlo en la forma y tiempo debidos. (no verificado en esta búsqueda)

Habiéndose acreditado el incumplimiento del arrendador, no procede la terminación del contrato.

**III. PETICIONES**

Por tanto,

RUEGO A US.: Tener por contestada la demanda; rechazarla en todas sus partes, con costas; y, en subsidio, declarar que no procede la terminación del contrato mientras el demandante no cumpla con sus obligaciones.

**PRIMER OTROSÍ:** Opongo las siguientes excepciones:
1. **Excepción de contrato no cumplido** (artículo 1552 CC): El demandante no ha cumplido su obligación de mantener el inmueble en estado de servir.
2. **Excepción de pago** (respecto de las rentas que el demandante afirma impagas): He pagado las rentas [total o parcialmente].

**SEGUNDO OTROSÍ:** Nómina de testigos. Declararán:
1. [Nombre completo], RUT [número], [profesión u oficio], domiciliado en [dirección completa].
2. [Nombre completo], RUT [número], [profesión u oficio], domiciliado en [dirección completa].

---

##### Solicitud de lanzamiento

**Suma:**
"En lo principal: Solicita lanzamiento."

**Estructura y contenido:**

**EN LO PRINCIPAL:**

S.J.L. en lo Civil de [ciudad]
Rol C-[número]-[año]

[Nombre del demandante], en autos sobre terminación de contrato de arrendamiento, a US. respetuosamente digo:

Que, con fecha [día/mes/año], US. dictó sentencia definitiva que acogió la demanda, declarando terminado el contrato de arrendamiento y ordenando al demandado restituir el inmueble ubicado en [dirección].

Dicha sentencia se encuentra firme y ejecutoriada desde el [fecha] / se encuentra ejecutoriada por haberse concedido la apelación en el solo efecto devolutivo.

El demandado no ha dado cumplimiento voluntario a la sentencia, permaneciendo en el inmueble hasta la fecha.

Por tanto,

RUEGO A US.: Ordenar el **lanzamiento** del demandado [nombre], fijando día y hora para la diligencia, con auxilio de la fuerza pública si fuere necesario, a fin de hacer entrega material del inmueble a mi representado.

---

#### Tabla de plazos

| Etapa | Plazo | Cómputo | Norma | Consecuencia |
|-------|-------|---------|-------|--------------|
| Nómina de testigos del demandado | Hasta antes de las 12:00 hrs. del día anterior a la audiencia | Día hábil | Art. 8 N° 3, Ley 18.101 | No podrá rendir prueba testimonial |
| Audiencia | Quinto día hábil después de la última notificación | Días hábiles | Art. 8 N° 1, Ley 18.101 | Si no comparece demandante: abandono. Si no comparece demandado: rebeldía |
| Contestación de reconvención (si se reservó) | Audiencia dentro de 5 días siguientes | Días corridos (no verificado en esta búsqueda) | Art. 8 N° 5, Ley 18.101 | Preclusión de la oportunidad de contestar |
| Apelación de sentencia definitiva | 5 días | Días hábiles desde notificación | Art. 189 CPC | Sentencia queda firme |
| Casación en la forma | 10 días | Días hábiles desde notificación de sentencia de segunda instancia | Art. 770 CPC | Preclusión del recurso |
| Casación en el fondo | 15 días | Días hábiles desde notificación de sentencia de segunda instancia | Art. 767 CPC | Preclusión del recurso |

#### Recursos

| Recurso | Contra qué resolución | Plazo | Tribunal que lo conoce | Efectos |
|---------|----------------------|-------|------------------------|---------|
| **Apelación** | Sentencia definitiva de primera instancia; resoluciones que pongan término al juicio o hagan imposible su continuación | 5 días hábiles | Corte de Apelaciones respectiva | Solo efecto devolutivo: sentencia se cumple aunque esté apelada. Preferencia para vista y fallo. No procede orden de no innovar |
| **Casación en la forma** | Sentencia de segunda instancia (si hay vicios formales del art. 768 CPC) | 10 días hábiles | Corte Suprema | Suspensivo: no se cumple la sentencia mientras se resuelve |
| **Casación en el fondo** | Sentencia de segunda instancia (si hay infracción de ley sustantiva) | 15 días hábiles | Corte Suprema | Suspensivo |

**Advertencia:** Solo son apelables la sentencia definitiva y las resoluciones que pongan término al juicio o hagan imposible su continuación (artículo 8 N° 9, Ley 18.101). Las demás resoluciones (autos, decretos, sentencias interlocutorias) no son apelables en este procedimiento.

#### Errores frecuentes y estrategia

**Errores frecuentes:**

1. **No efectuar las dos reconvenciones previas o no respetar el plazo de 4 días entre ellas:** La demanda será rechazada por falta de un requisito de procedencia de la acción (artículo 1977 CC). Siempre documentar las reconvenciones con medios fehacientes.

2. **Demandar antes de vencido el período completo de renta:** El artículo 1977 CC exige "mora de un período entero". Si se demanda cuando solo han transcurrido 20 días del mes, la demanda es prematura.

3. **No presentar la nómina de testigos en la demanda (demandante) o antes de las 12:00 hrs. del día anterior a la audiencia (demandado):** Los testigos no podrán declarar, perdiendo el medio de prueba más importante en estos juicios.

4. **Individualizar mal a los testigos en la nómina:** Si falta el RUT, domicilio o profesión, el tribunal puede rechazar su declaración. Verificar datos antes de presentar la nómina.

5. **No comparecer a la audiencia:** Si no comparece el demandante, se entiende abandonada la demanda (preclusión). Si no comparece el demandado, se realiza en rebeldía, pero pierde la oportunidad de defenderse y rendir prueba.

6. **Confundir el procedimiento de terminación con el juicio ejecutivo de cobro de rentas:** Son procedimientos distintos. El juicio de terminación busca poner fin al contrato y recuperar el inmueble; el ejecutivo, solo cobrar rentas. Pueden acumularse las pretensiones en la demanda de terminación.

7. **No solicitar el lanzamiento después de la sentencia firme:** La sentencia no se ejecuta sola. Debe solicitarse expresamente el lanzamiento, fijando día y hora.

8. **Creer que la apelación suspende el cumplimiento de la sentencia:** La apelación se concede en el solo efecto devolutivo (artículo 8 N° 9, Ley 18.101), por lo que la sentencia se cumple de inmediato, aunque esté apelada. El arrendador puede solicitar el lanzamiento sin esperar el fallo de segunda instancia.

**Estrategia:**

**Para el arrendador:**

- **Documentar todo:** Contrato escrito, comprobantes de pago de rentas anteriores, reconvenciones fehacientes. La prueba documental es la más sólida.

- **Reconvenciones por ministro de fe:** Aunque la ley no exige una forma específica, es recomendable que las reconvenciones sean notificadas por notario o receptor judicial, para evitar discusiones sobre su fecha y contenido.

- **Testigos que acrediten la relación arrendaticia y la falta de pago:** Vecinos, administrador del edificio, personas que hayan visto al demandado en el inmueble. Los testigos deben declarar sobre hechos concretos, no opiniones.

- **Solicitar reajustes e intereses sobre las rentas insolutas:** Además de la terminación y restitución, pedir el pago de rentas con reajustes (IPC o UF, según el contrato) e intereses legales (artículo 1559 CC: interés corriente para operaciones no reajustables en moneda nacional).

- **Cumplimiento inmediato:** Aprovechar que la apelación no suspende el cumplimiento. Solicitar el lanzamiento apenas la sentencia de primera instancia quede ejecutoriada (aunque esté apelada).

**Para el arrendatario:**

- **Oponer la excepción de contrato no cumplido si el arrendador ha incumplido:** Si el inmueble tiene filtraciones, problemas eléctricos, falta de servicios básicos, etc., y el arrendador no los ha reparado pese a los reclamos, puede retenerse el pago de rentas (artículo 1552 CC). Documentar los reclamos y el estado del inmueble (fotos, correos, cartas).

- **Acreditar el pago:**Si se pagaron las rentas, acompañar comprobantes (transferencias bancarias, recibos firmados por el arrendador, depósitos). La carga de la prueba del pago corresponde al demandado (artículo 1698 CC).

- **Allanarse y negociar plazo para desocupar:** Si no hay defensa sólida, puede ser más conveniente allanarse a la demanda y negociar con el arrendador un plazo razonable para desocupar voluntariamente, evitando el lanzamiento forzoso y las costas.

- **Reconvenir por devolución de garantía o indemnización de perjuicios:** Si el arrendador retuvo indebidamente la garantía o causó perjuicios por incumplimiento de sus obligaciones, reconvenir en la misma audiencia para resolver todo en un solo juicio.

- **Presentar nómina de testigos a tiempo:** Hasta antes de las 12:00 hrs. del día anterior a la audiencia. Testigos que acrediten el pago, el incumplimiento del arrendador o el estado del inmueble.

**Para ambas partes:**

- **Asistir a la audiencia preparado:** Llevar todos los documentos originales, conocer los hechos, tener claros los argumentos. La audiencia es única y concentrada; no hay segunda oportunidad.

- **Intentar la conciliación de buena fe:** Muchas veces es más conveniente un acuerdo (plazo para pagar y evitar la terminación, o plazo para desocupar sin lanzamiento forzoso) que seguir litigando. El juez llamará obligatoriamente a conciliación; aprovechar esa instancia.

- **Asesorarse con abogado:** Aunque en juicios de renta bajo 4 UTM se puede comparecer personalmente, es recomendable contar con asesoría legal, especialmente si hay cuestiones complejas (excepción de contrato no cumplido, reconvención, valoración de pruebas).

#### Lista de verificación

**Antes de demandar:**
- [ ] Contrato de arrendamiento original o copia autorizada en poder
- [ ] Certificado de dominio vigente del inmueble (si soy propietario) o título que acredita mi calidad de arrendador
- [ ] Cálculo detallado de rentas adeudadas (períodos, montos, reajustes)
- [ ] Primera reconvención efectuada y documentada (carta certificada, notificación notarial, correo electrónico con acuse)
- [ ] Segunda reconvención efectuada al menos 4 días después de la primera y documentada
- [ ] Transcurridos al menos 30 días desde la segunda reconvención sin pago ni garantía
- [ ] Comprobantes de pago de rentas anteriores que acrediten la relación arrendaticia
- [ ] Nómina de hasta 4 testigos con individualización completa (nombre, RUT, profesión, domicilio)
- [ ] Verificado que el inmueble está dentro del radio urbano o es vivienda fuera del radio urbano con superficie no superior a 1 hectárea (ámbito de aplicación de la Ley 18.101)

**Al presentar la demanda:**
- [ ] Demanda con suma, exposición de hechos, fundamentos de derecho, medios de prueba y peticiones concretas
- [ ] Nómina de testigos incluida en la demanda
- [ ] Documentos acompañados en primer otrosí (contrato, reconvenciones, certificado de dominio, comprobantes de pago)
- [ ] Patrocinio de abogado y poder en segundo otrosí (salvo excepción de renta bajo 4 UTM)
- [ ] Verificado domicilio del demandado (se presume el del inmueble arrendado)
- [ ] Copias de la demanda y documentos para el demandado

**Antes de la audiencia (demandado):**
- [ ] Contestación preparada (escrita o mental): hechos que niego, excepciones que opongo, pruebas que rendiré
- [ ] Nómina de testigos presentada antes de las 12:00 hrs. del día anterior a la audiencia
- [ ] Documentos que acreditan el pago o el incumplimiento del arrendador (comprobantes, fotos, correos, cartas)
- [ ] Testigos avisados de día, hora y lugar de la audiencia
- [ ] Reconvención preparada (si corresponde)

**En la audiencia:**
- [ ] Asistencia puntual con todos los documentos originales
- [ ] Testigos presentes y con cédula de identidad
- [ ] Escuchar atentamente la relación de la demanda y la contestación
- [ ] Participar activamente en el llamado a conciliación
- [ ] Verificar que los hechos controvertidos fijados por el juez son correctos
- [ ] Rendir toda la prueba ofrecida (documentos, testigos)
- [ ] Solicitar que se deje constancia en acta de cualquier irregularidad

**Después de la sentencia de primera instancia:**
- [ ] Notificación de la sentencia verificada (estado diario)
- [ ] Plazo de apelación controlado (5 días hábiles desde notificación)
- [ ] Decisión de apelar o no, según fundamentos de la sentencia
- [ ] Si apelo: escrito de apelación presentado dentro de plazo, con fundamentos claros
- [ ] Si no apelo y gané: solicitud de lanzamiento presentada (arrendador)
- [ ] Si no apelo y perdí: desocupación voluntaria del inmueble para evitar lanzamiento forzoso (arrendatario)

**Para el lanzamiento:**
- [ ] Sentencia firme o ejecutoriada (aunque esté apelada en solo efecto devolutivo)
- [ ] Solicitud de lanzamiento presentada, con indicación de día y hora propuestos
- [ ] Receptor judicial designado y avisado
- [ ] Fuerza pública solicitada si se prevé resistencia
- [ ] Presencia del arrendador o su representante el día del lanzamiento
- [ ] Inventario de bienes del arrendatario que quedan en el inmueble (si corresponde)
- [ ] Acta de entrega del inmueble firmada por receptor y arrendador

**Para el cobro de rentas insolutas:**
- [ ] Sentencia firme que condena al pago
- [ ] Liquidación del crédito (capital, reajustes, intereses) actualizada
- [ ] Requerimiento de pago al demandado
- [ ] Si no paga: nómina de bienes a embargar
- [ ] Solicitud de embargo presentada
- [ ] Remate de bienes embargados y liquidación del producto

#### Qué verificar antes de actuar

**Datos marcados como no verificados en esta guía:**
- Plazo para que el tribunal dicte la resolución que cita a audiencia después de presentada la demanda: verificar en la práctica del tribunal respectivo.
- Plazo para que el receptor notifique antes de la audiencia: verificar en cada tribunal (práctica: hasta dos días antes).
- Plazo para dictar sentencia después de citadas las partes a oír sentencia: verificar en la práctica del tribunal (usualmente entre 10 y 30 días).
- Plazo para que la Corte de Apelaciones dicte sentencia de segunda instancia: verificar en la práctica de cada Corte (usualmente entre 2 y 6 meses).
- Plazo de la contestación de reconvención reservada para audiencia posterior: la norma dice "dentro de los 5 días siguientes"; verificar si son días hábiles o corridos en la práctica del tribunal.
- Plazo de reposición contra autos y decretos: verificar en el Código de Procedimiento Civil (artículo 181: 3 días; artículo 319: 5 días según la resolución).

**Autos acordados aplicables:**
- Verificar si el tribunal respectivo tiene autos acordados sobre tramitación electrónica, funcionamiento de audiencias, horarios de atención, forma de presentación de escritos.
- Verificar si hay instrucciones especiales sobre lanzamientos (coordinación con fuerza pública, horarios, requisitos).

**Vigencia de normas:**
- Ley 18.101: texto vigente desde 2022-06-30 (última modificación por Ley 21.394 de 2021, que reformó el Código de Procedimiento Civil). Verificar en LeyChile si hay modificaciones posteriores a septiembre de 2026.
- Código Civil, artículos sobre arrendamiento: texto vigente desde 2000-05-30. Verificar reformas recientes.
- Ley 20.886 sobre tramitación electrónica: verificar estado de implementación en el tribunal donde se presentará la demanda (no todos los tribunales tienen el sistema operativo).

**Criterios del tribunal:**
- Consultar con abogados litigantes locales sobre la práctica del tribunal en estos juicios: ¿exige ciertos requisitos formales en la demanda? ¿Cómo aprecia la prueba testimonial? ¿Acoge habitualmente la excepción de contrato no cumplido? ¿Fija montos de caución para restitución anticipada?
- Verificar si el tribunal tiene tabla especial para audiencias de arrendamiento o si las mezcla con otras materias.

**Valor de UF y UTM:**
- 4 UTM (límite para comparecer sin abogado): $286.884.
- Verificar valores actualizados en www.sii.cl o www.bcentral.cl al momento de presentar la demanda.

**Otros:**
- Si el arrendador es una persona jurídica, verificar vigencia de la sociedad y representación legal en el Registro de Comercio o Conservador de Bienes Raíces.
- Si el inmueble está hipotecado o embargado, verificar en el Conservador de Bienes Raíces si hay prohibiciones o gravámenes que puedan afectar el lanzamiento.
- Si el arrendatario es extranjero, verificar su situación migratoria (puede afectar la notificación y el cumplimiento de la sentencia).

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### g06-proteccion — procedimiento: Recurso de protección ante la Corte de Apelaciones

<details><summary>Material enviado al modelo (19 normas, 2 fallos o dictámenes, 3 artículos de doctrina; 2 normas descartadas por materia)</summary>

- Constitución Política de la República, Artículo 19
- Constitución Política de la República, Artículo 20
- Código de Procedimiento Civil, Artículo 1
- Código de Procedimiento Civil, Artículo 2
- Código de Procedimiento Civil, Artículo 3
- Código de Procedimiento Civil, Artículo 4
- Código de Procedimiento Civil, Artículo 5
- Código de Procedimiento Civil, Artículo 6
- Código de Procedimiento Civil, Artículo 7
- Código de Procedimiento Civil, Artículo 8
- Código de Procedimiento Civil, Artículo 9
- Código de Procedimiento Civil, Artículo 10
- Constitución Política de la República, Artículo 32
- Constitución Política de la República, Artículo 161
- Código de Procedimiento Civil, Artículo 189
- Ley 18.168, ley general de telecomunicaciones, Artículo 15
- Ley 18.168, ley general de telecomunicaciones, Artículo 39
- Ley 18.838, crea el consejo nacional de television, Artículo 27
- Ley 18.838, crea el consejo nacional de television, Artículo 34
- Jurisprudencia: Tribunal Constitucional, 1728
- Jurisprudencia: Tribunal Constitucional, 6357
- Doctrina: Machado Martins, Priscila, "El recurso de protección como recurso extraordinario: La sentencia de la corte suprema rol nº 21.027-2019 y el futuro de la acción constitucional de protección", Estudios constitucionales, vol. 18, N° 2, (2020), pp. 309-333, DOI: 10.4067/s0718-52002020000200309.
- Doctrina: Leturia I., Francisco J., "LAS ACCIONES CAUTELARES Y EL RECURSO DE PROTECCIÓN ¿ES NECESARIA UNA DUPLICIDAD DE INSTITUCIONES? NOTAS PARA UNA MEJOR GARANTÍA DE LOS DERECHOS FUNDAMENTALES", Estudios constitucionales, vol. 16, N° 1, (2018), pp. 227-244, DOI: 10.4067/s0718-52002018000100227.
- Doctrina: Zúñiga Urbina, Francisco, "CONTROL JUDICIAL DE LOS ACTOS POLÍTICOS: RECURSO DE PROTECCIÓN ANTE LAS "CUESTIONES POLÍTICAS"", Ius et Praxis, vol. 14, N° 2, (2008), DOI: 10.4067/s0718-00122008000200008.
- ~~Ley 18.168, ley general de telecomunicaciones, Artículo 36~~ (sin relación léxica (0 términos en común))
- ~~Ley 18.168, ley general de telecomunicaciones, Artículo 13~~ (sin relación léxica (0 términos en común))

Versión anterior (main):
- Constitución Política de la República, Artículo 20
- Código de Procedimiento Civil, Artículo 1
- Código de Procedimiento Civil, Artículo 3
- Código de Procedimiento Civil, Artículo 5
- Código de Procedimiento Civil, Artículo 6
- Código de Procedimiento Civil, Artículo 7
- Código de Procedimiento Civil, Artículo 8
- Código de Procedimiento Civil, Artículo 9
- Código de Procedimiento Civil, Artículo 10
- Constitución Política de la República, (artículo no identificado)
- Código de Procedimiento Civil, (artículo no identificado)
- Ley N° 19.496 sobre Protección de los Derechos de los Consumidores, Artículo 3 bis
- Ley N° 18.101 sobre Arrendamiento de Predios Urbanos, Artículo 3

</details>

#### Ficha del procedimiento

| Aspecto | Detalle |
|---------|---------|
| Tipo de procedimiento | Acción constitucional de carácter cautelar y sumario |
| Normas aplicables | Constitución Política de la República, artículo 20; Auto Acordado de la Corte Suprema sobre tramitación del recurso de protección (1992, modificado 2015 y 2022) |
| Tribunal competente | **Materia:** Corte de Apelaciones respectiva (conoce en primera instancia). **Cuantía:** Sin límite. **Territorio:** Corte de Apelaciones en cuyo territorio jurisdiccional se hubiere cometido el acto u omisión arbitrario o ilegal, o donde se produzcan sus efectos |
| Comparecencia | Ley 18.120: el recurrente puede comparecer personalmente o representado por abogado habilitado; no se exige patrocinio ni poder para interponer el recurso, pero sí para comparecer en segunda instancia ante la Corte Suprema si se apela |
| Tramitación electrónica | Ley 20.886: aplicable en tribunales con sistema tramitación electrónica habilitado. Oficina Judicial Virtual disponible para presentación electrónica donde esté operativa |

#### Antes de demandar

**Antecedentes necesarios:**
- Identificación precisa del acto u omisión arbitrario o ilegal que vulnera el derecho.
- Determinación del derecho constitucional afectado entre los enumerados en el artículo 20 de la Constitución: números 1º, 2º, 3º inciso quinto, 4º, 5º, 6º, 9º inciso final, 11º, 12º, 13º, 15º, 16º (libertad de trabajo, libre elección y contratación, inciso cuarto), 19º, 21º, 22º, 23º, 24º, 25º, y 8º (medio ambiente libre de contaminación, solo por acto u omisión ilegal imputable a autoridad o persona determinada).
- Identificación del recurrido: autoridad o particular responsable del acto u omisión.
- Fecha exacta del acto u omisión o de su conocimiento cierto.

**Documentos a reunir:**
- Documentos que acrediten el acto u omisión (resoluciones, oficios, contratos, comunicaciones, fotografías, grabaciones).
- Antecedentes que demuestren la titularidad del derecho afectado.
- Prueba de la arbitrariedad o ilegalidad (normas infringidas, jurisprudencia, informes técnicos).
- Certificados, pericias o informes que respalden la afectación del derecho.

**Gestiones previas:**
- **No se requiere agotar la vía administrativa** ni interponer reclamos previos; el recurso de protección es autónomo.
- Evaluar si existe otra vía judicial idónea y si el recurso de protección es la vía adecuada (no procede cuando existen procedimientos especiales igualmente eficaces).
- Verificar que no hayan transcurrido más de 30 días corridos desde el acto u omisión.
- Considerar solicitar orden de no innovar si hay riesgo de consumación irreparable del daño antes de la vista del recurso.

#### Tramitación paso a paso

##### Etapa 1: Interposición del recurso de protección
- **Qué se hace:** Presentar escrito del recurso ante la Corte de Apelaciones respectiva, exponiendo los hechos, el derecho vulnerado, la arbitrariedad o ilegalidad del acto u omisión, y solicitando las providencias necesarias para restablecer el imperio del derecho.
- **Quién:** El afectado personalmente o cualquiera a su nombre (no requiere mandato judicial para interponer).
- **Plazo y cómputo:** 30 días corridos desde la ejecución del acto, la ocurrencia de la omisión o su conocimiento cierto (no verificado en esta búsqueda).
- **Norma:** Constitución Política, artículo 20; Auto Acordado sobre tramitación del recurso de protección.
- **Si se omite:** Extemporaneidad; el recurso será declarado inadmisible.

##### Etapa 2: Examen de admisibilidad en cuenta
- **Qué se hace:** La Corte de Apelaciones, en cuenta (sin alegatos), examina si el recurso cumple los requisitos de admisibilidad: plazo, derechos protegidos, acto u omisión arbitrario o ilegal, legitimación.
- **Quién:** Sala de la Corte de Apelaciones designada.
- **Plazo y cómputo:** Inmediatamente después de ingresado el recurso; la Corte debe pronunciarse "de inmediato" (no verificado en esta búsqueda).
- **Norma:** Auto Acordado sobre tramitación del recurso de protección.
- **Si se omite:** No aplicable; es actuación de oficio del tribunal.

**Bifurcación:**
- **Si se declara inadmisible:** El recurso termina; procede apelación ante la Corte Suprema dentro de 5 días hábiles (no verificado en esta búsqueda).
- **Si se declara admisible:** Continúa la tramitación.

##### Etapa 3: Solicitud de informe al recurrido
- **Qué se hace:** La Corte, al declarar admisible el recurso, ordena que se informe por el recurrido (autoridad o particular) sobre los hechos y fundamentos del acto u omisión.
- **Quién:** Corte de Apelaciones.
- **Plazo y cómputo:** El recurrido debe evacuar el informe en el plazo que fije la Corte, generalmente entre 5 y 10 días hábiles (no verificado en esta búsqueda).
- **Norma:** Auto Acordado sobre tramitación del recurso de protección.
- **Si se omite:** El recurso se falla sin el informe; no hay rebeldía que perjudique al recurrido, pero la Corte carece de su versión.

##### Etapa 4: Solicitud de orden de no innovar (eventual)
- **Qué se hace:** El recurrente puede solicitar, al interponer el recurso o durante la tramitación, que se decrete orden de no innovar para suspender los efectos del acto impugnado mientras se resuelve el recurso.
- **Quién:** Recurrente.
- **Plazo y cómputo:** En cualquier momento antes de la vista, pero usualmente al interponer el recurso o inmediatamente después.
- **Norma:** Auto Acordado sobre tramitación del recurso de protección.
- **Si se omite:** No hay consecuencia procesal; es una facultad, no una carga. El acto impugnado puede consumarse o producir efectos irreparables.

**Bifurcación:**
- **Si se acoge la orden de no innovar:** Se suspenden los efectos del acto hasta la sentencia.
- **Si se rechaza:** El acto sigue produciendo efectos.

##### Etapa 5: Recepción del informe del recurrido
- **Qué se hace:** El recurrido evacua informe exponiendo su versión de los hechos, la legalidad del acto, la inexistencia de arbitrariedad y la improcedencia del recurso.
- **Quién:** Recurrido (autoridad o particular).
- **Plazo y cómputo:** Plazo fijado por la Corte (generalmente 5 a 10 días hábiles desde la notificación de la resolución que ordena informar) (no verificado en esta búsqueda).
- **Norma:** Auto Acordado sobre tramitación del recurso de protección.
- **Si se omite:** La Corte falla sin el informe; no hay sanción procesal para el recurrido.

##### Etapa 6: Agregación extraordinaria a la tabla y vista de la causa
- **Qué se hace:** La Corte agrega el recurso extraordinariamente a la tabla (preferencia) para su vista en sala. Las partes pueden presentar alegatos escritos complementarios antes de la vista.
- **Quién:** Corte de Apelaciones; las partes pueden comparecer a alegar.
- **Plazo y cómputo:** La vista debe realizarse en un plazo breve; el Auto Acordado establece preferencia para la agregación (no verificado en esta búsqueda).
- **Norma:** Auto Acordado sobre tramitación del recurso de protección; Código de Procedimiento Civil, artículos sobre vista de la causa (aplicables supletoriamente).
- **Si se omite:** No aplicable; es actuación de oficio del tribunal.

**Nota:** En la vista, la Corte puede decretar medidas para mejor resolver (oficiar, solicitar informes, recibir prueba testimonial o pericial).

##### Etapa 7: Sentencia de primera instancia
- **Qué se hace:** La Corte de Apelaciones dicta sentencia acogiendo o rechazando el recurso. Si lo acoge, adopta las providencias necesarias para restablecer el imperio del derecho y asegurar la protección del afectado (anular el acto, ordenar hacer o no hacer, indemnización en casos excepcionales).
- **Quién:** Sala de la Corte de Apelaciones (tres ministros).
- **Plazo y cómputo:** Debe dictarse "de inmediato" después de la vista; en la práctica, dentro de días o semanas (no verificado en esta búsqueda).
- **Norma:** Constitución Política, artículo 20; Auto Acordado sobre tramitación del recurso de protección.
- **Si se omite:** No aplicable; es deber del tribunal.

**Bifurcación:**
- **Si se acoge el recurso:** Se restablece el derecho; procede apelación del recurrido.
- **Si se rechaza el recurso:** Termina la protección del derecho; procede apelación del recurrente.

##### Etapa 8: Apelación ante la Corte Suprema
- **Qué se hace:** La parte agraviada por la sentencia de la Corte de Apelaciones interpone recurso de apelación ante la Corte Suprema.
- **Quién:** Recurrente o recurrido, según quien resulte agraviado.
- **Plazo y cómputo:** 5 días hábiles desde la notificación de la sentencia (Código de Procedimiento Civil, artículo 189, aplicable supletoriamente).
- **Norma:** Auto Acordado sobre tramitación del recurso de protección; Código de Procedimiento Civil, artículo 189.
- **Si se omite:** La sentencia de la Corte de Apelaciones queda firme y ejecutoriada.

**Bifurcación:**
- **Si se apela:** Continúa la tramitación en segunda instancia.
- **Si no se apela:** La sentencia queda firme; se pasa a la etapa de cumplimiento.

##### Etapa 9: Vista y fallo en segunda instancia (Corte Suprema)
- **Qué se hace:** La Corte Suprema conoce la apelación en sala especializada, con agregación preferente a la tabla. Las partes pueden comparecer a alegar (requiere patrocinio de abogado habilitado).
- **Quién:** Sala de la Corte Suprema (cinco ministros).
- **Plazo y cómputo:** La vista se realiza con preferencia; el fallo se dicta después de la vista, generalmente en semanas (no verificado en esta búsqueda).
- **Norma:** Auto Acordado sobre tramitación del recurso de protección; Código de Procedimiento Civil, normas sobre segunda instancia (aplicables supletoriamente).
- **Si se omite:** No aplicable; es actuación de oficio del tribunal.

##### Etapa 10: Sentencia de segunda instancia
- **Qué se hace:** La Corte Suprema confirma, revoca o modifica la sentencia de la Corte de Apelaciones. La sentencia es inapelable y causa ejecutoria.
- **Quién:** Sala de la Corte Suprema.
- **Plazo y cómputo:** Debe dictarse después de la vista; no hay plazo legal específico (no verificado en esta búsqueda).
- **Norma:** Auto Acordado sobre tramitación del recurso de protección.
- **Si se omite:** No aplicable; es deber del tribunal.

##### Etapa 11: Cumplimiento de la sentencia
- **Qué se hace:** La sentencia firme que acoge el recurso se cumple por el recurrido, bajo apercibimiento de las sanciones que la Corte determine (multas, arrestos, auxilio de la fuerza pública). Si la sentencia ordena hacer o no hacer, el recurrido debe ejecutar lo ordenado.
- **Quién:** Recurrido; la Corte de Apelaciones vela por el cumplimiento.
- **Plazo y cómputo:** Inmediatamente ejecutoriada la sentencia; la Corte puede fijar plazo para el cumplimiento.
- **Norma:** Auto Acordado sobre tramitación del recurso de protección; Código de Procedimiento Civil, normas sobre cumplimiento de sentencias (aplicables supletoriamente).
- **Si se omite:** El recurrente puede solicitar apremios (multas, arrestos) o el auxilio de la fuerza pública. El incumplimiento puede configurar desacato.

#### Escritos clave

##### Recurso de protección

**Suma:**
- En lo principal: Recurso de protección.
- Primer otrosí: Solicita orden de no innovar.
- Segundo otrosí: Acompaña documentos.
- Tercer otrosí: Patrocinio y poder.

**Estructura:**
1. **Encabezado:** Identificación del recurrente, domicilio, individualización del recurrido.
2. **Exposición de hechos:** Relato cronológico y preciso del acto u omisión arbitrario o ilegal.
3. **Derecho vulnerado:** Indicación del o los derechos del artículo 19 de la Constitución afectados, con cita del número específico.
4. **Arbitrariedad o ilegalidad:** Demostración de que el acto u omisión es arbitrario (caprichoso, injusto, sin fundamento razonable) o ilegal (contrario a la ley).
5. **Peticiones concretas:** Solicitud de que se adopten las providencias necesarias para restablecer el imperio del derecho (anular el acto, ordenar hacer o no hacer, indemnizar).
6. **Otrosíes:** Orden de no innovar, acompañamiento de documentos, patrocinio y poder.

**Contenido mínimo:**
- Identificación del recurrente y del recurrido.
- Relato de los hechos que configuran el acto u omisión.
- Derecho constitucional vulnerado (artículo 19, número específico).
- Calificación del acto como arbitrario o ilegal, con fundamentos.
- Peticiones concretas de restablecimiento del derecho.
- Firma del recurrente o su abogado.

**Modelo:**

```
CORTE DE APELACIONES DE [CIUDAD]

[Nombre completo del recurrente], [profesión u oficio], [estado civil], cédula nacional de identidad N° [número], domiciliado en [dirección completa], a US. respetuosamente digo:

En lo principal: Recurso de protección; primer otrosí: Solicita orden de no innovar; segundo otrosí: Acompaña documentos; tercer otrosí: Patrocinio y poder.

EN LO PRINCIPAL:

Vengo en interponer recurso de protección en contra de [nombre o individualización del recurrido], [cargo o calidad], domiciliado en [dirección], por acto arbitrario e ilegal que vulnera mi derecho constitucional a [indicar derecho del artículo 19], en los términos que paso a exponer:

I. HECHOS

Con fecha [día, mes, año], [descripción precisa del acto u omisión: "la autoridad recurrida dictó la resolución N° [número], notificada el [fecha], mediante la cual [contenido del acto]"].

Dicho acto [o "dicha omisión"] me afecta directamente, pues [explicar cómo afecta al recurrente: "me impide ejercer mi actividad comercial", "me priva del uso de mi propiedad", "amenaza mi integridad física"].

II. DERECHO VULNERADO

El acto [u omisión] descrito vulnera mi derecho constitucional consagrado en el artículo 19 N° [número] de la Constitución Política de la República, que asegura [transcribir o parafrasear el derecho: el derecho de propiedad en sus diversas especies (no verificado en esta búsqueda), "la libertad de trabajo y su protección", "el derecho a vivir en un medio ambiente libre de contaminación"].

III. ARBITRARIEDAD E ILEGALIDAD

El acto es **ilegal** porque contraviene [citar norma legal infringida: "el artículo [número] de la Ley N° [número], que establece [contenido de la norma]"]. [Explicar la contradicción entre el acto y la norma].

Asimismo, el acto es **arbitrario** porque [explicar la arbitrariedad: "carece de fundamento razonable", "se aparta de criterios objetivos", "constituye un ejercicio abusivo de la potestad"].

IV. PETICIONES

Por tanto, y en conformidad con lo dispuesto en el artículo 20 de la Constitución Política de la República,

RUEGO A US.: Acoger el presente recurso de protección y, en consecuencia, adoptar las providencias necesarias para restablecer el imperio del derecho, específicamente:

a) Dejar sin efecto [o "anular"] la resolución N° [número] de fecha [fecha].
b) Ordenar a la autoridad recurrida que [acción concreta: "se abstenga de ejecutar el acto", "restituya el uso de mi propiedad", "autorice la actividad impedida"].
c) Cualquiera otra medida que US. estime necesaria para asegurar la debida protección de mi derecho.

PRIMER OTROSÍ: Atendida la urgencia del caso y el riesgo de que el acto impugnado produzca efectos irreparables, solicito a US. decretar **orden de no innovar**, suspendiendo la ejecución de la resolución recurrida hasta que se resuelva el presente recurso.

SEGUNDO OTROSÍ: Acompaño los siguientes documentos:
1. [Descripción del documento 1].
2. [Descripción del documento 2].

TERCER OTROSÍ: Conforme a la Ley 18.120, designo abogado patrocinante a don [nombre completo del abogado], cédula nacional de identidad N° [número], domiciliado para estos efectos en [dirección], y confiero poder a [nombre del apoderado, si es distinto del patrocinante].

[Ciudad], [día] de [mes] de [año].

_________________________
[Firma del recurrente o del abogado]
[Nombre y RUT]
```

##### Informe del recurrido

**Suma:**
- En lo principal: Evacua informe.
- Primer otrosí: Acompaña documentos.
- Segundo otrosí: Patrocinio y poder (si corresponde).

**Estructura:**
1. **Encabezado:** Identificación del recurrido, rol del recurso.
2. **Exposición de hechos:** Versión del recurrido sobre los hechos, con precisiones y aclaraciones.
3. **Fundamentos de derecho:** Legalidad del acto, ausencia de arbitrariedad, improcedencia del recurso.
4. **Peticiones:** Solicitud de rechazo del recurso.
5. **Otrosíes:** Acompañamiento de documentos, patrocinio y poder.

**Contenido mínimo:**
- Relato de los hechos desde la perspectiva del recurrido.
- Fundamentos legales del acto u omisión.
- Demostración de que el acto no es arbitrario ni ilegal.
- Solicitud de rechazo del recurso.

**Modelo:**

```
CORTE DE APELACIONES DE [CIUDAD]
Recurso de protección Rol N° [número]-[año]

[Nombre o individualización del recurrido], [cargo o calidad], en autos sobre recurso de protección interpuesto por [nombre del recurrente], a US. respetuosamente digo:

En lo principal: Evacua informe; primer otrosí: Acompaña documentos.

EN LO PRINCIPAL:

Vengo en evacuar el informe ordenado por US. en resolución de fecha [fecha], en los siguientes términos:

I. HECHOS

Los hechos expuestos por el recurrente [admitir, negar o precisar: "son efectivos en cuanto a [aspecto], pero omiten que [aclaración]"].

Con fecha [fecha], esta autoridad dictó la resolución N° [número], en ejercicio de las facultades que le confiere [citar norma legal: "el artículo [número] de la Ley N° [número]"], y en cumplimiento de [finalidad del acto: "la fiscalización del cumplimiento de normas sanitarias", "la protección del medio ambiente"].

II. FUNDAMENTOS DE DERECHO

El acto impugnado es **legal** porque se ajusta estrictamente a [citar norma: "el artículo [número] de la Ley N° [número], que establece [contenido]"]. [Explicar la conformidad del acto con la norma].

Asimismo, el acto **no es arbitrario**, pues se funda en [explicar fundamentos: "antecedentes técnicos objetivos", "informes periciales", "criterios uniformes aplicados en casos análogos"].

El derecho invocado por el recurrente [no ha sido vulnerado / no está protegido por el artículo 20 de la Constitución / admite limitaciones legales que justifican el acto].

III. PETICIONES

Por tanto,

RUEGO A US.: Rechazar el recurso de protección interpuesto, por ser improcedente en derecho.

PRIMER OTROSÍ: Acompaño los siguientes documentos:
1. [Descripción del documento 1].
2. [Descripción del documento 2].

[Ciudad], [día] de [mes] de [año].

_________________________
[Firma del recurrido o su abogado]
[Nombre y RUT]
```

#### Tabla de plazos

| Etapa | Plazo | Cómputo | Norma | Consecuencia |
|-------|-------|---------|-------|--------------|
| Interposición del recurso | 30 días corridos (no verificado en esta búsqueda) | Desde la ejecución del acto, la ocurrencia de la omisión o su conocimiento cierto | Auto Acordado sobre recurso de protección | Inadmisibilidad por extemporaneidad |
| Examen de admisibilidad | Inmediato (no verificado en esta búsqueda) | Desde el ingreso del recurso | Auto Acordado sobre recurso de protección | No aplicable (actuación de oficio) |
| Informe del recurrido | 5 a 10 días hábiles (no verificado en esta búsqueda) | Desde la notificación de la resolución que ordena informar | Auto Acordado sobre recurso de protección | Se falla sin el informe |
| Apelación contra sentencia de primera instancia | 5 días hábiles | Desde la notificación de la sentencia | Código de Procedimiento Civil, artículo 189 | La sentencia queda firme |
| Apelación contra resolución de inadmisibilidad | 5 días hábiles (no verificado en esta búsqueda) | Desde la notificación de la resolución | Auto Acordado sobre recurso de protección | La resolución queda firme |

#### Recursos

**Contra la resolución que declara inadmisible el recurso:**
- **Recurso:** Apelación ante la Corte Suprema.
- **Plazo:** 5 días hábiles desde la notificación (no verificado en esta búsqueda).
- **Tribunal que conoce:** Corte Suprema, en sala especializada.
- **Efectos:** La apelación se concede en el solo efecto devolutivo (no verificado en esta búsqueda); la Corte Suprema puede revocar la inadmisibilidad y ordenar la tramitación del recurso.

**Contra la sentencia de primera instancia (Corte de Apelaciones):**
- **Recurso:** Apelación ante la Corte Suprema.
- **Plazo:** 5 días hábiles desde la notificación de la sentencia.
- **Tribunal que conoce:** Corte Suprema, en sala especializada.
- **Efectos:** La apelación se concede en ambos efectos (suspensivo y devolutivo) (no verificado en esta búsqueda); la sentencia de la Corte Suprema es inapelable.

**Contra la sentencia de segunda instancia (Corte Suprema):**
- **Recurso:** No procede recurso alguno; la sentencia es inapelable y causa ejecutoria.

**Otros recursos:**
- **Recurso de queja:** Procede excepcionalmente contra la sentencia de la Corte de Apelaciones o de la Corte Suprema, si hay falta o abuso grave. Plazo: 5 días hábiles desde la notificación (no verificado en esta búsqueda). Tribunal que conoce: Corte Suprema (en pleno o sala especializada, según el caso).

#### Errores frecuentes y estrategia

**Errores frecuentes:**

1. **Interponer el recurso fuera de plazo:** El plazo de 30 días corridos es fatal. Contar desde la ejecución del acto o su conocimiento cierto, no desde la notificación formal si ésta es posterior al conocimiento.

2. **Invocar derechos no protegidos por el artículo 20:** No todos los derechos del artículo 19 están protegidos por el recurso de protección. Verificar que el derecho invocado esté en la lista del artículo 20.

3. **No acreditar la arbitrariedad o ilegalidad:** No basta alegar que el acto es arbitrario o ilegal; hay que demostrarlo con hechos, normas y documentos. La arbitrariedad requiere mostrar que el acto carece de fundamento razonable o es caprichoso; la ilegalidad, que contraviene una norma legal específica.

4. **Confundir el recurso de protección con una acción de nulidad o una demanda ordinaria:** El recurso de protección es cautelar y sumario; no reemplaza las acciones ordinarias ni permite discutir cuestiones de fondo que requieren prueba extensa. Si existe otra vía judicial idónea, la Corte puede declarar improcedente el recurso.

5. **No solicitar orden de no innovar cuando es necesaria:** Si el acto puede producir efectos irreparables antes de la sentencia, solicitar orden de no innovar al interponer el recurso. Fundamentar la urgencia y el riesgo.

6. **Presentar el recurso ante tribunal incompetente:** Verificar la competencia territorial de la Corte de Apelaciones (lugar donde se ejecutó el acto o donde se producen sus efectos).

7. **No acompañar documentos esenciales:** Adjuntar desde el inicio todos los documentos que acrediten el acto, el derecho y la afectación. La Corte puede decretar medidas para mejor resolver, pero no suplir la carga probatoria de las partes.

8. **Redactar peticiones genéricas:** Las peticiones deben ser concretas y específicas: qué acto anular, qué orden dictar, qué hacer o no hacer. Evitar fórmulas vagas como "restablecer el imperio del derecho" sin precisar cómo.

**Estrategia:**

- **Evaluar la procedencia antes de interponer:** El recurso de protección no procede en todos los casos. Verificar que no exista otra vía judicial igualmente eficaz (por ejemplo, reclamo de ilegalidad, nulidad de derecho público, acción de amparo económico). Si existe, la Corte puede declarar improcedente el recurso.

- **Actuar con rapidez:** El plazo de 30 días corridos es breve. Reunir antecedentes y documentos de inmediato, y presentar el recurso lo antes posible.

- **Fundamentar sólidamente la arbitrariedad o ilegalidad:** Citar normas legales específicas infringidas, jurisprudencia, dictámenes, informes técnicos. La arbitrariedad debe demostrarse con hechos concretos que evidencien la falta de fundamento razonable.

- **Solicitar orden de no innovar cuando corresponda:** Si el acto puede consumarse o producir daños irreparables, solicitar la orden al interponer el recurso, fundamentando la urgencia y el peligro en la demora.

- **Preparar alegatos para la vista:** Aunque el recurso es sumario, la vista de la causa es la oportunidad clave para convencer a la Corte. Preparar alegatos orales claros, breves y contundentes, apoyados en los documentos.

- **Considerar la apelación:** Si la sentencia de primera instancia es desfavorable, evaluar la procedencia de apelar ante la Corte Suprema. La apelación debe ser fundada y presentarse dentro de 5 días hábiles.

- **Cumplir la sentencia de inmediato:** Si se acoge el recurso, el recurrido debe cumplir la sentencia sin dilación. Si se rechaza, el recurrente debe evaluar otras vías judiciales (acción ordinaria, nulidad, etc.).

#### Lista de verificación

**Antes de interponer el recurso:**
- [ ] Verificar que no hayan transcurrido más de 30 días corridos desde el acto u omisión o su conocimiento cierto.
- [ ] Confirmar que el derecho invocado está protegido por el artículo 20 de la Constitución.
- [ ] Identificar con precisión el acto u omisión arbitrario o ilegal y al recurrido.
- [ ] Reunir todos los documentos que acrediten el acto, el derecho y la afectación.
- [ ] Redactar el recurso con exposición clara de hechos, derecho vulnerado, arbitrariedad o ilegalidad, y peticiones concretas.
- [ ] Evaluar si procede solicitar orden de no innovar.
- [ ] Verificar la competencia territorial de la Corte de Apelaciones.
- [ ] Designar abogado patrocinante y conferir poder, si corresponde.

**Al presentar el recurso:**
- [ ] Presentar el escrito ante la Corte de Apelaciones respectiva, en formato físico o electrónico según corresponda.
- [ ] Acompañar todos los documentos en el segundo otrosí.
- [ ] Solicitar orden de no innovar en el primer otrosí, si corresponde.
- [ ] Consignar patrocinio y poder en el tercer otrosí.
- [ ] Obtener comprobante de presentación (cargo o comprobante electrónico).

**Durante la tramitación:**
- [ ] Verificar que la Corte declare admisible el recurso; si lo declara inadmisible, apelar dentro de 5 días hábiles.
- [ ] Estar atento a la notificación de la resolución que ordena informar al recurrido.
- [ ] Revisar el informe del recurrido y preparar observaciones o alegatos complementarios.
- [ ] Verificar la fecha de la vista de la causa en la tabla de la Corte.
- [ ] Preparar alegatos orales para la vista, si se va a comparecer.
- [ ] Estar atento a la notificación de la sentencia de primera instancia.

**Después de la sentencia de primera instancia:**
- [ ] Si la sentencia es desfavorable, evaluar la procedencia de apelar ante la Corte Suprema dentro de 5 días hábiles.
- [ ] Si se apela, fundamentar el recurso y presentarlo en plazo.
- [ ] Si la sentencia es favorable y no se apela, verificar que quede ejecutoriada.
- [ ] Solicitar el cumplimiento de la sentencia ejecutoriada.

**En segunda instancia (si se apela):**
- [ ] Verificar la fecha de la vista en la Corte Suprema.
- [ ] Preparar alegatos orales para la vista.
- [ ] Estar atento a la notificación de la sentencia de segunda instancia.
- [ ] Verificar que la sentencia quede ejecutoriada.

**Cumplimiento de la sentencia:**
- [ ] Solicitar a la Corte de Apelaciones que requiera el cumplimiento de la sentencia al recurrido.
- [ ] Si el recurrido no cumple, solicitar apremios (multas, arrestos) o auxilio de la fuerza pública.
- [ ] Verificar que el derecho quede efectivamente restablecido.

#### Qué verificar antes de actuar

- Verificar en el Auto Acordado de la Corte Suprema sobre tramitación del recurso de protección vigente (versión actualizada a 2022 o posterior).

- Verificar en el Auto Acordado vigente.

- Verificar en el Auto Acordado vigente.

- Verificar en el Auto Acordado vigente.

- **Autos Acordados aplicables:** Verificar la vigencia del Auto Acordado de la Corte Suprema sobre tramitación del recurso de protección (1992, modificado en 2015 y 2022). Consultar en el sitio web del Poder Judicial (www.pjud.cl) o en la Biblioteca del Congreso Nacional (www.bcn.cl).

- **Criterios jurisprudenciales de la Corte de Apelaciones respectiva:** Revisar fallos recientes de la Corte de Apelaciones en que se presentará el recurso, para conocer sus criterios sobre admisibilidad, arbitrariedad, ilegalidad y procedencia del recurso en casos análogos.

- **Vigencia de normas citadas:** Verificar en LeyChile (www.bcn.cl/leychile) que las normas citadas en el recurso estén vigentes y no hayan sido modificadas o derogadas.

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### g07-posesion-efectiva — procedimiento: Posesión efectiva de una herencia intestada

<details><summary>Material enviado al modelo (11 normas, 0 fallos o dictámenes, 0 artículos de doctrina; 0 normas descartadas por materia)</summary>

- Ley 19.903, sobre procedimiento para el otorgamiento de la posesion efectiva de la herencia y adecuaciones de la normativa procesal, civil y tributaria sobre la materia, Artículo 1
- Ley 19.903, sobre procedimiento para el otorgamiento de la posesion efectiva de la herencia y adecuaciones de la normativa procesal, civil y tributaria sobre la materia, Artículo 2
- Código Civil, Artículo 688
- Código Civil, Artículo 980
- Código Civil, Artículo 983
- Código Civil, Artículo 988
- Código Civil, Artículo 989
- Código Civil, Artículo 990
- Código Civil, Artículo 1263
- Código Civil, Artículo 1264
- Código Civil, Artículo 1265

Versión anterior (main):
- Código Civil, Artículo 951
- Código Civil, Artículo 952
- Código Civil, Artículo 953
- Código Civil, Artículo 954
- Código Civil, Artículo 955
- Código Civil, Artículo 956
- Código Civil, Artículo 1264
- Código Civil, Artículo 1265
- Código Civil, Artículo 1266
- Código de Procedimiento Civil, Artículo 802
- Código Civil, (artículo no identificado)
- Código de Procedimiento Civil, (artículo no identificado)

</details>

#### Ficha del procedimiento

| Aspecto | Detalle |
|---------|---------|
| **Tipo de procedimiento** | Posesión efectiva de herencia intestada (administrativa) |
| **Normas aplicables** | Ley 19.903 (artículos 1 y 2); Código Civil (artículos 688, 980, 983, 988-990, 1264-1265); Reglamento del Servicio de Registro Civil e Identificación |
| **Tribunal u organismo competente** | Servicio de Registro Civil e Identificación. Competencia del Director Regional correspondiente a la oficina donde se inicia el trámite. Puede presentarse en cualquier oficina del Servicio en Chile |
| **Comparecencia** | No requiere patrocinio de abogado ni mandato judicial. El solicitante puede actuar personalmente o mediante mandatario con poder simple |
| **Prescripción o caducidad** | No hay plazo de caducidad para solicitar la posesión efectiva. La acción de petición de herencia prescribe en 10 años (no verificado en esta búsqueda) |
| **Tramitación electrónica** | El Servicio de Registro Civil e Identificación cuenta con plataforma en línea para iniciar el trámite. La resolución se inscribe en el Registro Nacional de Posesiones Efectivas |

#### Antes de solicitar

**Antecedentes y documentos necesarios:**

- Certificado de defunción del causante
- Certificado de nacimiento de todos los herederos
- Certificado de matrimonio del causante (si estaba casado)
- Certificado de defunción de herederos que hayan fallecido antes que el causante
- Cédula de identidad vigente del solicitante
- Inventario simple de bienes (no requiere avalúo formal en esta etapa)
- Certificado de última voluntad del Registro Civil que acredite que el causante no otorgó testamento

**Verificaciones previas:**

- Confirmar que la sucesión es intestada: solicitar al Registro Civil el certificado de última voluntad. Si aparece testamento inscrito, la posesión efectiva debe tramitarse ante tribunal
- Identificar a todos los herederos según las reglas de sucesión intestada del Código Civil (artículos 983, 988-990)
- Verificar que la sucesión se abrió en Chile (lugar del último domicilio del causante)
- Si hay bienes raíces, obtener certificados de dominio vigente del Conservador de Bienes Raíces

**Gestiones previas:**

No se requieren gestiones preparatorias. Si existe conflicto entre posibles herederos sobre quiénes tienen derecho a la herencia, debe resolverse judicialmente mediante acción de petición de herencia (artículo 1264 del Código Civil) antes o después de obtenida la posesión efectiva.

#### Tramitación paso a paso

##### Etapa 1: Presentación de la solicitud

- **Qué se hace:** Cualquier persona que invoque la calidad de heredero presenta solicitud escrita ante cualquier oficina del Servicio de Registro Civil e Identificación, acompañando los documentos de respaldo
- **Quién:** Cualquier heredero, personalmente o mediante mandatario
- **Plazo y cómputo:** No hay plazo. Puede solicitarse en cualquier momento después del fallecimiento
- **Norma:** Artículo 2 de la Ley 19.903
- **Si se omite:** No se inicia el procedimiento. Los herederos no pueden inscribir bienes raíces ni disponer de ellos

**Contenido de la solicitud:**

- Individualización del causante (nombre completo, RUT, fecha y lugar de fallecimiento, último domicilio)
- Individualización del solicitante y su calidad de heredero
- Nómina completa de todos los herederos con sus datos de identificación
- Declaración de que la sucesión es intestada
- Inventario simple de bienes del causante
- Petición de que se otorgue la posesión efectiva

##### Etapa 2: Pago de derechos

- **Qué se hace:** El solicitante paga el arancel correspondiente en la misma oficina del Registro Civil
- **Quién:** El solicitante
- **Plazo y cómputo:** Al momento de presentar la solicitud
- **Norma:** Ley 19.903 y arancel del Servicio de Registro Civil
- **Si se omite:** No se da curso a la solicitud

##### Etapa 3: Revisión administrativa

- **Qué se hace:** El Servicio de Registro Civil verifica que la solicitud cumpla los requisitos, que la sucesión sea intestada y que corresponda a su competencia. Si detecta que hay testamento o que la sucesión se abrió en el extranjero, devuelve la solicitud para que se tramite ante tribunal
- **Quién:** Funcionarios del Servicio de Registro Civil
- **Plazo y cómputo:** No hay plazo legal establecido. En la práctica, entre 5 y 15 días hábiles (no verificado en esta búsqueda)
- **Norma:** Artículo 1 inciso 2 de la Ley 19.903
- **Si se omite:** El trámite no avanza

**Si el Servicio devuelve la solicitud:**

El solicitante debe presentarla ante el juzgado de letras del último domicilio del causante, siguiendo el procedimiento judicial de posesión efectiva testada o de herencia abierta en el extranjero.

##### Etapa 4: Resolución que otorga la posesión efectiva

- **Qué se hace:** El Director Regional del Servicio de Registro Civil correspondiente a la oficina donde se inició el trámite dicta resolución fundada otorgando la posesión efectiva, individualizando al causante y a los herederos
- **Quién:** Director Regional del Servicio de Registro Civil
- **Plazo y cómputo:** No hay plazo legal. En la práctica, dentro de los 30 días hábiles desde la presentación completa (no verificado en esta búsqueda)
- **Norma:** Artículo 2 inciso 1 de la Ley 19.903
- **Si se omite:** Los herederos no pueden inscribir ni disponer de bienes raíces

**Contenido de la resolución:**

- Identificación del causante
- Fecha y lugar de fallecimiento
- Declaración de que la sucesión es intestada
- Nómina de herederos con indicación de su parentesco y cuota hereditaria
- Otorgamiento de la posesión efectiva

##### Etapa 5: Inscripción en el Registro Nacional de Posesiones Efectivas

- **Qué se hace:** El Servicio de Registro Civil inscribe de oficio la resolución en el Registro Nacional de Posesiones Efectivas
- **Quién:** Servicio de Registro Civil (de oficio)
- **Plazo y cómputo:** Inmediatamente después de dictada la resolución
- **Norma:** Artículo 688 N° 1 del Código Civil
- **Si se omite:** Los herederos no pueden inscribir bienes raíces en el Conservador

##### Etapa 6: Obtención de copia autorizada

- **Qué se hace:** El solicitante retira o solicita copia autorizada de la resolución inscrita
- **Quién:** Cualquier heredero
- **Plazo y cómputo:** En cualquier momento después de la inscripción
- **Norma:** Ley 19.903
- **Si se omite:** No se pueden realizar las inscripciones en el Conservador de Bienes Raíces

##### Etapa 7: Inscripción en el Conservador de Bienes Raíces (si hay inmuebles)

- **Qué se hace:** Los herederos inscriben la resolución de posesión efectiva en el Registro de Propiedad del Conservador de Bienes Raíces de la comuna donde están ubicados los inmuebles. Esta es la inscripción especial del artículo 688 N° 1 del Código Civil
- **Quién:** Cualquier heredero, generalmente mediante receptor judicial o notario
- **Plazo y cómputo:** No hay plazo legal, pero debe hacerse antes de disponer de los bienes
- **Norma:** Artículo 688 N° 1 del Código Civil
- **Si se omite:** Los herederos no pueden disponer de los inmuebles hereditarios

##### Etapa 8: Inscripción especial de herencia

- **Qué se hace:** Se practica inscripción especial de herencia a nombre de todos los herederos en el Conservador de Bienes Raíces de cada comuna donde haya inmuebles. Esta inscripción individualiza cada inmueble y lo inscribe a nombre de todos los herederos en comunidad
- **Quién:** Los herederos
- **Plazo y cómputo:** Después de la inscripción de la resolución de posesión efectiva. No hay plazo fatal
- **Norma:** Artículo 688 N° 2 del Código Civil
- **Si se omite:** Los herederos no pueden disponer de consuno de los inmuebles hereditarios

**Con esta inscripción:**

Los herederos pueden disponer de consuno (todos juntos) de los inmuebles hereditarios, pero ninguno puede disponer individualmente de su cuota.

##### Etapa 9: Partición de bienes (opcional)

- **Qué se hace:** Los herederos proceden a la partición de los bienes hereditarios, ya sea de común acuerdo o mediante juicio de partición
- **Quién:** Todos los herederos o el juez partidor
- **Plazo y cómputo:** No hay plazo. Puede hacerse en cualquier momento
- **Norma:** Código Civil, Libro III, Título X
- **Si se omite:** Los bienes permanecen en comunidad

##### Etapa 10: Inscripción de adjudicación (si hubo partición de inmuebles)

- **Qué se hace:** Se inscribe en el Conservador de Bienes Raíces el acta de partición o la sentencia que aprueba la partición, adjudicando cada inmueble al heredero que lo recibió
- **Quién:** El heredero adjudicatario
- **Plazo y cómputo:** Después de aprobada la partición. No hay plazo fatal
- **Norma:** Artículo 688 N° 3 del Código Civil
- **Si se omite:** El heredero no puede disponer por sí solo del inmueble que le fue adjudicado

**Con esta inscripción:**

Cada heredero puede disponer libremente del inmueble que le fue adjudicado en la partición.

#### Escritos clave

##### Solicitud de posesión efectiva

**Suma:**

En lo principal: Solicita posesión efectiva de herencia intestada; en el primer otrosí: Acompaña documentos; en el segundo otrosí: Patrocina y confiere poder.

**Estructura:**

1. Individualización del solicitante y su calidad de heredero
2. Individualización del causante
3. Declaración de que la sucesión es intestada
4. Nómina de herederos
5. Inventario de bienes
6. Petición

**Modelo:**

```
SERVICIO DE REGISTRO CIVIL E IDENTIFICACIÓN
OFICINA [ciudad]

[Nombre completo], RUT [número], [estado civil], [profesión u oficio], domiciliado en [dirección completa], en mi calidad de [hijo/cónyuge/hermano] del causante [nombre del causante], a US. respetuosamente digo:

Que con fecha [día] de [mes] de [año] falleció en [ciudad], don/doña [nombre completo del causante], RUT [número], de [edad] años, [estado civil], [profesión u oficio], quien tuvo su último domicilio en [dirección].

Que el causante falleció sin otorgar testamento, según consta del certificado de última voluntad que acompaño, por lo que su sucesión se rige por las reglas de la sucesión intestada.

Que son herederos del causante las siguientes personas:

1. [Nombre completo], RUT [número], [parentesco], domiciliado en [dirección]
2. [Nombre completo], RUT [número], [parentesco], domiciliado en [dirección]
3. [Nombre completo], RUT [número], [parentesco], domiciliado en [dirección]

Que el causante dejó los siguientes bienes:

BIENES RAÍCES:
- [Descripción del inmueble], inscrito a fojas [número], N° [número], del Registro de Propiedad del Conservador de Bienes Raíces de [comuna], año [año]

BIENES MUEBLES:
- [Descripción]

DERECHOS Y ACCIONES:
- [Descripción]

POR TANTO,
RUEGO A US.: Tenga a bien otorgar la posesión efectiva de la herencia intestada de don/doña [nombre del causante] a los herederos individualizados.

PRIMER OTROSÍ: Ruego a US. tener por acompañados los siguientes documentos:
1. Certificado de defunción del causante
2. Certificado de última voluntad
3. Certificados de nacimiento de los herederos
4. [Otros certificados según corresponda]

SEGUNDO OTROSÍ: [Si actúa mediante mandatario] Ruego a US. tener por conferido poder a don/doña [nombre del mandatario], RUT [número], abogado, domiciliado en [dirección], para que me represente en este trámite.

[Firma]
[Nombre]
[RUT]
```

##### Solicitud de copia autorizada de la resolución

**Modelo breve:**

```
SERVICIO DE REGISTRO CIVIL E IDENTIFICACIÓN
OFICINA [ciudad]

[Nombre], RUT [número], heredero en la posesión efectiva de la herencia intestada de [nombre del causante], inscrita bajo el N° [número] del Registro Nacional de Posesiones Efectivas, a US. respetuosamente solicito:

Se sirva extender [número] copia(s) autorizada(s) de la resolución que otorgó la posesión efectiva, para los efectos de practicar las inscripciones en el Conservador de Bienes Raíces de [comuna].

[Firma]
[Nombre]
[RUT]
```

#### Tabla de plazos

| Etapa | Plazo | Cómputo | Norma | Consecuencia |
|-------|-------|---------|-------|--------------|
| Presentación de solicitud | Sin plazo | Desde el fallecimiento | Ley 19.903, art. 2 | No hay preclusión; puede solicitarse en cualquier momento |
| Revisión administrativa | 5-15 días hábiles (no verificado en esta búsqueda) | Desde presentación completa | Práctica administrativa | Demora en obtener la resolución |
| Dictación de resolución | 30 días hábiles aprox. (no verificado en esta búsqueda) | Desde presentación completa | Práctica administrativa | Demora en obtener la posesión efectiva |
| Inscripción en Registro Nacional | Inmediata | Desde dictación de resolución | Art. 688 N° 1 CC | Automática, de oficio |
| Inscripción en Conservador | Sin plazo fatal | Después de inscripción en Registro Nacional | Art. 688 CC | No se puede disponer de inmuebles hasta inscribir |
| Partición | Sin plazo | Cuando los herederos acuerden | Código Civil | Los bienes permanecen en comunidad |

#### Recursos

**Contra la resolución que otorga o deniega la posesión efectiva:**

No proceden recursos administrativos ni judiciales en el procedimiento administrativo de posesión efectiva. La Ley 19.903 no contempla recursos contra la resolución del Director Regional.

**Vías alternativas si hay conflicto:**

- Si un heredero es excluido indebidamente o se incluye a quien no tiene derecho: acción de petición de herencia ante el juzgado de letras civil del último domicilio del causante (artículo 1264 del Código Civil), prescripción de 10 años (no verificado en esta búsqueda)
- Si hay desacuerdo sobre la calidad de heredero: juicio ordinario de petición de herencia
- Si aparece testamento después de otorgada la posesión efectiva administrativa: debe solicitarse nueva posesión efectiva testamentaria ante tribunal

#### Errores frecuentes y estrategia

**Errores que más cuestan:**

1. **No verificar el certificado de última voluntad:** Solicitar posesión efectiva administrativa cuando existe testamento. El Servicio devolverá la solicitud y se perderá tiempo y dinero. Siempre solicitar el certificado antes de iniciar el trámite.

2. **Omitir herederos:** No incluir a todos los herederos legales en la solicitud. Esto puede generar nulidad de la posesión efectiva y conflictos posteriores. Verificar cuidadosamente el orden de sucesión intestada (artículos 988-990 del Código Civil).

3. **No inscribir en el Conservador:** Obtener la posesión efectiva pero no practicar las inscripciones del artículo 688 del Código Civil. Sin estas inscripciones, los herederos no pueden disponer de los inmuebles, aunque tengan la resolución de posesión efectiva.

4. **Confundir el orden de las inscripciones:** Intentar inscribir directamente los inmuebles a nombre de cada heredero sin pasar por la inscripción especial de herencia. El artículo 688 exige tres inscripciones sucesivas: (1) la resolución de posesión efectiva, (2) la inscripción especial de herencia, (3) la inscripción de adjudicación.

5. **No actualizar certificados de dominio:** Presentar certificados de dominio antiguos que no reflejan la situación actual del inmueble. Solicitar certificados vigentes (de los últimos 30 días) al Conservador.

6. **Declarar inventario incompleto:** Omitir bienes en el inventario inicial. Aunque el inventario en esta etapa es simple, debe ser completo para efectos tributarios y de partición posterior.

**Decisiones estratégicas:**

- **Quién solicita:** Aunque cualquier heredero puede solicitar, conviene que lo haga quien tenga mejor acceso a la documentación o quien vaya a encargarse de la partición.

- **Oficina donde presentar:** Si hay varios herederos en distintas ciudades, elegir la oficina más conveniente para realizar trámites posteriores. Si se presentan solicitudes en oficinas de distintas regiones, se acumularán a la más antigua.

- **Partición inmediata o diferida:** Evaluar si conviene partir de inmediato o mantener la comunidad. Factores: relación entre herederos, naturaleza de los bienes, costos de partición, situación tributaria.

- **Acuerdo previo entre herederos:** Antes de solicitar la posesión efectiva, lograr acuerdo sobre la nómina de herederos y la distribución de bienes. Esto evita conflictos posteriores que pueden requerir juicio de petición de herencia.

- **Bienes en distintas comunas:** Si hay inmuebles en varias comunas, coordinar las inscripciones en todos los Conservadores correspondientes. Solicitar copias autorizadas suficientes.

#### Lista de verificación

**Antes de presentar la solicitud:**

- [ ] Obtener certificado de defunción del causante
- [ ] Solicitar certificado de última voluntad y verificar que no hay testamento
- [ ] Identificar a todos los herederos según las reglas de sucesión intestada
- [ ] Obtener certificados de nacimiento de todos los herederos
- [ ] Obtener certificado de matrimonio del causante (si corresponde)
- [ ] Obtener certificados de defunción de herederos premuertos (si corresponde)
- [ ] Verificar que la sucesión se abrió en Chile (último domicilio del causante)
- [ ] Elaborar inventario completo de bienes
- [ ] Obtener certificados de dominio vigente de inmuebles
- [ ] Preparar solicitud con todos los datos completos
- [ ] Verificar que se presenta en oficina del Registro Civil

**Durante el trámite:**

- [ ] Pagar arancel al presentar la solicitud
- [ ] Verificar que la solicitud fue recibida y tiene número de ingreso
- [ ] Hacer seguimiento del estado del trámite
- [ ] Verificar que la resolución fue dictada
- [ ] Verificar que la resolución fue inscrita en el Registro Nacional de Posesiones Efectivas
- [ ] Solicitar copias autorizadas suficientes de la resolución

**Después de obtenida la posesión efectiva:**

- [ ] Inscribir la resolución en el Conservador de Bienes Raíces (art. 688 N° 1)
- [ ] Practicar inscripción especial de herencia de cada inmueble (art. 688 N° 2)
- [ ] Verificar que las inscripciones quedaron correctas
- [ ] Acordar partición entre herederos o iniciar juicio de partición
- [ ] Inscribir acta o sentencia de partición (art. 688 N° 3)
- [ ] Cumplir obligaciones tributarias (impuesto a la herencia, si corresponde)
- [ ] Liquidar deudas hereditarias antes de distribuir bienes

#### Qué verificar antes de actuar

- **Vigencia de normas:** La Ley 19.903 está vigente desde 2003. Verificar en LeyChile si ha habido modificaciones recientes al procedimiento administrativo de posesión efectiva.

- **Arancel del Registro Civil:** El monto del arancel varía. Consultar en la oficina del Registro Civil o en su sitio web el valor actualizado.

- **Plataforma en línea:** Verificar si la oficina del Registro Civil donde se presentará la solicitud cuenta con sistema de tramitación en línea y sus requisitos específicos.

- **Cuotas hereditarias:** Las cuotas de los herederos según los artículos 988-990 del Código Civil fueron modificadas por la Ley 19.585 de 1998 y la Ley 20.830 de 2015 (no verificado en esta búsqueda). Verificar la versión vigente para calcular correctamente las porciones.

- **Impuesto a la herencia:** Verificar en el Servicio de Impuestos Internos si la herencia está afecta a impuesto y los plazos para declarar y pagar.

- **Registro Nacional de Posesiones Efectivas:** Verificar que la inscripción en este registro se realizó correctamente antes de proceder a las inscripciones en el Conservador.

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### g08-jpl-consumidor — procedimiento: Demanda ante el Juzgado de Policía Local por infracción a la Ley del Consumidor

<details><summary>Material enviado al modelo (17 normas, 0 fallos o dictámenes, 2 artículos de doctrina; 2 normas descartadas por materia)</summary>

- Ley 19.496, establece normas sobre proteccion de los derechos de los consumidores, Artículo 3
- Ley 19.496, establece normas sobre proteccion de los derechos de los consumidores, Artículo 26
- Ley 19.496, establece normas sobre proteccion de los derechos de los consumidores, Artículo 50
- Ley 19.496, establece normas sobre proteccion de los derechos de los consumidores, Artículo 1
- Ley 19.496, establece normas sobre proteccion de los derechos de los consumidores, Artículo 17
- Ley 19.496, establece normas sobre proteccion de los derechos de los consumidores, Artículo 24
- Ley 19.496, establece normas sobre proteccion de los derechos de los consumidores, Artículo 27
- Ley 19.496, establece normas sobre proteccion de los derechos de los consumidores, Artículo 28
- Ley 19.496, establece normas sobre proteccion de los derechos de los consumidores, Artículo 51
- Ley 19.496, establece normas sobre proteccion de los derechos de los consumidores, Artículo 52
- Ley 19.496, establece normas sobre proteccion de los derechos de los consumidores, Artículo 58
- DFL 3, fija texto refundido, coordinado y sistematizado de la ley n° 19.496, que establece normas sobre protección de los derechos de los consumidores, Artículo 50
- DFL 3, fija texto refundido, coordinado y sistematizado de la ley n° 19.496, que establece normas sobre protección de los derechos de los consumidores, Artículo 51
- DFL 3, fija texto refundido, coordinado y sistematizado de la ley n° 19.496, que establece normas sobre protección de los derechos de los consumidores, Artículo 58
- Ley 21.081, modifica ley n° 19.496, sobre protección de los derechos de los consumidores, Artículo 50
- Ley 21.081, modifica ley n° 19.496, sobre protección de los derechos de los consumidores, Artículo 51
- Ley 21.081, modifica ley n° 19.496, sobre protección de los derechos de los consumidores, Artículo 57
- Doctrina: Cortez Matcovich, Gonzalo, "Sobre la procedencia de la adhesión a la apelación en el procedimiento seguido ante los juzgados de policía local. Admisibilidad de un recurso de hecho respecto de resoluciones pronunciadas por una Corte de Apelaciones", Revista Chilena de Derecho Privado, N° 35, (2020), DOI: 10.32995/s0718-80722020519.
- Doctrina: Barrientos Camus, Francisca, "COMENTARIO. ÁMBITO DE APLICACIÓN DE LA LEY Nº 19496 DE 1997. NEGATIVA INJUSTIFICADA DE LA VENTA. OFERTA PROMOCIONAL. FORMACIÓN DEL CONSENTIMIENTO. COMPUTADORES PORTÁTILES A BAJO PRECIO. BUENA FE DEL CONSUMIDOR. TERCERA SALA CORTE DE APELACIONES DE SANTIAGO, 12 DE MARZO DE 2012, ROL Nº 8470-2010 Y JUZGADO DE POLICÍA LOCAL DE VITACURA, 11 DE NOVIEMBRE DE 2009, ROL Nº 114.876.", Revista Chilena de Derecho Privado, N° 18, (2019), DOI: 10.32995/s0718-80722012214.
- ~~Resolución 3953 EXENTA, ordena publicación en el diario oficial de anexo de decreto supremo n° 239, de 2004, del ministerio de educación, que establece objetivos fundamentales y contenidos mínimos obligatorios para la educación de adultos y fija normas generales para su aplicación, Artículo 2~~ (sin relación léxica (0 términos en común))
- ~~Decreto 257, establece objetivos fundamentales y contenidos mínimos obligatorios para la educación de adultos y fija normas generales para su aplicación y deroga decreto supremo nº 239, de 2004, del ministerio de educación y sus modificaciones en la forma que señala, Artículo 10~~ (sin relación léxica (0 términos en común))

Versión anterior (main):
- Ley N° 19.496 sobre Protección de los Derechos de los Consumidores, Artículo 3 bis
- Ley N° 18.101 sobre Arrendamiento de Predios Urbanos, Artículo 3
- Constitución Política de la República de Chile, Artículo 19, N° 1
- Constitución Política de la República de Chile, Artículo 19, N° 24

</details>

#### Ficha del procedimiento

| Aspecto | Detalle |
|---------|---------|
| **Tipo de procedimiento** | Denuncia o demanda por infracción a la Ley 19.496 sobre Protección de los Derechos de los Consumidores ante Juzgado de Policía Local |
| **Normas aplicables** | Ley 19.496 (Ley del Consumidor); Ley 18.287 (Procedimiento ante Juzgados de Policía Local); Código de Procedimiento Civil (supletorio); Ley 18.120 (comparecencia en juicio); Ley 20.886 (tramitación electrónica) |
| **Tribunal competente** | **Materia:** Juzgado de Policía Local. **Cuantía:** Sin límite de cuantía. **Territorio:** Domicilio del consumidor, lugar de celebración del contrato, lugar de cumplimiento de la obligación o donde se haya cometido la infracción, a elección del consumidor (artículo 50 A, Ley 19.496) |
| **Comparecencia** | Ley 18.120: patrocinio de abogado habilitado obligatorio en primera instancia si la cuantía excede 4 UTM (no verificado en esta búsqueda); poder simple basta para representación. SERNAC y Asociaciones de Consumidores pueden comparecer por sus representantes legales |
| **Prescripción o caducidad** | **Acción contravencional:** 2 años desde que cesó la infracción (artículo 26, Ley 19.496). Se suspende por reclamo ante servicio de atención al cliente, mediador, SERNAC o por intervención formal del SERNAC. **Acciones civiles:** según Código Civil (5 años para responsabilidad extracontractual, 4 años para incumplimiento contractual desde que la obligación se hizo exigible) |
| **Tramitación electrónica** | Ley 20.886 y Oficina Judicial Virtual aplicables según implementación del tribunal. Verificar en cada juzgado de policía local si opera sistema electrónico |

#### Antes de demandar

**Antecedentes y documentos necesarios:**

- Contrato, boleta, factura o comprobante de la relación de consumo
- Publicidad, folletos, cotizaciones o información comercial relevante
- Correos electrónicos, mensajes, grabaciones de llamadas (si existen)
- Fotografías o videos del producto o servicio defectuoso
- Certificados técnicos, informes periciales o presupuestos de reparación
- Comprobantes de pago, estados de cuenta, cartolas
- Reclamo presentado ante el proveedor (libro de reclamos, correo, carta certificada)
- Respuesta del proveedor o constancia de falta de respuesta
- Liquidación de perjuicios: detalle de daño emergente, lucro cesante y daño moral
- Cédula de identidad o RUT del consumidor
- Individualización completa del proveedor (razón social, RUT, domicilio, representante legal)

**Gestiones previas:**

1. **Reclamo directo al proveedor:** Presentar reclamo escrito (libro de reclamos, servicio de atención al cliente, correo electrónico). No es obligatorio, pero suspende prescripción y puede facilitar solución.

2. **Reclamo ante SERNAC (opcional):** Ingresar denuncia en oficina regional o plataforma web del Servicio Nacional del Consumidor. SERNAC puede:
   - Mediar entre consumidor y proveedor
   - Fiscalizar e iniciar procedimiento sancionatorio administrativo
   - Suspender prescripción desde la intervención formal
   - No impide acción judicial posterior ni la condiciona

3. **Mediación (no obligatoria):** A diferencia de otros procedimientos, no existe mediación previa obligatoria en materia de consumo. La conciliación es dentro del juicio.

4. **Recopilación de pruebas:** Reunir toda documentación antes de demandar. El proveedor está obligado a exhibir documentos en juicio si se solicita, pero es mejor contar con respaldos propios.

#### Tramitación paso a paso

##### Etapa 1: Presentación de la demanda o denuncia

**Qué se hace:** Presentar escrito de demanda o denuncia ante el Juzgado de Policía Local competente, en formato físico o electrónico según disponibilidad del tribunal.

**Quién:** Consumidor afectado (interés individual), personalmente o representado por abogado; SERNAC; Asociación de Consumidores (interés colectivo o difuso, artículo 51, Ley 19.496).

**Plazo y cómputo:** Dentro del plazo de prescripción: 2 años desde que cesó la infracción (acción contravencional) o según reglas civiles (acciones indemnizatorias). Días corridos.

**Norma:** Artículos 50, 51, 26, Ley 19.496; Ley 18.287.

**Si se omite:** Prescripción de la acción; pérdida del derecho a reclamar.

**Contenido mínimo de la demanda:**
- Designación del tribunal
- Individualización del demandante (nombre, RUT, domicilio, profesión u oficio)
- Individualización del demandado (proveedor: razón social, RUT, domicilio, representante legal)
- Exposición clara de los hechos y fundamentos de derecho
- Peticiones concretas: sanción contravencional (multa), indemnización de perjuicios (monto), cumplimiento forzado, nulidad de cláusulas abusivas, cese de conducta
- Enunciación de medios de prueba
- Patrocinio y poder (si corresponde)
- Fecha y firma

##### Etapa 2: Examen de admisibilidad y providencia

**Qué se hace:** El juez examina si la demanda cumple requisitos formales, la declara admisible y ordena notificar al demandado.

**Quién:** Juez de Policía Local.

**Plazo y cómputo:** Sin plazo legal específico; en la práctica, días o semanas según carga del tribunal.

**Norma:** Artículo 14, Ley 18.287; artículo 254, Código de Procedimiento Civil (supletorio).

**Si se omite:** Si el juez estima inadmisible la demanda por defectos formales, puede ordenar subsanación o rechazarla. Apelable en ambos efectos.

##### Etapa 3: Notificación al demandado

**Qué se hace:** Notificar personalmente al demandado la demanda y la resolución que la provee. Si no se logra notificación personal, procede notificación por cédula en domicilio del demandado.

**Quién:** Receptor judicial o funcionario del tribunal.

**Plazo y cómputo:** La notificación debe practicarse antes de la audiencia. No hay plazo fatal, pero determina el inicio del plazo para contestar.

**Norma:** Artículos 18 y siguientes, Ley 18.287; artículos 40 y siguientes, Código de Procedimiento Civil.

**Si se omite:** Nulidad de todo lo obrado; el demandado no queda legalmente emplazado.

##### Etapa 4: Contestación de la demanda

**Qué se hace:** El demandado contesta por escrito, opone excepciones, niega los hechos, acompaña documentos y ofrece pruebas.

**Quién:** Proveedor demandado, personalmente o representado por abogado.

**Norma:** Artículo 14, Ley 18.287; artículo 309, Código de Procedimiento Civil (supletorio).

**Si se omite:** Rebeldía del demandado. El juicio sigue adelante; se tiene por no contestada la demanda, pero no se presumen ciertos los hechos (el demandante debe probar).

**Excepciones que puede oponer el demandado:**
- Incompetencia del tribunal
- Falta de legitimación activa o pasiva
- Prescripción de la acción
- Pago, cumplimiento, novación, compensación
- Inexistencia de relación de consumo
- Caso fortuito o fuerza mayor
- Hecho o culpa exclusiva del consumidor
- Cualquier defensa de fondo

##### Etapa 5: Citación a audiencia de contestación y conciliación

**Qué se hace:** El juez cita a las partes a audiencia única de contestación, conciliación y prueba. En algunos juzgados, la contestación es escrita previa; en otros, oral en audiencia.

**Quién:** Juez de Policía Local.

**Plazo y cómputo:** La audiencia se fija para día y hora determinados, generalmente dentro de 10 a 30 días desde la contestación o vencimiento del plazo para contestar (varía según tribunal).

**Norma:** Artículo 14, Ley 18.287.

**Si se omite:** Si no se fija audiencia, el procedimiento se paraliza; el demandante puede solicitar que se fije.

##### Etapa 6: Audiencia de contestación, conciliación y prueba

**Qué se hace:** Audiencia oral y pública. El juez:
1. Recibe contestación oral si no fue escrita
2. Llama a conciliación (obligatoria)
3. Si no hay conciliación, recibe la prueba ofrecida por las partes
4. Cierra el debate

**Quién:** Juez, demandante, demandado, testigos, peritos.

**Plazo y cómputo:** Audiencia única; puede suspenderse y continuarse en nueva fecha si es necesario (por ejemplo, para rendir prueba pericial o testimonial pendiente).

**Norma:** Artículo 14, Ley 18.287.

**Si se omite:** Si alguna parte no comparece:
- **Demandante ausente:** El juez puede tener por abandonada la acción o suspender para nueva audiencia.
- **Demandado ausente:** Se sigue en rebeldía; se rinde prueba del demandante.

**Conciliación:**
- El juez propone bases de arreglo.
- Si las partes concilian total o parcialmente, se levanta acta que tiene valor de sentencia ejecutoriada.
- Si no hay acuerdo, continúa el juicio.

**Prueba:**
- **Documental:** Se acompañan y reconocen documentos.
- **Pericial:** Informe de perito si fue designado previamente o se rinde en audiencia.
- **Confesional:** Absolución de posiciones de las partes.
- **Inspección personal del tribunal:** Si procede.
- **Otros medios:** Grabaciones, fotografías, correos electrónicos, mensajes (apreciados según sana crítica).

**Carga de la prueba:**
- El consumidor debe probar la relación de consumo, el incumplimiento o infracción, y el daño.
- El proveedor debe probar sus excepciones (pago, cumplimiento, caso fortuito, culpa del consumidor).
- Inversión de la carga: en ciertos casos (información, seguridad, idoneidad), el proveedor debe probar que cumplió sus obligaciones.

##### Etapa 7: Sentencia definitiva

**Qué se hace:** El juez dicta sentencia, acogiendo o rechazando la demanda, total o parcialmente. Puede:
- Imponer multa al proveedor (hasta 300 UTM en general; hasta 1.500 o 2.250 UTM por publicidad falsa, artículo 24, Ley 19.496)
- Condenar a indemnización de perjuicios (daño emergente, lucro cesante, daño moral)
- Ordenar cumplimiento forzado de la obligación
- Declarar nulidad de cláusulas abusivas
- Ordenar cese de conducta infractora
- Condenar en costas

**Quién:** Juez de Policía Local.

**Norma:** Artículos 14, 32, Ley 18.287; artículos 24, 50, Ley 19.496.

**Si se omite:** Si el juez no dicta sentencia en plazo, las partes pueden solicitar pronto despacho o quejarse ante la Corte de Apelaciones.

**Contenido de la sentencia:**
- Parte expositiva: individualización de partes, resumen de la demanda y contestación
- Parte considerativa: hechos probados, razonamiento jurídico, valoración de prueba (sana crítica)
- Parte resolutiva: acoge o rechaza; monto de multa e indemnización; condena en costas

**Reajustes e intereses:**
- Las restituciones pecuniarias se reajustan según IPC entre el mes anterior a la infracción y el anterior al pago efectivo (artículo 27, Ley 19.496).
- Intereses corrientes desde la fecha de la infracción o desde la demanda (según criterio del tribunal).

##### Etapa 8: Notificación de la sentencia

**Qué se hace:** La sentencia se notifica por el estado diario a ambas partes. Si alguna parte no compareció a la audiencia, se notifica personalmente o por cédula.

**Quién:** Secretario del tribunal o receptor judicial.

**Plazo y cómputo:** Desde la notificación corre el plazo para apelar.

**Norma:** Artículos 23, 24, Ley 18.287; artículo 50, Código de Procedimiento Civil.

**Si se omite:** Sin notificación válida, no corre plazo para recurrir; la sentencia no queda ejecutoriada.

##### Etapa 9: Recursos (si proceden)

**Qué se hace:** La parte agraviada puede apelar ante la Corte de Apelaciones respectiva.

**Quién:** Demandante o demandado.

**Norma:** Artículos 25 y siguientes, Ley 18.287.

**Si se omite:** Sentencia queda firme y ejecutoriada; no puede recurrirse.

**Tramitación de la apelación:**
- Se concede en ambos efectos (suspende cumplimiento) o solo efecto devolutivo (se puede cumplir la sentencia), según naturaleza de la resolución.
- Se elevan los autos a la Corte de Apelaciones.
- La Corte fija día para la vista de la causa (preferencia en tabla).
- Puede haber alegatos o resolverse en cuenta.
- La Corte dicta sentencia (confirma, revoca o modifica).

**Casación:**
- Plazo: 5 o 10 días según el recurso (verificar en Ley 18.287).
- Tribunal: Corte Suprema.

##### Etapa 10: Cumplimiento de la sentencia firme

**Qué se hace:** Una vez firme la sentencia (sin recursos pendientes o rechazados), se procede a su cumplimiento:
- **Multa:** El condenado paga en arcas fiscales (Tesorería General de la República) dentro del plazo que fija la sentencia (generalmente 5 o 10 días). Si no paga, se gira orden de ingreso y puede decretarse apremio (arresto hasta 15 días).
- **Indemnización:** El condenado paga al consumidor. Si no paga voluntariamente, se inicia ejecución de sentencia.

**Quién:** Condenado (pago voluntario) o tribunal (ejecución forzada).

**Plazo y cómputo:** Plazo para pago voluntario: el que fija la sentencia (generalmente 5 a 10 días desde que queda ejecutoriada). Días hábiles.

**Norma:** Artículos 32, 33, Ley 18.287; artículos 231 y siguientes, Código de Procedimiento Civil (ejecución de sentencias).

**Si se omite:** Si el condenado no paga:
- **Multa:** Apremio (arresto), embargo de bienes, giro contra fiador si lo hay.
- **Indemnización:** Ejecución forzada mediante embargo y remate de bienes del deudor.

**Ejecución de la indemnización:**
- El consumidor solicita al tribunal que despache mandamiento de ejecución y embargo.
- Se embargan bienes suficientes del deudor.
- Se rematan en pública subasta.
- Con el producto, se paga al acreedor (consumidor) con reajustes, intereses y costas.

##### Etapa 11: Registro de la sanción (si hay multa)

**Qué se hace:** SERNAC lleva un registro público de proveedores sancionados. La sentencia condenatoria firme se inscribe en dicho registro.

**Quién:** SERNAC (de oficio o a solicitud del tribunal).

**Plazo y cómputo:** Desde que la sentencia queda ejecutoriada.

**Norma:** Artículo 58 bis, Ley 19.496 (verificar texto vigente).

**Si se omite:** No afecta la validez de la sentencia, pero el proveedor no queda públicamente registrado como infractor.

#### Escritos clave

##### Demanda por infracción a la Ley del Consumidor (interés individual)

**Suma:**
- En lo principal: Demanda por infracción a la Ley 19.496.
- Primer otrosí: Acompaña documentos.
- Segundo otrosí: Patrocinio y poder.

**Estructura y contenido mínimo:**

**EN LO PRINCIPAL:**

S.J.L. de [comuna]

[Nombre del demandante], [profesión u oficio], cédula nacional de identidad N° [RUT], domiciliado en [calle, número, comuna], a S.S. respetuosamente digo:

Que, por el presente escrito y en conformidad a lo dispuesto en la Ley 19.496 sobre Protección de los Derechos de los Consumidores, vengo en deducir **demanda** en contra de [razón social del proveedor], RUT [número], representada legalmente por [nombre del representante], ambos domiciliados para estos efectos en [calle, número, comuna], por los hechos, fundamentos y peticiones que paso a exponer:

**I. HECHOS**

1. Con fecha [día/mes/año], concurrí al establecimiento comercial del demandado ubicado en [dirección], donde adquirí [descripción del bien o servicio], según consta en [boleta/factura/contrato] N° [número] que acompaño.

2. El precio convenido fue de $[monto] ([monto en palabras] pesos), pagado mediante [efectivo/tarjeta/transferencia].

3. El demandado se obligó a [entregar el bien/prestar el servicio] en [plazo/condiciones pactadas].

4. Sin embargo, [descripción del incumplimiento o infracción: producto defectuoso, no entrega, publicidad engañosa, cobro indebido, cláusula abusiva, etc.].

5. Con fecha [día/mes/año], presenté reclamo escrito ante el demandado [en libro de reclamos/por correo electrónico/carta certificada], sin obtener respuesta satisfactoria [o bien: el demandado respondió negándose a solucionar el problema].

6. Como consecuencia de lo anterior, he sufrido los siguientes perjuicios: [daño emergente: gastos en que incurrí; lucro cesante: lo que dejé de ganar; daño moral: angustia, pérdida de tiempo, menoscabo en dignidad].

**II. FUNDAMENTOS DE DERECHO**

7. El demandado ha infringido las siguientes normas de la Ley 19.496:
   - Artículo 3° letra [a/b/c/d/e]: [derecho vulnerado: libre elección, información veraz, no discriminación, seguridad, reparación e indemnización].
   - Artículo [12/13/17/23/28/otro]: [norma específica infringida: garantía legal, información, contrato de adhesión, publicidad engañosa, etc.].

8. Conforme al artículo 50 de la Ley 19.496, el incumplimiento de las normas de protección al consumidor da lugar a la acción para sancionar al proveedor y obtener la debida indemnización de perjuicios.

9. El artículo 24 de la misma ley sanciona las infracciones con multa de hasta 300 UTM (o hasta 1.500/2.250 UTM si se trata de publicidad falsa que afecta salud, seguridad o medio ambiente).

10. Tengo derecho a ser indemnizado por todos los daños materiales y morales sufridos, conforme al artículo 3° letra e) de la Ley 19.496.

**III. PRUEBA**

Acompaño y ofrezco rendir la siguiente prueba:
- **Documental:** [Boleta/factura/contrato/correos/fotografías/presupuestos/certificados] que acompaño en este acto.
- **Testimonial:** Testigos [nombres y RUT de hasta 4 testigos por punto de prueba], quienes declararán sobre [hechos a probar].
- **Confesional:** Absolución de posiciones del representante legal del demandado.
- **Pericial:** [Si corresponde: informe técnico sobre el defecto del producto, tasación de perjuicios].
- **Otros medios:** [Grabaciones, mensajes, inspección personal del tribunal].

**IV. PETICIONES**

Por tanto, y en conformidad a lo expuesto y a lo dispuesto en los artículos 3°, 24, 50 y siguientes de la Ley 19.496,

**RUEGO A S.S.:**

1. Tener por deducida demanda en contra de [razón social del demandado].
2. Acogerla en la sentencia definitiva, condenando al demandado a:
   a) Pagar multa a beneficio fiscal de [monto en UTM] por infracción a la Ley 19.496.
   b) Pagar a mi favor la suma de $[monto] por concepto de indemnización de perjuicios (daño emergente: $[monto]; lucro cesante: $[monto]; daño moral: $[monto]), con reajustes e intereses según artículo 27 de la Ley 19.496.
   c) [Si corresponde: cumplir forzadamente la obligación de entregar el bien/prestar el servicio/reparar/reemplazar].
   d) [Si corresponde: declarar nula la cláusula abusiva contenida en el contrato].
   e) Pagar las costas de la causa.

**PRIMER OTROSÍ:** Ruego a S.S. tener por acompañados los siguientes documentos:
1. [Boleta/factura] N° [número] de fecha [día/mes/año].
2. [Contrato/correo electrónico/fotografía/certificado].
3. [Otros documentos].

**SEGUNDO OTROSÍ:** Ruego a S.S. tener por constituido patrocinio en la persona del abogado [nombre], RUT [número], domiciliado en [dirección], y conferido poder a [nombre del mandatario, si es distinto], RUT [número], domiciliado en [dirección], todo conforme a la Ley 18.120.

[Lugar y fecha]

[Firma del demandante]
[Firma y timbre del abogado patrocinante]

---

##### Contestación de la demanda (demandado/proveedor)

**Suma:**
- En lo principal: Contesta demanda.
- Primer otrosí: Opone excepciones.
- Segundo otrosí: Acompaña documentos.
- Tercer otrosí: Patrocinio y poder.

**Estructura y contenido mínimo:**

**EN LO PRINCIPAL:**

S.J.L. de [comuna]
Rol C-[número]-[año]

[Nombre del representante legal del demandado], en representación de [razón social], RUT [número], ambos domiciliados en [dirección], en autos sobre demanda por infracción a la Ley del Consumidor, a S.S. respetuosamente digo:

Que, dentro del plazo legal, vengo en **contestar la demanda** deducida en mi contra por [nombre del demandante], en los siguientes términos:

**I. NEGACIÓN DE LOS HECHOS**

1. Niego, rechazo y contradigo, tanto en los hechos como en el derecho, la demanda deducida en mi contra.

2. Es efectivo que con fecha [día/mes/año] mi representada celebró [contrato de compraventa/prestación de servicios] con el demandante, pero los hechos ocurrieron de la siguiente manera: [versión del demandado].

3. Niego que mi representada haya incumplido obligación alguna. Por el contrario, [cumplió íntegramente/el incumplimiento se debió a caso fortuito/culpa exclusiva del consumidor].

4. Niego que el demandante haya sufrido perjuicio alguno, o que éste sea imputable a mi representada.

**II. FUNDAMENTOS DE DERECHO**

5. No existe infracción a la Ley 19.496, por cuanto [mi representada cumplió con informar/el producto cumplía con las especificaciones/la publicidad no fue engañosa/etc.].

6. [Si corresponde: El demandante no acreditó la relación de consumo/actuó como intermediario y no como destinatario final].

7. [Si corresponde: Operó caso fortuito o fuerza mayor que impidió el cumplimiento].

8. [Si corresponde: El daño se produjo por hecho o culpa exclusiva del consumidor].

**III. PRUEBA**

Ofrezco rendir la siguiente prueba:
- **Documental:** [Comprobantes de entrega, respuestas a reclamos, informes técnicos, etc.].
- **Testimonial:** [Nombres de testigos que declararán sobre el cumplimiento de las obligaciones].
- **Pericial:** [Informe técnico que acredita que el producto no tenía defectos].
- **Confesional:** Absolución de posiciones del demandante.

**IV. PETICIONES**

Por tanto,

**RUEGO A S.S.:**

Tener por contestada la demanda y, en definitiva, rechazarla en todas sus partes, con expresa condena en costas al demandante.

**PRIMER OTROSÍ:** Opongo las siguientes excepciones:
1. **Prescripción de la acción:** Han transcurrido más de 2 años desde que cesó la supuesta infracción [si corresponde].
2. **Pago:** Mi representada cumplió íntegramente sus obligaciones [si corresponde].
3. **Caso fortuito o fuerza mayor:** [Si corresponde].
4. **Culpa exclusiva del consumidor:** [Si corresponde].

**SEGUNDO OTROSÍ:** Acompaño los siguientes documentos:
1. [Guía de despacho/comprobante de entrega].
2. [Respuesta a reclamo del consumidor].
3. [Informe técnico].

**TERCER OTROSÍ:** Patrocinio y poder conforme a Ley 18.120 [individualización del abogado y mandatario].

[Lugar y fecha]

[Firma del representante legal]
[Firma y timbre del abogado patrocinante]

---

##### Solicitud de cumplimiento de sentencia (ejecución de indemnización)

**Suma:**
- En lo principal: Solicita cumplimiento de sentencia.
- Primer otrosí: Solicita despacho de mandamiento de ejecución y embargo.

**Estructura y contenido mínimo:**

**EN LO PRINCIPAL:**

S.J.L. de [comuna]
Rol C-[número]-[año]

[Nombre del demandante], en autos sobre demanda por infracción a la Ley del Consumidor, a S.S. respetuosamente digo:

Que, con fecha [día/mes/año], S.S. dictó sentencia definitiva que acogió mi demanda, condenando a [razón social del demandado] a pagar a mi favor la suma de $[monto] por concepto de indemnización de perjuicios, con reajustes e intereses.

Dicha sentencia se encuentra firme y ejecutoriada desde el [día/mes/año], según consta en certificado que acompaño.

El demandado no ha dado cumplimiento voluntario a la sentencia dentro del plazo legal.

Por tanto, y en conformidad a lo dispuesto en los artículos 231 y siguientes del Código de Procedimiento Civil,

**RUEGO A S.S.:**

Ordenar el cumplimiento de la sentencia y despachar los mandamientos correspondientes para hacer efectivo el pago de la suma adeudada, con sus reajustes, intereses y costas.

**PRIMER OTROSÍ:** Solicito se despache mandamiento de ejecución y embargo en contra del demandado, por la suma de $[monto actualizado], más reajustes, intereses y costas, recayendo el embargo en los siguientes bienes: [individualización de bienes del deudor, si se conocen, o solicitar embargo de bienes que se encuentren en su domicilio o establecimientos comerciales].

[Lugar y fecha]

[Firma del demandante o su abogado]

---

#### Tabla de plazos

| Etapa | Plazo | Cómputo | Norma | Consecuencia |
|-------|-------|---------|-------|--------------|
| Prescripción acción contravencional | 2 años | Desde que cesó la infracción, días corridos | Art. 26, Ley 19.496 | Pérdida del derecho a demandar sanción |
| Prescripción acción civil | 4 o 5 años | Según Código Civil, desde que la obligación se hizo exigible o desde el hecho, días corridos | Arts. 2514, 2515, 2332 CC | Pérdida del derecho a indemnización |
| Contestación de la demanda | 5 días hábiles (no verificado en esta búsqueda) | Desde notificación de la demanda | Art. 14, Ley 18.287 | Rebeldía del demandado |
| Apelación sentencia definitiva | 5 días hábiles (no verificado en esta búsqueda) | Desde notificación de la sentencia | Art. 25, Ley 18.287 | Sentencia queda firme |
| Adhesión a la apelación | 5 días hábiles (no verificado en esta búsqueda) | Desde notificación de la concesión del recurso | Ley 18.287 y CPC supletorio | Preclusión del derecho a adherirse |
| Casación en la forma | 5 días hábiles (no verificado en esta búsqueda) | Desde notificación de la sentencia | Art. 26, Ley 18.287 | Preclusión del recurso |
| Casación en el fondo | 10 días hábiles (no verificado en esta búsqueda) | Desde notificación de la sentencia | Art. 27, Ley 18.287 | Preclusión del recurso |
| Pago voluntario de multa | 5 a 10 días hábiles (según sentencia) | Desde que la sentencia queda ejecutoriada | Art. 32, Ley 18.287 | Apremio, embargo |
| Pago voluntario de indemnización | 5 a 10 días hábiles (según sentencia) | Desde que la sentencia queda ejecutoriada | Sentencia | Ejecución forzada |

#### Recursos

##### Recurso de apelación

**Procede contra:** Sentencia definitiva de primera instancia; resoluciones que ponen término al juicio o hacen imposible su continuación; otras resoluciones expresamente apelables.

**Tribunal ante el que se interpone:** Juzgado de Policía Local que dictó la resolución.

**Tribunal que conoce:** Corte de Apelaciones respectiva.

**Efectos:** En ambos efectos (suspende cumplimiento) o solo efecto devolutivo (se puede cumplir), según naturaleza de la resolución. Sentencias definitivas: generalmente ambos efectos.

##### Recurso de casación en la forma

**Procede contra:** Sentencia definitiva o interlocutoria que pone término al juicio o hace imposible su continuación, por vicios de forma.

**Tribunal ante el que se interpone:** Corte de Apelaciones que conoció en segunda instancia (si hubo apelación) o directamente ante Corte Suprema (si no hubo apelación previa).

**Tribunal que conoce:** Corte Suprema.

##### Recurso de casación en el fondo

**Procede contra:** Sentencia definitiva o interlocutoria que pone término al juicio o hace imposible su continuación, por infracción de ley que influye sustancialmente en lo dispositivo del fallo.

**Tribunal ante el que se interpone:** Corte Suprema, a través de la Corte de Apelaciones que conoció en segunda instancia.

**Tribunal que conoce:** Corte Suprema.

**Requisitos:** Infracción de ley (no de hecho); que influya sustancialmente en lo dispositivo; que se haya reclamado oportunamente de la infracción (preparación del recurso).

##### Recurso de queja

**Procede contra:** Falta o abuso grave del juez en el ejercicio de sus funciones.

**Plazo:** 5 días hábiles desde que se tuvo conocimiento de la falta o abuso (no verificado en esta búsqueda).

**Tribunal ante el que se interpone y que conoce:** Corte de Apelaciones (contra juez de Policía Local) o Corte Suprema (contra ministros de Corte de Apelaciones).

**Efectos:** No suspende el cumplimiento de la resolución; puede anularla si se acoge.

#### Errores frecuentes y estrategia

**Errores frecuentes:**

1. **No individualizar correctamente al proveedor:** Demandar a la persona natural del vendedor en vez de la empresa; no indicar RUT ni representante legal. Consecuencia: demanda puede ser rechazada por falta de legitimación pasiva.

2. **No acreditar la relación de consumo:** Olvidar acompañar boleta, factura o contrato. Consecuencia: no se prueba que el demandante es consumidor ni que el demandado es proveedor.

3. **Demandar fuera de plazo:** Dejar pasar más de 2 años desde que cesó la infracción. Consecuencia: prescripción de la acción contravencional (aunque puede subsistir la acción civil si no ha prescrito).

4. **No liquidar los perjuicios:** Pedir indemnización "a lo que resulte de la prueba" sin especificar monto ni conceptos. Consecuencia: el juez puede rechazar la indemnización por falta de prueba del daño.

5. **No ofrecer prueba suficiente:** Confiar solo en la presunción de veracidad de los dichos del consumidor. Consecuencia: elconsumidor debe probar los hechos; la carga no se invierte en todo.

6. **No notificar correctamente al demandado:** Notificar en domicilio equivocado o no acreditar la notificación. Consecuencia: nulidad de todo lo obrado.

7. **No comparecer a la audiencia:** Olvidar la fecha o no presentarse. Consecuencia: si es el demandante, abandono de la acción; si es el demandado, rebeldía.

8. **No apelar en plazo:** Dejar pasar los 5 días hábiles. Consecuencia: sentencia queda firme aunque sea desfavorable.

9. **Confundir acción contravencional con acción civil:** Creer que la multa es para el consumidor. Consecuencia: la multa va a arcas fiscales; la indemnización es lo que recibe el consumidor.

10. **No actualizar el monto de la indemnización:** Pedir el monto histórico sin reajustes. Consecuencia: se pierde el valor real por inflación (aunque el artículo 27 de la Ley 19.496 ordena reajustar, es mejor pedirlo expresamente).

**Estrategia:**

- **Antes de demandar:** Agotar reclamo ante el proveedor (suspende prescripción y puede evitar juicio). Denunciar ante SERNAC si se busca que el organismo fiscalice o medie.

- **Elección del tribunal competente:** Aprovechar la competencia a elección del consumidor: demandar en el juzgado más cercano o conveniente (domicilio del consumidor, lugar de celebración del contrato, lugar de cumplimiento o donde se cometió la infracción).

- **Cuantificación de perjuicios:** Ser preciso y realista. Acompañar presupuestos, boletas de gastos, certificados médicos (si hay daño moral por afectación a la salud). El daño moral en consumo procede solo si se afectó integridad física, psíquica o dignidad (artículo 51 N° 2, Ley 19.496).

- **Prueba documental:** Reunir todo antes de demandar. Solicitar en la demanda que el tribunal ordene al proveedor exhibir documentos que obren en su poder (artículo 51 N° 10, Ley 19.496: el proveedor está obligado a entregar instrumentos que tengan relación directa con la cuestión debatida; si se niega injustificadamente, el juez puede tener por probado lo alegado por el consumidor).

- Prepararlos: que declaren sobre hechos concretos, no opiniones. Los consumidores afectados pueden declarar como testigos sin inhabilidad (artículo 51, inciso final, Ley 19.496).

- **Conciliación:** Evaluar seriamente las propuestas del juez. Una conciliación tiene valor de sentencia ejecutoriada y evita la incertidumbre de la sentencia y los recursos.

- **Apelación:** Apelar solo si hay fundamento serio. La apelación en materia de consumo tiene preferencia en tabla, pero igual demora meses. Si la sentencia es favorable, el demandado puede apelar; estar preparado para defender en segunda instancia.

- **Cumplimiento:** Si se gana, no esperar que el condenado pague voluntariamente. Apenas quede firme la sentencia, solicitar cumplimiento y despacho de mandamiento de ejecución. Identificar bienes embargables del deudor (cuentas corrientes, vehículos, maquinaria, mercadería en bodega).

- **Costas:** Pedirlas siempre. Incluyen honorarios del abogado (regulados por el tribunal) y gastos del juicio (fotocopias, notificaciones, peritajes). Si se gana, el condenado paga las costas; si se pierde, el demandante puede ser condenado en costas si la demanda fue temeraria.

#### Lista de verificación

- [ ] Verificar que no ha prescrito la acción (2 años desde que cesó la infracción para acción contravencional; 4 o 5 años para acción civil)
- [ ] Reunir todos los documentos: boleta, factura, contrato, publicidad, reclamo, respuesta del proveedor
- [ ] Identificar correctamente al proveedor: razón social, RUT, representante legal, domicilio
- [ ] Liquidar los perjuicios: daño emergente (gastos), lucro cesante (lo que dejé de ganar), daño moral (solo si hubo afectación a integridad física, psíquica o dignidad)
- [ ] Redactar demanda con todos los requisitos del artículo 254 del Código de Procedimiento Civil
- [ ] Acompañar documentos en la demanda
- [ ] Constituir patrocinio y poder (Ley 18.120) si corresponde
- [ ] Presentar demanda en el juzgado de policía local competente (verificar si tramita electrónicamente)
- [ ] Verificar que se notificó correctamente al demandado (personalmente o por cédula)
- [ ] Preparar contestación (si soy demandado) dentro de 5 días hábiles (no verificado en esta búsqueda)
- [ ] Preparar prueba para la audiencia: documentos, testigos citados, perito designado
- [ ] Asistir a la audiencia de contestación, conciliación y prueba (fecha y hora exactas)
- [ ] Evaluar propuesta de conciliación del juez
- [ ] Rendir toda la prueba ofrecida en la audiencia
- [ ] Verificar que la sentencia se notificó correctamente
- [ ] Decidir si apelar dentro de 5 días hábiles (no verificado en esta búsqueda)
- [ ] Si se gana: solicitar cumplimiento apenas quede firme la sentencia
- [ ] Si hay multa: verificar que el condenado pagó en Tesorería; si no, solicitar apremio
- [ ] Si hay indemnización: solicitar mandamiento de ejecución y embargo si no hay pago voluntario
- [ ] Identificar bienes embargables del deudor
- [ ] Seguir la ejecución hasta el remate y pago efectivo

#### Qué verificar antes de actuar

- Plazo exacto para contestar la demanda (indicado como 5 días hábiles; verificar en Ley 18.287 vigente, artículo 14)
- Plazo exacto para apelar (indicado como 5 días hábiles; verificar en Ley 18.287 vigente, artículo 25)
- Plazo para adhesión a la apelación (indicado como 5 días; verificar en Ley 18.287 y jurisprudencia reciente, considerando que existen sentencias contradictorias de la Corte Suprema sobre su procedencia en este procedimiento, según doctrina disponible)
- Plazo para casación en la forma (indicado como 5 días hábiles; verificar en Ley 18.287, artículo 26)
- Plazo para casación en el fondo (indicado como 10 días hábiles; verificar en Ley 18.287, artículo 27)
- Número máximo de testigos por punto de prueba (indicado como 4; verificar en Ley 18.287)
- Plazo para dictar sentencia (indicado como 5 días hábiles desde la audiencia; verificar en Ley 18.287, artículo 14)
- Requisito de patrocinio según cuantía (indicado como 4 UTM; verificar en Ley 18.120 y práctica del tribunal)

**Autos acordados aplicables:**

- Verificar si el juzgado de policía local respectivo tiene auto acordado sobre tramitación electrónica, horarios de atención, forma de presentación de escritos
- Verificar si la Corte de Apelaciones respectiva tiene instrucciones sobre tramitación de apelaciones en materia de policía local

**Vigencia de normas:**

- La Ley 21.081 de 2018 modificó sustancialmente la Ley 19.496, especialmente en procedimientos colectivos y facultades de SERNAC. Verificar que se está usando el texto refundido vigente (DFL 3 de 2021 o versión posterior si existe)
- La Ley 21.394 de 2021 modificó plazos del Código de Procedimiento Civil (aplicable supletoriamente); verificar si afecta plazos de la Ley 18.287

**Criterios del tribunal:**

- Cada juzgado de policía local tiene prácticas distintas: algunos exigen contestación escrita previa a la audiencia; otros permiten contestación oral en audiencia. Consultar en el tribunal específico
- Algunos tribunales fijan audiencia inmediatamente al presentar la demanda; otros esperan la contestación. Verificar práctica local
- Monto de las condenas por daño moral: varía según tribunal y gravedad de la afectación. Revisar sentencias recientes del mismo juzgado o de la Corte de Apelaciones respectiva para calibrar peticiones

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### g09-tutela — procedimiento: Denuncia de tutela laboral por vulneración de derechos fundamentales

<details><summary>Material enviado al modelo (14 normas, 4 fallos o dictámenes, 3 artículos de doctrina; 2 normas descartadas por materia)</summary>

- Código del Trabajo, Artículo 485
- Código del Trabajo, Artículo 486
- Código del Trabajo, Artículo 489
- Código del Trabajo, Artículo 493
- Código del Trabajo, Artículo 487
- Código del Trabajo, Artículo 488
- Código del Trabajo, Artículo 490
- Código del Trabajo, Artículo 492
- Código de Procedimiento Civil, Artículo 540
- Código de Procedimiento Civil, Artículo 541
- Código de Procedimiento Civil, Artículo 542
- Resolución 31, otorga a la empresa nacional de electricidad s.a.,;endesa, concesion provisional para realizar los estudios;tendientes a evaluar el desarrollo de generacion;hidroelectrica en los rios baker, pascua y del salto, en;la xi region, aisen del general carlos ibañez del campo, Artículo 21
- Ley 20.087, sustituye el procedimiento laboral contemplado en el libro v del codigo del trabajo, Artículo 486
- Ley 20.087, sustituye el procedimiento laboral contemplado en el libro v del codigo del trabajo, Artículo 489
- Jurisprudencia: Tribunal Constitucional, 5956
- Jurisprudencia: Tribunal Constitucional, 7654
- Jurisprudencia: Dirección del Trabajo, Dictamen ORD. Nº4910/65, 2009-12-03
- Jurisprudencia: Dirección del Trabajo, Dictamen ORD. Nº1187/18, 2010-03-10
- Doctrina: Ferrada Bórquez, Juan Carlos; Walter Díaz, Rodolfo, "La protección de los derechos fundamentales de los trabajadores en el nuevo procedimiento de tutela laboral", Revista de derecho (Valdivia), vol. 24, N° 2, (2011), pp. 91-111, DOI: 10.4067/s0718-09502011000200004.
- Doctrina: Palavecino Cáceres, Claudio, "El Procedimiento de Tutela de Derechos Fundamentales del trabajador en Chile", Revista Chilena de Derecho del Trabajo y de la Seguridad Social, vol. 5, N° 9, (2016), DOI: 10.5354/0719-7551.2014.42638.
- Doctrina: Lanata Fuenzalida, Gabriela, "El despido indirecto y el nuevo procedimiento de Tutela de Derechos Fundamentales del  trabajador", Revista Chilena de Derecho del Trabajo y de la Seguridad Social, vol. 2, N° 3, (2016), DOI: 10.5354/0719-7551.2011.42926.
- ~~Resolución 3953 EXENTA, ordena publicación en el diario oficial de anexo de decreto supremo n° 239, de 2004, del ministerio de educación, que establece objetivos fundamentales y contenidos mínimos obligatorios para la educación de adultos y fija normas generales para su aplicación, Artículo 2~~ (sin relación léxica (1 términos en común))
- ~~Decreto 257, establece objetivos fundamentales y contenidos mínimos obligatorios para la educación de adultos y fija normas generales para su aplicación y deroga decreto supremo nº 239, de 2004, del ministerio de educación y sus modificaciones en la forma que señala, Artículo 10~~ (sin relación léxica (1 términos en común))

Versión anterior (main):
- Código del Trabajo, Artículo 485
- Código del Trabajo, Artículo 486
- Código del Trabajo, Artículo 487
- Código del Trabajo, Artículo 488
- Código del Trabajo, Artículo 489
- Código del Trabajo, Artículo 490
- Código del Trabajo, Artículo 491
- Código del Trabajo, Artículo 492
- Código de Procedimiento Civil, Artículo 290
- Código de Procedimiento Civil, Artículo 291
- Código del Trabajo, (artículo no identificado)
- Ley N° 19.496 sobre Protección de los Derechos de los Consumidores, Artículo 3 bis

</details>

#### Ficha del procedimiento

| Aspecto | Detalle |
|---------|---------|
| **Tipo de procedimiento** | Procedimiento especial de tutela laboral por vulneración de derechos fundamentales (Código del Trabajo, artículos 485 a 495) |
| **Normas aplicables** | Código del Trabajo, Libro V, Título I, Párrafo 6° (artículos 485 a 495); supletoriamente, Libro V, Título I, Párrafo 3° (procedimiento de aplicación general, artículos 446 y siguientes); Ley 18.120 (comparecencia); Ley 20.886 (tramitación electrónica) |
| **Tribunal competente** | **Materia:** Juzgado de Letras del Trabajo. **Cuantía:** Sin límite. **Territorio:** Domicilio del demandado (empleador) o lugar donde se presten o debieron prestarse los servicios, a elección del denunciante (Código del Trabajo, artículo 423). Si la vulneración ocurrió con ocasión del despido, el tribunal del lugar donde se prestaron los servicios o el del domicilio del demandado, a elección del trabajador |
| **Comparecencia** | Ley 18.120: el trabajador debe comparecer patrocinado por abogado habilitado (patrocinio) y representado mediante mandato judicial. El empleador debe comparecer representado por abogado habilitado. Excepción: trabajadores y empleadores pueden comparecer y defenderse personalmente en primera instancia en causas cuya cuantía no exceda de 10 ingresos mínimos mensuales (Código del Trabajo, artículo 441) |
| **Prescripción o caducidad** | **Plazo de caducidad:** 60 días corridos desde que se produjo la vulneración alegada (Código del Trabajo, artículo 486, inciso final). **Si la vulneración ocurrió con ocasión del despido:** 60 días corridos desde la separación (artículo 489, inciso segundo). **Suspensión del plazo:** Se suspende durante el procedimiento de mediación ante la Inspección del Trabajo, si lo hubo, conforme al artículo 168 del Código del Trabajo (feriados judiciales de febrero y del 18 al 31 de julio) |
| **Tramitación electrónica** | Obligatoria en tribunales con sistema de tramitación electrónica (Ley 20.886). Presentación de escritos, notificaciones y acceso al expediente a través de la Oficina Judicial Virtual (OJV, https://oficinajudicialvirtual.pjud.cl). Verificar en el sitio web del Poder Judicial si el tribunal respectivo opera electrónicamente |

#### Antes de demandar

**Antecedentes y documentos necesarios:**

- **Contrato de trabajo** o documento que acredite la relación laboral (liquidaciones de sueldo, correos electrónicos, registros de asistencia).
- **Carta de despido** (si la vulneración ocurrió con ocasión del término de la relación laboral).
- **Documentos que acrediten la vulneración:** correos electrónicos, mensajes de WhatsApp, cartas, memorandos, testigos, fotografías, grabaciones (verificar licitud de la obtención), informes médicos (si hay daño a la salud), certificados de licencias médicas, etc.
- **Finiquito** (si existe y fue firmado; su existencia no impide la acción de tutela si se alega vulneración de derechos fundamentales).
- **Identificación del empleador:** RUT, razón social, domicilio, representante legal.
- **Nómina de testigos** (nombre completo, RUT, domicilio, profesión u oficio): máximo seis testigos por parte.
- **Informe de fiscalización de la Inspección del Trabajo** (si existe).

**Gestiones previas:**

1. **Mediación ante la Inspección del Trabajo (opcional pero recomendable):** Si la Inspección del Trabajo tomó conocimiento de la vulneración en ejercicio de sus facultades fiscalizadoras, debe realizar una mediación previa antes de denunciar al tribunal (Código del Trabajo, artículo 486, inciso sexto). El trabajador puede acudir voluntariamente a la Inspección para intentar una solución antes de demandar. La mediación suspende el plazo de 60 días para interponer la denuncia (artículo 168).

2. **Verificación del plazo de caducidad:** Contar los 60 días corridos desde la vulneración o desde el despido. Si hubo mediación ante la Inspección, descontar ese tiempo.

3. **Incompatibilidad con acción de protección:** Si se interpuso recurso de protección ante la Corte de Apelaciones por los mismos hechos (Constitución Política, artículo 20), no se puede presentar denuncia de tutela laboral (Código del Trabajo, artículo 485, inciso final). Verificar que no se haya deducido protección.

4. **Acumulación de acciones:** Si de los mismos hechos emanan otras acciones laborales (cobro de prestaciones, nulidad del despido), deben ejercerse conjuntamente en la misma denuncia. Si se demanda despido injustificado, indebido o improcedente, debe interponerse **subsidiariamente** (para el caso de que se rechace la tutela). El no ejercicio conjunto importa renuncia (artículo 489, inciso séptimo).

#### Tramitación paso a paso

##### Etapa 1: Presentación de la denuncia

- **Qué se hace:** El trabajador, la organización sindical o la Inspección del Trabajo presenta la denuncia ante el Juzgado de Letras del Trabajo competente, por escrito y en formato electrónico (si el tribunal opera con tramitación electrónica).

- **Quién:** El trabajador afectado (legitimado activo exclusivo si la vulneración ocurrió con ocasión del despido, artículo 489, inciso primero); cualquier trabajador u organización sindical que invoque un derecho o interés legítimo (artículo 486, inciso primero); la Inspección del Trabajo (artículo 486, incisos cuarto y quinto).

- **Plazo y cómputo:** 60 días corridos desde que se produjo la vulneración o desde la separación (despido). El plazo se suspende durante la mediación ante la Inspección del Trabajo y durante los feriados judiciales (artículo 168).

- **Norma:** Código del Trabajo, artículos 486, 489 y 490.

- **Si se omite:** Caducidad de la acción; el tribunal declarará inadmisible la denuncia de oficio o a petición de parte.

**Contenido de la denuncia (artículo 490):**

- Requisitos generales del artículo 446 del Código del Trabajo: individualización del denunciante y del denunciado, domicilio para notificaciones, hechos y fundamentos de derecho, peticiones concretas.
- **Enunciación clara y precisa de los hechos constitutivos de la vulneración alegada.**
- **Todos los antecedentes en los que se fundamente** (documentos, nómina de testigos).
- Si faltan estos requisitos, el tribunal concede un plazo fatal de **5 días hábiles** para incorporarlos.

##### Etapa 2: Examen de admisibilidad y primera resolución

- **Qué se hace:** El tribunal examina si la denuncia cumple los requisitos de admisibilidad (plazo de caducidad, competencia, requisitos formales). Si es admisible, dicta la primera resolución, que debe contener:
  - Orden de notificar al denunciado (empleador) personalmente o por cédula.
  - **Suspensión de los efectos del acto impugnado** (medida cautelar), de oficio o a petición de parte, si aparece de los antecedentes que se trata de lesiones de especial gravedad o que pueden causar efectos irreversibles, bajo apercibimiento de multa de 50 a 100 UTM (artículo 492).

- **Quién:** El juez del trabajo.

- **Plazo y cómputo:** El tribunal debe pronunciarse sobre la admisibilidad y dictar la primera resolución dentro de los días siguientes a la presentación de la denuncia (no hay plazo legal expreso; en la práctica, entre 1 y 5 días hábiles).

- **Norma:** Código del Trabajo, artículos 490, 492 y 446 (supletorio).

- **Si se omite:** Si el tribunal no dicta resolución, el denunciante puede solicitar que se provea el escrito (solicitud de "pronto despacho").

**Medida cautelar de suspensión de efectos (artículo 492):**

- Procede de oficio o a petición de parte.
- Requisitos: lesiones de especial gravedad o efectos irreversibles.
- Ejemplos: suspender un despido, restablecer al trabajador en su puesto, cesar actos de acoso laboral.
- Contra la resolución que decreta o rechaza la suspensión **no procede recurso alguno** (artículo 492, inciso segundo).

##### Etapa 3: Notificación al denunciado

- **Qué se hace:** El tribunal ordena notificar al empleador denunciado de la denuncia y de la primera resolución. La notificación debe ser **personal** (si es la primera notificación en el juicio) o por **cédula** (si ya fue notificado personalmente antes en la misma causa).

- **Quién:** Receptor judicial o funcionario del tribunal (si opera con notificación electrónica, por la OJV).

- **Plazo y cómputo:** La notificación debe practicarse con la anticipación suficiente para que el denunciado pueda contestar antes de la audiencia. En la práctica, se notifica dentro de los 3 a 5 días hábiles siguientes a la primera resolución.

- **Norma:** Código del Trabajo, artículo 446, en relación con el Código de Procedimiento Civil, artículos 40, 44 y 48.

- **Si se omite:** Si no se notifica al denunciado, no puede seguir el juicio; el denunciante debe solicitar que se practique la notificación. Si la notificación es defectuosa, el denunciado puede alegar nulidad procesal.

##### Etapa 4: Contestación de la denuncia (opcional para el denunciado)

- **Qué se hace:** El empleador denunciado puede contestar la denuncia por escrito, antes de la audiencia única. La contestación debe contener:
  - Exposición clara de los hechos y fundamentos de derecho.
  - **Explicación de los fundamentos de las medidas adoptadas y de su proporcionalidad** (carga probatoria del empleador, artículo 493).
  - Nómina de testigos (máximo seis).
  - Documentos en que se funde la defensa.

- **Quién:** El empleador denunciado, representado por abogado.

- **Plazo y cómputo:** Hasta antes de la audiencia única. No hay plazo legal expreso para presentar la contestación escrita; en la práctica, se presenta dentro de los 5 a 10 días hábiles siguientes a la notificación.

- **Norma:** Código del Trabajo, artículos 446 y 493.

- **Si se omite:** El empleador puede contestar oralmente en la audiencia única. Si no contesta ni comparece a la audiencia, se le tiene por rebelde (no se aplica la confesión ficta en materia laboral, pero su incomparecencia puede valorarse como indicio en su contra).

**Inversión de la carga de la prueba (artículo 493):**

- Si el denunciante aporta **indicios suficientes** de vulneración de derechos fundamentales, corresponde al empleador **explicar los fundamentos de las medidas adoptadas y de su proporcionalidad**.
- Esto no significa que el trabajador quede liberado de probar los hechos, sino que, acreditados indicios, el empleador debe justificar que su conducta fue legítima, necesaria y proporcional.

##### Etapa 5: Audiencia única (preparatoria y de juicio)

- **Qué se hace:** Se realiza una audiencia única que concentra las etapas de conciliación, contestación oral (si no hubo contestación escrita), prueba y sentencia. La audiencia se desarrolla en el siguiente orden:

  1. **Conciliación:** El juez llama a las partes a conciliación. Si hay acuerdo, se levanta acta y se pone término al juicio. El acuerdo tiene mérito ejecutivo.
  
  2. **Contestación oral:** Si el empleador no contestó por escrito, puede hacerlo oralmente en esta audiencia.
  
  3. **Recepción de la prueba:** Declaración de testigos, exhibición de documentos, informe pericial (si se decretó), absolución de posiciones (si se solicitó). El juez puede formular preguntas a los testigos y a las partes. La prueba se rinde en forma oral y se registra en audio.
  
  4. **Observaciones sobre la prueba:** Cada parte puede formular observaciones sobre la prueba rendida (alegatos breves).
  
  5. **Sentencia:** El juez puede dictar sentencia en la misma audiencia (al término de ella) o dentro de los **10 días hábiles** siguientes (no verificado en esta búsqueda). Si dicta sentencia en la audiencia, la lee en voz alta; si la dicta después, notifica a las partes por el estado diario o electrónicamente.

- **Quién:** El juez del trabajo, las partes (trabajador y empleador), sus abogados, testigos, peritos (si los hay).

- **Plazo y cómputo:** La audiencia debe realizarse dentro de los **15 días hábiles** siguientes a la notificación del denunciado (no verificado en esta búsqueda). La audiencia no puede suspenderse salvo por causa grave y justificada; en tal caso, se fija nueva fecha dentro de los 5 días hábiles siguientes (no verificado en esta búsqueda).

- **Norma:** Código del Trabajo, artículos 446 a 461 (procedimiento de aplicación general, supletorio).

- **Si se omite:** Si el denunciante no comparece a la audiencia, se tiene por desistido de la denuncia (abandono del procedimiento). Si el denunciado no comparece, se le tiene por rebelde y el juicio sigue adelante; su incomparecencia puede valorarse como indicio en su contra.

**Prueba:**

- **Carga de la prueba:** El denunciante debe acreditar los hechos constitutivos de la vulneración (indicios suficientes). El denunciado debe justificar la legitimidad, necesidad y proporcionalidad de su conducta (artículo 493).
- **Medios de prueba:** Testigos (máximo seis por parte), documentos, informes periciales, confesión, inspección personal del tribunal, presunciones judiciales.
- **Informe de la Inspección del Trabajo:** El tribunal puede requerir a la Inspección del Trabajo un informe sobre los hechos denunciados (artículo 486, inciso cuarto; artículo 489, inciso sexto). El informe tiene valor de informe pericial.
- **Valoración de la prueba:** El juez aprecia la prueba conforme a las reglas de la sana crítica (Código del Trabajo, artículo 456).

##### Etapa 6: Sentencia

- **Qué se hace:** El juez dicta sentencia definitiva, acogiendo o rechazando la denuncia. La sentencia debe contener:
  - Identificación de las partes.
  - Enunciación breve de los hechos y de las alegaciones de las partes.
  - Análisis de la prueba rendida.
  - Razonamiento jurídico: si hubo vulneración de derechos fundamentales, si el empleador justificó su conducta, si la medida fue proporcionada.
  - Decisión: acoge o rechaza la denuncia.
  - **Si acoge la denuncia:**
    - **Declaración de la vulneración** del derecho fundamental específico.
    - **Medidas reparatorias:** cese inmediato de la conducta vulneradora, reincorporación del trabajador (si procede), disculpas públicas, rectificación de documentos, etc.
    - **Indemnización de perjuicios:** El juez fija una indemnización por el daño moral y material causado. No hay tope legal, salvo en caso de despido (ver más abajo).
    - **Si la vulneración ocurrió con ocasión del despido (artículo 489):**
      - Indemnización sustitutiva del aviso previo (artículo 162, inciso cuarto del Código del Trabajo).
      - Indemnización por años de servicio (artículo 163).
      - Recargo del 50% al 100% sobre ambas indemnizaciones, si el despido fue injustificado (artículo 168).
      - **Indemnización adicional por vulneración de derechos fundamentales:** entre **6 y 11 meses de la última remuneración mensual**, fijada por el juez (artículo 489, inciso tercero).
      - **Si el despido fue discriminatorio grave (artículo 2°, inciso cuarto del Código del Trabajo):** El trabajador puede optar entre la reincorporación o las indemnizaciones. La opción se ejerce incidentalmente (artículo 489, inciso cuarto).
    - **Costas:** El empleador condenado debe pagar las costas del juicio (honorarios del abogado del trabajador, derechos del receptor, etc.), salvo que el juez estime que tuvo motivo plausible para litigar.

- **Quién:** El juez del trabajo.

- **Plazo y cómputo:** El juez puede dictar sentencia en la misma audiencia única o dentro de los **10 días hábiles** siguientes (no verificado en esta búsqueda).

- **Norma:** Código del Trabajo, artículos 456, 489, 493 y 495.

- **Si se omite:** Si el juez no dicta sentencia en el plazo, las partes pueden solicitar que se dicte ("pronto despacho"). La demora no anula el procedimiento.

**Funcionarios públicos:**

- Si el denunciante es un funcionario público (artículo 1°, inciso segundo del Código del Trabajo), y la denuncia es acogida con ocasión del despido, **no procede** el pago de las indemnizaciones de los artículos 162, inciso cuarto, y 163. En su lugar, el juez ordena el pago de una indemnización entre **6 y 11 meses de la última remuneración mensual**. Si el despido fue discriminatorio grave, el funcionario puede optar entre la indemnización o la reincorporación (artículo 489, inciso octavo).

##### Etapa 7: Notificación de la sentencia

- **Qué se hace:** El tribunal notifica la sentencia a las partes por el estado diario (si no comparecieron a la audiencia en que se dictó) o electrónicamente (si el tribunal opera con tramitación electrónica).

- **Quién:** El tribunal.

- **Plazo y cómputo:** La notificación se practica al día hábil siguiente de dictada la sentencia (si se dictó fuera de audiencia) o en la misma audiencia (si se dictó en ella).

- **Norma:** Código del Trabajo, artículo 446, en relación con el Código de Procedimiento Civil, artículo 50.

- **Si se omite:** Si no se notifica la sentencia, no corre el plazo para recurrir. Las partes pueden solicitar que se practique la notificación.

##### Etapa 8: Recursos (opcional)

- **Qué se hace:** La parte agraviada puede interponer recurso de nulidad ante la Corte de Apelaciones respectiva, dentro de los **10 días hábiles** siguientes a la notificación de la sentencia (no verificado en esta búsqueda). El recurso de nulidad procede por las causales del artículo 477 del Código del Trabajo (infracción de ley que influyó sustancialmente en lo dispositivo del fallo; errores de derecho en la apreciación de la prueba; etc.).

- **Quién:** La parte agraviada (trabajador o empleador), representada por abogado.

- **Plazo y cómputo:** **10 días hábiles** desde la notificación de la sentencia (no verificado en esta búsqueda).

- **Norma:** Código del Trabajo, artículos 477 a 482.

- **Si se omite:** Si no se interpone recurso de nulidad en el plazo, la sentencia queda firme y ejecutoriada.

**Tramitación del recurso de nulidad:**

1. Se interpone ante el tribunal que dictó la sentencia (Juzgado de Letras del Trabajo).
2. El tribunal lo eleva a la Corte de Apelaciones respectiva.
3. La Corte puede declararlo inadmisible (si no cumple requisitos formales), rechazarlo (si no concurren las causales) o acogerlo (anula la sentencia y dicta sentencia de reemplazo, o reenvía la causa al tribunal de origen para que dicte nueva sentencia).
4. Contra la sentencia de la Corte de Apelaciones que resuelve el recurso de nulidad, procede **recurso de unificación de jurisprudencia** ante la Corte Suprema, dentro de los **15 días hábiles** siguientes a la notificación (no verificado en esta búsqueda), solo si la sentencia es contraria a otra sentencia de la Corte Suprema o de otra Corte de Apelaciones (artículo 483 del Código del Trabajo).

##### Etapa 9: Cumplimiento de la sentencia

- **Qué se hace:** Una vez firme la sentencia (porque no se recurrió o porque se rechazaron los recursos), se procede a su cumplimiento. Si el empleador no cumple voluntariamente, el trabajador solicita el cumplimiento forzado:
  - **Indemnizaciones:** Se embargan y rematan bienes del empleador (ejecución de obligación de dar).
  - **Reincorporación:** El tribunal apercibe al empleador con multa o arresto (ejecución de obligación de hacer).
  - **Cese de la conducta vulneradora:** El tribunal apercibe al empleador con multa o arresto.

- **Quién:** El trabajador (solicita el cumplimiento), el tribunal (ordena el cumplimiento), el receptor judicial (practica el embargo).

- **Plazo y cómputo:** El trabajador puede solicitar el cumplimiento desde que la sentencia queda firme.

- **Norma:** Código del Trabajo, artículos 462 a 464 (ejecución de sentencias laborales); Código de Procedimiento Civil, Libro I, Título XIX (ejecución de resoluciones judiciales), supletorio.

- **Si se omite:** Si el trabajador no solicita el cumplimiento, la sentencia no se ejecuta. Si el empleador no cumple, el trabajador puede solicitar apremios (multa, arresto) en contra del representante legal del empleador.

#### Escritos clave

##### 1. Denuncia de tutela laboral

**Suma:**

"En lo principal: Denuncia de tutela laboral por vulneración de derechos fundamentales. Primer otrosí: Acompaña documentos. Segundo otrosí: Solicita suspensión de efectos del acto impugnado. Tercer otrosí: Patrocinio y poder."

**Estructura y contenido mínimo:**

- Tribunal competente.
- Individualización del denunciante: nombre completo, RUT, domicilio, profesión u oficio.
- Individualización del denunciado: razón social o nombre, RUT, domicilio, representante legal.
- Relación laboral: fecha de ingreso, cargo, remuneración, fecha de término (si corresponde).
- **Hechos constitutivos de la vulneración:** Relato claro, preciso y cronológico de los hechos que configuran la vulneración del derecho fundamental. Indicar fechas, lugares, personas involucradas, testigos.
- **Derecho fundamental vulnerado:** Identificar el derecho específico (artículo 19 de la Constitución Política): vida e integridad física y psíquica (N° 1), igualdad ante la ley y no discriminación (N° 2), honra y vida privada (N° 4), inviolabilidad de comunicaciones privadas (N° 5), libertad de conciencia (N° 6), libertad de trabajo (N° 12 y N° 16).
- **Fundamentos de derecho:** Citar el artículo 485 del Código del Trabajo y las normas constitucionales vulneradas. Explicar por qué la conducta del empleador fue arbitraria, desproporcionada o sin justificación suficiente.
- **Indicios de la vulneración:** Enumerar los antecedentes que constituyen indicios suficientes (documentos, testigos, hechos notorios).
- **Peticiones concretas:**
  - Que se acoja la denuncia.
  - Que se declare la vulneración del derecho fundamental [especificar].
  - Que se ordene el cese inmediato de la conducta vulneradora.
  - Que se condene al empleador al pago de una indemnización por daño moral y material [indicar monto estimado o solicitar que se fije por el tribunal].
  - Si corresponde (despido): que se ordene el pago de las indemnizaciones de los artículos 162, 163 y 168, y de la indemnización adicional del artículo 489 (entre 6 y 11 meses).
  - Si corresponde (despido discriminatorio grave): que se declare el derecho del trabajador a optar entre la reincorporación o las indemnizaciones.
  - Que se condene en costas al empleador.
  - Que se suspenda el efecto del acto impugnado (medida cautelar del artículo 492).
- **Nómina de testigos:** Nombre completo, RUT, domicilio, profesión u oficio (máximo seis).
- **Patrocinio y poder:** Individualización del abogado patrocinante y del mandatario judicial (puede ser el mismo abogado).

**Modelo:**

---

**S.J.L. del Trabajo de [ciudad]**

**[Nombre completo del trabajador]**, RUT [número]-[dígito verificador], [profesión u oficio], domiciliado en [calle, número, comuna, ciudad], a US. respetuosamente digo:

Que, en representación de mi mandante, y conforme a lo dispuesto en los artículos 485 y siguientes del Código del Trabajo, vengo en deducir **DENUNCIA DE TUTELA LABORAL POR VULNERACIÓN DE DERECHOS FUNDAMENTALES** en contra de **[razón social del empleador]**, RUT [número]-[dígito verificador], representada legalmente por don/doña [nombre del representante legal], domiciliada en [calle, número, comuna, ciudad], por los hechos y fundamentos que paso a exponer:

**I. RELACIÓN LABORAL**

Mi representado ingresó a prestar servicios para la empresa denunciada el [día/mes/año], desempeñándose en el cargo de [cargo], con una remuneración mensual de $[monto] (o [número] UF). La relación laboral se mantuvo vigente hasta el [día/mes/año], fecha en que fue despedido [o: se mantiene vigente a la fecha].

**II. HECHOS**

[Relato claro, preciso y cronológico de los hechos que configuran la vulneración. Ejemplo:]

El día [fecha], el supervisor de mi representado, don [nombre], le ordenó trabajar en día domingo sin pago de horas extraordinarias, bajo amenaza de despido si se negaba. Mi representado se negó, invocando su derecho al descanso dominical (artículo 35 del Código del Trabajo). El día [fecha], la empresa le notificó su despido, invocando como causal "necesidades de la empresa" (artículo 161 del Código del Trabajo), sin que existiera tal necesidad. El despido fue una represalia por haber ejercido su derecho a negarse a trabajar en condiciones ilegales.

[Agregar todos los hechos relevantes, con fechas, lugares, testigos, documentos.]

**III. DERECHO FUNDAMENTAL VULNERADO**

La conducta de la empresa denunciada vulneró el derecho fundamental de mi representado a la **libertad de trabajo y a la libre elección del trabajo** (Constitución Política, artículo 19 N° 16), y su derecho a **no ser objeto de represalias por ejercer sus derechos laborales** (Código del Trabajo, artículo 485, inciso tercero).

El despido fue una represalia directa y desproporcionada por haber ejercido un derecho legítimo (negarse a trabajar en día domingo sin pago de horas extraordinarias). La causal invocada ("necesidades de la empresa") fue un pretexto, pues la empresa no acreditó ninguna necesidad real. El despido limitó el pleno ejercicio del derecho fundamental de mi representado sin justificación suficiente, en forma arbitraria y desproporcionada.

**IV. INDICIOS DE LA VULNERACIÓN**

Constituyen indicios suficientes de la vulneración los siguientes antecedentes:

1. Correo electrónico del supervisor [nombre], de fecha [fecha], en que ordena trabajar en día domingo bajo amenaza de despido (se acompaña en el primer otrosí).
2. Carta de despido de fecha [fecha], que invoca una causal genérica sin fundamento real (se acompaña en el primer otrosí).
3. Declaración de los testigos [nombres], quienes presenciaron la amenaza del supervisor.
4. Ausencia de cualquier antecedente que justifique la "necesidad de la empresa" invocada en la carta de despido.

**V. FUNDAMENTOS DE DERECHO**

Código del Trabajo, artículos 485, 486, 489, 493. Constitución Política, artículo 19 N° 16.

**VI. PETICIONES**

Por tanto, y en conformidad a lo expuesto,

**RUEGO A US.:**

1. Tenga por interpuesta denuncia de tutela laboral en contra de [razón social del empleador].
2. Acoja la denuncia y declare que la empresa denunciada vulneró el derecho fundamental de mi representado a la libertad de trabajo y a no ser objeto de represalias.
3. Condene a la empresa denunciada al pago de:
   a) Indemnización sustitutiva del aviso previo (artículo 162, inciso cuarto del Código del Trabajo): $[monto] o [número] UF.
   b) Indemnización por años de servicio (artículo 163): $[monto] o [número] UF.
   c) Recargo del 50% al 100% sobre ambas indemnizaciones (artículo 168).
   d) Indemnización adicional por vulneración de derechos fundamentales (artículo 489, inciso tercero): entre 6 y 11 meses de la última remuneración mensual, a determinar por US.
4. Condene en costas a la empresa denunciada.
5. Cite a las partes a audiencia única, conforme al artículo 446 del Código del Trabajo.

**PRIMER OTROSÍ:** Acompaño los siguientes documentos:
1. Contrato de trabajo de fecha [fecha].
2. Liquidaciones de sueldo de los últimos [número] meses.
3. Carta de despido de fecha [fecha].
4. Correo electrónico del supervisor [nombre], de fecha [fecha].
5. [Otros documentos].

**SEGUNDO OTROSÍ:** Solicito a US., conforme al artículo 492 del Código del Trabajo, que decrete la **suspensión de los efectos del despido** y ordene la reincorporación provisional de mi representado a su puesto de trabajo, bajo apercibimiento de multa, por tratarse de una lesión de especial gravedad que puede causar efectos irreversibles (pérdida de ingresos, daño a la salud mental, imposibilidad de encontrar nuevo empleo).

**TERCER OTROSÍ:** Conforme al artículo 1° de la Ley 18.120, vengo en conferir **patrocinio** al abogado don/doña [nombre completo del abogado], RUT [número]-[dígito verificador], domiciliado en [calle, número, comuna, ciudad], y **poder** para representar a mi mandante en este juicio, con todas las facultades del inciso primero del artículo 7° del Código de Procedimiento Civil.

**CUARTO OTROSÍ:** Nómina de testigos:
1. [Nombre completo], RUT [número]-[dígito verificador], [profesión u oficio], domiciliado en [dirección].
2. [Nombre completo], RUT [número]-[dígito verificador], [profesión u oficio], domiciliado en [dirección].
[Hasta seis testigos.]

**QUINTO OTROSÍ:** Para los efectos del artículo 486, inciso cuarto, del Código del Trabajo, solicito a US. que requiera a la Dirección Regional del Trabajo [nombre de la región] un informe sobre los hechos denunciados.

---

[Firma del abogado patrocinante]  
[Nombre y RUT del abogado]

---

##### 2. Contestación de la denuncia (empleador)

**Suma:**

"En lo principal: Contesta denuncia de tutela laboral. Primer otrosí: Acompaña documentos. Segundo otrosí: Nómina de testigos."

**Estructura y contenido mínimo:**

- Tribunal.
- Individualización del denunciado (empleador).
- Exposición de los hechos desde la perspectiva del empleador.
- **Explicación de los fundamentos de las medidas adoptadas y de su proporcionalidad** (artículo 493): justificar que la conducta fue legítima, necesaria y proporcional; que no hubo vulneración de derechos fundamentales; que la medida (despido, sanción, etc.) tuvo una causa real y suficiente.
- Impugnación de los indicios aportados por el denunciante.
- Fundamentos de derecho.
- Peticiones: que se rechace la denuncia, con costas.
- Nómina de testigos.

**Modelo:**

---

**S.J.L. del Trabajo de [ciudad]**  
**RIT [letra]-[número]-[año]**  
**RUC [número]-[dígito verificador]**

**[Razón social del empleador]**, RUT [número]-[dígito verificador], representada legalmente por don/doña [nombre del representante legal], domiciliada en [dirección], en autos RIT [letra]-[número]-[año], caratulados "[nombre del trabajador] con [razón social del empleador]", sobre tutela laboral, a US. respetuosamente digo:

Que, dentro del plazo legal, vengo en **CONTESTAR LA DENUNCIA DE TUTELA LABORAL** deducida en mi contra por don/doña [nombre del trabajador], por los fundamentos que paso a exponer:

**I. HECHOS**

[Relato de los hechos desde la perspectiva del empleador. Ejemplo:]

Es efectivo que el día [fecha] se puso término a la relación laboral con el denunciante, invocando la causal del artículo 161 del Código del Trabajo ("necesidades de la empresa"). Sin embargo, el denunciante omite señalar que la empresa atravesaba una grave crisis económica, que obligó a reducir la dotación de personal en un [porcentaje]%. El despido del denunciante obedeció exclusivamente a esta necesidad real y acreditada, y no a represalia alguna por haber ejercido sus derechos.

[Agregar todos los hechos relevantes, con fechas, documentos, testigos.]

**II. FUNDAMENTOS DE LAS MEDIDAS ADOPTADAS Y DE SU PROPORCIONALIDAD**

Conforme al artículo 493 del Código del Trabajo, corresponde a mi representada explicar los fundamentos de las medidas adoptadas y de su proporcionalidad.

1. **Legitimidad:** El despido se fundó en una causal legal (artículo 161 del Código del Trabajo: "necesidades de la empresa"). La empresa atravesaba una crisis económica acreditada [adjuntar balances, estados financieros, informes de auditoría, etc.].

2. **Necesidad:** La reducción de personal era necesaria para evitar el cierre de la empresa y la pérdida de todos los puestos de trabajo. Se despidió a [número] trabajadores, entre ellos el denunciante.

3. **Proporcionalidad:** El despido fue la última medida adoptada, después de agotar otras alternativas (reducción de jornada, suspensión de contrataciones, etc.). Se pagó al denunciante todas las indemnizaciones legales (artículos 162 y 163 del Código del Trabajo).

4. **Ausencia de represalia:** El despido no tuvo relación alguna con el hecho de que el denunciante se negara a trabajar en día domingo. Esa negativa ocurrió [número] meses antes del despido, y no fue sancionada en su momento. La causal invocada fue real y suficiente.

**III. IMPUGNACIÓN DE LOS INDICIOS**

El denunciante no ha aportado indicios suficientes de vulneración de derechos fundamentales:

1. El correo electrónico del supervisor [nombre] no contiene amenaza alguna de despido; solo solicitaba disponibilidad para trabajar en caso de emergencia, con pago de horas extraordinarias.

2. La carta de despido fundamenta adecuadamente la causal invocada, haciendo referencia a la crisis económica de la empresa (se acompaña informe financiero en el primer otrosí).

3. Los testigos ofrecidos por el denunciante no presenciaron ninguna amenaza, pues tal amenaza nunca existió.

**IV. FUNDAMENTOS DE DERECHO**

Código del Trabajo, artículos 161, 162, 163, 485, 493. Constitución Política, artículo 19 N° 16.

**V. PETICIONES**

Por tanto,

**RUEGO A US.:**

1. Tenga por contestada la denuncia de tutela laboral.
2. Rechace la denuncia, por no haberse acreditado vulneración alguna de derechos fundamentales.
3. Condene en costas al denunciante.

**PRIMER OTROSÍ:** Acompaño los siguientes documentos:
1. Balance general de la empresa al [fecha].
2. Estado de resultados del ejercicio [año].
3. Informe de auditoría externa de fecha [fecha].
4. Nómina de trabajadores despedidos en el período [fecha a fecha].
5. Comprobante de pago de indemnizaciones al denunciante.

**SEGUNDO OTROSÍ:** Nómina de testigos:
1. [Nombre completo], RUT [número]-[dígito verificador], [profesión u oficio], domiciliado en [dirección].
2. [Nombre completo], RUT [número]-[dígito verificador], [profesión u oficio], domiciliado en [dirección].
[Hasta seis testigos.]

---

[Firma del abogado del empleador]  
[Nombre y RUT del abogado]

---

##### 3. Solicitud de suspensión de efectos del acto impugnado (medida cautelar)

**Suma:**

"En lo principal: Solicita suspensión de efectos del acto impugnado. Otrosí: Acompaña documentos."

**Estructura y contenido mínimo:**

- Tribunal.
- Individualización del solicitante.
- Hechos que configuran lesión de especial gravedad o efectos irreversibles.
- Fundamento: artículo 492 del Código del Trabajo.
- Petición: que se decrete la suspensión de efectos del acto impugnado (despido, sanción, traslado, etc.), bajo apercibimiento de multa.

**Modelo:**

---

**S.J.L. del Trabajo de [ciudad]**  
**RIT [letra]-[número]-[año]**

**[Nombre completo del trabajador]**, en autos RIT [letra]-[número]-[año], a US. respetuosamente digo:

Que, conforme al artículo 492 del Código del Trabajo, vengo en solicitar que US. decrete la **SUSPENSIÓN DE LOS EFECTOS DEL ACTO IMPUGNADO**, por los fundamentos que paso a exponer:

**I. HECHOS**

Mi representado fue despedido el día [fecha], en represalia por haber ejercido su derecho a [especificar]. El despido le ha causado una lesión de especial gravedad: ha perdido su única fuente de ingresos, tiene [número] hijos menores a su cargo, y padece de [enfermedad], lo que le impide encontrar nuevo empleo de inmediato. De no suspenderse el despido, los efectos serán irreversibles: pérdida de su vivienda (arrienda y no puede pagar), deterioro de su salud mental (se acompaña certificado médico), imposibilidad de alimentar a su familia.

**II. FUNDAMENTO**

El artículo 492 del Código del Trabajo faculta al tribunal para decretar, de oficio o a petición de parte, la suspensión de los efectos del acto impugnado, cuando aparezca de los antecedentes que se trata de lesiones de especial gravedad o que la vulneración puede causar efectos irreversibles.

En este caso, concurren ambos supuestos: la lesión es de especial gravedad (pérdida del único sustento familiar) y los efectos son irreversibles (pérdida de la vivienda, daño a la salud).

**III. PETICIÓN**

Por tanto,

**RUEGO A US.:**

Decrete la suspensión de los efectos del despido de mi representado y ordene su reincorporación provisional a su puesto de trabajo, con pago de remuneraciones, bajo apercibimiento de multa de 50 a 100 UTM en caso de incumplimiento.

**OTROSÍ:** Acompaño certificado médico de fecha [fecha], que acredita el estado de salud de mi representado.

---

[Firma del abogado]  
[Nombre y RUT del abogado]

---

#### Tabla de plazos

| Etapa | Plazo | Cómputo | Norma | Consecuencia |
|-------|-------|---------|-------|--------------|
| Presentación de la denuncia | 60 días | Corridos, desde la vulneración o desde el despido; se suspende durante mediación ante Inspección del Trabajo y feriados judiciales | Código del Trabajo, artículos 486, 489, 168 | Caducidad de la acción; inadmisibilidad |
| Incorporación de requisitos faltantes en la denuncia | 5 días | Hábiles, desde que el tribunal concede el plazo | Código del Trabajo, artículo 490 | Inadmisibilidad de la denuncia |
| Audiencia única | 15 días (no verificado en esta búsqueda) | Hábiles, desde la notificación del denunciado | Código del Trabajo, artículo 446 (supletorio) | Demora en la tramitación; no anula el procedimiento |
| Sentencia | 10 días (no verificado en esta búsqueda) | Hábiles, desde la audiencia única (si no se dictó en la audiencia) | Código del Trabajo, artículo 456 (supletorio) | Demora; no anula el procedimiento |
| Recurso de nulidad | 10 días (no verificado en esta búsqueda) | Hábiles, desde la notificación de la sentencia | Código del Trabajo, artículo 477 | Sentencia queda firme |
| Recurso de unificación de jurisprudencia | 15 días (no verificado en esta búsqueda) | Hábiles, desde la notificación de la sentencia de la Corte de Apelaciones | Código del Trabajo, artículo 483 | Sentencia de la Corte de Apelaciones queda firme |

#### Recursos

| Recurso | Contra qué resolución | Plazo | Tribunal ante el que se interpone | Tribunal que lo conoce | Efectos |
|---------|----------------------|-------|-----------------------------------|------------------------|---------|
| **Reposición** | Resolución que declara inadmisible la denuncia o que rechaza la suspensión de efectos | 3 días hábiles (no verificado en esta búsqueda) | Juzgado de Letras del Trabajo que dictó la resolución | El mismo tribunal | Suspensivo (si se interpone con apelación subsidiaria) |
| **Apelación subsidiaria** | Resolución que declara inadmisible la denuncia (junto con reposición) | 3 días hábiles (no verificado en esta búsqueda) | Juzgado de Letras del Trabajo | Corte de Apelaciones respectiva | Suspensivo |
| **Nulidad** | Sentencia definitiva | 10 días hábiles (no verificado en esta búsqueda) | Juzgado de Letras del Trabajo que dictó la sentencia | Corte de Apelaciones respectiva | Suspensivo (la sentencia no se ejecuta hasta que se resuelva el recurso) |
| **Unificación de jurisprudencia** | Sentencia de la Corte de Apelaciones que resuelve el recurso de nulidad | 15 días hábiles (no verificado en esta búsqueda) | Corte de Apelaciones que dictó la sentencia | Corte Suprema | Suspensivo |

**Nota importante:** Contra la resolución que decreta o rechaza la suspensión de efectos del acto impugnado (artículo 492) **no procede recurso alguno**.

#### Errores frecuentes y estrategia

**Errores frecuentes:**

1. **Dejar pasar el plazo de 60 días:** Es el error más grave. El plazo es de caducidad, no de prescripción: no se interrumpe ni se suspende, salvo por la mediación ante la Inspección del Trabajo y los feriados judiciales. Contar los días corridos desde la vulneración o desde el despido, y presentar la denuncia con margen de seguridad.

2. **No aportar indicios suficientes:** La denuncia debe acompañar todos los antecedentes que acrediten indicios de vulneración (documentos, testigos, hechos notorios). Si no hay indicios, el tribunal puede rechazar la denuncia de plano o el empleador no tendrá carga de justificar su conducta.

3. **No identificar correctamente el derecho fundamental vulnerado:** La tutela laboral protege solo los derechos fundamentales del artículo 485 del Código del Trabajo (artículo 19 de la Constitución Política, números 1°, 4°, 5°, 6°, 12° y 16°, y el artículo 2° del Código del Trabajo sobre no discriminación). No procede para vulneraciones de derechos laborales que no sean derechos fundamentales (por ejemplo, falta de pago de horas extraordinarias, que se reclama por el procedimiento de aplicación general).

4. **No ejercer conjuntamente las acciones que emanan de los mismos hechos:** Si de los mismos hechos emanan tutela laboral y despido injustificado, deben ejercerse en la misma denuncia, interponiendo el despido injustificado en forma subsidiaria. Si no se hace, se renuncia a la acción no ejercida (artículo 489, inciso séptimo).

5. **No solicitar la suspensión de efectos del acto impugnado:** Si la vulneración es grave o puede causar efectos irreversibles (por ejemplo, un despido que deja al trabajador sin ingresos), solicitar la medida cautelar del artículo 492 en la denuncia o en escrito separado. Si no se solicita, el tribunal puede no decretarla de oficio.

6. **No preparar adecuadamente a los testigos:** Los testigos deben declarar sobre hechos concretos que presenciaron o conocen directamente. No pueden declarar sobre opiniones, rumores o hechos que no presenciaron. Preparar a los testigos para que declaren de manera clara, precisa y coherente.

7. **No justificar adecuadamente la proporcionalidad de la medida (empleador):** El empleador debe explicar por qué la medida adoptada (despido, sanción, traslado) fue legítima, necesaria y proporcional. No basta con invocar una causal legal; hay que acreditar que la causal fue real, que la medida fue la menos gravosa posible y que no hubo otra alternativa.

**Estrategia:**

1. **Para el trabajador:**
   - Actuar rápido: presentar la denuncia dentro del plazo de 60 días, con margen de seguridad.
   - Reunir todos los antecedentes posibles antes de demandar: documentos, correos electrónicos, mensajes, testigos, informes médicos.
   - Solicitar la suspensión de efectos del acto impugnado si la vulneración es grave o puede causar efectos irreversibles.
   - Si hubo mediación ante la Inspección del Trabajo, acompañar el acta de mediación frustrada (acredita que se intentó una solución previa y suspende el plazo de caducidad).
   - Si el despido fue discriminatorio grave, evaluar si conviene más la reincorporación o las indemnizaciones. La reincorporación puede ser difícil de ejecutar si el empleador se resiste; las indemnizaciones son más seguras.

2. **Para el empleador:**
   - Documentar todas las decisiones que puedan afectar derechos fundamentales: despidos, sanciones, traslados, cambios de jornada, etc. Guardar correos electrónicos, actas de reuniones, informes de desempeño, etc.
   - Antes de adoptar una medida que pueda afectar derechos fundamentales, evaluar si es legítima, necesaria y proporcional. Consultar con un abogado laboralista.
   - Si se recibe una denuncia de tutela laboral, contestarla dentro del plazo y aportar todos los antecedentes que justifiquen la medida adoptada. No confiar en que el tribunal rechazará la denuncia por falta de pruebas del trabajador: el empleador tiene la carga de justificar su conducta si el trabajador aporta indicios.
   - Evaluar la posibilidad de conciliar en la audiencia única, si la vulneración fue leve o si hay riesgo de condena a indemnizaciones altas.

#### Lista de verificación

- [ ] Verificar que la vulneración alegada afecta un derecho fundamental del artículo 485 del Código del Trabajo (artículo 19 de la Constitución Política, números 1°, 4°, 5°, 6°, 12° y 16°, o artículo 2° del Código del Trabajo sobre no discriminación).
- [ ] Contar el plazo de 60 días corridos desde la vulneración o desde el despido. Descontar el tiempo de mediación ante la Inspección del Trabajo y los feriados judiciales.
- [ ] Reunir todos los antecedentes que acrediten indicios de vulneración: documentos, correos electrónicos, mensajes, testigos, informes médicos, etc.
- [ ] Verificar que no se interpuso recurso de protección por los mismos hechos (incompatibilidad del artículo 485, inciso final).
- [ ] Si de los mismos hechos emanan otras acciones laborales (despido injustificado, cobro de prestaciones), ejercerlas conjuntamente en la misma denuncia. Si se demanda despido injustificado, interponerlo en forma subsidiaria.
- [ ] Redactar la denuncia con los requisitos del artículo 490: enunciación clara y precisa de los hechos, acompañar todos los antecedentes.
- [ ] Preparar nómina de testigos (máximo seis): nombre completo, RUT, domicilio, profesión u oficio.
- [ ] Si la vulneración es grave o puede causar efectos irreversibles, solicitar la suspensión de efectos del acto impugnado (artículo 492).
- [ ] Conferir patrocinio y poder al abogado (Ley 18.120).
- [ ] Presentar la denuncia en el tribunal competente (Juzgado de Letras del Trabajo del domicilio del empleador o del lugar donde se prestaron los servicios, a elección del trabajador).
- [ ] Si el tribunal opera con tramitación electrónica, presentar la denuncia a través de la Oficina Judicial Virtual (OJV).
- [ ] Verificar que se notificó al empleador personalmente o por cédula.
- [ ] Preparar a los testigos para la audiencia única: deben declarar sobre hechos concretos que presenciaron o conocen directamente.
- [ ] Asistir a la audiencia única con todos los documentos y testigos. Llevar copias de los documentos para exhibir.
- [ ] Si se llega a conciliación, verificar que el acuerdo contemple todas las pretensiones (indemnizaciones, cese de la conducta, disculpas, etc.).
- [ ] Si se dicta sentencia favorable, verificar que contemple todas las indemnizaciones solicitadas (artículos 162, 163, 168, 489).
- [ ] Una vez firme la sentencia, solicitar su cumplimiento si el empleador no cumple voluntariamente.
- [ ] Si el empleador no paga las indemnizaciones, solicitar el embargo y remate de bienes.
- [ ] Si el empleador no cumple la orden de reincorporación o de cese de la conducta, solicitar apremios (multa, arresto).

#### Qué verificar antes de actuar

- **Plazo de caducidad:** El plazo de 60 días corridos es fatal. Verificar la fecha exacta de la vulneración o del despido, y contar los días corridos, descontando el tiempo de mediación ante la Inspección del Trabajo y los feriados judiciales. Si hay duda sobre la fecha de inicio del plazo, presentar la denuncia con margen de seguridad.

- **Derecho fundamental vulnerado:** Verificar que la vulneración alegada afecta un derecho fundamental del artículo 485 del Código del Trabajo. No todos los incumplimientos laborales son vulneraciones de derechos fundamentales. Por ejemplo, la falta de pago de horas extraordinarias no es una vulneración de derechos fundamentales (se reclama por el procedimiento de aplicación general); en cambio, el despido en represalia por reclamar el pago de horas extraordinarias sí puede ser una vulneración del derecho a no ser objeto de represalias (artículo 485, inciso tercero).

- **Incompatibilidad con acción de protección:** Verificar que no se interpuso recurso de protección por los mismos hechos. Si se interpuso, no se puede presentar denuncia de tutela laboral (artículo 485, inciso final).

- **Acumulación de acciones:** Verificar si de los mismos hechos emanan otras acciones laborales (despido injustificado, cobro de prestaciones). Si es así, deben ejercerse conjuntamente en la misma denuncia. Si se demanda despido injustificado, debe interponerse en forma subsidiaria (artículo 489, inciso séptimo).

- **Tribunal competente:** Verificar que el tribunal elegido es competente (Juzgado de Letras del Trabajo del domicilio del empleador o del lugar donde se prestaron los servicios, a elección del trabajador). Si el tribunal no es competente, declarará su incompetencia de oficio o a petición de parte.

- **Tramitación electrónica:** Verificar en el sitio web del Poder Judicial (https://www.pjud.cl) si el tribunal respectivo opera con tramitación electrónica (Ley 20.886). Si es así, la presentación de escritos, notificaciones y acceso al expediente deben hacerse a través de la Oficina Judicial Virtual (OJV, https://oficinajudicialvirtual.pjud.cl).

- **Autos acordados aplicables:** Verificar si la Corte Suprema o la Corte de Apelaciones respectiva han dictado autos acordados sobre tramitación de causas laborales (por ejemplo, sobre funcionamiento de la OJV, sobre suspensión de plazos por feriados, etc.). Consultar en el sitio web del Poder Judicial.

- **Vigencia de normas:** Verificar en LeyChile (https://www.bcn.cl/leychile) la versión vigente del Código del Trabajo y de las normas aplicables. Las reformas recientes pueden haber cambiado plazos, requisitos o procedimientos.

- **Criterios del tribunal:** Consultar jurisprudencia reciente del tribunal respectivo o de la Corte de Apelaciones sobre tutela laboral, para conocer los criterios que aplican en casos similares. Revisar fallos publicados en el sitio web del Poder Judicial o en bases de datos jurisprudenciales.

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### g10-estafa — procedimiento: Querella por el delito de estafa

<details><summary>Material enviado al modelo (12 normas, 0 fallos o dictámenes, 0 artículos de doctrina; 2 normas descartadas por materia)</summary>

- Código Penal, Artículo 467
- Código Penal, Artículo 468
- Código Penal, Artículo 473
- Código Penal, Artículo 469
- Código Penal, Artículo 470
- Código Procesal Penal, Artículo 111
- Código Procesal Penal, Artículo 113
- Código Procesal Penal, Artículo 110
- Código Procesal Penal, Artículo 112
- Código Procesal Penal, Artículo 114
- Código Procesal Penal, Artículo 259
- Código Procesal Penal, Artículo 260
- ~~Ley 7.760, modifica las disposiciones que se indican del codigo de procedimiento civil, Artículo 550~~ (materia procesal_civil ajena a penal/procesal_penal)
- ~~DL 830, codigo tributario, Artículo 196~~ (materia tributario ajena a penal/procesal_penal)

Versión anterior (main):
- Código Penal, Artículo 468
- Código Penal, Artículo 469
- Código Penal, Artículo 470
- Código Procesal Penal, Artículo 107
- Código Procesal Penal, Artículo 108
- Código Procesal Penal, Artículo 109
- Código Procesal Penal, Artículo 110
- Código Procesal Penal, Artículo 111
- Código Procesal Penal, Artículo 112
- Código Procesal Penal, Artículo 113
- Código Procesal Penal, (artículo no identificado)
- Código Penal, (artículo no identificado)

</details>

#### Ficha del procedimiento

| Aspecto | Detalle |
|---------|---------|
| **Tipo de procedimiento** | Penal: querella criminal por delito de estafa (acción penal pública) |
| **Normas aplicables** | Código Penal, artículos 467 a 473 (estafa y otras defraudaciones); Código Procesal Penal, artículos 111 a 114, 259, 260 y siguientes |
| **Tribunal competente** | **Materia:** Juzgado de Garantía. **Territorio:** donde se cometió el delito o donde fue aprehendido el imputado (artículo 157 CPP). **Cuantía:** no aplica en materia penal |
| **Comparecencia** | Ley 18.120: patrocinio de abogado habilitado obligatorio desde la primera presentación; poder judicial si actúa mandatario. Querellante debe designar abogado patrocinante y mandatario judicial (si lo hubiere) con medio de notificación electrónico (artículo 113 letra b CPP) |
| **Prescripción de la acción penal** | Depende de la pena: si la pena es presidio menor en su grado máximo (3 años y 1 día a 5 años), prescribe en 5 años; si es presidio menor en grado medio (541 días a 3 años), en 5 años; si es presidio menor en grado mínimo (61 a 540 días), en 5 años (artículo 94 y 95 CP). Corre desde la comisión del delito; se suspende desde que el procedimiento se dirige contra el imputado (artículo 96 CP) |
| **Tramitación electrónica** | Ley 20.886: presentación electrónica obligatoria en tribunales con Oficina Judicial Virtual habilitada. Verificar en el tribunal respectivo si está operativa para causas penales. Notificaciones por estado diario electrónico y correo electrónico al medio designado |

#### Antes de demandar

**Antecedentes y documentos necesarios:**

- Identificación completa del querellante (RUT, domicilio, profesión u oficio) y de su abogado patrocinante (nombre, RUT, domicilio, correo electrónico).
- Identificación del querellado: nombre completo, RUT, profesión, domicilio o residencia. Si se ignoran estos datos, igual se puede presentar querella solicitando la investigación (artículo 113 letra c CPP).
- Relato detallado de los hechos: fecha (día, mes, año, hora si se sabe), lugar, circunstancias del engaño, disposición patrimonial realizada por la víctima, perjuicio sufrido.
- Documentos que acrediten el engaño y el perjuicio: contratos, correos electrónicos, mensajes, transferencias bancarias, comprobantes de pago, facturas, boletas, escrituras, promesas, poderes, estados de cuenta, peritajes de valor, testigos presenciales.
- Cálculo del monto del perjuicio en UTM (para determinar la pena aplicable según artículo 467 CP): obtener el valor de la UTM a la fecha del delito y convertir el perjuicio en pesos a UTM.
- Verificar si el Ministerio Público ya inició investigación por denuncia previa: consultar en Fiscalía si existe carpeta fiscal. Si existe, la querella se adhiere a esa investigación; si no, la querella inicia el procedimiento.

**Gestiones previas:**

- **No hay mediación previa obligatoria** en delitos de acción penal pública como la estafa.
- **Denuncia ante el Ministerio Público o Carabineros:** no es requisito previo para querellarse, pero es común que la víctima primero denuncie. La querella puede presentarse directamente ante el Juzgado de Garantía sin denuncia previa.
- **Medidas cautelares reales:** si se teme que el querellado oculte o enajene bienes, se puede solicitar en la querella que el Ministerio Público pida al juez de garantía medidas cautelares reales (embargo, prohibición de celebrar actos y contratos, retención de fondos) conforme artículos 157 y siguientes CPP.
- **Acción civil:** decidir si se ejercerá conjuntamente la acción civil restitutoria o indemnizatoria en el proceso penal (artículo 59 CPP) o se reservará para juicio civil posterior. Si se ejerce en la querella, debe cumplir requisitos del artículo 60 CPP.

#### Tramitación paso a paso

##### Etapa 1: Presentación de la querella ante el Juzgado de Garantía

- **Qué se hace:** Se presenta escrito de querella criminal cumpliendo los requisitos del artículo 113 CPP: designación del tribunal, individualización del querellante con medio de notificación electrónico del abogado, individualización del querellado (o descripción si se ignora), relación circunstanciada del hecho con lugar y fecha, diligencias solicitadas al Ministerio Público, firma del querellante o de otra persona a su ruego.
- **Quién:** El querellante (víctima, su representante legal o heredero testamentario, o cualquier persona capaz domiciliada en la provincia respecto de delitos terroristas o de funcionarios públicos que afecten derechos constitucionales o probidad pública, según artículo 111 CPP), a través de abogado patrocinante.
- **Plazo y cómputo:** Puede presentarse en cualquier momento mientras el fiscal no declare cerrada la investigación (artículo 112 CPP). No hay plazo fatal desde la comisión del delito, salvo la prescripción de la acción penal. Días hábiles para actuaciones judiciales.
- **Norma:** Artículos 111, 112, 113 CPP.
- **Si se omite:** Si no se presenta querella, la víctima puede solo denunciar y el Ministerio Público investiga de oficio, pero la víctima no tendrá la calidad de querellante ni los derechos que ello confiere (intervenir en la investigación, adherirse a la acusación, recurrir). Si se presenta fuera de plazo (después de cerrada la investigación), será declarada inadmisible (artículo 114 letra a CPP).

##### Etapa 2: Examen de admisibilidad por el juez de garantía

- **Qué se hace:** El juez de garantía revisa si la querella cumple los requisitos formales del artículo 113 CPP y si no incurre en causales de inadmisibilidad del artículo 114 CPP (extemporaneidad, falta de requisitos no subsanados en 3 días, hechos no constitutivos de delito, responsabilidad penal extinguida, persona no autorizada por ley).
- **Quién:** Juez de garantía, de oficio.
- **Plazo y cómputo:** No hay plazo legal expreso para el examen, pero debe ser breve (en la práctica, dentro de 5 a 10 días hábiles desde la presentación).
- **Norma:** Artículos 113, 114 CPP.
- **Si se omite:** Si el juez no examina y admite a tramitación, la querella queda en suspenso y no produce efectos. Si el juez detecta defectos formales, otorga 3 días hábiles para subsanarlos; si el querellante no subsana, la querella es declarada inadmisible (artículo 114 letra b CPP).

**Bifurcación:**

- **Si la querella es admitida a tramitación:** el juez dicta resolución "Admítase a tramitación" y ordena remitirla al Ministerio Público (artículo 112 inciso 2° CPP). Pasa a Etapa 3.
- **Si la querella es declarada inadmisible:** el juez dicta resolución fundada declarando inadmisible la querella por alguna causal del artículo 114 CPP. El querellante puede apelar (artículo 370 CPP, recurso de apelación contra resoluciones que pusieren término al procedimiento o hicieren imposible su prosecución). Si no apela o la apelación es rechazada, la querella no produce efectos y el querellante pierde la calidad de interviniente.
- **Si el juez otorga plazo para subsanar defectos:** el querellante tiene 3 días hábiles desde la notificación para presentar escrito subsanando (por ejemplo, completar individualización del querellado, precisar hechos, agregar firma). Si subsana, el juez admite a tramitación; si no, declara inadmisible.

##### Etapa 3: Remisión de la querella al Ministerio Público e inicio o continuación de la investigación

- **Qué se hace:** El juez de garantía remite la querella admitida al Ministerio Público (Fiscalía Local competente). El fiscal incorpora al querellante como interviniente en la carpeta fiscal (si ya existe investigación por denuncia previa) o inicia investigación (si no existe). El querellante puede ejercer los derechos del artículo 261 CPP: solicitar diligencias, proponer peritajes, acceder a los registros de la investigación (salvo los declarados secretos), querellarse adhesivamente si otro ya se querelló.
- **Quién:** Juez de garantía (remite), Ministerio Público (investiga), querellante (ejerce derechos).
- **Plazo y cómputo:** El juez remite "de inmediato(en la práctica, dentro de 24 a 48 horas). El Ministerio Público no tiene plazo legal para iniciar diligencias, pero debe investigar (no verificado en esta búsqueda)con la prontitud que el caso requiera" (artículo 180 CPP). El plazo máximo de investigación es de 2 años desde formalización (artículo 247 CPP), salvo prórroga judicial.
- **Norma:** Artículos 112 inciso 2°, 180, 183, 247, 261 CPP.
- **Si se omite:** Si el juez no remite la querella, el querellante puede solicitar que se cumpla la resolución. Si el Ministerio Público no investiga o archiva provisionalmente sin fundamento, el querellante puede solicitar al juez de garantía que fije audiencia para revisar la legalidad del archivo (artículo 167 CPP) o forzar la formalización (artículo 186 CPP).

##### Etapa 4: Formalización de la investigación (si procede)

- **Qué se hace:** El fiscal, cuando estime que la investigación proporciona fundamento serio para el enjuiciamiento del imputado, puede formalizarla comunicándole en audiencia ante el juez de garantía que se está investigando por determinados hechos constitutivos de delito. La formalización no es obligatoria, pero es requisito para solicitar medidas cautelares personales o reales, para que corra el plazo de cierre de investigación, y para que el querellante pueda forzar la acusación.
- **Quién:** Fiscal (solicita audiencia de formalización), juez de garantía (cita y preside audiencia), imputado y su defensor (comparecen), querellante (puede asistir y solicitar diligencias o medidas cautelares).
- **Plazo y cómputo:** No hay plazo legal para que el fiscal formalice desde que admite la querella; depende del avance de la investigación. El querellante puede forzar la formalización si han transcurrido más de 6 meses desde la denuncia o querella sin que el fiscal formalice, solicitando audiencia judicial (artículo 186 CPP). Días hábiles.
- **Norma:** Artículos 186, 229, 230, 231 CPP.
- **Si se omite:** Si el fiscal no formaliza, la investigación puede continuar sin plazo fatal (salvo prescripción), pero el querellante no puede forzar acusación ni solicitar medidas cautelares. Si el fiscal decide no perseverar (artículo 248 CPP) sin haber formalizado, el querellante puede reclamar ante las autoridades del Ministerio Público (artículo 248 inciso 2° CPP).

**Bifurcación:**

- **Si el fiscal formaliza:** se fija plazo de investigación (máximo 2 años, artículo 247 CPP). Pasa a Etapa 5.
- **Si el fiscal no formaliza y archiva provisionalmente:** el querellante puede solicitar audiencia para revisar el archivo (artículo 167 CPP). Si el juez acoge, el fiscal debe reabrir; si rechaza, el archivo subsiste pero el querellante puede insistir si aparecen nuevos antecedentes.
- **Si el fiscal decide no perseverar en procedimiento no formalizado:** el querellante puede reclamar ante el Fiscal Regional dentro de 10 días (artículo 248 inciso 2° CPP). Si el Fiscal Regional confirma, el querellante puede solicitar reapertura si aparecen nuevos antecedentes (artículo 248 inciso final CPP).

##### Etapa 5: Desarrollo de la investigación formalizada

- **Qué se hace:** El Ministerio Público practica las diligencias de investigación solicitadas por el querellante en la querella o posteriormente (artículo 183 CPP): declaraciones de testigos, peritajes contables o de valoración del perjuicio, incautación de documentos, análisis de cuentas bancarias, reconstitución de escena, etc. El querellante puede solicitar diligencias por escrito al fiscal; si éste las rechaza, puede reclamar ante las autoridades del Ministerio Público (artículo 183 inciso 3° CPP). El querellante accede a los registros de la investigación (salvo secreto, artículo 182 CPP).
- **Quién:** Fiscal (dirige la investigación), policías (ejecutan diligencias), peritos (emiten informes), querellante (solicita diligencias y accede a registros), imputado y defensor (pueden solicitar diligencias y acceder a registros no secretos).
- **Plazo y cómputo:** Plazo máximo de investigación formalizada: 2 años desde la formalización, prorrogables por el juez hasta 6 meses más por una sola vez (artículo 247 CPP). Días corridos. Si vence el plazo sin que el fiscal cierre la investigación, el juez puede declararla cerrada de oficio o a petición del querellante o imputado (artículo 247 inciso 2° CPP).
- **Norma:** Artículos 180 a 184, 247 CPP.
- **Si se omite:** Si el fiscal no practica diligencias esenciales solicitadas por el querellante, éste puede reclamar ante el Fiscal Regional (artículo 183 inciso 3° CPP). Si vence el plazo de investigación sin cierre, el juez puede cerrarla de oficio, lo que obliga al fiscal a acusar, solicitar sobreseimiento o comunicar decisión de no perseverar (artículo 247 inciso 3° CPP).

##### Etapa 6: Cierre de la investigación por el fiscal

- **Qué se hace:** El fiscal, una vez agotadas las diligencias, comunica por escrito al juez de garantía el cierre de la investigación, notificando a todos los intervinientes (imputado, defensor, querellante, víctima). Desde la notificación, los intervinientes tienen 10 días hábiles para solicitar diligencias que consideren necesarias para el esclarecimiento de los hechos (artículo 257 CPP). Vencido ese plazo, el fiscal tiene otros 10 días hábiles para deducir acusación, solicitar sobreseimiento definitivo o temporal, o comunicar decisión de no perseverar (artículo 248 CPP).
- **Quién:** Fiscal (cierra investigación), juez de garantía (notifica), querellante e imputado (pueden solicitar diligencias en 10 días).
- **Plazo y cómputo:** 10 días hábiles desde la notificación del cierre para solicitar diligencias (artículo 257 inciso 1° CPP). Luego, 10 días hábiles para que el fiscal acuse, sobresea o no persevere (artículo 247 inciso 3° CPP). Días hábiles, cuentan desde el día siguiente a la notificación.
- **Norma:** Artículos 247, 248, 257 CPP.
- **Si se omite:** Si el querellante no solicita diligencias en 10 días, precluye su derecho (artículo 257 inciso 2° CPP). Si el fiscal no acusa, sobresee o no persevera en 10 días, el querellante puede solicitar al juez que aperciba al fiscal o fije nuevo plazo; si el fiscal persiste en la omisión, el querellante puede forzar la acusación (artículo 258 CPP).

**Bifurcación:**

- **Si el querellante solicita diligencias en 10 días:** el juez resuelve en audiencia si las acoge (las ordena practicar al fiscal) o las rechaza (por impertinentes o dilatorias). Si las acoge, se reabre la investigación por el tiempo necesario; luego el fiscal cierra nuevamente. Pasa a Etapa 7.
- **Si el querellante no solicita diligencias o el juez las rechaza:** vencen los 10 días y el fiscal tiene otros 10 para acusar, sobresear o no perseverar. Pasa a Etapa 7.

##### Etapa 7: Decisión del fiscal: acusación, sobreseimiento o no perseverar

- **Qué se hace:** El fiscal, dentro de 10 días hábiles desde vencido el plazo para solicitar diligencias, presenta escrito de acusación (artículo 259 CPP), solicita sobreseimiento definitivo o temporal (artículo 250 CPP), o comunica decisión de no perseverar en el procedimiento (artículo 248 CPP).
- **Quién:** Fiscal.
- **Plazo y cómputo:** 10 días hábiles desde vencido el plazo de 10 días para solicitar diligencias (artículo 247 inciso 3° CPP). Días hábiles.
- **Norma:** Artículos 247, 248, 250, 259 CPP.
- **Si se omite:** Si el fiscal no presenta acusación, sobreseimiento o no perseverar en 10 días, el querellante puede solicitar al juez que aperciba al fiscal o fije nuevo plazo (artículo 247 inciso 3° CPP). Si el fiscal persiste, el querellante puede forzar la acusación (artículo 258 CPP).

**Bifurcación:**

- **Si el fiscal acusa:** presenta escrito de acusación cumpliendo requisitos del artículo 259 CPP (individualización del acusado y defensor, relación de hechos, calificación jurídica, circunstancias modificatorias, participación, preceptos legales, medios de prueba, pena solicitada). El juez notifica a todos los intervinientes y cita a audiencia de preparación del juicio oral dentro de 25 a 35 días (artículo 260 CPP). Pasa a Etapa 8.
- **Si el fiscal solicita sobreseimiento:** el juez cita a audiencia para resolver (artículo 250 inciso 2° CPP). El querellante puede oponerse y, si el juez decreta el sobreseimiento, puede apelar (artículo 253 CPP). Si el sobreseimiento es rechazado, el fiscal debe acusar o el querellante puede forzar acusación (artículo 258 CPP). Pasa a Etapa 8 (si se rechaza sobreseimiento) o fin del procedimiento (si se decreta sobreseimiento firme).
- **Si el fiscal comunica decisión de no perseverar:** el querellante puede adherirse a la acusación del fiscal (si otro fiscal acusa) o formular acusación particular dentro de 10 días (artículo 258 CPP). Si el querellante acusa, el procedimiento continúa con el querellante como acusador; si no, el juez puede decretar sobreseimiento (artículo 248 inciso 3° CPP). Pasa a Etapa 8 (si el querellante acusa) o fin del procedimiento (si no acusa y se sobresee).

##### Etapa 8: Acusación particular del querellante (si el fiscal no acusa o el querellante se adhiere)

- **Qué se hace:** Si el fiscal no acusa o solicita sobreseimiento, el querellante puede formular acusación particular dentro de 10 días hábiles desde la notificación de la decisión del fiscal (artículo 258 inciso 1° CPP). La acusación particular debe cumplir los mismos requisitos del artículo 259 CPP. Si el fiscal acusa, el querellante puede adherirse a la acusación del fiscal o formular acusación particular ampliando hechos o calificaciones (artículo 261 letra c CPP).
- **Quién:** Querellante, a través de su abogado.
- **Plazo y cómputo:** 10 días hábiles desde la notificación de la comunicación del fiscal de no perseverar o de la resolución que rechaza el sobreseimiento (artículo 258 inciso 1° CPP). Días hábiles, desde el día siguiente a la notificación.
- **Norma:** Artículos 258, 259, 261 letra c CPP.
- **Si se omite:** Si el querellante no acusa en 10 días, precluye su derecho y el juez puede decretar sobreseimiento definitivo (artículo 258 inciso 2° CPP). Si el querellante acusa, el procedimiento continúa con él como acusador único o junto al fiscal.

##### Etapa 9: Audiencia de preparación del juicio oral

- **Qué se hace:** El juez de garantía cita a audiencia de preparación del juicio oral dentro de 25 a 35 días desde la notificación de la acusación (artículo 260 CPP). En la audiencia, el juez verifica la acusación, el acusado contesta (puede allanarse, oponer excepciones de previo y especial pronunciamiento, o defenderse de fondo), el querellante y el fiscal pueden adherirse o ampliar la acusación, se ofrecen pruebas, se resuelven exclusiones de prueba, se fijan convenciones probatorias, y el juez dicta auto de apertura del juicio oral, determinando hechos, pruebas admitidas y tribunal competente (Tribunal de Juicio Oral en lo Penal).
- **Quién:** Juez de garantía (preside), fiscal, querellante, acusado y defensor (comparecen obligatoriamente).
- **Plazo y cómputo:** Audiencia debe realizarse entre 25 y 35 días desde la notificación de la acusación (artículo 260 CPP). Días corridos.
- **Norma:** Artículos 260, 263 a 277 CPP.
- **Si se omite:** Si el acusado no comparece injustificadamente, se puede decretar su detención o prisión preventiva (artículo 33 CPP). Si el defensor no comparece, se designa defensor penal público de turno. Si el querellante no comparece, se entiende que abandona la querella (artículo 120 CPP). Si el juez no dicta auto de apertura, el procedimiento queda suspendido; el querellante puede solicitar que se dicte.

**Bifurcación:**

- **Si el acusado se allana totalmente:** reconoce los hechos y la participación, el juez puede dictar sentencia condenatoria de inmediato o remitir al Tribunal de Juicio Oral para que dicte sentencia (artículo 406 CPP, procedimiento abreviado si se cumplen requisitos). Pasa a Etapa 11 (sentencia).
- **Si el acusado opone excepciones de previo y especial pronunciamiento:** (incompetencia, litis pendencia, cosa juzgada, falta de autorización para proceder criminalmente, extinción de responsabilidad penal), el juez las resuelve en la misma audiencia o en audiencia posterior. Si acoge, sobresee o declara inadmisible la acusación; si rechaza, continúa la audiencia. Pasa a Etapa 10 (si rechaza) o fin del procedimiento (si acoge y sobresee).
- **Si el acusado se defiende de fondo:** niega los hechos o la participación, se ofrecen pruebas de cargo y descargo, el juez excluye pruebas impertinentes, dilatorias o ilícitas, fija convenciones probatorias (hechos no controvertidos), y dicta auto de apertura del juicio oral. Pasa a Etapa 10.

##### Etapa 10: Juicio oral ante el Tribunal de Juicio Oral en lo Penal

- **Qué se hace:** El Tribunal de Juicio Oral en lo Penal (colegiado, 3 jueces) fija fecha de audiencia de juicio oral dentro de 60 días desde recibido el auto de apertura (artículo 281 CPP). En la audiencia, se rinde la prueba (testigos, peritos, documentos), el fiscal y el querellante exponen sus alegatos de apertura y clausura, el defensor alega, y el tribunal delibera y dicta sentencia definitiva absolutoria o condenatoria.
- **Quién:** Tribunal de Juicio Oral en lo Penal (3 jueces), fiscal, querellante, acusado y defensor (comparecen obligatoriamente), testigos y peritos (declaran).
- **Plazo y cómputo:** Audiencia de juicio oral debe fijarse dentro de 60 días desde recibido el auto de apertura (artículo 281 inciso 2° CPP). Días corridos. La audiencia es continua, pero puede suspenderse hasta por 10 días por causales del artículo 283 CPP.
- **Norma:** Artículos 281 a 351 CPP.
- **Si se omite:** Si el acusado no comparece injustificadamente, se suspende el juicio y se decreta su detención o prisión preventiva. Si el defensor no comparece, se designa defensor penal público de turno. Si el querellante no comparece, se entiende que abandona la acusación particular (artículo 120 CPP). Si el tribunal no dicta sentencia, el juicio queda inconcluso; las partes pueden solicitar que se dicte.

##### Etapa 11: Sentencia definitiva

- **Qué se hace:** El Tribunal de Juicio Oral en lo Penal, al término de la audiencia de juicio oral, delibera en secreto y dicta sentencia definitiva absolutoria o condenatoria. La sentencia se lee en la misma audiencia o dentro de 24 horas (artículo 343 CPP). Si es condenatoria, fija la pena, las costas, la indemnización civil (si se ejerció acción civil), y las consecuencias accesorias (comiso, inhabilitaciones). Si es absolutoria, absuelve al acusado y ordena su libertad inmediata si está privado de libertad.
- **Quién:** Tribunal de Juicio Oral en lo Penal (3 jueces, por mayoría).
- **Plazo y cómputo:** Sentencia debe dictarse y leerse en la misma audiencia de juicio oral o dentro de 24 horas (artículo 343 CPP). Días corridos.
- **Norma:** Artículos 339 a 351 CPP.
- **Si se omite:** Si el tribunal no dicta sentencia en 24 horas, las partes pueden solicitar que se dicte. Si persiste la omisión, pueden reclamar ante la Corte de Apelaciones por denegación de justicia.

**Bifurcación:**

- **Si la sentencia es condenatoria:** el acusado puede recurrir de nulidad (artículo 372 CPP) dentro de 10 días. El querellante puede recurrir de nulidad solo si la sentencia acoge una causal de nulidad que él no invocó o si se le causa agravio (artículo 352 CPP). Pasa a Etapa 12 (si se recurre) o Etapa 13 (si no se recurre y queda firme).
- **Si la sentencia es absolutoria:** el querellante puede recurrir de nulidad dentro de 10 días (artículo 372 CPP). El fiscal también puede recurrir. Pasa a Etapa 12 (si se recurre) o fin del procedimiento (si no se recurre y queda firme).

##### Etapa 12: Recurso de nulidad ante la Corte de Apelaciones o Corte Suprema

- **Qué se hace:** La parte agraviada (acusado, querellante o fiscal) interpone recurso de nulidad dentro de 10 días desde la notificación de la sentencia (artículo 372 CPP). El recurso se presenta ante el tribunal que dictó la sentencia, que lo eleva a la Corte de Apelaciones (si se invoca causal del artículo 373 CPP: vicios del procedimiento) o a la Corte Suprema (si se invoca causal del artículo 373 letra b CPP: infracción de ley que influyó sustancialmente en lo dispositivo). La Corte resuelve en cuenta o previa vista de la causa, acogiendo o rechazando el recurso. Si acoge, anula la sentencia y ordena nuevo juicio oral o dicta sentencia de reemplazo.
- **Quién:** Parte recurrente (acusado, querellante o fiscal), Corte de Apelaciones o Corte Suprema (conoce y falla).
- **Plazo y cómputo:** 10 días hábiles desde la notificación de la sentencia para interponer el recurso (artículo 372 inciso 2° CPP). Días hábiles, desde el día siguiente a la notificación.
- **Norma:** Artículos 372 a 391 CPP.
- **Si se omite:** Si no se recurre en 10 días, la sentencia queda firme y ejecutoriada (artículo 174 CPC, aplicable supletoriamente). Si se recurre fuera de plazo, el recurso es declarado inadmisible.

**Bifurcación:**

- **Si la Corte acoge el recurso de nulidad:** anula la sentencia y ordena nuevo juicio oral ante tribunal no inhabilitado (artículo 385 CPP), o dicta sentencia de reemplazo si la causal lo permite (artículo 385 inciso 2° CPP). Pasa a Etapa 10 (nuevo juicio) o Etapa 13 (si dicta sentencia de reemplazo firme).
- **Si la Corte rechaza el recurso de nulidad:** la sentencia queda firme y ejecutoriada. Pasa a Etapa 13.

##### Etapa 13: Cumplimiento de la sentencia condenatoria firme

- **Qué se hace:** Una vez firme la sentencia condenatoria, el Juzgado de Garantía que dictó el auto de apertura (o el Tribunal de Juicio Oral, según el caso) remite los antecedentes a Gendarmería de Chile para el cumplimiento de la pena privativa de libertad, o al tribunal competente para el cumplimiento de penas sustitutivas (remisión condicional, reclusión parcial, libertad vigilada, prestación de servicios, tratamiento de rehabilitación). Si se ejerció acción civil, el querellante puede solicitar el cumplimiento de la indemnización en el mismo procedimiento penal (artículo 472 CPP) o en juicio ejecutivo civil.
- **Quién:** Juzgado de Garantía o Tribunal de Juicio Oral (remite antecedentes), Gendarmería de Chile (ejecuta pena), querellante (solicita cumplimiento de indemnización civil).
- **Plazo y cómputo:** No hay plazo legal para remitir antecedentes; debe ser inmediato una vez firme la sentencia. La prescripción de la pena comienza a correr desde que la sentencia queda firme (artículo 97 CP).
- **Norma:** Artículos 466 a 475 CPP (ejecución de sentencias penales), artículo 97 CP (prescripción de la pena).
- **Si se omite:** Si el tribunal no remite antecedentes, el querellante o el Ministerio Público pueden solicitar que se cumpla. Si Gendarmería no ejecuta la pena, el condenado puede solicitar que se compute el tiempo o se revise la ejecución ante el Juzgado de Garantía (artículo 466 CPP).

#### Escritos clave

##### 1. Querella criminal

**Suma:**
"En lo principal: Interpone querella criminal por delito de estafa; en el primer otrosí: Solicita medidas cautelares reales; en el segundo otrosí: Patrocinio y poder; en el tercer otrosí: Acompaña documentos."

**Estructura:**
1. Encabezado: tribunal, individualización del querellante y abogado patrocinante con medio de notificación electrónico.
2. Exposición: relación circunstanciada de los hechos (fecha, lugar, engaño, disposición patrimonial, perjuicio), individualización del querellado, calificación jurídica (artículo 467 o 468 o 470 CP según el caso).
3. Peticiones: que se admita a tramitación la querella, se remita al Ministerio Público, se practiquen diligencias específicas (declaraciones de testigos, peritajes, incautaciones), se decreten medidas cautelares reales si procede.
4. Otrosíes: patrocinio y poder, acompañamiento de documentos, solicitud de acción civil si se ejerce.

**Contenido mínimo:**
- Designación del Juzgado de Garantía competente.
- Nombre, apellido, profesión u oficio, domicilio del querellante, RUT.
- Nombre, RUT, domicilio, correo electrónico del abogado patrocinante.
- Nombre, apellido, profesión u oficio, residencia del querellado (o descripción si se ignora).
- Relación circunstanciada del hecho: lugar, año, mes, día, hora (si se sabe), descripción del engaño (qué se dijo o hizo para engañar), disposición patrimonial (qué entregó o hizo la víctima), perjuicio (monto en pesos y en UTM).
- Calificación jurídica: artículo 467 CP (estafa simple), artículo 468 CP (estafa calificada por uso de nombre fingido, poder supuesto, etc.), artículo 470 CP (apropiación indebida, abuso de firma en blanco, etc.), según corresponda.
- Diligencias solicitadas: declaración de testigos (individualizados), peritaje contable o de valoración, incautación de documentos, análisis de cuentas bancarias, etc.
- Firma del querellante o de otra persona a su ruego.

**Modelo:**

---

**JUZGADO DE GARANTÍA DE [CIUDAD]**

**[Nombre completo del querellante]**, [profesión u oficio], RUT [número], domiciliado en [dirección, comuna], a US. respetuosamente digo:

**En lo principal:** Interpongo querella criminal por delito de estafa; **en el primer otrosí:** Solicito medidas cautelares reales; **en el segundo otrosí:** Patrocinio y poder; **en el tercer otrosí:** Acompaño documentos.

**I. INDIVIDUALIZACIÓN DEL QUERELLANTE**

Nombre: [Nombre completo del querellante]  
RUT: [número]  
Profesión u oficio: [profesión]  
Domicilio: [dirección, comuna]  
Abogado patrocinante: [Nombre del abogado], RUT [número], domicilio [dirección], correo electrónico [correo@ejemplo.cl]

**II. INDIVIDUALIZACIÓN DEL QUERELLADO**

Nombre: [Nombre completo del querellado]  
RUT: [número] (si se conoce)  
Profesión u oficio: [profesión] (si se conoce)  
Residencia: [dirección, comuna] (si se conoce)

**III. RELACIÓN CIRCUNSTANCIADA DE LOS HECHOS**

El día [día] de [mes] de [año], aproximadamente a las [hora] horas, en [lugar, dirección, comuna], el querellado [nombre del querellado] me engañó haciéndome creer que [descripción del engaño: por ejemplo, "era propietario de un inmueble ubicado en [dirección] y que tenía facultades para venderlo", o "que invertiría el dinero en un negocio rentable que me daría retornos de [porcentaje]% mensual", etc.].

Para ello, el querellado [descripción de las acciones del querellado: por ejemplo, "me mostró documentos falsos que aparentaban ser una escritura de dominio", o "me presentó un contrato de inversión con membrete de una empresa inexistente", etc.].

Engañado por estas afirmaciones, yo [descripción de la disposición patrimonial: por ejemplo, "le entregué la suma de $[monto] en efectivo", o "transferí a su cuenta bancaria N° [número] del Banco [nombre] la suma de $[monto]", o "firmé un pagaré a su favor por $[monto]", etc.], lo que hice el día [día] de [mes] de [año].

Posteriormente, descubrí que [descripción del descubrimiento del engaño: por ejemplo, "el inmueble no era de su propiedad sino de un tercero", o "la empresa no existía y el dinero nunca fue invertido", o "el querellado desapareció y no respondió mis llamadas ni mensajes", etc.], por lo que sufrí un perjuicio patrimonial de $[monto en pesos], equivalente a [monto] UTM (valor UTM de [mes/año]: $[valor]).

**IV. CALIFICACIÓN JURÍDICA**

Los hechos descritos constituyen el delito de estafa previsto y sancionado en el artículo [467 o 468 o 470, según corresponda] del Código Penal, por cuanto el querellado, mediante engaño, provocó un error en mi persona, haciéndome incurrir en una disposición patrimonial consistente en [entregar dinero/firmar documento/transferir fondos], en perjuicio mío, para obtener un provecho patrimonial para sí.

El perjuicio causado asciende a [monto] UTM, por lo que corresponde la pena de [indicar el tramo del artículo 467 CP según el monto].

**V. DILIGENCIAS SOLICITADAS AL MINISTERIO PÚBLICO**

Solicito respetuosamente que el Ministerio Público practique las siguientes diligencias de investigación:

1. Declaración del querellado [nombre del querellado] sobre los hechos denunciados.
2. Declaración de los testigos [nombre, apellido, profesión, domicilio de cada testigo], quienes presenciaron [indicar qué presenciaron].
3. Peritaje contable para determinar el destino de los fondos transferidos a la cuenta bancaria N° [número] del Banco [nombre] a nombre del querellado.
4. Peritaje de valoración del perjuicio patrimonial sufrido.
5. Incautación de los documentos [descripción: contrato, escritura, correos electrónicos, mensajes] que obran en poder del querellado.
6. Solicitud de información bancaria al Banco [nombre] sobre movimientos de la cuenta N° [número] del querellado entre [fecha] y [fecha].
7. Cualquier otra diligencia que el Ministerio Público estime pertinente para el esclarecimiento de los hechos.

**VI. PETICIONES**

Por tanto, y en mérito de lo expuesto,

**RUEGO A US.:**

1. Tenga por interpuesta querella criminal en contra de [nombre del querellado] por el delito de estafa previsto en el artículo [número] del Código Penal.
2. Admita a tramitación la presente querella y la remita al Ministerio Público para que inicie o continúe la investigación.
3. Ordene al Ministerio Público practicar las diligencias solicitadas en el capítulo V de esta presentación.

**PRIMER OTROSÍ:** Solicito que se decreten las siguientes medidas cautelares reales respecto de los bienes del querellado [nombre], conforme a los artículos 157 y siguientes del Código Procesal Penal:

1. Prohibición de celebrar actos y contratos sobre el inmueble ubicado en [dirección, comuna], inscrito a fojas [número], N° [número], del Registro de Propiedad del Conservador de Bienes Raíces de [ciudad], del año [año].
2. Retención de fondos de la cuenta bancaria N° [número] del Banco [nombre] a nombre del querellado, hasta por la suma de $[monto].

Fundamento: existe riesgo de que el querellado enajene u oculte sus bienes para burlar el eventual pago de la responsabilidad civil derivada del delito.

**SEGUNDO OTROSÍ:** Designo abogado patrocinante a [nombre del abogado], RUT [número], domicilio [dirección, comuna], correo electrónico [correo@ejemplo.cl], y confiero poder judicial a [nombre del mandatario, si lo hay], RUT [número], domicilio [dirección], correo electrónico [correo@ejemplo.cl], en los términos del artículo 1° de la Ley 18.120.

**TERCER OTROSÍ:** Acompaño en [número] fojas útiles los siguientes documentos:

1. Copia de cédula de identidad del querellante.
2. Contrato de [descripción] suscrito con el querellado el [fecha].
3. Comprobante de transferencia bancaria por $[monto] del [fecha].
4. Correos electrónicos intercambiados con el querellado entre [fecha] y [fecha].
5. [Otros documentos pertinentes].

**CUARTO OTROSÍ:** Ejerzo acción civil restitutoria e indemnizatoria en contra del querellado [nombre], solicitando:

1. La restitución de la suma de $[monto] indebidamente apropiada.
2. Indemnización de perjuicios por daño emergente de $[monto] y lucro cesante de $[monto].
3. Costas de la causa.

Fundamento: artículos 59 y 60 del Código Procesal Penal.

[Ciudad], [día] de [mes] de [año].

_________________________  
[Firma del querellante]

_________________________  
[Nombre y firma del abogado patrocinante]

---

##### 2. Solicitud de diligencias después del cierre de la investigación

**Suma:**
En lo principal: Solicita diligencias conforme artículo 257 CPP. (no verificado en esta búsqueda)

**Estructura:**
1. Encabezado: tribunal, rol de la causa, individualización del querellante.
2. Exposición: se ha notificado el cierre de la investigación, se solicitan diligencias necesarias para el esclarecimiento de los hechos dentro del plazo de 10 días del artículo 257 CPP.
3. Peticiones: que se ordene al Ministerio Público practicar las diligencias solicitadas.

**Contenido mínimo:**
- Referencia al cierre de la investigación notificado.
- Individualización de cada diligencia solicitada (testigo, peritaje, documento).
- Fundamento de la pertinencia de cada diligencia.
- Solicitud expresa de que se ordene al fiscal practicarlas.

**Modelo:**

---

**JUZGADO DE GARANTÍA DE [CIUDAD]**

**RUC N° [número]**  
**RIT N° [número]-[año]**

**[Nombre del querellante]**, querellante en autos, a US. respetuosamente digo:

**En lo principal:** Solicito diligencias conforme artículo 257 del Código Procesal Penal.

Con fecha [día] de [mes] de [año] fui notificado del cierre de la investigación dispuesto por el Ministerio Público. Dentro del plazo de 10 días hábiles que establece el artículo 257 del Código Procesal Penal, solicito respetuosamente que se ordene al Ministerio Público practicar las siguientes diligencias necesarias para el esclarecimiento de los hechos:

1. **Declaración del testigo [nombre, apellido, RUT, domicilio]**, quien presenció [descripción de lo que presenció: por ejemplo, "la entrega del dinero al querellado el día [fecha] en [lugar]"]. Esta diligencia es pertinente porque [fundamento: por ejemplo, "corroborará la existencia de la disposición patrimonial y el engaño previo"].

2. **Peritaje grafológico** sobre la firma estampada en el documento [descripción del documento] acompañado en la carpeta fiscal, para determinar si corresponde a la firma del querellado. Esta diligencia es pertinente porque el querellado ha negado haber suscrito dicho documento.

3. **Solicitud de información** a la empresa [nombre de la empresa] sobre la existencia de la supuesta inversión ofrecida por el querellado. Esta diligencia es pertinente porque permitirá acreditar que la inversión era ficticia.

Estas diligencias no fueron practicadas durante la investigación y son esenciales para acreditar los elementos del tipo penal de estafa.

**POR TANTO,**

**RUEGO A US.:**

Tenga por solicitadas las diligencias indicadas y ordene al Ministerio Público practicarlas antes de formular acusación o solicitar sobreseimiento.

[Ciudad], [día] de [mes] de [año].

_________________________  
[Nombre y firma del abogado patrocinante]

---

##### 3. Acusación particular del querellante

**Suma:**
"En lo principal: Formula acusación particular; en el primer otrosí: Ofrece prueba; en el segundo otrosí: Solicita medidas para el juicio oral."

**Estructura:**
1. Encabezado: tribunal, rol, individualización del querellante y del acusado.
2. Exposición: el Ministerio Público no acusó o solicitó sobreseimiento, el querellante ejerce su derecho a acusar conforme artículo 258 CPP.
3. Acusación: cumplir requisitos del artículo 259 CPP (individualización del acusado y defensor, relación de hechos, calificación jurídica, circunstancias modificatorias, participación, preceptos legales, medios de prueba, pena solicitada).
4. Peticiones: que se admita la acusación, se cite a audiencia de preparación del juicio oral.

**Contenido mínimo:**
- Individualización del acusado y su defensor (nombre, RUT, domicilio).
- Relación circunstanciada de los hechos atribuidos (fecha, lugar, conducta).
- Calificación jurídica (artículo del Código Penal).
- Circunstancias modificatorias (agravantes, atenuantes, si las hay).
- Participación (autor, cómplice, encubridor).
- Preceptos legales aplicables.
- Medios de prueba: lista de testigos (nombre, apellido, profesión, domicilio, puntos sobre los que declararán), peritos (nombre, título, puntos del peritaje), documentos.
- Pena solicitada (presidio, multa, inhabilitaciones).
- Acción civil (si se ejerce): monto de la indemnización, fundamento.

**Modelo:**

---

**JUZGADO DE GARANTÍA DE [CIUDAD]**

**RUC N° [número]**  
**RIT N° [número]-[año]**

**[Nombre del querellante]**, querellante en autos, a US. respetuosamente digo:

**En lo principal:** Formulo acusación particular en contra de [nombre del acusado]; **en el primer otrosí:** Ofrezco prueba; **en el segundo otrosí:** Solicito medidas para el juicio oral.

Con fecha [día] de [mes] de [año], el Ministerio Público comunicó su decisión de no perseverar en el procedimiento [o: solicitó sobreseimiento definitivo]. En ejercicio del derecho que me confiere el artículo 258 del Código Procesal Penal, formulo acusación particular en los siguientes términos:

**I. INDIVIDUALIZACIÓN DEL ACUSADO Y SU DEFENSOR**

Acusado: [Nombre completo del acusado], RUT [número], [profesión u oficio], domiciliado en [dirección, comuna].

Defensor: [Nombre del defensor], RUT [número], Defensor Penal Público [o: abogado particular], domicilio [dirección], correo electrónico [correo@ejemplo.cl].

**II. RELACIÓN CIRCUNSTANCIADA DE LOS HECHOS**

El día [día] de [mes] de [año], aproximadamente a las [hora] horas, en [lugar, dirección, comuna], el acusado [nombre] engañó a [nombre del querellante] haciéndole creer que [descripción del engaño].

Para ello, el acusado [descripción de las acciones: por ejemplo, "le mostró documentos falsos", "le ofreció un negocio ficticio", "se atribuyó poder o influencia supuestos", etc.].

Engañado por estas afirmaciones, [nombre del querellante] [descripción de la disposición patrimonial: por ejemplo, "le entregó la suma de $[monto] en efectivo", "transfirió a su cuenta bancaria $[monto]", etc.], lo que hizo el día [día] de [mes] de [año].

El acusado se apropió del dinero y no cumplió lo prometido, causando a [nombre del querellante] un perjuicio patrimonial de $[monto en pesos], equivalente a [monto] UTM (valor UTM de [mes/año]: $[valor]).

**III. CALIFICACIÓN JURÍDICA**

Los hechos descritos constituyen el delito de estafa previsto y sancionado en el artículo [467 o 468 o 470] del Código Penal, por cuanto el acusado, mediante engaño, provocó un error en [nombre del querellante], haciéndolo incurrir en una disposición patrimonial consistente en [entregar dinero/firmar documento/transferir fondos], en perjuicio suyo, para obtener un provecho patrimonial para sí.

**IV. CIRCUNSTANCIAS MODIFICATORIAS DE LA RESPONSABILIDAD PENAL**

Concurren las siguientes circunstancias:

**Agravantes:**
- [Si las hay: por ejemplo, Abuso de confianza (artículo 12 N° 7 CP), por cuanto el acusado se valió de la relación de confianza que tenía con el querellante (no verificado en esta búsqueda)].

**Atenuantes:**
- [Si las hay: por ejemplo, "Ninguna" o Irreprochable conducta anterior (artículo 11 N° 6 CP) (no verificado en esta búsqueda)].

**V. PARTICIPACIÓN**

El acusado [nombre] tuvo participación en calidad de **autor** del delito de estafa, conforme al artículo 15 N° 1 del Código Penal, por cuanto ejecutó directamente el engaño y se apropió del dinero.

**VI. PRECEPTOS LEGALES APLICABLES**

Artículos 1°, 15 N° 1, [467 o 468 o 470], [agravantes o atenuantes si las hay] del Código Penal; artículos 258, 259 del Código Procesal Penal.

**VII. PENA SOLICITADA**

Solicito se imponga al acusado [nombre] la pena de:

1. **Presidio menor en su grado [mínimo/medio/máximo]** [indicar el tramo según el monto del perjuicio conforme artículo 467 CP].
2. **Multa de [monto] UTM** [indicar el tramo según artículo 467 CP].
3. **Costas de la causa.**
4. **Inhabilitación especial perpetua** para cargos y oficios públicos [si corresponde].
5. **Pago de la indemnización civil** de $[monto] por concepto de restitución del dinero apropiado, más $[monto] por daño emergente y $[monto] por lucro cesante.

**POR TANTO,**

**RUEGO A US.:**

1. Tenga por formulada acusación particular en contra de [nombre del acusado] por el delito de estafa.
2. Cite a audiencia de preparación del juicio oral conforme al artículo 260 del Código Procesal Penal.

**PRIMER OTROSÍ:** Ofrezco rendir en el juicio oral los siguientes medios de prueba:

**A. Testigos:**

1. [Nombre, apellido, profesión, domicilio del testigo 1]. Declarará sobre: [puntos específicos: por ejemplo, "la entrega del dinero al acusado el día [fecha] en [lugar]; las conversaciones previas en que el acusado ofreció el negocio"].

2. [Nombre, apellido, profesión, domicilio del testigo 2]. Declarará sobre: [puntos específicos].

**B. Peritos:**

1. [Nombre del perito, título profesional, domicilio]. Peritaje contable sobre el destino de los fondos transferidos a la cuenta del acusado. Puntos del peritaje: [descripción].

**C. Documentos:**

1. Contrato de [descripción] suscrito entre el querellante y el acusado el [fecha].
2. Comprobante de transferencia bancaria por $[monto] del [fecha].
3. Correos electrónicos intercambiados entre el querellante y el acusado entre [fecha] y [fecha].
4. Informe pericial contable de [fecha].

**SEGUNDO OTROSÍ:** Solicito se decreten las siguientes medidas para el juicio oral:

1. Citación de los testigos individualizados en el otrosí anterior.
2. Citación del perito [nombre] para que concurra a declarar al juicio oral.
3. Exhibición de los documentos acompañados en la carpeta fiscal.

[Ciudad], [día] de [mes] de [año].

_________________________  
[Nombre y firma del abogado patrocinante]

---

#### Tabla de plazos

| Etapa | Plazo | Cómputo | Norma | Consecuencia si se omite |
|-------|-------|---------|-------|--------------------------|
| Presentación de querella | Mientras el fiscal no cierre la investigación | Días hábiles | Art. 112 CPP | Inadmisibilidad (art. 114 letra a CPP) |
| Subsanación de defectos de la querella | 3 días hábiles | Desde notificación de resolución que otorga plazo | Art. 114 letra b CPP | Inadmisibilidad de la querella |
| Solicitud de diligencias después del cierre de investigación | 10 días hábiles | Desde notificación del cierre | Art. 257 CPP | Preclusión del derecho a solicitar diligencias |
| Acusación del fiscal o sobreseimiento o no perseverar | 10 días hábiles | Desde vencido el plazo de 10 días para solicitar diligencias | Art. 247 inc. 3° CPP | Querellante puede forzar acusación (art. 258 CPP) |
| Acusación particular del querellante | 10 días hábiles | Desde notificación de la decisión del fiscal de no perseverar o rechazo de sobreseimiento | Art. 258 inc. 1° CPP | Preclusión; juez puede sobreseer (art. 258 inc. 2° CPP) |
| Citación a audiencia de preparación del juicio oral | 25 a 35 días | Desde notificación de la acusación, días corridos | Art. 260 CPP | Nulidad del procedimiento si no se cita |
| Fijación de audiencia de juicio oral | Dentro de 60 días | Desde recibido el auto de apertura, días corridos | Art. 281 inc. 2° CPP | Retardo injustificado; partes pueden solicitar fijación |
| Dictación de sentencia definitiva | En la misma audiencia o dentro de 24 horas | Desde término del juicio oral, días corridos | Art. 343 CPP | Denegación de justicia; partes pueden reclamar |
| Recurso de nulidad | 10 días hábiles | Desde notificación de la sentencia | Art. 372 inc. 2° CPP | Sentencia queda firme; inadmisibilidad del recurso |
| Prescripción de la acción penal (estafa con pena de presidio menor) | 5 años | Desde comisión del delito, se suspende desde que el procedimiento se dirige contra el imputado | Arts. 94, 95, 96 CP | Extinción de la responsabilidad penal; sobreseimiento definitivo |

#### Recursos

| Recurso | Contra qué resolución | Plazo | Tribunal ante el que se interpone | Tribunal que conoce | Efectos |
|---------|----------------------|-------|-----------------------------------|---------------------|---------|
| **Apelación** | Resolución que declara inadmisible la querella (art. 114 CPP) | 5 días hábiles (no verificado en esta búsqueda) | Juzgado de Garantía que dictó la resolución | Corte de Apelaciones respectiva | Suspensivo: impide que la inadmisibilidad quede firme |
| **Apelación** | Resolución que decreta sobreseimiento definitivo o temporal (art. 253 CPP) | 5 días hábiles (no verificado en esta búsqueda) | Juzgado de Garantía que dictó la resolución | Corte de Apelaciones respectiva | Suspensivo: impide que el sobreseimiento quede firme |
| **Recurso de nulidad** | Sentencia definitiva del Tribunal de Juicio Oral en lo Penal | 10 días hábiles | Tribunal de Juicio Oral que dictó la sentencia | Corte de Apelaciones (causales art. 373 letra a CPP) o Corte Suprema (causales art. 373 letra b CPP) | Suspensivo: impide que la sentencia quede firme; si se acoge, anula la sentencia y ordena nuevo juicio o dicta sentencia de reemplazo |
| **Reposición** | Resoluciones del juez de garantía que no pongan término al procedimiento ni hagan imposible su prosecución | 3 días hábiles (no verificado en esta búsqueda) | Mismo tribunal que dictó la resolución | Mismo tribunal | No suspensivo, salvo que se conceda con apelación subsidiaria |

#### Errores frecuentes y estrategia

**Errores frecuentes:**

1. **Presentar querella sin individualizar suficientemente al querellado:** Si se ignora el nombre o domicilio del querellado, igual se puede presentar querella solicitando la investigación (artículo 113 letra c CPP), pero debe describirse claramente a la persona. No omitir este requisito.

2. **No calcular correctamente el monto del perjuicio en UTM:** La pena depende del tramo de perjuicio en UTM (artículo 467 CP). Un error en el cálculo puede llevar a solicitar una pena incorrecta. Verificar el valor de la UTM a la fecha del delito y convertir el perjuicio en pesos a UTM.

3. **No solicitar diligencias específicas en la querella:** El artículo 113 letra e CPP exige expresar las diligencias solicitadas al Ministerio Público. Una querella genérica ("que se investigue") es válida, pero es más efectiva si se individualizan testigos, peritajes y documentos concretos.

4. **No solicitar diligencias en el plazo de 10 días después del cierre de la investigación:** Este plazo es fatal (artículo 257 CPP). Si se omite, precluye el derecho a solicitar diligencias y el fiscal puede acusar o sobreseer sin practicarlas.

5. **No formular acusación particular en 10 días si el fiscal no acusa:** Si el fiscal no acusa o solicita sobreseimiento, el querellante tiene 10 días hábiles para acusar (artículo 258 CPP). Si no lo hace, el juez puede sobreseer y el procedimiento termina.

6. **No comparecer a la audiencia de preparación del juicio oral:** Si el querellante no comparece, se entiende que abandona la querella (artículo 120 CPP). Siempre asistir o justificar la inasistencia.

7. **No ofrecer prueba suficiente en la acusación:** La acusación debe señalar los medios de prueba (testigos, peritos, documentos) con individualización precisa (artículo 259 letras f y g CPP). Si no se ofrecen, no se podrán rendir en el juicio oral.

8. **Confundir estafa (artículo 467 CP) con otras defraudaciones (artículos 468, 470, 473 CP):** La estafa simple (artículo 467 CP) requiere engaño, error, disposición patrimonial y perjuicio. Si el caso encuadra en una figura especial (artículo 468: uso de nombre fingido, poder supuesto; artículo 470: apropiación indebida, abuso de firma en blanco), debe calificarse correctamente. La pena puede variar.

9. **No ejercer la acción civil en la querella si se desea:** Si se quiere obtener indemnización en el mismo procedimiento penal, debe ejercerse la acción civil en la querella o en la acusación particular (artículo 59 CPP). Si se reserva para juicio civil, debe decirse expresamente; si no se dice nada, se entiende reservada (artículo 59 inciso 2° CPP).

10. **No recurrir de nulidad en 10 días si la sentencia es desfavorable:** El plazo de 10 días hábiles para recurrir de nulidad es fatal (artículo 372 CPP). Si se omite, la sentencia queda firme aunque sea errónea.

**Estrategia:**

- **Antes de querellarse, evaluar si conviene denunciar primero:** La denuncia es más simple y rápida; el Ministerio Público investiga de oficio. La querella da más derechos (intervenir en la investigación, forzar acusación, recurrir), pero exige patrocinio de abogado y seguimiento activo. Si el caso es claro y el Ministerio Público tiene recursos, puede bastar la denuncia. Si el caso es complejo o el fiscal puede archivar, conviene querellarse.

- **Solicitar medidas cautelares reales desde la querella:** Si hay riesgo de que el querellado oculte o enajene bienes, solicitar en la querella que el Ministerio Público pida al juez medidas cautelares reales (embargo, prohibición de celebrar actos y contratos, retención de fondos) conforme artículos 157 y siguientes CPP. Esto asegura el pago de la eventual indemnización civil.

- **Ejercer la acción civil en el procedimiento penal si el querellado tiene bienes:** Es más rápido y económico que un juicio civil posterior. Pero si el querellado es insolvente, puede convenir reservar la acción civil para ejecutarla cuando tenga bienes.

- **Forzar la formalización si el fiscal no lo hace en 6 meses:** Si han transcurrido más de 6 meses desde la querella sin que el fiscal formalice, solicitar audiencia judicial conforme artículo 186 CPP. Esto obliga al fiscal a formalizar o a archivar con control judicial.

- **Forzar la acusación si el fiscal no acusa:** Si el fiscal decide no perseverar o solicita sobreseimiento sin fundamento, el querellante puede acusar particularmente (artículo 258 CPP). Esto permite llevar el caso a juicio oral aunque el fiscal se oponga. Requiere tener prueba suficiente y patrocinio de abogado experimentado.

- **Ofrecer prueba documental y pericial sólida:** En estafas, la prueba documental (contratos, transferencias, correos, mensajes) y pericial (contable, grafológica) suele ser más contundente que la testimonial. Asegurar que los documentos estén legalizados y los peritos sean idóneos.

- **Preparar bien el interrogatorio de testigos para el juicio oral:** Los testigos deben declarar sobre hechos concretos (qué vieron, oyeron, hicieron), no sobre conclusiones ("el acusado es un estafador"). Preparar preguntas abiertas para el interrogatorio directo y preguntas cerradas para el contrainterrogatorio.

- **Evaluar la posibilidad de procedimiento abreviado:** Si el acusado se allana y acepta los hechos, se puede solicitar procedimiento abreviado (artículo 406 CPP), que es más rápido. Pero la pena no puede exceder de 5 años de presidio, por lo que solo sirve para estafas de monto bajo o medio.

#### Lista de verificación

- [ ] Identificar correctamente al querellante (víctima, representante legal o heredero testamentario) y verificar que tiene legitimación activa (artículo 111 CPP).
- [ ] Identificar al querellado con nombre completo, RUT, profesión y domicilio; si se ignoran estos datos, describir claramente a la persona.
- [ ] Calcular el monto del perjuicio en pesos y convertirlo a UTM con el valor vigente a la fecha del delito, para determinar el tramo de pena del artículo 467 CP.
- [ ] Reunir todos los documentos que acrediten el engaño y el perjuicio: contratos, transferencias, correos, mensajes, facturas, estados de cuenta.
- [ ] Individualizar a los testigos presenciales del engaño o de la disposición patrimonial, con nombre, profesión y domicilio.
- [ ] Verificar si el Ministerio Público ya inició investigación por denuncia previa; si existe, la querella se adhiere a esa carpeta fiscal.
- [ ] Designar abogado patrocinante y mandatario judicial (si lo hay) con medio de notificación electrónico (correo electrónico).
- [ ] Redactar la querella cumpliendo todos los requisitos del artículo 113 CPP: designación del tribunal, individualización del querellante y abogado, individualización del querellado, relación circunstanciada del hecho con fecha y lugar, diligencias solicitadas, firma.
- [ ] Calificar jurídicamente los hechos en el artículo correcto del Código Penal: 467 (estafa simple), 468 (estafa calificada), 470 (apropiación indebida, abuso de firma en blanco, etc.), 473 (defraudación residual).
- [ ] Solicitar en la querella las diligencias específicas que el Ministerio Público debe practicar: declaraciones de testigos, peritajes, incautaciones, solicitudes de información bancaria.
- [ ] Decidir si se ejerce la acción civil en la querella o se reserva para juicio civil posterior; si se ejerce, cumplir requisitos del artículo 60 CPP.
- [ ] Solicitar medidas cautelares reales si hay riesgo de que el querellado oculte o enajene bienes.
- [ ] Presentar la querella ante el Juzgado de Garantía competente (territorio donde se cometió el delito o donde fue aprehendido el imputado).
- [ ] Verificar que el tribunal admitió a tramitación la querella; si otorga plazo para subsanar defectos, subsanar en 3 días hábiles.
- [ ] Una vez admitida, verificar que el juez remitió la querella al Ministerio Público.
- [ ] Ejercer los derechos del artículo 261 CPP: solicitar diligencias al fiscal, acceder a los registros de la investigación (salvo secreto), proponer peritajes.
- [ ] Si el fiscal no formaliza en 6 meses, solicitar audiencia judicial conforme artículo 186 CPP para forzar la formalización.
- [ ] Si el fiscal formaliza, verificar que se fijó plazo de investigación (máximo 2 años).
- [ ] Solicitar diligencias durante la investigación; si el fiscal las rechaza, reclamar ante el Fiscal Regional (artículo 183 inciso 3° CPP).
- [ ] Cuando el fiscal cierre la investigación, solicitar diligencias pendientes dentro de 10 días hábiles (artículo 257 CPP). No dejar pasar este plazo.
- [ ] Si el fiscal acusa, revisar la acusación y decidir si se adhiere o se formula acusación particular ampliando hechos o calificaciones.
- [ ] Si el fiscal no acusa o solicita sobreseimiento, formular acusación particular dentro de 10 días hábiles (artículo 258 CPP).
- [ ] Redactar la acusación particular cumpliendo todos los requisitos del artículo 259 CPP: individualización del acusado y defensor, relación de hechos, calificación jurídica, circunstancias modificatorias, participación, preceptos legales, medios de prueba, pena solicitada.
- [ ] Ofrecer prueba en la acusación: lista de testigos con nombre, profesión, domicilio y puntos sobre los que declararán; peritos con título y puntos del peritaje; documentos.
- [ ] Comparecer a la audiencia de preparación del juicio oral; si no se puede, justificar la inasistencia para evitar el abandono de la querella (artículo 120 CPP).
- [ ] En la audiencia de preparación, oponerse a exclusiones de prueba que perjudiquen la acusación; proponer convenciones probatorias sobre hechos no controvertidos.
- [ ] Verificar que el juez dictó auto de apertura del juicio oral con los hechos, pruebas admitidas y tribunal competente.
- [ ] Preparar el juicio oral: revisar la prueba admitida, preparar interrogatorios de testigos y peritos, preparar alegatos de apertura y clausura.
- [ ] Comparecer al juicio oral; si no se puede, justificar la inasistencia.
- [ ] Rendir la prueba ofrecida: interrogar testigos y peritos, exhibir documentos.
- [ ] Alegar en el juicio oral: exponer los hechos, la prueba rendida, la calificación jurídica, la pena solicitada y la indemnización civil.
- [ ] Verificar que el tribunal dictó sentencia definitiva en la audiencia o dentro de 24 horas.
- [ ] Si la sentencia es desfavorable (absolutoria o condenatoria con pena menor a la solicitada), evaluar si procede recurso de nulidad y presentarlo dentro de 10 días hábiles (artículo 372 CPP).
- [ ] Si la sentencia es condenatoria y queda firme, solicitar el cumplimiento de la pena y de la indemnización civil.
- [ ] Verificar que el tribunal remitió los antecedentes a Gendarmería para el cumplimiento de la pena privativa de libertad.
- [ ] Si se ejerció acción civil, solicitar el cumplimiento de la indemnización en el mismo procedimiento penal (artículo 472 CPP) o en juicio ejecutivo civil.

#### Qué verificar antes de actuar

- **Autos acordados aplicables:** Verificar en el sitio web del Poder Judicial si existen autos acordados de la Corte Suprema o de la Corte de Apelaciones respectiva sobre tramitación electrónica, presentación de escritos, fijación de audiencias o rendición de prueba en juicios orales.
- **Vigencia de normas:** El Código Penal fue reformado por Ley 21.595 de 2023 (vigente desde 17 de agosto de 2023), que modificó los artículos 467, 468 y 470 (estafa y otras defraudaciones), aumentando penas y creando nuevas figuras (estafa informática, administración desleal). Verificar que se aplica la versión vigente a la fecha del delito (ley penal más favorable si el delito es anterior a la reforma).
- **Criterios del tribunal:** Consultar en el sitio web del Poder Judicial o en bases de jurisprudencia (Microjuris, LegalPublishing, Vlex) si existen sentencias recientes del Tribunal de Juicio Oral en lo Penal o de la Corte de Apelaciones de la jurisdicción sobre estafas similares, para conocer los criterios de prueba, calificación jurídica y determinación de pena.
- **Valor de la UTM:** Obtener el valor oficial de la UTM a la fecha del delito en el sitio web del Servicio de Impuestos Internos (www.sii.cl) para calcular correctamente el tramo de pena del artículo 467 CP.
- **Oficina Judicial Virtual:** Verificar en el sitio web del tribunal si está habilitada la Oficina Judicial Virtual para causas penales y si la presentación electrónica es obligatoria u opcional.

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### d01-contrato-trabajo — documento: ¿Este contrato cumple la ley? Revisa sus riesgos.

<details><summary>Material enviado al modelo (20 normas, 4 fallos o dictámenes, 1 artículos de doctrina; 2 normas descartadas por materia)</summary>

- Código del Trabajo, Artículo 67
- Código del Trabajo, Artículo 68
- Código del Trabajo, Artículo 70
- Código del Trabajo, Artículo 73
- Código del Trabajo, Artículo 5
- Código del Trabajo, Artículo 7
- Código del Trabajo, Artículo 9
- Código del Trabajo, Artículo 10
- Código del Trabajo, Artículo 22
- Código del Trabajo, Artículo 8
- Código del Trabajo, Artículo 23
- Código del Trabajo, Artículo 30
- Código del Trabajo, Artículo 159
- Código del Trabajo, Artículo 22
- Código del Trabajo, Artículo 163
- Código del Trabajo, Artículo 161
- Código del Trabajo, Artículo 67
- Código Civil, Artículo 1438
- Ley N° 18.101 sobre Arrendamiento de Predios Urbanos, Artículo 3
- Código Civil, Artículo 102
- Jurisprudencia: Tribunal Constitucional, 12051
- Jurisprudencia: Tribunal Constitucional, 13946
- Jurisprudencia: Dirección del Trabajo, Dictamen ORD. Nº214/4, 2009-01-15
- Jurisprudencia: Dirección del Trabajo, Dictamen ORD. Nº1000/9, 2021-03-19
- Doctrina: Barrientos Camus, Francisca, "COMENTARIO. AUMENTO DE COMISIÓN POR MANTENCIÓN DE SERVICIO SIN CONSENTIMIENTO DEL CONSUMIDOR. CLÁUSULAS ABUSIVAS, INDEMNIZACIONES Y MULTAS. PRESCRIPCIÓN DE LA ACCIÓN INFRACCIONAL Y RELACIÓN CON LAS DEMÁS ACCIONES. OCTAVA SALA DE LA CORTE DE APELACIONES DE SANTIAGO, 3 DE OCTUBRE DE 2011, ROL Nº 976-2011.", Revista Chilena de Derecho Privado, N° 17, (2019), DOI: 10.32995/s0718-80722011226.
- ~~Ley N° 19.496 sobre Protección de los Derechos de los Consumidores, Artículo 3 bis~~ (materia consumidor ajena a laboral/procesal_civil/civil/comercial/arrendamiento/familia)
- ~~Constitución Política de la República de Chile, Artículo 19, N° 1~~ (materia constitucional ajena a laboral/procesal_civil/civil/comercial/arrendamiento/familia)

Versión anterior (main):
- Código del Trabajo, Artículo 159
- Código del Trabajo, Artículo 22
- Código del Trabajo, Artículo 163
- Ley N° 19.496 sobre Protección de los Derechos de los Consumidores, Artículo 3 bis
- Código del Trabajo, Artículo 67
- Código del Trabajo, Artículo 161
- Código Civil, Artículo 1438
- Ley N° 18.101 sobre Arrendamiento de Predios Urbanos, Artículo 3
- Constitución Política de la República de Chile, Artículo 19, N° 1
- Constitución Política de la República de Chile, Artículo 19, N° 24

</details>

#### Identificación

**Tipo de documento:** Contrato individual de trabajo indefinido.

**Partes:** Empleador: Comercial Los Andes SpA, RUT 76.000.000-0, representada por Pedro Soto, domiciliada en Av. Providencia 1234, Providencia. Trabajadora: María González, RUT 15.000.000-0.

**Fecha:** 2 de marzo de 2026.

**Objeto:** Prestación de servicios como vendedora.

**Ley aplicable:** Código del Trabajo (Ley 18.620 y modificaciones).

#### Resumen

El contrato establece una relación laboral indefinida para desempeñarse como vendedora, con jornada de 48 horas semanales de lunes a sábado, remuneración mensual de $400.000 y funciones amplias en cualquier ciudad del país. Contiene **cinco cláusulas ilegales** que vulneran normas imperativas del Código del Trabajo: jornada excesiva (48 horas semanales), renuncia anticipada a feriado legal, renuncia anticipada a indemnización por años de servicio, descuentos automáticos por pérdidas sin acreditar responsabilidad, y forma de pago de la remuneración a elección unilateral del empleador. Además, omite menciones obligatorias del artículo 10 del Código del Trabajo. El contrato expone a la trabajadora a condiciones laborales ilegales y al empleador a multas administrativas y demandas laborales.

#### Riesgos

| Cláusula | Problema | Norma | Gravedad | Recomendación |
|----------|----------|-------|----------|---------------|
| "La jornada ordinaria de trabajo será de 48 horas semanales" | Excede el máximo legal de 40 horas semanales. | Código del Trabajo, artículo 22, inciso primero | **Alta** | Reducir a 40 horas semanales máximo. La trabajadora puede reclamar ante la Inspección del Trabajo y exigir pago de horas extras por las 8 horas semanales excedentes. |
| "La trabajadora renuncia desde ya a su derecho a feriado anual" | Renuncia anticipada a derecho irrenunciable mientras subsista el contrato. | Código del Trabajo, artículos 5, inciso segundo, y 67 | **Alta** | Eliminar la cláusula. El feriado legal (15 días hábiles anuales) es irrenunciable y no puede compensarse en dinero durante la vigencia del contrato (artículo 73). |
| "La trabajadora renuncia a cualquier indemnización por años de servicio" | Renuncia anticipada a derecho irrenunciable. | Código del Trabajo, artículo 5, inciso segundo | **Alta** | Eliminar la cláusula. La indemnización por años de servicio del artículo 163 es irrenunciable mientras subsista el contrato. Solo puede renunciarse en el finiquito, ante ministro de fe. |
| "El empleador podrá descontar de la remuneración cualquier pérdida de mercaderías que se produzca en la tienda, sin necesidad de acreditar la responsabilidad de la trabajadora" | Traslada el riesgo empresarial a la trabajadora, vulnerando el principio de ajenidad. Descuento sin autorización legal ni consentimiento expreso. | Código del Trabajo, artículo 7 (subordinación y ajenidad); artículo 58 (descuentos permitidos) | **Alta** | Eliminar la cláusula. El empleador asume el riesgo del negocio. Solo puede descontar de la remuneración por pérdidas si la trabajadora las causó con dolo o culpa grave, previa acreditación y con su autorización escrita. |
| "podrá pagarse en dinero o en productos de la empresa, a elección del empleador" | Forma de pago unilateral; la remuneración debe pagarse en dinero y en períodos no superiores a un mes. | Código del Trabajo, artículo 54 (remuneración en dinero); artículo 55 (periodicidad) | **Media** | Establecer pago íntegro en dinero, mensual. Las prestaciones en especie requieren acuerdo expreso y tasación. |
| "realizará todas las demás funciones que el empleador le encomiende en cualquier ciudad del país" | Funciones y lugar de trabajo excesivamente amplios; permite cambios unilaterales que pueden afectar derechos de la trabajadora. | Código del Trabajo, artículo 10, N° 3 (naturaleza de los servicios y lugar de trabajo) | **Media** | Especificar funciones concretas (alternativas o complementarias) y delimitar la zona geográfica (ciudad o región). Si requiere desplazamiento, aplicar artículo 10, inciso final. |
| "con 30 minutos de colación imputables a la jornada" | El tiempo de colación no es imputable a la jornada de trabajo. | Código del Trabajo, artículo 34, inciso segundo | **Media** | Establecer que el tiempo de colación (mínimo 30 minutos) no se computa en la jornada. La jornada efectiva sería de 40 horas semanales más el tiempo de colación. |

#### Cláusulas ilegales o abusivas

**Cláusula SEGUNDA:** "La jornada ordinaria de trabajo será de 48 horas semanales" vulnera el artículo 22, inciso primero, del Código del Trabajo, que establece un máximo de 40 horas semanales.

**Cláusula CUARTA:** "La trabajadora renuncia desde ya a su derecho a feriado anual, el que se entiende compensado con la remuneración pactada" vulnera los artículos 5, inciso segundo (irrenunciabilidad de derechos laborales), 67 (derecho a 15 días hábiles de feriado anual) y 73, inciso primero (prohibición de compensar el feriado en dinero durante la vigencia del contrato), todos del Código del Trabajo.

**Cláusula QUINTA:** "La trabajadora renuncia a cualquier indemnización por años de servicio que pudiera corresponderle al término del contrato" vulnera el artículo 5, inciso segundo, del Código del Trabajo. La indemnización del artículo 163 es irrenunciable mientras subsista el contrato; solo puede renunciarse en el finiquito, ante ministro de fe (Inspección del Trabajo, notario o secretario del juzgado de letras del trabajo).

**Cláusula SEXTA:** "El empleador podrá descontar de la remuneración cualquier pérdida de mercaderías que se produzca en la tienda, sin necesidad de acreditar la responsabilidad de la trabajadora" vulnera el principio de ajenidad (artículo 7 del Código del Trabajo: el empleador asume el riesgo del negocio) y el artículo 58 del mismo Código, que regula taxativamente los descuentos permitidos. Solo proceden descuentos por pérdidas si la trabajadora las causó con dolo o culpa grave, previa acreditación y con su autorización escrita.

**Cláusula TERCERA (forma de pago):** "podrá pagarse en dinero o en productos de la empresa, a elección del empleador" vulnera el artículo 54 del Código del Trabajo, que establece que la remuneración debe estipularse y pagarse en moneda de curso legal (pesos chilenos). Las prestaciones en especie requieren acuerdo expreso, tasación y no pueden ser la forma principal de pago.

**Cláusula SEGUNDA (colación imputable):** "con 30 minutos de colación imputables a la jornada" vulnera el artículo 34, inciso segundo, del Código del Trabajo, que establece que el tiempo de colación no se considera trabajado para computar la duración de la jornada diaria.

#### Lo que falta

El contrato omite las siguientes menciones obligatorias del artículo 10 del Código del Trabajo:

- **Fecha de nacimiento de la trabajadora** (N° 2).
- **Fecha de ingreso** (N° 2). Solo consta la fecha del contrato, que se presume es la de ingreso, pero debe indicarse expresamente.
- **Domicilio de la trabajadora** (N° 2).
- **Dirección de correo electrónico de ambas partes, si la tuvieren** (N° 2).
- **Monto, forma y período de pago de la remuneración** (N° 4): solo indica monto ($400.000 mensuales), pero no especifica forma (depósito, efectivo) ni día de pago (por ejemplo, último día hábil del mes).
- **Beneficios adicionales** (inciso segundo): no indica si el empleador otorgará prestaciones en especie o servicios (por ejemplo, uniformes, herramientas, capacitación).

Además, el contrato debería incluir:

- **Cláusula sobre modificación del contrato:** indicar que cualquier cambio requiere mutuo consentimiento por escrito (artículo 5, inciso tercero, y artículo 11 del Código del Trabajo).
- **Cláusula sobre término del contrato:** causales aplicables (artículo 159 y siguientes).
- **Referencia al reglamento interno de la empresa**, si existe (obligatorio para empresas con 10 o más trabajadores, artículo 153).

#### Fechas, plazos y montos

- **Fecha del contrato:** 2 de marzo de 2026. Es la fecha de celebración; se presume que es también la fecha de ingreso de la trabajadora, pero debería constar expresamente (artículo 10, N° 2).
- **Jornada:** 48 horas semanales (ilegal; máximo legal: 40 horas semanales). Distribuidas de lunes a sábado, de 9:00 a 18:00 horas (9 horas diarias × 6 días = 54 horas, pero el contrato dice 48; hay inconsistencia).
- **Remuneración:** $400.000 mensuales. No indica día de pago. La ley exige pago en períodos no superiores a un mes (artículo 55).
- **Colación:** 30 minutos (mínimo legal: 30 minutos, artículo 34). El contrato dice "imputables a la jornada", lo que es ilegal.
- **Feriado:** El contrato renuncia al feriado, lo que es ilegal. Corresponden 15 días hábiles anuales después de un año de servicio (artículo 67).
- **Indemnización:** El contrato renuncia a la indemnización, lo que es ilegal. Si el contrato termina por necesidades de la empresa (artículo 161) después de un año de vigencia, corresponden 30 días de remuneración por año de servicio, con tope de 330 días (artículo 163).

#### Redacción sugerida

**CLÁUSULA SEGUNDA (jornada):**

"La jornada ordinaria de trabajo será de 40 horas semanales, distribuidas de lunes a viernes, de 9:00 a 18:00 horas, con una hora de colación diaria, de 13:00 a 14:00 horas, que no se computa en la jornada de trabajo. La trabajadora tendrá derecho a descanso semanal los días sábado y domingo."

**CLÁUSULA TERCERA (remuneración):**

"La trabajadora recibirá una remuneración mensual de $400.000 (cuatrocientos mil pesos), pagadera en dinero, mediante depósito en cuenta bancaria, el último día hábil de cada mes. La remuneración se compone de: sueldo base $400.000. El empleador efectuará los descuentos legales (cotizaciones previsionales, de salud e impuestos) y solo podrá efectuar otros descuentos con autorización escrita de la trabajadora, en los casos permitidos por la ley."

**CLÁUSULA CUARTA (feriado):**

La trabajadora tendrá derecho a un feriado anual de 15 días hábiles, con remuneración íntegra, después de un año de servicio, de acuerdo con lo establecido en el artículo 67 del Código del Trabajo. El feriado se concederá de preferencia en primavera o verano, considerando las necesidades del servicio y la solicitud de la trabajadora. (no verificado en esta búsqueda)

**CLÁUSULA QUINTA (indemnización):**

En caso de término del contrato por necesidades de la empresa (artículo 161 del Código del Trabajo), y si el contrato ha estado vigente un año o más, el empleador pagará a la trabajadora la indemnización por años de servicio establecida en el artículo 163 del mismo Código: 30 días de la última remuneración mensual por cada año de servicio y fracción superior a seis meses, con un tope de 330 días de remuneración. (no verificado en esta búsqueda)

**CLÁUSULA SEXTA (responsabilidad por pérdidas):**

La trabajadora no responde de las pérdidas de mercaderías o dinero que se produzcan en la tienda, salvo que se acredite que las causó con dolo o culpa grave. En tal caso, el empleador podrá descontar de la remuneración el monto de la pérdida, previa autorización escrita de la trabajadora y sin que el descuento exceda el 15% de la remuneración mensual, de acuerdo con el artículo 58 del Código del Trabajo. (no verificado en esta búsqueda)

**CLÁUSULA PRIMERA (funciones y lugar de trabajo):**

"La trabajadora se desempeñará como vendedora en el local de la empresa ubicado en Av. Providencia 1234, Providencia, Santiago. Sus funciones serán: atención de clientes, exhibición de productos, operación de caja y otras labores propias del cargo de vendedora. El empleador podrá asignarle funciones complementarias o alternativas dentro del mismo local, previa comunicación. Cualquier cambio de lugar de trabajo a otra ciudad requerirá acuerdo escrito de ambas partes."

#### Qué verificar antes de firmar o actuar

- **Reglamento interno de la empresa:** El contrato no lo menciona. Si la empresa tiene 10 o más trabajadores, debe tener reglamento interno (artículo 153 del Código del Trabajo) y entregarlo a la trabajadora al inicio de la relación laboral.
- **Datos de la trabajadora:** Verificar que el RUT 15.000.000-0 sea correcto y que se agreguen al contrato su fecha de nacimiento, domicilio y correo electrónico.
- **Datos del empleador:** Verificar que el RUT 76.000.000-0 de Comercial Los Andes SpA sea correcto y que Pedro Soto tenga poder de representación vigente (solicitar copia del poder o escritura de constitución de la sociedad).
- **Vigencia de las normas:** El Código del Trabajo ha sido reformado en los últimos años (por ejemplo, reducción de jornada a 40 horas semanales, vigente desde 2023). Verificar que el contrato se ajuste a la normativa vigente a la fecha de hoy (25 de septiembre de 2026).
- **Firma del contrato:** El contrato debe firmarse en dos ejemplares, uno para cada parte, dentro de los 15 días siguientes al ingreso de la trabajadora (artículo 9 del Código del Trabajo). Si el empleador no lo hace, se presumen las estipulaciones que declare la trabajadora.
- **Copia del contrato en el lugar de trabajo:** El empleador debe mantener un ejemplar del contrato en el lugar de trabajo o en un lugar autorizado por la Inspección del Trabajo (artículo 9, inciso quinto).

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### d02-contrato-arriendo — documento: Soy el arrendatario, ¿qué cláusulas me perjudican?

<details><summary>Material enviado al modelo (16 normas, 1 fallos o dictámenes, 1 artículos de doctrina; 6 normas descartadas por materia)</summary>

- Código Civil, Artículo 1915
- Código Civil, Artículo 1924
- Código Civil, Artículo 1947
- Código Civil, Artículo 1977
- Código Civil, Artículo 1916
- Código Civil, Artículo 1917
- Código Civil, Artículo 1918
- Código Civil, Artículo 1919
- Código Civil, Artículo 1920
- Código Civil, Artículo 1921
- Ley 18.101, fija normas especiales sobre arrendamiento de predios urbanos, Artículo 1
- Ley 18.101, fija normas especiales sobre arrendamiento de predios urbanos, Artículo 3
- Ley N° 18.101 sobre Arrendamiento de Predios Urbanos, Artículo 3
- Ley N° 19.496 sobre Protección de los Derechos de los Consumidores, Artículo 3 bis
- Código Civil, Artículo 1438
- Código Civil, Artículo 102
- Jurisprudencia: Tribunal Constitucional, 1856
- Doctrina: Díaz de Valdés Haase, Macarena, "Nulidad de cláusulas abusivas en reservas, promesas de compraventa y compraventas suscritas por consumidores de viviendas comercializadas en verde", Revista Chilena de Derecho Privado, N° 35, (2020), DOI: 10.32995/s0718-80722020514.
- ~~Código del Trabajo, Artículo 159~~ (materia laboral ajena a arrendamiento/civil/procesal_civil/consumidor/comercial/familia/tributario/administrativo)
- ~~Código del Trabajo, Artículo 22~~ (materia laboral ajena a arrendamiento/civil/procesal_civil/consumidor/comercial/familia/tributario/administrativo)
- ~~Código del Trabajo, Artículo 161~~ (materia laboral ajena a arrendamiento/civil/procesal_civil/consumidor/comercial/familia/tributario/administrativo)
- ~~Código del Trabajo, Artículo 163~~ (materia laboral ajena a arrendamiento/civil/procesal_civil/consumidor/comercial/familia/tributario/administrativo)
- ~~Código del Trabajo, Artículo 67~~ (materia laboral ajena a arrendamiento/civil/procesal_civil/consumidor/comercial/familia/tributario/administrativo)
- ~~Constitución Política de la República de Chile, Artículo 19, N° 24~~ (materia constitucional ajena a arrendamiento/civil/procesal_civil/consumidor/comercial/familia/tributario/administrativo)

Versión anterior (main):
- Ley N° 18.101 sobre Arrendamiento de Predios Urbanos, Artículo 3
- Ley N° 19.496 sobre Protección de los Derechos de los Consumidores, Artículo 3 bis
- Código del Trabajo, Artículo 22
- Código del Trabajo, Artículo 159
- Código del Trabajo, Artículo 161
- Código del Trabajo, Artículo 163
- Código del Trabajo, Artículo 67
- Código Civil, Artículo 1438
- Código Civil, Artículo 102
- Constitución Política de la República de Chile, Artículo 19, N° 24

</details>

#### Respuesta a tu pregunta

Las cláusulas segunda (aumento unilateral de renta), tercera (garantía sin plazo de restitución y retención arbitraria), cuarta (cambio de cerradura sin juicio), quinta (multa desproporcionada) y sexta (renuncia a reclamos) te perjudican gravemente: son ilegales o abusivas y no producen efecto.

#### Identificación

**Tipo de documento:** Contrato de arrendamiento de inmueble urbano destinado a habitación.  
**Partes:** Ana Rojas (RUT 10.000.000-0), arrendadora; Luis Pérez (RUT 18.000.000-0), arrendatario.  
**Fecha:** 1 de junio de 2026.  
**Objeto:** Departamento en calle Esmeralda 555, depto. 42, Valparaíso.  
**Ley aplicable:** Ley 18.101 sobre arrendamiento de predios urbanos y Código Civil.

#### Resumen

La arrendadora da en arriendo un departamento habitacional por $550.000 mensuales, pagaderos dentro de los cinco primeros días de cada mes. El arrendatario entregó $1.100.000 en garantía. El contrato establece que la arrendadora puede aumentar la renta avisando por WhatsApp con cinco días de anticipación, retener la garantía por cualquier motivo sin rendir cuenta, cambiar la cerradura y retirar las especies del arrendatario si se atrasa más de tres días en el pago, y cobrar una multa de $50.000 diarios por atraso. El arrendatario renuncia a todo reclamo. El plazo es de un año, renovable automáticamente. Varias cláusulas son ilegales o abusivas.

#### Riesgos

| Cláusula | Problema | Norma | Gravedad | Recomendación |
|----------|----------|-------|----------|---------------|
| "Si el arrendatario se atrasa más de 3 días en el pago de la renta, la arrendadora queda facultada para cambiar la cerradura del inmueble y retirar las especies del arrendatario, sin necesidad de juicio." | Autotutela prohibida: el desalojo requiere sentencia judicial ejecutoriada. Esta cláusula autoriza un lanzamiento ilegal que constituye usurpación. | Código Civil, art. 1977 (exige reconvenciones y plazo); Código Penal, art. 144 (usurpación). | **Alta** | Eliminar la cláusula. El desahucio o terminación por no pago debe tramitarse ante el juzgado de letras competente. |
| "El arrendatario renuncia a todo reclamo judicial o extrajudicial derivado de este contrato." | Renuncia anticipada de derechos, nula de pleno derecho. Impide al arrendatario ejercer acciones legales (por ejemplo, por incumplimiento de la arrendadora o retención indebida de la garantía). | Código Civil, art. 12 (renuncia de derechos solo si no está prohibida y mira al interés individual del renunciante); orden público procesal. | **Alta** | Eliminar la cláusula. El arrendatario conserva todos sus derechos de acción. |
| "La arrendadora podrá aumentar la renta en cualquier momento, avisando por WhatsApp con 5 días de anticipación." | Modificación unilateral del precio sin criterio objetivo ni plazo razonable. Rompe el equilibrio contractual y vulnera la buena fe. | Código Civil, art. 1545 (fuerza obligatoria del contrato) y 1546 (buena fe); Ley 18.101, art. 1 (remisión al Código Civil en lo no previsto). | **Alta** | Eliminar o reemplazar por cláusula de reajuste anual según IPC, con aviso de 30 días (no verificado en esta búsqueda) y notificación fehaciente. |
| "La arrendadora la restituirá cuando lo estime conveniente, y podrá retenerla íntegramente por cualquier motivo, sin necesidad de rendir cuenta de su uso." | Plazo de restitución de la garantía sujeto a la sola voluntad de la arrendadora y retención arbitraria sin causa legal. Vulnera el derecho de propiedad del arrendatario sobre la suma entregada. | Código Civil, art. 1947 (restitución al fin del arrendamiento; responsabilidad del arrendatario solo por daños probados); buena fe contractual. | **Media** | Reemplazar por: La garantía se restituirá dentro de los 10 días siguientes a la entrega del inmueble, descontando únicamente los daños acreditados y las rentas impagas, con liquidación detallada. (no verificado en esta búsqueda) |
| "El plazo del contrato es de un año, renovable automáticamente." | Renovación automática sin condiciones claras puede generar incertidumbre sobre la vigencia y dificultar el término del contrato por el arrendatario. | Código Civil, art. 1956 (tácita reconducción si el arrendatario continúa en posesión con aquiescencia del arrendador). | **Baja** | Precisar: Renovable automáticamente por períodos iguales, salvo desahucio dado por cualquiera de las partes con 60 días de anticipación al vencimiento. (no verificado en esta búsqueda) |

#### Cláusulas ilegales o abusivas

**Cláusula cuarta:** "Si el arrendatario se atrasa más de 3 días en el pago de la renta, la arrendadora queda facultada para cambiar la cerradura del inmueble y retirar las especies del arrendatario, sin necesidad de juicio."  
**Ilegalidad:** Contraria al Código Civil, artículo 1977, que exige reconvenciones previas y plazo de 30 días mínimo antes de hacer cesar el arriendo por mora, y al orden público procesal, que reserva el lanzamiento a la ejecución de sentencia judicial. Constituye autotutela prohibida.

**Cláusula sexta:** "El arrendatario renuncia a todo reclamo judicial o extrajudicial derivado de este contrato."  
**Ilegalidad:** Contraria al Código Civil, artículo 12 (renuncia anticipada general de derechos futuros es nula) y al derecho de acción garantizado constitucionalmente. No produce efecto alguno.

**Cláusula segunda (parte final):** "La arrendadora podrá aumentar la renta en cualquier momento, avisando por WhatsApp con 5 días de anticipación."  
**Abusividad:** Vulnera el Código Civil, artículo 1545 (fuerza obligatoria del contrato) y 1546 (buena fe), al permitir modificación unilateral sin criterio objetivo. Aunque el contrato no es de consumo (arrendamiento habitacional entre particulares no cae bajo la Ley 19.496), la cláusula es contraria a la buena fe contractual y puede ser impugnada.

**Cláusula quinta:** "El atraso en el pago generará una multa de $50.000 diarios."  
**Abusividad:** Cláusula penal enorme, reducible judicialmente conforme al Código Civil, artículo 1544. La multa diaria supera con creces el perjuicio real y tiene carácter sancionatorio desproporcionado.

**Cláusula tercera (parte final):** "La arrendadora la restituirá cuando lo estime conveniente, y podrá retenerla íntegramente por cualquier motivo, sin necesidad de rendir cuenta de su uso."  
**Abusividad:** Contraria al Código Civil, artículo 1947, que obliga al arrendatario a restituir el inmueble en el estado recibido (salvo deterioro por uso legítimo) y a responder solo por daños probados. La retención arbitraria de la garantía invierte la carga de la prueba y vulnera la buena fe.

#### Lo que falta

- **Individualización completa del inmueble:** Falta el rol de avalúo, superficie, número de dormitorios y baños, y estado de conservación al momento de la entrega. El Código Civil, artículo 1924, obliga al arrendador a entregar la cosa; la falta de descripción dificulta probar el estado inicial (art. 1947).
- **Inventario de especies y estado del inmueble:** Sin acta de entrega ni registro fotográfico, se presume que el arrendatario recibió el inmueble en regular estado de servicio (art. 1947, inciso 3°), pero no hay prueba del contenido ni del estado real.
- **Forma de pago de la renta:** No se indica cuenta bancaria, medio de pago ni comprobante. Recomendable pactar transferencia electrónica con comprobante o depósito en cuenta, para acreditar el pago.
- **Gastos comunes y servicios:** No se establece quién paga contribuciones, agua, luz, gas ni gastos comunes del edificio. En silencio, las contribuciones son de cargo del arrendador (propietario) y los servicios domiciliarios del arrendatario (usuario), pero es recomendable explicitarlo.
- **Obligaciones de mantención:** No se detalla quién asume reparaciones menores (por ejemplo, grifería, vidrios) y mayores (por ejemplo, estructura, instalaciones). El Código Civil, artículo 1924 N° 2, obliga al arrendador a mantener la cosa en estado de servir para el fin arrendado.
- **Procedimiento de término anticipado:** No se regula cómo el arrendatario puede poner término antes del plazo (por ejemplo, con aviso previo y pago de indemnización o sin ella). En contratos de un año, el arrendatario puede verse obligado a pagar la renta hasta el vencimiento si abandona el inmueble antes.
- **Domicilio de las partes:** Falta para efectos de notificaciones judiciales o extrajudiciales.

#### Fechas, plazos y montos

| Concepto | Detalle | Implicancia |
|----------|---------|-------------|
| **Fecha del contrato** | 1 de junio de 2026 | Inicio del arrendamiento. |
| **Plazo** | Un año, renovable automáticamente | Vence el 1 de junio de 2027; se renueva por períodos iguales si ninguna parte desahucia. Sin cláusula de desahucio expresa, aplica la Ley 18.101, art. 3: desahucio judicial o notarial con dos meses de anticipación (más un mes por cada año completo de ocupación, hasta seis meses). |
| **Renta mensual** | $550.000 | Pagadera dentro de los cinco primeros días de cada mes. |
| **Garantía** | $1.100.000 (equivalente a dos meses de renta) | Debe restituirse al término del contrato, descontando solo daños acreditados y rentas impagas. La cláusula que permite retención arbitraria es abusiva. |
| **Plazo de pago** | Cinco primeros días de cada mes | El atraso de más de tres días no autoriza el cambio de cerradura (cláusula ilegal); el Código Civil, art. 1977, exige mora de un período entero, dos reconvenciones con cuatro días entre ellas, y plazo de 30 días mínimo. |
| **Multa por atraso** | $50.000 diarios | Cláusula penal enorme: $50.000 × 30 días = $1.500.000 mensuales, casi tres veces la renta. Reducible judicialmente. |
| **Aviso de aumento de renta** | Cinco días por WhatsApp | Insuficiente: la modificación unilateral sin criterio objetivo es contraria a la buena fe. Recomendable pactar reajuste anual según IPC, con aviso de 30 días y notificación fehaciente (carta certificada o correo electrónico con acuse de recibo). |

#### Redacción sugerida

**Cláusula segunda (renta y reajuste):**  
"La renta mensual será de $550.000 (quinientos cincuenta mil pesos), pagadera por anticipado dentro de los cinco primeros días de cada mes, mediante transferencia electrónica a la cuenta corriente N° [número], Banco [nombre], a nombre de la arrendadora, o por cualquier otro medio que las partes acuerden por escrito. El arrendatario deberá enviar el comprobante de pago al correo electrónico [correo de la arrendadora]. La renta se reajustará anualmente, cada 1 de junio, en el porcentaje de variación del Índice de Precios al Consumidor (IPC) del período comprendido entre el 1 de mayo del año anterior y el 30 de abril del año en curso, determinado por el Instituto Nacional de Estadísticas. La arrendadora notificará el nuevo monto por carta certificada o correo electrónico con acuse de recibo, con a lo menos 30 días de anticipación a la fecha de reajuste."

**Cláusula tercera (garantía):**  
"El arrendatario entrega en este acto la suma de $1.100.000 (un millón cien mil pesos) como garantía del fiel cumplimiento de las obligaciones del contrato. La arrendadora restituirá la garantía dentro de los 10 días corridos siguientes a la fecha en que el arrendatario haga entrega material del inmueble, descontando únicamente: (a) las rentas de arrendamiento impagas; (b) los gastos comunes, contribuciones u otros cargos adeudados que sean de cargo del arrendatario; y (c) el costo de reparación de los daños al inmueble o a las especies inventariadas, que excedan el deterioro por uso legítimo, acreditados mediante presupuestos o facturas. La arrendadora entregará al arrendatario, junto con la restitución, una liquidación detallada de los descuentos efectuados. Si la garantía no alcanza a cubrir los montos adeudados, el arrendatario pagará la diferencia dentro de los cinco días siguientes a la notificación de la liquidación."

**Cláusula cuarta (término por no pago):**  
Si el arrendatario incurre en mora de un período entero en el pago de la renta, la arrendadora podrá hacer cesar el arrendamiento, previo cumplimiento de los siguientes requisitos: (a) dos reconvenciones escritas dirigidas al arrendatario, entre las cuales medien a lo menos cuatro días; (b) otorgamiento al arrendatario de un plazo de 30 días corridos, contado desde la segunda reconvención, para que pague la renta adeudada o preste garantía suficiente de pago; y (c) si el arrendatario no paga ni garantiza dentro de dicho plazo, la arrendadora podrá demandar judicialmente la terminación del contrato y el lanzamiento del arrendatario, conforme al Código Civil, artículo 1977. Queda expresamente prohibido a la arrendadora cambiar cerraduras, retirar especies del arrendatario o impedir su acceso al inmueble sin sentencia judicial ejecutoriada que ordene el lanzamiento. (no verificado en esta búsqueda)

**Cláusula quinta (intereses por mora):**  
"El pago de la renta fuera del plazo estipulado devengará el interés corriente para operaciones reajustables, determinado por la Superintendencia de Bancos e Instituciones Financieras, calculado sobre el monto adeudado desde el día siguiente al vencimiento hasta el día del pago efectivo."

**Cláusula sexta (acciones y reclamos):**  
Eliminar. Si se desea incluir una cláusula de solución de controversias, redactar: "Cualquier controversia derivada de este contrato será sometida, en primera instancia, a mediación ante un mediador inscrito en el registro del Ministerio de Justicia y Derechos Humanos, de común acuerdo entre las partes. Si la mediación fracasa, las partes someterán la controversia a la competencia de los tribunales ordinarios de justicia de Valparaíso."

**Cláusula séptima (plazo y término):**  
"El plazo del contrato es de un año, contado desde el 1 de junio de 2026 hasta el 1 de junio de 2027. Vencido este plazo, el contrato se renovará automáticamente por períodos sucesivos de un año, salvo que cualquiera de las partes manifieste su voluntad de ponerle término mediante desahucio notificado a la otra parte, por carta certificada o notificación personal efectuada por notario, con a lo menos 60 días de anticipación a la fecha de vencimiento del período en curso. El arrendatario podrá poner término anticipado al contrato, en cualquier momento, notificando a la arrendadora con 60 días de anticipación y pagando la renta correspondiente a dicho período de aviso. En tal caso, la arrendadora restituirá la garantía conforme a la cláusula tercera."

#### Qué verificar antes de firmar o actuar

- **Título de dominio de la arrendadora:** Solicitar copia del certificado de dominio vigente del Conservador de Bienes Raíces de Valparaíso, para verificar que Ana Rojas es propietaria del inmueble o está facultada para arrendarlo. El Código Civil, artículo 1916, permite arrendar cosa ajena, pero el arrendatario de buena fe tiene acción de saneamiento en caso de evicción.
- **Gravámenes y prohibiciones:** El certificado de dominio debe indicar si el inmueble tiene hipotecas, embargos, prohibiciones de celebrar actos y contratos u otros gravámenes que puedan afectar el goce pacífico del arrendatario.
- **Gastos comunes al día:** Si el inmueble pertenece a un condominio, solicitar certificado de la administración que acredite que los gastos comunes están pagados. El arrendatario no responde por deudas anteriores a su ocupación.
- **Contribuciones al día:** Solicitar certificado de avalúo y contribuciones del Servicio de Impuestos Internos, para verificar que no hay deuda de contribuciones. Aunque son de cargo del propietario, la mora puede derivar en embargo del inmueble.
- **Estado del inmueble:** Antes de firmar, inspeccionar el departamento y levantar un acta de entrega detallada, con inventario de especies (si las hay), descripción del estado de pisos, muros, puertas, ventanas, artefactos, instalaciones de agua, luz y gas, y registro fotográfico o de video con fecha. Firmar el acta junto con el contrato. Esto es esencial para aplicar el Código Civil, artículo 1947: sin constancia del estado inicial, se presume que el arrendatario recibió el inmueble en regular estado de servicio.
- **Copia de cédula de identidad de la arrendadora:** Para verificar la identidad y el RUT.
- **Domicilio de la arrendadora:** Para notificaciones. Incluirlo en el contrato.
- **Vigencia de las normas:** Las disposiciones del Código Civil sobre arrendamiento (arts. 1915 a 1977) y de la Ley 18.101 citadas en este análisis están vigentes a la fecha de hoy (25 de septiembre de 2026). Verificar en www.bcn.cl/leychile si ha habido modificaciones recientes.

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---

### d03-finiquito — documento: ¿Debo firmar este finiquito?

<details><summary>Material enviado al modelo (20 normas, 2 fallos o dictámenes, 1 artículos de doctrina; 2 normas descartadas por materia)</summary>

- Código del Trabajo, Artículo 161
- Código del Trabajo, Artículo 162
- Código del Trabajo, Artículo 163
- Código del Trabajo, Artículo 168
- Código del Trabajo, Artículo 169
- Código del Trabajo, Artículo 172
- Código del Trabajo, Artículo 177
- Código del Trabajo, Artículo 160
- Código del Trabajo, Artículo 446
- Código del Trabajo, Artículo 5
- Código del Trabajo, Artículo 7
- Código del Trabajo, Artículo 9
- Código del Trabajo, Artículo 163
- Código del Trabajo, Artículo 159
- Código del Trabajo, Artículo 161
- Código del Trabajo, Artículo 22
- Código del Trabajo, Artículo 67
- Código Civil, Artículo 1438
- Ley N° 18.101 sobre Arrendamiento de Predios Urbanos, Artículo 3
- Código Civil, Artículo 102
- Jurisprudencia: Dirección del Trabajo, Dictamen ORD. N°887, 2021-03-10
- Jurisprudencia: Dirección del Trabajo, Dictamen ORD. Nº4646/43, 2012-10-23
- Doctrina: Calahorrano Latorre, Edison, "El derecho al consentimiento informado de las personas mayores en el ámbito de salud. Estándares desde el derecho internacional de los derechos humanos y sus efectos en el ordenamiento jurídico chileno", Estudios constitucionales, vol. 19, N° 1, (2021), pp. 4-33, DOI: 10.4067/s0718-52002021000100004.
- ~~Ley N° 19.496 sobre Protección de los Derechos de los Consumidores, Artículo 3 bis~~ (materia consumidor ajena a laboral/procesal_civil/civil/comercial/arrendamiento/familia)
- ~~Constitución Política de la República de Chile, Artículo 19, N° 24~~ (materia constitucional ajena a laboral/procesal_civil/civil/comercial/arrendamiento/familia)

Versión anterior (main):
- Código del Trabajo, Artículo 163
- Código del Trabajo, Artículo 159
- Código del Trabajo, Artículo 161
- Ley N° 19.496 sobre Protección de los Derechos de los Consumidores, Artículo 3 bis
- Código del Trabajo, Artículo 22
- Código del Trabajo, Artículo 67
- Código Civil, Artículo 1438
- Ley N° 18.101 sobre Arrendamiento de Predios Urbanos, Artículo 3
- Código Civil, Artículo 102
- Constitución Política de la República de Chile, Artículo 19, N° 24

</details>

#### Respuesta a tu pregunta

**No debes firmar este finiquito.** Contiene múltiples vicios graves que lo hacen inválido y perjudicial para ti: no fue ratificado ante ministro de fe (requisito legal), el empleador no comunicó el despido por escrito ni con 30 días de anticipación, te hace renunciar a derechos irrenunciables (cotizaciones impagas, acciones por despido injustificado), calcula mal la indemnización (12 años de servicio, no 5) y no acredita el pago de cotizaciones previsionales al día. Si lo firmas sin ministro de fe, el empleador no podrá invocarlo (art. 177 del Código del Trabajo), pero tú habrás perdido tiempo y el empleador podría alegar que aceptaste. Exige que se corrija y se ratifique ante la Inspección del Trabajo, notario u otro ministro de fe legal.

#### Identificación

**Tipo de documento:** Finiquito de contrato de trabajo.  
**Partes:** Constructora Biobío Ltda. (empleador) y Jorge Castro (trabajador).  
**Fecha:** 15 de agosto de 2026, Concepción.  
**Objeto:** Poner término a la relación laboral iniciada el 1 de marzo de 2014 y finiquitada el 31 de julio de 2026, invocando la causal del artículo 161 del Código del Trabajo (necesidades de la empresa).  
**Ley aplicable:** Código del Trabajo, especialmente artículos 161, 162, 163, 168, 169, 172 y 177.

#### Resumen

El empleador pone término al contrato el 31 de julio de 2026 por necesidades de la empresa (art. 161), comunicándolo verbalmente ese mismo día. Paga indemnización por años de servicio calculada sobre 5 años ($6.000.000) y la remuneración de julio ($1.200.000). El trabajador declara recibir conforme y renuncia a toda acción judicial o administrativa, incluidas las por despido injustificado y cotizaciones impagas. El finiquito se firma solo entre las partes, sin ministro de fe. El documento adolece de vicios formales y sustantivos graves que lo hacen inválido y perjudicial para el trabajador.

#### Riesgos

| Cláusula | Problema | Norma | Gravedad | Recomendación |
|----------|----------|-------|----------|---------------|
| "El empleador comunicó el despido verbalmente el mismo 31 de julio." | La comunicación del despido por art. 161 debe ser **por escrito**, con 30 días de anticipación o pago sustitutivo, y copia a la Inspección del Trabajo. La comunicación verbal no cumple ninguno de estos requisitos. El despido es **inválido** y no produce efecto de poner término al contrato. | Art. 162 inc. 4° y art. 169 letra a) del Código del Trabajo | **Alta** | Exigir carta de despido escrita con aviso previo de 30 días o pago sustitutivo de un mes de remuneración, copia a la Inspección del Trabajo, y monto total de indemnizaciones. Sin ello, el despido no es válido. |
| "El presente finiquito se firma solo entre las partes, sin ministro de fe, y tendrá pleno valor liberatorio." | El finiquito **debe** ser ratificado ante ministro de fe (inspector del trabajo, notario, oficial del registro civil o secretario municipal) para que el empleador pueda invocarlo. Sin ratificación, **no tiene valor liberatorio** para el empleador. | Art. 177 inc. 1° del Código del Trabajo | **Alta** | No firmar sin ministro de fe. Exigir ratificación ante la Inspección del Trabajo, notario u otro ministro de fe legal. |
| "El trabajador [...] renuncia a toda acción judicial o administrativa en contra del empleador, cualquiera sea su naturaleza, incluidas las acciones por despido injustificado y por cotizaciones previsionales impagas." | Los derechos laborales son **irrenunciables** mientras subsista el contrato y aun después si se trata de derechos ya devengados (cotizaciones, indemnizaciones legales). Esta cláusula es **nula** de pleno derecho. | Art. 5 inc. 2° del Código del Trabajo | **Alta** | Eliminar toda renuncia de derechos. El finiquito solo puede dar por pagadas las sumas efectivamente recibidas, no renunciar a derechos futuros o ya devengados. |
| "Indemnización por años de servicio: 5 años, con última remuneración de $1.200.000: $6.000.000." | El trabajador prestó servicios desde el **1 de marzo de 2014** hasta el **31 de julio de 2026**: **12 años y 5 meses**. La indemnización legal es 30 días por año y fracción superior a 6 meses (art. 163 inc. 2°), con tope de 330 días. Corresponden **12 años completos** = 360 días, pero el tope es 330 días = **11 meses de remuneración** = $13.200.000. El documento paga solo $6.000.000 (5 meses). **Falta pagar $7.200.000**. | Art. 163 inc. 2° del Código del Trabajo | **Alta** | Exigir el pago de la indemnización legal completa: 330 días de remuneración = $13.200.000 (11 meses de $1.200.000). |
| (Ausencia de mención) | No se indica si el empleador pagó la **indemnización sustitutiva del aviso previo** (art. 162 inc. 4°), equivalente a un mes de remuneración ($1.200.000), ya que no dio aviso con 30 días de anticipación. Esta indemnización es **obligatoria** y adicional a la de años de servicio. | Art. 162 inc. 4° y art. 163 inc. 4° del Código del Trabajo | **Alta** | Exigir el pago de la indemnización sustitutiva del aviso previo: $1.200.000. |
| (Ausencia de mención) | El finiquito no acredita que el empleador haya pagado las **cotizaciones previsionales** (AFP, salud, seguro de desempleo) hasta el último día del mes anterior al despido (junio 2026). Sin esta acreditación ante ministro de fe, el finiquito **no produce efecto** de poner término al contrato (art. 162 inc. 5° y art. 177 inc. 8°). | Art. 162 inc. 5° y art. 177 incs. 8° a 11° del Código del Trabajo | **Alta** | Exigir certificados de las AFP, isapre/Fonasa y AFC que acrediten pago de cotizaciones hasta junio 2026, o copias de planillas de pago de julio 2026. El ministro de fe debe verificarlos antes de ratificar el finiquito. |
| (Ausencia de mención) | No se indica el **plazo de 10 días hábiles** que tiene el empleador para otorgar y pagar el finiquito desde la separación (31 de julio). El documento se firma el 15 de agosto (11 días hábiles después, aprox.). Si el empleador no cumplió el plazo, puede ser sancionado. | Art. 177 inc. 1° del Código del Trabajo | **Media** | Verificar si el empleador cumplió el plazo de 10 días hábiles. Si no, la Inspección del Trabajo puede multarlo. |
| (Ausencia de mención) | No se indica si el empleador envió **copia de la carta de despido a la Inspección del Trabajo** dentro de 3 días hábiles desde la separación (art. 162 inc. 3°). Como la comunicación fue verbal, no hay carta ni copia. Esto es una infracción sancionable. | Art. 162 inc. 3° del Código del Trabajo | **Media** | Exigir que el empleador cumpla con enviar copia de la carta de despido (una vez emitida) a la Inspección del Trabajo. |

#### Cláusulas ilegales o abusivas

**"El trabajador [...] renuncia a toda acción judicial o administrativa en contra del empleador, cualquiera sea su naturaleza, incluidas las acciones por despido injustificado y por cotizaciones previsionales impagas."**

Esta cláusula es **nula de pleno derecho** por contravenir el artículo 5 inciso 2° del Código del Trabajo: "Los derechos establecidos por las leyes laborales son irrenunciables, mientras subsista el contrato de trabajo." Aun después de terminado el contrato, los derechos ya devengados (cotizaciones impagas, indemnizaciones legales, remuneraciones adeudadas) son irrenunciables. El artículo 177 inciso final del Código del Trabajo establece que "El poder liberatorio del finiquito se restringirá sólo a aquello en que las partes concuerden expresamente y no se extenderá a los aspectos en que el consentimiento no se forme." Una renuncia general a toda acción no tiene valor.

**"El presente finiquito se firma solo entre las partes, sin ministro de fe, y tendrá pleno valor liberatorio."**

Esta cláusula contradice el artículo 177 inciso 1° del Código del Trabajo: "El finiquito [...] que no fuere firmado por el interesado y por el presidente del sindicato o el delegado sindical respectivos, o que no fuere ratificado por el trabajador ante el inspector del trabajo, no podrá ser invocado por el empleador." Sin ratificación ante ministro de fe, el finiquito **no tiene valor liberatorio** para el empleador, aunque el trabajador lo firme. La cláusula pretende atribuir un efecto que la ley no reconoce.

#### Lo que falta

1. **Carta de despido escrita** (art. 162 inc. 4°): debe expresar la causal (art. 161 inc. 1°), los hechos que la fundan, el monto total de indemnizaciones, y enviarse con 30 días de anticipación o pagar indemnización sustitutiva del aviso previo. Debe enviarse copia a la Inspección del Trabajo.

2. **Indemnización sustitutiva del aviso previo** (art. 162 inc. 4°): equivalente a la última remuneración mensual ($1.200.000), por no haber dado aviso con 30 días de anticipación.

3. **Indemnización por años de servicio correcta** (art. 163 inc. 2°): 330 días de remuneración (tope legal) = $13.200.000, no $6.000.000.

4. **Acreditación de pago de cotizaciones previsionales** (art. 162 inc. 5° y art. 177 incs. 8° a 11°): certificados de AFP, isapre/Fonasa y AFC que acrediten pago hasta junio 2026, o copias de planillas de pago de julio 2026. El ministro de fe debe verificarlos antes de ratificar el finiquito.

5. **Ratificación ante ministro de fe** (art. 177 inc. 1°): inspector del trabajo, notario, oficial del registro civil o secretario municipal. Sin ella, el finiquito no tiene valor liberatorio para el empleador.

6. **Información sobre finiquito electrónico** (art. 177 inc. 3°): el empleador debe informar en el aviso de término si otorgará el finiquito en forma presencial o electrónica, y que es voluntario para el trabajador aceptar la forma electrónica.

7. **Información sobre reserva de derechos** (art. 177 inc. 3°): el empleador debe informar al trabajador que puede formular reserva de derechos al firmar el finiquito (art. 177 inc. 6°).

8. **Vacaciones proporcionales** (art. 67 y ss.): si el trabajador no hizo uso de todo su feriado legal, debe pagarse el saldo proporcional. El documento no menciona este ítem.

9. **Gratificación proporcional** (art. 47 y ss.): si el empleador paga gratificación anual, debe pagarse la parte proporcional a los meses trabajados en 2026 (enero a julio). El documento no menciona este ítem.

10. **Horas extras adeudadas** (art. 32 y ss.): si las hubiere. El documento no menciona este ítem.

#### Fechas, plazos y montos

| Ítem | Valor/Fecha | Implicancia |
|------|-------------|-------------|
| Inicio del contrato | 1 de marzo de 2014 | Antigüedad: **12 años y 5 meses** al 31 de julio de 2026. |
| Término del contrato | 31 de julio de 2026 | Fecha de separación. Desde aquí corren los plazos para otorgar finiquito (10 días hábiles), enviar carta de despido a la Inspección (3 días hábiles) y reclamar judicialmente (60 días hábiles, suspendibles). |
| Comunicación del despido | 31 de julio de 2026 (verbal) | **Inválida**: debe ser por escrito, con 30 días de anticipación o pago sustitutivo, y copia a la Inspección del Trabajo (art. 162 inc. 4°). |
| Firma del finiquito | 15 de agosto de 2026 | 11 días hábiles después de la separación (aprox.). El empleador tenía 10 días hábiles para otorgar y pagar el finiquito (art. 177 inc. 1°). Posible incumplimiento de plazo. |
| Indemnización por años de servicio (documento) | $6.000.000 (5 años × $1.200.000) | **Error de cálculo**: corresponden 12 años completos (la fracción de 5 meses no supera 6 meses, no se cuenta). Indemnización legal: 30 días × 12 años = 360 días, pero tope de 330 días (art. 163 inc. 2°) = 11 meses × $1.200.000 = **$13.200.000**. **Falta pagar $7.200.000**. |
| Indemnización sustitutiva del aviso previo | No mencionada | **Debe pagarse**: 1 mes de remuneración = $1.200.000 (art. 162 inc. 4°), por no haber dado aviso con 30 días de anticipación. |
| Remuneración de julio 2026 | $1.200.000 | Pago correcto si trabajó el mes completo hasta el 31 de julio. |
| Incremento de indemnización por despido improcedente (art. 161) | 30% sobre la indemnización del art. 163 | Si reclamas y el tribunal declara improcedente la causal del art. 161, la indemnización de $13.200.000 se incrementa en 30% = **$17.160.000** (art. 168 letra a). |

#### Redacción sugerida

**CLÁUSULA SEGUNDA (reemplazo completo):**

"SEGUNDO: El empleador paga en este acto al trabajador las siguientes sumas, en dinero efectivo [o mediante transferencia electrónica a la cuenta corriente/vista N° _____ del Banco _____]:

a) Indemnización por años de servicio (art. 163 inc. 2° del Código del Trabajo): 330 días de remuneración, equivalente a 11 meses de $1.200.000: **$13.200.000**.

b) Indemnización sustitutiva del aviso previo (art. 162 inc. 4° del Código del Trabajo): 1 mes de remuneración: **$1.200.000**.

c) Remuneración de julio de 2026: **$1.200.000**.

d) Vacaciones proporcionales [indicar días y monto, si corresponde].

e) Gratificación proporcional enero-julio 2026 [indicar monto, si corresponde].

f) [Otros ítems adeudados: horas extras, bonos, etc., si corresponde].

**TOTAL PAGADO: $______** [sumar todos los ítems].

El trabajador declara haber recibido conforme las sumas indicadas en esta cláusula, las que dan por pagadas íntegramente las prestaciones derivadas del contrato de trabajo y su terminación, **sin perjuicio de su derecho a formular reserva de derechos en los términos del artículo 177 inciso 6° del Código del Trabajo**."

**CLÁUSULA TERCERA (nueva, reemplaza la actual cláusula tercera):**

TERCERO: El trabajador declara haber sido informado de su derecho a formular reserva de derechos al momento de suscribir este finiquito, en los términos del artículo 177 inciso 6° del Código del Trabajo. [Si el trabajador formula reserva, agregar:] El trabajador se reserva el derecho a accionar judicialmente en contra del empleador por [indicar materias reservadas: despido injustificado, cotizaciones impagas, diferencias de remuneración, etc.]. (no verificado en esta búsqueda)

**CLÁUSULA CUARTA (nueva, reemplaza la actual cláusula cuarta):**

CUARTO: El presente finiquito se ratifica ante [inspector del trabajo / notario público / oficial del registro civil / secretario municipal] de [ciudad], en cumplimiento del artículo 177 del Código del Trabajo. El ministro de fe deja constancia de haber verificado el pago íntegro de las cotizaciones previsionales devengadas hasta el último día del mes anterior al despido (junio 2026), mediante los certificados emitidos por [AFP, isapre/Fonasa, AFC] que se adjuntan a este finiquito [o mediante las copias de las planillas de pago de julio 2026 que se adjuntan]. (no verificado en esta búsqueda)

**CARTA DE DESPIDO (documento nuevo, debe emitirse antes del finiquito):**

"Concepción, [fecha con 30 días de anticipación al término, o fecha del término si se paga indemnización sustitutiva].

Señor Jorge Castro  
RUT 12.000.000-0  
Presente

De nuestra consideración:

Por medio de la presente, y en cumplimiento de lo dispuesto en el artículo 162 inciso 4° del Código del Trabajo, comunicamos a usted que hemos resuelto poner término a su contrato de trabajo, invocando la causal del artículo 161 inciso 1° del Código del Trabajo (necesidades de la empresa, establecimiento o servicio).

**Hechos que fundan la causal:** [Indicar con precisión los hechos: racionalización, modernización, bajas en la productividad, cambios en las condiciones del mercado o de la economía, etc. Por ejemplo: "Reducción del 40% de los contratos de obra pública adjudicados a la empresa en el período enero-julio 2026, en comparación con el mismo período de 2025, lo que ha generado una disminución de la carga de trabajo y hace necesaria la separación de personal del área de [área del trabajador]."]

**Fecha de término del contrato:** 31 de julio de 2026 [o la fecha que corresponda, 30 días después de esta carta si se da aviso previo].

**Indemnizaciones a pagar:**

a) Indemnización por años de servicio (art. 163 inc. 2°): 330 días de remuneración = $13.200.000.

b) Indemnización sustitutiva del aviso previo (art. 162 inc. 4°): 1 mes de remuneración = $1.200.000 [solo si no se da aviso con 30 días de anticipación].

c) Remuneración de julio 2026: $1.200.000.

d) [Otros ítems: vacaciones, gratificación, etc.].

**TOTAL A PAGAR: $______**.

El finiquito será otorgado y puesto a su disposición dentro de los 10 días hábiles siguientes a la fecha de término del contrato, en [lugar], y podrá ser ratificado ante [ministro de fe]. Usted tiene derecho a formular reserva de derechos al momento de firmar el finiquito.

Se adjunta copia de esta carta para la Inspección del Trabajo de [ciudad], en cumplimiento del artículo 162 inciso 3° del Código del Trabajo.

Saluda atentamente,

[Firma y timbre del empleador]  
Constructora Biobío Ltda."

#### Qué verificar antes de firmar o actuar

1. **Carta de despido escrita:** Exige que el empleador emita la carta de despido por escrito, con todos los requisitos del artículo 162 inciso 4° (causal, hechos, monto total de indemnizaciones, aviso previo de 30 días o pago sustitutivo, copia a la Inspección del Trabajo). Sin ella, el despido no es válido.

2. **Certificados de cotizaciones previsionales:** Antes de ratificar el finiquito ante ministro de fe, verifica que el empleador presente los certificados de AFP, isapre/Fonasa y AFC que acrediten el pago de cotizaciones hasta junio 2026, o las copias de las planillas de pago de julio 2026. El ministro de fe debe verificarlos (art. 177 incs. 8° a 11°). Si hay cotizaciones impagas, el finiquito no produce efecto de poner término al contrato.

3. **Cálculo de indemnizaciones:** Verifica que el monto de la indemnizaciónpor años de servicio sea correcto: 12 años completos × 30 días = 360 días, con tope de 330 días = 11 meses × $1.200.000 = $13.200.000. Verifica también que se incluya la indemnización sustitutiva del aviso previo ($1.200.000) y todos los demás ítems adeudados (vacaciones, gratificación, horas extras).

4. **Reserva de derechos:** Si tienes dudas sobre algún aspecto del finiquito o del despido, formula **reserva de derechos** al momento de firmarlo ante el ministro de fe (art. 177 inc. 6°). Por ejemplo: Me reservo el derecho a accionar judicialmente por despido improcedente y por diferencias de indemnización. (no verificado en esta búsqueda) La reserva no impide el pago de las sumas no disputadas.

5. **Plazo para reclamar:** Si consideras que el despido es improcedente (la causal del art. 161 no se justifica) o que faltan pagos, tienes **60 días hábiles** desde el 31 de julio de 2026 para reclamar ante el juzgado de letras del trabajo (art. 168 inc. 1°). Este plazo se suspende si reclamas ante la Inspección del Trabajo, pero en ningún caso puedes recurrir al tribunal después de **90 días hábiles** desde la separación. Consulta con un abogado laboralista o acude a la Corporación de Asistencia Judicial si necesitas asesoría gratuita.

6. **Vigencia de las normas:** Las normas citadas (arts. 161, 162, 163, 168, 169, 172 y 177 del Código del Trabajo) están vigentes a la fecha de hoy (25 de septiembre de 2026). La Ley 21.394 de 2021 modificó algunos plazos y requisitos del finiquito (ratificación electrónica, reserva de derechos, acreditación de cotizaciones); verifica que el empleador cumpla con la normativa actualizada.

7. **Asesoría legal:** Antes de firmar cualquier documento, consulta con un abogado laboralista o acude a la Inspección del Trabajo de Concepción para que revisen el finiquito y te orienten sobre tus derechos. La Inspección puede exigir al empleador la acreditación del pago de cotizaciones y el cumplimiento de los requisitos legales (art. 162 inc. 10°).

Información jurídica general; no reemplaza la asesoría de un abogado que revise tu caso.

---
