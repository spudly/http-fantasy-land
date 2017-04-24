import composeRoutes from '../composeRoutes';

const createHttpMethodReducer = method => (url, ...routes) => (response, request) => {
  if (request.method === method && request.url === url) {
    return composeRoutes(...routes)(response, request);
  }
  return response;
};

export default createHttpMethodReducer;
