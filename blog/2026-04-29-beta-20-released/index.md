---
slug: beta-20-released
title: '7CG 2.0.0-beta.20 is out'
authors: [jcalado]
tags: [release]
date: 2026-04-29
---

**7CG v2.0.0-beta.20** is out today. If you're already on a 2.x beta, the auto-updater should pull it the next time you launch the app.

This one is about making the rundown easier to read at a glance. You can now colour individual blocks, save a palette of your favourite colours, and every item shows its block-type icon next to the label.

{/* truncate */}

## What's new

- **Colour any block**: Right-click a rundown item to pick its colour. Light and dark themes get their own values, so colours look right in either mode.
- **Saved colours**: Build a palette of named colours in **Preferences → Colours** and reuse them anywhere a colour is picked.
- **Block icons in the rundown**: Every item now shows its block-type icon next to the label, so a long rundown is much easier to scan.
- **Custom icon and label per item**: Media blocks can override their icon and label on individual entries, handy when one item in a list needs to stand out.
- **Release notes match your version**: When the app updates, the "What's New" screen shows the changelog for the version you actually installed.
- **Tidier Lyrics module**: The title icon now lines up with the hymn rows and resizes smoothly with the module.

## Fixes

- Colour pickers opened from a right-click menu no longer close themselves before you can use them.
- Changing a block type's default colour now updates every existing item using that default, not just new ones.
- Fixed a crash when opening the edit dialog on Media blocks.

## Getting it

If you're already on a 7CG 2.x beta, the auto-updater will pull beta.20 the next time you launch the app. Each update is a complete installer for your platform (Windows `.exe`, macOS `.dmg`, or Linux `.AppImage` / `.deb` / `.snap`), so there's nothing else to do once it lands. New to 7CG? Download a first install from [7cg.io](https://7cg.io).

## Known limitations

This is still a **beta**. A few things to keep in mind:

- macOS builds are **not notarized** in this release. You'll need to right-click the app and choose **Open** the first time to bypass Gatekeeper.
- Windows builds are **not code-signed** yet, so SmartScreen will warn on first launch. Click **More info**, then **Run anyway**.

## Reporting bugs

If something breaks, post in the [7CG WhatsApp group](https://chat.whatsapp.com/CxrKMAV5zfP2eSSvHi1tA1) with your OS, the version string from **Help → About**, and the steps to reproduce. The renderer log lives at:

- **Windows**: `%APPDATA%\7cg\logs\`
- **macOS**: `~/Library/Logs/7cg/`
- **Linux**: `~/.config/7cg/logs/`

Attaching the most recent log file will speed up triage.

Thanks for testing.
