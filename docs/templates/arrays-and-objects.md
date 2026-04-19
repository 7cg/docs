---
sidebar_position: 4
---

# Arrays and Objects

This page explains how to build structured template data in 7CG using:

- `type: "object"`
- `type: "array"`

These field types are especially useful when a template needs more than a few flat text fields.

Common examples:

- team or credits lists
- repeated bullet points
- schedules
- grouped name/title blocks
- multi-person graphics

## When to Use an Object

Use an object when several related values belong together.

Example use cases:

- a name block with `line1` and `line2`
- a caption block with `title`, `subtitle`, and `tag`
- a style block with several related settings

### Basic Object Example

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

### What Users See in 7CG

An object renders as a nested editor containing the child fields listed in `properties`.

This gives users one visible section for the whole block instead of scattering related fields across the template editor.

## When to Use an Array

Use an array when the user needs a repeatable list of items.

Example use cases:

- bullet points
- multiple speakers
- credits names
- agenda items
- team rosters

### Array of Strings

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

### What Users See in 7CG

For primitive array items such as strings or numbers, users edit the list inline.

They can:

- add items
- remove items
- edit each item directly in the list

If `maxItems` is set, the add button shows the current count.

## Arrays of Objects

Arrays of objects are one of the most useful structured patterns in 7CG.

Use them when each list item needs several fields.

Example use cases:

- credits entries with `name` and `role`
- speaker lists with `name`, `title`, and `organization`
- schedule entries with `time`, `title`, and `location`

### Credits Example

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

### What Users See in 7CG

For arrays of objects, each item appears as a list entry with:

- a preview of the current content
- an edit button
- a remove button

Editing opens the item in its own dialog, which keeps complex list items manageable.

## Nested Objects Inside Arrays

You can combine objects and arrays freely.

For example, each array item can contain a nested object:

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

This is powerful, but it also makes the editor more complex. Use nesting when it helps users understand the structure, not just because the schema allows it.

## Useful Array Properties

### `minItems`

```json
"minItems": 1
```

Shows that at least one item is expected.

### `maxItems`

```json
"maxItems": 10
```

Limits how many items users can add.

### `uniqueItems`

```json
"uniqueItems": true
```

Marks the list as intended to contain unique values.

This is useful for author intent, even though users should still test the final behavior in the editor.

## Defaults for Structured Fields

Defaults are especially helpful for arrays and objects.

### Object Default

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

### Array Default

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

Defaults make structured editors easier to test because users can immediately see how the template behaves with real-looking data.

## Good Patterns

### Pattern: Two-Line Name Block

Use an object.

Why:

- the two lines belong together
- users understand the block as one unit

### Pattern: Bullet List

Use an array of strings.

Why:

- users can add, remove, and reorder conceptually repeated items

### Pattern: Credits Roll

Use an array of objects.

Why:

- each row has multiple values
- users need a repeatable list of similar entries

### Pattern: Multi-Speaker Graphic

Use an array of objects, with each object containing the speaker fields.

Why:

- this scales better than creating fixed fields like `speaker1`, `speaker2`, `speaker3`

## Patterns to Avoid

### Avoid Flattening Repeated Data Unnecessarily

Less helpful:

```json
"person1Name": { "type": "string" },
"person1Role": { "type": "string" },
"person2Name": { "type": "string" },
"person2Role": { "type": "string" }
```

Better:

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

### Avoid Deep Nesting Without a Real Need

If the structure becomes too deep, the editor becomes harder to use.

Prefer the simplest structure that still matches the user's mental model.

## Practical Testing Checklist

When testing arrays and objects in 7CG, confirm that:

- object sections show all expected child fields
- primitive arrays allow add/remove correctly
- arrays of objects open their edit dialog correctly
- previews for object items are meaningful
- `minItems` and `maxItems` behave as expected
- defaults produce useful starting data

## Related Pages

- [Template Development](./index.md)
- [Quick Start: Template Fields](./quick-start.md)
- [Field Reference](./field-reference.md)
- [Testing and Debugging Templates](./testing-and-debugging.md)

## Next Steps

- [Grouping and i18n](./grouping-and-i18n.md) for splitting larger editors into clearer tabs
- [Testing and Debugging Templates](./testing-and-debugging.md) for checking array and object behavior in 7CG
