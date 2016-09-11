import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import config from 'app/config';
import * as appPropTypes from 'app/components/propTypes';


@connect((state) => ({
  loaded: state.sso.loaded,
  user: state.sso.user,
}))
export default class Profile extends Component {
  static contextTypes = {
    location: appPropTypes.location,
  };

  static propTypes = {
    loaded: PropTypes.bool,
    user: appPropTypes.user,
  };

  render() {
    const { loaded, user } = this.props;

    // Avoid rendering until we know the user is either logged in or logged out
    if (!loaded) return null;

    const logoutLink = `/api/sso/logout?client=${config.sso.client}&redirect=${encodeURIComponent(this.context.location.pathname)}`;

    return (
      <div>
        <ul>
          {!user && <li><a href="/login">Login</a></li>}
          {user && <li>Hi, {user.firstName}</li>}
          {user && <li><a href={logoutLink}>Logout</a></li>}
        </ul>
      </div>
    );
  }
}
