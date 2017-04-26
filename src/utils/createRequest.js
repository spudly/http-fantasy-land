const createRequest = nativeRequest => ({
  method: nativeRequest.method,
  url: nativeRequest.url,
  headers: {
    ...nativeRequest.headers,
  },
});

export default createRequest;
