import React from 'react';
import { Link } from 'react-router-dom';

class SessionButtons extends React.Component {

  constructor(props) {
    super(props);
  }

  // "nav-item not-signup login"
  // "nav-item sign-up-button"
  // "nav-item not-signup logout"

  render() {
    const { currentUser, logout, formType } = this.props;
    if (!currentUser) {
      return (
        <div className={`splash-top-nav-right`}>
          <Link to="/login" className={`nav-item not-signup splash-login`}>Log In</Link>
          <Link to="/signup" className={`nav-item splash-sign-up-button`}>Sign Up</Link>
        </div>
      );
    } else {
      return (
        <div className={`splash-top-nav-right`}>
          <a className={`nav-item not-signup logout`} onClick={() => logout()}>Log out</a>
          <Link to="/signup" className={`nav-item sign-up-button`}>Sign Up</Link>
        </div>
      );
    }
  }
}

export default SessionButtons;
