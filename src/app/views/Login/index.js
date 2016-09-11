import React, { Component } from 'react';
import Helmet from 'react-helmet';

import config from 'app/config';
import DefaultLayout from 'app/layouts/Default';

import styles from './styles.styl';


export default class LoginView extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <DefaultLayout className={styles.root}>
        <Helmet title="Login | UTS: HELPS Booking System" />
        <form method="POST" action={`/api/sso/login?client=${config.sso.client}`}>
          <h1>Login</h1>
          <label htmlFor="username">Staff or student number</label>
          <input type="text" id="username" name="username" autoFocus />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <a href="https://email.itd.uts.edu.au/webapps/myaccount/passwordreset/" target="_blank">Forgot password?</a>
          <input type="submit" value="Login" />
        </form>
      </DefaultLayout>
    );
  }
}
