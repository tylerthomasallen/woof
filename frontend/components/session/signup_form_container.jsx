import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signup, login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign Up',
    navLinkMessage: 'Connect with great local dogs',
    navLink: <Link to="/login">Log in</Link>,
    bottomMessage: 'Already on Woof?'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    processGuestForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
