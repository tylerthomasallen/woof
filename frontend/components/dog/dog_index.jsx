import React from 'react';
import { withRouter } from 'react-router-dom';
import DogIndexHeaderItem from './dog_index_header_item';
import DogNavIndex from './nav/dog_nav_index';
import Header from '../header/header';
import ShowMap from '../map/show_map';
import ReviewsContainer from '../reviews/reviews_container';
import Footer from '../footer/footer';


class DogIndex extends React.Component {

  componentDidMount() {
    const { dogs, dogId } = this.props;
    if ( !dogs[dogId] ) {
      this.props.retrieveDog(dogId);
    }
  }

  addClass(num) {
    let curr = document.getElementById(`dog-image-${num}`);
    let sibOne;
    let sibTwo;

    if (num === 0) {
      sibOne = document.getElementById(`dog-image-1`);
      sibTwo = document.getElementById(`dog-image-2`);
    } else if (num === 1) {
      sibOne = document.getElementById(`dog-image-0`);
      sibTwo = document.getElementById(`dog-image-2`);
    } else if (num === 2) {
      sibOne = document.getElementById(`dog-image-0`);
      sibTwo = document.getElementById(`dog-image-1`);
    }

    curr.classList.add('dog-image-1');
    sibOne.classList.remove('dog-image-1');
    sibTwo.classList.remove('dog-image-1');
    debugger;
  }

  removeClass(num) {
    // onMouseLeave={() => this.removeClass(idx)}
    let curr = document.getElementById(`dog-image-${num}`);
  }

  dogPhotos() {
    const { dogs, dogId } = this.props;
    const currentDog = dogs[dogId];

    if (currentDog) {
      return (
        <div className="dog-photos-container" onMouseLeave={() => this.addClass(1)}>
          {currentDog.dogPhotos.map((photo,idx) => (
            <img key={idx} src={photo.url} className={`dog-image-${idx}`} id={`dog-image-${idx}`}
              onMouseEnter={() => this.addClass(idx)} />
          ))}
        </div>
      );
    }

    document.querySelectorAll("img")
  }

  render() {
    const { dogs, dogId, dogTypes, types, reviews } = this.props;

    if ( !dogs[dogId] ) {
      this.props.retrieveDog(dogId);
    }

    const currentDog = dogs[dogId] || {};

    const currentDogReviews = {};
    Object.values(reviews).forEach(review => {
      if (review.dog_id === parseInt(dogId)) {
        currentDogReviews[review.id] = review;
      }
    });


    // const currentDogTypes = Object.values(dogTypes).filter(dogType => dogType.dog_id = dogId);
    const currentDogTypes = [];

    Object.values(dogTypes).forEach(dogType => {
      if (dogType.dog_id === parseInt(dogId)) {
        currentDogTypes.push(dogType);
      }
    });

    let currentTypes = {};

    if (Object.keys(currentTypes).length >= 1) {
      currentTypes = {};
    }

    currentDogTypes.forEach(dogType => {
      const { type_id, dog_id } = dogType;
      if (types[type_id] && parseInt(dog_id) === parseInt(dogId)) {
        currentTypes[type_id] = types[type_id];
      }
    });


    const currentDogPhotos = currentDog.dogPhotos;

    return (
      <div>
        <Header />

        <div className="dog-show-upper-half">

          <div className="nav-bar-container">
            <DogNavIndex />
          </div>
          <div className="dog-show-body">
            <DogIndexHeaderItem dog={currentDog} types={currentTypes} reviews={currentDogReviews}/>

            <div className="dog-show-bottom-half">

              <div className="map-container">
                <ShowMap dog={currentDog}/>
                <div className="map-text-container">

                  <div className="map-text-item">
                    <i className="fas fa-map-marker-alt map-show-icon"></i>
                    <div className="map-text-address">
                      <span className="map-text-address-line-one map-text">{currentDog.address_line_one}</span>
                      <span className="map-text-city map-text">{currentDog.city}, {currentDog.state} {currentDog.zip_code}</span>
                    </div>
                  </div>

                  <div className="map-text-item">
                    <i className="fas fa-directions map-show-icon"></i>
                    <a>Get Directions</a>
                  </div>

                  <div className="map-text-item">
                    <i className="fas fa-phone fa-rotate-180 map-show-icon"></i>
                    <p>(415) 626-5600</p>
                  </div>

                  <div className="map-text-item">
                    <i className="fas fa-share-square map-show-icon"></i>
                    <a href="https://www.google.com/">www.google.com</a>
                  </div>

                  <div className="map-text-item map-text-item-last">
                    <i className="fas fa-mobile-alt map-show-icon"></i>
                    <a className="map-phone-link">Send to your phone</a>
                  </div>

                </div>
              </div>

              {this.dogPhotos()}

              {/* <div className="dog-photos-container">
                <img src="http://www.hollywoodanimals.com/images/portfolio/popup/Dogs/Jax/Jax-snow.jpg" />
                <img src="https://lvlabrescue.com/wedoitforthelabs/wp-content/uploads/2017/03/LVLR-Puppies-13-800x400.jpg" />
                <img src="https://ybxzcgnc7b-flywheel.netdna-ssl.com/wp-content/uploads/2018/06/neem-oil-for-dogs.jpg" />
              </div> */}

            </div>
          </div>

        </div>

        <ReviewsContainer dogId={dogId}/>

        <Footer />

      </div>
    );
  }

}

export default withRouter(DogIndex);
