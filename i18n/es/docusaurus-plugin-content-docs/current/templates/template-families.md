---
sidebar_position: 7
---

# Familias de plantillas

7CG no trata todas las plantillas igual. En la práctica, las plantillas se agrupan en familias, y esas familias determinan dónde aparece la plantilla en la interfaz.

Para los autores, esto importa porque una plantilla bien construida puede sentirse "ausente" si usa el nombre de familia equivocado.

## Qué significa una familia

En 7CG, una familia de plantilla es, en la práctica, el prefijo del ID de la plantilla.

Ejemplos:

- `LOWERTHIRDS/MyNameplate`
- `CREDITS/EndRoll`
- `BIBLE/VerseBox`
- `HYMNS/WorshipLyrics`

7CG usa estos prefijos para decidir qué plantillas mostrar en selectores especializados.

## Familias usadas hoy por 7CG

### `LOWERTHIRDS`

Usado por:

- Módulo Tercios Inferiores
- Flujos de edición de tercios inferiores en el rundown

Usa esta familia para:

- bandas de nombre
- gráficos de título
- superposiciones de tercio inferior
- identificación de oradores e invitados

### `CREDITS`

Usado por:

- Módulo Créditos
- Elementos de créditos en el rundown

Usa esta familia para:

- créditos finales
- agradecimientos
- listas de voluntarios y equipo
- créditos de producción

### `BIBLE`

Usado por:

- Módulo Biblia
- Selección de plantillas relacionada con Biblia

Usa esta familia para:

- cajas de versículo
- superposiciones de Escrituras
- gráficos de lectura bíblica

### `HYMNS`

Usado por:

- Módulo Letras
- Selección de plantillas relacionada con letras

Usa esta familia para:

- letras de adoración
- superposiciones de himno
- visualizaciones de versículos agrupados

### `QRCODE`

Usado por:

- Flujos de código QR y elementos QR del rundown

Usa esta familia para:

- plantillas de visualización de QR
- superposiciones con QR para abrir
- códigos de donación o inscripción

## Por qué importa la familia

Si el prefijo está mal:

- la plantilla puede no aparecer en el módulo esperado
- los operadores pueden no encontrarla en el selector correcto
- se puede forzar el flujo equivocado al usuario

Ejemplo:

- una plantilla de tercio inferior llamada `MISC/MyNameplate` puede existir, pero no aparecerá donde los operadores esperan sus tercios inferiores

## Elegir la familia correcta

Una regla sencilla funciona bien:

- Si la plantilla tiene un módulo dedicado, usa la familia de ese módulo
- Si la plantilla está pensada para un tipo de bloque específico del rundown, usa la familia de ese bloque
- Si es realmente miscelánea, evita fingir que pertenece a un flujo especializado

Usa la familia especializada solo cuando la plantilla está realmente pensada para ese flujo.

## ¿Y "Otras Plantillas"?

El módulo **Otras Plantillas** es actualmente un panel genérico ligero.

Esto significa:

- es útil para gráficos utilitarios extra
- no es el hogar principal de las familias especializadas anteriores

Si construyes un tercio inferior, plantilla de créditos, plantilla bíblica o plantilla de letras como Dios manda, colócala en la familia correspondiente en lugar de tratar Otras Plantillas como destino principal.

## Consejos de nomenclatura

Un buen ID de plantilla debería ser:

- con la familia primero
- legible
- estable en el tiempo

Buenos ejemplos:

- `LOWERTHIRDS/SpeakerSimple`
- `LOWERTHIRDS/TwoLineBox`
- `CREDITS/ScrollingRoll`
- `BIBLE/VerseLowerThird`
- `HYMNS/CenteredLyrics`

Ejemplos menos útiles:

- `LOWERTHIRDS/Template1`
- `MISC/Test`
- `NEW/Untitled`

## Flujo recomendado para autores

Al crear una nueva plantilla:

1. Decide qué flujo de 7CG debería poseerla.
2. Elige el prefijo de familia correspondiente.
3. Añade `title` y `description` claros en el GDD.
4. Refresca las plantillas en 7CG.
5. Confirma que la plantilla aparece en el selector previsto.

## Páginas relacionadas

- [Desarrollo de plantillas](./)
- [Inicio rápido: campos de plantilla](./quick-start)
- [Pruebas y depuración de plantillas](./testing-and-debugging)

## Pasos siguientes

- [Pruebas y depuración de plantillas](./testing-and-debugging) para verificar el descubrimiento y la colocación en el selector
- [Inicio rápido: campos de plantilla](./quick-start) para refinar los campos dentro de la propia plantilla
