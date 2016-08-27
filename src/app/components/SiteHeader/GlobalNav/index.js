import React from 'react';

import logoImg from 'app/assets/images/uts.png';

import styles from './styles.styl';


const links = [
  {
    children: 'Future Students',
    to: 'https://www.uts.edu.au/future-students',
  },
  {
    children: 'Current Students',
    to: 'https://www.uts.edu.au/current-students',
  },
  {
    children: 'Research and Teaching',
    to: 'https://www.uts.edu.au/research-and-teaching',
  },
  {
    children: 'Partners and Community',
    to: 'https://www.uts.edu.au/partners-and-community',
  },
];

const GlobalNav = () => (
  <nav className={styles.root}>
    <div className={styles.wrapper}>
      <a href="https://www.uts.edu.au/" target="_blank">
        <img className={styles.logo} src={logoImg} alt="UTS" />
      </a>
    </div>
    {links.map(({ to, children }) => (
      <a key={to} className={styles.item} href={to} target="_blank">
        <span className={styles.text}>{children}</span>
      </a>
    ))}
  </nav>
);

export default GlobalNav;
