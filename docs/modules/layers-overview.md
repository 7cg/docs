---
sidebar_position: 9
---

# Layers Overview Module

The **Layers Overview** module is 7CG's read-only view of current CasparCG layer occupancy.

It is designed for operators who need to understand what is already playing, where it is playing, and whether a planned action might collide with an existing layer assignment.

It provides:

- A live list of occupied layers grouped by channel
- Per-layer type badges such as media, template, color, or audio
- Layer and CG-layer labeling
- Visible names for the current clip, template, or fill
- A paused indicator when playback is currently paused

## Overview

The Layers Overview module allows you to:

- See which channels currently have occupied layers
- Inspect the layer number and, when relevant, the CG layer slot
- Distinguish between media, templates, color fills, audio, and unknown occupancy
- Spot paused media producers quickly
- Troubleshoot conflicts before launching new media or graphics

This module is intentionally diagnostic. It does not launch, stop, or edit content directly.

## Interface Components

### Channel Groups

Occupied layers are grouped by channel and sorted in ascending order.

This keeps multi-channel workflows readable and helps operators scan the active output state quickly.

### Layer Labels

Each row shows the current layer in the format:

- `L10`
- `L20/1`

When a CG layer is known, 7CG appends it after the main layer so template occupancy can be understood more precisely.

### Kind Badges

Each occupied layer is tagged with a type badge based on the current occupant:

- `media`
- `template`
- `color`
- `audio`
- `unknown`

This helps distinguish normal clip playback from template graphics, solid fills, or other occupancy sources at a glance.

### Occupant Name

The main text area shows the current occupant name when available:

- Media clip path
- Template name
- Color fill value

If no name is available, the module shows a placeholder instead of pretending the layer is identified.

### Paused Indicator

When a tracked media producer is paused, the row displays a **paused** badge.

This is useful when a layer is still occupied but not actively rolling.

## Data Sources and Behavior

The Layers Overview module is fed from the shared layer occupancy store in the renderer.

That store is updated from two main sources:

- **Layer occupancy broadcasts** emitted after successful Caspar commands
- **Player / OSC updates** for producer state such as paused playback and stopped media

### Command-Driven Occupancy

After successful Caspar commands, 7CG broadcasts occupancy updates to renderer windows so the app can track what is playing without polling CasparCG continuously.

This is especially useful for:

- CG templates
- Color fills
- Media clips cleared with `EMPTY`

### Player / OSC Updates

Media producer updates also feed the store so 7CG can:

- Mark media layers as paused
- Clear layers when playback has stopped or the producer disappears

Together, these sources make Layers Overview more useful than a media-only status panel.

## Empty State

When no occupied layers are currently tracked, the module shows:

- `No active layers`

This means the store currently has no active occupancy entries to display.

## What the Module Does Not Do

Layers Overview is not a control surface. It does not provide:

- Play or stop buttons
- Layer reassignment
- Template editing
- Rundown creation
- Direct conflict resolution

Its job is to make the current state visible so operators can make better decisions elsewhere in the interface.

## Typical Workflow

### Live Troubleshooting

1. Open the Layers Overview module
2. Check which channel and layer are already occupied
3. Confirm whether the occupant is media, template, color, audio, or unknown
4. Use that information before launching another item on the same target

### Pause / Stuck-State Checks

1. Look for a layer that still appears occupied
2. Check whether the row is marked **paused**
3. Use the relevant playback or graphics module to clear or replace the content if needed

## Best Practices

- Keep Layers Overview visible during rehearsals and complex live productions
- Use it to confirm dedicated layer reservations for bugs, lower thirds, Bible, lyrics, and credits
- Treat it as a diagnostics aid, not as the source of truth for every possible CasparCG state edge case
- Pair it with Media, Channel Graphics, and Rundown when investigating why something is still on air

## Related Pages

- [Modules Overview](./index.md)
- [Media Module](./media.md)
- [Channel Graphics Module](./channel-graphics.md)
- [Layouts](../configuration/layouts.md)
