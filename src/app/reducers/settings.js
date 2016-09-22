import {
  GET_SETTINGS_REQUEST,
  GET_SETTINGS_SUCCESS,
  GET_SETTINGS_FAILURE,
  SAVE_SETTINGS_REQUEST,
  SAVE_SETTINGS_SUCCESS,
  SAVE_SETTINGS_FAILURE,
} from 'app/actions/settings';


const initialState = {
  loading: false,
  loaded: false,
  error: null,
};

export default function settingsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_SETTINGS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_SETTINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        ...action.response,
      };

    case GET_SETTINGS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case SAVE_SETTINGS_REQUEST:
      return { ...state };

    case SAVE_SETTINGS_SUCCESS:
      return { ...state };

    case SAVE_SETTINGS_FAILURE:
      return { ...state };

    default:
      return state;
  }
}
