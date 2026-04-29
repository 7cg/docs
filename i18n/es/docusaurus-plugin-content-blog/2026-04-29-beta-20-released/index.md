---
slug: beta-20-released
title: '7CG 2.0.0-beta.20 ya disponible'
authors: [jcalado]
tags: [release]
date: 2026-04-29
---

**7CG v2.0.0-beta.20** sale hoy. Si ya estás en una beta 2.x, el actualizador automático la descargará la próxima vez que abras la aplicación.

Esta versión va de hacer el rundown más fácil de leer de un vistazo. Ya puedes asignar color a bloques individuales, guardar una paleta de tus colores favoritos, y cada elemento muestra el icono de su tipo de bloque junto a la etiqueta.

{/* truncate */}

## Novedades

- **Color en cualquier bloque**: pulsa con el botón derecho sobre un elemento del rundown para elegir su color. Los temas claro y oscuro tienen valores propios, así que los colores se ven bien en ambos modos.
- **Colores guardados**: crea una paleta de colores con nombre en **Preferencias → Colores** y reutilízalos en cualquier sitio donde se elija un color.
- **Iconos de bloque en el rundown**: cada elemento muestra ahora el icono de su tipo de bloque junto a la etiqueta, así es mucho más fácil recorrer un rundown largo.
- **Icono y etiqueta por elemento**: los bloques de Media pueden sobrescribir el icono y la etiqueta en entradas individuales, útil cuando un elemento de una lista necesita destacar.
- **Notas de versión alineadas**: cuando la aplicación se actualiza, la pantalla "Novedades" muestra el changelog de la versión que realmente has instalado.
- **Módulo de Letras más cuidado**: el icono del título ahora se alinea con las filas de los himnos y se redimensiona suavemente con el módulo.

## Correcciones

- Los selectores de color abiertos desde un menú contextual ya no se cierran antes de poder usarlos.
- Cambiar el color predeterminado de un tipo de bloque ahora actualiza todos los elementos existentes que usan ese valor predeterminado, no solo los nuevos.
- Corregido un cierre inesperado al abrir el diálogo de edición en bloques de Media.

## Cómo conseguirla

Si ya estás en una beta 2.x de 7CG, el actualizador automático descargará la beta.20 la próxima vez que abras la aplicación. Cada actualización es un instalador completo para tu plataforma (Windows `.exe`, macOS `.dmg`, o Linux `.AppImage` / `.deb` / `.snap`), así que no hay nada más que hacer una vez termine. ¿Eres nuevo en 7CG? Descarga una primera instalación desde [7cg.io](https://7cg.io).

## Limitaciones conocidas

Esto sigue siendo una **beta**. Algunas cosas a tener en cuenta:

- Las builds para macOS **no están notarizadas** en esta versión. Tendrás que pulsar con el botón derecho sobre la aplicación y elegir **Abrir** la primera vez para saltarte Gatekeeper.
- Las builds para Windows **aún no están firmadas**, así que SmartScreen avisará en el primer arranque. Pulsa en **Más información** y luego en **Ejecutar de todas formas**.

## Reportar errores

Si algo se rompe, escribe en el [grupo de WhatsApp de 7CG](https://chat.whatsapp.com/CxrKMAV5zfP2eSSvHi1tA1) con tu sistema operativo, la versión que aparece en **Help → About**, y los pasos para reproducirlo. El log del renderer está en:

- **Windows**: `%APPDATA%\7cg\logs\`
- **macOS**: `~/Library/Logs/7cg/`
- **Linux**: `~/.config/7cg/logs/`

Adjuntar el archivo de log más reciente acelera el diagnóstico.

Gracias por probarla.
