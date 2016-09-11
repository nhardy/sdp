import querystring from 'querystring';

import { ensureData } from 'app/actions/sso';


export default function requireLogin({ dispatch, getState }) {
  // Do nothing on the server
  if (__SERVER__) return (nextState, replace) => {}; // eslint-disable-line no-unused-vars

  return (nextState, replace, callback) => {
    dispatch(ensureData()).then(() => {
      if (!getState().sso.user) {
        replace({
          pathname: `/login?${querystring.stringify({ redirect: nextState.location.pathname })}`,
        });
      }
      callback();
    });
  };
}
