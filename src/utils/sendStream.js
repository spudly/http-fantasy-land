const sendStream = (stream, nativeResponse) => stream.pipe(nativeResponse);

export default sendStream;
