---
sidebar_position: 7
---

# Companion Integration

Configure the WebSocket server for integration with **Bitfocus Companion**, a popular control surface application for broadcast and production environments.

## Server Status

Visual indicator showing current Companion server state:

- **Running** (Green) - WebSocket server is active and accepting connections
- **Stopped** (Gray) - Server is not running

When running, displays: "Listening on port [port number]"

## Settings

**Enable Server**
- **Default:** Disabled
- **Description:** Start/stop the WebSocket server for Companion connections

**WebSocket Port**
- **Default:** `8099`
- **Range:** 1-65535
- **Description:** The port Companion will connect to

## How to Connect Companion

1. **Enable** the Companion server in 7CG
2. Open **Bitfocus Companion** application
3. Add a new connection:
   - Select **Generic WebSocket** (or 7CG if available)
   - Enter hostname/IP of machine running 7CG
   - Enter the port number (default: 8099)
4. Configure buttons/controls in Companion to send commands

## Available Commands

Once connected, Companion can trigger 7CG actions such as:
- Execute rundown blocks
- Navigate rundown entries
- Control media playback
- Display/hide graphics
- Switch channels

:::info
Companion integration enables hardware control surfaces (Stream Deck, X-Keys, etc.) to control 7CG during live productions.
:::

## Troubleshooting

### Companion Not Connecting

1. Verify Companion server is enabled in 7CG
2. Check that WebSocket port (default 8099) is not blocked by firewall
3. Ensure Companion is configured with correct hostname/IP and port
4. Try disabling and re-enabling the Companion server
5. Check for port conflicts with other applications
