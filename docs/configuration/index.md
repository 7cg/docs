---
sidebar_position: 1
---

# Overview

7CG offers comprehensive configuration options to customize the application for your production environment. Access preferences by navigating to **Settings** or using the keyboard shortcut.

## Preferences Panel

The preferences panel is organized into tabs, each focusing on a specific aspect of the application:

- **Connection** - CasparCG server connection settings
- **Channels** - Channel discovery and management
- **Interface** - Theme, language, and module visibility
- **Block Colors** - Visual customization for block types
- **App** - Updates, notifications, and logging
- **Companion** - Bitfocus Companion integration
- **Startup** - Application startup behavior
- **About** - Version and license information

## Keyboard Shortcuts

- **Open Preferences:** (varies by platform)
  - Windows/Linux: `Ctrl+,`
  - macOS: `Cmd+,`

## Best Practices

### Production Environment

Recommended settings for live broadcast:

- **Theme:** Dark
- **Auto-Update:** Disabled (update during maintenance windows)
- **Version Channel:** Normal (stable releases only)
- **Log Level:** Info or Warn
- **Notifications:** Enabled (to catch critical errors)

### Development/Testing

Recommended settings for development:

- **Version Channel:** Beta (test new features)
- **Auto-Update:** Enabled
- **Log Level:** Debug
- **Companion:** Enabled (for testing control surfaces)

### Multi-User Environments

When multiple operators use 7CG:

- Document your channel assignments (Main/Preview/Return)
- Use descriptive channel custom names
- Standardize block color schemes across installations
- Keep language setting consistent across team

## Technical Details

### Settings Storage

7CG stores preferences using Electron's built-in storage system:

- **Location:** Platform-specific user data directory
  - Windows: `%APPDATA%/7cg/`
  - macOS: `~/Library/Application Support/7cg/`
  - Linux: `~/.config/7cg/`

- **Format:** JSON configuration files
- **Persistence:** Settings persist across application restarts

### IPC Communication

Preferences use Electron's IPC (Inter-Process Communication):

- Renderer process (UI) communicates with main process
- Settings changes trigger immediate saves
- Real-time status updates for connection state

### Database Settings

Some settings (channels, custom data) are stored in the SQLite database separate from preferences.
