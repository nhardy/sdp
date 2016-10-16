import baseUrl from 'app/lib/endpoints';
import { ensureToken } from 'app/actions/sso';


export const GET_BOOKINGS_REQUEST = 'GET_BOOKINGS_REQUEST';
export const GET_BOOKINGS_SUCCESS = 'GET_BOOKINGS_SUCCESS';
export const GET_BOOKINGS_FAILURE = 'GET_BOOKINGS_FAILURE';

export const MAKE_BOOKING_REQUEST = 'MAKE_BOOKING_REQUEST';
export const MAKE_BOOKING_SUCCESS = 'MAKE_BOOKING_SUCCESS';
export const MAKE_BOOKING_FAILURE = 'MAKE_BOOKING_FAILURE';

export const ADD_WAIT_LIST_REQUEST = 'ADD_WAIT_LIST_REQUEST';
export const ADD_WAIT_LIST_SUCCESS = 'ADD_WAIT_LIST_SUCCESS';
export const ADD_WAIT_LIST_FAILURE = 'ADD_WAIT_LIST_FAILURE';

function _getBookings({ token }) {
  return {
    types: [GET_BOOKINGS_REQUEST, GET_BOOKINGS_SUCCESS, GET_BOOKINGS_FAILURE],
    endpoint: {
      url: `${baseUrl()}/workshop/booking/search`,
      query: {
        active: 'true',
        token,
      },
    },
  };
}

export function getBookings() {
  return async (dispatch, getState) => {
    await dispatch(ensureToken());
    const { token } = getState().sso;
    if (!token) return;
    await dispatch(_getBookings({ token }));
  };
}

function _makeBooking({ workshopId, token }) {
  return {
    types: [MAKE_BOOKING_REQUEST, MAKE_BOOKING_SUCCESS, MAKE_BOOKING_FAILURE],
    endpoint: {
      url: `${baseUrl()}/workshop/booking/create`,
      method: 'POST',
      query: {
        workshopId,
        token,
      },
    },
  };
}

export function makeBooking(workshopId) {
  return async (dispatch, getState) => {
    await dispatch(ensureToken());
    const { token } = getState().sso;
    if (!token) return;
    await dispatch(_makeBooking({ workshopId, token }));
  };
}

function _addWaitList({ workshopId, token }) {
  return {
    types: [ADD_WAIT_LIST_REQUEST, ADD_WAIT_LIST_SUCCESS, ADD_WAIT_LIST_FAILURE],
    endpoint: {
      url: `${baseUrl()}/workshop/wait/create`,
      method: 'POST',
      query: {
        workshopId,
        token,
      },
    },
  };
}

export function addWaitList(workshopId) {
  return async (dispatch, getState) => {
    await dispatch(ensureToken());
    const { token } = getState().sso;
    if (!token) return;
    await dispatch(_addWaitList({ workshopId, token }));
  };
}
