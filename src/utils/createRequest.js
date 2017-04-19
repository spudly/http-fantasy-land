const createRequest = nativeRequest =>
  Object.freeze({
    method: nativeRequest.method,
    url: nativeRequest.url,
  });

export default createRequest;
