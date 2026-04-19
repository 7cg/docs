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
        Plan and execute shows with a rundown built for live operation.
        Trigger the current item, target specific items from Companion, and export supported entries to video.
      </>
    ),
  },
  {
    title: 'Flexible Operator Workspaces',
    Svg: require('@site/static/img/content.svg').default,
    description: (
      <>
        Rearrange modules into task-focused layouts, hide what an operator does not need,
        and save named presets for different productions or volunteer roles.
      </>
    ),
  },
  {
    title: 'Companion and CasparCG Control',
    Svg: require('@site/static/img/media-player.svg').default,
    description: (
      <>
        Control CasparCG with channel-aware graphics, paired Companion devices,
        and broadcast-focused template workflows for live productions.
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
