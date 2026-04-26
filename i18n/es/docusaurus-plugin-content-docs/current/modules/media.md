---
sidebar_position: 1
---

# Módulo Medios

El módulo Medios es la solución completa de 7CG para reproducción de vídeo, audio e imagen. Ofrece gestión de medios de nivel profesional con soporte para transiciones, búsqueda temporal, repetición y monitorización en tiempo real de la reproducción activa.

## Visión general

El módulo Medios te permite:

- **Navegar y buscar** archivos de medios desde tu servidor CasparCG
- **Previsualizar, preparar (cue) y cargar** medios en capas de fondo
- **Reproducir, pausar y buscar** en vídeo y audio
- **Configurar transiciones** (fundido de entrada/salida) para una reproducción suave
- **Monitorizar productores activos** con seguimiento de progreso en tiempo real
- **Añadir medios al rundown** con todas las configuraciones

## Componentes de la interfaz

### Panel de Productores Activos

En la parte superior del módulo verás una vista en vivo de todos los medios reproduciéndose en canales y capas.

**Funciones:**
- Barras de progreso en tiempo real
- Tiempo actual y restante
- Indicadores de canal y capa
- Etiquetas de bucle
- Iconos de pausa/reproducción
- Botones de paro rápido por productor

**Estado vacío:** Cuando no hay medios reproduciéndose, muestra "Sin medios activos".

### Navegador de medios

La sección principal muestra tu biblioteca de medios en estructura de árbol:

**Vista en árbol:**
- Organizada por estructura de carpetas
- Directorios expansibles/contraíbles
- Miniaturas para vídeos e imágenes
- Iconos por tipo de archivo (vídeo, imagen, audio)
- Resaltado verde para el elemento seleccionado

**Carga perezosa:** Las miniaturas se cargan cuando los elementos se vuelven visibles, por rendimiento.

### Búsqueda y filtro

**Cuadro de búsqueda:**
- Búsqueda en tiempo real al escribir
- Busca nombres en todas las carpetas
- Insensible a mayúsculas

**Menú de filtros:**
- **Vídeo** — MP4, WebM, Matroska
- **Audio** — Formatos de audio
- **Imagen** — PNG, PSD y otros
- Pueden combinarse varios filtros

:::tip
Usa Ctrl+F (Cmd+F en Mac) para enfocar rápido la búsqueda y encontrar medios por nombre.
:::

## Controles de reproducción

### Controles de carga (barra superior)

**Previsualizar** (actualmente desactivado)
- Previsualiza medios antes de cargar

**CUE** — icono de siguiente fotograma
- Carga medios en primer plano (en pausa, listo para reproducir)
- Aparece como "cued" en el estado del reproductor
- Pulsa Reproducir para iniciar al instante

**CUE BG** — icono de upload
- Carga medios en la capa de fondo
- Precarga el contenido sin mostrarlo
- Útil para transiciones suaves

:::info Cue vs. CUE BG
- **CUE**: Carga medios en pausa, listos para reproducción inmediata
- **CUE BG**: Precarga medios en segundo plano para transiciones suaves
:::

### Controles de reproducción (barra central)

**Reproducir** — icono de play relleno
- Inicia la reproducción del medio seleccionado
- Aplica las transiciones configuradas
- Aplica el volumen guardado

**Pausa/Reanudar** — icono pausa/play
- Alterna entre pausa y reanudar
- El icono cambia según el estado

**Rebobinar (-5s)** — icono de rebobinar
- Retrocede 5 segundos

**Detener** — icono de stop
- Detiene la reproducción
- Aplica la transición de salida si está configurada

**Avanzar (+10s)** — icono de avance rápido
- Avanza 10 segundos

**Añadir al Rundown** — icono de lista
- Añade el medio seleccionado al rundown con la configuración actual
- Incluye transiciones, retardos, bucle y opciones avanzadas
- El campo de notas muestra los parámetros configurados

:::tip Flujo rápido
1. Selecciona un medio del navegador
2. Configura transiciones y ajustes
3. Haz clic en "Añadir al Rundown" para guardar
4. Ejecuta desde el rundown durante la producción en vivo
:::

## Ajustes y configuración

