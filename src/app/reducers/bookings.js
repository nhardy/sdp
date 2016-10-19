import { camelCaseObject } from 'app/lib/util';
import {
  GET_BOOKINGS_REQUEST,
  GET_BOOKINGS_SUCCESS,
  GET_BOOKINGS_FAILURE,
  MAKE_BOOKING_REQUEST,
  MAKE_BOOKING_SUCCESS,
  MAKE_BOOKING_FAILURE,
  ADD_WAIT_LIST_REQUEST,
  ADD_WAIT_LIST_SUCCESS,
  ADD_WAIT_LIST_FAILURE,
} from 'app/actions/bookings';


const initialState = {
  items: [],
  error: null,
  loaded: false,
  loading: false,
};

export default function bookingsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKINGS_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case GET_BOOKINGS_SUCCESS:
      return {
        ...state,
        items: action.response.Results.map(camelCaseObject),
        error: null,
        loaded: true,
        loading: false,
      };

    case GET_BOOKINGS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case MAKE_BOOKING_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case MAKE_BOOKING_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
      };

    case MAKE_BOOKING_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case ADD_WAIT_LIST_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case ADD_WAIT_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
      };

    case ADD_WAIT_LIST_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
