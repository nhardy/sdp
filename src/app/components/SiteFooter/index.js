import React from 'react';

import styles from './styles.styl';


const SiteFooter = () => (
  <footer className={styles.root}>
    <div className={styles.column}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <span>About Us</span>
        </div>
        <div className={styles.info}>
          <span>Library</span>
        </div>
        <div className={styles.info}>
          <span>Newsroom</span>
        </div>
        <div className={styles.info}>
          <span>Staff</span>
        </div>
        <div className={styles.info}>
          <span>University of Technology Sydney</span>
          <span>{(new Date()).getFullYear()}</span>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
