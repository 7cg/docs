---
sidebar_position: 2
---

# Connection

Configure your connection to the CasparCG server and OSC settings.

## Server Connection

**Server Address**
- **Default:** `CG` (hostname)
- **Description:** The hostname or IP address of your CasparCG server
- **Examples:**
  - `localhost` - Server running on the same machine
  - `CG` - Server with hostname "CG" on local network
  - `192.168.1.100` - Direct IP address

**Server Port**
- **Default:** `5250`
- **Description:** The AMCP port that CasparCG listens on
- **Range:** 1-65535
- **Note:** This is the standard CasparCG AMCP (Advanced Media Control Protocol) port

## Connection Status

The connection panel displays real-time status:
- **Connected** (Green) - Successfully connected to CasparCG server
- **Disconnected** (Red) - Not connected to server
- **Reconnecting** (Yellow) - Attempting to establish connection
- **Error** (Red) - Connection failed with error

**Actions:**
- **Connect** - Establish connection with current settings
- **Disconnect** - Close active connection
- **Press Enter** - Quick connect when editing connection fields

## OSC Settings

**OSC Port**
- **Default:** `6250`
- **Description:** Port for OSC (Open Sound Control) communication
- **Range:** 1-65535
- **Use Case:** For integration with external control surfaces and automation systems

:::tip
Changes to server address and port are saved when you click **Connect**. OSC port changes are saved immediately.
:::

## Troubleshooting

### Cannot Connect to CasparCG

1. Verify CasparCG server is running
2. Check server address and port in Connection tab
3. Test network connectivity: `ping [server-address]`
4. Ensure firewall allows port 5250 (or your custom port)
5. Check CasparCG server logs for errors
