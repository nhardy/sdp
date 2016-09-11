import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import * as appPropTypes from 'app/components/propTypes';
import DefaultLayout from 'app/layouts/Default';
import Form from 'app/components/Form';
import Label from 'app/components/Form/Label';
import CheckboxWithLabel from 'app/components/Form/CheckboxWithLabel';


@connect((state) => ({
  user: state.sso.user,
}))
export default class SettingsView extends Component {
  static propTypes = {
    user: appPropTypes.user,
  };

  emailNotifications = (checked) => {
    // TODO: Call API
    console.log('SET emailNotifications:', checked);
  }

  smsNotifications = (checked) => {
    // TODO: Call API
    console.log('SET smsNotifications:', checked);
  }

  render() {
    const { user } = this.props;

    return (
      <DefaultLayout>
        <Helmet title="Login | UTS: HELPS Booking System" />
        <Form>
          <h1>Settings</h1>
          <Label htmlFor="name">Name:</Label>
          <input type="text" id="name" value={`${user.firstName} ${user.lastName}`} disabled />
          <Label htmlFor="email">Email:</Label>
          <input type="email" id="email" value={user.email} disabled />
          <Label htmlFor="name">Mobile:</Label>
          <input type="tel" id="mobile" value={user.mobile} />
          <CheckboxWithLabel onChange={this.emailNotifications}>Email Notifications:</CheckboxWithLabel>
          <CheckboxWithLabel onChange={this.smsNotifications}>SMS Notifications:</CheckboxWithLabel>
        </Form>
      </DefaultLayout>
    );
  }
}
