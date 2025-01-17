import { multiply, divide, sum } from './math';

describe('math', () => {
  describe('multiply', () => {
    it('should multiply positive numbers', () => {
      /// AAA - arrange, act, assert
      const expectedResult = 6;
      const result = multiply(3, 2);
      expect(result).toBe(expectedResult);
    })
    
    it('should multiply negative numbers', () => {
      const res = multiply(-3, -2);
      expect(res).toBe(6);
    })
  
    it('should multiply positive and negative numbers', () => {
      const res = multiply(3, -2);
      expect(res).toBe(-6);
    })
  })

  describe('divide', () => {
    it.each([
      {inputA: 6, inputB: 3, expected: 2},
      {inputA: 100, inputB: 1, expected: 100},
      {inputA: 10, inputB: 0, expected: Infinity}
    ])('should $inputA divided to $inputB equals $expected', ({inputA, inputB, expected}) => {
      const result = divide(inputA, inputB);
      expect(result).toBe(expected);
    })
  });

  describe('sum', () => {
    it('should sum 2 digits', () => {
      const expectedResult = 10;
      const result = sum(7, 3);
      expect(result).toBe(expectedResult);
    })
  });

  describe('base methods', () => {
    it('should expect methods', () => {
      const result = 4;
  
      expect({a: 1}).toEqual({a: 1});
      expect([1, 2, 3]).toHaveLength(3);
      expect([1, 2, 3]).not.toContain(4);
  
      expect(undefined).toBeUndefined();
      expect(null).toBeNull();
      expect(null).toBeFalsy();
  
      expect(result).toBeDefined(); // определено
      expect(result).toBeTruthy(); // значение не пустое
    })

    it.skip('should return Fail', () => {
      expect(2).toBe(3);
    })

    // it.only('should complete only this', () => {
    //   expect(3).toBe(3);
    // })
  })
})