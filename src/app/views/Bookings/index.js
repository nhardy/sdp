import React, { Component } from 'react';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { setRouteError } from 'app/actions/routeError';
import { getBookings } from 'app/actions/bookings';
import { getCampus } from 'app/actions/campus';
import * as appPropTypes from 'app/components/propTypes';
import DefaultLayout from 'app/layouts/Default';
import WorkshopsList from 'app/components/WorkshopsList';

import styles from './styles.styl';


@asyncConnect([
  {
    promise: async ({ store: { dispatch, getState } }) => {
      await Promise.all([
        dispatch(getBookings()),
        dispatch(getCampus()),
      ]);

      if (!getState().bookings.loaded || !getState().campus.loaded) {
        setRouteError({ status: 500 });
        return;
      }
    },
  },
])
@connect(state => ({
  items: state.bookings.items.map(booking => ({
    ...booking,
    id: booking.workshopId,
    campus: state.campus.names[booking.campusId],
  })),
}))
export default class BookingsView extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    items: appPropTypes.workshops,
  };

  render() {
    const { items } = this.props;
    return (
      <DefaultLayout>
        <Helmet title="My Bookings | UTS: HELPS Booking System" />
        <h1 className={styles.heading}>My Bookings</h1>
        <WorkshopsList items={items} isBooking />
      </DefaultLayout>
    );
  }
}
