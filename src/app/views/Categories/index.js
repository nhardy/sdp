import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { getWorkshopSets } from 'app/actions/classes';
import DefaultLayout from 'app/layouts/Default';
import CategoriesList from 'app/components/CategoriesList';


@asyncConnect([
  {
    promise: ({ store: { dispatch, getState } }) => {
      const loaded = getState().classes.workshopSets.loaded;
      if (loaded) return Promise.resolve();

      return dispatch(getWorkshopSets());
    },
  },
])
@connect((state) => {
  return {
    items: state.classes.workshopSets.items,
  };
})
export default class CategoriesView extends Component {
  static propTypes = {
    items: PropTypes.array,
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
