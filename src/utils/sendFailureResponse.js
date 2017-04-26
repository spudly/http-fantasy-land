const sendFailureResponse = nativeResponse => {
  // eslint-disable-next-line no-param-reassign
  nativeResponse.statusCode = 500;
  nativeResponse.setHeader('Content-Type', 'text/plain');
  nativeResponse.end('Internal Server Error');
};

export default sendFailureResponse;
