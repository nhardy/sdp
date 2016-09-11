import React, { Component } from 'react';
import cx from 'classnames';
import RCSwitch from 'rc-switch';
import 'rc-switch/assets/index.css';

import styles from './styles.styl';


export default class Checkbox extends Component {
  render() {
    return (
      <span className={cx(styles.root, this.props.className)}>
        <RCSwitch {...this.props} className={styles.switch} />
      </span>
    );
  }
}
