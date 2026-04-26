---
sidebar_position: 1
---

# Desarrollo de Plantillas

Aprende a crear y personalizar plantillas gráficas de CasparCG para usar con 7CG.

## ¿Qué es una plantilla?

Una plantilla de 7CG es una plantilla gráfica HTML de CasparCG que muestra contenido dinámico en la salida de transmisión. Las plantillas se construyen con React e incluyen un esquema GDD (Graphics Data Definition) embebido que define:

- **Título de la plantilla** — Nombre que se muestra en 7CG
- **Propiedades** — Definiciones de campos que crean controles de entrada en la interfaz de 7CG
- **Tipos de campo** — Entradas especializadas como selectores de color, áreas de texto y listas desplegables
- **Internacionalización** — Etiquetas y descripciones multilingües

## Empezar

La parte más importante del desarrollo de plantillas para la integración con 7CG es definir correctamente tu **esquema GDD**. El esquema va embebido en el archivo HTML de la plantilla y determina qué campos aparecen en 7CG cuando los usuarios trabajan con la plantilla.

Consulta la [Guía de inicio rápido](./quick-start) para aprender a definir campos que se muestren correctamente en el cliente de 7CG.

## Páginas recomendadas a continuación

Tras el inicio rápido, las páginas más útiles son:

- [Referencia de campos](./field-reference) para una consulta rápida de tipos admitidos, valores `gddType` y opciones comunes
- [Arrays y objetos](./arrays-and-objects) para construir listas, bloques anidados, entradas de créditos y otros datos estructurados
- [Agrupación e i18n](./grouping-and-i18n) para organizar campos en pestañas y localizar títulos, etiquetas y descripciones
- [Pruebas y depuración de plantillas](./testing-and-debugging) para entender por qué una plantilla o campo no aparece como esperabas
- [Familias de plantillas](./template-families) para entender dónde aparecen las plantillas en 7CG según el prefijo de su familia

## Estructura de una plantilla

Una plantilla típica contiene:

```
my-template/
├── index.html       # HTML con esquema GDD embebido
├── index.jsx        # Componente React del gráfico
├── styles.css       # Estilos de la plantilla (opcional)
└── image.png        # Captura de previsualización (opcional)
```

El esquema GDD se embebe en `index.html` mediante una etiqueta `<script>` especial:

```html
<script name="graphics-data-definition" type="application/json+gdd">
  {
    "$schema": "https://superflytv.github.io/GraphicsDataDefinition/gdd-meta-schema/v1/schema.json",
    "title": "Mi Plantilla",
    "type": "object",
    "properties": {
      /* definiciones de campos */
    }
  }
</script>
```

Este esquema embebido es lo que 7CG lee para entender los campos de la plantilla y mostrarlos en la interfaz.