### Botón de Transiciones

Abre el cuadro de Transiciones para configurar fundidos de entrada y salida.

**Transición de entrada (Fade in):**
- Aplicada cuando el medio empieza a reproducirse
- Efecto de entrada suave

**Transición de salida (Fade out):**
- Aplicada al detener
- Programada inmediatamente después del comando de play
- Crea fundidos profesionales

**Tipos disponibles:**
- Mix (crossfade)
- Wipe
- Slide
- Push
- Y otros soportados por CasparCG

**Parámetros:**
- Duración (en fotogramas)
- Dirección (para wipes y slides)
- Funciones de easing

:::tip Buena práctica
Configura transiciones de entrada y salida para emisiones con aspecto profesional. Una transición mix de 20 fotogramas (0,8s a 25fps) funciona bien para la mayoría del contenido.
:::

### Ajustes avanzados

Haz clic en **Avanzado** para acceder a la configuración detallada:

**Canal y capa:**
- **Canal** — Canal de salida de CasparCG (predeterminado: 1)
- **Capa** — Capa de vídeo dentro del canal (predeterminado: 1)
- Las capas con número mayor aparecen encima

**Tiempos:**
- **Retardo (ms)** — Retardo antes de iniciar la reproducción
- **Duración (ms)** — Detención automática tras la duración
- Útil para secuencias temporizadas

**Control de vídeo:**
- **Fotograma inicial** — Empezar la reproducción en un fotograma concreto
- **In Frame** — Punto de entrada (fotograma de inicio del clip)
- **Longitud (fotogramas)** — Reproducir solo los fotogramas indicados
- **Filtro** — Aplicar filtros FFmpeg (corrección de color, efectos)

**Opciones de reproducción:**
- **Bucle** — Repetir continuamente hasta detener

:::warning Funciones avanzadas
El control al fotograma (In Frame, Longitud) requiere conocer la velocidad de fotogramas. Comprueba las propiedades del vídeo en el sistema INFO de CasparCG.
:::

### Ajustes del reproductor (icono de engranaje)

Accede a los ajustes globales del reproductor:

**Control de volumen:**
- Deslizador de volumen principal (0,0 a 1,0)
- Aplica al mixer de CasparCG
- Preferencia guardada, aplicada a toda la reproducción
- El ajuste en tiempo real afecta a los medios en reproducción

:::note
El ajuste de volumen es global y persiste entre arranques. Establece aquí tu nivel de audio preferido para transmisión.
:::

## Ejemplos de flujo

### Reproducción simple de vídeo

1. Selecciona un vídeo en el navegador
2. Haz clic en **Reproducir**
3. El medio se reproduce en el canal/capa predeterminados

### Fundido suave de entrada/salida

1. Selecciona un medio
2. Haz clic en **Transiciones**
3. Configura:
   - Entrada: Mix, 20 fotogramas
   - Salida: Mix, 30 fotogramas
4. Haz clic en **Reproducir**
5. El medio entra con fundido
6. Haz clic en **Detener** — el medio sale con fundido

### Cue preparado para programa en vivo

1. Selecciona un medio
2. Haz clic en **CUE**
3. El medio queda cargado y en pausa
4. En el momento adecuado, haz clic en **Reproducir**
5. El medio empieza al instante (sin tiempo de carga)

### Vídeo de fondo en bucle

1. Selecciona un vídeo de bucle (p. ej., fondo en movimiento)
2. Haz clic en **Avanzado**
3. Activa **Bucle**
4. Haz clic en **Reproducir**
5. El vídeo se repite hasta que se detenga

### Reproducción con retardo

1. Selecciona un medio
2. Haz clic en **Avanzado**
3. Establece **Retardo**: 5000 (5 segundos)
4. Haz clic en **Reproducir**
5. El comando se envía al instante, la reproducción empieza tras 5s

### Añadir al Rundown con configuración

1. Selecciona un medio
2. Configura transiciones, bucle, tiempos, etc.
3. Haz clic en **Añadir al Rundown**
4. La entrada aparece en el rundown con todos los ajustes
5. Ejecútala durante el programa disparando la entrada

### Búsqueda durante la reproducción

