import { createUser } from "../createUser";

describe('createUser', () => {
  it('should create a user with firstName and lastName only', () => {
    const user = createUser({
      firstName: 'John',
      lastName: 'Doe',
    });

    expect(user).toMatchSnapshot();
  });

  it('should create a user with firstName, lastName, and phone', () => {
    const user = createUser({
      firstName: 'Anton',
      lastName: 'Doe',
      phone: '123-456-7890',
    });

    expect(user).toMatchSnapshot();
  });

  it('should create a user with firstName, lastName, and email', () => {
    const user = createUser({
      firstName: 'John',
      lastName: 'Doen',
      email: 'dummy@email.com',
    });

    expect(user).toMatchSnapshot();
  });
});
