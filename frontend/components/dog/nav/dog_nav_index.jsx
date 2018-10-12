import React from 'react';
import NavModal from './nav_modal';

class DogNavIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showTemps: false,
      showTempsClass: '',
      showTypes: false,
      showTypesClass: '',
      showChars: false,
      showCharsClass: ''
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal(field) {
    this.setState({[field]: true});
    let currClass = field + 'Class';
    this.setState({[currClass]: 'showNavHover'});
  }

  hideModal(field) {
    this.setState({[field]: false});
    let currClass = field + 'Class';
    this.setState({[currClass]: ''});
  }

  render() {
    const { showTempsClass, showTypesClass, showCharsClass } = this.state;

    return (
      <div className="dog-show-nav-bar">

        <div className="nav-left">

          <div className='nav-left-temperment nav-item' onMouseEnter={() =>
            this.showModal('showTemps')} onMouseLeave={() => this.hideModal('showTemps')}>
            <div className={showTempsClass}>
              <i className="fa fa-heart nav-span-i" aria-hidden="true"></i>
              <span className="nav-span-i">Temperments</span>
              <i className="fa fa-chevron-down nav-span-i" aria-hidden="true"></i>
            </div>
            <NavModal show={this.state.showTemps} formType='temps'/>
          </div>

          <div className="nav-left-types nav-item" onMouseEnter={() =>
            this.showModal('showTypes')} onMouseLeave={() => this.hideModal('showTypes')}>
            <div className={showTypesClass}>
              <i className="fa fa-paw nav-span-i" aria-hidden="true"></i>
              <span className="nav-span-i">Types</span>
              <i className="fa fa-chevron-down nav-span-i" aria-hidden="true"></i>
            </div>
            <NavModal show={this.state.showTypes} formType='types'/>
          </div>


          <div className="nav-left-char nav-item" onMouseEnter={() =>
            this.showModal('showChars')} onMouseLeave={() => this.hideModal('showChars')}>
            <div className={showCharsClass}>
              <i className="fa fa-snowflake-o nav-span-i" aria-hidden="true"></i>
              <span className="nav-span-i">Characteristics</span>
              <i className="fa fa-chevron-down nav-span-i" aria-hidden="true"></i>
           </div>
            <NavModal show={this.state.showChars} formType='chars'/>
          </div>

        </div>

        <div className="nav-right-review nav-item">
          <i className="fa fa-pencil-square-o nav-span-i" aria-hidden="true"></i>
          <span className="nav-span-i review">Write a Review</span>
        </div>

      </div>
    );
  }
}

export default DogNavIndex;
