import React, { PropTypes } from 'react';
import { StickyContainer } from 'react-sticky';
import cx from 'classnames';

import SiteFooter from 'app/components/SiteFooter';
import SiteHeader from 'app/components/SiteHeader';
import Profile from 'app/components/SiteHeader/Profile';

import styles from './styles.styl';


const DefaultLayout = ({ children, className }) => (
  <StickyContainer className={styles.root}>
    <SiteHeader />
    <div className={styles.profileContainer}>
      <div className={styles.profileWrapper}>
        <Profile />
      </div>
    </div>
    <main className={cx(styles.main, className)}>
      {children}
    </main>
    <SiteFooter />
  </StickyContainer>
);

DefaultLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default DefaultLayout;
