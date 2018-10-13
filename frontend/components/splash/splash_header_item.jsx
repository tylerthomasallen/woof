import React from 'react';
import { Link } from 'react-router-dom';

class SplashHeaderItem extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  // <div className="splash-login">
  //   <ul className="splash-login-ul">
  //     <li><Link to="/login">Log In</Link></li>
  //     <li><Link to="/signup">Sign Up</Link></li>
  //   </ul>
  // </div>

  handleChange() {

  }

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
              <Link to="/login" className="nav-item not-signup login">Log In</Link>
              <Link to="/signup" className="nav-item sign-up-button">Sign Up</Link>
            </div>
          </div>

          <div className="splash-header-logo">
            <img src='https://i.imgur.com/RZ5UvrT.png' />
          </div>

          <div className="splash-search-container">

            <div className="splash-search-input left-bar">
              <span>Find</span>
              <input type="text"
                onChange={this.handleChange()}
                placeholder="labradors, pugs, poodles..."
                className="left-input"
              />
            </div>

            <div className="splash-search-input right-bar">
              <span>Near</span>
              <input type="text"
                onChange={this.handleChange()}
                placeholder="San Francisco, CA"
                className="right-input"
              />
            </div>

            <div className="splash-search-button">
              <i class="fas fa-search"></i>
            </div>
          </div>



        </div>
      </div>
    );
  }
}

export default SplashHeaderItem;
