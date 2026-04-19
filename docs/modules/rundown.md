---
sidebar_position: 10
---

# Rundown Module

The **Rundown** module is where you organize and execute the sequence of items for a live production.

It is also the source of several newer workflows in `7cg-ng`, including Companion item targeting and video export.

## What the Rundown Does

The rundown lets you:

- Arrange show items in order
- Select the current item
- Execute and stop supported items
- Track the current and next position
- Edit labels and item details
- Trigger blocks from Companion
- Export supported items to video

## Typical Workflow

1. Add or create the items you need
2. Arrange them in production order
3. Select the next item to air
4. Execute it from 7CG or Companion
5. Stop or clear it when appropriate
6. Continue to the next item

## Companion Integration

Recent versions of 7CG expose more rundown-aware Companion features.

### Selected-Item Actions

These actions operate on whatever item is currently selected in 7CG:

- Execute selected item
- Stop selected item
- Select next item
- Select previous item

### Specific-Item Actions

7CG now also exposes Companion actions that target a **specific rundown item by ID**:

- **Execute rundown item…**
- **Stop rundown item…**

These actions are useful when a button should always fire the same item, regardless of what is selected in the UI.

Because the binding uses a stable item ID, renaming or reordering the item does not break the button. If the item is removed from the rundown, Companion receives a clear "not found" error instead of failing silently.

## Rundown State Broadcasts

7CG publishes rundown state to Companion so panels and feedbacks can stay in sync:

- Current item
- Next item
- Current position index
- Total item count
- Full rundown item list for action dropdowns

This makes it easier to build operator-friendly Companion pages without hard-coding labels manually.

## Export Video

The Rundown module can export supported items as a `.mov` file.

### Export Workflow

When exporting an item:

1. Choose a filename ending in `.mov`
2. Set the duration in seconds
3. Confirm the target channel if applicable
4. Start the export
5. Watch the progress bar and remaining time
6. Use **Stop** if you need to cancel the export mid-recording

### What Happens During Export

7CG handles more than a simple "play and record" flow:

- A short preroll is added before playback
- A tail is recorded after stopping so transitions are captured cleanly
- The dialog stays open while recording to prevent orphaned recorder sessions
- Bible and hymn exports can cycle through their chunks or verse groups during the export duration instead of staying on only the first chunk

### Canceling an Export

If the wrong item, duration, or filename was chosen, use the **Stop** button in the export dialog. 7CG cancels the recording and performs the necessary cleanup so CasparCG does not keep recording in the background.

## Best Practices

- Keep item labels clear so both operators and Companion users can recognize them quickly
- Group related items together in the order they will air
- Test exports ahead of time for templates that rely on multiple chunks or verses
- Use block colors to make rundown scanning faster under pressure

## Related Pages

- [Companion Integration](../configuration/companion.md)
- [Block Colors](../configuration/block-colors.md)
- [Media Module](./media.md)
