---
sidebar_position: 2
---

# Quick Start: Template Fields

This guide shows you how to define template fields in your HTML so they render correctly in 7CG.

The focus here is practical:

- What to put in the GDD block
- Which field types 7CG actually renders
- How labels, tabs, defaults, and pickers behave in the editor

## The GDD Script Block

Every template needs an embedded GDD (Graphics Data Definition) schema in its HTML file:

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

### Required Root Properties

| Property | Description |
|----------|-------------|
| `$schema` | Use the GDD meta-schema URL shown above |
| `title` | Template name shown in 7CG |
| `type` | Use `"object"` for the template root |
| `properties` | Object containing the editable fields |

### Common Optional Root Properties

| Property | Description |
|----------|-------------|
| `description` | Template description shown in 7CG |
| `authorName` | Template author |
| `authorEmail` | Author contact email |
| `gddOptions` | Advanced options such as groups and i18n |

## Labels, Help Text, and Defaults

For operator-facing templates, the most important field properties are:

| Property | What users see |
|----------|----------------|
| `label` | Main field label in the editor |
| `description` | Help text in the info tooltip |
| `default` | Initial value or suggested placeholder, depending on the field type |
| `maxLength` | Input limit and hint for text fields |

Example:

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

Use:

- `label` for the visible field title
- `description` for help text

If `label` is missing, 7CG falls back to `description`, then to the raw field key.

## Basic Field Types

### String

```json
"title": {
  "type": "string",
  "label": "Title"
}
```

**Renders as:** Single-line text input

Useful options:

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

**Renders as:** Number input that accepts decimals

Useful options:

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

**Renders as:** Number input with step `1`

### Boolean

```json
"showLogo": {
  "type": "boolean",
  "label": "Show Logo",
  "default": true
}
```

**Renders as:** Toggle switch

## Specialized `gddType` Fields

Use `gddType` when you want a more specific editor control.

### Single-Line Text

```json
"headline": {
  "type": "string",
  "label": "Headline",
  "gddType": "single-line",
  "maxLength": 80
}
```

**Renders as:** Explicit single-line text input

### Multi-Line Text

```json
"body": {
  "type": "string",
  "label": "Body Text",
  "gddType": "multi-line",
  "default": "Line 1\nLine 2\nLine 3"
}
```

**Renders as:** Textarea

This is the right choice for:

- Lyrics
- Credits text
- Notes
- Paragraph-style content

### Color Picker (`#RRGGBB`)

```json
"backgroundColor": {
  "type": "string",
  "label": "Background Color",
  "gddType": "color-rrggbb",
  "default": "#000000"
}
```

**Renders as:** Visual color picker plus hex text input

Expected format:

- `#RRGGBB`

### Color with Alpha (`#RRGGBBAA`)

```json
"textColor": {
  "type": "string",
  "label": "Text Color",
  "gddType": "color-rrggbbaa",
  "default": "#FFFFFFFF"
}
```

**Renders as:** Hex text input for 8-digit color values

Expected format:

- `#RRGGBBAA`

This is important: include the leading `#`.

### Select / Dropdown

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

**Renders as:** Dropdown

Use:

- `enum` for the allowed values
- `gddOptions.labels` for friendly display labels

### Percentage

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

**Renders as:** Number input with a `%` suffix

### Duration in Milliseconds

```json
"fadeDuration": {
  "type": "integer",
  "label": "Fade Duration",
  "gddType": "duration-ms",
  "default": 500,
  "minimum": 0
}
```

**Renders as:** Number input with an `ms` suffix

### File Picker

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

**Renders as:** Text field with a **Browse** button

### Image File Picker

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

**Renders as:** Image-focused file picker with a **Browse** button

## Arrays and Objects

7CG can render structured template data, not just flat fields.

### Object Fields

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

**Renders as:** A nested editor with one field per property

Use objects when several related values belong together.

### Array Fields

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

**Renders as:** A list with add/remove controls

Useful options:

- `minItems`
- `maxItems`
- `uniqueItems`

### Arrays of Objects

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

**Renders as:** A list where each item opens in its own dialog for editing

This is useful for:

- Credits lists
- Speaker rosters
- Repeating lower-third entries

## Grouping Fields into Tabs

You can organize fields into tabs with `gddOptions.groups`.

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

How it behaves in 7CG:

- Fields assigned to known groups appear in tabs
- Ungrouped fields appear in a fallback **Other** tab
- Tabs only appear when the template actually has grouped fields

## Internationalization (i18n)

7CG supports translated values for:

- Template `title`
- Field `label`
- Field `description`

Use `gddOptions.i18n`.

### Field-Level i18n

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

### Template-Level i18n

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

7CG uses the current interface language first, then falls back to English, then to the default field value.

## Practical Notes

### Defaults

`default` is useful, but it does not behave identically for every field type.

In practice:

- booleans and many numeric fields show the default as the starting value
- string fields often use the default as a suggested placeholder
- arrays and objects use defaults when building nested editors

So defaults are best treated as an initial suggestion, not as a strict rule about how every control will look.

### Validation

7CG uses schema details such as:

- `minLength`
- `maxLength`
- `minimum`
- `maximum`
- `minItems`
- `maxItems`

to shape the editor and help the user, but you should not rely on the generic editor to enforce every possible schema rule exactly the same way a backend validator would.

## Complete Example

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

## Testing Your Fields

1. Save your HTML file with the embedded GDD block.
2. Refresh templates in 7CG or reconnect to the template source.
3. Open a module that uses the template.
4. Confirm that labels, tabs, pickers, arrays, and defaults render as expected.

If fields do not appear correctly:

- Check that the JSON is valid
- Confirm that the root `type` is `"object"`
- Confirm that each property has a usable `type`
- Double-check `gddType` spelling
- Make sure grouped fields reference a real group ID
- Verify color formats use `#RRGGBB` or `#RRGGBBAA`

## Quick Reference

| Want to... | Use |
|------------|-----|
| Single line text | `"type": "string"` or `"gddType": "single-line"` |
| Multi-line text | `"type": "string", "gddType": "multi-line"` |
| Whole number | `"type": "integer"` |
| Decimal number | `"type": "number"` |
| Toggle on/off | `"type": "boolean"` |
| RGB color picker | `"type": "string", "gddType": "color-rrggbb"` |
| RGBA color | `"type": "string", "gddType": "color-rrggbbaa"` |
| Dropdown | `"gddType": "select"` with `enum` |
| Percentage | `"gddType": "percentage"` |
| Duration in ms | `"gddType": "duration-ms"` |
| Generic file picker | `"gddType": "file-path"` |
| Image picker | `"gddType": "file-path/image-path"` |
| Group fields into tabs | Root `gddOptions.groups` plus per-field `gddOptions.group` |
| Translate labels and descriptions | `gddOptions.i18n` |
| Build repeating lists | `"type": "array"` |
| Build nested data | `"type": "object"` |

## Next Steps

- [Field Reference](./field-reference.md) for a quick lookup of supported field types and options
- [Arrays and Objects](./arrays-and-objects.md) for repeatable lists and nested data
- [Grouping and i18n](./grouping-and-i18n.md) for tabs, translations, and cleaner editors