1. El medio debe estar reproduciéndose
2. Usa **Rebobinar (-5s)** o **Avanzar (+10s)**
3. La reproducción salta atrás o adelante
4. Útil para repetir segmentos o saltar partes

## Monitorización de Productores Activos

El panel de Productores Activos muestra información en tiempo real para todos los medios en reproducción:

**Información mostrada:**
- **Nombre del clip** — Ruta completa del archivo
- **Canal-Capa** — Enrutamiento de salida (p. ej., "1-1")
- **Etiqueta de bucle** — Indica medios en bucle
- **Icono Play/Pausa** — Estado actual de reproducción
- **Barra de progreso** — Progreso visual
- **Tiempo actual** — Tiempo transcurrido (MM:SS)
- **Tiempo restante** — Tiempo hasta el final (-MM:SS)

**Acciones:**
- **Botón Detener** — Detiene un productor concreto al instante
- Detiene la reproducción en ese canal/capa
- Lo elimina de la lista de productores activos

**Casos de uso:**
- Monitorizar varios medios reproduciéndose a la vez
- Detener rápido una capa concreta sin afectar al resto
- Confirmación visual de lo que está al aire

:::tip Producción multicapa
Usa Productores Activos para gestionar programas complejos con varios vídeos, gráficos y audio en distintas capas y canales.
:::

## Integración con CasparCG

### Comandos enviados

El módulo Medios envía los siguientes comandos AMCP de CasparCG:

**LOADBG CLIP**
- Precarga medios en segundo plano

**LOAD CLIP**
- Carga medios (cued, sin reproducir)

**PLAY [canal]-[capa] [clip]**
- Inicia la reproducción con transición opcional

**PAUSE [canal]-[capa]**
- Pausa el medio actual

**RESUME [canal]-[capa]**
- Reanuda el medio en pausa

**STOP [canal]-[capa]**
- Detiene la reproducción

**CALL [canal]-[capa] SEEK [fotogramas]**
- Busca un fotograma concreto (relativo)

**MIXER [canal]-[capa] VOLUME [valor]**
- Ajusta el volumen de audio (0,0 a 1,0)

### Soporte de transiciones

Las transiciones se aplican con parámetros de transición de CasparCG:

```
PLAY 1-1 video.mp4 MIX 20 EASEINSINE
```

- **MIX** — Tipo de transición
- **20** — Duración en fotogramas
- **EASEINSINE** — Función de easing

### Control de volumen

El volumen se aplica antes de la reproducción:

```
MIXER 1-1 VOLUME 0.8
PLAY 1-1 audio.mp3
```

:::info
El ajuste de volumen se guarda en preferencias y se aplica automáticamente a toda reproducción posterior.
:::

## Soporte de formatos

7CG admite todos los formatos que CasparCG puede manejar:

**Vídeo:**
- MP4 (H.264)
- MOV (ProRes, Animation)
- AVI
- WebM
- Matroska (MKV)
- DV
- HAP

**Imagen:**
- PNG (con transparencia)
- JPEG
- TGA
- PSD (con capas)
- BMP

**Audio:**
- WAV
- MP3
- AAC
- FLAC

:::tip Consejo de rendimiento
Para mejor rendimiento:
- **Vídeo**: HAP o DNxHD en contenedores MOV
- **Imágenes**: PNG con transparencia
- **Audio**: WAV sin comprimir a la velocidad de muestreo del canal
:::

## Atajos de teclado

Cuando el módulo Medios está activo:

- **Espacio** — Reproducir/Pausar el medio seleccionado
- **Enter** — Reproducir el medio seleccionado
- **Ctrl+Espacio** — Detener la reproducción
- **Flecha izquierda** — Rebobinar 5 segundos
- **Flecha derecha** — Avanzar 10 segundos
- **Ctrl+F** — Enfocar la búsqueda

:::note
Los atajos pueden variar según el sistema operativo y la configuración.
:::

## Resolución de problemas

### Los medios no aparecen en el navegador

1. Verifica que el servidor CasparCG está en ejecución y conectado
2. Comprueba la opción `media-path` en `casparcg.config`
3. Asegúrate de que los archivos están en la carpeta de medios de CasparCG
4. Refresca o reinicia 7CG para recargar la lista

