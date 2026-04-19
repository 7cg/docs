---
sidebar_position: 1
---

# Modules Overview

7CG is built around a modular workspace. Each module specializes in a specific part of the production workflow, and the layout system lets you arrange those modules to match your operator role.

## Main Workspace Modules

### Media Module
**Video, Audio, and Image Playback**

The Media module is your central hub for playing video files, audio tracks, and images from your CasparCG server. Features include hierarchical browsing, thumbnail previews, transitions, seeking, looping, and real-time monitoring of active playback.

**Use Cases:**
- Video package playback
- Background loops
- Audio tracks
- Still image display
- Motion graphics

[Learn more about the Media Module →](./media.md)

### Lower Thirds Module
**Name and Title Graphics**

Display professional lower third graphics with names, titles, and custom text. Supports templates, transitions, and multi-language content.

**Use Cases:**
- Speaker identification
- Guest introductions
- Interview subjects
- Panel discussions
- News segments

[Learn more about the Lower Thirds Module →](./lower-thirds.md)

### Bible Module
**Scripture Display**

Search, browse, and display Bible verses with multiple translation support. Integrated with CasparCG templates for on-screen scripture presentation.

**Use Cases:**
- Worship service scripture readings
- Sermon verse references
- Bible study sessions
- Scripture memorization displays

[Learn more about the Bible Module →](./bible.md)

### Lyrics Module
**Song and Hymn Display**

Display song lyrics and hymns with verse-by-verse or multi-verse layouts. Integrated hymnal database with search and navigation.

**Use Cases:**
- Congregational singing
- Worship song lyrics
- Hymn display
- Special music performances

[Learn more about the Lyrics Module →](./lyrics.md)

### Channel Graphics Module
**Bug and ID Overlay Control**

Configure and monitor always-available bug and ID overlays for a channel.

**Use Cases:**
- Permanent live bug
- Station ID
- Program branding overlays

[Learn more about the Channel Graphics Module →](./channel-graphics.md)

### Credits Module
**Production Credits and Acknowledgments**

Prepare and launch credits-style graphics for acknowledgments, team listings, and end rolls.

**Use Cases:**
- Production team credits
- Behind-the-scenes segments
- Staff appreciation
- Team introductions

[Learn more about the Credits Module →](./credits.md)

### Ticker Module
**Scrolling Text Tickers**

Create scrolling text messages, announcements, and information bars.

**Use Cases:**
- Breaking news
- Announcements
- Event information
- Emergency alerts
- Continuous information display

[Learn more about the Ticker Module →](./ticker.md)

### Other Templates Module

Provides access to additional template-driven graphics outside the main lower-thirds workflow.

[Learn more about the Other Templates Module →](./other-templates.md)

### Layers Overview Module

Shows active layers and current on-air occupancy information, which is helpful when troubleshooting conflicts or understanding what CasparCG is currently playing.

[Learn more about the Layers Overview Module →](./layers-overview.md)

### Rundown Module
**Planning, Triggering, and Export**

The Rundown module is the operational center of 7CG. It lets you:

- Organize show content into executable items
- Trigger the selected item or a specific item from Companion
- Track current and next position
- Export supported items as video

[Learn more about the Rundown Module →](./rundown.md)

## Canvas Modules vs. Block Types

Not every user-facing feature is a standalone top-level module in the canvas.

For example:

- **QR Code** and **Credits** are important runnable block types
- **Bible** and **Lyrics** are both canvas modules and rundown block types
- **Rundown** is where many block-oriented actions are created, edited, and executed

## Module Architecture

### Common Features

All 7CG modules share common architectural features:

**Expandable Sections**
- Modules can be collapsed/expanded to save screen space
- Work on multiple modules simultaneously

**Layout-Aware**
- Modules can be moved between columns
- Modules can be hidden or restored
- Entire layouts can be saved as presets

**Real-time Updates**
- Changes reflect immediately in CasparCG output
- Operational state can also be broadcast to Companion for feedback and control

**Template Integration**
- Works with GDD-compliant CasparCG templates
- Supports custom graphics designs

## Workflow Integration

### Typical Module Usage

1. **Prepare Content** - Use module interface to configure content
2. **Preview** - Check output before going live (where supported)
3. **Add to Rundown** - Save configured content as rundown block
4. **Execute** - Trigger from rundown during live production

### Module + Rundown Workflow

```
Media Module
  ↓ Select & Configure
Command Block in Rundown
  ↓ Execute
CasparCG Output
  ↓ Display
Broadcast/Stream
```

### Direct Execution vs. Rundown

**Direct Execution (from Module):**
- Quick, ad-hoc content
- Testing and previewing
- Emergency situations
- Simple operations

**Rundown Execution (from Rundown):**
- Planned sequences
- Repeatable operations
- Complex multi-step shows
- Team coordination

:::tip Best Practice
Use modules to prepare and test content, then add to rundown for actual show execution. This ensures consistent, repeatable performances.
:::

## Keyboard Shortcuts

Many modules support keyboard shortcuts for efficiency:

- **Space** - Play/Execute selected item
- **Enter** - Add to rundown or confirm
- **Escape** - Close dialogs
- **Ctrl+F** - Search/filter (where applicable)

:::note
Specific shortcuts vary by module. Check individual module documentation for details.
:::

## Module Visibility

Control which modules appear in your interface:

**Configuration → Interface → Modules**

Enable or disable specific modules based on your production needs. This keeps your interface clean and focused.

:::tip
Disable unused modules to simplify the interface for operators who only need specific functionality.
:::

## Customization

### Template Customization

Graphics modules and many rundown block types work with CasparCG templates. Customize templates to match your branding:

- Colors and fonts
- Logos and branding
- Animation timing
- Layout and positioning

See the **Template Development Guide** for creating custom templates.

### Layout Customization

Use [Layouts](../configuration/layouts.md) to:

- Rearrange modules into columns
- Hide modules temporarily
- Save named presets for different operators or productions

### Block Color Customization

Customize rundown block colors for each module type:

**Configuration → Block Colors**

Set light and dark theme colors for each block type to visually organize your rundown.

## Performance Considerations

### Module Resource Usage

**Lightweight Modules:**
- Bible (database queries)
- Lyrics (database queries)
- Layers overview

**Resource-Intensive Modules:**
- Media (thumbnail generation, large file lists)
- Recorder (real-time encoding)
- Video export from rundown

### Optimization Tips

1. **Limit Open Modules** - Collapse unused modules
2. **Efficient Searching** - Use specific search terms
3. **Pre-configure Settings** - Set defaults to reduce clicks
4. **Organize Content** - Use folders and naming conventions

:::note
Module development requires TypeScript/React knowledge and understanding of 7CG's plugin architecture. See the **Developer Guide** for details.
:::

## Getting Help

For module-specific help:

1. Check individual module documentation pages
2. Review video tutorials (if available)
3. Consult the troubleshooting section
4. Ask the community for support

---

## Next Steps

- Explore individual module documentation
- Configure your preferred modules
- Build your first rundown with multiple modules
- Customize templates and colors

Ready to dive deeper? Start with the [Media Module](./media.md) to master professional media playback.
