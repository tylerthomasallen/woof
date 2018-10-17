import React from 'react';
import DogPreviewItem from '../dog/dog_preview_item';

class SplashDogs extends React.Component {

  componentDidMount() {
    const { retrieveDog } = this.props;

    retrieveDog(1);
    retrieveDog(2);
    retrieveDog(3);
  }

  render() {
    let { dogs, reviews, dogTypes, types } = this.props;

    Object.values(dogs).forEach(dog => {
      dog['types'] = [];

      Object.values(dogTypes).forEach(dogType => {
        if (dogType.dog_id === dog.id) {
          Object.values(types).forEach(type => {
            if (type.id === dogType.type_id) {
              dog['types'].push(type);
            }
          });
        }
      });
    });

    Object.values(dogs).forEach(dog => {
      dog['reviewCount'] = 0;
      Object.values(reviews).forEach(review => {
        dog['reviewCount'] += 1;
      });
    });

    return (
      <div className="splash-dogs-container">
        <h2>Find the Best Dogs in Town</h2>
        <div className="splash-dogs-preview-comp">
          {Object.values(dogs).map(dog => (
            <DogPreviewItem dog={dog} key={dog.id} cssClass="splash"/>
          ))}
        </div>
      </div>
    );
  }
}

export default SplashDogs;
