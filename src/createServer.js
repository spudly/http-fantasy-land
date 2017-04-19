import http from 'http';
import createRequest from './utils/createRequest';
import createResponse from './utils/createResponse';
import sendResponse from './utils/sendResponse';
import sendFailureResponse from './utils/sendFailureResponse';

const createServer = async (reducer, {port}) => {
  const server = http.createServer(async (nativeRequest, nativeResponse) => {
    try {
      const request = createRequest(nativeRequest);
      const response = await reducer(createResponse(), request);
      sendResponse(nativeResponse, response);
    } catch (error) {
      sendFailureResponse(nativeResponse);
    }
  });

  await new Promise((resolve, reject) => {
    server.listen(port).on('listening', resolve).once('error', reject);
  });

  return () => server.close();
};

export default createServer;
