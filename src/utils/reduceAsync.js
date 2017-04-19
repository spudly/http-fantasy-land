const reduceAsync = async (array, reducer, initialValue) => {
  let value = initialValue;
  for (let i = 0; i < array.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    value = await reducer(value, array[i]);
  }
  return value;
};

export default reduceAsync;
