import React from 'react';

class SplashLoggedOutItem extends React.Component {

  render() {
    const { logout } = this.props;
    const { currentUser } = this.props;
    return (
      <div className="splash-logout">
        <h2>Logout Component</h2>
        <button className="spash-logout-button" onClick={logout}>Log Out</button>
      </div>
    );
  }
}

export default SplashLoggedOutItem;
