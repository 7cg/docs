---
sidebar_position: 4
---

# Módulo Biblia

El módulo **Biblia** es el flujo de 7CG para mostrar Escrituras en cultos, estudios y producciones que necesitan pasajes bíblicos en pantalla.

Combina:

- Selección de versión bíblica con filtro por idioma
- Un selector de pasaje guiado para libros, capítulos y versículos
- Salida al aire basada en plantillas
- División automática de pasajes largos en fragmentos
- Navegación directa entre fragmentos y versículos
- Integración con el estado del rundown y de Companion

## Visión general

El módulo Biblia te permite:

- Seleccionar la traducción bíblica a usar
- Elegir un libro, capítulo y versículo o rango
- Elegir una plantilla bíblica cuando la selección de plantillas está activada
- Personalizar propiedades de plantilla compatibles
- Controlar cómo se dividen los pasajes largos con **Máx. caracteres**
- Previsualizar o reproducir el pasaje actual
- Avanzar y retroceder entre fragmentos o versículos
- Detener la salida actual de la Biblia
- Añadir el pasaje configurado al rundown

## Componentes de la interfaz

### Selector de plantilla

El módulo puede mostrar un desplegable **Plantilla** cuando la selección de plantillas está activada en los ajustes de la Biblia.

Cuando el selector está visible, los operadores pueden sustituir la plantilla predeterminada para la sesión actual. Cuando está oculto, el módulo siempre usa la plantilla predeterminada.

Las entradas de plantilla provienen de la lista de plantillas de CasparCG y se filtran por la familia de plantillas bíblicas.

### Personalización de plantilla

Si la plantilla seleccionada expone propiedades GDD configurables, el módulo muestra un botón **Personalizar Plantilla**.

Permite a los operadores sobrescribir campos de la plantilla antes de salir al aire. Esos valores personalizados acompañan la reproducción y también se pueden guardar con un elemento del rundown.

Los **bloques del rundown** de Biblia también exponen propiedades de plantilla **por bloque** mediante su cuadro de edición, de modo que un único pasaje del programa puede usar ajustes distintos (p. ej., otro fondo o diseño) sin cambiar los predeterminados del módulo.

### Selector de versión bíblica

El combobox **Versión** muestra las traducciones disponibles filtradas por los idiomas activos en los ajustes de la Biblia.

7CG intenta empezar con la traducción predeterminada cuando coincide con el filtro de idioma activo. Si no, recurre a otra traducción disponible dentro de los idiomas permitidos.

### Selector de pasaje

El campo **Pasaje** abre un selector guiado para:

- Selección de libro
- Selección de capítulo
- Selección del versículo inicial
- Selección opcional del versículo final para un rango

El paso de libro admite búsqueda insensible a acentos, lo que facilita encontrar libros rápidamente en conjuntos bíblicos localizados.

El selector también permite limpiar la selección actual desde la UI principal del módulo.

### Máx. caracteres

El campo **Máx. caracteres** controla cuánto texto del pasaje cabe en cada fragmento al aire.

Importa cuando:

- Una plantilla tiene espacio de texto limitado
- Quieres fragmentos más cortos y legibles para proyección
- Estás preparando exportaciones y quieres un ritmo más limpio en pasajes largos

Cuando la plantilla seleccionada define un límite de longitud de texto en sus metadatos GDD, 7CG usa ese valor como punto de partida.

## Reproducción y navegación

El módulo Biblia usa un flujo de plantilla CG:

- **Reproducir** realiza la carga inicial de la plantilla cuando es necesaria y envía el fragmento actual al aire
- **Anterior** retrocede al fragmento anterior, o al versículo anterior si ya estás en el primer fragmento
- **Siguiente** avanza al fragmento siguiente, o al versículo siguiente si ya estás en el último fragmento
- **Detener** limpia el CG de Biblia de su canal, capa y CG layer configurados

Tras la carga inicial, la navegación actualiza la plantilla activa en lugar de recargarla cada vez.

### Visualización en fragmentos

Cuando el pasaje seleccionado es más largo que el límite de caracteres configurado, 7CG:

- Une el versículo o rango seleccionado en un solo bloque de texto
- Divide ese texto en fragmentos legibles
- Sigue el índice del fragmento actual por separado de la posición del versículo

