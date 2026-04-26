---
sidebar_position: 8
---

# Información del Canal

La pestaña **Información del Canal** configura las superposiciones persistentes del canal, como el bug y el ID de la estación o del programa.

![Pestaña Información del Canal en Preferencias](../assets/preferences/channel-graphics.png)

Estos ajustes reemplazan la antigua idea de una página separada de "Inicio". Las opciones de superposición relacionadas con el arranque viven ahora aquí y en el asistente de primera ejecución.

## Tipos de gráfico disponibles

7CG expone actualmente dos gráficos de canal:

- **Bug** — Normalmente un logo en una esquina de la pantalla
- **ID** — Normalmente un identificador más grande de estación, canal o evento

Cada gráfico se puede configurar de forma independiente.

## Ajustes por gráfico

Para **Bug** e **ID** puedes configurar:

- **Canal** — Qué canal de CasparCG debe reproducir la superposición
- **Capa** — Qué capa de CasparCG se usa
- **Archivo** — La ruta de plantilla o medio a cargar
- **Autoinicio** — Si el gráfico debe iniciarse automáticamente al arrancar 7CG

## Comportamiento al arranque

Si el autoinicio está activado, 7CG puede poner el gráfico al aire automáticamente cuando arranca la aplicación.

Útil para:

- Un bug permanente en directo
- Un ID de canal predeterminado usado durante todo el programa
- Gráficos de confianza que deben restaurarse sin intervención manual

Usa el autoinicio con cuidado en entornos de ensayo o prueba, especialmente si 7CG se conecta a un servidor en vivo al arrancar.

## Integración con el asistente

El asistente de primera ejecución incluye interruptores rápidos para:

- **Iniciar el bug del canal automáticamente**
- **Iniciar el ID del canal automáticamente**

Esas opciones del asistente alimentan el mismo comportamiento documentado aquí. Tras la configuración inicial, esta página es el lugar para refinar canales, capas y rutas de archivo.

## Configuración típica

### Bug

- **Canal:** Canal de salida del programa
- **Capa:** Una capa de superposición dedicada por encima de la reproducción de vídeo
- **Archivo:** Tu plantilla o recurso gráfico de bug
- **Autoinicio:** Activado si el bug debe estar siempre presente

### ID

- **Canal:** Canal de programa o clean-feed, según el flujo
- **Capa:** Separada de la del bug si ambos pueden aparecer juntos
- **Archivo:** Gráfico de ID de la estación o del evento
- **Autoinicio:** Activado solo si el ID debe aparecer por defecto

## Buenas prácticas

- Reserva capas de CasparCG fijas para las superposiciones de bug e ID
- Documenta las capas elegidas para que no entren en conflicto con tercios inferiores u otros elementos CG
- Prueba el autoinicio tras cualquier cambio de plantilla o ruta
- Mantén una nomenclatura de archivos consistente entre instalaciones

## Páginas relacionadas

- [Inicio rápido](../quickstart)
- [Conexión](./connection)
- [Canales](./channels)
- [Integración con Companion](./companion)
