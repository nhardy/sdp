import { fromPairs } from 'lodash-es';

import {
  GET_CAMPUS_REQUEST,
  GET_CAMPUS_SUCCESS,
  GET_CAMPUS_FAILURE,
} from 'app/actions/campus';


const initialState = {
  names: {},
  error: null,
  loaded: false,
  loading: false,
};

export default function campusReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CAMPUS_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case GET_CAMPUS_SUCCESS:
      return {
        ...state,
        names: fromPairs(action.response.Results.map(({ id, campus }) => [id, campus])),
        error: null,
        loaded: true,
        loading: false,
      };

    case GET_CAMPUS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
