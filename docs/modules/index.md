---
sidebar_position: 1
---

# Modules Overview

7CG is built around a modular architecture where each module specializes in a specific type of broadcast content. Modules provide intuitive interfaces for managing media, graphics, scripture, lyrics, and more.

## Available Modules

### Media Module
**Video, Audio, and Image Playback**

The Media module is your central hub for playing video files, audio tracks, and images from your CasparCG server. Features include hierarchical browsing, thumbnail previews, transitions, seeking, looping, and real-time monitoring of active playback.

**Use Cases:**
- Video package playback
- Background loops
- Audio tracks
- Still image display
- Motion graphics

[Learn more about the Media Module →](./media)

### Lower Thirds Module
**Name and Title Graphics**

Display professional lower third graphics with names, titles, and custom text. Supports templates, transitions, and multi-language content.

**Use Cases:**
- Speaker identification
- Guest introductions
- Interview subjects
- Panel discussions
- News segments

### Bible Module
**Scripture Display**

Search, browse, and display Bible verses with multiple translation support. Integrated with CasparCG templates for on-screen scripture presentation.

**Use Cases:**
- Worship service scripture readings
- Sermon verse references
- Bible study sessions
- Scripture memorization displays

### Lyrics Module
**Song and Hymn Display**

Display song lyrics and hymns with verse-by-verse or multi-verse layouts. Integrated hymnal database with search and navigation.

**Use Cases:**
- Congregational singing
- Worship song lyrics
- Hymn display
- Special music performances

### Credits Module
**Rolling Credits and Staff Lists**

Create scrolling or static credit sequences for acknowledging team members, sponsors, and contributors.

**Use Cases:**
- End-of-show credits
- Staff acknowledgments
- Sponsor recognition
- Production team credits

### QR Code Module
**Dynamic QR Code Generation**

Generate QR codes on-the-fly for links, text, and resources. Display them on screen for audience interaction.

**Use Cases:**
- Event registration links
- Donation pages
- Social media links
- Resource downloads
- Contact information

### Crew Module
**Crew and Staff Graphics**

Display crew member names, roles, and photos during productions.

**Use Cases:**
- Production team identification
- Behind-the-scenes segments
- Staff appreciation
- Team introductions

### Ticker Module
**Scrolling Text Tickers**

Create scrolling text messages, announcements, and information bars.

**Use Cases:**
- Breaking news
- Announcements
- Event information
- Emergency alerts
- Continuous information display

### Emergency Module
**Emergency Alert System**

Quickly display emergency messages and alerts with high visibility and priority.

**Use Cases:**
- Emergency notifications
- Weather alerts
- Facility announcements
- Critical information
- Safety messages

## Module Architecture

### Common Features

All 7CG modules share common architectural features:

**Expandable Sections**
- Modules can be collapsed/expanded to save screen space
- Work on multiple modules simultaneously

**Add to Rundown**
- All modules support adding content to rundown
- Pre-configure settings before adding

**Real-time Updates**
- Changes reflect immediately in CasparCG output
- No compilation or export required

**Template Integration**
- Works with GDD-compliant CasparCG templates
- Supports custom graphics designs

### Module vs. Block Types

**Modules** are UI sections in 7CG where you configure and trigger content.

**Block Types** are rundown entries that can be executed during a show.

Most modules create **Command Blocks** when content is added to the rundown. For example:
- Media Module → Creates a Command Block with `media/play` command
- Lower Third Module → Creates a Command Block with `cg/play` command
- Bible Module → Creates a Command Block with template data

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

All graphics modules (Lower Thirds, Bible, Lyrics, etc.) work with CasparCG templates. Customize templates to match your branding:

- Colors and fonts
- Logos and branding
- Animation timing
- Layout and positioning

See the **Template Development Guide** for creating custom templates.

### Block Color Customization

Customize rundown block colors for each module type:

**Configuration → Block Colors**

Set light and dark theme colors for each block type to visually organize your rundown.

## Performance Considerations

### Module Resource Usage

**Lightweight Modules:**
- Bible (database queries)
- Lyrics (database queries)
- QR Code (generation only)

**Resource-Intensive Modules:**
- Media (thumbnail generation, large file lists)
- Recorder (real-time encoding)

### Optimization Tips

1. **Limit Open Modules** - Collapse unused modules
2. **Efficient Searching** - Use specific search terms
3. **Pre-configure Settings** - Set defaults to reduce clicks
4. **Organize Content** - Use folders and naming conventions

## Module Development

7CG's modular architecture allows for extensibility. Future modules can be added to support:

- Custom graphics packages
- Social media integration
- Automation systems
- Third-party service integration

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

Ready to dive deeper? Start with the [Media Module](./media) to master professional media playback.
