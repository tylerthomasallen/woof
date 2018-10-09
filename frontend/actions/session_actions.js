import * as AuthUtil from '../util/api/auth_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';


export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};


export const signup = currentUser => dispatch => {
  return (
    AuthUtil.fetchSignUp(currentUser).then(
      user => (dispatch(receiveCurrentUser(user))),
      err => (
        dispatch(receiveErrors(err.responseJSON))
      )
    )
  );
};

export const login = currentUser => dispatch => {
  return (
    AuthUtil.fetchLoginUser(currentUser).then(
      user => (dispatch(receiveCurrentUser(user))),
      err => (
        dispatch(receiveErrors(err.responseJSON))
      )
    )
  );
};

export const logout = () => dispatch => {
  return (
    AuthUtil.fetchLogoutUser().then(
      dispatch(logoutCurrentUser())
    )
  );
};
