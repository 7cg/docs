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
3. Ensure Companion is configured with the correct hostname/IP and port if you are not using discovery
4. If you are pairing with a PIN, make sure the pairing window has not expired
5. Start a new pairing window if the current PIN has timed out or hit the failed-attempt limit
6. Revoke and re-pair a device if its saved session appears stale
7. Try disabling and re-enabling the Companion server
8. Check for port conflicts with other applications

### Companion Discovery Not Working

1. Confirm the Companion server is running
2. Ensure both machines are on the same local network
3. Check whether your network blocks mDNS or multicast traffic
4. Fall back to manual IP/host and port entry if discovery is unavailable

## Export Issues

### Video Export Fails or Produces No File

1. Confirm the rundown item supports export
2. Ensure the filename ends with `.mov`
3. Check that CasparCG can start and stop the recorder cleanly
4. Keep the export dialog open until recording completes or you intentionally stop it
5. Review logs if you see a recording start or recording stop failure

### Export Was Started by Mistake

1. Use the **Stop** button in the export dialog
2. Wait for 7CG to cancel the export and tear down the recorder cleanly
3. Retry the export with the correct filename, duration, or target item

## Application Errors

### Recoverable Error Screen

If something goes wrong inside the renderer, 7CG no longer leaves you with a blank window. Instead, a friendly error screen is shown with a **Try again** button that reloads the affected view without restarting the whole app. If the error keeps recurring, capture the message and follow [Getting Help](#getting-help) below.

### In-App Notifications

System messages (errors, warnings, status changes) appear inside the app as toast notifications rather than native OS pop-ups. Toasts stack in a corner of the window and dismiss automatically — older messages stay visible briefly so you can read them in order.

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
