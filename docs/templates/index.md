---
sidebar_position: 1
---

# Template Development

Learn how to create and customize CasparCG graphics templates for use with 7CG.

## What is a Template?

A 7CG template is a CasparCG HTML graphics template that displays dynamic content on your broadcast output. Templates are built with React and include an embedded GDD (Graphics Data Definition) schema that defines:

- **Template title** - Display name shown in 7CG
- **Properties** - Field definitions that create input controls in the 7CG interface
- **Field types** - Specialized inputs like color pickers, text areas, and dropdowns
- **Internationalization** - Multi-language labels and descriptions

## Getting Started

The most important part of template development for 7CG integration is defining your **GDD schema** correctly. The schema is embedded directly in your template's HTML file and determines what input fields appear in 7CG when users work with your template.

See the [Quick Start Guide](./quick-start.md) to learn how to define fields that display properly in the 7CG client.

## Recommended Next Pages

After the quick start, the next most useful pages are:

- [Field Reference](./field-reference.md) for a quick lookup of supported types, `gddType` values, and common field options
- [Arrays and Objects](./arrays-and-objects.md) for building lists, nested blocks, credits entries, and other structured template data
- [Grouping and i18n](./grouping-and-i18n.md) for organizing fields into tabs and localizing template titles, labels, and descriptions
- [Testing and Debugging Templates](./testing-and-debugging.md) for checking why a template or field is not showing up as expected
- [Template Families](./template-families.md) for understanding where templates appear in 7CG based on their family prefix

## Template Structure

A typical template contains:

```
my-template/
├── index.html       # HTML with embedded GDD schema
├── index.jsx        # React component for the graphic
├── styles.css       # Template styling (optional)
└── image.png        # Preview screenshot (optional)
```

The GDD schema is embedded in `index.html` using a special script tag:

```html
<script name="graphics-data-definition" type="application/json+gdd">
  {
    "$schema": "https://superflytv.github.io/GraphicsDataDefinition/gdd-meta-schema/v1/schema.json",
    "title": "My Template",
    "type": "object",
    "properties": {
      /* field definitions */
    }
  }
</script>
```

This embedded schema is what 7CG reads to understand your template's fields and display them in the user interface.
