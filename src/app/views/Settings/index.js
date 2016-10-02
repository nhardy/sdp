import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { routerShape } from 'react-router/lib/PropTypes';
import Helmet from 'react-helmet';
import cx from 'classnames';

import { getSettings, saveSettings } from 'app/actions/settings';
import DefaultLayout from 'app/layouts/Default';
import Form from 'app/components/Form';
import FontAwesome from 'app/components/FontAwesome';
import Label from 'app/components/Form/Label';
import CheckboxWithLabel from 'app/components/Form/CheckboxWithLabel';

import styles from './styles.styl';


@connect((state) => {
  if (!state.settings.loaded) {
    return {};
  }
  return {
    name: `${state.sso.user.firstName} ${state.sso.user.lastName}`,
    email: state.sso.user.email,
    ssoMobile: state.sso.user.mobile,
    mobile: state.settings.mobile,
    emailNotifications: state.settings.emailNotifications,
    smsNotifications: state.settings.smsNotifications,
  };
}, { getSettings, saveSettings })
@withRouter
export default class SettingsView extends Component {
  static propTypes = {
    router: routerShape,
    name: PropTypes.string,
    email: PropTypes.string,
    ssoMobile: PropTypes.string,
    mobile: PropTypes.string,
    emailNotifications: PropTypes.bool,
    smsNotifications: PropTypes.bool,
    getSettings: PropTypes.func,
    saveSettings: PropTypes.func,
  };

  state = {
    loading: true,
  };

  componentDidMount() {
    this._isMounted = true;
    this.props.getSettings().then(() => {
      // This component could potentially unmount before this code block runs so
      // we check here if the component is still mounted and exit early if not
      if (!this._isMounted) return;

      const { emailNotifications, smsNotifications } = this.props;
      this.setState({ loading: false, emailNotifications, smsNotifications });
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  updateMobile = () => {
    this.setState({ mobile: this._mobile.value });
  };

  updateEmailNotifications = (checked) => {
    this.setState({ emailNotifications: checked });
  };

  updateSmsNotifications = (checked) => {
    this.setState({ smsNotifications: checked });
  };

  save = () => {
    const { mobile: userMobile, emailNotifications, smsNotifications } = this.state;
    let mobile;
    if (userMobile !== this.props.ssoMobile) {
      mobile = userMobile;
    }
    this.props.saveSettings({ mobile, emailNotifications, smsNotifications }).then(() => {
      this.props.router.push('/');
    });
  }

  render() {
    const { name, email, mobile, ssoMobile } = this.props;
    const { loading, emailNotifications, smsNotifications } = this.state;

    return (
      <DefaultLayout>
        <Helmet title="Settings | UTS: HELPS Booking System" />
        <Form>
          {loading ? (
            <div className={styles.spinner}>
              <FontAwesome className={cx('fa-spin', 'fa-refresh')} size={280} />
            </div>
          ) : (
            <div>
              <h1>Settings</h1>
              <Label htmlFor="name">Name:</Label>
              <input type="text" id="name" value={name} disabled />
              <Label htmlFor="email">Email:</Label>
              <input type="email" id="email" value={email} disabled />
              <Label htmlFor="mobile">Mobile:</Label>
              <input type="tel" id="mobile" ref={ref => (this._mobile = ref)} defaultValue={mobile || ssoMobile} onChange={this.updateMobile} />
              <CheckboxWithLabel defaultChecked={emailNotifications} onChange={this.updateEmailNotifications}>Email Notifications:</CheckboxWithLabel>
              <CheckboxWithLabel defaultChecked={smsNotifications} onChange={this.updateSmsNotifications}>SMS Notifications:</CheckboxWithLabel>
              <input type="button" value="Save" onClick={this.save} />
            </div>
          )}
        </Form>
      </DefaultLayout>
    );
  }
}
