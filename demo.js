import {listen, get} from './src';

listen(
  get('/', () => ({
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: `
      <!doctype html>
      <html>
        <head>
          <title>Server Demo</title>
        </head>
        <body>
          It works!
        </body>
      </html>
    `,
  })),
  {port: 8080},
)
  .then(() => console.log('Listening: http://localhost:8080/')) // eslint-disable-line no-console
  .catch(error => console.error(error)); // eslint-disable-line no-console
