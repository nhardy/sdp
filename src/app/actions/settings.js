import config from 'app/config';
import { ensureToken } from 'app/actions/sso';


export const GET_SETTINGS_REQUEST = 'GET_SETTINGS_REQUEST';
export const GET_SETTINGS_SUCCESS = 'GET_SETTINGS_SUCCESS';
export const GET_SETTINGS_FAILURE = 'GET_SETTINGS_FAILURE';

export const SAVE_SETTINGS_REQUEST = 'SAVE_SETTINGS_REQUEST';
export const SAVE_SETTINGS_SUCCESS = 'SAVE_SETTINGS_SUCCESS';
export const SAVE_SETTINGS_FAILURE = 'SAVE_SETTINGS_FAILURE';

function _getSettings(token) {
  return {
    types: [GET_SETTINGS_REQUEST, GET_SETTINGS_SUCCESS, GET_SETTINGS_FAILURE],
    endpoint: {
      url: '/api/helps/settings',
      query: {
        client: config.sso.client,
        token,
      },
    },
  };
}

export function getSettings() {
  return (dispatch, getState) => {
    return dispatch(ensureToken()).then(() => {
      const { token } = getState().sso;
      if (token) return dispatch(_getSettings(token));

      // Should also set an error for SSO
      return Promise.resolve();
    });
  };
}

function _saveSettings(token, settings) {
  return {
    types: [SAVE_SETTINGS_REQUEST, SAVE_SETTINGS_SUCCESS, SAVE_SETTINGS_FAILURE],
    endpoint: {
      url: '/api/helps/settings',
      query: {
        client: config.sso.client,
        token,
      },
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settings),
    },
  };
}

export function saveSettings(settings) {
  return (dispatch, getState) => {
    return dispatch(ensureToken()).then(() => {
      const { token } = getState().sso;
      if (token) return dispatch(_saveSettings(token, settings));

      // Should also set an error for SSO
      return Promise.resolve();
    });
  };
}
