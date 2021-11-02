const string = require('./string');

test('My String', () => {
  const myString = string.length === 8;
  expect(myString).toBe(false);
});
