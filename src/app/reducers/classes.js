import {
  GET_WORKSHOP_SETS_REQUEST,
  GET_WORKSHOP_SETS_SUCCESS,
  GET_WORKSHOP_SETS_FAILURE,
  GET_WORKSHOPS_REQUEST,
  GET_WORKSHOPS_SUCCESS,
  GET_WORKSHOPS_FAILURE,
} from 'app/actions/classes';


const initialState = {
  workshopSets: {
    loading: false,
    loaded: false,
    items: [],
  },
  workshops: {},
};

export default function classesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_WORKSHOP_SETS_REQUEST:
      return {
        ...state,
        workshopSets: {
          ...state.workshopSets,
          loading: true,
        },
      };

    case GET_WORKSHOP_SETS_SUCCESS:
      return {
        ...state,
        workshopSets: {
          ...state.workshopSets,
          loading: false,
          loaded: true,
          items: action.response.Results,
        },
      };

    case GET_WORKSHOP_SETS_FAILURE:
      return {
        ...state,
        workshopSets: {
          ...state.workshopSets,
          loading: false,
          error: action.error,
        },
      };

    case GET_WORKSHOPS_REQUEST:
      return {
        ...state,
        workshops: {
          ...state.workshops,
          [action.workshopSetId]: {
            ...state.workshops[action.workshopSetId],
            loading: true,
          },
        },
      };

    case GET_WORKSHOPS_SUCCESS:
      return {
        ...state,
        workshops: {
          ...state.workshops,
          [action.workshopSetId]: {
            ...state.workshops[action.workshopSetId],
            loading: false,
            loaded: true,
            items: action.response.Results,
          },
        },
      };

    case GET_WORKSHOPS_FAILURE:
      return {
        ...state,
        workshops: {
          ...state.workshops,
          [action.workshopSetId]: {
            ...state.workshops[action.workshopSetId],
            loading: false,
            error: action.error,
          },
        },
      };

    default:
      return state;
  }
}
