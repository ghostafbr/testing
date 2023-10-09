// matchers

test('tests pbj', () => {
  const data = { name: 'Andrés' };
  data.lastName = 'Felipe';
  expect(data).toEqual({ name: 'Andrés', lastName: 'Felipe' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('Andrés Felipe').toMatch(/Felipe/);
});

test('array', () => {
  const data = ['Andrés', 'Felipe', 'Giraldo'];
  expect(data).toContain('Felipe');
});
