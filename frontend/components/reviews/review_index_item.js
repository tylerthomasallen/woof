import React from 'react';
import Stars from '../stars/stars';

class ReviewIndexItem extends React.Component {

  todaysDate() {
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = `${today.getFullYear()}`;

    if (day < 10) {
      day = `0${day}`;
    } else {
      day = `${day}`;
    }

    if (month < 10) {
      month = `0${month}`;
    } else {
      month = `${month}`;
    }

    return `${month}/${day}/${year}`;
  }

  render() {

    const { currentReview } = this.props;
    return (
      <div className="review-item-container">
        <div className="review-rating">
          <Stars rating={currentReview.rating} cssClass="review-stars"/>
          <span>{this.todaysDate()}</span>
        </div>

        <div className="review-item-body">
          <p>{currentReview.body}</p>
        </div>

      </div>
    );
  }
}

export default ReviewIndexItem;
