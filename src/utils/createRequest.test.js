import createRequest from './createRequest';

test('creates a request object from the passed http request object', () => {
  const nativeRequest = {
    method: 'POST',
    url: '/path/to/something',
    rawHeaders: ['Accept', 'text/css'],
    headers: {
      Accept: 'text/css',
    },
    httpVersion: '1.1',
    httpVersionMajor: '1',
    httpVersionMinor: '1',
  };

  expect(createRequest(nativeRequest)).toMatchSnapshot();
});
