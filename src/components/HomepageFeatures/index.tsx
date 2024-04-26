import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  href: string;
  webp: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Basic Integration: Guide',
    href: '/docs/Introduction',
    webp: '/img/integration.webp',
    description: (
      <>
        Get going with TINAD in 5 minutes
      </>
    ),
  },
  {
    title: 'Advanced Configuration',
    href: '/docs/advanced',
    webp: '/img/wrenches.webp',
    description: (
      <>
        Many ways to configure your notifications
      </>
    ),
  },
  {
    title: 'API Reference',
    href: '/ApiDocs',
    webp: '/img/api.webp',
    description: (
      <>
        All about the REST API. 
      </>
    ),
  },
];

function Feature({title, href, webp, description}: FeatureItem) {
  return (
    <a href={href} className="col col--4" style={{paddingTop:'40px'}}>
      <div className="text--center">
        <img src={webp} width="150" height="150" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </a>
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
