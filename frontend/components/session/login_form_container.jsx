import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log In',
    navLinkMessage: 'New to Woof?',
    navLink: <Link to="/signup">Sign up</Link>,
    bottomMessage: 'New to Woof?'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    processGuestForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
