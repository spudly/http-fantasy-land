import isStream from './isStream';
import {Readable} from 'stream';

test('returns true if passed value is a stream', () => {
  const stream = new Readable();
  expect(isStream(stream)).toBe(true);
});

test('returns false if passed value is not a stream', () => {
  expect(isStream({})).toBe(false);
  expect(isStream({pipe: 'dreams'})).toBe(false);
  expect(isStream('')).toBe(false);
  expect(isStream([])).toBe(false);
  expect(isStream(null)).toBe(false);
  expect(isStream()).toBe(false);
  expect(isStream(5)).toBe(false);
});
