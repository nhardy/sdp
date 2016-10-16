import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import Helmet from 'react-helmet';
import { find, get } from 'lodash-es';

import config from 'app/config';
import moment, { formatDuration } from 'app/lib/moment';
import { setRouteError } from 'app/actions/routeError';
import { getWorkshopSets, getWorkshops } from 'app/actions/classes';
import * as appPropTypes from 'app/components/propTypes';
import DefaultLayout from 'app/layouts/Default';
import Form from 'app/components/Form';

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
@connect((state, { location: { query: { workshopSetId, workshopId } } }) => {
  return {
    workshop: find(state.classes.workshops[workshopSetId].items, { id: parseInt(workshopId, 10) }),
  };
})
export default class LoginView extends Component {
  static propTypes = {
    workshop: appPropTypes.workshop,
  };

  submit = () => {};

  render() {
    const { workshop: { topic, description, startDate, endDate, campus, maximum, bookingCount } } = this.props;
    const availability = Math.max(0, maximum - bookingCount);

    return (
      <DefaultLayout>
        <Helmet title="Book Workshop | UTS: HELPS Booking System" />
        <Form>
          <h1>Book "{topic}" Workshop</h1>
          <table className={styles.data}>
            <colgroup>
              <col />
              <col className={styles.values} />
            </colgroup>
            <tbody>
              {description && (
                <tr>
                  <td>Description:</td>
                  <td>{description}</td>
                </tr>
              )}
              <tr>
                <td>Duration:</td>
                <td>{formatDuration(startDate, endDate)} (ending {moment.tz(endDate, config.timezone).calendar()})</td>
              </tr>
              <tr>
                <td>Location:</td>
                <td>{campus}</td>
              </tr>
              <tr>
                <td>Availability:</td>
                <td>{availability} of {maximum} remaining</td>
              </tr>
            </tbody>
          </table>
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
