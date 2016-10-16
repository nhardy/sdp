import React, { Component } from 'react';
import { Link } from 'react-router';
import cx from 'classnames';

import config from 'app/config';
import moment from 'app/lib/moment';
import * as appPropTypes from 'app/components/propTypes';
import Button from 'app/components/Button';
import FontAwesome from 'app/components/FontAwesome';
import WorkshopDetails from 'app/components/WorkshopDetails';

import styles from './styles.styl';


export default class Workshop extends Component {
  static propTypes = {
    ...appPropTypes._workshop,
  };

  state = {
    shown: false,
  };

  toggle = () => {
    this.setState({ shown: !this.state.shown });
  }

  render() {
    const { id, workShopSetId, topic, startDate, maximum, bookingCount } = this.props;
    const { shown } = this.state;

    const availability = Math.max(0, maximum - bookingCount);

    return (
      <li className={styles.root}>
        <Button className={styles.basic} onClick={this.toggle}>
          <span className={styles.topic}>{topic}</span>
          <span className={styles.time}>{moment.tz(startDate, config.timezone).calendar()}</span>
          <div className={styles.toggle}>
            <FontAwesome className={cx({ 'fa-chevron-up': shown, 'fa-chevron-down': !shown })} size={20} />
          </div>
        </Button>
        <div className={cx(styles.info, { [styles.shown]: shown })}>
          <WorkshopDetails workshop={this.props} />
          <Link className={styles.book} to={`/book?workshopSetId=${workShopSetId}&workshopId=${id}`}>
            {availability ? 'Book this session' : 'Add to waiting list'}
          </Link>
        </div>
      </li>
    );
  }
}
