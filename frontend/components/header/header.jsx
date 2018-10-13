import React from 'react';
import SearchBar from '../searchbar/searchbar';

class Header extends React.Component {

  render() {
    const { formType } = this.props;
    return (
      <div className="session-form-header">
        <div className="session-form-logo">
          <img src="" />
        </div>
        <SearchBar formType={formType} />
        {/* <SessionButtons /> */}
      </div>
    );
  }
}

export default Header;
