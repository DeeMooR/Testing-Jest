export const createUser = ({
  firstName,
  lastName,
  phone = '',
  email = '',
}) => ({
  type: 'USER',
  firstName,
  lastName,
  password: 'password',
  phone,
  email,
});
