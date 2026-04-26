---
sidebar_position: 1
---

# Visión general de los módulos

7CG está construido en torno a un espacio de trabajo modular. Cada módulo se especializa en una parte específica del flujo de producción, y el sistema de diseños te permite organizar esos módulos según el rol del operador.

## Módulos del espacio de trabajo principal

### Módulo Medios
**Reproducción de vídeo, audio e imagen**

El módulo Medios es tu centro neurálgico para reproducir archivos de vídeo, pistas de audio e imágenes desde tu servidor CasparCG. Incluye navegación jerárquica, miniaturas, transiciones, búsqueda temporal, repetición y monitorización en tiempo real de la reproducción activa.

**Casos de uso:**
- Reproducción de paquetes de vídeo
- Bucles de fondo
- Pistas de audio
- Mostrar imágenes estáticas
- Motion graphics

[Más sobre el módulo Medios →](./media)

### Módulo Tercios Inferiores
**Gráficos de nombre y título**

Muestra tercios inferiores profesionales con nombres, títulos y texto personalizado. Compatible con plantillas, transiciones y contenido multilingüe.

**Casos de uso:**
- Identificación de oradores
- Presentaciones de invitados
- Sujetos de entrevistas
- Mesas redondas
- Segmentos informativos

[Más sobre el módulo Tercios Inferiores →](./lower-thirds)

### Módulo Biblia
**Visualización de Escrituras**

Busca, navega y muestra versículos bíblicos con soporte para múltiples traducciones. Integrado con plantillas de CasparCG para presentar las Escrituras en pantalla.

**Casos de uso:**
- Lecturas de las Escrituras en cultos
- Referencias durante el sermón
- Sesiones de estudio bíblico
- Pantallas para memorización

[Más sobre el módulo Biblia →](./bible)

### Módulo Letras
**Visualización de canciones e himnos**

Muestra letras de canciones e himnos con disposiciones versículo a versículo o por grupos. Base de datos de himnario integrada con búsqueda y navegación.

**Casos de uso:**
- Cánticos congregacionales
- Letras de cantos de adoración
- Visualización de himnos
- Actuaciones musicales especiales

[Más sobre el módulo Letras →](./lyrics)

### Módulo Información del Canal
**Control de superposiciones de bug e ID**

Configura y monitoriza las superposiciones siempre disponibles de bug e ID para un canal.

**Casos de uso:**
- Bug permanente en directo
- ID de la estación
- Superposiciones de marca del programa

[Más sobre el módulo Información del Canal →](./channel-graphics)

### Módulo Créditos
**Créditos de producción y agradecimientos**

Prepara y lanza gráficos tipo créditos para agradecimientos, listados de equipo y rótulos finales.

**Casos de uso:**
- Créditos del equipo de producción
- Segmentos detrás de cámaras
- Reconocimiento del equipo
- Presentaciones del equipo

[Más sobre el módulo Créditos →](./credits)

### Módulo Ticker
**Texto desplazante**

Crea mensajes de texto desplazantes, anuncios y barras de información.

**Casos de uso:**
- Última hora
- Anuncios
- Información de eventos
- Alertas de emergencia
- Visualización continua de información

[Más sobre el módulo Ticker →](./ticker)

### Módulo Otras Plantillas

Da acceso a gráficos adicionales basados en plantillas, fuera del flujo principal de tercios inferiores.

[Más sobre el módulo Otras Plantillas →](./other-templates)

### Módulo Capas

Muestra las capas activas y la ocupación actual al aire, útil para resolver conflictos o entender qué está reproduciendo CasparCG.

[Más sobre el módulo Capas →](./layers-overview)

### Módulo Rundown
**Planificación, ejecución y exportación**

El módulo Rundown es el centro operativo de 7CG. Permite:

- Organizar el contenido del programa en elementos ejecutables
- Disparar el elemento seleccionado o uno específico desde Companion
- Seguir la posición actual y siguiente
- Exportar elementos compatibles a vídeo

[Más sobre el módulo Rundown →](./rundown)

## Módulos del lienzo vs. tipos de bloque

No todas las funciones visibles para el usuario son módulos independientes de nivel superior en el lienzo.

Por ejemplo:

- **Código QR** y **Créditos** son tipos de bloque ejecutables importantes
- **Biblia** y **Letras** son a la vez módulos del lienzo y tipos de bloque del rundown
- **Rundown** es donde se crean, editan y ejecutan muchas acciones orientadas a bloques

## Arquitectura de los módulos

### Características comunes

Todos los módulos de 7CG comparten características arquitectónicas comunes:

**Secciones plegables**
- Los módulos se pueden contraer/expandir para ahorrar espacio
- Trabajar en varios módulos a la vez

