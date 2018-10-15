import React from 'react';
import { Link } from 'react-router-dom';
import SplashHeaderItem from './splash_header_item';
import SplashLoggedOutItem from './splash_loggedout_item';
import Footer from '../footer/footer';

class SplashIndex extends React.Component {


  render() {
    const { logout, currentUser } = this.props;
      return (
      <div className="splash-parent-container">
        <SplashHeaderItem />
        <Footer />
      </div>
    );
  }
}

export default SplashIndex;
