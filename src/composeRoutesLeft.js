import reduceAsync from './utils/reduceAsync';

const composeRoutesLeft = (...routes) => (response, request) =>
  reduceAsync(routes, (resp, reducer) => reducer(resp, request), response);

export default composeRoutesLeft;
