import baseUrl from 'app/lib/endpoints';


export const GET_CAMPUS_REQUEST = 'GET_CAMPUS_REQUEST';
export const GET_CAMPUS_SUCCESS = 'GET_CAMPUS_SUCCESS';
export const GET_CAMPUS_FAILURE = 'GET_CAMPUS_FAILURE';

function _getCampus() {
  return {
    types: [GET_CAMPUS_REQUEST, GET_CAMPUS_SUCCESS, GET_CAMPUS_FAILURE],
    endpoint: {
      url: `${baseUrl()}/misc/campus`,
    },
  };
}

export function getCampus() {
  return async (dispatch, getState) => {
    if (getState().campus.loaded) return;
    await dispatch(_getCampus());
  };
}
