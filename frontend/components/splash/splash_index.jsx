import React from 'react';
import { Link } from 'react-router-dom';
import SplashHeaderItem from './splash_header_item';
import SplashLoggedOutItem from './splash_loggedout_item';

class SplashIndex extends React.Component {


  render() {
    const { logout, currentUser } = this.props;
      return (
      <div className="splash-parent-container">
        <SplashHeaderItem logout={logout} currentUser={currentUser}/>
      </div>
    );
  }
}

export default SplashIndex;