### La reproducción no se inicia

1. Comprueba el estado de conexión (Configuración → Conexión)
2. Verifica que los números de canal y capa son válidos
3. Asegúrate de que el formato es compatible con CasparCG
4. Revisa los registros del servidor

### No aparecen miniaturas

1. Las miniaturas se generan a demanda al desplazarse
2. Desplázate hasta el elemento para generarla
3. El servicio de miniaturas de CasparCG debe estar activo
4. Comprueba que los archivos no están corruptos

### El volumen no cambia

1. Verifica el valor de volumen guardado
2. Comprueba que canal/capa son correctos
3. Asegúrate de que el mixer de CasparCG responde
4. Prueba con `MIXER 1-1 VOLUME 0.5` en el CLI de CasparCG

### Las transiciones no funcionan

1. Verifica que la versión de CasparCG admite transiciones
2. Comprueba los parámetros (duración, tipo)
3. Asegúrate de que la velocidad de fotogramas se detecta correctamente
4. Algunas versiones antiguas tienen soporte limitado

### Productores Activos no se actualizan

1. Comprueba la conexión OSC (Configuración → Conexión → Puerto OSC)
2. Verifica que CasparCG envía feedback OSC
3. Reinicia 7CG para reinicializar el oyente OSC

## Buenas prácticas

### Flujo de producción

1. **Antes del programa:**
   - Carga todos los medios en el rundown con transiciones
   - Prueba cada entrada antes de salir al aire
   - Establece el volumen global a un nivel adecuado

2. **Durante el programa:**
   - Usa el rundown como control principal
   - Usa el módulo Medios para contenido ad hoc
   - Monitoriza el panel de Productores Activos

3. **Reproducción de emergencia:**
   - Mantén el módulo Medios visible para acceso rápido
   - Usa CUE para inicio instantáneo
   - Conoce las ubicaciones de los gráficos de emergencia

### Optimización de rendimiento

- **Usa codecs adecuados**: HAP para canal alfa, DNxHD para calidad
- **Organiza carpetas**: Agrupa contenido relacionado para navegar más rápido
- **Pre-cue de medios clave**: Carga clips importantes en CUE antes de necesitarlos
- **Monitoriza Productores Activos**: No mantengas bucles innecesarios

### Estrategia de canales y capas

**Diseño típico:**
- **Capas 0-9**: Medios de fondo y vídeos
- **Capas 10-19**: Tercios inferiores y gráficos estáticos
- **Capas 20-29**: Gráficos a pantalla completa
- **Capas 30+**: Mensajes de emergencia y superposiciones

**Varios canales:**
- **Canal 1**: Salida principal del programa
- **Canal 2**: Salida de preview/monitor
- **Canal 3**: Multivisor o feed de retorno

:::tip
Documenta tu estrategia de canales/capas y compártela con el equipo para una operación consistente.
:::

## Integración con Rundowns

Los medios añadidos al rundown se convierten en un **Bloque de Comando** con las siguientes propiedades:

**Configuración guardada:**
- Ruta del archivo
- Canal y capa
- Ajustes de transición de entrada/salida
- Bucle, retardo, duración
- Parámetros avanzados (in frame, longitud, filtro)

**Ejecución:**
- Se dispara al instante al ejecutar la entrada
- Todos los ajustes se aplican automáticamente
- Puede agruparse con otros comandos
- Admite atajos de teclado y disparos desde Companion

**Ventajas:**
- Secuencias repetibles
- Tiempos consistentes
- Transiciones preconfiguradas
- Colaboración en equipo (archivos de rundown compartidos)

---

## Resumen

El módulo Medios es la base de la reproducción de contenido en 7CG. Domínalo para:

- Gestionar bibliotecas grandes de medios eficientemente
- Crear transiciones suaves y profesionales
- Monitorizar varias reproducciones simultáneas
- Construir secuencias de rundown fiables y repetibles
- Ejecutar producciones en vivo sin fallos

Para uso avanzado, combina el módulo Medios con Tercios Inferiores, Biblia y Letras para crear flujos completos de gráficos para transmisión.
