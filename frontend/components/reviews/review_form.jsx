import React from 'react';
import Header from '../header/header';
import { Link } from 'react-router-dom';
import DynamicStars from '../stars/dynamic_stars';

class ReviewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: '',
      stars: 0,
      permStars: 0,
      ratingText: 'Select your rating',
      permRatingText: ''
    };

    this.updateStarsMouseEnter = this.updateStarsMouseEnter.bind(this);
    this.updateStarsMouseLeave = this.updateStarsMouseLeave.bind(this);
    this.updatePermStars = this.updatePermStars.bind(this);
    this.updateReviewText = this.updateReviewText.bind(this);

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
    const placeholder = "Your reviews help others learn about great local dogs.";
    // \n \n Please don't review this dog if you don't want to
    // see your awesome reviewback on the dog's page";
    return placeholder;
  }

  updateStarsMouseEnter(num) {
    this.setState({stars: num});
    this.setState({permStars: 0});
    this.updateReviewText(num, true);
  }

  updateStarsMouseLeave() {
    this.setState({stars: 0});
    this.setState({ratingText: 'Select your rating'});
  }

  updatePermStars(num) {
    this.setState({permStars: num});
    this.updateReviewText(num, true);
  }

  updateReviewText(num, perm){
    let field;
    perm ? field = 'permRatingText' : field = 'ratingText';
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

    return (
      <div className="review-form-input">

        <form className="review-form">

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

          <input type="text"
            value={this.state.body}
            onChange={this.update('body')}
            placeholder={this.bodyPlaceholder()}
            className="review-form-text-input"
            required
          />
        </form>
      </div>
    );
  }

  render () {
    const { dogId, userId, dogs } = this.props;

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

{/* <label>
  <input type="radio"
    className="review-radio-star"
    value="1"
    name="star"
  />
  {/* <img src={require()}></img> */}

// </label>
//
// <label>
//   <input type="radio"
//     className="review-radio-star"
//     value="2"
//     name="star"
//   />
    {/* <img src={require("../../../app/assets/images/stars/regular_1@3x.png")}>

    </img> */}
// </label>
//
// <label>
//   <input type="radio"
//     className="review-radio-star"
//     value="3"
//     name="star"
//   />
// </label>
//
// <label>
//   <input type="radio"
//     className="review-radio-star"
//     value="4"
//     name="star"
//   />
// </label>
//
// <label>
//   <input type="radio"
//     className="review-radio-star"
//     value="5"
//     name="star"
// //   />
// </label> */}

export default ReviewForm;
