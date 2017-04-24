import curry from 'ramda/src/curry';

const setHeader = curry((name, value, response) => ({
  ...response,
  headers: {
    ...response.headers,
    [name]: value,
  },
}));

export default setHeader;
