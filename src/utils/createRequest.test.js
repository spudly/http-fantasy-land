import createRequest from './createRequest';

test('creates a request object from the passed http request object', () => {
  const nativeRequest = {
    method: 'POST',
    url: '/path/to/something',
    rawHeaders: ['Accept', 'text/css'],
    headers: {
      Accept: 'text/css',
    },
  };

  expect(createRequest(nativeRequest)).toMatchSnapshot();
});
