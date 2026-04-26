---
sidebar_position: 9
---

# Módulo Capas

El módulo **Capas** es la vista de solo lectura de 7CG sobre la ocupación actual de capas en CasparCG.

Está pensado para operadores que necesitan entender qué se está reproduciendo, dónde, y si una acción planificada podría chocar con una asignación de capa existente.

Ofrece:

- Una lista en vivo de capas ocupadas, agrupadas por canal
- Etiquetas de tipo por capa, como medios, plantilla, color o audio
- Etiquetado de capa y CG layer
- Nombres visibles del clip, plantilla o color actuales
- Un indicador de pausa cuando la reproducción está pausada

## Visión general

El módulo Capas te permite:

- Ver qué canales tienen capas ocupadas
- Inspeccionar el número de capa y, cuando aplique, el slot de CG layer
- Distinguir entre medios, plantillas, rellenos de color, audio y ocupación desconocida
- Detectar rápidamente productores de medios en pausa
- Resolver conflictos antes de lanzar nuevos medios o gráficos

Este módulo es intencionalmente diagnóstico. No lanza, detiene ni edita contenido directamente.

La misma vista de capas también está incrustada en el cuadro **Avanzado** de los bloques del rundown, de modo que puedas detectar posibles conflictos sin salir del bloque que estás editando.

## Componentes de la interfaz

### Grupos por canal

Las capas ocupadas se agrupan por canal y se ordenan de forma ascendente.

Esto mantiene legibles los flujos multicanal y ayuda a los operadores a escanear rápidamente el estado de salida activo.

### Etiquetas de capa

Cada fila muestra la capa actual en el formato:

- `L10`
- `L20/1`

Cuando se conoce una CG layer, 7CG la añade después de la capa principal para entender con más precisión la ocupación por plantillas.

### Etiquetas de tipo

Cada capa ocupada recibe una etiqueta de tipo según el ocupante actual:

- `medios`
- `plantilla`
- `color`
- `audio`
- `desconocido`

Ayuda a distinguir de un vistazo la reproducción normal de un clip frente a gráficos de plantilla, rellenos sólidos u otras fuentes de ocupación.

### Nombre del ocupante

El área de texto principal muestra el nombre del ocupante actual cuando está disponible:

- Ruta del clip de medios
- Nombre de plantilla
- Valor del relleno de color

Si no hay nombre disponible, el módulo muestra un marcador en lugar de fingir que la capa está identificada.

### Indicador de pausa

Cuando un productor de medios monitorizado está pausado, la fila muestra una etiqueta **pausado**.

Útil cuando una capa sigue ocupada pero no está reproduciendo activamente.

## Fuentes de datos y comportamiento

El módulo Capas se alimenta del store compartido de ocupación de capas en el renderer.

Ese store se actualiza desde dos fuentes principales:

- **Transmisiones de ocupación de capas** emitidas tras comandos exitosos de CasparCG
- **Actualizaciones del reproductor / OSC** para estado del productor, como reproducción pausada y medios detenidos

### Ocupación por comando

Tras comandos exitosos de CasparCG, 7CG transmite actualizaciones de ocupación a las ventanas del renderer para que la app pueda seguir lo que se está reproduciendo sin hacer polling continuo a CasparCG.

Especialmente útil para:

- Plantillas CG
- Rellenos de color
- Clips de medios limpiados con `EMPTY`

### Actualizaciones del reproductor / OSC

Las actualizaciones de los productores de medios también alimentan el store para que 7CG pueda:

- Marcar capas de medios como pausadas
- Limpiar capas cuando la reproducción se detiene o el productor desaparece

Juntas, estas fuentes hacen al módulo Capas más útil que un simple panel de estado solo de medios.

## Estado vacío

Cuando no hay capas ocupadas registradas, el módulo muestra:

- `Sin capas activas`

Significa que el store no tiene entradas de ocupación activas para mostrar.

## Lo que el módulo no hace

El módulo Capas no es una superficie de control. No ofrece:

- Botones de reproducir o detener
- Reasignación de capas
- Edición de plantillas
- Creación de elementos de rundown
- Resolución directa de conflictos

Su función es hacer visible el estado actual para que los operadores tomen mejores decisiones en otras partes de la interfaz.

## Flujo típico

### Resolución en vivo

1. Abre el módulo Capas
2. Comprueba qué canal y capa están ya ocupados
3. Confirma si el ocupante es medios, plantilla, color, audio o desconocido
4. Usa esa información antes de lanzar otro elemento sobre el mismo destino

### Comprobaciones de pausa / estado atascado

1. Busca una capa que siga apareciendo ocupada
2. Comprueba si la fila está marcada como **pausada**
3. Usa el módulo de reproducción o gráficos correspondiente para limpiar o reemplazar el contenido si es necesario

## Buenas prácticas

- Mantén el módulo Capas visible durante ensayos y producciones complejas en vivo
- Úsalo para confirmar reservas de capas dedicadas a bugs, tercios inferiores, Biblia, letras y créditos
- Trátalo como ayuda de diagnóstico, no como fuente única de verdad para todos los casos límite de CasparCG
- Combínalo con Medios, Información del Canal y Rundown al investigar por qué algo sigue al aire

## Páginas relacionadas

- [Visión general de los módulos](./)
- [Módulo Medios](./media)
- [Módulo Información del Canal](./channel-graphics)
- [Diseños](../configuration/layouts)
