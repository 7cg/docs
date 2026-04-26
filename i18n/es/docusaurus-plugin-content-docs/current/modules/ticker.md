---
sidebar_position: 7
---

# Módulo Ticker

El módulo **Ticker** es el panel de preparación de 7CG para superposiciones de texto desplazante, como anuncios, alertas y barras de información.

En la implementación actual de `7cg-ng`, ofrece:

- Un selector de plantilla de ticker
- Un área de entrada de texto para el contenido
- Botones Reproducir y Detener
- Un módulo del espacio de trabajo que se puede mostrar, ocultar y colocar en diseños

## Visión general

El módulo Ticker pretende apoyar:

- Anuncios desplazantes
- Barras de información
- Mensajes de emergencia o de servicio
- Selección reutilizable de plantillas de ticker

Por ahora, el módulo es aún una UI ligera más que un flujo de automatización totalmente integrado. Los controles visibles están presentes, pero aún no están conectados a los flujos profundos de ejecución y rundown que usan módulos más maduros como Medios, Biblia, Letras o Tercios Inferiores.

## Componentes de la interfaz

### Selector de plantilla

El módulo incluye un desplegable **Plantilla** con las opciones actualmente expuestas:

- `Main`
- `ADRA`

Refleja la implementación actual. Es un selector simple, no un navegador dinámico de plantillas desde la lista completa de CasparCG.

### Editor de texto

El campo **Texto** es un área multilínea donde el operador puede preparar el contenido del ticker.

Es la entrada principal del módulo hoy y representa el texto que se enviaría al flujo del ticker cuando la conexión con la ejecución esté completa.

### Botones de reproducción

El módulo incluye dos botones para el operador:

- **Detener**
- **Reproducir**

Establecen la forma esperada del flujo de control en vivo, pero la implementación actual aún no los conecta a un pipeline documentado de comandos de CasparCG como ocurre en los módulos más maduros.

## Estado actual de implementación

El módulo Ticker debe documentarse como **presente pero incompleto**.

Lo que existe hoy:

- Un módulo independiente en el espacio de trabajo
- Soporte de visibilidad y diseño en la interfaz
- UI de selección de plantilla
- UI de entrada de texto
- Controles Reproducir y Detener en el chrome del módulo
- Definiciones de tipo de evento de ticker para Companion

Lo que aún no está implementado en el flujo visible del módulo:

- Ejecución documentada de comandos de reproducción de ticker
- Actualizaciones confirmadas del estado al aire desde el módulo
- Comportamiento de añadir al rundown
- Controles avanzados de enrutamiento
- Edición de campos guiada por metadatos de plantilla

Esta distinción es importante para que los operadores entiendan que el módulo está disponible en la interfaz, pero aún no es completo en funciones.

## Visibilidad y diseños

Como los demás módulos de la Fase 3, Ticker puede:

- Activarse o desactivarse desde las preferencias de interfaz
- Colocarse en diseños guardados
- Mostrarse junto a Información del Canal, Créditos y otros módulos de operador

Útil como parte reservada del espacio de trabajo mientras el flujo de ejecución sigue evolucionando.

## Estado en Companion

Los tipos de estado compartidos de Companion ya definen una forma de estado de ticker con:

- `activo`
- `texto`

También hay un canal de transmisión `state:ticker` registrado.

Sin embargo, la implementación actual aún no proporciona el flujo completo de ejecución en vivo que alimentaría continuamente ese estado desde las acciones del operador. Por ahora, conviene tratarlo como base para una integración futura y no como contrato totalmente documentado.

## Flujo típico

### Uso práctico actual

1. Abre el módulo Ticker en el espacio de trabajo
2. Elige la variante disponible
3. Prepara el texto del mensaje
4. Trata el módulo como una superficie de preparación/control mientras avanza la integración

### Dirección futura esperada

La UI actual sugiere un flujo futuro en el que los operadores:

1. Elegirán el estilo del ticker
2. Introducirán el texto del mensaje
3. Iniciarán el ticker al aire
4. Lo detendrán o reemplazarán durante el programa

Esa dirección es visible en el diseño, pero aún no debe documentarse como comportamiento totalmente implementado.

## Buenas prácticas

- Mantén explícito en la documentación que Ticker es una implementación parcial
- Evita describirlo como un módulo completo del rundown hasta que la ejecución esté conectada
- Usa diseños para mantener el módulo disponible para equipos que preparen futuros flujos de ticker
- Trata las opciones de plantilla visibles como elecciones actuales de la UI, no como un sistema completo de gestión de plantillas

## Páginas relacionadas

- [Visión general de los módulos](./)
- [Diseños](../configuration/layouts)
- [Interfaz](../configuration/interface)
