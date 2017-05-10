import * as exports from './index.js';
import map from 'ramda/src/map';
import {METHODS} from 'http';

test('exports functions', () => {
  const exportTypes = map(value => typeof value, exports);
  expect(exportTypes).toMatchSnapshot();
});

test('exports a function for each method in http.METHODS', () => {
  METHODS.forEach(method => {
    const name = method.toLowerCase().replace(/-/g, '');
    expect(exports).toHaveProperty(name);
  });
});
