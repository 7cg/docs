---
sidebar_position: 7
---

# Ticker Module

The **Ticker** module is 7CG's ticker-preparation panel for scrolling text overlays such as announcements, alerts, and information bars.

In the current `7cg-ng` implementation, it provides:

- A ticker template selector
- A text-entry area for ticker content
- Play and Stop buttons
- A dedicated workspace module that can be shown, hidden, and placed in layouts

## Overview

The Ticker module is intended to support:

- Scrolling announcements
- Information bars
- Emergency or service messages
- Reusable ticker template selection

At the moment, the module is still a lightweight placeholder UI rather than a fully integrated ticker automation workflow. The visible controls are present, but they are not yet wired into the deeper execution and rundown flows used by more mature modules such as Media, Bible, Lyrics, or Lower Thirds.

## Interface Components

### Template Selector

The module includes a **Template** dropdown with the currently exposed options:

- `Main`
- `ADRA`

This reflects the current UI implementation. It is a simple selector, not a dynamic template browser sourced from the full CasparCG template list.

### Text Editor

The **Text** field is a multi-line textarea where the operator can prepare ticker content.

This is the main input area for the module today and represents the text that would be sent to the ticker workflow once deeper execution wiring is in place.

### Playback Buttons

The module includes two operator buttons:

- **Stop**
- **Play**

These buttons establish the expected live-control shape of the ticker workflow, but the current implementation does not yet connect them to a documented CasparCG command pipeline in the way other mature modules do.

## Current State of Implementation

The Ticker module should be documented as **present but incomplete**.

What exists today:

- A standalone module in the workspace
- Interface visibility and layout support
- Template selection UI
- Text entry UI
- Play and Stop controls in the module chrome
- Companion ticker event type definitions

What is not currently implemented in the visible module workflow:

- Documented ticker playback command execution
- Confirmed on-air state updates from the module
- Add-to-rundown behavior
- Advanced routing controls
- Template metadata-driven field editing

This distinction is important so operators understand that the module is available in the interface, but not yet feature-complete.

## Module Visibility and Layouts

Like the other Phase 3 workspace modules, Ticker can be:

- Enabled or disabled from the interface preferences
- Placed within saved workspace layouts
- Shown alongside Channel Graphics, Credits, and other operator modules

This makes it useful as a reserved part of the operator workspace even while the execution workflow is still evolving.

## Companion State

The shared Companion state types already define a ticker state shape with:

- `active`
- `text`

There is also a registered `state:ticker` broadcast channel in the app.

However, the current module implementation does not yet provide the fuller live ticker execution flow that would continuously drive that state from operator actions. For now, this is best treated as groundwork for future integration rather than a fully documented live-control contract.

## Typical Workflow

### Current Practical Use

1. Open the Ticker module in the workspace
2. Choose the available ticker variant
3. Prepare the ticker message text
4. Treat the module as a staging/control surface while ticker integration continues to develop

### Expected Future Direction

The current UI suggests a future workflow where operators would:

1. Choose the ticker style
2. Enter the message text
3. Start the ticker on air
4. Stop or replace it as needed during the show

That direction is visible in the module design, but it should not yet be documented as fully implemented behavior.

## Best Practices

- Keep the docs explicit that Ticker is currently a partial implementation
- Avoid describing it as a complete rundown-capable module until command execution is wired
- Use layouts to keep the module available for teams preparing future ticker workflows
- Treat the visible template choices as current UI options, not as a full template-management system

## Related Pages

- [Modules Overview](./index.md)
- [Layouts](../configuration/layouts.md)
- [Interface](../configuration/interface.md)
