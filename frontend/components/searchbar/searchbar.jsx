import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { formType } = this.props;

    return (
      <div className={`${formType}-search-container`}>

        <div className={`${formType}-search-input ${formType}-left-bar`}>
          <span>Find</span>
          <input type="text"
            placeholder="labradors, pugs, poodles..."
            className="left-input"
          />
        </div>

        <div className={`${formType}-search-input ${formType}-right-bar`}>
          <span>Near</span>
          <input type="text"
            placeholder="San Francisco, CA"
            className="right-input"
          />
        </div>

        <div className={`${formType}-search-button`}>
          <i className="fas fa-search"></i>
        </div>
      </div>
    );
  }
}

export default SearchBar;
