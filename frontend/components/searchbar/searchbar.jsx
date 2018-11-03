import React from 'react';
import SearchDropdown from './search_dropdown';
const ClickOutComponent = require('react-onclickout');

class SearchBar extends ClickOutComponent {
  constructor(props) {
    super(props);
    this.state = {
      leftActive: false,
      rightActive: false,
      searchInfo: '',
      lastSearchInfo: '',
      location: ''
    };
    this.handleDropdown = this.handleDropdown.bind(this);
  }


  handleDropdown(e, side) {
    e.preventDefault();
    return () => {
      const left = document.getElementById('left-search-bar-dropdown');
      const leftBar = document.getElementById('left-search-bar');
      const right = document.getElementById('right-search-bar-dropdown');
      const closeButton = document.getElementById('search-close-button');

      if (side === 'left') {
        left.classList.add('search-bar-active');
        leftBar.classList.add('search-bar-container-active');
        closeButton.classList.add('active-close-button');
        this.setState({leftActive: true});
        this.setState({rightShow: false});
      } else {
        right.classList.add('search-bar-active');
        this.setState({leftActive: false});
        this.setState({rightActive: true});
      }
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidUpdate() {
    const { retrieveDogs } = this.props;
    const { searchInfo, lastSearchInfo } = this.state;

     if (searchInfo.length >= 2 && lastSearchInfo !== searchInfo) {
      this.setState({lastSearchInfo: searchInfo})
      retrieveDogs(searchInfo);
    }

  }

  onClickOut(e) {
    const { leftActive, rightActive } = this.state;
    let active;
    let activeBar;
    let closeButton;

    if (leftActive)  {
      active = document.getElementById('left-search-bar-dropdown');
      activeBar = document.getElementById('left-search-bar');
      closeButton = document.getElementById('search-close-button');
      active.classList.remove('search-bar-active');
      activeBar.classList.remove('search-bar-container-active');
      closeButton.classList.remove('active-close-button');
      this.setState({leftActive: false});
    } else if (rightActive) {
      active = document.getElementById('right-search-bar-dropdown');
      active.classList.remove('search-bar-active');
      this.setState({rightActive: false});
    }
  }

  render() {
    const { formType, dogs, types, retrieveDogs } = this.props;
    const { leftShow, rightShow, searchInfo, location } = this.state;

    let filteredDogs = [];
    let filteredTypes = [];

    if (searchInfo === '') {
      filteredDogs = [];
    } else {
      Object.values(dogs).forEach(dog => {
        if (dog.name.toLowerCase().includes(searchInfo)) {
          filteredDogs.push(dog);
        }
      });

      Object.values(types).forEach(type => {
        if (type.name.toLowerCase().includes(searchInfo)) {
          filteredTypes.push(type);
        }
      });
    }

    return (
      <div className={`${formType}-search-container`}>

        <div className={`${formType}-search-input ${formType}-left-bar` } id="left-search-bar">
          <span>Find</span>
          <input type="text"
            placeholder="Labradors, pugs, poodles..."
            className="left-input"
            onClick={this.handleDropdown(event, 'left')}
            onChange={this.update('searchInfo')}
          />
          <i className="fas fa-times" id="search-close-button" onClick={(e) => this.onClickOut(e)}></i>
        </div>

        <SearchDropdown formType={formType} side={'left'} searchInfo={searchInfo}
          filteredDogs={filteredDogs} filteredTypes={filteredTypes}/>



        <div className={`${formType}-search-input ${formType}-right-bar`} id="right-search-bar">
          <span>Near</span>
          <input type="text"
            placeholder="San Francisco, CA"
            className="right-input"
            onChange={this.update('location')}
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
