import fs from 'fs';
import compose from 'ramda/src/compose';
import assoc from 'ramda/src/assoc';
import mimeTypes from './utils/mimeTypes';
import setHeader from './utils/setHeader';
import {extname} from 'path';

const sendFile = file =>
  compose(
    response => assoc('body', fs.createReadStream(file), response),
    assoc('status', 200),
    setHeader('Content-Type', mimeTypes[extname(file).substr(1)]),
  );

export default sendFile;
