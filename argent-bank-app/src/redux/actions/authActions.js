// authActions.js

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};