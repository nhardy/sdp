import React, { PropTypes } from 'react';
import { noop } from 'lodash-es';
import cx from 'classnames';

import styles from './styles.styl';


const Label = ({ className, htmlFor, children, onClick = noop }) => {
  const Tag = htmlFor ? 'label' : 'span';
  return (
    <Tag className={cx(styles.root, className)} htmlFor={htmlFor} onClick={onClick}>
      {children}
    </Tag>
  );
};

Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Label;
