---
sidebar_position: 1
---

# Media Module

The Media module is 7CG's comprehensive solution for video, audio, and image playback. It provides professional-grade media management with support for transitions, seeking, looping, and real-time monitoring of active playback.

## Overview

The Media module allows you to:

- **Browse and search** media files from your CasparCG server
- **Preview, cue, and load** media to background layers
- **Play, pause, and seek** through video and audio
- **Configure transitions** (fade in/out) for smooth playback
- **Monitor active producers** with real-time progress tracking
- **Add media to rundowns** with all configured settings

## Interface Components

### Active Producers Panel

At the top of the media module, you'll see a live display of all currently playing media across channels and layers.

**Features:**
- Real-time playback progress bars
- Current time and remaining time display
- Channel and layer indicators
- Loop status badges
- Pause/play status icons
- Quick stop buttons for each active producer

**Empty State:** When no media is playing, displays "No active media playing"

### Media Browser

The main section displays your media library in a hierarchical tree structure:

**Tree View:**
- Organized by folder structure
- Expandable/collapsible directories
- Thumbnail previews for video and image files
- File type icons (video, image, audio)
- Green highlight for currently selected item

**Lazy Loading:** Thumbnails load only when items become visible in the viewport for optimal performance.

### Search and Filter

**Search Box:**
- Real-time search as you type
- Searches file names across all folders
- Case-insensitive matching

**Filter Menu:**
- **Video** - MP4, WebM, Matroska video files
- **Audio** - Audio format files
- **Image** - PNG, PSD, and other image formats
- Multiple filters can be active simultaneously

:::tip
Use Ctrl+F (Cmd+F on Mac) to quickly focus the search box and find media by name.
:::

## Playback Controls

### Load Controls (Top Toolbar)

**Preview** (Currently disabled)
- Preview media before loading

**CUE** - Next Frame icon
- Load media to foreground (paused, ready to play)
- Appears as "cued" in player state
- Press Play to start instantly

**CUE BG** - Upload icon
- Load media to background layer
- Pre-loads content without displaying
- Useful for seamless transitions

:::info Cue vs. CUE BG
- **CUE**: Loads media in a paused state, ready for immediate playback
- **CUE BG**: Pre-loads media in background for smooth transitions
:::

### Playback Controls (Middle Toolbar)

**Play** - Filled play icon
- Start playing selected media
- Applies configured transitions
- Applies saved volume setting automatically

**Pause/Resume** - Pause/Play icon
- Toggle between pause and resume states
- Icon changes based on current state

**Rewind (-5s)** - Rewind icon
- Seek backward 5 seconds

**Stop** - Stop icon
- Stop current media playback
- Applies transition out if configured

**Fast Forward (+10s)** - Fast forward icon
- Seek forward 10 seconds

**Add to Rundown** - List icon
- Adds selected media to rundown with all current settings
- Includes transitions, delays, loop, and advanced options
- Notes field shows configured parameters

:::tip Quick Workflow
1. Select media from browser
2. Configure transitions and settings
3. Click "Add to Rundown" to save configuration
4. Execute from rundown during live production
:::

## Settings and Configuration

### Transitions Button

Opens the Transitions dialog to configure fade in and fade out effects.

**Transition In (Fade In):**
- Applied when media starts playing
- Smooth entrance effect

**Transition Out (Fade Out):**
- Applied when media stops
- Scheduled immediately after play command
- Creates professional fade-outs

**Available Transition Types:**
- Mix (crossfade)
- Wipe
- Slide
- Push
- And more CasparCG-supported transitions

**Transition Parameters:**
- Duration (in frames)
- Direction (for wipes and slides)
- Easing functions

:::tip Best Practice
Configure both transition in and out for polished, professional-looking broadcasts. A 20-frame (0.8s at 25fps) mix transition works well for most content.
:::

### Advanced Settings

Click the **Advanced** button to access detailed playback configuration:

**Channel & Layer:**
- **Channel** - CasparCG output channel (default: 1)
- **Layer** - Video layer within channel (default: 1)
- Higher layer numbers appear on top

**Timing:**
- **Delay (ms)** - Delay before playback starts (milliseconds)
- **Duration (ms)** - Auto-stop after specified duration
- Useful for timed sequences

**Video Control:**
- **Start Frame** - Begin playback at specific frame number
- **In Frame** - Trim in point (start frame of clip)
- **Length (frames)** - Play only specified number of frames
- **Filter** - Apply FFmpeg filters (e.g., color correction, effects)

