import querystring from 'querystring';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { routerShape } from 'react-router/lib/PropTypes';
import Helmet from 'react-helmet';
import { get } from 'lodash-es';

import config from 'app/config';
import * as appPropTypes from 'app/components/propTypes';
import DefaultLayout from 'app/layouts/Default';
import Form from 'app/components/Form';

import styles from './styles.styl';


@connect(state => ({
  loaded: state.sso.loaded,
  user: state.sso.user,
}))
@withRouter
export default class LoginView extends Component {
  static propTypes = {
    loaded: PropTypes.bool,
    user: appPropTypes.user,
    router: routerShape,
  };

  static contextTypes = {
    location: appPropTypes.location,
  };

  state = {};

  componentWillReceiveProps(nextProps) {
    if (!nextProps.user) return;
    this.props.router.replace(this.getRedirect());
    this.setState({ willRedirect: true });
  }

  getRedirect = () => {
    return get(this.context.location, 'query.redirect', '/');
  };

  render() {
    const { loaded } = this.props;
    const { willRedirect } = this.state;
    const { location } = this.context;
    const error = get(location, 'query.error');
    const loginParams = {
      client: config.sso.client,
      redirect: this.getRedirect(),
    };
    const loginUrl = `/api/sso/login?${querystring.stringify(loginParams)}`;

    return (
      <DefaultLayout>
        <Helmet title="Login | UTS: HELPS Booking System" />
        {loaded && !willRedirect && (
          <Form method="POST" action={loginUrl}>
            <h1>Login</h1>
            {error && (
              <div className={styles.error}>
                <span>{error}</span>
              </div>
            )}
            <label htmlFor="username">Staff or student number</label>
            <input type="text" id="username" name="username" autoFocus />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <div className={styles.forgot}>
              <a href="https://email.itd.uts.edu.au/webapps/myaccount/passwordreset/" target="_blank">Forgot password?</a>
            </div>
            <input type="submit" value="Login" />
          </Form>
        )}
      </DefaultLayout>
    );
  }
}
