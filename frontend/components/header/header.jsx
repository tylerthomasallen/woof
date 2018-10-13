import React from 'react';
import SearchBar from '../searchbar/searchbar';
import SessionButtonsContainer from '../session/session_buttons_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: 'show'
    };
  }

  render() {
    const { formType } = this.state;
    return (
      <div className="session-form-header">
        <div className="session-form-logo">
          <img src="" />
        </div>
        <SearchBar formType={formType} />
        <SessionButtonsContainer formType={formType}/>
      </div>
    );
  }
}

export default Header;
