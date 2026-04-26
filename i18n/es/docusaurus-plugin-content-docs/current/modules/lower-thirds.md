---
sidebar_position: 2
---

# Módulo Tercios Inferiores

El módulo **Tercios Inferiores** es el flujo de 7CG basado en plantillas para nombres, títulos y otras superposiciones CG que necesitan campos de texto editables y disparo rápido en vivo.

Combina:

- Un selector de plantilla de tercios inferiores
- Un editor de campos dinámico generado a partir de los metadatos de la plantilla
- Opciones avanzadas de enrutamiento y tiempo
- Comportamiento opcional de parada automática por duración
- Controles directos de lanzamiento y detención
- Integración con el rundown para gráficos preparados

## Visión general

El módulo Tercios Inferiores te permite:

- Seleccionar una plantilla de tercio inferior de la lista de CasparCG
- Rellenar los campos expuestos por la plantilla
- Trabajar con campos agrupados cuando la plantilla los define
- Enrutar el gráfico a un canal, capa y CG layer específicos
- Añadir retardo y duración
- Detener automáticamente el gráfico tras una duración
- Lanzar el gráfico directamente desde el módulo
- Añadir el gráfico configurado al rundown

## Componentes de la interfaz

### Selector de plantilla

El módulo empieza con un selector **Plantilla** filtrado por la familia `LOWERTHIRDS`.

Cuando los metadatos están disponibles, 7CG muestra etiquetas y descripciones traducidas en lugar de solo el ID. Seleccionar una plantilla también carga el esquema de campos que alimenta el editor de abajo.

### Editor de campos dinámico

Debajo del selector, 7CG renderiza los campos editables expuestos por la plantilla seleccionada.

Este editor está impulsado por los metadatos GDD de la plantilla, así que los controles disponibles dependen del diseño de la plantilla. En la práctica, los operadores pueden trabajar con:

- Campos de texto simples
- Campos de texto multilínea
- Datos estructurados o anidados
- Campos agrupados mostrados como pestañas cuando la plantilla define grupos

Los valores multilínea se transforman correctamente para la reproducción en CasparCG, de modo que los saltos de línea se preservan en los datos enviados.

### Ajustes avanzados

El cuadro **Avanzado** permite controlar cómo se envía el tercio inferior a CasparCG:

- Canal
- Capa
- CG layer
- Retardo
- Duración

Estos ajustes se aplican tanto a los lanzamientos directos desde el módulo como a la entrada del rundown creada a partir de la configuración actual.

### Parada automática

El interruptor **Parada automática** está vinculado a la duración configurada.

Cuando hay una duración positiva y **Parada automática** está activada, 7CG añade una acción `cg/stop` temporizada tras mostrarse el gráfico durante el intervalo configurado. Si no hay duración, el interruptor está desactivado y se espera que el operador detenga el gráfico manualmente.

## Controles de reproducción

El módulo usa un flujo de comando CG de CasparCG:

- **Lanzar** envía un `cg/play` con la plantilla seleccionada y los datos actuales
- **Detener** envía un `cg/stop` al mismo canal, capa y CG layer
- **Añadir al rundown** guarda el tercio inferior configurado como elemento ejecutable

Los lanzamientos directos usan exactamente los valores introducidos en el editor, con el enrutamiento y los tiempos configurados.

## Integración con el rundown

La acción **Añadir al rundown** crea una entrada `lowerthird` dedicada.

Esa entrada guarda:

- El comando de la plantilla de tercio inferior seleccionada
- Los datos editados de los campos
- Enrutamiento de canal, capa y CG layer
- Valores de retardo y duración
- Comportamiento de parada automática cuando hay duración

Cuando se muestran en el rundown, los bloques de tercio inferior **se nombran automáticamente** según el primer campo (con una segunda línea cuando tiene sentido), de modo que los operadores reconocen los gráficos de orador de un vistazo sin renombrar el elemento. Los colores del bloque también se afinaron para mejor contraste con el fondo del rundown.

Los bloques de tercio inferior del rundown admiten el flujo operativo normal:

- Editar
- Ejecutar
- Detener
- Duplicar
- Agrupar
- Exportar vídeo

## Integración con Companion

Cuando un bloque de tercio inferior se ejecuta o detiene desde el módulo Rundown, 7CG publica el estado a Companion.

Ese estado incluye:

- Si actualmente hay un tercio inferior activo
- La etiqueta actual del tercio inferior, cuando está disponible

Facilita construir botones y feedbacks de Companion que reflejen si un título está en directo.

## Flujo típico

### Operación directa

1. Selecciona la plantilla
2. Rellena el nombre, título u otros campos
3. Abre **Avanzado** si necesitas enrutamiento o tiempos no predeterminados
4. Establece una duración y activa **Parada automática** si el gráfico debe limpiarse solo
5. Haz clic en **Lanzar**
6. Haz clic en **Detener** al terminar si el gráfico no se detiene automáticamente

### Flujo de programa preparado

1. Selecciona la plantilla
2. Introduce los datos del orador o segmento
3. Configura enrutamiento y tiempos
4. Haz clic en **Añadir al rundown**
5. Repite para el resto de invitados, oradores o segmentos
6. Ejecuta los gráficos más tarde desde el módulo Rundown

## Buenas prácticas

- Estandariza tus plantillas de tercio inferior para que los operadores vean diseños de campos consistentes
- Usa grupos de campos en el diseño de la plantilla cuando un gráfico tenga muchas propiedades editables
- Reserva la parada automática para gráficos que deben limpiarse de forma predecible sin sincronización manual
- Añade gráficos recurrentes de orador al rundown antes del programa en lugar de reconstruirlos en vivo
- Mantén las etiquetas de plantilla descriptivas para que las entradas del rundown sean fáciles de identificar

## Páginas relacionadas

- [Visión general de los módulos](./)
- [Módulo Rundown](./rundown)
- [Diseños](../configuration/layouts)
