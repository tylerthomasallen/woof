import React from 'react';
import { Link } from 'react-router-dom';

class SplashHeaderItem extends React.Component {

  constructor(props) {
    super(props);
  }

  sessionDisplay() {
    const { currentUser, logout } = this.props;
    debugger
    if (!currentUser) {
      return (
        <div className="splash-top-nav-right">
          <Link to="/login" className="nav-item not-signup login">Log In</Link>
          <Link to="/signup" className="nav-item sign-up-button">Sign Up</Link>
        </div>
      );
    } else {
      return (
        <div className="splash-top-nav-right">
          <a className="nav-item not-signup logout" onClick={() => logout()}>Log out</a>
          <Link to="/signup" className="nav-item sign-up-button">Sign Up</Link>
        </div>
      );
    }

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

              {this.sessionDisplay()}
            </div>

            <div className="splash-header-logo">
              <img src='https://i.imgur.com/RZ5UvrT.png' />
            </div>

            <div className="splash-search-container">

              <div className="splash-search-input left-bar">
                <span>Find</span>
                <input type="text"
                  placeholder="labradors, pugs, poodles..."
                  className="left-input"
                />
              </div>

              <div className="splash-search-input right-bar">
                <span>Near</span>
                <input type="text"
                  placeholder="San Francisco, CA"
                  className="right-input"
                />
              </div>

              <div className="splash-search-button">
                <i className="fas fa-search"></i>
              </div>
            </div>

            <div className="splash-bottom-nav">
              <Link to="/" className="nav-item ">
                <i className="fas fa-paw black-lab"></i>
                <span>Black Lab</span>
              </Link>
              <Link to="/dog/1" className="nav-item ">
                <i className="fas fa-paw yellow-lab"></i>
                <span>Yellow Lab</span>
              </Link>
              <Link to="/" className="nav-item ">
                <i className="fas fa-paw choc-lab"></i>
                <span>Husky</span>
              </Link>
              <Link to="/" className="nav-item ">
                <i className="fas fa-paw golden"></i>
                <span>Golden Retriever</span>
              </Link>
            </div>

          </div>
        </div>
    );
  }
}

export default SplashHeaderItem;
