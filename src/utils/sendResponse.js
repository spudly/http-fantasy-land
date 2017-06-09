import forEachObjIndexed from 'ramda/src/forEachObjIndexed';
import isStream from './isStream';
import isString from './isString';
import sendString from './sendString';
import sendStream from './sendStream';
import isPlainObject from 'lodash.isplainobject';

const sendResponse = (nativeResponse, response) => {
  // eslint-disable-next-line no-param-reassign
  nativeResponse.statusCode = response.statusCode || 500;

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
  }

  throw new Error('Invalid/Unset response body');
};

export default sendResponse;
