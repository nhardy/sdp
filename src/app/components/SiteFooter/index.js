import React from 'react';

import styles from './styles.styl';


const SiteFooter = () => (
  <footer className={styles.root}>
    <div className={styles.column}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h3 className={styles.heading}>
            <a className={styles.link} href="https://www.uts.edu.au/about" target="_blank">About Us</a>
          </h3>
          <ul>
            <li><a href="https://www.uts.edu.au/about/university" target="_blank">The University</a></li>
            <li><a href="https://www.uts.edu.au/about/maps-and-facilities" target="_blank">Maps and facilities</a></li>
            <li><a href="https://www.uts.edu.au/about/uts-governance" target="_blank">UTS governance</a></li>
            <li><a href="https://www.uts.edu.au/about/faculties" target="_blank">Faculties</a></li>
          </ul>
          <ul>
            <li><a href="https://www.uts.edu.au/about/utsweb-statements/privacy-statement" target="_blank">Privacy statement</a></li>
            <li><a href="https://www.uts.edu.au/about/utsweb-statements/disclaimer" target="_blank">Disclaimer</a></li>
          </ul>
        </div>
        <div className={styles.info}>
          <h3 className={styles.heading}>
            <a className={styles.link} href="https://www.lib.uts.edu.au/" target="_blank">Library</a>
          </h3>
          <ul>
            <li><a href="https://www.uts.edu.au/library-catalogue" target="_blank">Search catalogue</a></li>
            <li><a href="https://www.lib.uts.edu.au/events" target="_blank">What's on</a></li>
            <li><a href="https://www.uts.edu.au/library-help" target="_blank">Help and resources</a></li>
          </ul>
        </div>
        <div className={styles.info}>
          <h3 className={styles.heading}>
            <a className={styles.link} href="https://www.uts.edu.au/uts-newsroom">Newsroom</a>
          </h3>
          <ul>
            <li><a href="https://www.uts.edu.au/uts-events" target="_blank">Events</a></li>
            <li><a href="https://www.uts.edu.au/find-expert" target="_blank">Find an expert</a></li>
            <li><a href="https://www.uts.edu.au/newsroom-media-centre" target="_blank">Media centre</a></li>
          </ul>
        </div>
        <div className={styles.info}>
          <h3 className={styles.heading}>
            <a className={styles.link} href="https://www.uts.edu.au/staff-connect" target="_blank">Staff</a>
          </h3>
          <ul>
            <li><a href="https://staff.uts.edu.au/" target="_blank">Staff Connect</a></li>
            <li><a href="https://www.uts.edu.au/webmail" target="_blank">Webmail</a></li>
            <li><a href="https://www.uts.edu.au/staff-directory" target="_blank">Staff Directory</a></li>
          </ul>
          <ul>
            <li><a href="https://www.uts.edu.au/staff/jobs-uts/working-uts" target="_blank">Jobs at UTS</a></li>
          </ul>
        </div>
        <div className={styles.info}>
          <h3 className={styles.heading}>
            <a className={styles.link} href="https://www.uts.edu.au/" target="_blank">University of Technology Sydney</a>
          </h3>
          <p>
            <strong>City campus</strong>
            <br />
            <span>15 Broadway</span>
            <br />
            <span>Ultimo NSW 2007</span>
          </p>
          <span>{(new Date()).getFullYear()}</span>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
