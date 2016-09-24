import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import cx from 'classnames';

import * as appPropTypes from 'app/components/propTypes';

import styles from './styles.styl';


const SiteHeaderNav = ({ className, items, mode = 'horizontal' }, { location }) => {
  return (
    <nav className={cx(mode === 'horizontal' ? styles.horizontal : styles.vertical, className)}>
      <ul className={styles.list}>
        {items.map(({ to, target, children }) => (
          <li key={to} className={cx(styles.item, { [styles.active]: to.startsWith(location.pathname) })}>
            <Link className={styles.link} to={to} target={target}>{children}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

SiteHeaderNav.propTypes = {
  className: PropTypes.string,
  items: appPropTypes.links,
  mode: PropTypes.oneOf(['horizontal', 'vertical']),
};

SiteHeaderNav.contextTypes = {
  location: appPropTypes.location,
};

SiteHeaderNav.defaultProps = {
  items: [
    { to: 'http://www.ssu.uts.edu.au/helps/about.html', target: '_blank', children: 'HELPS HQ' },
    { to: 'https://servicedesk.uts.edu.au/CAisd/pdmweb.exe', target: '_blank', children: 'IT Service Desk' },
    { to: '/faq', children: 'FAQ' },
  ],
};

export default SiteHeaderNav;
