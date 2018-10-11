import React from 'react';

class DogIndexHeaderItem extends React.Component {


  roundRating(score) {
    // simple but giving credit to stackoverflow post https://stackoverflow.com/questions/6137986/javascript-roundoff-number-to-nearest-0-5
    return Math.round(score * 2) / 2;
  }

  displayedStars(score) {
    return (
      <div className="dog-show-stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
    );
  }

  displayedTypes(types) {
    let arrTypes;
    if (types) {
      arrTypes = Object.values(types);
    } else {
      arrTypes = [];
    }

    debugger;

    return (
      <div className="dog-show-types">
        {arrTypes.map((type, idx) => {
          if (idx < arrTypes) {
            return (
              <div>
                <a>{type.name}</a>
                <span>, </span>
              </div>
            );
          } else {
            return (
              <a>{type.name}</a>
            );
          }
        })}
      </div>
    );
  }


  render() {
    let { dog, types, reviews } = this.props;
    const totalReviews = Object.keys(reviews).length;
    let sumOfRatings = 0;
    Object.values(reviews).forEach(review => sumOfRatings += review.rating);

    const reviewScore = this.roundRating(sumOfRatings / totalReviews);

    return (
      <div className="dog-show-header">
        <div className="dog-show-left">
          <h1>{dog.name}</h1>
          <div className="dog-show-review-score">
            {this.displayedStars(reviewScore)}
            <span>{totalReviews} reviews</span>
            {this.displayedTypes(types)}
          </div>
        </div>
      </div>
    );
  }
}

export default DogIndexHeaderItem;
