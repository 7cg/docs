---
sidebar_position: 7
---

# Template Families

7CG does not treat every template the same way. In practice, templates are grouped into families, and those families determine where the template appears in the interface.

For template authors, this matters because a well-built template can still feel "missing" if it uses the wrong family name.

## What a Family Means

In 7CG, a template family is effectively the prefix of the template ID.

Examples:

- `LOWERTHIRDS/MyNameplate`
- `CREDITS/EndRoll`
- `BIBLE/VerseBox`
- `HYMNS/WorshipLyrics`

7CG uses these prefixes to decide which templates to show in specialized pickers.

## Families Used by 7CG Today

### `LOWERTHIRDS`

Used by:

- Lower Thirds module
- Lower-third editing flows in the rundown

Use this family for:

- name straps
- title graphics
- lower-third overlays
- speaker and guest identification

### `CREDITS`

Used by:

- Credits module
- Credits items in the rundown

Use this family for:

- end credits
- acknowledgments
- volunteer and staff listings
- production credits

### `BIBLE`

Used by:

- Bible module
- Bible-related template selection in Bible workflows

Use this family for:

- verse boxes
- scripture overlays
- Bible reading graphics

### `HYMNS`

Used by:

- Lyrics module
- lyrics-related template selection

Use this family for:

- worship lyrics
- hymn overlays
- grouped verse displays

### `QRCODE`

Used by:

- QR code workflows and QR code rundown items

Use this family for:

- QR display templates
- scan-to-open overlays
- donation or signup codes

## Why the Family Matters

If the prefix is wrong:

- the template may not appear in the expected module
- operators may not find it in the right picker
- the wrong workflow may be forced on the user

Example:

- a lower-third template named `MISC/MyNameplate` may exist, but it will not appear where operators expect their lower thirds

## Picking the Right Family

A simple rule works well:

- If the template has a dedicated module, use that module's family
- If the template is meant for a dedicated rundown block type, use that block's family
- If the template is just miscellaneous, avoid pretending it belongs to a specialized workflow

Use the specialized family only when the template is really intended for that workflow.

## What About "Other Templates"?

The **Other Templates** module is currently a lightweight catch-all panel.

That means:

- it is useful for extra utility graphics
- it is not the main home for the specialized template families above

If you are building a proper lower third, credits template, Bible template, or lyrics template, place it in the matching family instead of treating Other Templates as the primary destination.

## Naming Tips

A good template ID should be:

- family-first
- readable
- stable over time

Good examples:

- `LOWERTHIRDS/SpeakerSimple`
- `LOWERTHIRDS/TwoLineBox`
- `CREDITS/ScrollingRoll`
- `BIBLE/VerseLowerThird`
- `HYMNS/CenteredLyrics`

Less helpful examples:

- `LOWERTHIRDS/Template1`
- `MISC/Test`
- `NEW/Untitled`

## Recommended Author Workflow

When creating a new template:

1. Decide which 7CG workflow should own it.
2. Choose the matching family prefix.
3. Add a clear `title` and `description` in the GDD.
4. Refresh templates in 7CG.
5. Confirm the template appears in the intended picker.

## Related Pages

- [Template Development](./index.md)
- [Quick Start: Template Fields](./quick-start.md)
- [Testing and Debugging Templates](./testing-and-debugging.md)

## Next Steps

- [Testing and Debugging Templates](./testing-and-debugging.md) for checking discovery and picker placement
- [Quick Start: Template Fields](./quick-start.md) to refine the fields inside the template itself
