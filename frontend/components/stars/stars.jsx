import React from 'react';


class Stars extends React.Component {

  roundRating(score) {
    // simple but giving credit to stackoverflow post https://stackoverflow.com/questions/6137986/javascript-roundoff-number-to-nearest-0-5
    return Math.round(score * 2) / 2;
  }

  displayedStars(score) {
    switch (score) {
      case 0:
        return <img src={require('../../../app/assets/images/stars/regular_0@3x.png')} className="star-img"/>;
      case 1.5:
        return <img src={require('../../../app/assets/images/stars/regular_1_half@3x.png')} className="star-img"/>;
      case 2:
        return <img src={require('../../../app/assets/images/stars/regular_2@3x.png')} className="star-img"/>;
      case 2.5:
        return <img src={require('../../../app/assets/images/stars/regular_2_half@3x.png')} className="star-img"/>;
      case 3:
        return <img src={require('../../../app/assets/images/stars/regular_3@3x.png')} className="star-img"/>;
      case 3.5:
        return <img src={require('../../../app/assets/images/stars/regular_3_half@3x.png')} className="star-img"/>;
      case 4:
        return <img src={require('../../../app/assets/images/stars/regular_4@3x.png')} className="star-img"/>;
      case 4.5:
        return <img src={require('../../../app/assets/images/stars/regular_4_half@3x.png')} className="star-img"/>;
      case 5:
        return <img src={require('../../../app/assets/images/stars/regular_5@3x.png')} className="star-img"/>;
      default:
        return <img src={require('../../../app/assets/images/stars/regular_3@3x.png')} className="star-img"/>;
    }
  }


  render() {
    const { rating, cssClass } = this.props;
    return (
      <div className={cssClass}>
        {this.displayedStars(rating)}
      </div>
    );
  }
}

export default Stars;
