import React from 'react';
import { Link } from 'react-router-dom';

class SplashHeaderItem extends React.Component {

  // <div className="splash-login">
  //   <ul className="splash-login-ul">
  //     <li><Link to="/login">Log In</Link></li>
  //     <li><Link to="/signup">Sign Up</Link></li>
  //   </ul>
  // </div>

  render() {
    return (

      <div className="splash-header-container">

        <div className="splash-body">

          <div className="splash-top-nav">
            <div className="splash-top-nav-left">
              <Link to="/" className="nav-item not-signup">Write a Review</Link>
              <Link to="/" className="nav-item not-signup">Events</Link>
              <Link to="/" className="nav-item not-signup">Talk</Link>
            </div>

            <div className="splash-top-nav-right">
              <Link to="/login" className="nav-item not-signup">Log In</Link>
              <Link to="/signup" className="nav-item sign-up-button">Sign Up</Link>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default SplashHeaderItem;
