import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import Button from 'app/components/Button';
import FontAwesome from 'app/components/FontAwesome';

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
        <Button className={styles.question} onClick={this.toggle}>
          <span className={styles.text}>{question}</span>
          <div className={styles.button}>
            <FontAwesome className={cx({ 'fa-chevron-down': !shown, 'fa-chevron-up': shown })} size={20} />
          </div>
        </Button>
        <div className={cx(styles.answer, { [styles.shown]: shown })}>
          {children}
        </div>
      </div>
    );
  }
}
