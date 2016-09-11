import React from 'react';
import { Route, IndexRoute } from 'react-router';

import requireLogin from 'app/lib/requireLogin';
import App from 'app/components/App';
import LoginView from 'app/views/Login';
import ErrorView from 'app/views/Error';


export default function getRoutes(store) {
  // Use this as the `onEnter` hook for routes which require login
  const requireLoginHook = requireLogin(store); // eslint-disable-line no-unused-vars

  return (
    <Route path="/" component={App}>
      <Route path="/__404" component={ErrorView} status={404} />
      <Route path="/__500" component={ErrorView} status={500} />
      {/* TODO: Replace IndexRoute with proper index page */}
      <IndexRoute component={LoginView} />
      <Route path="/login" component={LoginView} />
      <Route path="*" component={ErrorView} status={404} />
    </Route>
  );
}
