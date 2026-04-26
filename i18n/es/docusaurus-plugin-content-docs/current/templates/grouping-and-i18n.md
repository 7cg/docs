---
sidebar_position: 5
---

# Agrupación e i18n

Esta página explica dos funcionalidades importantes que hacen los editores de plantillas más fáciles para los usuarios:

- **Agrupar** campos en pestañas
- **Internacionalizar** títulos, etiquetas y descripciones

Son especialmente útiles cuando una plantilla tiene más de un puñado de campos.

## Por qué agrupar campos

Sin agrupación, todos los campos aparecen en una lista larga.

Está bien para una plantilla muy pequeña, pero se vuelve más difícil de usar cuando la plantilla incluye:

- campos de contenido
- ajustes de apariencia
- ajustes de animación
- selectores de archivo
- listas repetidas

La agrupación permite dividir todo eso en secciones claras para que los usuarios encuentren rápido lo que necesitan.

## Cómo funciona la agrupación

La agrupación usa dos partes:

1. una lista de grupos a nivel de raíz
2. una asignación de grupo por campo

### Grupos en la raíz

Define los grupos en la raíz con `gddOptions.groups`:

```json
"gddOptions": {
  "groups": [
    { "id": "content", "label": { "en": "Content" } },
    { "id": "appearance", "label": { "en": "Appearance" } },
    { "id": "timing", "label": { "en": "Timing" } }
  ]
}
```

Cada grupo necesita:

- un `id`
- una `label`

### Asignación por campo

Asigna un campo a un grupo con `gddOptions.group`:

```json
"headline": {
  "type": "string",
  "label": "Headline",
  "gddOptions": {
    "group": "content"
  }
}
```

El valor de grupo del campo debe coincidir con uno de los IDs de grupo de la raíz.

## Lo que ven los usuarios en 7CG

Cuando la agrupación está bien configurada:

- los campos agrupados aparecen en pestañas
- cada pestaña muestra solo los campos asignados a su grupo
- los campos sin grupo aparecen en una pestaña **Otros** de respaldo

Las pestañas solo aparecen cuando 7CG encuentra campos realmente agrupados. Si hay grupos definidos pero ningún campo los usa, el editor recurre a una lista plana.

## Buenos patrones de agrupación

### Patrón: Contenido + Apariencia

El mejor patrón general para muchos gráficos.

- `content` para texto, nombres, títulos y cuerpo
- `appearance` para colores, logos, fondos y elecciones de estilo

### Patrón: Contenido + Estilo + Tiempos

Útil para plantillas animadas más avanzadas.

- `content` para el mensaje
- `style` para colores y diseño
- `timing` para duraciones, retardos y velocidades de animación

### Patrón: Principal + Avanzado

Útil cuando la mayoría de operadores solo necesita unos pocos campos.

- `main` para los controles comunes
- `advanced` para opciones cambiadas con menos frecuencia

## Ejemplo de agrupación

```json
{
  "$schema": "https://superflytv.github.io/GraphicsDataDefinition/gdd-meta-schema/v1/schema.json",
  "title": "Grouped Lower Third",
  "type": "object",
  "gddOptions": {
    "groups": [
      { "id": "content", "label": { "en": "Content" } },
      { "id": "appearance", "label": { "en": "Appearance" } }
    ]
  },
  "properties": {
    "line1": {
      "type": "string",
      "label": "Line 1",
      "gddOptions": { "group": "content" }
    },
    "line2": {
      "type": "string",
      "label": "Line 2",
      "gddOptions": { "group": "content" }
    },
    "textColor": {
      "type": "string",
      "label": "Text Color",
      "gddType": "color-rrggbb",
      "gddOptions": { "group": "appearance" }
    },
    "backgroundColor": {
      "type": "string",
      "label": "Background Color",
      "gddType": "color-rrggbb",
      "gddOptions": { "group": "appearance" }
    }
  }
}
```

## Por qué importa la i18n

7CG puede mostrar texto traducido en el editor en lugar de obligar a cada usuario a leer el idioma por defecto.

