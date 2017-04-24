import isString from './isString';

test('returns true if passed value is a string', () => {
  expect(isString('')).toBe(true);
});

test('returns false if passed value is not a string', () => {
  expect(isString({})).toBe(false);
  expect(isString({pipe: 'dreams'})).toBe(false);
  expect(isString([])).toBe(false);
  expect(isString(null)).toBe(false);
  expect(isString()).toBe(false);
  expect(isString(5)).toBe(false);
});
