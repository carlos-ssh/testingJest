const reverseString = require('./reverseString');
const revEs = reverseString();

it('reverse', () => {
  expect(revEs('hello')).toBe('olleh');
  expect(revEs('12345')).toBe('54321');
  expect(revEs('123456789')).toBe('987654321');
  expect(revEs('1234567890123456789')).toBe('9876543210987654321');
});