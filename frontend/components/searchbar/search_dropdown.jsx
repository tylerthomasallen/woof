import React from 'react';
import { Link } from 'react-router-dom';

class SearchDropdown extends React.Component {

  render() {
    const { formType, side } = this.props;
    return (
      <div className={`${formType}-search-dropdown-container`}
        id={`${side}-search-bar-dropdown`}>

        <Link to="/search/hound">
          <div className={`${formType}-search-dropdown-item`}>
            <i className="fas fa-bone"></i>
            <span>Hound</span>
          </div>
        </Link>

        <Link to="/search/herding">
          <div className={`${formType}-search-dropdown-item`}>
            <i className="fas fa-bone"></i>
            <span>Herding</span>
          </div>
        </Link>


        <Link to="/search/sporting">
          <div className={`${formType}-search-dropdown-item`}>
            <i className="fas fa-bone"></i>
            <span>Sporting</span>
          </div>
        </Link>

        <Link to="/search/terrier">
          <div className={`${formType}-search-dropdown-item`}>
            <i className="fas fa-bone"></i>
            <span>Terrier</span>
          </div>
        </Link>

        <Link to="/search/toy">
          <div className={`${formType}-search-dropdown-item`}>
            <i className="fas fa-bone"></i>
            <span>Toy</span>
          </div>
        </Link>

        <Link to="/search/working">
          <div className={`${formType}-search-dropdown-item`}>
            <i className="fas fa-bone"></i>
            <span>Working</span>
          </div>
        </Link>


      </div>
    );
  }
}

export default SearchDropdown;
