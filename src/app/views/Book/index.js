import querystring from 'querystring';

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import config from 'app/config';
import * as appPropTypes from 'app/components/propTypes';
import DefaultLayout from 'app/layouts/Default';
import Form from 'app/components/Form';


export default class LoginView extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {

  };

  submit = () => {};

  render() {
    return (
      <DefaultLayout>
        <Helmet title="Book | UTS: HELPS Booking System" />
        <Form>
          <h1>Book</h1>

          <input type="button" value="Book" onClick={this.submit} />
        </Form>
      </DefaultLayout>
    );
  }
}
