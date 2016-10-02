import React, { PropTypes } from 'react';
import cx from 'classnames';
import RCSwitch from 'rc-switch';
import 'rc-switch/assets/index.css';

import styles from './styles.styl';


const Checkbox = ({ className, ...props }) => (
  <span className={cx(styles.root, className)}>
    <RCSwitch {...props} className={styles.switch} />
  </span>
);

Checkbox.propTypes = {
  className: PropTypes.string,
};

export default Checkbox;
