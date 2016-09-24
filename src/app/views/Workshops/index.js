import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { getWorkshopSets, getWorkshops } from 'app/actions/classes';
import DefaultLayout from 'app/layouts/Default';
// import WorkshopsList from 'app/components/WorkshopsList';


@asyncConnect([
  {
    promise: ({ store: { dispatch, getState } }) => {
      let promise;
      const workshopSets = getState().classes.workshopSets;
      if (workshopSets.loaded) {
        promise = Promise.resolve();
      } else {
        promise = dispatch(getWorkshopSets());
      }

      return promise.then(() => {
        const workshopSetId = 3;
        return dispatch(getWorkshops(workshopSetId));
      });
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
