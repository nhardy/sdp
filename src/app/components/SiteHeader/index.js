import React, { Component } from 'react';
import { Link } from 'react-router';
import { Sticky } from 'react-sticky';
import cx from 'classnames';

import * as appPropTypes from 'app/components/propTypes';
import FontAwesome from 'app/components/FontAwesome';

import Nav from './Nav';
import styles from './styles.styl';
import utsLogo from 'app/assets/images/uts.png';


const utsNav = [
  {
    description: 'Future Students',
    href: 'https://www.uts.edu.au/future-students',
  },
  {
    description: 'Current Students',
    href: 'https://www.uts.edu.au/current-students',
  },
  {
    description: 'Research and Teaching',
    href: 'https://www.uts.edu.au/research-and-teaching',
  },
  {
    description: 'Partners and Community',
    href: 'https://www.uts.edu.au/partners-and-community',
  },
];
const dismissEvents = ['click', 'touchstart'];

export default class SiteHeader extends Component {
  static contextTypes = {
    location: appPropTypes.location,
  };

  componentDidMount() {
    dismissEvents.forEach((type) => window.addEventListener(type, this.handleDismiss));
  }

  componentWillUnmount() {
    dismissEvents.forEach((type) => window.removeEventListener(type, this.handleDismiss));
  }

  handleDismiss = (e) => {
    if (!this.refs.toggle.checked) return;
    if (this.refs.sidebar.contains(e.target)) return;
    if (this.refs.label.contains(e.target)) return;
    if (this.refs.toggle.contains(e.target)) return;
    this.refs.toggle.checked = false;
  };

  render() {
    return (
      <header className={styles.root}>
        <div className={styles.column}>
          <nav className={styles.top}>
            <div className={styles.logoWrapper}>
              <a href="https://www.uts.edu.au/" target="_blank">
                <img className={styles.logo} src={utsLogo} alt="UTS" />
              </a>
            </div>
            {utsNav.map(({ description, href }) => (
              <a key={description} className={styles.topNavItem} href={href} target="_blank">
                <span className={styles.topNavText}>{description}</span>
              </a>
            ))}
          </nav>
        </div>
        <Sticky className={styles.sticky} stickyClassName={styles.isSticky}>
          <div className={cx(styles.column, styles.navBar)}>
            <label htmlFor="sidebarToggle" className={styles.hamburger} ref="label">
              <FontAwesome className="fa-bars" />
            </label>
            <span className={styles.siteName}>
              <Link to="/">UTS: <span className={styles.helps}>HELPS</span> <span className={styles.bookingSystem}>Booking System</span></Link>
            </span>
            <Nav className={styles.nav} />
          </div>
        </Sticky>
        <input
          id="sidebarToggle"
          type="checkbox"
          className={styles.checkbox}
          ref="toggle" />
        <aside className={styles.aside} ref="sidebar">
          <label className={styles.close} htmlFor="sidebarToggle">
            <FontAwesome className="fa-close" />
          </label>
          <Nav mode="vertical" />
        </aside>
      </header>
    );
  }
}
