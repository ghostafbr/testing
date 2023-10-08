const { sum, multiply, divide } = require('./02-math');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multiply 2 * 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('divide 6 / 3 to equal 2', () => {
  expect(divide(6, 3)).toBe(2);
});

test('divide 6 / 0 to equal Infinity', () => {
  expect(divide(6, 0)).toBe(Infinity);
});
