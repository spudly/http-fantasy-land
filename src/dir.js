import {parse} from 'url';
import path from 'path';
import sendFile from './sendFile';

const dir = rootPath => (response, request) => {
  const {pathname} = parse(request.url);
  const filePath = path.resolve(rootPath, pathname.substr(1));
  if (!filePath.startsWith(rootPath)) {
    return response; // refuse to handle request
  }
  try {
    return sendFile(filePath)(response, request);
  } catch (error) {
    return response;
  }
};

export default dir;
