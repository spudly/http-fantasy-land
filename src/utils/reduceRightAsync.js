import reduceAsync from './reduceAsync';

const reduceRightAsync = (array, reducer, initialValue) =>
  reduceAsync(array.reverse(), reducer, initialValue);

export default reduceRightAsync;
