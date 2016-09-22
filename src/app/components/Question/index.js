import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import styles from './styles.styl';


export default class Question extends Component {
  static propTypes = {
    question: PropTypes.string,
    children: PropTypes.node,
  };

  state = {
    shown: false,
  };

  toggle = () => {
    this.setState({ shown: !this.state.shown });
  }

  render() {
    const { question, children } = this.props;
    const { shown } = this.state;
    return (
      <div className={styles.root}>
        <span className={styles.question} onClick={this.toggle}>{question}</span>
        <div className={cx(styles.answer, { [styles.shown]: shown })}>
          {children}
        </div>
      </div>
    );
  }
}
