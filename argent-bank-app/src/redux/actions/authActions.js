// authActions.js

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  }
}

export const loginFailed = (error) => {
  return {
    type: LOGIN_FAIL,
    payload: error,
  }
}