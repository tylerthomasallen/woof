import React from 'react';
import TempModal from './temp_modal';

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
    const { showTempsClass, typesClass, charsClass } = this.state;

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
            <TempModal show={this.state.showTemps} hideModal={this.hideModal}/>
          </div>

          <div className="nav-left-types nav-item">
            <i className="fa fa-paw nav-span-i" aria-hidden="true"></i>
            <span className="nav-span-i">Types</span>
            <i className="fa fa-chevron-down nav-span-i" aria-hidden="true"></i>
          </div>


          <div className="nav-left-char nav-item">
            <i className="fa fa-snowflake-o nav-span-i" aria-hidden="true"></i>
            <span className="nav-span-i">Characteristics</span>
            <i className="fa fa-chevron-down nav-span-i" aria-hidden="true"></i>
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
