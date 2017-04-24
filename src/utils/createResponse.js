const createResponse = () =>
  Object.freeze({
    status: 404,
    body: 'Not Found',
    headers: {
      'Content-Type': 'text/plain',
    },
  });

export default createResponse;
