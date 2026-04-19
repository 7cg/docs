---
sidebar_position: 4
---

# Bible Module

The **Bible** module is 7CG's scripture display workflow for services, studies, and productions that need Bible passages on screen.

It combines:

- Bible version selection with language filtering
- A guided passage picker for books, chapters, and verses
- Template-driven on-air output
- Automatic text chunking for long passages
- Direct navigation through chunks and verses
- Integration with the rundown and Companion state

## Overview

The Bible module allows you to:

- Select the Bible translation you want to use
- Pick a book, chapter, and verse or verse range
- Choose a Bible template when template selection is enabled
- Customize supported template properties
- Control how long passages are split with **Max characters**
- Preview or play the current passage
- Move backward and forward through chunks or verses
- Stop the current Bible output
- Add the configured passage to the rundown

## Interface Components

### Template Selector

The module can show a **Template** dropdown when template selection is enabled in Bible settings.

When the picker is visible, operators can override the default Bible template for the current session. When it is hidden, the module always uses the configured default template.

Template entries come from the CasparCG template list and are filtered to the Bible template family.

### Template Customization

If the selected template exposes configurable GDD properties, the module shows a **Customize Template** button.

This lets operators override supported template fields before going on air. Those custom values are carried into playback and can also be stored with a rundown item.

### Bible Version Selector

The **Version** combobox shows the available Bible translations filtered by the languages enabled in Bible settings.

7CG tries to start with the configured default translation when it matches the active language filter. If it does not, the module falls back to another available translation in the allowed languages.

### Passage Picker

The **Passage** field opens a guided picker for:

- Book selection
- Chapter selection
- Start verse selection
- Optional end verse selection for a range

The book step supports accent-insensitive search, which makes it easier to find books quickly across localized Bible datasets.

The picker also supports clearing the current selection directly from the main module UI.

### Max Characters

The **Max characters** field controls how much passage text is placed into each on-air chunk.

This matters when:

- A template has limited text space
- You want shorter readable chunks for projection
- You are preparing exports and want cleaner pacing across long passages

When the selected template defines a text length limit in its GDD metadata, 7CG uses that value as the starting point.

## Playback and Navigation

The Bible module uses a CG template workflow:

- **Play** performs the initial template load when needed and sends the current chunk on air
- **Previous** moves to the previous chunk, or to the previous verse when already at the first chunk
- **Next** moves to the next chunk, or to the next verse when already at the last chunk
- **Stop** clears the Bible CG from its configured channel, layer, and CG layer

After the initial load, navigation updates the active CG template instead of reloading it every time.

### Chunked Passage Display

When the selected passage is longer than the configured character limit, 7CG:

- Joins the selected verse or verse range into one text block
- Splits that text into readable chunks
- Tracks the current chunk index separately from the current verse position

This means **Previous** and **Next** are chunk-aware first, then verse-aware at the boundaries.

The preview panel shows:

- The selected passage reference
- The current chunk text
- A chunk counter such as `1/3` when multiple chunks exist
- Boundary cues when another verse is available before or after the current chunk range

## Preview and Advanced Routing

The leftmost eye button enables **Preview** mode.

When preview is enabled, Bible playback is sent to preview channel `2` instead of the normal output channel. This is useful for checking the passage and template before taking it live.

The **Advanced** dialog lets you override operational routing and timing:

- Channel
- Layer
- CG layer
- Delay
- Duration

These options are applied to direct playback from the module and stored with the current command state.

## Settings

The Bible settings dialog includes the main defaults for the module:

### Default Template

Sets the template the module should use automatically when template selection is hidden, or use as the starting choice when template selection is visible.

### Default Translation

Sets the Bible translation 7CG should prefer when it is available within the active language filter.

### Filter by Language

Limits the visible Bible versions to one or more enabled language groups.

This keeps the version selector focused and is especially useful in multilingual environments.

### Template Selection

Controls whether operators see the Template dropdown in the main Bible module:

- **Show** allows per-session template overrides
- **Hide** enforces the configured default template

## Companion Integration

The Bible module publishes navigation-aware state for Companion workflows.

When a passage is launched from the module, 7CG tracks and broadcasts:

- Current chunk index
- Total number of chunks
- Current verse number
- Total verses in the chapter
- Current passage reference

This helps Companion buttons and feedback stay aligned with the live scripture state.

## Add to Rundown

The **Add to rundown** action creates a Bible entry containing:

- The passage reference as the label
- The full selected passage text as notes
- Book and chapter information
- The selected verse range
- The current **Max characters** value
- The selected Bible ID
- The resolved template ID
- Any customized template data

This is the right workflow when you want the same scripture graphics prepared ahead of time instead of chosen ad hoc during a live service.

## Typical Workflow

### Direct Bible Operation

1. Select the Bible version
2. Open the passage picker and choose the book, chapter, and verse or range
3. Confirm the template
4. Adjust **Max characters** if the passage needs shorter chunks
5. Use **Preview** if you want to test on channel `2`
6. Press **Play**
7. Use **Previous** and **Next** during the reading
8. Press **Stop** when finished

### Prepared Show Workflow

1. Select the translation and passage
2. Confirm the template and any custom properties
3. Adjust **Max characters** for the display style you need
4. Click **Add to rundown**
5. Repeat for other readings
6. Execute the Bible entries later from the Rundown module

## Best Practices

- Use language filtering so operators only see translations relevant to the production
- Hide template selection when all Bible passages should use one approved template
- Test long passages with the real template so **Max characters** matches your available text area
- Use Preview mode before going live when operators need to verify chunking and styling
- Add recurring scripture readings to the rundown ahead of time for more repeatable services

## Related Pages

- [Modules Overview](./index.md)
- [Rundown Module](./rundown.md)
- [Companion Integration](../configuration/companion.md)
