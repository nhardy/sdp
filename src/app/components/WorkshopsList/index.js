import React, { PropTypes } from 'react';

import * as appPropTypes from 'app/components/propTypes';

import Workshop from './Workshop';
import styles from './styles.styl';


const WorkshopsList = ({ items, isBooking = false }) => {
  return (
    <ul className={styles.root}>
      {items.map(item => (
        <Workshop key={item.id} workshop={item} isBooking={isBooking} />
      ))}
    </ul>
  );
};

WorkshopsList.propTypes = {
  items: appPropTypes.workshops,
  isBooking: PropTypes.bool,
};

export default WorkshopsList;
