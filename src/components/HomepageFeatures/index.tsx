import type {ReactNode} from 'react';
import Translate from '@docusaurus/Translate';
import {
  OrderDetails,
  Book,
  TextCreation,
  PlayFilledAlt,
  ConnectReference,
  Workspace,
} from '@carbon/icons-react';
import styles from './styles.module.css';

type FeatureItem = {
  Icon: React.ComponentType<{size?: number; fill?: string}>;
  title: ReactNode;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    Icon: OrderDetails,
    title: (
      <Translate id="homepage.feature.rundown.title">Rundown Control</Translate>
    ),
    description: (
      <Translate id="homepage.feature.rundown.description">
        Build and execute show rundowns block by block. Trigger graphics on cue, target specific items from Companion, and export entries to video.
      </Translate>
    ),
  },
  {
    Icon: Book,
    title: (
      <Translate id="homepage.feature.bible.title">Bible & Lyrics</Translate>
    ),
    description: (
      <Translate id="homepage.feature.bible.description">
        Display Bible passages and song lyrics on air. Preview verses before inserting and control how many lines appear on screen at a time.
      </Translate>
    ),
  },
  {
    Icon: TextCreation,
    title: (
      <Translate id="homepage.feature.lowerthirds.title">Lower Thirds</Translate>
    ),
    description: (
      <Translate id="homepage.feature.lowerthirds.description">
        Animate lower thirds, credits, QR codes, and overlays, each with its own CasparCG layer, transition settings, and live preview.
      </Translate>
    ),
  },
  {
    Icon: PlayFilledAlt,
    title: (
      <Translate id="homepage.feature.media.title">Media Playback</Translate>
    ),
    description: (
      <Translate id="homepage.feature.media.description">
        Playout video and audio through CasparCG with per-channel control, layer occupancy monitoring, and real-time connection status.
      </Translate>
    ),
  },
  {
    Icon: ConnectReference,
    title: (
      <Translate id="homepage.feature.companion.title">
        Companion Integration
      </Translate>
    ),
    description: (
      <Translate id="homepage.feature.companion.description">
        Pair Bitfocus Companion devices via PIN. Trigger rundown items, change on-air colours, and see live feedbacks on physical buttons.
      </Translate>
    ),
  },
  {
    Icon: Workspace,
    title: (
      <Translate id="homepage.feature.workspaces.title">
        Flexible Workspaces
      </Translate>
    ),
    description: (
      <Translate id="homepage.feature.workspaces.description">
        {"Drag modules into any column layout, hide what you don't need, and save named presets for different operators or productions."}
      </Translate>
    ),
  },
];

function Feature({Icon, title, description}: FeatureItem) {
  return (
    <div className={styles.feature}>
      <div className={styles.iconWrap}>
        <Icon size={96} fill="url(#featureGradient)" />
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <svg width="0" height="0" className={styles.gradientDefs} aria-hidden="true">
        <defs>
          <linearGradient id="featureGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgb(185, 99, 208)" />
            <stop offset="100%" stopColor="rgb(115, 218, 234)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container">
        <div className={styles.sectionLabel}>
          <Translate id="homepage.features.eyebrow">Capabilities</Translate>
        </div>
        <h2 className={styles.sectionHeading}>
          <Translate id="homepage.features.heading">
            Everything you need, live.
          </Translate>
        </h2>

        <div className={styles.grid}>
          {FeatureList.map((item, i) => (
            <Feature key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
