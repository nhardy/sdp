import React, { Component } from 'react';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { setRouteError } from 'app/actions/routeError';
import { getBookings } from 'app/actions/bookings';
import * as appPropTypes from 'app/components/propTypes';
import DefaultLayout from 'app/layouts/Default';
import WorkshopsList from 'app/components/WorkshopsList';


@asyncConnect([
  {
    promise: async ({ store: { dispatch, getState } }) => {
      await dispatch(getBookings());
      const bookings = () => getState().bookings;
      if (!bookings.loaded) {
        setRouteError({ status: 500 });
        return;
      }
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
        <WorkshopsList items={items} isBooking />
      </DefaultLayout>
    );
  }
}
