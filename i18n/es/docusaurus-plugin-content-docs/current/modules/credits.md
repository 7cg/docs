---
sidebar_position: 6
---

# Módulo Créditos

El módulo **Créditos** es el flujo de 7CG para gráficos de créditos basados en plantillas, como rollos finales, agradecimientos de producción, listados de equipo y reconocimiento de voluntarios.

Combina:

- Un selector de plantilla de créditos
- Un editor de campos dinámico basado en la plantilla seleccionada
- Opciones avanzadas de enrutamiento y tiempo
- Comportamiento opcional de parada automática por duración
- Controles directos de lanzamiento y detención
- Integración con el rundown para créditos preparados

## Visión general

El módulo Créditos te permite:

- Seleccionar una plantilla de créditos de la lista de CasparCG
- Rellenar los campos de texto que requiere la plantilla
- Enrutar el gráfico a un canal, capa y CG layer específicos
- Añadir retardo y duración
- Detener automáticamente el gráfico tras una duración
- Lanzar el gráfico de créditos directamente desde el módulo
- Añadir el gráfico configurado al rundown

## Componentes de la interfaz

### Selector de plantilla

El módulo empieza con un selector **Plantilla** filtrado por la familia `CREDITS`.

Cuando está disponible, 7CG muestra etiquetas y descripciones amigables en lugar de solo el ID. Elegir una plantilla también carga los campos que usará el editor.

### Editor de campos dinámico

Bajo el selector, 7CG renderiza los campos editables expuestos por la plantilla de créditos seleccionada.

Los campos exactos dependen del diseño elegido. Puedes ver:

- Campos de texto simples
- Campos multilínea
- Varias secciones agrupadas

Esto hace al módulo flexible para agradecimientos cortos, listas completas de créditos y diseños más detallados de equipo o voluntarios.

### Ajustes avanzados

El cuadro **Avanzado** te permite controlar cómo se envían los créditos a CasparCG:

- Canal
- Capa
- CG layer
- Retardo
- Duración

Estos valores se aplican tanto a los lanzamientos directos como a cualquier elemento de créditos añadido al rundown.

### Parada automática

El interruptor **Parada automática** solo está activo cuando hay una duración positiva.

Cuando hay duración configurada y **Parada automática** está activada, 7CG limpia los créditos automáticamente tras el intervalo. Si no hay duración, se espera que el operador detenga los créditos manualmente.

## Controles de reproducción

El módulo se construye en torno a tres acciones principales:

- **Lanzar** pone el gráfico actual de créditos al aire
- **Detener** retira el gráfico actual del aire
- **Añadir al rundown** guarda el gráfico configurado para ejecución posterior

La UI actual también muestra botones de **Previsualizar** y **Refrescar**. Para la mayoría de operadores, el flujo del día a día sigue siendo Plantilla, Campos, Lanzar, Detener y Añadir al Rundown.

## Integración con el rundown

La acción **Añadir al rundown** crea un elemento de créditos que puedes disparar más tarde desde el módulo Rundown.

Útil cuando:

- Los créditos deben aparecer en un punto específico del programa
- Quieres reproducción repetible en lugar de lanzar ad hoc
- Varios operadores necesitan trabajar desde el mismo orden preparado

## Integración con Companion

Los créditos también pueden participar en flujos conscientes de Companion, lo que ayuda a las superficies externas a reflejar si el gráfico está actualmente activo.

## Flujo típico

### Operación directa

1. Selecciona la plantilla de créditos
2. Rellena los nombres, roles u otros campos requeridos
3. Abre **Avanzado** si necesitas enrutamiento o tiempos no predeterminados
4. Establece una duración y activa **Parada automática** si los créditos deben limpiarse solos
5. Haz clic en **Lanzar**
6. Haz clic en **Detener** al terminar si el elemento no se detiene automáticamente

### Flujo de programa preparado

1. Selecciona la plantilla de créditos
2. Introduce el equipo de producción, voluntarios o agradecimientos
3. Configura enrutamiento y tiempo
4. Haz clic en **Añadir al rundown**
5. Ejecuta el elemento más tarde desde el módulo Rundown

## Buenas prácticas

- Estandariza las plantillas de créditos para que los operadores vean diseños de campos predecibles
- Usa la parada automática solo cuando el gráfico tenga un tiempo de ejecución conocido
- Añade elementos de créditos planificados al rundown con antelación en lugar de construirlos bajo presión
- Mantén nombres de plantilla descriptivos para que las entradas sigan siendo fáciles de identificar

## Páginas relacionadas

- [Visión general de los módulos](./)
- [Módulo Rundown](./rundown)
- [Diseños](../configuration/layouts)
