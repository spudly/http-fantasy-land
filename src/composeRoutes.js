import reduceRightAsync from './utils/reduceRightAsync';

const composeRoutes = (...routes) => (response, request) =>
  reduceRightAsync(routes, (resp, reducer) => reducer(resp, request), response);

export default composeRoutes;
