---
sidebar_position: 6
---

# Testing and Debugging Templates

This guide helps you check whether a template is being discovered correctly by 7CG and why fields may not appear the way you expect.

It is written for template authors who already have an HTML template with an embedded GDD block.

## Start with the Basics

Before looking for deeper issues, confirm these first:

1. The template HTML contains a valid `graphics-data-definition` script block.
2. The root schema uses `"type": "object"`.
3. The JSON is valid and has no trailing commas.
4. Each field in `properties` has a usable `type`.
5. The template has been refreshed in 7CG after your changes.

If any of those are wrong, the rest of the editor behavior will be unreliable.

## Check Whether the Template Appears in 7CG

If the template does not show up in 7CG at all, check:

- The template is in a location scanned by your CasparCG/template setup
- 7CG has refreshed its template list
- The template belongs to the correct family for the module you are testing

Examples:

- `LOWERTHIRDS/...` for the Lower Thirds workflow
- `CREDITS/...` for the Credits workflow
- `BIBLE/...` for Bible templates
- `HYMNS/...` for Lyrics templates
- `QRCODE/...` for QR code workflows

If the prefix is wrong, the template may still exist on disk but never appear in the picker you are expecting.

## When Fields Do Not Appear

If the template shows up but no editor fields appear:

- Make sure `properties` exists at the root
- Make sure the root `type` is `"object"`
- Make sure field definitions are valid JSON objects
- Make sure fields are not accidentally set to `null`

Also check whether you created only nested structures without a valid top-level property definition. 7CG needs real properties at the root before it can build the editor.

## When Labels Look Wrong

If the editor shows raw field keys instead of friendly labels:

- Add a `label`
- Or at least add a `description`

7CG falls back in this order:

1. translated `label`
2. plain `label`
3. translated `description`
4. plain `description`
5. raw field key

So if you skip both `label` and `description`, users will see technical names such as `f0`, `headingText`, or `speaker_name`.

## When Tabs Do Not Appear

If you expected grouped tabs but only see a flat list of fields:

- Check that root `gddOptions.groups` exists
- Check that each grouped field has `gddOptions.group`
- Check that the field's group ID matches a real group ID from the root

Tabs only appear when 7CG finds both:

- defined groups
- fields that actually belong to those groups

Ungrouped fields are placed in an **Other** tab when grouped tabs are active.

## When Colors Do Not Behave Correctly

Check the format carefully:

- `color-rrggbb` expects `#RRGGBB`
- `color-rrggbbaa` expects `#RRGGBBAA`

Common mistakes:

- forgetting the leading `#`
- using 6 digits for an alpha field
- using 8 digits for a plain RGB field

If the color control looks odd, test with a very obvious value such as:

- `#FF0000`
- `#00FF00`
- `#0000FFFF`

## When Dropdowns Do Not Work

For select fields, you need both:

- `gddType: "select"`
- an `enum` array

Example:

```json
"alignment": {
  "type": "string",
  "label": "Alignment",
  "gddType": "select",
  "enum": ["left", "center", "right"]
}
```

If `enum` is missing, 7CG will not render the field as the expected dropdown.

If the dropdown values look too technical, add friendly labels in `gddOptions.labels`.

## When Arrays or Objects Feel Broken

Structured fields are more powerful, but they are also easier to misconfigure.

### For Objects

Check:

- `type: "object"`
- `properties` exists

If `properties` is missing, the object editor has nothing to render.

### For Arrays

Check:

- `type: "array"`
- `items` exists

If `items` is missing, 7CG has no schema for each entry in the list.

For arrays of objects, remember that each item opens in its own edit dialog. If the dialog is empty, the problem is usually inside the `items.properties` definition.

## When File Pickers Do Not Match Expectations

If you want a browse button:

- use `gddType: "file-path"` for generic files
- use `gddType: "file-path/image-path"` for images

If the picker allows too many file types, add:

```json
"gddOptions": {
  "extensions": ["png", "jpg", "jpeg", "webp"]
}
```

Without extension filters, the picker is more generic.

## When Translations Do Not Show

If `gddOptions.i18n` seems ignored:

- confirm that the translation keys are under the correct field
- confirm that the language code matches 7CG's current UI language
- remember that 7CG falls back to English, then to the default field value

Good places to use i18n:

- template `title`
- field `label`
- field `description`

## A Practical Test Routine

When building a new template, use this sequence:

1. Start with one simple string field and confirm the template appears.
2. Add one more field type at a time.
3. Test grouping only after the base fields work.
4. Test arrays and objects only after labels and basic fields are stable.
5. Test i18n after the non-translated version works.

This makes it much easier to see which change introduced a problem.

## Good Smoke Tests

Use these as a fast final checklist:

- The template appears in the correct picker
- The template title is readable
- Every field has a user-friendly label
- Multi-line fields preserve line breaks
- Colors accept the expected format
- Select fields show the expected options
- Array add/edit/remove works
- Object sections show all expected child fields
- Group tabs appear in the expected order

## Related Pages

- [Template Development](./index.md)
- [Quick Start: Template Fields](./quick-start.md)
- [Template Families](./template-families.md)

## Next Steps

- [Field Reference](./field-reference.md) when you need to double-check supported field options
- [Template Families](./template-families.md) to confirm your template appears in the right module
