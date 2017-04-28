# [WIP] http-fantasy-land

[![Build Status](https://travis-ci.org/spudly/http-fantasy-land.svg?branch=master)](https://travis-ci.org/spudly/http-fantasy-land)
[![eh?](https://codecov.io/gh/spudly/http-fantasy-land/branch/master/graph/badge.svg)](https://codecov.io/gh/spudly/http-fantasy-land)

A web server library that allows you to create your server using functional concepts.

## Getting Started

`npm install --save http-fantasy-land`

```
import {listen, get} from 'http-fantasy-land';

const home = (response, request) => ({
  ...response,
  statusCode: 200,
  body: 'It works!',
});

const router = composeRoutes(
  get('/', home),
);

listen(router, {port: 8080}).then(stop => {
  console.log('Listening @ http://localhost:8080');
});
```

## API

### route functions

A route is a function that, given a request object and a response object, returns a new response (or a promise that resolves to one).

[TODO: elaborate]

### request

The request object is serialized, immutable representation of an [http.IncomingMessage](https://nodejs.org/dist/latest/docs/api/http.html#http_class_http_incomingmessage) object.

```js
{
  method: String,
  url: String,
  headers: {
    [key: String]: String,
  },
}
```

### response

The response object is a serialized, immutable representation of an [http.ServerResponse](https://nodejs.org/dist/latest/docs/api/http.html#http_class_http_serverresponse) object.

```js
{
  status: Number,
  body: String|Stream,
  headers: {
    [key: String]: String,
  },
}
```

### listen
`listen :: ((Object, Object) -> Object, Object) -> Promise<() -> void>`

**Description:**
Creates and starts a http/https server using the supplied route and options. Returns a promise that resolves to a `stop()` function.

<details>
  <summary><strong>Arguments</strong></summary>
  <dl>
    <dt>route :: (Object, Object) -> Object</dt>
    <dd>A Route function. Accepts a response object and a request object. Returns a new response object.</dd>
    <dt>options :: Object</dt>
    <dd>

Server Configuration Options. Accepts port, hostname, and backlog from [http.listen](https://nodejs.org/dist/latest-v7.x/docs/api/http.html#http_server_listen_port_hostname_backlog_callback), as well as any option accepted by [https.createServer](https://nodejs.org/dist/latest-v7.x/docs/api/https.html#https_https_createserver_options_requestlistener)

See the links above for detailed descriptions of each option.
    </dd>
  </dl>
</details>

**Return Value:** Function - A function that stops the server.

<details>
  <summary><strong>Example:</strong></summary>

```js
listen(route, {port: 8080}).then(stop => {
  console.log('Listening @ http://localhost:8080');
  setTimeout(() => {
    stop();
    console.log('Server stopped!');
  }, 500);
});
```
</details>

### composeRoutes(...routes) => route

### sendFile(file) => route

### setHeader(name)(value) => route

### get('/path', route) => route

### head('/path', route) => route

### post('/path', route) => route

### put('/path', route) => route

### del('/path', route) => route

### connect('/path', route) => route

### options('/path', route) => route

### trace('/path', route) => route

### patch('/path', route) => route

## Compatibility

[TODO: document usage w/ express/connect/etc.]
