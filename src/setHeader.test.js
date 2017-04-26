import setHeader from './setHeader';

test('sets a header', () => {
  const response = {
    status: 200,
    headers: {
      Age: 310,
    },
  };
  expect(setHeader('Content-Type', 'text/css')(response, {})).toEqual({
    status: 200,
    headers: {
      Age: 310,
      'Content-Type': 'text/css',
    },
  });
});
