import React from 'react';
import { withRouter } from 'react-router-dom';
import DogIndexHeaderItem from './dog_index_header_item';
import DogNavIndex from './nav/dog_nav_index';
import Header from '../header/header';
import ShowMap from '../map/show_map';
import ReviewsContainer from '../reviews/reviews_container';


class DogIndex extends React.Component {

  componentDidMount() {
    const { dogs, dogId } = this.props;
    if ( !dogs[dogId] ) {
      this.props.retrieveDog(dogId);
    }
  }

  render() {
    const { dogs, dogId, dogTypes, types, reviews } = this.props;

    const currentDog = dogs[dogId] || {};

    const currentDogReviews = {};
    Object.values(reviews).forEach(review => {
      if (review.dog_id === parseInt(dogId)) {
        currentDogReviews[review.id] = review;
      }
    });


    const currentDogTypes = Object.values(dogTypes).filter(dogType => dogType.dog_id = dogId);
    const currentTypes = {};

    currentDogTypes.forEach(dogType => {
      let type_id = dogType.type_id;
      if (types[type_id]) {
        currentTypes[type_id] = types[type_id];
      }
    });



    return (
      <div>
        <Header />

        <div className="dog-show-upper-half">

          <div className="nav-bar-container">
            <DogNavIndex />
          </div>
          <div className="dog-show-body">
            <DogIndexHeaderItem dog={currentDog} types={currentTypes} reviews={currentDogReviews}/>
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
          </div>

        </div>

        <ReviewsContainer dogId={dogId}/>
        

      </div>
    );
  }

}

export default withRouter(DogIndex);
