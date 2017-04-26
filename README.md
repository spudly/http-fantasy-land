# [WIP] http-fantasy-land

[![Build Status](https://travis-ci.org/spudly/http-fantasy-land.svg?branch=master)](https://travis-ci.org/spudly/http-fantasy-land)
[![eh?](https://codecov.io/gh/spudly/http-fantasy-land/branch/master/graph/badge.svg)](https://codecov.io/gh/spudly/http-fantasy-land)

An HTTP server library with a functional twist (a work in progress).

## Concepts

* functional
* composition
* immutability

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

### listen(route, {port: 8080}).then(stop => { stop(); });

The listen function takes a route and an options object. It then creates and starts a server and returns a promise that resolves to a `stop()` function that you can use to stop the server.

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
