import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import useThemeContext from '@theme/hooks/useThemeContext'; //

const FeatureList = [
  {
    title: 'Build it',
    Img: require('../../static/img/FullBoards.png').default,
    description: (
      <>
        Assemble the 6 unique plates to form a universe cube by soldering the edges of each of them.
      </>
    ),
  },
  {
    title: 'Program it',
    mayChange : true,
    Img: require('../../static/img/Arduino_Logo.png').default,
    description: (
      <>
        Inside the cube is the CH552, a cheap but powerful microcontroller that can be programmed with the arduino framework.
      </>
    ),
  },
  {
    title: 'Touch it',
    Img: require('../../static/img/FullCube.png').default,
    description: (
      <>
        Once assembled and programmed, all that remains is to touch it and enjoy the experience.
      </>
    ),
  },
];

function Feature({Img,mayChange, title, description}) {
  const { isDarkTheme } = useThemeContext();
  const change = mayChange && !isDarkTheme;
  return (
    <div className={clsx('col col--4')}>
      <div className={"text--center"}>
        <img className={styles.featureSvg}  style={change?{filter:"invert(1)"}:{}} src={Img} alt={title}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
