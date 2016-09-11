import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './styles.styl';


const Form = ({ className, children, method, action }) => {
  return (
    <form className={cx(styles.root, className)} method={method} action={action}>
      {children}
    </form>
  );
};

Form.propTypes = {
  className: PropTypes.string,
  method: PropTypes.oneOf(['GET', 'POST']),
  action: PropTypes.string,
  children: PropTypes.node,
};

export default Form;
