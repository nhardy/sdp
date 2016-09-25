import React, { Component, PropTypes } from 'react';
import { find } from 'lodash-es';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { setRouteError } from 'app/actions/routeError';
import { getWorkshopSets, getWorkshops } from 'app/actions/classes';
import DefaultLayout from 'app/layouts/Default';
// import WorkshopsList from 'app/components/WorkshopsList';


@asyncConnect([
  {
    promise: async ({ store: { dispatch, getState }, params: { workshopSetId } }) => {
      const workshopSets = () => getState().classes.workshopSets;
      await workshopSets().loaded
        ? Promise.resolve()
        : dispatch(getWorkshopSets());

      if (!workshopSets().loaded) {
        dispatch(setRouteError());
        return;
      }

      const workshop = find(workshopSets().items, { id: parseInt(workshopSetId, 10) });
      if (!workshop) {
        dispatch(setRouteError({ status: 404 }));
        return;
      }

      const workshops = () => getState().classes.workshops[workshopSetId] || {};
      await workshops().loaded
        ? Promise.resolve()
        : dispatch(getWorkshops(workshopSetId));

      if (!workshops().loaded) dispatch(setRouteError());
    },
  },
])
@connect((state) => {
  return {
    items: state.classes.workshops.items,
  };
})
export default class WorkshopsView extends Component {
  static propTypes = {
    items: PropTypes.array,
  };

  render() {
    const { items } = this.props;
    console.log(items);
    return (
      <DefaultLayout>
        <Helmet title="Home | UTS: HELPS Booking System" />
        {/* <WorkshopsList items={items} /> */}
      </DefaultLayout>
    );
  }
}
