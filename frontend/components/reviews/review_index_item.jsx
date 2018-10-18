import React from 'react';
import Stars from '../stars/stars';
import * as MapApi from '../../util/api/map_util';
import { Link, Redirect } from 'react-router-dom';
import { fetchDog } from '../../util/api/dog_util';

class ReviewIndexItem extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      backToDogPage: false
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

  componentDidMount() {
    const { retrieveUser, currentReview, users} = this.props;
    const userId = currentReview.user_id;

    if (!users[userId]) {
      retrieveUser(currentReview.user_id);
    }
  }

  formattedName(currentUser) {

    if (currentUser.first_name) {
      return `${currentUser.first_name} ${currentUser.last_name[0]}.`;
    } else {
      return 'Tyler A.';
    }

  }

  destroyReview() {
    const { currentReview, dog, destroyReview } = this.props;
    destroyReview(currentReview.id);
  }

  reviewItemButtons(currentUser) {
    const { session, dog, currentReview } = this.props;

    if (currentUser.id === session.id) {
      return (

        <div className="review-item-edit-buttons">
          <div className="review-item-buttons">
            <div>
              <i className="fas fa-lightbulb"></i>
              <span>Useful</span>
            </div>

            <div>
              <i className="fas fa-grin-beam"></i>
              <span>Funny</span>
            </div>

            <div>
              <i className="fas fa-user-astronaut"></i>
              <span>Cool</span>
            </div>
          </div>
          <div className="edit-delete-buttons">

          <Link to={`/dog/${dog.id}/editreview/${currentReview.id}`} className="edit-delete">
              <i className="fas fa-edit"></i>
              <span>Edit</span>
          </Link>

            <div className="edit-delete" onClick={() => this.destroyReview()}>
              <i className="fas fa-trash"></i>
              <span>Delete</span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="review-item-buttons">
          <div>
            <i className="fas fa-lightbulb"></i>
            <span>Useful</span>
          </div>

          <div>
            <i className="fas fa-grin-beam"></i>
            <span>Funny</span>
          </div>

          <div>
            <i className="fas fa-user-astronaut"></i>
            <span>Cool</span>
          </div>
        </div>
      );
    }
  }

  userPhoto(currentUser) {

    if (Object.keys(currentUser) >= 1) {
      return (
        <div className="user-photo">
          <img src={currentUser.photoUrl} />
        </div>
      );
    } else {
      return (
        <div className="user-photo">
          <i className="fas fa-user-astronaut"></i>
        </div>
      );
    }

  }

  formattedLocation(currentUser) {
    return `${currentUser.city}, ${currentUser.state}`;
  }

  randomReviewCount() {
    return Math.floor(Math.random() * 100);
  }

  render() {

    const { currentReview, users, dog } = this.props;
    const currentUser = users[currentReview.user_id] || {};


    if (this.state.backToDogPage === true) {
      return <Redirect to={`/dog/${dog.id}`} />;
    }

    return (
      <div className="review-item-container">

        <div className="review-item-user">

          {/* {this.userPhoto(currentUser)} */}

          <div className="user-photo">
            <img src={currentUser.photoUrl} />
          </div>

          <div className="user-info">

            <span className="user-info-name">{this.formattedName(currentUser)}</span>
            <span className="user-info-loc">{this.formattedLocation(currentUser)}</span>

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

          {this.reviewItemButtons(currentUser)}


        </div>

      </div>
    );
  }
}

export default ReviewIndexItem;
