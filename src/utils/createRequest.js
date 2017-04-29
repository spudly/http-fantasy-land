const createRequest = nativeRequest => ({
  method: nativeRequest.method,
  url: nativeRequest.url,
  rawHeaders: nativeRequest.rawHeaders,
  headers: {
    ...nativeRequest.headers,
  },
});

export default createRequest;
