import React from 'react';

class DogIndexNavItem extends React.Component {


  render() {

    return (
      <div className="dog-show-nav-bar">

        <div className="nav-left">

          <div className="nav-left-temperment nav-item">
            <i className="fa fa-heart nav-span-i" aria-hidden="true"></i>
            <span className="nav-span-i">Temperment</span>
            <i className="fa fa-chevron-down nav-span-i" aria-hidden="true"></i>
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
          <span className="nav-span-i">Write a review</span>
        </div>

      </div>
    );
  }
}

export default DogIndexNavItem;
