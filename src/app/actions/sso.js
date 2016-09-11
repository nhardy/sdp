import config from 'app/config';
import SSO from 'app/lib/sso';

const sso = __CLIENT__ && new SSO();


export const SSO_TOKEN_REQUEST = 'SSO_TOKEN_REQUEST';
export const SSO_TOKEN_SUCCESS = 'SSO_TOKEN_SUCCESS';
export const SSO_TOKEN_FAILURE = 'SSO_TOKEN_FAILURE';

export const SSO_SET_TOKEN = 'SSO_SET_TOKEN';

export const SSO_RETRIEVE_REQUEST = 'SSO_RETRIEVE_REQUEST';
export const SSO_RETRIEVE_SUCCESS = 'SSO_RETRIEVE_SUCCESS';
export const SSO_RETRIEVE_FAILURE = 'SSO_RETRIEVE_FAILURE';

function fetchToken() {
  return {
    types: [SSO_TOKEN_REQUEST, SSO_TOKEN_SUCCESS, SSO_TOKEN_FAILURE],
    endpoint: {
      url: config.sso.token,
      query: {
        client: config.sso.client,
      },
      credentials: 'include',
    },
  };
}

function setToken(token) {
  return {
    type: SSO_SET_TOKEN,
    token,
  };
}

function getToken() {
  return (dispatch, getState) => {
    const { error } = getState().sso;
    const token = sso.getToken();
    if (token && !error) {
      return Promise.resolve(dispatch(setToken(token)));
    }
    return dispatch(fetchToken());
  };
}

export function ensureToken() {
  return (dispatch, getState) => {
    const { error, token } = getState().sso;
    if (token && !error) return Promise.resolve();
    return dispatch(getToken());
  };
}

function retrieveData(token) {
  return {
    types: [SSO_RETRIEVE_REQUEST, SSO_RETRIEVE_SUCCESS, SSO_RETRIEVE_FAILURE],
    endpoint: {
      url: config.sso.retrieve,
      query: {
        client: config.sso.client,
        token,
      },
    },
  };
}

export function ensureData() {
  return (dispatch, getState) => {
    const { user } = getState().sso;
    if (user) return Promise.resolve();
    return dispatch(ensureToken()).then(() => {
      const { token } = getState().sso;
      if (token) return dispatch(retrieveData(token));
      return Promise.resolve();
    });
  };
}
