import {
  SSO_TOKEN_REQUEST,
  SSO_TOKEN_SUCCESS,
  SSO_TOKEN_FAILURE,
  SSO_SET_TOKEN,
  SSO_RETRIEVE_REQUEST,
  SSO_RETRIEVE_SUCCESS,
  SSO_RETRIEVE_FAILURE,
} from 'app/actions/sso';


const initialState = {
  token: null,
  user: null,
  loading: false,
  loaded: false,
  error: null,
};

export default function ssoReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SSO_TOKEN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SSO_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.response.token,
        loading: false,
        loaded: true,
        error: null,
      };

    case SSO_TOKEN_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: true,
      };

    case SSO_SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case SSO_RETRIEVE_REQUEST:
      return {
        ...state,
      };

    case SSO_RETRIEVE_SUCCESS:
      return {
        ...state,
        user: action.response,
        loaded: true,
        error: null,
      };

    case SSO_RETRIEVE_FAILURE:
      return {
        ...state,
        token: null,
        user: null,
        loaded: true,
        error: true,
      };

    default:
      return state;
  }
}
