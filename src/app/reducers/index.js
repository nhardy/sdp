import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';

import sso from './sso';
import settings from './settings';


export default combineReducers({
  reduxAsyncConnect,
  routing: routerReducer,

  sso,
  settings,
});
