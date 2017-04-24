import deepFreeze from 'deep-freeze';

const createRequest = nativeRequest =>
  deepFreeze({
    method: nativeRequest.method,
    url: nativeRequest.url,
    headers: {
      ...nativeRequest.headers,
    },
  });

export default createRequest;
