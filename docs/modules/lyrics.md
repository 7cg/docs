---
sidebar_position: 3
---

# Lyrics Module

The **Lyrics** module is 7CG's song and hymn display workflow for worship services, concerts, and other productions that need on-screen lyrics.

It combines:

- A songbook selector
- Searchable hymn selection
- Template-driven on-air output
- Verse or multi-verse grouping
- Navigation controls for the current lyric group
- Direct integration with the rundown and Companion state

## Overview

The Lyrics module allows you to:

- Select a songbook
- Search hymns by number or title
- Load a lyrics template
- Display one verse at a time or group multiple verses together
- Move backward and forward through the current song
- Stop the current lyric output
- Add the configured hymn to the rundown

## Interface Components

### Template Selector

The module can display a **Template** dropdown when template selection is enabled in Lyrics settings.

Template entries are pulled from the CasparCG template list and filtered to the lyrics template family. When available, 7CG shows the translated template title and description instead of only the raw template ID.

If template selection is hidden in settings, the module uses the configured default template automatically.

### Songbook Selector

The **Songbook** dropdown selects the hymnal or song collection that the module should browse.

7CG loads songbook metadata first, then loads the actual songs for the chosen songbook on demand. If a default songbook is configured, 7CG will try to select it automatically.

### Hymn Search

The **Hymn** combobox supports freeform filtering by:

- Hymn number
- Song title

This makes it fast to jump to a song even in a large songbook.

While song data is loading, the module shows a loading state instead of an empty list.

### Lyrics Preview

When a song is selected, the module shows:

- The **current** lyric group
- The **next** lyric group, when one exists

This is useful during live operation because the operator can see both what is currently on air and what will be shown next.

## Playback and Navigation

The Lyrics module uses a CG template workflow:

- **Launch** performs the initial template load and puts the first lyric group on air
- **Back** updates the template to the previous lyric group
- **Start** resets to the first lyric group
- **Forward** updates the template to the next lyric group
- **Stop** clears the lyrics template from air

After launch, verse navigation updates the existing CG template instead of reloading it from scratch.

## Grouped Verse Display

The Lyrics module does not have to show only one verse at a time.

The **Lines per display** setting controls how many verses are grouped together into one on-air step:

- `1` means each verse is shown separately
- Higher values combine multiple verses into one lyric block

When multiple verses are grouped, 7CG joins them with line breaks and treats the group as one navigation step. The preview panel follows the same grouping logic.

## Settings

The Lyrics settings dialog includes four important options:

### Default Template

The template that should be selected by default when 7CG starts.

### Default Songbook

The songbook that should be selected automatically when possible.

### Template Selection

Controls whether the Template dropdown is shown in the module UI:

- **Show** keeps the template selector visible
- **Hide** always uses the configured default template

### Lines Per Display

Controls how many verses are grouped into each on-air lyric step.

This is useful for adapting to:

- Large projection screens
- Lower-third style lyric templates
- Audience readability requirements
- Different visual styles for livestream versus in-room display

## Keyboard Shortcuts

When lyrics are already on air, the module listens for keyboard navigation:

- `ArrowRight` - Next lyric group
- `ArrowLeft` - Previous lyric group
- `ArrowUp` - Reset to the first lyric group
- `Escape` - Stop the lyrics output

These shortcuts are especially useful when the operator needs to follow a live performance quickly.

## Companion Integration

The Lyrics module also participates in Companion-aware hymn state.

When lyrics are launched directly from the module, 7CG tracks:

- The current lyric group index
- The total number of lyric groups

That state can be used by Companion workflows and verse navigation logic so external control surfaces stay in sync with the current hymn position.

## Add to Rundown

The **Add to rundown** action creates a hymn entry using:

- The selected song
- The selected songbook
- All stanza IDs from the song
- The selected lyrics template

This lets you prepare songs in advance and run them from the Rundown module instead of only triggering them ad hoc from the Lyrics module.

## Typical Workflow

### Direct Lyrics Operation

1. Select the songbook
2. Search for the hymn by number or title
3. Confirm the template
4. Press **Launch**
5. Use **Back**, **Start**, and **Forward** while the song is in progress
6. Press **Stop** when finished

### Prepared Show Workflow

1. Select the songbook and hymn
2. Confirm the template and display grouping
3. Click **Add to rundown**
4. Repeat for the rest of the service set
5. Execute the hymn entries later from the Rundown module

## Best Practices

- Use a default songbook so volunteers start in the right collection
- Hide template selection when operators should always use the same lyrics template
- Test different **Lines per display** values with your actual template and screen size
- Keep one operator on lyric navigation during live music if timing is not fixed
- Add songs to the rundown ahead of time for more repeatable productions

## Related Pages

- [Modules Overview](./index.md)
- [Rundown Module](./rundown.md)
- [Companion Integration](../configuration/companion.md)