Mejora:

- títulos en el selector de plantillas
- etiquetas de los campos
- texto de ayuda

Es especialmente útil en entornos compartidos donde los operadores usan distintos idiomas de UI.

## Qué se puede traducir

7CG admite valores traducidos para:

- `title` de la plantilla
- `label` del campo
- `description` del campo

## i18n a nivel de campo

Usa `gddOptions.i18n` dentro de la definición del campo:

```json
"speakerName": {
  "type": "string",
  "label": "Speaker Name",
  "description": "Name shown on screen",
  "gddOptions": {
    "i18n": {
      "label": {
        "en": "Speaker Name",
        "pt": "Nome do Orador",
        "es": "Nombre del Ponente"
      },
      "description": {
        "en": "Name shown on screen",
        "pt": "Nome mostrado no ecrã",
        "es": "Nombre mostrado en pantalla"
      }
    }
  }
}
```

## i18n a nivel de plantilla

También puedes traducir el título:

```json
{
  "title": "Speaker Graphic",
  "gddOptions": {
    "i18n": {
      "title": {
        "en": "Speaker Graphic",
        "pt": "Gráfico do Orador",
        "es": "Gráfico del Ponente"
      }
    }
  }
}
```

Esto afecta a cómo aparece la plantilla en los selectores y desplegables de 7CG.

## Comportamiento de respaldo

7CG resuelve el texto traducido en este orden:

1. idioma actual de la UI
2. inglés
3. valor por defecto del campo en el esquema

Esto significa:

- no necesitas traducir todos los idiomas de inmediato
- el inglés es un respaldo compartido útil
- la plantilla sigue funcionando aunque las traducciones sean incompletas

## `label` vs `description`

Mantén los roles separados:

- `label` es el nombre visible del campo
- `description` es texto de ayuda

Buen patrón:

```json
"speed": {
  "type": "number",
  "label": "Scroll Speed",
  "description": "Higher values make the credits move faster"
}
```

Da al usuario un título corto y contexto útil.

## Buenas prácticas

- Agrupa solo cuando realmente mejore la navegación
- Mantén las etiquetas de grupo cortas y obvias
- Pon los campos más editados en la primera pestaña
- Usa `label` para nombres concisos y `description` para orientación
- Añade al menos valores de respaldo en inglés aunque tu idioma principal sea otro
- Mantén la redacción traducida consistente entre plantillas relacionadas

## Errores comunes

### Los IDs de grupo no coinciden

Si un campo referencia un ID de grupo inexistente en la raíz, ese campo no se comportará como esperas.

### Sobreagrupar plantillas pequeñas

Si una plantilla tiene pocos campos, las pestañas pueden hacerla parecer más compleja en lugar de más simple.

### Poner instrucciones largas en `label`

Etiquetas largas dificultan escanear el editor. Usa `description` para explicaciones extra.

### Falta de respaldo en inglés

Aunque tu audiencia principal no hable inglés, sigue siendo un respaldo útil en entornos mixtos.

## Checklist práctica de pruebas

Al probar agrupación e i18n en 7CG, confirma que:

- aparecen las pestañas esperadas
- los campos están en las pestañas correctas
- los campos sin grupo aparecen en **Otros** cuando hay agrupación activa
- los títulos de plantilla se muestran en el idioma esperado
- las etiquetas de campo se muestran en el idioma esperado
- el texto de ayuda hace respaldo correctamente cuando falta una traducción

## Páginas relacionadas

- [Desarrollo de plantillas](./)
- [Inicio rápido: campos de plantilla](./quick-start)
- [Referencia de campos](./field-reference)
- [Arrays y objetos](./arrays-and-objects)
- [Pruebas y depuración de plantillas](./testing-and-debugging)

## Pasos siguientes

- [Pruebas y depuración de plantillas](./testing-and-debugging) para verificar pestañas agrupadas y etiquetas traducidas en la práctica
- [Familias de plantillas](./template-families) para colocar las plantillas terminadas en el flujo correcto de 7CG
