import forEachObjIndexed from 'ramda/src/forEachObjIndexed';
import isStream from './isStream';
import isString from './isString';
import sendString from './sendString';
import sendStream from './sendStream';
import isPlainObject from 'lodash.isplainobject';

const sendResponse = (nativeResponse, response) => {
  /* eslint-disable no-param-reassign */
  nativeResponse.statusCode = response.statusCode || 500;
  if (response.statusMessage) {
    nativeResponse.statusMessage = response.statusMessage;
  }

  forEachObjIndexed((value, key) => {
    nativeResponse.setHeader(key, value);
  }, response.headers);

  if (response.body) {
    if (isStream(response.body)) {
      sendStream(response.body, nativeResponse);
      return;
    }

    if (isString(response.body)) {
      sendString(response.body, nativeResponse);
      return;
    }

    if (isPlainObject(response.body)) {
      sendString(JSON.stringify(response.body), nativeResponse);
      return;
    }
    /* eslint-enable no-param-reassign */
  }

  throw new Error('Invalid/Unset response body');
};

export default sendResponse;
