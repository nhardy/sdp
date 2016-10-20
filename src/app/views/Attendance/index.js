import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { routerShape } from 'react-router/lib/PropTypes';
import Helmet from 'react-helmet';

import DefaultLayout from 'app/layouts/Default';
import Form from 'app/components/Form';


// Mock attendance marking
@connect(null, {})
@withRouter
export default class AttendanceView extends Component {
  static propTypes = {
    router: routerShape,
  };

  submit = () => {
    this.props.router.push('/bookings');
  };

  render() {
    return (
      <DefaultLayout>
        <Helmet title="Attendance | UTS: HELPS Booking System" />
        <Form>
          <h1>Attendance</h1>
          <label htmlFor="code">Attendance code</label>
          <input type="text" id="code" name="code" autoFocus />
          <input type="button" value="Submit" onClick={this.submit} />
        </Form>
      </DefaultLayout>
    );
  }
}
