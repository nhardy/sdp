import config from 'app/config';


export const GET_WORKSHOP_SETS_REQUEST = 'GET_WORKSHOP_SETS_REQUEST';
export const GET_WORKSHOP_SETS_SUCCESS = 'GET_WORKSHOP_SETS_SUCCESS';
export const GET_WORKSHOP_SETS_FAILURE = 'GET_WORKSHOP_SETS_FAILURE';

export const GET_WORKSHOPS_REQUEST = 'GET_WORKSHOPS_REQUEST';
export const GET_WORKSHOPS_SUCCESS = 'GET_WORKSHOPS_SUCCESS';
export const GET_WORKSHOPS_FAILURE = 'GET_WORKSHOPS_FAILURE';

export function getWorkshopSets() {
  return {
    types: [GET_WORKSHOP_SETS_REQUEST, GET_WORKSHOP_SETS_SUCCESS, GET_WORKSHOP_SETS_FAILURE],
    endpoint: {
      url: `${config.helpsProxied.baseUrl}/workshop/workshopSets/true`,
    },
  };
}

export function getWorkshops(workshopSetId) {
  return {
    types: [GET_WORKSHOPS_REQUEST, GET_WORKSHOPS_SUCCESS, GET_WORKSHOPS_FAILURE],
    endpoint: {
      url: `${config.helpsProxied.baseUrl}/workshop/search`,
      query: {
        workshopSetId,
      },
    },
  };
}
