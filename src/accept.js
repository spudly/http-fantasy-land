import {mediaTypes} from 'accept';
import find from 'ramda/src/find';
import has from 'ramda/src/has';
import flip from 'ramda/src/flip';

const isHadBy = flip(has);

const accept = routeMap => (response, request) => {
  const types = mediaTypes(request.headers.accept);
  const route = find(isHadBy(routeMap), types);
  return route ? route(response, request) : response;
};

export default accept;
