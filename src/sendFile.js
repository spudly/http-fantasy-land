import fs from 'fs';
import mimeTypes from './utils/mimeTypes';
import {extname} from 'path';
import pify from 'pify';

const stat = pify(fs.stat);

const sendFile = file => async response => {
  try {
    const stats = await stat(file);
    if (stats.isDirectory()) {
      const error = new Error('EISDIR');
      error.code = 'EISDIR';
      throw error;
    }
    return {
      ...response,
      body: fs.createReadStream(file),
      statusCode: 200,
      headers: {
        ...response.headers,
        'Content-Type': mimeTypes[extname(file).substr(1)],
      },
    };
  } catch (error) {
    if (error.code === 'ENOENT') {
      return response;
    }
    throw error;
  }
};

export default sendFile;
