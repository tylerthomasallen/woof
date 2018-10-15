import React from 'react';

class MoreDogInfo extends React.Component {



  render() {
    const { dog } = this.props;
    return (
      <div className="more-dog-info">
        <h3>More dog info</h3>
        <div className="dog-info-attribute">
          <span>Good With Kids</span>
          <span>{dog.good_with_kids ? 'Yes' : 'No'}</span>
        </div>
      </div>
    );
  }
}

export default MoreDogInfo;
