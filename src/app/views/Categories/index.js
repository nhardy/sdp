import React, { Component } from 'react';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { setRouteError } from 'app/actions/routeError';
import { getWorkshopSets } from 'app/actions/classes';
import * as appPropTypes from 'app/components/propTypes';
import DefaultLayout from 'app/layouts/Default';
import CategoriesList from 'app/components/CategoriesList';


@asyncConnect([
  {
    promise: async ({ store: { dispatch, getState } }) => {
      const loaded = () => getState().classes.workshopSets.loaded;

      if (!loaded()) await dispatch(getWorkshopSets());

      if (!loaded()) dispatch(setRouteError());
    },
  },
])
@connect((state) => {
  return {
    items: state.classes.workshopSets.items,
  };
})
export default class CategoriesView extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    items: appPropTypes.workshopSets,
  };

  render() {
    const { items } = this.props;
    return (
      <DefaultLayout>
        <Helmet title="Home | UTS: HELPS Booking System" />
        <CategoriesList items={items} />
      </DefaultLayout>
    );
  }
}
