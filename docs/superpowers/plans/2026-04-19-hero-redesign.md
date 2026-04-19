# Hero Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the default Docusaurus hero banner with an animated gradient mesh background, ghost logo watermark, and left-aligned text layout — adapting between light and dark themes.

**Architecture:** The `HomepageHeader` component in `index.tsx` is replaced by a new `HeroSection` component. All hero styles live in `index.module.css` using `[data-theme='dark']` selectors for theme variants. The logo watermark is an `<img>` whose colour is controlled entirely via CSS `filter`. No JS or external dependencies needed.

**Tech Stack:** React + TypeScript (Docusaurus), CSS Modules, pure CSS animation

---

### Task 1: Fix dark-mode primary colour in `custom.css`

**Files:**
- Modify: `src/css/custom.css`

The dark-mode primary is currently set to cyan (`hsl(188,…)`), which the user disliked. Revert it to a bright purple that matches the logo and reads well on dark backgrounds.

- [ ] **Step 1: Replace the dark-mode block**

Open `src/css/custom.css` and replace the entire `[data-theme='dark']` block:

```css
/* Dark mode: bright purple from the logo gradient, readable on dark backgrounds. */
[data-theme='dark'] {
  --ifm-color-primary: hsl(287, 54%, 65%);
  --ifm-color-primary-dark: hsl(287, 54%, 58%);
  --ifm-color-primary-darker: hsl(287, 54%, 52%);
  --ifm-color-primary-darkest: hsl(287, 54%, 44%);
  --ifm-color-primary-light: hsl(287, 54%, 72%);
  --ifm-color-primary-lighter: hsl(287, 54%, 78%);
  --ifm-color-primary-lightest: hsl(287, 54%, 85%);
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.3);
}
```

