import React from 'react';
import { Link } from 'react-router-dom';

class SplashLoggedInItem extends React.Component {

  render() {
    return (
      <div className="splash-login">
        <h2>SplashLoggedInComponentItem</h2>
        <ul className="splash-login-ul">
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </div>
    );
  }
}

export default SplashLoggedInItem;