**Conscientes del diseño**
- Los módulos se pueden mover entre columnas
- Los módulos se pueden ocultar o restaurar
- Diseños completos se pueden guardar con nombre

**Actualizaciones en tiempo real**
- Los cambios se reflejan de inmediato en la salida de CasparCG
- El estado operativo también se puede transmitir a Companion para feedback y control

**Integración con plantillas**
- Funciona con plantillas CasparCG compatibles con GDD
- Admite diseños gráficos personalizados

## Integración en el flujo de trabajo

### Uso típico de un módulo

1. **Preparar contenido** — Usa la interfaz del módulo para configurar el contenido
2. **Previsualizar** — Comprueba la salida antes de salir al aire (cuando se admita)
3. **Añadir al rundown** — Guarda el contenido configurado como bloque del rundown
4. **Ejecutar** — Dispara desde el rundown durante la producción en vivo

### Flujo Módulo + Rundown

```
Módulo Medios
  ↓ Seleccionar y configurar
Bloque de Comando en el Rundown
  ↓ Ejecutar
Salida CasparCG
  ↓ Mostrar
Transmisión/Stream
```

### Ejecución directa vs. desde rundown

**Ejecución directa (desde el módulo):**
- Contenido rápido y ad-hoc
- Pruebas y previsualización
- Situaciones de emergencia
- Operaciones sencillas

**Ejecución desde rundown:**
- Secuencias planificadas
- Operaciones repetibles
- Programas complejos en varios pasos
- Coordinación en equipo

:::tip Buena práctica
Usa los módulos para preparar y probar contenido y añádelo al rundown para la ejecución real. Esto asegura un rendimiento consistente y repetible.
:::

## Atajos de teclado

Muchos módulos admiten atajos de teclado para mayor eficiencia:

- **Espacio** — Reproducir/ejecutar el elemento seleccionado
- **Enter** — Añadir al rundown o confirmar
- **Escape** — Cerrar diálogos
- **Ctrl+F** — Buscar/filtrar (cuando aplique)

:::note
Los atajos específicos varían por módulo. Consulta la documentación de cada módulo para más detalles.
:::

## Visibilidad de los módulos

Controla qué módulos aparecen en tu interfaz:

**Configuración → Interfaz → Módulos**

Activa o desactiva módulos según tus necesidades de producción. Esto mantiene tu interfaz limpia y enfocada.

:::tip
Desactiva módulos sin uso para simplificar la interfaz a operadores que solo necesitan ciertas funcionalidades.
:::

## Personalización

### Personalización de plantillas

Los módulos gráficos y muchos tipos de bloque del rundown funcionan con plantillas de CasparCG. Personalízalas para tu marca:

- Colores y tipografías
- Logos y marca
- Tiempo de animaciones
- Diseño y posicionamiento

Consulta la **Guía de Desarrollo de Plantillas** para crear plantillas personalizadas.

### Personalización del diseño

Usa [Diseños](../configuration/layouts) para:

- Reorganizar módulos en columnas
- Ocultar módulos temporalmente
- Guardar diseños con nombre para distintos operadores o producciones

### Personalización de colores de bloques

Personaliza los colores de los bloques del rundown por tipo:

**Configuración → Colores de bloques**

Establece colores de tema claro y oscuro para cada tipo de bloque para organizar visualmente tu rundown.

## Consideraciones de rendimiento

### Uso de recursos por módulo

**Módulos ligeros:**
- Biblia (consultas a la base de datos)
- Letras (consultas a la base de datos)
- Vista de Capas

**Módulos más exigentes:**
- Medios (generación de miniaturas, listas grandes de archivos)
- Grabador (codificación en tiempo real)
- Exportación de vídeo desde el rundown

### Consejos de optimización

1. **Limita módulos abiertos** — Contrae los que no uses
2. **Búsqueda eficiente** — Usa términos específicos
3. **Preconfigura ajustes** — Reduce clics con buenos valores por defecto
4. **Organiza el contenido** — Usa carpetas y convenciones de nombres

:::note
El desarrollo de módulos requiere conocimientos de TypeScript/React y de la arquitectura de plugins de 7CG. Consulta la **Guía del Desarrollador** para detalles.
:::

## Obtener ayuda

Para ayuda específica por módulo:

1. Revisa las páginas de documentación de cada módulo
2. Consulta tutoriales en vídeo (si están disponibles)
3. Consulta la sección de resolución de problemas
4. Pide apoyo a la comunidad

---

## Pasos siguientes

- Explora la documentación individual de cada módulo
- Configura los módulos que prefieras
- Construye tu primer rundown con varios módulos
- Personaliza plantillas y colores

¿Listo para profundizar? Empieza por el [Módulo Medios](./media) para dominar la reproducción profesional de medios.
