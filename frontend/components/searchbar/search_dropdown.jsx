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

        <div className={`${formType}-search-dropdown-item`}>
          <i class="fas fa-bone"></i>
          <span>Hound</span>
        </div>

        <div className={`${formType}-search-dropdown-item`}>
          <i class="fas fa-bone"></i>
          <span>Herding</span>
        </div>

        <div className={`${formType}-search-dropdown-item`}>
          <i class="fas fa-bone"></i>
          <span>Sporting</span>
        </div>

        <div className={`${formType}-search-dropdown-item`}>
          <i class="fas fa-bone"></i>
          <span>Terrier</span>
        </div>

        <div className={`${formType}-search-dropdown-item`}>
          <i class="fas fa-bone"></i>
          <span>Toy</span>
        </div>

        <div className={`${formType}-search-dropdown-item`}>
          <i class="fas fa-bone"></i>
          <span>Working</span>
        </div>


      </div>
    );
  }
}

export default SearchDropdown;
