---
slug: whats-new-2026
title: 'Novedades en 7CG: edición 2026'
authors: [jcalado]
tags: [release, features]
date: 2026-04-19
---

:::info[Lanzado]
Las funcionalidades descritas aquí ya están en la versión **v2.0.0-beta.19** de 7CG, disponible ahora a través del actualizador automático. Consulta el [anuncio del lanzamiento](/blog/beta-19-released) para más detalles.
:::

Desde el inicio de 2026 han llegado muchas novedades a 7CG. Este artículo resume lo más destacado: un espacio de trabajo totalmente personalizable, exportación de vídeo del rundown, una integración con Companion rehecha, y un buen conjunto de mejoras de pulido y fiabilidad.

![Vista general del nuevo espacio de trabajo de 7CG, con varios módulos visibles a la vez](/img/blog/whats-new-2026/overview-layout.png)

{/* truncate */}

## Diseño personalizable

El cambio más grande de esta versión es un sistema de diseño del espacio de trabajo completamente nuevo. La ventana principal está dividida ahora en columnas redimensionables, y cada módulo (Rundown, Lyrics, Bible, Control, Media, Lower Thirds) puede arrastrarse a cualquier posición.

Para entrar en modo de edición, abre **View → Customize Layout**. Desde ahí puedes:

- **Arrastrar módulos** por la barra de título para reordenarlos o moverlos entre columnas
- **Añadir y quitar columnas** con un solo clic
- **Distribuir uniformemente** para igualar todas las columnas a la misma anchura
- **Ocultar módulos** que no necesites. Quedan aparcados en una barra lateral en el borde y pueden recuperarse en cualquier momento
- **Guardar diseños con nombre** desde **View → Layouts** para alternar entre una vista para un solo operador y una configuración multi-pantalla en segundos

La anchura de las columnas, el orden de los módulos y el estado de plegado se conservan entre reinicios.

![7CG en modo de edición de diseño, con módulos arrastrables, columnas editables y la barra de módulos ocultos](/img/blog/whats-new-2026/customize-layout-mode.png)

![Diseños guardados en 7CG, con un diseño Media & Rundown listo para reutilizar](/img/blog/whats-new-2026/layout-presets.png)

## Exportación de vídeo del rundown

Ahora puedes exportar un rundown completo como archivo de vídeo directamente desde 7CG. El exportador recorre cada bloco, lo envía a CasparCG, captura la salida y monta el resultado en un único archivo. Los blocos de Biblia y himno recorren automáticamente todos sus fragmentos para que no quede nada cortado.

Un botón **Stop** permite cancelar una exportación en curso, y todos los mensajes de progreso aparecen ahora como notificaciones internas de la aplicación.

![Exportación de vídeo del rundown en curso, con estado de la grabación y un botón Stop](/img/blog/whats-new-2026/rundown-video-export.png)

## Renovación de la integración con Companion

La integración con Bitfocus Companion ha recibido una gran actualización:

- **Anuncio por mDNS**: el servidor WebSocket se anuncia ahora en la red local para que el plugin de Companion descubra 7CG sin tener que escribir la IP a mano.
- **Emparejamiento por PIN**: en vez de un token de autenticación compartido en el archivo de configuración, cada dispositivo de Companion ahora se empareja con un PIN. Las sesiones se siguen por dispositivo, así que revocar uno no afecta a los demás.
- **Execute / Stop por ID**: dos acciones nuevas, `rundown:execute-id` y `rundown:stop-id`, permiten apuntar a un elemento concreto del rundown por su ID. La interfaz de Companion muestra un menú desplegable poblado con el rundown en directo, así eliges siempre desde lo que está realmente cargado.
- **Superficie de estado más amplia**: el estado que se transmite a Companion incluye ahora más datos de rundown y reproducción, manteniendo las etiquetas de los botones y los feedbacks sincronizados en tiempo real.
- **Acciones de color sólido**: acciones parametrizadas permiten a Companion cambiar el color sólido al aire sin necesitar una acción separada por cada color.

## Gestión de capas

Cada módulo (Media, Bible, Lyrics, Lower Thirds, Credits, QR Code) tiene ahora una capa de CasparCG por defecto explícita. El cuadro de diálogo **Advanced** de cada bloco muestra qué capa va a usar, y un nuevo panel de **ocupación de capas** en la sección Control da una vista en tiempo real de lo que se está reproduciendo en cada capa para detectar conflictos antes de que ocurran al aire.

## Mejoras en Bible y Lyrics

- **Vista previa de versículo**: al elegir un pasaje bíblico en el diálogo del bloco, el texto del versículo aparece ahora en línea para confirmar que la referencia es correcta antes de insertarla.
- **Edición masiva de versículos**: ahora puedes editar varios versículos a la vez en el editor de Lyrics, en lugar de abrir cada uno por separado.
- **Líneas por pantalla**: un nuevo ajuste en los módulos Hymn y Lyrics controla cuántas líneas se muestran a la vez.

## Pulido de la interfaz

- Cada cabecera de módulo tiene ahora un **icono de color** que coincide con su tipo de contenido, lo que facilita orientarse en un diseño denso.
- Una **franja superior** en la parte alta de la ventana se anima para indicar el estado de la conexión con CasparCG: verde cuando está conectado, ámbar cuando está reconectando.
- Las notificaciones de la aplicación se enrutan ahora a través de **toasts de Fluent UI** en lugar de notificaciones del sistema, así que aparecen dentro de la ventana y se descartan automáticamente.
- Los ajustes de transición y los diálogos Advanced se han pulido: botones solo con icono donde las etiquetas eran redundantes, mejor localización en portugués e inglés.

---

Todo lo anterior llega en la **v2.0.0-beta.19**, disponible ahora a través del actualizador automático de la aplicación. Si necesitas una instalación nueva, descárgala desde [7cg.io](https://7cg.io).
