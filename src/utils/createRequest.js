const createRequest = nativeRequest => ({
  method: nativeRequest.method,
  url: nativeRequest.url,
  rawHeaders: nativeRequest.rawHeaders,
  headers: {...nativeRequest.headers},
  httpVersion: nativeRequest.httpVersion,
  httpVersionMajor: nativeRequest.httpVersionMajor,
  httpVersionMinor: nativeRequest.httpVersionMinor,
});

export default createRequest;
