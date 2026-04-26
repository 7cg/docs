---
sidebar_position: 2
---

# Lower Thirds Module

The **Lower Thirds** module is 7CG's template-driven workflow for names, titles, and other CG overlays that need editable text fields and fast live triggering.

It combines:

- A lower-thirds template picker
- A dynamic field editor generated from template metadata
- Advanced routing and timing options
- Optional timed auto-stop behavior
- Direct launch and stop controls
- Rundown integration for prepared graphics

## Overview

The Lower Thirds module allows you to:

- Select a lower-thirds template from the CasparCG template list
- Fill in the template's exposed fields
- Work with grouped template fields when the template defines them
- Route the graphic to a specific channel, layer, and CG layer
- Add delay and duration timing
- Automatically stop the graphic after a timed duration
- Launch the graphic directly from the module
- Add the configured graphic to the rundown

## Interface Components

### Template Selector

The module begins with a **Template** picker filtered to the `LOWERTHIRDS` template family.

When template metadata is available, 7CG shows translated labels and descriptions instead of only the raw template ID. Selecting a template also loads the field schema that drives the editor below it.

### Dynamic Field Editor

Below the template picker, 7CG renders the editable fields exposed by the selected template.

This editor is driven by the template's GDD metadata, so the available controls depend on the template design. In practice this means operators can work with:

- Simple text fields
- Multi-line text fields
- Structured or nested template data
- Grouped fields shown as tabs when the template defines groups

Multi-line field values are transformed correctly for CasparCG playback, so line breaks entered in the editor are preserved in the outgoing template data.

### Advanced Settings

The **Advanced** dialog lets you control how the lower third is sent to CasparCG:

- Channel
- Layer
- CG layer
- Delay
- Duration

These settings apply both to direct launches from the module and to the rundown entry created from the current configuration.

### Auto Stop

The **Auto stop** switch is tied to the configured duration.

When a positive duration is set and **Auto stop** is enabled, 7CG adds a timed `cg/stop` action after the graphic has been shown for the configured interval. If no duration is set, the switch is disabled and the operator is expected to stop the graphic manually.

## Playback Controls

The Lower Thirds module uses a CasparCG CG command workflow:

- **Launch** sends a `cg/play` command using the selected template and current field data
- **Stop** sends a `cg/stop` command to the same channel, layer, and CG layer
- **Add to rundown** stores the configured lower third as a runnable rundown item

Direct launches use the current field values exactly as entered in the editor, with the configured routing and timing applied.

## Rundown Integration

The **Add to rundown** action creates a dedicated `lowerthird` rundown entry.

That entry stores:

- The selected lower-thirds template command
- The edited template field data
- Channel, layer, and CG layer routing
- Delay and duration values
- Auto-stop behavior when duration is enabled

When shown in the rundown, lower-third blocks **name themselves automatically** based on their first field (with a second line where it makes sense), so operators recognize speaker graphics at a glance without having to rename the item manually. Block colors have also been tuned for better contrast against the rundown background.

Lowerthird rundown blocks support the normal operational workflow:

- Edit
- Execute
- Stop
- Duplicate
- Group
- Export video

## Companion Integration

When a lowerthird rundown block is executed or stopped from the Rundown module, 7CG publishes lower-third state to Companion.

That state includes:

- Whether a lower third is currently active
- The current lower-third label, when available

This makes it easier to build Companion buttons and feedback that reflect whether a title is live.

## Typical Workflow

### Direct Lower Third Operation

1. Select the template
2. Fill in the required name, title, or other fields
3. Open **Advanced** if you need non-default routing or timing
4. Set a duration and enable **Auto stop** if the graphic should clear itself
5. Click **Launch**
6. Click **Stop** when finished if the graphic is not auto-stopping

### Prepared Show Workflow

1. Select the template
2. Enter the speaker or segment data
3. Configure routing and timing
4. Click **Add to rundown**
5. Repeat for the remaining guests, speakers, or segments
6. Execute the graphics later from the Rundown module

## Best Practices

- Standardize your lower-thirds templates so operators see consistent field layouts
- Use field groups in template design when a graphic has many editable properties
- Reserve duration-based auto-stop for graphics that should clear predictably without manual timing
- Add recurring speaker graphics to the rundown before the show instead of rebuilding them live
- Keep template labels descriptive so rundown entries remain easy to identify

## Related Pages

- [Modules Overview](./index.md)
- [Rundown Module](./rundown.md)
- [Layouts](../configuration/layouts.md)
