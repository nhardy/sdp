import React, { Component } from 'react';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { getBookings } from 'app/actions/bookings';
import * as appPropTypes from 'app/components/propTypes';
import DefaultLayout from 'app/layouts/Default';

const styles = {};


@asyncConnect([
  {
    promise: async ({ store: { dispatch } }) => {
      await dispatch(getBookings());
    },
  },
])
@connect(state => ({
  items: state.bookings.items,
}))
export default class BookingsView extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    items: appPropTypes.bookings,
  };

  render() {
    const { items } = this.props;
    return (
      <DefaultLayout>
        <Helmet title="My Bookings | UTS: HELPS Booking System" />
        <p>Here</p>
      </DefaultLayout>
    );
  }
}
