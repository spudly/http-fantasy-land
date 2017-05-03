import {parse} from 'url';
import path from 'path';
import sendFile from './sendFile';

const dir = rootPath => async (response, request) => {
  const resolvedRootPath = path.resolve(rootPath);
  const {pathname} = parse(request.url);
  const filePath = path.resolve(resolvedRootPath, pathname.substr(1));
  if (!filePath.startsWith(resolvedRootPath)) {
    return response;
  }
  try {
    return await sendFile(filePath)(response, request);
  } catch (error) {
    if (error.code === 'EISDIR') {
      return sendFile(`${filePath}/index.html`)(response, request);
    }
    return response;
  }
};

export default dir;
