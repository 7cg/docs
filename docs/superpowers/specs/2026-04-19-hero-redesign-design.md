---
name: Hero Redesign
description: Redesign of the docs landing page hero with animated gradient mesh background and ghost logo watermark layout
type: project
---

# Hero Redesign — Design Spec

**Date:** 2026-04-19

## Overview

Replace the default Docusaurus `hero--primary` banner on the landing page with a custom hero component featuring an animated gradient mesh background and a ghost logo watermark layout. The design draws directly from the 7CG logo's purple→cyan gradient and adapts between light and dark themes.

---

## Visual Design

### Background

Animated radial gradient mesh — three overlapping radial gradients positioned at the left, right, and bottom of the hero. They scale and rotate gently on a slow loop (~9s), creating a living, ambient feel without being distracting.

| Token | Dark mode | Light mode |
|---|---|---|
| Base background | `#0e0818` | `#f8f4ff` |
| Blob 1 (left) | `rgba(185,99,208, 0.50)` | `rgba(185,99,208, 0.18)` |
| Blob 2 (right) | `rgba(115,218,234, 0.32)` | `rgba(115,218,234, 0.15)` |
| Blob 3 (bottom) | `rgba(150,80,200, 0.25)` | `rgba(150,80,200, 0.10)` |

Animation: `scale(1→1.08) rotate(0→2deg)` over 9s, `ease-in-out`, `infinite alternate`. Suppressed via `prefers-reduced-motion`.

### Layout

Left-aligned text column (max ~420px wide), ghost logo watermark anchored to the right edge and bleeding ~40px off-screen, vertically centered. Hero height: `clamp(320px, 40vh, 480px)` — generous but not full-viewport.

### Ghost logo watermark

The `logo.svg` SVG, positioned absolute right `-40px`, centered vertically, width ~320px. Fill overridden to white (dark mode, opacity 0.10) or the brand purple `#7b3fa0` (light mode, opacity 0.12). No gradient fill — flat color keeps it readable as a watermark.

### Text content

```
[eyebrow]  BROADCAST GRAPHICS CONTROL   (11px, spaced, uppercase, purple tint)
[title]    7CG                           (48px, 800 weight, tight tracking)
[tagline]  Professional CasparCG...      (14px, muted, max 340px)
[cta]      Get Started →                 (button)
```

CTA button:
- Dark mode: frosted glass — `rgba(255,255,255,0.15)` bg, `rgba(255,255,255,0.3)` border, white text, `backdrop-filter: blur(8px)`
- Light mode: solid purple `#7b3fa0`, white text

### Theme variables

Also update `custom.css` to revert dark mode primary from cyan back to a brighter purple, since the hero is now self-contained and the primary color only affects links/nav/buttons in the rest of the site:

- Dark mode `--ifm-color-primary`: `hsl(287, 54%, 65%)` (bright purple, readable on dark backgrounds)

---

## Implementation

### Files to change

| File | Change |
|---|---|
| `src/pages/index.tsx` | Replace `HomepageHeader` with new `HeroSection` component |
| `src/pages/index.module.css` | Add all hero-specific styles |
| `src/css/custom.css` | Revert dark mode primary to bright purple |

### Component structure

```tsx
// index.tsx
function HeroSection() {
  return (
    <header className={styles.hero}>
      <img src="/img/logo.svg" className={styles.heroWatermark} aria-hidden="true" />
      <div className={styles.heroContent}>
        <span className={styles.heroEyebrow}>Broadcast Graphics Control</span>
        <Heading as="h1" className={styles.heroTitle}>7CG</Heading>
        <p className={styles.heroTagline}>…</p>
        <Link className={styles.heroBtn} to="/docs/intro">Get Started →</Link>
      </div>
    </header>
  );
}
```

The watermark logo is an `<img>` (not inline SVG) so its fill can be overridden via CSS `filter` in dark mode rather than requiring two copies of the SVG. Use `filter: brightness(0) invert(1)` to make it white in dark mode; `filter: none` in light mode with a CSS `opacity` and a purple tint via `filter: brightness(0) saturate(100%) invert(25%) sepia(60%) saturate(600%) hue-rotate(260deg)`.

### CSS approach

All styles in `index.module.css`. Use `[data-theme='dark'] .hero` selectors for theme variants — keeps everything co-located.

No JS required. Animation is pure CSS. `prefers-reduced-motion` disables the `@keyframes` via `animation: none`.

---

## Out of scope

- Changing the `HomepageFeatures` section below the hero
- Modifying the navbar or footer
- Adding a second CTA or feature highlight inside the hero
