import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import cx from 'classnames';

import config from 'app/config';
import moment from 'app/lib/moment';
import { cancelBooking } from 'app/actions/bookings';
import * as appPropTypes from 'app/components/propTypes';
import Button from 'app/components/Button';
import FontAwesome from 'app/components/FontAwesome';
import WorkshopDetails from 'app/components/WorkshopDetails';

import styles from './styles.styl';


@connect(null, { cancelBooking })
export default class Workshop extends Component {
  static propTypes = {
    workshop: appPropTypes.workshop,
    isBooking: PropTypes.bool,
    cancelBooking: PropTypes.func,
  };

  state = {
    shown: false,
  };

  toggle = () => {
    this.setState({ shown: !this.state.shown });
  };

  cancel = () => {
    this.props.cancelBooking(this.props.workshop.id);
  };

  render() {
    const { id, workShopSetId, topic, startDate, starting, maximum, bookingCount } = this.props.workshop;
    const { isBooking } = this.props;
    const { shown } = this.state;

    const availability = !isBooking ? Math.max(0, maximum - bookingCount) : null;
    const hasElapsed = moment().diff(moment.tz(startDate || starting, config.timezone)) > 0;

    return (
      <li className={styles.root}>
        <Button className={styles.basic} onClick={this.toggle}>
          <span className={styles.topic}>{topic}</span>
          <span className={styles.time}>{moment.tz(startDate || starting, config.timezone).calendar()}</span>
          <div className={styles.toggle}>
            <FontAwesome className={cx({ 'fa-chevron-up': shown, 'fa-chevron-down': !shown })} size={20} />
          </div>
        </Button>
        <div className={cx(styles.info, { [styles.shown]: shown })}>
          <WorkshopDetails workshop={this.props.workshop} isBooking={isBooking} />
          {!isBooking && !hasElapsed && (
            <Link className={styles.book} to={`/book?workshopSetId=${workShopSetId}&workshopId=${id}`}>
              {availability ? 'Book this session' : 'Add to waiting list'}
            </Link>
          )}
          {isBooking && !hasElapsed && (
            <Button className={styles.book} onClick={this.cancel}>
              Cancel Booking
            </Button>
          )}
        </div>
      </li>
    );
  }
}
