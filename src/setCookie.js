import {serialize} from 'cookie';
import curry from 'ramda/src/curry';
import pathOr from 'ramda/src/pathOr';

const getSetCookie = pathOr([], ['headers', 'response']);

const setCookie = curry((name, value, options, response) => ({
  ...response,
  headers: {
    ...response.headers,
    'set-cookie': [...getSetCookie(response), serialize(name, value, options)],
  },
}));

export default setCookie;
