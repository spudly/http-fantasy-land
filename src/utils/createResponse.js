const createResponse = () =>
  Object.freeze({
    status: 404,
    body: 'Not Found',
    type: 'text/plain',
  });

export default createResponse;
