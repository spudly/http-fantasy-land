import mimeTypes from './mimeTypes';

test('provides a map of extensions to mime types', () => {
  expect(mimeTypes).toMatchObject({
    css: 'text/css',
    html: 'text/html',
    js: 'application/javascript',
    json: 'application/json',
  });
});
