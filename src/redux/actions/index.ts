export const USER_EMAIL = 'USER_EMAIL';

const action = (email: string) => ({
  type: USER_EMAIL,
  payload: email,
});

export default action;
