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
