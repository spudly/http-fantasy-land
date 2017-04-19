import composeReducers from '../composeReducers';

const createHttpMethodReducer = method => (url, ...reducers) => (response, request) => {
  if (request.method === method && request.url === url) {
    return composeReducers(...reducers)(response, request);
  }
  return response;
};

export default createHttpMethodReducer;
