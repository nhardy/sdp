import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import Helmet from 'react-helmet';

import { setRouteError } from 'app/actions/routeError';
import { getWorkshop } from 'app/actions/classes';
import * as appPropTypes from 'app/components/propTypes';
import DefaultLayout from 'app/layouts/Default';
import Form from 'app/components/Form';


@asyncConnect([
  {
    promise: async ({ store: { dispatch, getState }, params: { workshopId } }) => {
      const workshop = () => getState().classes.workshop[workshopId] || {};

      if (!workshop().loaded) await dispatch(getWorkshop(workshopId));

      // TODO: Better errors for this call
      if (!workshop().loaded) {
        dispatch(setRouteError({ status: 404 }));
        return;
      }
    },
  },
])
@connect((state, { params: { workshopId } }) => ({
  workshop: state.classes.workshop[workshopId],
}))
export default class LoginView extends Component {
  static propTypes = {
    workshop: appPropTypes.workshop,
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
