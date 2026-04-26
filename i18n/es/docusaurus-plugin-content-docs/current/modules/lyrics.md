---
sidebar_position: 3
---

# Módulo Letras

El módulo **Letras** es el flujo de 7CG para mostrar canciones e himnos en cultos, conciertos y otras producciones que necesitan letras en pantalla.

Combina:

- Un selector de himnario
- Búsqueda de himnos
- Salida al aire basada en plantillas
- Visualización por versículo o agrupación de varios versículos
- Controles de navegación para el grupo de letras actual
- Integración directa con el estado del rundown y de Companion

## Visión general

El módulo Letras te permite:

- Seleccionar un himnario
- Buscar himnos por número o título
- Cargar una plantilla de letras
- Mostrar un versículo a la vez o agrupar varios
- Avanzar y retroceder por la canción actual
- Detener la salida actual de letras
- Añadir el himno configurado al rundown

## Componentes de la interfaz

### Selector de plantilla

El módulo puede mostrar un desplegable **Plantilla** cuando la selección de plantillas está activada en los ajustes de Letras.

Las entradas provienen de la lista de plantillas de CasparCG y se filtran por la familia de plantillas de letras. Cuando está disponible, 7CG muestra el título y la descripción traducidos en lugar del ID en bruto.

Si la selección de plantillas está oculta, el módulo usa la plantilla predeterminada automáticamente.

### Selector de himnario

El desplegable **Himnario** elige el himnario o colección que el módulo debe explorar.

7CG carga primero los metadatos del himnario y después las canciones a demanda. Si se ha configurado un himnario predeterminado, se selecciona automáticamente.

### Búsqueda de himno

El combobox **Himno** admite filtro libre por:

- Número del himno
- Título de la canción

Permite saltar rápidamente a una canción incluso en un himnario grande.

Mientras se cargan los datos, el módulo muestra un estado de carga en lugar de una lista vacía.

### Previsualización de letras

Cuando hay una canción seleccionada, el módulo muestra:

- El grupo de letras **actual**
- El grupo de letras **siguiente**, cuando existe

Útil durante la operación en vivo porque el operador ve tanto lo que está al aire como lo que vendrá a continuación.

## Reproducción y navegación

El módulo Letras usa un flujo de plantilla CG:

- **Lanzar** realiza la carga inicial de la plantilla y pone el primer grupo de letras al aire
- **Atrás** actualiza la plantilla al grupo anterior
- **Inicio** vuelve al primer grupo
- **Avanzar** actualiza la plantilla al grupo siguiente
- **Detener** retira las letras del aire

Tras el lanzamiento, la navegación actualiza la plantilla existente en lugar de recargarla desde cero.

## Visualización agrupada

El módulo Letras no tiene por qué mostrar solo un versículo a la vez.

El ajuste **Líneas por pantalla** controla cuántos versículos se agrupan en cada paso al aire:

- `1` significa que cada versículo se muestra por separado
- Valores mayores combinan varios versículos en un mismo bloque

Cuando se agrupan varios versículos, 7CG los une con saltos de línea y trata el grupo como un único paso de navegación. La previsualización sigue la misma lógica.

## Ajustes

El cuadro de ajustes de Letras incluye cuatro opciones importantes:

### Plantilla predeterminada

La plantilla que se selecciona por defecto al iniciar 7CG.

### Himnario predeterminado

El himnario que se selecciona automáticamente cuando es posible.

### Selección de plantilla

Controla si el desplegable de Plantilla aparece en la UI del módulo:

- **Mostrar** mantiene el selector visible
- **Ocultar** usa siempre la plantilla predeterminada

### Líneas por pantalla

Controla cuántos versículos se agrupan en cada paso al aire.

Útil para adaptarse a:

- Pantallas de proyección grandes
- Plantillas tipo tercio inferior
- Requisitos de legibilidad para el público
- Estilos visuales distintos para streaming frente a presentación en sala

Los bloques de himno del rundown pueden sobrescribir este valor con un ajuste **"líneas por pantalla" por bloque** en el cuadro de edición del bloque, de modo que un himno concreto pueda dividirse de forma distinta al ajuste global.

## Edición masiva de versículos

Puedes editar muchos versículos de un himno a la vez en lugar de abrir el cuadro de cada versículo. Abre un himno para edición y usa el cuadro de edición masiva para revisar varios versículos en una sola pasada — útil para corregir erratas, normalizar mayúsculas o aplicar la misma corrección en todas las estrofas.

## Atajos de teclado

Cuando las letras están al aire, el módulo escucha la navegación por teclado:

- `Flecha derecha` — Grupo siguiente
- `Flecha izquierda` — Grupo anterior
- `Flecha arriba` — Volver al primer grupo
- `Escape` — Detener la salida

Especialmente útiles cuando el operador necesita seguir una actuación en vivo con rapidez.

## Integración con Companion

El módulo Letras también participa en el estado de himno consciente de Companion.

Cuando las letras se lanzan directamente, 7CG sigue:

- Índice del grupo de letras actual
- Total de grupos

Ese estado puede ser usado por flujos de Companion y la lógica de navegación de versículos para que las superficies externas sigan sincronizadas con la posición actual del himno.

## Añadir al rundown

La acción **Añadir al rundown** crea una entrada de himno con:

- La canción seleccionada
- El himnario seleccionado
- Todos los IDs de estrofa de la canción
- La plantilla de letras seleccionada

Permite preparar canciones con antelación y ejecutarlas desde el módulo Rundown en lugar de dispararlas ad hoc.

## Flujo típico

### Operación directa

1. Selecciona el himnario
2. Busca el himno por número o título
3. Confirma la plantilla
4. Pulsa **Lanzar**
5. Usa **Atrás**, **Inicio** y **Avanzar** durante la canción
6. Pulsa **Detener** al terminar

### Flujo de programa preparado

1. Selecciona himnario e himno
2. Confirma la plantilla y la agrupación
3. Haz clic en **Añadir al rundown**
4. Repite para el resto del set
5. Ejecuta las entradas de himno más tarde desde el módulo Rundown

## Buenas prácticas

- Usa un himnario predeterminado para que los voluntarios empiecen en la colección correcta
- Oculta la selección de plantilla cuando los operadores deban usar siempre la misma
- Prueba distintos valores de **Líneas por pantalla** con tu plantilla y tamaño de pantalla reales
- Mantén un operador dedicado a la navegación de letras durante música en vivo si el tempo no es fijo
- Añade canciones al rundown con antelación para producciones más repetibles

## Páginas relacionadas

- [Visión general de los módulos](./)
- [Módulo Rundown](./rundown)
- [Integración con Companion](../configuration/companion)
