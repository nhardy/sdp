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
  return async (dispatch, getState) => {
    await dispatch(ensureToken());
    const { token } = getState().sso;
    if (!token) return;
    await dispatch(_getSettings(token));
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
  return async (dispatch, getState) => {
    await dispatch(ensureToken());
    const { token } = getState().sso;
    if (!token) return;
    await dispatch(_saveSettings(token, settings));
  };
}
