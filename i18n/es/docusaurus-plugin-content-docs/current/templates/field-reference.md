---
sidebar_position: 3
---

# Referencia de campos

Esta página es una referencia rápida de los tipos de campo y opciones que 7CG renderiza actualmente en su editor de plantillas.

Úsala cuando ya entiendes lo básico y solo quieres comprobar:

- qué `type` o `gddType` usar
- qué mostrará el editor
- qué propiedades extra son útiles para ese campo

Para una introducción tutorial, consulta [Inicio rápido: campos de plantilla](./quick-start).

## Referencia del esquema raíz

### Propiedades obligatorias en la raíz

| Propiedad | Tipo | Notas |
|----------|------|-------|
| `$schema` | `string` | Usa la URL del meta-esquema GDD |
| `title` | `string` | Nombre de la plantilla mostrado en 7CG |
| `type` | `string` | Usa `"object"` en la raíz |
| `properties` | `object` | Campos editables de nivel superior |

### Propiedades opcionales comunes en la raíz

| Propiedad | Tipo | Notas |
|----------|------|-------|
| `description` | `string` | Descripción mostrada en los selectores |
| `authorName` | `string` | Autor de la plantilla |
| `authorEmail` | `string` | Contacto del autor |
| `gddOptions.groups` | `array` | Define grupos de pestañas |
| `gddOptions.i18n.title` | `object` | Título traducido |

## Propiedades comunes de los campos

| Propiedad | Tipo | Qué hace |
|----------|------|---------------|
| `type` | `string` o `array` | Tipo de datos base |
| `label` | `string` | Etiqueta principal visible |
| `description` | `string` | Texto de ayuda/tooltip |
| `default` | cualquiera | Valor inicial o placeholder según el campo |
| `gddType` | `string` | Control de editor especializado |
| `minLength` | `number` | Longitud mínima para strings |
| `maxLength` | `number` | Longitud máxima para strings |
| `minimum` | `number` | Valor numérico mínimo |
| `maximum` | `number` | Valor numérico máximo |
| `multipleOf` | `number` | Tamaño de paso para números/enteros |
| `enum` | `array` | Valores permitidos para select/desplegable |
| `minItems` | `number` | Mínimo de elementos en arrays |
| `maxItems` | `number` | Máximo de elementos en arrays |
| `uniqueItems` | `boolean` | Marca elementos del array como únicos |
| `gddOptions.group` | `string` | Coloca el campo en un grupo nombrado |
| `gddOptions.labels` | `object` | Etiquetas amigables para opciones `enum` |
| `gddOptions.i18n` | `object` | `label` y `description` traducidos |
| `gddOptions.extensions` | `array` | Extensiones permitidas en selectores de archivo |

## Tipos base admitidos

### `string`

**Se renderiza como:** entrada de texto de una línea por defecto

Útil con:

- `label`
- `description`
- `default`
- `minLength`
- `maxLength`
- `gddType`

### `number`

**Se renderiza como:** entrada numérica con soporte decimal

Útil con:

- `default`
- `minimum`
- `maximum`
- `multipleOf`
- `gddType: "percentage"`

### `integer`

**Se renderiza como:** entrada numérica con pasos enteros

Útil con:

- `default`
- `minimum`
- `maximum`
- `multipleOf`
- `gddType: "duration-ms"`

### `boolean`

**Se renderiza como:** interruptor

Útil con:

- `default`

### `object`

**Se renderiza como:** editor de campos anidados

Propiedad acompañante obligatoria:

- `properties`

### `array`

**Se renderiza como:** editor de lista repetible

Propiedad acompañante obligatoria:

- `items`

Útil con:

- `minItems`
- `maxItems`
- `uniqueItems`

## Valores `gddType` admitidos

### `single-line`

**Usar con:** `type: "string"`

**Se renderiza como:** entrada explícita de una línea

### `multi-line`

**Usar con:** `type: "string"`

**Se renderiza como:** textarea

Mejor para:

- letras
- texto de créditos
- notas
- párrafos

