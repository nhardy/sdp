import React from 'react';
import { Redirect, Route, IndexRoute } from 'react-router';

import { clearRouteError } from 'app/actions/routeError';
import requireLogin from 'app/lib/requireLogin';
import App from 'app/components/App';
import CategoriesView from 'app/views/Categories';
import WorkshopsView from 'app/views/Workshops';
import BookView from 'app/views/Book';
import FaqView from 'app/views/Faq';
import LoginView from 'app/views/Login';
import SettingsView from 'app/views/Settings';
import ErrorView from 'app/views/Error';


export default function getRoutes(store) {
  const onChange = () => {
    store.dispatch(clearRouteError());
  };

  return (
    <Route path="/" component={App} onChange={onChange}>
      <Redirect from="/workshops" to="/" />
      <Route path="/__404" component={ErrorView} status={404} />
      <Route path="/__500" component={ErrorView} status={500} />
      <IndexRoute component={CategoriesView} />
      <Route path="/categories/:workshopSetId" component={WorkshopsView} />
      <Route path="/workshops/:workshopId" component={BookView} onEnter={requireLogin(store)} />
      <Route path="/faq" component={FaqView} />
      <Route path="/login" component={LoginView} />
      <Route path="/settings" component={SettingsView} onEnter={requireLogin(store)} />
      <Route path="*" component={ErrorView} status={404} />
    </Route>
  );
}
