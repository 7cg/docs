---
sidebar_position: 5
---

# Módulo Información del Canal

El módulo **Información del Canal** es la superficie de control en vivo de 7CG para superposiciones persistentes del canal, como los gráficos de **Bug** e **ID** al aire.

![Interruptores de Bug e ID activados, con las capas resultantes visibles en el módulo Capas Activas debajo](../assets/modules/channel-graphics-on.png)

Combina:

- Interruptores rápidos en vivo para superposiciones de Bug e ID
- Transiciones de fade compartidas para acciones de encender/apagar
- Comportamiento de autoinicio en el arranque
- Separación clara entre la configuración guardada y el estado en tiempo real
- Transmisión de estado a Companion

## Visión general

El módulo Información del Canal te permite:

- Encender y apagar la superposición de **Bug**
- Encender y apagar la superposición de **ID**
- Usar el canal, capa y archivo guardados sin reabrir la configuración
- Confiar en los ajustes de autoinicio para restaurar superposiciones al arrancar
- Mantener Companion y la UI alineados con la actividad actual de bug e ID

Este módulo es intencionalmente simple. Es para operación en vivo, no para elegir archivos o editar detalles de enrutamiento. La configuración se hace en **Configuración → Información del Canal**, mientras que este módulo es donde los operadores disparan las superposiciones durante una producción.

## Componentes de la interfaz

### Interruptor de Bug

El interruptor **Bug** enciende o apaga la superposición configurada del bug.

Cuando se activa, 7CG envía el archivo configurado al canal y capa guardados del bug. Cuando se desactiva, 7CG limpia esa capa reproduciendo `EMPTY`.

### Interruptor de ID

El interruptor **ID** funciona de la misma manera para la superposición configurada de ID de canal o programa.

Igual que el de Bug, usa los valores guardados de canal, capa y archivo, y limpia la capa con `EMPTY` al desactivarse.

### Sin configuración inline

El módulo no expone:

- Navegación de archivos
- Selección de plantillas
- Cuadros avanzados de enrutamiento
- Creación de elementos de rundown

Esas elecciones ya están definidas en la página de configuración de Información del Canal. El módulo está pensado para ser rápido y predecible en uso en vivo.

## Comportamiento de reproducción

Ambos interruptores usan un flujo `media/play` en lugar de un flujo de plantilla CG.

### Encender un gráfico

Cuando se activa una superposición, 7CG envía:

- El `canal` guardado
- La `capa` guardada
- El `archivo` guardado
- Una transición `MIX`

### Apagar un gráfico

Cuando se borra una superposición, 7CG envía el mismo destino con:

- El `canal` guardado
- La `capa` guardada
- Clip establecido a `EMPTY`
- La misma transición `MIX`

### Tiempo del fade

El módulo deriva la duración del fade de la velocidad de fotogramas guardada del canal `1`.

Si no hay velocidad disponible, 7CG recurre a `50` fps. En la práctica, el fade predeterminado dura aproximadamente un segundo.

## Modelo de configuración

El módulo lee sus ajustes guardados del store de Información del Canal, con bloques separados para **Bug** e **ID**.

Cada gráfico guarda:

- `canal`
- `capa`
- `archivo`
- `autoinicio`

Los predeterminados actuales son:

- **Bug**: canal `1`, capa `100`, archivo `ID/CHANNEL_BUG`, autoinicio `false`
- **ID**: canal `1`, capa `101`, archivo `ID/ID`, autoinicio `false`

En instalaciones antiguas, el autoinicio aún recurre a las claves heredadas de arranque:

- `startup.autoplayBug`
- `startup.autoplayId`

Esto mantiene funcionando las instalaciones existentes mientras los nuevos ajustes viven bajo Información del Canal.

## Comportamiento al arranque

Después de que el store de Información del Canal termine el bootstrap, 7CG comprueba si **Bug** o **ID** tienen autoinicio activado.

Si está activo, el módulo pone esa superposición al aire una vez durante el arranque tras un pequeño retardo de aproximadamente un segundo.

Útil para:

- Un bug permanente en directo
- Un ID de estación predeterminado
- Recuperación rápida tras reiniciar 7CG durante un día de producción

## Estado en tiempo real y Companion

7CG mantiene el estado en vivo separado de la configuración guardada.

### Configuración guardada

Los ajustes persistentes (ruta del archivo, canal, capa y autoinicio) viven en el store de configuración de Información del Canal.

### Estado en tiempo real

Los booleanos al aire para **Bug** e **ID** viven en un store de runtime aparte. Esto permite que la UI y Companion reaccionen a lo que está activo sin tratar un cambio de ajustes como un cambio de estado al aire.

El módulo Información del Canal participa en la transmisión de estado a Companion para que las superficies externas reflejen si el Bug o el ID están actualmente activos.

## Flujo típico

### Configuración inicial

1. Abre **Configuración → Información del Canal**
2. Establece canal, capa, archivo y autoinicio para **Bug**
3. Establece canal, capa, archivo y autoinicio para **ID**
4. Prueba ambas superposiciones una vez desde el módulo

### Operación en vivo

1. Usa el interruptor **Bug** para poner el bug al aire o limpiarlo
2. Usa el interruptor **ID** para poner el ID al aire o limpiarlo
3. Deja que el autoinicio restaure cualquiera de las superposiciones automáticamente al arrancar cuando sea necesario

## Buenas prácticas

- Reserva capas fijas para Bug e ID para que no choquen con tercios inferiores u otras superposiciones
- Mantén bug e ID en capas separadas si ambos pueden usarse en la misma producción
- Activa el autoinicio solo para superposiciones que deban aparecer fiablemente en cada arranque
- Confirma los ajustes de velocidad de fotogramas del canal `1` para que el fade coincida con tu entorno
- Trata este módulo como un panel de operador y mantén todos los cambios de archivo y enrutamiento en la página de configuración

## Páginas relacionadas

- [Visión general de los módulos](./)
- [Configuración de Información del Canal](../configuration/channel-graphics)
- [Inicio rápido](../quickstart)
- [Canales](../configuration/channels)
