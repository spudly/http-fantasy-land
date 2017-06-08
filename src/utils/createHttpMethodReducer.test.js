import createHttpMethodReducer from './createHttpMethodReducer';

test('creates a reducer that calls the route when the method and path match', () => {
  const getChocolate = createHttpMethodReducer('GET', '/chocolate', response => ({
    ...response,
    chocolate: 'dark',
  }));

  expect(getChocolate({}, {method: 'GET', url: '/chocolate'})).toEqual({
    chocolate: 'dark',
  });
});

test('populates request.params', () => {
  const getChocolate = createHttpMethodReducer('GET', '/:one/:two/:three', (response, request) => ({
    ...response,
    requestParams: request.params,
  }));

  expect(getChocolate({}, {method: 'GET', url: '/1/2/3'})).toEqual({
    requestParams: {
      one: '1',
      two: '2',
      three: '3',
    },
  });
});
