import {parse} from 'cookie';
import curry from 'ramda/src/curry';

const getCookie = curry((name, request) => parse(request.headers.cookie)[name]);

export default getCookie;
