import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
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
        <span className={styles.heroEyebrow}>
          <Translate
            id="homepage.hero.eyebrow"
            description="Small uppercase label above the hero title">
            Broadcast Graphics Control
          </Translate>
        </span>
        <Heading as="h1" className={styles.heroTitle}>
          7CG
        </Heading>
        <p className={styles.heroTagline}>
          <Translate
            id="homepage.hero.tagline"
            description="Tagline under the hero title">
            Professional CasparCG controller for church and broadcast productions. Rundowns, lyrics, Bible, lower thirds, all in one place.
          </Translate>
        </p>
        <Link className={styles.heroBtn} to="/docs/intro">
          <Translate
            id="homepage.hero.cta"
            description="Primary call-to-action button in the hero">
            Get Started →
          </Translate>
        </Link>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({
        id: 'homepage.meta.title',
        message: 'Professional Broadcast Graphics Control',
        description: 'Homepage browser tab title',
      })}
      description={translate({
        id: 'homepage.meta.description',
        message:
          'Professional CasparCG control application for broadcast graphics. Manage rundowns, lower thirds, media playback, Bible verses, and song lyrics for church and broadcast productions.',
        description: 'Homepage meta description for SEO',
      })}>
      <HeroSection />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
