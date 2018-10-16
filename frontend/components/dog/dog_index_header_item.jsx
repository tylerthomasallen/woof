import React from 'react';
import { Link } from 'react-router-dom';

class DogIndexHeaderItem extends React.Component {


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

  displayedTypes(types) {
    const { dogTypes, dogId } = this.props;
    let arrTypes;

    if (Object.keys(types).length >= 1) {
      arrTypes = Object.values(types);
    } else {
      arrTypes = [];
    }


    return (
      <div className="dog-show-types">
        <i className="fa fa-paw nav-span-i" aria-hidden="true"></i>
        <span className="dot">&#183;</span>
        {arrTypes.map((type, idx) => {
          if (idx < arrTypes.length -1) {
            return (
              <div className="" key={type.id}>
                <a key={type.id + 1}>{type.name}</a>
                <span key={type.id + 2}>, </span>
              </div>
            );
          } else {
            return (
              <a key={type.id}>{type.name}</a>
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
            <i className="fas fa-check-circle"></i>
            <span>Claimed</span>
          </div>
          <div className="dog-show-review-score">
            {this.displayedStars(reviewScore)}
            <span>{totalReviews} reviews</span>
          </div>
          {this.displayedTypes(types)}
        </div>

        <div className="dog-show-header-right">

          {/* <div className="dog-show-write-review"> */}
            <Link to={`/dog/${dog.id}/writeareview`} className="dog-show-write-review">
              <i className="fa fa-star" aria-hidden="true"></i>
              <span>Write a Review</span>
            </Link>

          {/* </div> */}
          <div className="dog-show-header-right-buttons">
            <div>
              <i className="fa fa-camera" aria-hidden="true"></i>
              <span>Add Photo</span>
            </div>
            <div>
              <i className="fas fa-share-square"></i>
              <span>Share</span>
            </div>
            <div>
              <i className="fa fa-bookmark" aria-hidden="true"></i>
              <span>Save</span>
            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default DogIndexHeaderItem;
