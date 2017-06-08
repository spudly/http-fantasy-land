import getCookie from './getCookie';

test('gets a cookie', () => {
  const request = {
    headers: {
      cookie: 'chocolate=chip',
    },
  };
  expect(getCookie('chocolate', request)).toBe('chip');
  expect(getCookie('chocolate')(request)).toBe('chip');
});
