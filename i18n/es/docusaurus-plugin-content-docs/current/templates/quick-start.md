---
sidebar_position: 2
---

# Inicio rápido: campos de plantilla

Esta guía muestra cómo definir campos de plantilla en tu HTML para que se rendericen correctamente en 7CG.

El enfoque aquí es práctico:

- Qué poner en el bloque GDD
- Qué tipos de campo renderiza realmente 7CG
- Cómo se comportan etiquetas, pestañas, valores por defecto y selectores en el editor

## El bloque de script GDD

Toda plantilla necesita un esquema GDD (Graphics Data Definition) embebido en su archivo HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <script name="graphics-data-definition" type="application/json+gdd">
      {
        "$schema": "https://superflytv.github.io/GraphicsDataDefinition/gdd-meta-schema/v1/schema.json",
        "title": "My Template",
        "description": "A simple template example",
        "type": "object",
        "properties": {
          "text": {
            "type": "string",
            "label": "Main Text",
            "description": "Text shown on screen",
            "gddType": "single-line"
          }
        }
      }
    </script>
    <script type="module" src="./index.jsx"></script>
  </body>
</html>
```

### Propiedades obligatorias en la raíz

| Propiedad | Descripción |
|----------|-------------|
| `$schema` | Usa la URL del meta-esquema GDD anterior |
| `title` | Nombre de la plantilla mostrado en 7CG |
| `type` | Usa `"object"` para la raíz |
| `properties` | Objeto con los campos editables |

### Propiedades opcionales comunes en la raíz

| Propiedad | Descripción |
|----------|-------------|
| `description` | Descripción mostrada en 7CG |
| `authorName` | Autor de la plantilla |
| `authorEmail` | E-mail de contacto |
| `gddOptions` | Opciones avanzadas como grupos e i18n |

## Etiquetas, ayuda y valores por defecto

Para plantillas orientadas al operador, las propiedades más importantes son:

| Propiedad | Lo que ve el usuario |
|----------|----------------|
| `label` | Etiqueta principal del campo |
| `description` | Texto de ayuda en el tooltip |
| `default` | Valor inicial o sugerencia, según el tipo |
| `maxLength` | Límite de entrada y pista para campos de texto |

Ejemplo:

```json
"speakerName": {
  "type": "string",
  "label": "Speaker Name",
  "description": "Name shown on the first line",
  "default": "Jane Smith",
  "maxLength": 50,
  "gddType": "single-line"
}
```

### `label` vs `description`

Usa:

- `label` para el título visible del campo
- `description` para el texto de ayuda

Si falta `label`, 7CG recurre a `description` y luego a la clave del campo.

## Tipos básicos de campo

### String

```json
"title": {
  "type": "string",
  "label": "Title"
}
```

**Se renderiza como:** Entrada de texto de una línea

Opciones útiles:

- `minLength`
- `maxLength`
- `default`

### Number

```json
"speed": {
  "type": "number",
  "label": "Speed",
  "default": 100,
  "minimum": 1,
  "maximum": 500
}
```

**Se renderiza como:** Entrada numérica que admite decimales

Opciones útiles:

- `minimum`
- `maximum`
- `multipleOf`
- `default`

### Integer

```json
"count": {
  "type": "integer",
  "label": "Item Count",
  "default": 3
}
```

**Se renderiza como:** Entrada numérica con paso `1`

### Boolean

```json
"showLogo": {
  "type": "boolean",
  "label": "Show Logo",
  "default": true
}
```

**Se renderiza como:** Interruptor

## Campos especializados con `gddType`

Usa `gddType` cuando quieras un control de editor más específico.

### Texto de una línea

```json
"headline": {
  "type": "string",
  "label": "Headline",
  "gddType": "single-line",
  "maxLength": 80
}
```

**Se renderiza como:** Entrada explícita de una línea

### Texto multilínea

```json
"body": {
  "type": "string",
  "label": "Body Text",
  "gddType": "multi-line",
  "default": "Line 1\nLine 2\nLine 3"
}
```

**Se renderiza como:** Textarea

Buena elección para:

- Letras
- Texto de créditos
- Notas
- Contenido en párrafo

### Selector de color (`#RRGGBB`)

```json
"backgroundColor": {
  "type": "string",
  "label": "Background Color",
  "gddType": "color-rrggbb",
  "default": "#000000"
}
```

**Se renderiza como:** Selector visual de color más entrada hex

Formato esperado:

- `#RRGGBB`

### Color con alfa (`#RRGGBBAA`)

```json
"textColor": {
  "type": "string",
  "label": "Text Color",
  "gddType": "color-rrggbbaa",
  "default": "#FFFFFFFF"
}
```

**Se renderiza como:** Entrada hex para valores de 8 dígitos

