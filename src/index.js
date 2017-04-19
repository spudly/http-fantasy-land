import createHttpMethodReducer from './utils/createHttpMethodReducer';

export {default as createServer} from './createServer';
export {default as composeReducers} from './composeReducers';
export {default as sendFile} from './sendFile';

export const get = createHttpMethodReducer('GET');
export const head = createHttpMethodReducer('HEAD');
export const post = createHttpMethodReducer('POST');
export const put = createHttpMethodReducer('PUT');
export const del = createHttpMethodReducer('DELETE');
export const connect = createHttpMethodReducer('CONNECT');
export const options = createHttpMethodReducer('OPTIONS');
export const trace = createHttpMethodReducer('TRACE');
export const patch = createHttpMethodReducer('PATCH');
