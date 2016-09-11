import querystring from 'querystring';

import React, { Component } from 'react';
import Helmet from 'react-helmet';

import config from 'app/config';
import * as appPropTypes from 'app/components/propTypes';
import DefaultLayout from 'app/layouts/Default';
import Form from 'app/components/Form';


export default class LoginView extends Component { // eslint-disable-line react/prefer-stateless-function
  static contextTypes = {
    location: appPropTypes.location,
  };

  render() {
    const loginParams = {
      client: config.sso.client,
      redirect: this.context.location.query.redirect,
    };
    const loginUrl = `/api/sso/login?${querystring.stringify(loginParams)}`;

    return (
      <DefaultLayout>
        <Helmet title="Login | UTS: HELPS Booking System" />
        <Form method="POST" action={loginUrl}>
          <h1>Login</h1>
          <label htmlFor="username">Staff or student number</label>
          <input type="text" id="username" name="username" autoFocus />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <a href="https://email.itd.uts.edu.au/webapps/myaccount/passwordreset/" target="_blank">Forgot password?</a>
          <input type="submit" value="Login" />
        </Form>
      </DefaultLayout>
    );
  }
}
