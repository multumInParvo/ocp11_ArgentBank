// authActions.js

const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAIL = 'LOGIN_FAIL'
const LOGOUT = 'LOGOUT'

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  }
}

export const logout = () => {
  return {
      type: LOGOUT,
  }
} 

export const loginFailed = (error) => {
  return {
    type: LOGIN_FAIL,
    payload: error,
  }
}