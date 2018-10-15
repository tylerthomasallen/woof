import React from 'react';
import Stars from '../stars/stars';

class ReviewIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

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

  // componentDidMount() {
  //   const { fetchUser, currentReview } = this.props;
  //
  //   const user = fetchUser(currentReview.user_id);
  //
  //   this.setState({user: user});
  // }

  formattedName() {
    // const { user } = this.state;
    //
    // if (user.first_name) {
    //   return `${user.first_name} ${user.last_name[0]}.`;
    // }

    return 'Tyler A.';

  }

  formattedLocation() {
    const { user } = this.state;

    // return `${user.city}, ${user.state}`;
    return 'San Francisco, CA';
  }

  randomReviewCount() {
    return Math.floor(Math.random() * 100);
  }

  render() {

    const { currentReview } = this.props;
    const { user } = this.state;

    return (
      <div className="review-item-container">

        <div className="review-item-user">

          <div className="user-photo">
            <i className="fas fa-user-astronaut"></i>
          </div>

          <div className="user-info">

            <span className="user-info-name">{this.formattedName()}</span>
            <span className="user-info-loc">{this.formattedLocation()}</span>

            <div className="user-info-reviews">
              <i className="fas fa-star user-info-star"></i>
              <span className="user-info-review-count">{this.randomReviewCount()}</span>
              <span>reviews</span>
            </div>

          </div>

        </div>

        <div className="review-item-review">
          <div className="review-rating">
            <Stars rating={currentReview.rating} cssClass="review-stars"/>
            <span>{this.todaysDate()}</span>
          </div>

          <div className="review-item-body">
            <p>{currentReview.body}</p>
          </div>

        </div>

      </div>
    );
  }
}

export default ReviewIndexItem;
