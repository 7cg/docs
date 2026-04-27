---
slug: beta-19-released
title: '7CG 2.0.0-beta.19 ya disponible'
authors: [jcalado]
tags: [release]
date: 2026-04-27
---

**7CG v2.0.0-beta.19** sale hoy. Si ya estás en una beta 2.x, el actualizador automático la descargará la próxima vez que abras la aplicación.

![7CG con un rundown poblado mostrando bloques de Biblia, himno, lower-third y comando](/img/blog/beta-19-released/rundown-populated.png)

Esta es la versión que reúne todo el trabajo de 2026: espacio de trabajo modular, renovación de Companion, exportación de vídeo del rundown, vista previa de pasajes bíblicos y un buen montón de pulido. También es el primer lanzamiento que sale por la nueva pipeline automatizada, así que las próximas betas deberían llegar más rápido.

{/* truncate */}

## Qué incluye

Las funcionalidades principales están documentadas aparte en [Novedades en 7CG: edición 2026](/blog/whats-new-2026), por eso este artículo es deliberadamente corto. Los puntos destacados:

- **Espacio de trabajo personalizable**: arrastrar, redimensionar, ocultar y guardar diseños desde **View → Customize Layout**
- **Companion 2.0**: emparejamiento por PIN, descubrimiento automático por mDNS, acciones Execute/Stop por elemento, acciones de color sólido parametrizadas
- **Exportación de vídeo del rundown**: exportar un rundown completo como archivo de vídeo con un botón Stop para cancelar a mitad
- **Deshacer / Rehacer en el rundown**: Ctrl+Z y Ctrl+Shift+Z (Cmd en Mac)
- **Vista previa de pasajes bíblicos**: ver el texto de los versículos al elegir un pasaje
- **Vista de ocupación de capas**: detectar conflictos de capa de CasparCG antes de que salgan al aire
- **Notificaciones internas con toasts** correctamente localizadas (Inglés, Portugués, Español)

## Cómo conseguirla

Si ya estás en una beta 2.x de 7CG, el actualizador automático descargará la beta.19 la próxima vez que abras la aplicación. Cada actualización es un instalador completo para tu plataforma (Windows `.exe`, macOS `.dmg`, o Linux `.AppImage` / `.deb` / `.snap`), así que no hay nada más que hacer una vez termine. ¿Eres nuevo en 7CG? Descarga una primera instalación desde [7cg.io](https://7cg.io).

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

Gracias por probarla. Este lanzamiento ha tardado mucho en llegar, y el siguiente será mucho más corto.
