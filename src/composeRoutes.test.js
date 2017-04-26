import composeRoutes from './composeRoutes';

test('composes routes from right to left', async () => {
  const request = {};
  const initialResponse = {};
  const bob = jest.fn(response => ({
    ...response,
    body: {...response.body, bob: true, last: 'bob'},
  }));
  const joe = jest.fn(response => ({
    ...response,
    body: {joe: true, last: 'joe'},
  }));
  const composedRoute = composeRoutes(bob, joe);
  const result = await composedRoute(initialResponse, request);
  expect(joe).toHaveBeenCalledWith(initialResponse, request);
  expect(bob).toHaveBeenCalledWith(
    expect.objectContaining({
      body: {
        joe: true,
        last: 'joe',
      },
    }),
    request,
  );
  expect(result).toEqual({
    body: {
      last: 'bob',
      bob: true,
      joe: true,
    },
  });
});
