import {createServer} from './src';

createServer(
  () => ({
    type: 'text/html',
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
  }),
  {port: 8080},
).then(() => console.log('listening!'));
