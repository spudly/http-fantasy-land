import http from 'http';
import https from 'https';
import createRequest from './utils/createRequest';
import createResponse from './utils/createResponse';
import sendResponse from './utils/sendResponse';
import sendFailureResponse from './utils/sendFailureResponse';

const listen = async (reducer, options) => {
  const {port, host, backlog, ssl, ...httpsOptions} = options;
  const requestListener = async (nativeRequest, nativeResponse) => {
    try {
      const request = createRequest(nativeRequest);
      const response = await reducer(createResponse(), request);
      sendResponse(nativeResponse, response);
    } catch (error) {
      sendFailureResponse(nativeResponse, error);
    }
  };
  const server = ssl
    ? https.createServer(httpsOptions, requestListener)
    : http.createServer(requestListener);

  await new Promise((resolve, reject) => {
    server.listen(port, host, backlog).on('listening', resolve).once('error', reject);
  });

  return () => server.close();
};

export default listen;
