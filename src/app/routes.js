import React from 'react';
import { Route, IndexRoute } from 'react-router';

import requireLogin from 'app/lib/requireLogin';
import App from 'app/components/App';
import CategoriesView from 'app/views/Categories';
import WorkshopsView from 'app/views/Workshops';
import FaqView from 'app/views/Faq';
import LoginView from 'app/views/Login';
import SettingsView from 'app/views/Settings';
import ErrorView from 'app/views/Error';


export default function getRoutes(store) {
  return (
    <Route path="/" component={App}>
      <Route path="/__404" component={ErrorView} status={404} />
      <Route path="/__500" component={ErrorView} status={500} />
      <IndexRoute component={CategoriesView} />
      <Route path="/categories/:workshopSetId" component={WorkshopsView} />
      <Route path="/faq" component={FaqView} />
      <Route path="/login" component={LoginView} />
      <Route path="/settings" component={SettingsView} onEnter={requireLogin(store)} />
      <Route path="*" component={ErrorView} status={404} />
    </Route>
  );
}
