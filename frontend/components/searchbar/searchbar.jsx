import React from 'react';
import SearchDropdown from './search_dropdown';
const ClickOutComponent = require('react-onclickout');

class SearchBar extends ClickOutComponent {
  constructor(props) {
    super(props);
    this.state = {
      leftActive: false,
      rightActive: false
    };
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDropdown(side) {
    const left = document.getElementById('left-search-bar-dropdown');
    const leftBar = document.getElementById('left-search-bar');
    const right = document.getElementById('right-search-bar-dropdown');

    if (side === 'left') {
      left.classList.add('search-bar-active');
      leftBar.classList.add('search-bar-container-active');
      this.setState({leftActive: true});
      this.setState({rightShow: false});
    } else {
      right.classList.add('search-bar-active');
      this.setState({leftActive: false});
      this.setState({rightActive: true});
    }
  }

  onClickOut(e) {
    const { leftActive, rightActive } = this.state;
    let active;
    let activeBar;

    if (leftActive)  {
      active = document.getElementById('left-search-bar-dropdown');
      activeBar = document.getElementById('left-search-bar');
      active.classList.remove('search-bar-active');
      activeBar.classList.remove('search-bar-container-active');
      this.setState({leftActive: false});
    } else if (rightActive) {
      active = document.getElementById('right-search-bar-dropdown');
      active.classList.remove('search-bar-active');
      this.setState({rightActive: false});
    }
  }

  render() {
    const { formType } = this.props;
    const { leftShow, rightShow } = this.state;

    return (
      <div className={`${formType}-search-container`}>

        <div className={`${formType}-search-input ${formType}-left-bar` } id="left-search-bar">
          <span>Find</span>
          <input type="text"
            placeholder="labradors, pugs, poodles..."
            className="left-input"
            onClick={() => this.handleDropdown('left')}
          />
        </div>

        <SearchDropdown formType={formType} side={'left'}/>



        <div className={`${formType}-search-input ${formType}-right-bar`} id="right-search-bar">
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
