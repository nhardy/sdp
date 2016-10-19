import React, { PropTypes } from 'react';

import config from 'app/config';
import * as appPropTypes from 'app/components/propTypes';
import moment, { formatDuration } from 'app/lib/moment';

import styles from './styles.styl';


const WorkshopDetails = ({ workshop, isBooking }) => {
  const { description, startDate, starting, endDate, ending, campus, bookingCount, maximum } = workshop;
  const availability = Math.max(0, maximum - bookingCount);
  return (
    <table className={styles.root}>
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
          <td>{formatDuration(startDate || starting, endDate || ending)} (ending {moment.tz(endDate || ending, config.timezone).calendar()})</td>
        </tr>
        <tr>
          <td>Location:</td>
          <td>{campus}</td>
        </tr>
        {!isBooking && (
          <tr>
            <td>Availability:</td>
            <td>{availability} of {maximum} remaining</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

WorkshopDetails.propTypes = {
  workshop: appPropTypes.workshop,
  isBooking: PropTypes.bool,
};

export default WorkshopDetails;
