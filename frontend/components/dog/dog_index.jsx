import React from 'react';
import { withRouter } from 'react-router-dom';
import DogIndexHeaderItem from './dog_index_header_item';


class DogIndex extends React.Component {

  componentDidMount() {
    const { dogs, dogId } = this.props;
    if ( !dogs[dogId] ) {
      this.props.retrieveDog(dogId);
    }
  }

  render() {
    const { dogs, dogId, dogTypes, types } = this.props;
    const currentDog = dogs[dogId];

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
          <DogIndexHeaderItem dog={currentDog} types={currentTypes}/>
        </div>
      </div>
    );
  }

}

export default withRouter(DogIndex);
