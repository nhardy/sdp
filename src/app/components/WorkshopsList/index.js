import React from 'react';

import * as appPropTypes from 'app/components/propTypes';

import Workshop from './Workshop';
import styles from './styles.styl';


const WorkshopsList = ({ items }) => {
  return (
    <ul className={styles.root}>
      {items.map(item => (
        <Workshop key={item.id} {...item} />
      ))}
    </ul>
  );
};

WorkshopsList.propTypes = {
  items: appPropTypes.workshops,
};

export default WorkshopsList;
