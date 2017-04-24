const createRequest = nativeRequest =>
  Object.freeze({
    method: nativeRequest.method,
    url: nativeRequest.url,
    headers: nativeRequest.headers,
  });

export default createRequest;
