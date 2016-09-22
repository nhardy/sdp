import React from 'react';
import { Route, IndexRoute } from 'react-router';

import requireLogin from 'app/lib/requireLogin';
import App from 'app/components/App';
import FaqView from 'app/views/Faq';
import LoginView from 'app/views/Login';
import SettingsView from 'app/views/Settings';
import ErrorView from 'app/views/Error';


export default function getRoutes(store) {
  return (
    <Route path="/" component={App}>
      <Route path="/__404" component={ErrorView} status={404} />
      <Route path="/__500" component={ErrorView} status={500} />
      {/* TODO: Replace IndexRoute with proper index page */}
      <IndexRoute component={LoginView} />
      <Route path="/faq" component={FaqView} />
      <Route path="/login" component={LoginView} />
      <Route path="/settings" component={SettingsView} onEnter={requireLogin(store)} />
      <Route path="*" component={ErrorView} status={404} />
    </Route>
  );
}