Esto significa que **Anterior** y **Siguiente** son primero conscientes del fragmento y después conscientes del versículo en los límites.

El panel de previsualización muestra:

- La referencia del pasaje seleccionado
- El texto del fragmento actual
- Un contador de fragmentos como `1/3` cuando hay varios
- Indicadores de límite cuando otro versículo está disponible antes o después del fragmento actual

## Previsualización y enrutamiento avanzado

El botón de ojo más a la izquierda activa el modo **Previsualización**.

Con la previsualización activada, la Biblia se envía al canal de preview `2` en lugar del canal normal. Útil para revisar el pasaje y la plantilla antes de salir en directo.

El cuadro **Avanzado** permite sobrescribir enrutamiento y tiempos:

- Canal
- Capa
- CG layer
- Retardo
- Duración

Estas opciones se aplican a la reproducción directa desde el módulo y se guardan con el estado actual del comando.

## Ajustes

El cuadro de ajustes de la Biblia incluye los predeterminados principales del módulo:

### Plantilla predeterminada

Establece la plantilla que el módulo debería usar automáticamente cuando la selección de plantillas está oculta, o como elección inicial cuando está visible.

### Traducción predeterminada

Establece la traducción que 7CG debería preferir cuando esté disponible dentro del filtro de idioma activo.

### Filtrar por idioma

Limita las versiones visibles a uno o más grupos de idiomas habilitados.

Mantiene enfocado el selector de versión y es especialmente útil en entornos multilingües.

### Selección de plantilla

Controla si los operadores ven el desplegable de Plantilla en el módulo principal:

- **Mostrar** permite sustituciones por sesión
- **Ocultar** impone la plantilla predeterminada configurada

## Integración con Companion

El módulo Biblia publica estado consciente de la navegación para flujos de Companion.

Cuando un pasaje se lanza desde el módulo, 7CG sigue y transmite:

- Índice del fragmento actual
- Total de fragmentos
- Número del versículo actual
- Total de versículos del capítulo
- Referencia del pasaje actual

Esto ayuda a que los botones y feedbacks de Companion permanezcan alineados con el estado de las Escrituras en vivo.

## Añadir al rundown

La acción **Añadir al rundown** crea una entrada de Biblia que contiene:

- La referencia del pasaje como etiqueta
- El texto completo del pasaje como notas
- Información de libro y capítulo
- El rango de versículos seleccionado
- El valor actual de **Máx. caracteres**
- El ID de la Biblia seleccionada
- El ID de la plantilla resuelta
- Cualquier dato personalizado de la plantilla

Es el flujo correcto cuando quieres tener los mismos gráficos de Escrituras preparados con antelación en vez de elegirlos ad hoc durante el culto.

## Flujo típico

### Operación directa

1. Selecciona la versión de la Biblia
2. Abre el selector de pasaje y elige libro, capítulo y versículo o rango
3. Confirma la plantilla
4. Ajusta **Máx. caracteres** si el pasaje necesita fragmentos más cortos
5. Usa **Previsualización** si quieres probar en el canal `2`
6. Pulsa **Reproducir**
7. Usa **Anterior** y **Siguiente** durante la lectura
8. Pulsa **Detener** al terminar

### Flujo de programa preparado

1. Selecciona traducción y pasaje
2. Confirma la plantilla y las propiedades personalizadas
3. Ajusta **Máx. caracteres** para el estilo de visualización deseado
4. Haz clic en **Añadir al rundown**
5. Repite para otras lecturas
6. Ejecuta las entradas de Biblia más tarde desde el módulo Rundown

## Buenas prácticas

- Usa el filtro de idioma para que los operadores solo vean traducciones relevantes
- Oculta la selección de plantilla cuando todos los pasajes deben usar una plantilla aprobada
- Prueba pasajes largos con la plantilla real para que **Máx. caracteres** se ajuste a tu área de texto
- Usa el modo Previsualización antes de salir al aire cuando los operadores deban verificar la división y el estilo
- Añade lecturas recurrentes al rundown con antelación para cultos más repetibles

## Páginas relacionadas

- [Visión general de los módulos](./)
- [Módulo Rundown](./rundown)
- [Integración con Companion](../configuration/companion)
