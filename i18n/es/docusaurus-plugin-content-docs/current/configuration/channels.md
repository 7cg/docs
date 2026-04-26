---
sidebar_position: 3
---

# Canales

Gestiona la configuración de canales de CasparCG y las asignaciones predeterminadas.

![Pestaña Canales en Preferencias](../assets/preferences/channels.png)

## Asignaciones predeterminadas

Configura qué canales usar para cada salida:

**Canal principal**
- **Predeterminado:** `1`
- **Descripción:** Canal de salida principal para los gráficos del programa
- **Caso de uso:** Tu salida principal de transmisión

**Canal de preview**
- **Predeterminado:** `2`
- **Descripción:** Canal de preview/monitor para revisar el contenido antes de salir al aire
- **Caso de uso:** Salida de preview fuera del aire

**Canal de retorno**
- **Predeterminado:** `3`
- **Descripción:** Canal de feed de retorno o salida auxiliar
- **Caso de uso:** Monitores de confianza, retornos o salida de respaldo

## Descubrimiento de canales

Descubre y configura automáticamente canales desde tu servidor CasparCG conectado.

**Cómo descubrir canales:**

1. Asegúrate de estar **conectado** al servidor CasparCG (pestaña Conexión)
2. Haz clic en el botón **Descubrir Canales**
3. 7CG consulta al servidor por los canales disponibles y sus propiedades
4. Elige cómo tratar los canales descubiertos:
   - **Combinar** — Mantener los nombres personalizados existentes, actualizar metadatos
   - **Reemplazar** — Reemplazar todos los canales por los descubiertos

## Tabla de canales guardados

Visualiza y gestiona tus configuraciones de canal guardadas:

**Propiedades del canal:**
- **Número de canal** — El número de canal de CasparCG (empieza en 1)
- **Nombre personalizado** — Tu etiqueta personalizada (p. ej., "Programa", "Preview")
- **Modo de vídeo** — Formato de vídeo configurado (p. ej., "1080p5000", "720p5000")
- **Velocidad de fotogramas** — Velocidad detectada (si está disponible)
- **Estado** — Activar/desactivar canales
- **Fecha de descubrimiento** — Cuándo se descubrió el canal por última vez

**Acciones:**
- **Editar** — Renombrar o modificar propiedades del canal
- **Eliminar** — Quitar el canal de la lista guardada
- **Alternar** — Activar o desactivar el canal

:::info
La información de los canales descubiertos incluye el modo de vídeo y la velocidad de fotogramas extraídos de los comandos INFO CONFIG e INFO CHANNEL del servidor CasparCG.
:::

## Resolución de problemas

### No se descubrieron canales

1. Asegúrate de estar conectado a CasparCG (revisa la pestaña Conexión)
2. Verifica que la configuración de CasparCG incluye definiciones de canales
3. Comprueba que los canales están correctamente configurados en `casparcg.config`
4. Intenta crear los canales manualmente con el botón Editar
