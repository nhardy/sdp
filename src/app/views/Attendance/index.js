import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { routerShape } from 'react-router/lib/PropTypes';
import Helmet from 'react-helmet';

import DefaultLayout from 'app/layouts/Default';
import Form from 'app/components/Form';

import styles from './styles.styl';


// Mock attendance marking
@connect(null, {})
@withRouter
export default class AttendanceView extends Component {
  static propTypes = {
    router: routerShape,
  };

  state = {
    error: null,
  };

  onChange = () => this.setState({ error: null });

  submit = async (e) => {
    e.preventDefault();
    const code = this._code.value;
    await new Promise(resolve => setTimeout(resolve, 500));
    if (code !== 'thecode') {
      this.setState({ error: 'Invalid code' });
    } else {
      this.props.router.push('/bookings');
    }
    return false;
  };

  render() {
    const { error } = this.state;
    return (
      <DefaultLayout>
        <Helmet title="Attendance | UTS: HELPS Booking System" />
        <Form>
          <h1>Attendance</h1>
          {error && (
            <div className={styles.error}>
              <span>{error}</span>
            </div>
          )}
          <label htmlFor="code">Attendance code</label>
          <input type="text" id="code" ref={ref => (this._code = ref)} onChange={this.onChange} autoFocus />
          <input type="submit" value="Submit" onClick={this.submit} />
        </Form>
      </DefaultLayout>
    );
  }
}
