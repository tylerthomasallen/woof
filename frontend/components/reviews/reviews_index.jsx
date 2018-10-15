import React from 'react';
import { Link } from 'react-router-dom';
import ReviewIndexItem from './review_index_item';

class ReviewsIndex extends React.Component {

  render() {
    let { currentDog, currentReviews } = this.props;

    if (currentDog === undefined) {
      currentDog = {};
    }

      return (

      <div className="reviews-container dog-show-body">
        <div className="reviews-title">
          <span>Recommended Reviews </span>
          <span>for a {`${currentDog.name}`}</span>
        </div>

        <div className="review-items-container">
          {currentReviews.map(review => (
            <ReviewIndexItem currentReview={review} />
          ))}
        </div>

      </div>
    );
  }
}

export default ReviewsIndex;