**Playback Options:**
- **Loop** - Repeat media continuously until stopped

:::warning Advanced Features
Frame-accurate control (In Frame, Length) requires understanding of your media's frame rate. Check your video properties in the CasparCG INFO system.
:::

### Player Settings (Gear Icon)

Access global media player settings:

**Volume Control:**
- Master volume slider (0.0 to 1.0)
- Applies to CasparCG mixer
- Saved preference, applied to all media playback
- Real-time adjustment affects currently playing media

:::note
Volume setting is global and persists across application restarts. Set your preferred broadcast audio level here.
:::

## Workflow Examples

### Simple Video Playback

1. Select video from browser
2. Click **Play** button
3. Media plays on default channel/layer

### Smooth Fade In/Out

1. Select media
2. Click **Transitions** button
3. Configure:
   - Transition In: Mix, 20 frames
   - Transition Out: Mix, 30 frames
4. Click **Play**
5. Media fades in smoothly
6. Click **Stop** - media fades out

### Prepared Cue for Live Show

1. Select media
2. Click **CUE** button
3. Media is loaded and paused
4. At the right moment, click **Play**
5. Media starts instantly (no load time)

### Loop Background Video

1. Select looping video (e.g., motion background)
2. Click **Advanced** button
3. Enable **Loop** checkbox
4. Click **Play**
5. Video loops continuously until stopped

### Delayed Playback

1. Select media
2. Click **Advanced** button
3. Set **Delay**: 5000 (5 seconds)
4. Click **Play**
5. Command is sent immediately, playback starts after 5s

### Adding to Rundown with Configuration

1. Select media
2. Configure transitions, loop, timing, etc.
3. Click **Add to Rundown** button
4. Entry appears in rundown with all settings
5. Execute during show by triggering rundown entry

### Seeking During Playback

1. Media must be playing
2. Use **Rewind (-5s)** or **Fast Forward (+10s)** buttons
3. Playback jumps backward or forward
4. Useful for replaying segments or skipping ahead

## Active Producers Monitoring

The Active Producers panel shows real-time information for all playing media:

**Display Information:**
- **Clip Name** - Full media file path
- **Channel-Layer** - Output routing (e.g., "1-1")
- **Loop Badge** - Indicates looping media
- **Play/Pause Icon** - Current playback state
- **Progress Bar** - Visual playback progress
- **Current Time** - Elapsed playback time (MM:SS)
- **Remaining Time** - Time until end (-MM:SS)

**Actions:**
- **Stop Button** - Immediately stop specific producer
- Stops playback on that channel/layer
- Removes from active producers list

**Use Cases:**
- Monitor multiple media playing simultaneously
- Quick stop of specific layer without affecting others
- Visual confirmation of what's currently on air

:::tip Multi-Layer Production
Use Active Producers to manage complex shows with multiple videos, graphics, and audio playing across different layers and channels simultaneously.
:::

## CasparCG Integration

### Commands Sent

The Media module sends the following CasparCG AMCP commands:

**LOADBG CLIP**
- Pre-loads media in background

**LOAD CLIP**
- Loads media (cued, not playing)

**PLAY [channel]-[layer] [clip]**
- Starts playback with optional transition

**PAUSE [channel]-[layer]**
- Pauses current media

**RESUME [channel]-[layer]**
- Resumes paused media

**STOP [channel]-[layer]**
- Stops playback

**CALL [channel]-[layer] SEEK [frames]**
- Seeks to specific frame (relative)

**MIXER [channel]-[layer] VOLUME [value]**
- Adjusts audio volume (0.0 to 1.0)

### Transition Support

Transitions are applied using CasparCG transition parameters:

```
PLAY 1-1 video.mp4 MIX 20 EASEINSINE
```

- **MIX** - Transition type
- **20** - Duration in frames
- **EASEINSINE** - Easing function

### Volume Control

Volume is applied before playback:

```
MIXER 1-1 VOLUME 0.8
PLAY 1-1 audio.mp3
```

:::info
Volume setting is saved to preferences and automatically applied to all media playback going forward.
:::

## File Format Support

7CG supports all media formats that CasparCG can handle:

**Video Formats:**
- MP4 (H.264)
- MOV (ProRes, Animation)
- AVI
- WebM
- Matroska (MKV)
- DV
- HAP codec

