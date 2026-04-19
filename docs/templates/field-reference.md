---
sidebar_position: 3
---

# Field Reference

This page is a quick lookup reference for the field types and options that 7CG currently renders in its template editor.

Use it when you already understand the basics and just want to check:

- which `type` or `gddType` to use
- what the editor will show
- which extra properties are useful for that field

For a tutorial-style introduction, see [Quick Start: Template Fields](./quick-start.md).

## Root Schema Reference

### Required Root Properties

| Property | Type | Notes |
|----------|------|-------|
| `$schema` | `string` | Use the GDD meta-schema URL |
| `title` | `string` | Template name shown in 7CG |
| `type` | `string` | Use `"object"` at the root |
| `properties` | `object` | Top-level editable fields |

### Common Optional Root Properties

| Property | Type | Notes |
|----------|------|-------|
| `description` | `string` | Template description shown in pickers |
| `authorName` | `string` | Template author |
| `authorEmail` | `string` | Template author contact |
| `gddOptions.groups` | `array` | Defines tab groups for fields |
| `gddOptions.i18n.title` | `object` | Localized template title |

## Common Field Properties

| Property | Type | What it does |
|----------|------|---------------|
| `type` | `string` or `array` | Base data type |
| `label` | `string` | Main visible field label |
| `description` | `string` | Tooltip/help text |
| `default` | any | Starting value or placeholder depending on the field |
| `gddType` | `string` | Specialized editor control |
| `minLength` | `number` | Minimum length for string fields |
| `maxLength` | `number` | Maximum length for string fields |
| `minimum` | `number` | Minimum numeric value |
| `maximum` | `number` | Maximum numeric value |
| `multipleOf` | `number` | Step size for number/integer fields |
| `enum` | `array` | Allowed values for select/dropdown fields |
| `minItems` | `number` | Minimum number of array items |
| `maxItems` | `number` | Maximum number of array items |
| `uniqueItems` | `boolean` | Marks array items as unique |
| `gddOptions.group` | `string` | Places the field in a named tab group |
| `gddOptions.labels` | `object` | Friendly labels for `enum` options |
| `gddOptions.i18n` | `object` | Localized `label` and `description` |
| `gddOptions.extensions` | `array` | File extensions allowed in file pickers |

## Supported Base Types

### `string`

**Renders as:** single-line text input by default

Useful with:

- `label`
- `description`
- `default`
- `minLength`
- `maxLength`
- `gddType`

### `number`

**Renders as:** number input with decimal support

Useful with:

- `default`
- `minimum`
- `maximum`
- `multipleOf`
- `gddType: "percentage"`

### `integer`

**Renders as:** number input with whole-number stepping

Useful with:

- `default`
- `minimum`
- `maximum`
- `multipleOf`
- `gddType: "duration-ms"`

### `boolean`

**Renders as:** toggle switch

Useful with:

- `default`

### `object`

**Renders as:** nested field editor

Required companion property:

- `properties`

### `array`

**Renders as:** repeatable list editor

Required companion property:

- `items`

Useful with:

- `minItems`
- `maxItems`
- `uniqueItems`

## Supported `gddType` Values

### `single-line`

**Use with:** `type: "string"`

**Renders as:** explicit single-line text input

### `multi-line`

**Use with:** `type: "string"`

**Renders as:** textarea

Best for:

- lyrics
- credits text
- notes
- paragraphs

### `color-rrggbb`

**Use with:** `type: "string"`

**Renders as:** color picker plus hex input

Expected format:

- `#RRGGBB`

### `color-rrggbbaa`

**Use with:** `type: "string"`

**Renders as:** hex input for color plus alpha

Expected format:

- `#RRGGBBAA`

### `select`

**Use with:** `type: "string"`, `type: "number"`, or `type: "integer"`

**Renders as:** dropdown

Required companion property:

- `enum`

Optional:

- `gddOptions.labels`

### `percentage`

**Use with:** numeric fields

**Renders as:** number input with `%` suffix

### `duration-ms`

**Use with:** numeric fields

**Renders as:** number input with `ms` suffix

### `file-path`

**Use with:** `type: "string"`

**Renders as:** text field plus **Browse** button

Optional:

- `gddOptions.extensions`

### `file-path/image-path`

**Use with:** `type: "string"`

**Renders as:** image-focused file picker plus **Browse** button

Optional:

- `gddOptions.extensions`

## Grouping Reference

To create tabs in the editor:

- define groups at the root with `gddOptions.groups`
- assign fields to groups with `gddOptions.group`

Root example:

```json
"gddOptions": {
  "groups": [
    { "id": "content", "label": { "en": "Content" } },
    { "id": "appearance", "label": { "en": "Appearance" } }
  ]
}
```

Field example:

```json
"headline": {
  "type": "string",
  "label": "Headline",
  "gddOptions": {
    "group": "content"
  }
}
```

Behavior:

- grouped fields appear in tabs
- ungrouped fields appear in an **Other** tab when grouping is active
- tabs only appear when grouped fields actually exist

## i18n Reference

7CG supports localized values for:

- template `title`
- field `label`
- field `description`

Example:

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

Fallback order:

1. current UI language
2. English
3. default field value

## Arrays and Objects Reference

### Object Example

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

### Array of Strings Example

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

### Array of Objects Example

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

Behavior:

- primitive array items can be edited inline
- complex array items open in their own dialog
- objects render nested child fields

## Practical Notes

- Use `label` whenever possible; it gives users a cleaner editor.
- Use `description` for help text, not as the only visible label if you can avoid it.
- Include `#` in color defaults.
- Use dedicated families such as `LOWERTHIRDS`, `CREDITS`, `BIBLE`, and `HYMNS` so users find templates in the right module.
- Treat this page as the lookup companion to the quick start, not a replacement for testing in 7CG.

## Related Pages

- [Template Development](./index.md)
- [Quick Start: Template Fields](./quick-start.md)
- [Testing and Debugging Templates](./testing-and-debugging.md)
- [Template Families](./template-families.md)

## Next Steps

- [Arrays and Objects](./arrays-and-objects.md) for list-based and nested field structures
- [Grouping and i18n](./grouping-and-i18n.md) for organizing fields into tabs and localizing labels
