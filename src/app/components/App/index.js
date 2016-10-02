import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as appPropTypes from 'app/components/propTypes';
import { ensureData } from 'app/actions/sso';
import ErrorView from 'app/views/Error';

import 'app/assets/stylus/reset.styl';
import 'app/assets/stylus/fonts.styl';
import 'font-awesome/css/font-awesome.min.css';
import styles from './styles.styl';


@connect((state) => {
  return {
    routeError: state.routeError,
  };
}, { ensureData })
export default class App extends Component {
  static propTypes = {
    routeError: PropTypes.object, // eslint-disable-line react/forbid-prop-types
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
        {this.props.routeError ? (
          <ErrorView {...this.props.routeError} />
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}
