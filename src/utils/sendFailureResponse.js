const sendFailureResponse = (nativeResponse, error) => {
  // eslint-disable-next-line no-param-reassign
  nativeResponse.statusCode = 500;
  nativeResponse.end(error.stack);
};

export default sendFailureResponse;