**Image Formats:**
- PNG (supports transparency)
- JPEG
- TGA
- PSD (Photoshop documents with layers)
- BMP

**Audio Formats:**
- WAV
- MP3
- AAC
- FLAC

:::tip Performance Tip
For best performance, use:
- **Video**: HAP codec or DNxHD in MOV containers
- **Images**: PNG with transparency
- **Audio**: Uncompressed WAV at your channel's sample rate
:::

## Keyboard Shortcuts

While the Media module is active:

- **Space** - Play/Pause selected media
- **Enter** - Play selected media
- **Ctrl+Space** - Stop playback
- **Left Arrow** - Rewind 5 seconds
- **Right Arrow** - Fast Forward 10 seconds
- **Ctrl+F** - Focus search box

:::note
Keyboard shortcuts may vary based on your operating system and configuration.
:::

## Troubleshooting

### Media Not Appearing in Browser

1. Verify CasparCG server is running and connected
2. Check CasparCG `casparcg.config` media-path setting
3. Ensure media files are in CasparCG's media folder
4. Click refresh or restart 7CG to reload media list

### Playback Not Starting

1. Check connection status (Configuration > Connection)
2. Verify channel and layer numbers are valid
3. Ensure media format is compatible with CasparCG
4. Check CasparCG server logs for errors

### No Thumbnails Showing

1. Thumbnails generate on-demand when scrolling
2. Scroll to item to trigger thumbnail load
3. CasparCG thumbnail service must be running
4. Check that media files aren't corrupted

### Volume Not Changing

1. Verify saved volume setting in Player Settings
2. Check that channel/layer numbers are correct
3. Ensure CasparCG mixer is responding
4. Test with: `MIXER 1-1 VOLUME 0.5` in CasparCG CLI

### Transitions Not Working

1. Verify CasparCG version supports transitions
2. Check transition parameters (duration, type)
3. Ensure framerate is correctly detected
4. Some older CasparCG versions have limited transition support

### Active Producers Not Updating

1. Check OSC connection (Configuration > Connection > OSC Port)
2. Verify CasparCG is sending OSC feedback
3. Restart 7CG to reinitialize OSC listener

## Best Practices

### Production Workflow

1. **Pre-show Setup:**
   - Load all media into rundown with transitions
   - Test each entry before going live
   - Set global volume to appropriate broadcast level

2. **During Show:**
   - Use rundown for primary playback control
   - Use media module for ad-hoc content
   - Monitor Active Producers panel

3. **Emergency Playback:**
   - Keep media module visible for quick access
   - Use CUE for instant-start media
   - Know your emergency graphics locations

### Performance Optimization

- **Use appropriate codecs**: HAP for alpha channel, DNxHD for quality
- **Organize folders**: Group related content for faster browsing
- **Pre-cue key media**: Load important clips to CUE before needed
- **Monitor Active Producers**: Don't run unnecessary loops

### Channel and Layer Strategy

**Typical Layout:**
- **Layer 0-9**: Background media and videos
- **Layer 10-19**: Lower thirds and static graphics
- **Layer 20-29**: Full-screen graphics
- **Layer 30+**: Emergency messages and overlays

**Multiple Channels:**
- **Channel 1**: Main program output
- **Channel 2**: Preview/monitor output
- **Channel 3**: Multiviewer or return feed

:::tip
Document your channel/layer strategy and share with your team for consistent operation.
:::

## Integration with Rundowns

Media added to rundowns becomes a **Command Block** with the following properties:

**Stored Configuration:**
- Media file path
- Channel and layer
- Transition in/out settings
- Loop, delay, duration settings
- Advanced parameters (in frame, length, filter)

**Execution:**
- Triggers instantly when rundown entry is executed
- All settings applied automatically
- Can be grouped with other commands
- Supports keyboard shortcuts and companion triggers

**Benefits:**
- Repeatable sequences
- Consistent timing
- Pre-configured transitions
- Team collaboration (shared rundown files)

---

## Summary

The Media module is the foundation of 7CG's content playback capabilities. Master it to:

- Efficiently manage large media libraries
- Create smooth, professional transitions
- Monitor multiple simultaneous playback streams
- Build reliable, repeatable rundown sequences
- Execute flawless live productions

For advanced usage, combine the Media module with Lower Thirds, Bible, and Lyrics modules to create comprehensive broadcast graphics workflows.
