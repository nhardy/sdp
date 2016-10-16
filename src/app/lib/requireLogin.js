import { ensureData } from 'app/actions/sso';


export default function requireLogin({ dispatch, getState }) {
  if (__SERVER__) {
    return (nextState, replace) => {
      replace({
        pathname: '/login',
        query: {
          redirect: `${nextState.location.pathname}${nextState.location.search}`,
        },
      });
    };
  }

  return (nextState, replace, callback) => {
    dispatch(ensureData()).then(() => {
      if (!getState().sso.user) {
        replace({
          pathname: '/login',
          query: {
            redirect: `${nextState.location.pathname}${nextState.location.search}`,
          },
        });
      }
      callback();
    });
  };
}
