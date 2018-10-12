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


    return (
      <div className="dog-show-types">
        {arrTypes.map((type, idx) => {
          if (idx < arrTypes.length -1) {
            return (
              <div className="dog">
                <a key={idx}>{type.name}</a>
                <span key={idx + 1}>, </span>
              </div>
            );
          } else {
            return (
              <a key={idx}>{type.name}</a>
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

        <div className="dog-show-header-left">
          <div className="dog-show-left-title">
            <h1>{dog.name}</h1>
            <i className="fas fa-bone"></i>
          </div>
          <div className="dog-show-review-score">
            {this.displayedStars(reviewScore)}
            <span>{totalReviews} reviews</span>
            {this.displayedTypes(types)}
          </div>
        </div>

        <div className="dog-show-header-right">

          <div className="dog-show-write-review">
            <i className="fa fa-star" aria-hidden="true"></i>
            <button>Write a Review</button>
          </div>
          <div className="dog-show-header-right-buttons">
            <div>
              <i className="fa fa-camera" aria-hidden="true"></i>
              <button>Add Photo</button>
            </div>
            <div>
              <i className="fa fa-share-square-o" aria-hidden="true"></i>
              <button>Share</button>
            </div>
            <div>
              <i className="fa fa-bookmark" aria-hidden="true"></i>
              <button>Save</button>
            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default DogIndexHeaderItem;
