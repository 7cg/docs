---
sidebar_position: 1
---

# Visión general

7CG ofrece amplias opciones de configuración para personalizar la aplicación a tu entorno de producción. Accede a las preferencias en **Preferencias** o mediante el atajo de teclado.

## Panel de preferencias

El panel está organizado en pestañas, cada una centrada en un aspecto específico de la aplicación:

- **Conexión** — Ajustes de conexión al servidor CasparCG
- **Canales** — Descubrimiento y gestión de canales
- **Interfaz** — Tema, idioma y visibilidad de los módulos
- **Colores de bloques** — Personalización visual por tipo de bloque
- **Aplicación** — Actualizaciones, notificaciones y registro
- **Companion** — Integración con Bitfocus Companion
- **TV Manager** — Integración con rundown en la nube
- **Información del Canal** — Superposiciones de bug e ID con autoinicio
- **Acerca de** — Información de versión y licencia

## Atajos de teclado

- **Abrir Preferencias:** (varía según la plataforma)
  - Windows/Linux: `Ctrl+,`
  - macOS: `Cmd+,`

## Buenas prácticas

### Entorno de producción

Ajustes recomendados para transmisiones en vivo:

- **Tema:** Oscuro
- **Actualización automática:** Desactivada (actualiza en ventanas de mantenimiento)
- **Canal de versión:** Normal (solo versiones estables)
- **Nivel de registro:** Info o Aviso
- **Notificaciones:** Activadas (para detectar errores críticos)
- **Autoinicio de Información del Canal:** Activa solo si el bug o el ID deben aparecer inmediatamente al arrancar
- **Emparejamiento Companion:** Empareja y etiqueta cada superficie de control por dispositivo en lugar de compartir credenciales

### Desarrollo/Pruebas

Ajustes recomendados para desarrollo:

- **Canal de versión:** Beta (probar nuevas funciones)
- **Actualización automática:** Activada
- **Nivel de registro:** Debug
- **Companion:** Activado (para probar superficies de control)
- **Diseños:** Guarda diseños separados para desarrollo, ensayo y producción

### Entornos multiusuario

Cuando varios operadores usan 7CG:

- Documenta las asignaciones de canales (Principal/Preview/Retorno)
- Usa nombres personalizados descriptivos para los canales
- Estandariza los esquemas de color de bloques entre instalaciones
- Mantén el idioma consistente en todo el equipo
- Guarda [diseños guardados](./layouts) con nombre para cada rol
- Da a cada dispositivo Companion su propia sesión emparejada y un alias

## Detalles técnicos

### Almacenamiento de los ajustes

7CG guarda las preferencias mediante el sistema de almacenamiento integrado de Electron:

- **Ubicación:** Carpeta de datos de usuario específica de la plataforma
  - Windows: `%APPDATA%/7cg/`
  - macOS: `~/Library/Application Support/7cg/`
  - Linux: `~/.config/7cg/`

- **Formato:** Archivos de configuración JSON
- **Persistencia:** Los ajustes se mantienen entre arranques

### Comunicación IPC

Las preferencias usan el IPC (Inter-Process Communication) de Electron:

- El proceso de renderizado (UI) se comunica con el proceso principal
- Muchos ajustes se guardan inmediatamente al cambiarlos
- Actualizaciones de estado en tiempo real para la conexión
- El emparejamiento Companion y los cambios de diseños se actualizan en vivo en el menú y la UI

### Ajustes en la base de datos

Algunos ajustes (canales, datos personalizados) se guardan en la base de datos SQLite, separados de las preferencias.

## Lectura recomendada

- [Conexión](./connection)
- [Interfaz](./interface)
- [Diseños](./layouts)
- [Integración con Companion](./companion)
- [Información del Canal](./channel-graphics)
