import React from 'react';
const ClickOutComponent = require('react-onclickout');

// class ExampleComponent extends ClickOutComponent {
//
//   onClickOut(e) {
//     alert('user clicked outside of the component!');
//   }
//
//   render() {
//     return (
//       <div>Click outside of me!</div>
//     );
//   }
// }

class SearchDropdown extends React.Component {

  render() {
    const { formType, side } = this.props;
    return (
      <div className={`${formType}-search-dropdown-container`}
        id={`${side}-search-bar-dropdown`}>
        <span>HEllo</span>
      </div>
    );
  }
}

export default SearchDropdown;
