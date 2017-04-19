import fs from 'fs';
import compose from 'ramda/src/compose';
import assoc from 'ramda/src/assoc';
import mimeTypes from './utils/mimeTypes';
import {extname} from 'path';

const sendFile = file =>
  compose(
    assoc('body', fs.createReadStream(file)),
    assoc('status', 200),
    assoc('type', mimeTypes[extname(file)]),
  );

export default sendFile;
