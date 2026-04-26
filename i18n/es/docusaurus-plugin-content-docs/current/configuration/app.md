---
sidebar_position: 6
---

# Ajustes de la aplicación

Configura el comportamiento de la aplicación, las actualizaciones y el registro.

![Pestaña Aplicación con notificaciones, canal de versión, autoactualización y nivel de registro](../assets/preferences/app.png)

## Notificaciones

**Activar notificaciones**
- **Predeterminado:** Sí
- **Opciones:** Sí / No
- **Descripción:** Muestra notificaciones toast para errores, avisos y mensajes de éxito

## Canal de versión

Elige qué actualizaciones recibir:

- **Normal** — Solo versiones estables (recomendado para producción)
- **Beta** — Acceso anticipado a betas con nuevas funciones

:::warning
Las versiones beta pueden contener errores o funciones incompletas. Usa el canal **Normal** en entornos de producción.
:::

## Autoactualización

**Activar autoactualización**
- **Predeterminado:** Sí
- **Opciones:** Sí / No
- **Descripción:** Descarga e instala automáticamente las actualizaciones disponibles

Cuando está activada:
- Las actualizaciones se descargan en segundo plano
- Recibes una notificación cuando una actualización está lista
- Eliges cuándo instalar (requiere reiniciar)

**Comprobación manual:**
- Haz clic en **Comprobar actualizaciones** para buscar manualmente nuevas versiones
- Muestra "Al día" si no hay actualizaciones
- Cambia a la pestaña Acerca de si hay una actualización

## Nivel de registro

Controla el detalle de los registros de la aplicación:

- **Error** — Solo errores críticos
- **Aviso** — Avisos y errores
- **Info** — Información general, avisos y errores (predeterminado)
- **Debug** — Información detallada de depuración (verbosa)

**Cuándo usar:**
- **Producción:** **Info** o **Aviso**
- **Resolución de problemas:** **Debug** para diagnósticos detallados
- **Desarrollo:** **Debug**

## Acerca de

![Panel Acerca de mostrando versión, notas de lanzamiento y enlaces de recursos](../assets/ui/about-section.png)

La sección **Acerca de** en los ajustes incluye:

- Un enlace al sitio de documentación (este sitio)
- Un contacto de WhatsApp para soporte directo
- Versión de la aplicación e información de compilación

Los enlaces externos de la sección Acerca de se abren en tu navegador predeterminado en lugar de dentro de la ventana de 7CG.

## Restablecer predeterminados

**Restablecer todos los ajustes**
- Restablece todas las preferencias a los valores de fábrica
- **Nota:** No elimina tus rundowns ni el contenido de la base de datos

:::danger
Restablecer las preferencias requerirá que vuelvas a configurar la conexión a CasparCG, los canales y todos los demás ajustes.
:::
