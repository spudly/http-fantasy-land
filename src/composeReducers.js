import reduceRightAsync from './utils/reduceRightAsync';

const composeReducers = (...reducers) => (response, request) =>
  reduceRightAsync(reducers, (resp, reducer) => reducer(resp, request), response);

export default composeReducers;
