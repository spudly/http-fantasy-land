import * as exports from './index.js';
import map from 'ramda/src/map';

test('exports functions', () => {
  const exportTypes = map(value => typeof value, exports);
  expect(exportTypes).toMatchSnapshot();
});
