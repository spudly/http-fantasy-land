import pathToRegex from 'path-to-regexp';
import zipObj from 'ramda/src/zipObj';
import curry from 'ramda/src/curry';

const createHttpMethodReducer = curry((method, url, route) => {
  const keyObjects = []; // populated by path-to-regexp. ew!
  const regex = pathToRegex(url, keyObjects);
  const keys = keyObjects.map(o => o.name);
  return (response, request) => {
    if (request.method === method) {
      const matches = regex.exec(request.url);
      if (matches) {
        const [, ...values] = matches;
        return route(response, {
          ...request,
          params: zipObj(keys, values),
        });
      }
    }
    return response;
  };
});

export default createHttpMethodReducer;
