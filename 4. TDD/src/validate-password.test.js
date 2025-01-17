import { validatePassword } from './validate-password';

import { passwordValidationErrors } from './constants';

describe('validatePassword', () => {
  it('should return {success: true, error: null} for a valid password', () => {
    const validPassword = 'MyPassword67!';
    const expectedResult = {
      success: true,
      error: null
    }

    expect(validatePassword(validPassword)).toEqual(expectedResult);
  });
  it('should validate a password against 8 minimum characters and return error message', () => {
    const invalidPassword = 'Pass67!';
    const expectedResult = {
      success: false,
      error: passwordValidationErrors.length
    }

    expect(validatePassword(invalidPassword)).toEqual(expectedResult);
  });
  it('should validate a password against mixed case', () => {
    const invalidPassword = 'password67!';
    const invalidPassword2 = 'PASSWORD67!!';
    const expectedResult = {
      success: false,
      error: passwordValidationErrors.case
    }

    expect(validatePassword(invalidPassword)).toEqual(expectedResult);
    expect(validatePassword(invalidPassword2)).toEqual(expectedResult);
  });
  it('should validate a password against digits and characters', () => {
    const invalidPassword = 'MyPassword!';
    const expectedResult = {
      success: false,
      error: passwordValidationErrors.number
    }

    expect(validatePassword(invalidPassword)).toEqual(expectedResult);
  });
  it('should validate a password against special character', () => {
    const invalidPassword = 'MyPassword67';
    const expectedResult = {
      success: false,
      error: passwordValidationErrors.special
    }

    expect(validatePassword(invalidPassword)).toEqual(expectedResult);
  });
});
