import createHttpMethodReducer from './utils/createHttpMethodReducer';

export {default as listen} from './listen';
export {default as composeRoutes} from './composeRoutes';
export {default as composeRoutesLeft} from './composeRoutesLeft';
export {default as sendFile} from './sendFile';
export {default as setHeader} from './setHeader';
export {default as dir} from './dir';

export const get = createHttpMethodReducer('GET');
export const head = createHttpMethodReducer('HEAD');
export const post = createHttpMethodReducer('POST');
export const put = createHttpMethodReducer('PUT');
export const del = createHttpMethodReducer('DELETE');
export const connect = createHttpMethodReducer('CONNECT');
export const options = createHttpMethodReducer('OPTIONS');
export const trace = createHttpMethodReducer('TRACE');
export const patch = createHttpMethodReducer('PATCH');
