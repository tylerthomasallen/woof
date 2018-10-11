import React from 'react';
import { withRouter } from 'react-router-dom';
import DogIndexHeaderItem from './dog_index_header_item';
import DogIndexNavItem from './dog_index_nav_item';


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

        <div className="session-form-header">
          <h2>PLACEHOLDER FOR SEARCH COMPONENT</h2>
        </div>

        <div className="dog-show-upper-half">
          <div className="nav-bar-container">
            <DogIndexNavItem />
          </div>
          <div className="dog-show-body">
            <DogIndexHeaderItem dog={currentDog} types={currentTypes} reviews={currentDogReviews}/>
          </div>
        </div>


      </div>
    );
  }

}

export default withRouter(DogIndex);
