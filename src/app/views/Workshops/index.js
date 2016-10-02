import React, { Component } from 'react';
import { find } from 'lodash-es';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { setRouteError } from 'app/actions/routeError';
import { getWorkshopSets, getWorkshops } from 'app/actions/classes';
import * as appPropTypes from 'app/components/propTypes';
import DefaultLayout from 'app/layouts/Default';
import Image from 'app/components/Image';
import WorkshopsList from 'app/components/WorkshopsList';
import placeholderImg from 'app/assets/images/table.jpeg';

import styles from './styles.styl';


@asyncConnect([
  {
    promise: async ({ store: { dispatch, getState }, params: { workshopSetId } }) => {
      const workshopSets = () => getState().classes.workshopSets;
      if (!workshopSets().loaded) {
        await dispatch(getWorkshopSets());
      }

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
      if (!workshops().loaded) {
        await dispatch(getWorkshops(workshopSetId));
      }

      if (!workshops().loaded) dispatch(setRouteError());
    },
  },
])
@connect((state, { params: { workshopSetId } }) => {
  return {
    category: find(state.classes.workshopSets.items, { id: parseInt(workshopSetId, 10) }),
    items: state.classes.workshops[workshopSetId].items,
  };
})
export default class WorkshopsView extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    category: appPropTypes.workshopSet,
    items: appPropTypes.workshops,
  };

  render() {
    const { category, items } = this.props;
    return (
      <DefaultLayout>
        <Helmet title={`${category.name} Workshops | UTS: HELPS Booking System`} />
        <div className={styles.imageWrapper}>
          <Image src={placeholderImg} alt={category.name} />
          <div className={styles.headingGroup}>
            <h2 className={styles.category}>{category.name}</h2>
            <h3 className={styles.direction}>Choose from the topics below</h3>
          </div>
        </div>
        <WorkshopsList items={items} />
      </DefaultLayout>
    );
  }
}
