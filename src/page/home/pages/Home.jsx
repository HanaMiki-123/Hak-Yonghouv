import React from 'react';
import styles from '../styles/App.module.css';

import compo_latest from '../../../hooks/components/compo_latest.json';

import image1 from '../assets/image1.png';

const Home = () => {
  return (
    <>
      <div className={styles.Home}>
        {/* Home */}
        <section className={styles.home}>
          <img src={image1} alt="background" />
          <div className={styles.container}>

          </div>
        </section>
        <div className={styles.Container}>

          {/* News */}
          <div className={styles.news}>
            <h1 style={{ textAlign: 'center' }}>NEWS</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
