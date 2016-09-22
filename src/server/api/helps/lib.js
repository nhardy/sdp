export function rejectOnError(response) { // eslint-disable-line import/prefer-default-export
  const { IsSuccess, DisplayMessage } = response;
  if (IsSuccess) return Promise.resolve(response);
  const error = new Error(`Received an invalid response from the HELPS API upstream: '${DisplayMessage}'`);
  error.response = response;
  return Promise.reject(error);
}
