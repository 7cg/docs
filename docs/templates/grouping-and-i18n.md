---
sidebar_position: 5
---

# Grouping and i18n

This page explains two important features that make template editors easier for users:

- **Grouping** fields into tabs
- **Internationalizing** template titles, labels, and descriptions

These features are especially useful once a template has more than a handful of fields.

## Why Group Fields

Without grouping, every field appears in one long list.

That is fine for a very small template, but it becomes harder to use when a template includes:

- content fields
- appearance settings
- animation settings
- file pickers
- repeated lists

Grouping lets you split those into clear sections so users can find what they need quickly.

## How Grouping Works

Grouping uses two parts:

1. a root-level list of groups
2. a per-field group assignment

### Root Groups

Define groups at the root with `gddOptions.groups`:

```json
"gddOptions": {
  "groups": [
    { "id": "content", "label": { "en": "Content" } },
    { "id": "appearance", "label": { "en": "Appearance" } },
    { "id": "timing", "label": { "en": "Timing" } }
  ]
}
```

Each group needs:

- an `id`
- a `label`

### Field Assignment

Assign a field to a group with `gddOptions.group`:

```json
"headline": {
  "type": "string",
  "label": "Headline",
  "gddOptions": {
    "group": "content"
  }
}
```

The field's group value must match one of the group IDs from the root.

## What Users See in 7CG

When grouping is configured correctly:

- grouped fields appear in tabs
- each tab shows only the fields assigned to that group
- ungrouped fields appear in a fallback **Other** tab

Tabs only appear when 7CG finds real grouped fields. If groups are defined but no fields use them, the editor falls back to a normal flat list.

## Good Grouping Patterns

### Pattern: Content + Appearance

This is the best general-purpose pattern for many graphics.

- `content` for text, names, titles, and body copy
- `appearance` for colors, logos, backgrounds, and style choices

### Pattern: Content + Style + Timing

Useful for more advanced animated templates.

- `content` for the message itself
- `style` for colors and layout
- `timing` for durations, delays, and animation speeds

### Pattern: Main + Advanced

Useful when most operators only need a few fields.

- `main` for the common controls
- `advanced` for less frequently changed options

## Grouping Example

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

## Why i18n Matters

7CG can show translated text in the editor instead of forcing every user to read the default language.

This improves:

- template picker titles
- field labels
- field help text

It is especially useful in shared environments where operators use different UI languages.

## What Can Be Translated

7CG supports translated values for:

- template `title`
- field `label`
- field `description`

## Field-Level i18n

Use `gddOptions.i18n` inside the field definition:

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

## Template-Level i18n

You can also translate the template title:

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

This affects how the template appears in 7CG pickers and module dropdowns.

## Fallback Behavior

7CG resolves translated text in this order:

1. current UI language
2. English
3. default field value in the schema

That means:

- you do not need to translate every language immediately
- English is a useful shared fallback
- the template still works even when translations are incomplete

## `label` vs `description`

Keep these roles separate:

- `label` is the visible field name
- `description` is help text

Good pattern:

```json
"speed": {
  "type": "number",
  "label": "Scroll Speed",
  "description": "Higher values make the credits move faster"
}
```

This gives users a short field title plus helpful context.

## Best Practices

- Group only when it genuinely improves navigation
- Keep group labels short and obvious
- Put the most commonly edited fields in the first tab
- Use `label` for concise field names and `description` for guidance
- Add at least English fallback values even if your main language is different
- Keep translated wording consistent across related templates

## Common Mistakes

### Group IDs Do Not Match

If a field references a group ID that does not exist in the root group list, that field will not behave as expected.

### Over-Grouping Small Templates

If a template has only a few fields, tabs can make it feel more complex instead of simpler.

### Putting Long Instructions in `label`

Long labels make the editor harder to scan. Use `description` for extra explanation.

### Missing English Fallback

Even if your main audience is not English-speaking, English is still a helpful fallback in mixed environments.

## Practical Testing Checklist

When testing grouping and i18n in 7CG, confirm that:

- the expected tabs appear
- the fields are in the correct tabs
- ungrouped fields appear under **Other** when grouping is active
- template titles display in the expected language
- field labels display in the expected language
- help text falls back cleanly when a translation is missing

## Related Pages

- [Template Development](./index.md)
- [Quick Start: Template Fields](./quick-start.md)
- [Field Reference](./field-reference.md)
- [Arrays and Objects](./arrays-and-objects.md)
- [Testing and Debugging Templates](./testing-and-debugging.md)

## Next Steps

- [Testing and Debugging Templates](./testing-and-debugging.md) for verifying grouped tabs and translated labels in practice
- [Template Families](./template-families.md) for placing finished templates in the right 7CG workflow
