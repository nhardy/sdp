import React from 'react';
import cx from 'classnames';

import FontAwesome from 'app/components/FontAwesome';

import styles from './styles.styl';


const SiteFooter = () => (
  <footer className={styles.root}>
    <div className={styles.column}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h3 className={styles.heading}>
            <a className={styles.headingLink} href="https://www.uts.edu.au/about" target="_blank">About Us</a>
          </h3>
          <ul>
            <li><a href="https://www.uts.edu.au/about/university" target="_blank">The University</a></li>
            <li><a href="https://www.uts.edu.au/about/maps-and-facilities" target="_blank">Maps and facilities</a></li>
            <li><a href="https://www.uts.edu.au/about/uts-governance" target="_blank">UTS governance</a></li>
            <li><a href="https://www.uts.edu.au/about/faculties" target="_blank">Faculties</a></li>
            <li><a href="https://www.uts.edu.au/about/utsweb-statements/privacy-statement" target="_blank">Privacy statement</a></li>
            <li><a href="https://www.uts.edu.au/about/utsweb-statements/disclaimer" target="_blank">Disclaimer</a></li>
          </ul>
        </div>
        <div className={styles.info}>
          <h3 className={styles.heading}>
            <a className={styles.headingLink} href="https://www.lib.uts.edu.au/" target="_blank">Library</a>
          </h3>
          <ul>
            <li><a href="https://www.uts.edu.au/library-catalogue" target="_blank">Search catalogue</a></li>
            <li><a href="https://www.lib.uts.edu.au/events" target="_blank">What's on</a></li>
            <li><a href="https://www.uts.edu.au/library-help" target="_blank">Help and resources</a></li>
          </ul>
        </div>
        <div className={styles.info}>
          <h3 className={styles.heading}>
            <a className={styles.headingLink} href="https://www.uts.edu.au/uts-newsroom">Newsroom</a>
          </h3>
          <ul>
            <li><a href="https://www.uts.edu.au/uts-events" target="_blank">Events</a></li>
            <li><a href="https://www.uts.edu.au/find-expert" target="_blank">Find an expert</a></li>
            <li><a href="https://www.uts.edu.au/newsroom-media-centre" target="_blank">Media centre</a></li>
          </ul>
        </div>
        <div className={styles.info}>
          <h3 className={styles.heading}>
            <a className={styles.headingLink} href="https://www.uts.edu.au/staff-connect" target="_blank">Staff</a>
          </h3>
          <ul>
            <li><a href="https://staff.uts.edu.au/" target="_blank">Staff Connect</a></li>
            <li><a href="https://www.uts.edu.au/webmail" target="_blank">Webmail</a></li>
            <li><a href="https://www.uts.edu.au/staff-directory" target="_blank">Staff Directory</a></li>
            <li><a href="https://www.uts.edu.au/staff/jobs-uts/working-uts" target="_blank">Jobs at UTS</a></li>
          </ul>
        </div>
        <div className={cx(styles.info, styles.double)}>
          <h3 className={styles.lesserHeading}>
            <a className={styles.headingLink} href="https://www.uts.edu.au/" target="_blank">University of Technology Sydney</a>
          </h3>
          <p>
            <strong>City campus</strong>
            <br />
            <span>15 Broadway</span>
            <br />
            <span>Ultimo NSW 2007</span>
          </p>
        </div>
        <div className={cx(styles.info, styles.full, styles.secondaryInfo)}>
          <div>
            <h3 className={styles.lesserHeading}>Telephone</h3>
            <p>+61 2 9514 2000</p>
          </div>
          <div>
            <h3 className={styles.lesserHeading}>Student inquiries</h3>
            <p>ask.uts.edu.au</p>
          </div>
          <div>
            <h3 className={styles.lesserHeading}>Postal address</h3>
            <p>P.O. Box 123, Broadway, NSW 2007</p>
          </div>
          <div className={styles.social}>
            <a className={styles.socialLink} href="http://facebook.com/UTSEngage"><FontAwesome className="fa-facebook-square" /></a>
            <a className={styles.socialLink} href="http://twitter.com/utsengage"><FontAwesome className="fa-twitter" /></a>
            <a className={styles.socialLink} href="http://instagram.com/utsengage"><FontAwesome className="fa-instagram" /></a>
            <a className={styles.socialLink} href="https://www.youtube.com/user/utschannel"><FontAwesome className="fa-youtube-play" /></a>
            <a className={styles.socialLink} href="http://linkedin.com/company/166678"><FontAwesome className="fa-linkedin-square" /></a>
            <a className={styles.link} href="http://www.uts.edu.au/about/contacts/uts-contacts">See all contacts</a>
          </div>
        </div>
        <div className={cx(styles.info, styles.full, styles.footnote)}>
          <p>
            © Copyright {(new Date()).getFullYear()} 500DollarHdWinna
            <br />
            The page is authorised by Money Bags
          </p>
          <a className={styles.github} href="https://www.github.com/nhardy/sdp"><FontAwesome className="fa-github" /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
