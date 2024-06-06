import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Internet of Things',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      Practice using Arduino, ESP, NodeMCU, Raspberry. Protocol HTTP, WiFi, MQTT, LoRa, LiFi 
      </>
    ),
  },
  {
    title: 'Mobile Development',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Practice and Learning using Java, Kotin. Fundamental using Jetpack Component, Develop Mobile Application using design pattern MVP, MVVM and MVI. Practice Kotlin Multi Platform
      </>
    ),
  },
  {
    title: 'DevOps',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      Practice and Learn Virtualization, Containerize, Automation, Cloud, Monitoring and Security
      </>
    ),
  }
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

export default function HomepageFeatures(): JSX.Element {
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