### `color-rrggbb`

**Usar con:** `type: "string"`

**Se renderiza como:** selector de color más entrada hex

Formato esperado:

- `#RRGGBB`

### `color-rrggbbaa`

**Usar con:** `type: "string"`

**Se renderiza como:** entrada hex para color con alfa

Formato esperado:

- `#RRGGBBAA`

### `select`

**Usar con:** `type: "string"`, `type: "number"` o `type: "integer"`

**Se renderiza como:** desplegable

Propiedad obligatoria:

- `enum`

Opcional:

- `gddOptions.labels`

### `percentage`

**Usar con:** campos numéricos

**Se renderiza como:** entrada numérica con sufijo `%`

### `duration-ms`

**Usar con:** campos numéricos

**Se renderiza como:** entrada numérica con sufijo `ms`

### `file-path`

**Usar con:** `type: "string"`

**Se renderiza como:** campo de texto con botón **Examinar**

Opcional:

- `gddOptions.extensions`

### `file-path/image-path`

**Usar con:** `type: "string"`

**Se renderiza como:** selector enfocado a imágenes con botón **Examinar**

Opcional:

- `gddOptions.extensions`

## Referencia de agrupación

Para crear pestañas en el editor:

- define los grupos en la raíz con `gddOptions.groups`
- asigna campos a grupos con `gddOptions.group`

Ejemplo en la raíz:

```json
"gddOptions": {
  "groups": [
    { "id": "content", "label": { "en": "Content" } },
    { "id": "appearance", "label": { "en": "Appearance" } }
  ]
}
```

Ejemplo en el campo:

```json
"headline": {
  "type": "string",
  "label": "Headline",
  "gddOptions": {
    "group": "content"
  }
}
```

Comportamiento:

- los campos agrupados aparecen en pestañas
- los campos sin grupo aparecen en una pestaña **Otros** cuando hay agrupación activa
- las pestañas solo aparecen cuando existen campos agrupados reales

## Referencia de i18n

7CG admite valores traducidos para:

- `title` de la plantilla
- `label` del campo
- `description` del campo

Ejemplo:

```json
"gddOptions": {
  "i18n": {
    "label": {
      "en": "Speaker Name",
      "pt": "Nome do Orador",
      "es": "Nombre del Ponente"
    }
  }
}
```

Orden de respaldo:

1. idioma actual de la UI
2. inglés
3. valor por defecto del campo

## Referencia de arrays y objetos

### Ejemplo de objeto

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

### Ejemplo de array de strings

```json
"bulletPoints": {
  "type": "array",
  "label": "Bullet Points",
  "items": {
    "type": "string",
    "gddType": "single-line"
  },
  "minItems": 1,
  "maxItems": 5
}
```

### Ejemplo de array de objetos

```json
"team": {
  "type": "array",
  "label": "Team",
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

Comportamiento:

- los elementos primitivos se editan en línea
- los elementos complejos se abren en su propio cuadro
- los objetos renderizan campos hijo anidados

## Notas prácticas

- Usa `label` siempre que puedas; da al usuario un editor más limpio.
- Usa `description` para texto de ayuda, no como única etiqueta visible si puedes evitarlo.
- Incluye `#` en los colores por defecto.
- Usa familias dedicadas como `LOWERTHIRDS`, `CREDITS`, `BIBLE` y `HYMNS` para que los usuarios encuentren las plantillas en el módulo correcto.
- Trata esta página como compañera de consulta del inicio rápido, no como sustituto de las pruebas en 7CG.

## Páginas relacionadas

- [Desarrollo de plantillas](./)
- [Inicio rápido: campos de plantilla](./quick-start)
- [Pruebas y depuración de plantillas](./testing-and-debugging)
- [Familias de plantillas](./template-families)

## Pasos siguientes

- [Arrays y objetos](./arrays-and-objects) para estructuras basadas en listas y datos anidados
- [Agrupación e i18n](./grouping-and-i18n) para organizar campos en pestañas y traducir etiquetas