Formato esperado:

- `#RRGGBBAA`

Importante: incluye el `#` inicial.

### Select / Desplegable

```json
"alignment": {
  "type": "string",
  "label": "Alignment",
  "gddType": "select",
  "enum": ["left", "center", "right"],
  "default": "center",
  "gddOptions": {
    "labels": {
      "left": "Left",
      "center": "Center",
      "right": "Right"
    }
  }
}
```

**Se renderiza como:** Lista desplegable

Usa:

- `enum` para los valores permitidos
- `gddOptions.labels` para etiquetas amigables

### Porcentaje

```json
"opacity": {
  "type": "number",
  "label": "Opacity",
  "gddType": "percentage",
  "default": 75,
  "minimum": 0,
  "maximum": 100
}
```

**Se renderiza como:** Entrada numérica con sufijo `%`

### Duración en milisegundos

```json
"fadeDuration": {
  "type": "integer",
  "label": "Fade Duration",
  "gddType": "duration-ms",
  "default": 500,
  "minimum": 0
}
```

**Se renderiza como:** Entrada numérica con sufijo `ms`

### Selector de archivo

```json
"videoFile": {
  "type": "string",
  "label": "Video File",
  "gddType": "file-path",
  "gddOptions": {
    "extensions": ["mp4", "mov", "webm"]
  }
}
```

**Se renderiza como:** Campo de texto con un botón **Examinar**

### Selector de imagen

```json
"logoPath": {
  "type": "string",
  "label": "Logo Image",
  "gddType": "file-path/image-path",
  "gddOptions": {
    "extensions": ["png", "jpg", "jpeg", "webp"]
  }
}
```

**Se renderiza como:** Selector de archivo orientado a imágenes con un botón **Examinar**

## Arrays y objetos

7CG puede renderizar datos estructurados, no solo campos planos.

### Campos de objeto

```json
"nameBlock": {
  "type": "object",
  "label": "Name Block",
  "properties": {
    "line1": {
      "type": "string",
      "label": "Line 1"
    },
    "line2": {
      "type": "string",
      "label": "Line 2"
    }
  }
}
```

**Se renderiza como:** Editor anidado con un campo por propiedad

Usa objetos cuando varios valores relacionados pertenezcan juntos.

### Campos de array

```json
"items": {
  "type": "array",
  "label": "Bullet Points",
  "minItems": 1,
  "maxItems": 5,
  "items": {
    "type": "string",
    "gddType": "single-line"
  }
}
```

**Se renderiza como:** Lista con controles de añadir/quitar

Opciones útiles:

- `minItems`
- `maxItems`
- `uniqueItems`

### Arrays de objetos

```json
"team": {
  "type": "array",
  "label": "Team Members",
  "items": {
    "type": "object",
    "title": "Member",
    "properties": {
      "name": {
        "type": "string",
        "label": "Name"
      },
      "role": {
        "type": "string",
        "label": "Role"
      }
    }
  }
}
```

**Se renderiza como:** Lista en la que cada elemento se abre en su propio cuadro de edición

Útil para:

- Listas de créditos
- Listas de oradores
- Entradas de tercio inferior repetidas

## Agrupar campos en pestañas

Puedes organizar los campos en pestañas con `gddOptions.groups`.

```json
{
  "$schema": "https://superflytv.github.io/GraphicsDataDefinition/gdd-meta-schema/v1/schema.json",
  "title": "Grouped Template",
  "type": "object",
  "gddOptions": {
    "groups": [
      { "id": "content", "label": { "en": "Content" } },
      { "id": "appearance", "label": { "en": "Appearance" } }
    ]
  },
  "properties": {
    "text": {
      "type": "string",
      "label": "Main Text",
      "gddOptions": { "group": "content" }
    },
    "color": {
      "type": "string",
      "label": "Text Color",
      "gddType": "color-rrggbb",
      "gddOptions": { "group": "appearance" }
    }
  }
}
```

Cómo se comporta en 7CG:

- Los campos asignados a grupos conocidos aparecen en pestañas
- Los campos sin grupo aparecen en una pestaña **Otros** de respaldo
- Las pestañas solo aparecen cuando la plantilla tiene campos efectivamente agrupados

## Internacionalización (i18n)

7CG admite valores traducidos para:

- `title` de la plantilla
- `label` del campo
- `description` del campo

Usa `gddOptions.i18n`.

### i18n a nivel de campo

```json
"lyrics": {
  "type": "string",
  "gddType": "multi-line",
  "label": "Lyrics",
  "description": "Lyrics to display",
  "gddOptions": {
    "i18n": {
      "label": {
        "en": "Lyrics",
        "pt": "Letra",
        "es": "Letra"
      },
      "description": {
        "en": "Lyrics to display",
        "pt": "Letra a exibir",
        "es": "Letra a mostrar"
      }
    }
  }
}
```

