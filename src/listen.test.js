import listen from './listen';
import getPort from 'get-port';
import getStream from 'get-stream';
import http from 'http';

const get = (...args) => new Promise(resolve => http.get(...args, resolve));

test('serves the provided route', async () => {
  const port = await getPort();
  const route = jest.fn(() => ({
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: '{"it": "works"}',
  }));
  const stop = await listen(route, {port});

  const response = await get(`http://localhost:${port}/`);
  expect(route).toHaveBeenCalledTimes(1);
  expect(response.statusCode).toBe(200);
  expect(response.headers['content-type']).toBe('application/json');
  const body = await getStream(response);
  expect(body).toBe('{"it": "works"}');
  stop();
});

test('serves a 500 response if route throws an error', async () => {
  const port = await getPort();
  const route = jest.fn(() => {
    throw new Error('this ought to break things, eh?');
  });
  const stop = await listen(route, {port});

  const response = await get(`http://localhost:${port}/`);
  expect(route).toHaveBeenCalledTimes(1);
  expect(response.statusCode).toBe(500);
  expect(response.headers['content-type']).toBe('text/plain');
  const body = await getStream(response);
  expect(body).toBe('Internal Server Error');
  stop();
});
