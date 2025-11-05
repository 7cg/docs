---
sidebar_position: 9
---

# Troubleshooting

Common issues and solutions for 7CG configuration.

## Connection Issues

### Cannot Connect to CasparCG

1. Verify CasparCG server is running
2. Check server address and port in Connection tab
3. Test network connectivity: `ping [server-address]`
4. Ensure firewall allows port 5250 (or your custom port)
5. Check CasparCG server logs for errors

## Channel Issues

### No Channels Discovered

1. Ensure you're connected to CasparCG (check Connection tab)
2. Verify CasparCG configuration includes channel definitions
3. Check that channels are properly configured in `casparcg.config`
4. Try manual channel creation using Edit button

## Companion Issues

### Companion Not Connecting

1. Verify Companion server is enabled in 7CG
2. Check that WebSocket port (default 8099) is not blocked by firewall
3. Ensure Companion is configured with correct hostname/IP and port
4. Try disabling and re-enabling the Companion server
5. Check for port conflicts with other applications

## Settings Issues

### Settings Not Saving

1. Check application has write permissions to settings directory
2. Look for error messages in notifications
3. Increase log level to Debug and check logs
4. Verify disk space is available

## Getting Help

If you continue to experience issues:

1. Set **Log Level** to **Debug** (App Settings)
2. Reproduce the issue
3. Check application logs in:
   - Windows: `%APPDATA%/7cg/logs/`
   - macOS: `~/Library/Logs/7cg/`
   - Linux: `~/.config/7cg/logs/`
4. Report the issue with log files