### i18n a nivel de plantilla

```json
{
  "title": "My Template",
  "gddOptions": {
    "i18n": {
      "title": {
        "en": "My Template",
        "pt": "Meu Template",
        "es": "Mi Plantilla"
      }
    }
  }
}
```

7CG usa primero el idioma de la interfaz, luego recurre al inglés y por último al valor por defecto.

## Notas prácticas

### Valores por defecto

`default` es útil, pero no se comporta igual en todos los tipos.

En la práctica:

- los booleanos y muchos campos numéricos muestran el valor por defecto como valor inicial
- los campos de string a menudo lo usan como placeholder sugerido
- los arrays y objetos lo usan al construir editores anidados

Trata los valores por defecto como sugerencia inicial, no como regla estricta sobre la apariencia de cada control.

### Validación

7CG usa detalles del esquema como:

- `minLength`
- `maxLength`
- `minimum`
- `maximum`
- `minItems`
- `maxItems`

para dar forma al editor y ayudar al usuario, pero no debes confiar en el editor genérico para aplicar todas las reglas igual que un validador de backend.

## Ejemplo completo

```html
<script name="graphics-data-definition" type="application/json+gdd">
{
  "$schema": "https://superflytv.github.io/GraphicsDataDefinition/gdd-meta-schema/v1/schema.json",
  "title": "Credits Roll",
  "description": "Credits template with grouped fields",
  "type": "object",
  "gddOptions": {
    "groups": [
      { "id": "content", "label": { "en": "Content" } },
      { "id": "style", "label": { "en": "Style" } }
    ]
  },
  "properties": {
    "heading": {
      "type": "string",
      "label": "Heading",
      "gddType": "single-line",
      "default": "Production Team",
      "gddOptions": { "group": "content" }
    },
    "people": {
      "type": "array",
      "label": "People",
      "gddOptions": { "group": "content" },
      "items": {
        "type": "object",
        "title": "Person",
        "properties": {
          "name": {
            "type": "string",
            "label": "Name"
          },
          "role": {
            "type": "string",
            "label": "Role"
          }
        }
      }
    },
    "textColor": {
      "type": "string",
      "label": "Text Color",
      "gddType": "color-rrggbbaa",
      "default": "#FFFFFFFF",
      "gddOptions": { "group": "style" }
    },
    "speed": {
      "type": "number",
      "label": "Speed",
      "default": 100,
      "minimum": 1,
      "maximum": 500,
      "gddOptions": { "group": "style" }
    }
  }
}
</script>
```

## Probar tus campos

1. Guarda tu archivo HTML con el bloque GDD embebido.
2. Refresca las plantillas en 7CG o reconéctate a la fuente.
3. Abre un módulo que use la plantilla.
4. Confirma que etiquetas, pestañas, selectores, arrays y valores por defecto aparecen como esperabas.

Si los campos no aparecen correctamente:

- Verifica que el JSON es válido
- Confirma que el `type` raíz es `"object"`
- Confirma que cada propiedad tiene un `type` válido
- Revisa la ortografía de `gddType`
- Asegúrate de que los campos agrupados referencian un ID de grupo real
- Verifica que los formatos de color usan `#RRGGBB` o `#RRGGBBAA`

## Referencia rápida

| Quiero... | Usar |
|------------|-----|
| Texto de una línea | `"type": "string"` o `"gddType": "single-line"` |
| Texto multilínea | `"type": "string", "gddType": "multi-line"` |
| Número entero | `"type": "integer"` |
| Número decimal | `"type": "number"` |
| Interruptor on/off | `"type": "boolean"` |
| Selector RGB | `"type": "string", "gddType": "color-rrggbb"` |
| Color RGBA | `"type": "string", "gddType": "color-rrggbbaa"` |
| Desplegable | `"gddType": "select"` con `enum` |
| Porcentaje | `"gddType": "percentage"` |
| Duración en ms | `"gddType": "duration-ms"` |
| Selector de archivo genérico | `"gddType": "file-path"` |
| Selector de imagen | `"gddType": "file-path/image-path"` |
| Agrupar campos en pestañas | `gddOptions.groups` en la raíz y `gddOptions.group` por campo |
| Traducir etiquetas y descripciones | `gddOptions.i18n` |
| Listas repetidas | `"type": "array"` |
| Datos anidados | `"type": "object"` |

## Pasos siguientes

- [Referencia de campos](./field-reference) para una consulta rápida de tipos y opciones
- [Arrays y objetos](./arrays-and-objects) para listas repetibles y datos anidados
- [Agrupación e i18n](./grouping-and-i18n) para pestañas, traducciones y editores más limpios