(Remove the `--ifm-hero-text-color` line — the hero no longer uses Infima's hero classes.)

- [ ] **Step 2: Verify dev server reflects the change**

```bash
cd /home/joel/code/7cg/docs && npm start
```

Open http://localhost:3000 and toggle dark mode. Links, nav items, and sidebar headings should now be a vivid purple rather than cyan.

- [ ] **Step 3: Commit**

```bash
git add src/css/custom.css
git commit -m "fix: revert dark mode primary to bright purple"
```

---

### Task 2: Add hero styles to `index.module.css`

**Files:**
- Modify: `src/pages/index.module.css`

Replace the entire file content. The existing rules (`.heroBanner`, `.buttons`) are obsolete once the new component is in place.

- [ ] **Step 1: Replace `index.module.css`**

```css
.hero {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 clamp(24px, 6vw, 80px);
  min-height: clamp(320px, 40vh, 480px);
  background: #f8f4ff;
}

/* Animated gradient mesh — light mode */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 65% 100% at 10% 50%, rgba(185, 99, 208, 0.18) 0%, transparent 65%),
    radial-gradient(ellipse 55% 80%  at 90% 40%, rgba(115, 218, 234, 0.15) 0%, transparent 60%),
    radial-gradient(ellipse 45% 70%  at 50% 110%, rgba(150, 80, 200, 0.10) 0%, transparent 55%);
  animation: meshMove 9s ease-in-out infinite alternate;
}

@keyframes meshMove {
  from { transform: scale(1) rotate(0deg);    opacity: 0.9; }
  to   { transform: scale(1.08) rotate(2deg); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .hero::before { animation: none; }
}

/* Ghost logo watermark */
.heroWatermark {
  position: absolute;
  right: -40px;
  top: 50%;
  transform: translateY(-50%);
  width: clamp(200px, 28vw, 340px);
  height: auto;
  pointer-events: none;
  user-select: none;
  opacity: 0.12;
  /* Tint to brand purple in light mode */
  filter: brightness(0) saturate(100%) invert(27%) sepia(50%) saturate(700%) hue-rotate(255deg) brightness(0.85);
}

/* Content column */
.heroContent {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  max-width: 460px;
}

.heroEyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: hsl(287, 54%, 40%);
}

.heroTitle {
  font-size: clamp(36px, 6vw, 56px);
  font-weight: 800;
  letter-spacing: -1.5px;
  line-height: 1;
  color: #1a0a2e;
  margin: 0;
}

.heroTagline {
  font-size: 15px;
  line-height: 1.55;
  color: rgba(26, 10, 46, 0.6);
  margin: 0;
  max-width: 360px;
}

.heroBtn {
  display: inline-block;
  margin-top: 6px;
  padding: 11px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  background: hsl(287, 54%, 40%);
  color: #fff;
  text-decoration: none;
  transition: background 150ms ease;
}

.heroBtn:hover {
  background: hsl(287, 54%, 34%);
  color: #fff;
  text-decoration: none;
}

/* ── Dark mode overrides ─────────────────────────────────── */

[data-theme='dark'] .hero {
  background: #0e0818;
}

[data-theme='dark'] .hero::before {
  background:
    radial-gradient(ellipse 65% 100% at 10% 50%, rgba(185, 99, 208, 0.50) 0%, transparent 65%),
    radial-gradient(ellipse 55% 80%  at 90% 40%, rgba(115, 218, 234, 0.32) 0%, transparent 60%),
    radial-gradient(ellipse 45% 70%  at 50% 110%, rgba(150, 80, 200, 0.25) 0%, transparent 55%);
}

[data-theme='dark'] .heroWatermark {
  filter: brightness(0) invert(1);
  opacity: 0.10;
}

[data-theme='dark'] .heroEyebrow {
  color: rgba(185, 99, 208, 0.9);
}

[data-theme='dark'] .heroTitle {
  color: #fff;
}

[data-theme='dark'] .heroTagline {
  color: rgba(255, 255, 255, 0.62);
}

[data-theme='dark'] .heroBtn {
  background: rgba(255, 255, 255, 0.13);
  border: 1px solid rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(8px);
  color: #fff;
}

[data-theme='dark'] .heroBtn:hover {
  background: rgba(255, 255, 255, 0.22);
  color: #fff;
}

/* ── Responsive ──────────────────────────────────────────── */

@media (max-width: 768px) {
  .hero { padding: 48px 24px; }
  .heroWatermark { right: -60px; opacity: 0.07; }
}
```

- [ ] **Step 2: Verify the file saved without syntax errors**

```bash
cd /home/joel/code/7cg/docs && npm start
```

The dev server should compile with no CSS errors in the terminal.

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.module.css
git commit -m "style: add hero redesign CSS"
```

---

### Task 3: Replace `HomepageHeader` with `HeroSection` in `index.tsx`

**Files:**
- Modify: `src/pages/index.tsx`

- [ ] **Step 1: Replace the file content**

```tsx
import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HeroSection(): ReactNode {
  return (
    <header className={styles.hero}>
      <img
        src="/img/logo.svg"
        className={styles.heroWatermark}
        alt=""
        aria-hidden="true"
      />
      <div className={styles.heroContent}>
        <span className={styles.heroEyebrow}>Broadcast Graphics Control</span>
        <Heading as="h1" className={styles.heroTitle}>
          7CG
        </Heading>
        <p className={styles.heroTagline}>
          Professional CasparCG controller for church and broadcast productions.
          Rundowns, lyrics, Bible, lower thirds — all in one place.
        </p>
        <Link className={styles.heroBtn} to="/docs/intro">
          Get Started →
        </Link>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Professional Broadcast Graphics Control"
      description="Professional CasparCG control application for broadcast graphics. Manage rundowns, lower thirds, media playback, Bible verses, and song lyrics for church and broadcast productions.">
      <HeroSection />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
```

- [ ] **Step 2: Check for TypeScript errors**

```bash
cd /home/joel/code/7cg/docs && npx tsc --noEmit
```

Expected: no output (zero errors).

- [ ] **Step 3: Visually verify in the browser**

With `npm start` still running, open http://localhost:3000 and check:

- Ghost logo watermark visible on the right, bleeding off screen
- Animated mesh visible and moving slowly
- Left-aligned eyebrow, large "7CG" title, tagline, purple CTA button
- Toggle dark mode — background goes deep purple-black, mesh blobs intensify, button goes frosted glass
- Resize to mobile width (<768px) — layout remains readable, watermark fades back

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.tsx
git commit -m "feat: replace hero banner with animated gradient mesh layout"
```
