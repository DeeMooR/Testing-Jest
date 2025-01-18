it('global variable is defined', () => {
  expect(global.myGlobalVariable).toBe('Hello, World!');
  expect(global.__DEV__).toBeTruthy();
  expect(global.SECRET_TOKEN).toBeTruthy();
})

test('is within range', () => expect(100).toBeWithinRange(90, 110));

test('is NOT within range', () => expect(101).not.toBeWithinRange(0, 100));