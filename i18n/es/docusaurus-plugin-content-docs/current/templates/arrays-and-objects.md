---
sidebar_position: 4
---

# Arrays y objetos

Esta página explica cómo construir datos estructurados de plantilla en 7CG usando:

- `type: "object"`
- `type: "array"`

Estos tipos de campo son especialmente útiles cuando una plantilla necesita más que unos pocos campos planos de texto.

Ejemplos comunes:

- listas de equipo o créditos
- bullet points repetidos
- horarios
- bloques agrupados de nombre/título
- gráficos con varias personas

## Cuándo usar un objeto

Usa un objeto cuando varios valores relacionados pertenezcan juntos.

Casos de uso:

- un bloque de nombre con `line1` y `line2`
- un bloque de subtítulo con `title`, `subtitle` y `tag`
- un bloque de estilo con varios ajustes relacionados

### Ejemplo básico de objeto

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

### Lo que ven los usuarios en 7CG

Un objeto se renderiza como un editor anidado que contiene los campos hijos listados en `properties`.

Esto da al usuario una sección visible para todo el bloque en lugar de dispersar los campos relacionados por el editor.

## Cuándo usar un array

Usa un array cuando el usuario necesite una lista repetible de elementos.

Casos de uso:

- bullet points
- varios oradores
- nombres de créditos
- elementos de agenda
- listas de equipo

### Array de strings

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

### Lo que ven los usuarios en 7CG

Para elementos primitivos como strings o números, los usuarios editan la lista en línea.

Pueden:

- añadir elementos
- quitar elementos
- editar cada elemento directamente en la lista

Si `maxItems` está definido, el botón de añadir muestra el conteo actual.

## Arrays de objetos

Los arrays de objetos son uno de los patrones estructurados más útiles en 7CG.

Úsalos cuando cada elemento de la lista necesite varios campos.

Casos de uso:

- entradas de créditos con `name` y `role`
- listas de oradores con `name`, `title` y `organization`
- entradas de agenda con `time`, `title` y `location`

### Ejemplo de créditos

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

### Lo que ven los usuarios en 7CG

Para arrays de objetos, cada elemento aparece como una entrada de lista con:

- una vista previa del contenido actual
- un botón de editar
- un botón de quitar

Editar abre el elemento en su propio cuadro, lo que mantiene manejables los elementos complejos.

## Objetos anidados dentro de arrays

Puedes combinar objetos y arrays libremente.

Por ejemplo, cada elemento del array puede contener un objeto anidado:

```json
"speakers": {
  "type": "array",
  "label": "Speakers",
  "items": {
    "type": "object",
    "title": "Speaker",
    "properties": {
      "identity": {
        "type": "object",
        "label": "Identity",
        "properties": {
          "name": {
            "type": "string",
            "label": "Name"
          },
          "title": {
            "type": "string",
            "label": "Title"
          }
        }
      }
    }
  }
}
```

Es potente, pero también hace el editor más complejo. Usa el anidamiento cuando ayude a los usuarios a entender la estructura, no solo porque el esquema lo permita.

## Propiedades útiles de array

### `minItems`

```json
"minItems": 1
```

Indica que se espera al menos un elemento.

### `maxItems`

```json
"maxItems": 10
```

Limita cuántos elementos pueden añadir los usuarios.

### `uniqueItems`

```json
"uniqueItems": true
```

Marca la lista como pensada para contener valores únicos.

Útil para la intención del autor, aunque los usuarios deberían probar el comportamiento final en el editor.

## Valores por defecto en campos estructurados

Los valores por defecto son especialmente útiles en arrays y objetos.

### Por defecto en objeto

```json
"nameBlock": {
  "type": "object",
  "label": "Name Block",
  "default": {
    "line1": "Jane Smith",
    "line2": "Presenter"
  },
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

### Por defecto en array

```json
"bulletPoints": {
  "type": "array",
  "label": "Bullet Points",
  "default": ["Welcome", "Announcements", "Closing Prayer"],
  "items": {
    "type": "string"
  }
}
```

Los valores por defecto facilitan probar editores estructurados porque los usuarios pueden ver de inmediato cómo se comporta la plantilla con datos realistas.

## Buenos patrones

### Patrón: Bloque de nombre de dos líneas

Usa un objeto.

Por qué:

- las dos líneas pertenecen juntas
- los usuarios entienden el bloque como una unidad

### Patrón: Lista de bullets

Usa un array de strings.

Por qué:

- los usuarios pueden añadir, quitar y reordenar elementos repetidos

### Patrón: Rollo de créditos

Usa un array de objetos.

Por qué:

- cada fila tiene varios valores
- los usuarios necesitan una lista repetible de entradas similares

### Patrón: Gráfico de varios oradores

Usa un array de objetos, con cada objeto conteniendo los campos del orador.

Por qué:

- escala mejor que crear campos fijos `speaker1`, `speaker2`, `speaker3`

## Patrones a evitar

### Evita aplanar datos repetidos sin necesidad

Menos útil:

```json
"person1Name": { "type": "string" },
"person1Role": { "type": "string" },
"person2Name": { "type": "string" },
"person2Role": { "type": "string" }
```

Mejor:

```json
"team": {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "name": { "type": "string" },
      "role": { "type": "string" }
    }
  }
}
```

### Evita anidamiento profundo sin necesidad real

Si la estructura se vuelve demasiado profunda, el editor se vuelve más difícil de usar.

Prefiere la estructura más simple que aún coincida con el modelo mental del usuario.

## Checklist práctica de pruebas

Al probar arrays y objetos en 7CG, confirma que:

- las secciones de objeto muestran todos los campos hijos esperados
- los arrays primitivos permiten añadir/quitar correctamente
- los arrays de objetos abren su cuadro de edición correctamente
- las vistas previas de los elementos de objeto son significativas
- `minItems` y `maxItems` se comportan como esperabas
- los valores por defecto producen datos iniciales útiles

## Páginas relacionadas

- [Desarrollo de plantillas](./)
- [Inicio rápido: campos de plantilla](./quick-start)
- [Referencia de campos](./field-reference)
- [Pruebas y depuración de plantillas](./testing-and-debugging)

## Pasos siguientes

- [Agrupación e i18n](./grouping-and-i18n) para dividir editores grandes en pestañas más claras
- [Pruebas y depuración de plantillas](./testing-and-debugging) para verificar el comportamiento de arrays y objetos en 7CG
