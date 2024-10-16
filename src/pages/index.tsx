import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import React, { useEffect } from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function HomepageContent() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://asciinema.org/a/655184.js";
    script.id = "asciicast-655184";
    script.async = true;
    document.getElementById('asciinema-container').appendChild(script);

    return () => {
      // Cleanup function to remove the script when component unmounts
      const existingScript = document.getElementById('asciicast-655184');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="container margin-vert--xl">
      <div className="row">
        <div className="col col--8 col--offset-2">
          <h2>Welcome to Cano Suite</h2>
          <p>
            Cano Suite is a collection of powerful tools designed for developers. It includes Cano (a VIM-like text editor), 
            Canoscript (a scripting language), Canosh (a shell), Canoutils (Unix core utilities), and more.
          </p>
          <h3>Cano Demo</h3>
          <div id="asciinema-container" className="asciinema-container"></div>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The official documentation for the Cano suite of projects.">
      <HomepageHeader />
      <main>
        <HomepageContent />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
