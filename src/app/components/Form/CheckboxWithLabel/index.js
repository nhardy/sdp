import React, { PropTypes } from 'react';
import cx from 'classnames';

import Label from 'app/components/Form/Label';
import Checkbox from 'app/components/Form/Checkbox';

import styles from './styles.styl';


const CheckboxWithLabel = ({ children, className, ...props }) => (
  <div className={styles.root}>
    <Label>{children}</Label><Checkbox {...props} className={cx(styles.checkbox, className)} />
  </div>
);

CheckboxWithLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default CheckboxWithLabel;
