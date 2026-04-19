import type {ReactNode} from 'react';
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
  title: string;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    Icon: OrderDetails,
    title: 'Rundown Control',
    description:
      'Build and execute show rundowns block by block. Trigger graphics on cue, target specific items from Companion, and export entries to video.',
  },
  {
    Icon: Book,
    title: 'Bible & Lyrics',
    description:
      'Display Bible passages and song lyrics on air. Preview verses before inserting and control how many lines appear on screen at a time.',
  },
  {
    Icon: TextCreation,
    title: 'Lower Thirds',
    description:
      'Animate lower thirds, credits, QR codes, and overlays — each with its own CasparCG layer, transition settings, and live preview.',
  },
  {
    Icon: PlayFilledAlt,
    title: 'Media Playback',
    description:
      'Playout video and audio through CasparCG with per-channel control, layer occupancy monitoring, and real-time connection status.',
  },
  {
    Icon: ConnectReference,
    title: 'Companion Integration',
    description:
      'Pair Bitfocus Companion devices via PIN. Trigger rundown items, change on-air colours, and see live feedbacks on physical buttons.',
  },
  {
    Icon: Workspace,
    title: 'Flexible Workspaces',
    description:
      "Drag modules into any column layout, hide what you don't need, and save named presets for different operators or productions.",
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
      {/* Shared gradient definition, referenced by every feature icon */}
      <svg width="0" height="0" className={styles.gradientDefs} aria-hidden="true">
        <defs>
          <linearGradient id="featureGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgb(185, 99, 208)" />
            <stop offset="100%" stopColor="rgb(115, 218, 234)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container">
        <div className={styles.sectionLabel}>Capabilities</div>
        <h2 className={styles.sectionHeading}>
          Everything you need, live.
        </h2>

        <div className={styles.grid}>
          {FeatureList.map((item) => (
            <Feature key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
