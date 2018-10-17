import React from 'react';
import DogPreviewItemContainer from '../dog/dog_preview_item_container';

class SplashDogs extends React.Component {

  render() {
    return (
      <div className="splash-dogs-container">
        <DogPreviewItemContainer />
      </div>
    );
  }
}

export default SplashDogs;
