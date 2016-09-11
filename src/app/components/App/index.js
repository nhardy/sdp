import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as appPropTypes from 'app/components/propTypes';
import { ensureData } from 'app/actions/sso';


import 'app/assets/stylus/reset.styl';
import 'app/assets/stylus/fonts.styl';
import 'font-awesome/css/font-awesome.min.css';
import styles from './styles.styl';


@connect(null, { ensureData })
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    location: appPropTypes.location,
    ensureData: PropTypes.func,
  };

  static childContextTypes = {
    location: appPropTypes.location,
  };

  getChildContext() {
    return {
      location: this.props.location,
    };
  }

  componentDidMount() {
    this.props.ensureData();
  }

  render() {
    return (
      <div className={styles.root}>
        {this.props.children}
      </div>
    );
  }
}
