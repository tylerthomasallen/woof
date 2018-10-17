import React from 'react';
import Header from '../header/header';
import { Link } from 'react-router-dom';
import DynamicStars from '../stars/dynamic_stars';
import { Redirect } from 'react-router-dom';

class ReviewForm extends React.Component {

  constructor(props) {
    super(props);

    const { reviews, reviewId, formType } = props;

    let permStars = 0;
    let body = '';
    let permRatingText = '';
    let currentReview;

    if (formType === 'Edit' && reviews[reviewId]) {
      currentReview = reviews[reviewId];
      permStars = currentReview.rating;
      body = currentReview.body;

      if (permStars === 1) {
        permRatingText = 'Eek! Methinks not.';
      } else if (permStars === 2) {
        permRatingText = "Meh. I've had better dogs.";
      } else if (permStars === 3) {
        permRatingText = 'A-OK.';
      } else if (permStars === 4) {
        permRatingText = "Yay! I'm a fan.";
      } else if (permStars === 5) {
        permRatingText = "Woohoo! As good as it gets!";
      }

    }

    this.state = {
      body: body,
      stars: 0,
      permStars: permStars,
      ratingText: "Select your rating",
      permRatingText: permRatingText,
      backToDogPage: false,
      counter: 1
    };

    this.updateStarsMouseEnter = this.updateStarsMouseEnter.bind(this);
    this.updateStarsMouseLeave = this.updateStarsMouseLeave.bind(this);
    this.updatePermStars = this.updatePermStars.bind(this);
    this.updateReviewText = this.updateReviewText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {

    const { processForm, formType } = this.props;

    e.preventDefault();
    const { body, permStars } = this.state;
    const { dogId, userId, reviews, reviewId } = this.props;

    if (permStars === 0) {
      const errors = document.getElementById('star-errors');
      errors.classList.add('isActive');
    } else {

      if ( formType === "Edit") {
        processForm({body: body, rating: permStars,
          dog_id: dogId, user_id: userId}, reviewId).then(
            () => this.setState({backToDogPage: true})
          );

      } else {
        processForm({body: body, rating: permStars,
          dog_id: dogId, user_id: userId}).then(
            () => this.setState({backToDogPage: true})
          );

      }

      }

  }

  componentDidUpdate() {
    const { reviews, reviewId, formType } = this.props;

    if (formType === "Edit") {
      const currentReview = reviews[reviewId];

      if (this.state.counter === 1) {
        this.setState({counter: this.state.counter + 1});
        this.setState({body: currentReview.body});
        this.setState({permStars: currentReview.rating});
        this.updateReviewText(currentReview.rating, 'permRatingText');
      }

    }
  }


  fetchDog() {
    const { retrieveDog, dogId } = this.props;
    retrieveDog(dogId);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  bodyPlaceholder() {
    const placeholder = "Greatness starts here...";

    return placeholder;
  }

  updateStarsMouseEnter(num) {
    this.setState({stars: num});
    this.setState({permStars: 0});
    this.updateReviewText(num, 'ratingText');
    this.setState({permRatingText: ''});
  }

  updateStarsMouseLeave() {
    this.setState({stars: 0});
    this.setState({ratingText: "Select your rating"});
  }

  updatePermStars(num) {
    this.setState({permStars: num});
    this.updateReviewText(num, 'permRatingText');
  }

  updateReviewText(num, field){
    if (num === 1) {
      this.setState({[field]: 'Eek! Methinks not.'});
    } else if (num === 2) {
      this.setState({[field]: "Meh. I've had better dogs."});
    } else if (num === 3) {
      this.setState({[field]: 'A-OK.'});
    } else if (num === 4) {
      this.setState({[field]: "Yay! I'm a fan."});
    } else if (num === 5) {
      this.setState({[field]: "Woohoo! As good as it gets!"});
    }
  }

  dynamicStars() {
    const { stars, permStars } = this.state;

    if (permStars === 0) {
      return <DynamicStars rating={stars}/>;
    } else {
      return <DynamicStars rating={permStars}/>;
    }
  }

  dynamicText() {
    const { ratingText, permRatingText } = this.state;

    if (permRatingText === '') {
      return <span className="rating-text">{ratingText}</span>;
    } else {
      return <span className="rating-text">{permRatingText}</span>;
    }
  }

  reviewFormInput() {

    const { ratingText } = this.state;
    const { formType } = this.props;

    return (
      <div className="review-form-input">


        <form className="review-form" onSubmit={this.handleSubmit}>

          <div className="review-top-with-stars">
            <div className="review-form-stars">
              <div className="review-star-div" onMouseEnter={() => this.updateStarsMouseEnter(1)}
                onMouseLeave={() => this.updateStarsMouseLeave()} onClick={() => this.updatePermStars(1)}>
              </div>
              <div className="review-star-div" onMouseEnter={() => this.updateStarsMouseEnter(2)}
              onMouseLeave={() => this.updateStarsMouseLeave()} onClick={() => this.updatePermStars(2)}>
              </div>
              <div className="review-star-div" onMouseEnter={() => this.updateStarsMouseEnter(3)}
              onMouseLeave={() => this.updateStarsMouseLeave()} onClick={() => this.updatePermStars(3)}>
              </div>
              <div className="review-star-div" onMouseEnter={() => this.updateStarsMouseEnter(4)}
              onMouseLeave={() => this.updateStarsMouseLeave()} onClick={() => this.updatePermStars(4)}>
              </div>
              <div className="review-star-div" onMouseEnter={() => this.updateStarsMouseEnter(5)}
              onMouseLeave={() => this.updateStarsMouseLeave()} onClick={() => this.updatePermStars(5)}>
              </div>

            </div>
            {this.dynamicStars()}
            {this.dynamicText()}

          </div>

          <textarea type="text"
            value={this.state.body}
            onChange={(e) => this.setState({body: e.currentTarget.value})}
            placeholder={this.bodyPlaceholder()}
            className="review-form-text-input"
            required
          />

          <input type="submit" value={`${formType} Review`} className="form-submit-button"/>
        </form>
      </div>
    );
  }

  render () {

    const { dogId, userId, dogs, reviews, reviewId, formType } = this.props;

    if (this.state.backToDogPage === true) {
      return <Redirect to={`/dog/${dogId}`} />;
    }

    let currentDog;

    if (dogs[dogId]) {
      currentDog = dogs[dogId];
    } else {
      this.fetchDog();
      currentDog = {};
    }



    return (
      <div className="review-form">
        <Header />
        <div className="review-form-star-errors" id="star-errors">
          <span>Pick a star rating!</span>
        </div>
        <div className="review-form-container">

          <div className="review-form-body">
            <Link to={`/dog/${dogId}`} className="review-form-header">
            {currentDog.name}
          </Link>

          {this.reviewFormInput()}

        </div>
      </div>
    </div>
    );
  }
}


export default ReviewForm;
