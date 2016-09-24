import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';

import sso from './sso';
import settings from './settings';
import classes from './classes';


export default combineReducers({
  reduxAsyncConnect,
  routing: routerReducer,

  sso,
  settings,
  classes,
});
