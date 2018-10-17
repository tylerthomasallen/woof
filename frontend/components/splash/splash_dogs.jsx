import React from 'react';
import DogPreviewItem from '../dog/dog_preview_item';

class SplashDogs extends React.Component {

  componentDidMount() {
    const { retrieveDog } = this.props;

    retrieveDog(1);
    retrieveDog(2);
    retrieveDog(3);
    retrieveDog(4);
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

    debugger;
    return (
      <div className="splash-dogs-container">
        <DogPreviewItem />
      </div>
    );
  }
}

export default SplashDogs;
