import { toLower, toUpper, len } from './strings';

describe('strings', () => {
  describe('toUpper', () => {
    it.each([
      {input: 'dima', expected: 'DIMA'},
      {input: '', expected: ''},
      {input: '1', expected: '1'},
      {input: 'heLLo WorLd', expected: 'HELLO WORLD'}
    ])('should return $expected for $input', ({input, expected}) => {
      const result = toUpper(input);
      expect(result).toBe(expected);
    })
  });

  describe('toLower', () => {
    it.each([
      {input: 'DIMA', expected: 'dima'},
      {input: '', expected: ''},
      {input: '100', expected: '100'},
      {input: 'heLLo WorLd', expected: 'hello world'}
    ])('should return $expected for $input', ({input, expected}) => {
      const result = toLower(input);
      expect(result).toBe(expected);
    })
  });

  describe('length', () => {
    it.each([
      {input: 'Hello World', expected: 11},
      {input: '', expected: 0},
      {input: '100', expected: 3},
    ])('should return $expected for $input', ({input, expected}) => {
      const result = len(input);
      expect(result).toBe(expected);
    })
  })
})