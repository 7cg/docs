---
sidebar_position: 6
---

# Credits Module

The **Credits** module is 7CG's workflow for template-driven credits graphics such as end rolls, production acknowledgments, team listings, and volunteer recognition.

It combines:

- A credits template picker
- A dynamic field editor based on the selected template
- Advanced routing and timing options
- Optional timed auto-stop behavior
- Direct launch and stop controls
- Rundown integration for prepared credits graphics

## Overview

The Credits module allows you to:

- Select a credits template from the CasparCG template list
- Fill in the text fields required by the template
- Route the graphic to a specific channel, layer, and CG layer
- Add delay and duration timing
- Automatically stop the graphic after a timed duration
- Launch the credits graphic directly from the module
- Add the configured credits graphic to the rundown

## Interface Components

### Template Selector

The module starts with a **Template** picker filtered to the `CREDITS` template family.

When available, 7CG shows friendly template labels and descriptions instead of only the raw template ID. Choosing a template also loads the fields used by the editor below it.

### Dynamic Field Editor

Below the template picker, 7CG renders the editable fields exposed by the selected credits template.

The exact fields depend on the selected design. Depending on the template, you may see:

- Simple text fields
- Multi-line fields
- Multiple grouped sections

This makes the module flexible enough for short acknowledgments, full credit lists, and more detailed staff or volunteer layouts.

### Advanced Settings

The **Advanced** dialog lets you control how credits are sent to CasparCG:

- Channel
- Layer
- CG layer
- Delay
- Duration

These values apply both to direct launches from the module and to any credits item you add to the rundown.

### Auto Stop

The **Auto stop** switch is enabled only when a positive duration is set.

When duration is configured and **Auto stop** is on, 7CG clears the credits automatically after the configured interval. If no duration is set, the operator is expected to stop the credits manually.

## Playback Controls

The Credits module is built around three main actions:

- **Launch** puts the current credits graphic on air
- **Stop** removes the current credits graphic from air
- **Add to rundown** stores the configured credits graphic for later execution

The current UI also shows **Preview** and **Refresh** buttons. For most operators, the main day-to-day workflow is still Template, Fields, Launch, Stop, and Add to Rundown.

## Rundown Integration

The **Add to rundown** action creates a credits item you can trigger later from the Rundown module.

This is useful when:

- Credits need to appear at a specific point in the show
- You want repeatable playback instead of launching ad hoc
- Multiple operators need to work from the same prepared show order

## Companion Integration

Credits can also participate in Companion-aware workflows, which helps external control surfaces reflect whether the credits graphic is currently active.

## Typical Workflow

### Direct Credits Operation

1. Select the credits template
2. Fill in the required names, roles, or other template fields
3. Open **Advanced** if you need non-default routing or timing
4. Set a duration and enable **Auto stop** if the credits should clear automatically
5. Click **Launch**
6. Click **Stop** when finished if the item is not auto-stopping

### Prepared Show Workflow

1. Select the credits template
2. Enter the production team, volunteers, or acknowledgments
3. Configure routing and timing
4. Click **Add to rundown**
5. Execute the credits item later from the Rundown module

## Best Practices

- Standardize credits templates so operators see predictable field layouts
- Use duration-based auto-stop only when the credits graphic has a known runtime
- Add planned credits items to the rundown ahead of time instead of building them under show pressure
- Keep template names descriptive so credits entries remain easy to identify later

## Related Pages

- [Modules Overview](./index.md)
- [Rundown Module](./rundown.md)
- [Layouts](../configuration/layouts.md)
