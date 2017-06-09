import setHeader from './setHeader';

test('sets a header', () => {
  const response = {
    statusCode: 200,
    headers: {
      Age: 310,
    },
  };
  expect(setHeader('Content-Type', 'text/css')(response, {})).toEqual({
    statusCode: 200,
    headers: {
      Age: 310,
      'Content-Type': 'text/css',
    },
  });
});
