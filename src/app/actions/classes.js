import baseUrl from 'app/lib/endpoints';


export const GET_WORKSHOP_SETS_REQUEST = 'GET_WORKSHOP_SETS_REQUEST';
export const GET_WORKSHOP_SETS_SUCCESS = 'GET_WORKSHOP_SETS_SUCCESS';
export const GET_WORKSHOP_SETS_FAILURE = 'GET_WORKSHOP_SETS_FAILURE';

export const GET_WORKSHOPS_REQUEST = 'GET_WORKSHOPS_REQUEST';
export const GET_WORKSHOPS_SUCCESS = 'GET_WORKSHOPS_SUCCESS';
export const GET_WORKSHOPS_FAILURE = 'GET_WORKSHOPS_FAILURE';

export const GET_WORKSHOP_REQUEST = 'GET_WORKSHOP_REQUEST';
export const GET_WORKSHOP_SUCCESS = 'GET_WORKSHOP_SUCCESS';
export const GET_WORKSHOP_FAILURE = 'GET_WORKSHOP_FAILURE';

export function getWorkshopSets() {
  return {
    types: [GET_WORKSHOP_SETS_REQUEST, GET_WORKSHOP_SETS_SUCCESS, GET_WORKSHOP_SETS_FAILURE],
    endpoint: {
      url: `${baseUrl()}/workshop/workshopSets/true`,
    },
  };
}

export function getWorkshops(workshopSetId) {
  return {
    types: [GET_WORKSHOPS_REQUEST, GET_WORKSHOPS_SUCCESS, GET_WORKSHOPS_FAILURE],
    workshopSetId,
    endpoint: {
      url: `${baseUrl()}/workshop/search`,
      query: {
        active: 'true',
        workshopSetId,
      },
    },
  };
}

export function getWorkshop(workshopId) {
  return {
    types: [GET_WORKSHOP_REQUEST, GET_WORKSHOP_SUCCESS, GET_WORKSHOP_FAILURE],
    workshopId,
    endpoint: {
      url: `${baseUrl()}/workshop/${workshopId}`,
    },
  };
}
