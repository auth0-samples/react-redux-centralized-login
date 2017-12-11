import {
  AUTH_IN_PROGRESS,
  UNAUTH_USER,
  AUTH_ERROR,
  CLEARDOWN
} from './authTypes';

import Auth from './Auth';

const auth = new Auth();

export function signinUser(callback) {
  return function (dispatch) {
    dispatch({ type: AUTH_IN_PROGRESS });
      auth.signin();
  }
}

export function authError(error) {
  const timestamp = Date.now();
  return {
    type: AUTH_ERROR,
    error,
    timestamp
  };
}

export function signoutUser() {
  auth.signout();
  return { type: UNAUTH_USER };
}

export function cleardown() {
  return {
    type: CLEARDOWN
  };
}
