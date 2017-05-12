const createHttpMethodReducer = method => (url, route) => (response, request) => {
  if (request.method === method && request.url === url) {
    return route(response, request);
  }
  return response;
};

export default createHttpMethodReducer;
