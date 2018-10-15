import React from 'react';
import { Link } from 'react-router-dom';
import ReviewIndexItem from './review_index_item';

class ReviewsIndex extends React.Component {


  render() {
    let { currentDog, currentReviews, retrieveUser, users } = this.props;

    if (currentDog === undefined) {
      currentDog = {};
    }

      return (

      <div className="reviews-container dog-show-body">
        <div className="reviews-title">
          <span>Recommended Reviews </span>
          <span>for a {`${currentDog.name}`}</span>
        </div>

        <div className="review-body">

          <div className="reviews-middle-container">
            {currentReviews.map(review => (
              <ReviewIndexItem key={review.id} currentReview={review} retrieveUser={retrieveUser} users={users}/>
            ))}
          </div>

          <div className="reviews-right-container">

          </div>

        </div>






      </div>
    );
  }
}

export default ReviewsIndex;
