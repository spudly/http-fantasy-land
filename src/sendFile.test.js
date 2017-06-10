import fs from 'fs';
import getStream from 'get-stream';
import sendFile from './sendFile';

test('sets statusCode:200, Content-Type header, body to a readable stream', async () => {
  const file = `${__dirname}/sendFile.js`;
  const response = await sendFile(file)({}, {});
  expect(response.statusCode).toBe(200);
  expect(response.headers).toEqual({
    'Content-Type': 'application/javascript',
  });
  expect(await getStream(response.body)).toBe(await getStream(fs.createReadStream(file)));
});

test('if path is a directory, rejects promise', async () => {
  await expect(sendFile(__dirname)({}, {})).rejects.toBeInstanceOf(Error);
});

test('if path doesnt exist, returns unmodified response', async () => {
  const response = {};
  const request = {};
  const response2 = await sendFile(`${__dirname}/noexist.html`)(response, request);
  expect(response2).toBe(response);
});
