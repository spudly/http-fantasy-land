# [WIP] http-fantasy-land

An HTTP server library with a functional twist (a work in progress).

## Concepts

* functional
* composition
* immutability

## API

### route functions

A route is a function that, given a request object and a response object, returns a new response (or a promise that resolves to one).

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

### listen(route, options).then(stop => { stop(); });

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
