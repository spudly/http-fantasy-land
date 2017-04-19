import isStream from './isStream';
import isString from './isString';
import sendString from './sendString';
import sendStream from './sendStream';

const sendResponse = (nativeResponse, response) => {
  if (response.type) {
    nativeResponse.setHeader('Content-Type', response.type);
  }

  // eslint-disable-next-line no-param-reassign
  nativeResponse.statusCode = response.status || 500;

  if (response.body) {
    if (isStream(response.body)) {
      sendStream(response.body, nativeResponse);
      return;
    }

    if (isString(response.body)) {
      sendString(response.body, nativeResponse);
      return;
    }
  }

  throw new Error('Invalid/Unset response body');
};

export default sendResponse;
