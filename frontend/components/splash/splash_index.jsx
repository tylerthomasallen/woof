import React from 'react';
import { Link } from 'react-router-dom';
import SplashLoggedInItem from './splash_loggedin_item';
import SplashLoggedOutItem from './splash_loggedout_item';

class SplashIndex extends React.Component {

  render() {
    const { logout } = this.props;
    if (this.props.currentUser === undefined) {
      return (
        <SplashLoggedInItem />
      );
    } else {
      return (
        <SplashLoggedOutItem logout={logout} currentUser={this.props.currentUser} />
      );
    }
  }
}

export default SplashIndex;
