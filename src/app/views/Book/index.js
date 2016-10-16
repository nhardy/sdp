import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import Helmet from 'react-helmet';
import { find, get } from 'lodash-es';

import { setRouteError } from 'app/actions/routeError';
import { makeBooking } from 'app/actions/bookings';
import { getWorkshopSets, getWorkshops } from 'app/actions/classes';
import * as appPropTypes from 'app/components/propTypes';
import DefaultLayout from 'app/layouts/Default';
import Form from 'app/components/Form';
import WorkshopDetails from 'app/components/WorkshopDetails';

import styles from './styles.styl';


@asyncConnect([
  {
    promise: async ({ store: { dispatch, getState }, location }) => {
      const workshopSetId = get(location, 'query.workshopSetId');
      const workshopId = get(location, 'query.workshopId');

      if (!workshopSetId || !workshopId) {
        dispatch(setRouteError({ status: 400 }));
        return;
      }

      const workshopSets = () => getState().classes.workshopSets;
      if (!workshopSets().loaded) await dispatch(getWorkshopSets());

      if (!workshopSets().loaded) {
        dispatch(setRouteError());
        return;
      }

      const workshopSet = find(workshopSets().items, { id: parseInt(workshopSetId, 10) });
      if (!workshopSet) {
        dispatch(setRouteError({ status: 400 }));
        return;
      }

      const workshops = () => getState().classes.workshops[workshopSetId] || {};
      if (!workshops().loaded) {
        await dispatch(getWorkshops(workshopSetId));
      }

      if (!workshops().loaded) dispatch(setRouteError());

      const workshop = find(workshops().items, { id: parseInt(workshopId, 10) });
      if (!workshop) {
        dispatch(setRouteError({ status: 400 }));
        return;
      }
    },
  },
])
@connect((state, { location: { query: { workshopSetId, workshopId } } }) => ({
  workshop: find(state.classes.workshops[workshopSetId].items, { id: parseInt(workshopId, 10) }),
}), { makeBooking })
export default class LoginView extends Component {
  static propTypes = {
    workshop: appPropTypes.workshop,
    makeBooking: appPropTypes.func,
  };

  submit = () => {
    this.props.makeBooking(this.props.workshop.id);
  };

  render() {
    const { topic } = this.props.workshop;
    return (
      <DefaultLayout>
        <Helmet title="Book Workshop | UTS: HELPS Booking System" />
        <Form>
          <h1>Book "{topic}" Workshop</h1>
          <WorkshopDetails workshop={this.props.workshop} />
          <p className={styles.disclaimer}>
            Please be aware that if you do not attend a session that you have booked,
            the University reserves the right to penalise future attendance. If you
            know that you cannot attend a session that you have booked, make sure to
            cancel your booking as soon as possible so that other students are not
            disadvantaged.
          </p>
          <input type="button" value="Confirm" onClick={this.submit} />
        </Form>
      </DefaultLayout>
    );
  }
}
