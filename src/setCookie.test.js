import setCookie from './setCookie';

test('adds a set-cookie header to the response', () => {
  const response = {};
  const responseWithCookie = setCookie('chocolate', 'chip', {
    domain: 'test.com',
    httpOnly: true,
    maxAge: 600,
    sameSite: true,
    secure: true,
  })(response);
  expect(responseWithCookie).toEqual({
    headers: {
      'set-cookie': [
        'chocolate=chip; Max-Age=600; Domain=test.com; HttpOnly; Secure; SameSite=Strict',
      ],
    },
  });
});
