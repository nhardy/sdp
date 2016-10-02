import React from 'react';

import moment from 'app/lib/moment';
import config from 'app/config';
import * as appPropTypes from 'app/components/propTypes';

import styles from './styles.styl';


const Workshop = ({ topic, startDate }) => {
  return (
    <li className={styles.workshop}>
      <span className={styles.topic}>{topic}</span>
      <span className={styles.time}>{moment.tz(startDate, config.timezone).calendar()}</span>
    </li>
  );
};

Workshop.propTypes = {
  ...appPropTypes._workshop,
};

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
