import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Professional Rundown Management',
    Svg: require('@site/static/img/teardown.svg').default,
    description: (
      <>
        Plan and execute broadcast shows with powerful rundown sequences.
        Control media playback, lower thirds, graphics, and automation with precision timing.
      </>
    ),
  },
  {
    title: 'Rich Content Display',
    Svg: require('@site/static/img/content.svg').default,
    description: (
      <>
        Display Bible verses and song lyrics with multi-language support.
        Integrated hymnal system and scripture database for worship services and productions.
      </>
    ),
  },
  {
    title: 'CasparCG Integration',
    Svg: require('@site/static/img/media-player.svg').default,
    description: (
      <>
        Full control over CasparCG graphics servers with support for transitions,
        channel routing, and GDD-compliant templates with internationalization.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
