import React from 'react';
import Stars from '../stars/stars';
import { Link, Redirect } from 'react-router-dom';

class DogPreviewItem extends React.Component {

  dogTypeText() {
    const { dog } = this.props;

    let text = '';

    dog.types.forEach((type, idx) => {
      if (idx < dog.types.length - 1) {
        text += type.name;
        text += ', ';
      } else {
        text += type.name;
      }
    });

    return text;
  }

  render() {
    const { cssClass, dog } = this.props;
    const { dogPhotos }  = dog;
    const firstPhoto = dogPhotos[0];

    return (
      <div className={`${cssClass}-dog-preview-item-container`}>
        <Link to={`/dog/${dog.id}`}>
          <img src={firstPhoto.url}></img>
        </Link>

        <div className={`${cssClass}-dog-preview-item-text`}>
          <Link to={`/dog/${dog.id}`}><h3>{dog.name}</h3></Link>


          <div className={`${cssClass}-dog-preview-stars`}>
            <Stars rating={dog.rating} />
              <span>{dog.reviewCount} reviews</span>
          </div>

          <span className={`${cssClass}-dog-preview-types`}>
            {this.dogTypeText()}
          </span>

          <span className={`${cssClass}-dog-preview-types`}>
            {dog.city}, {dog.state}
          </span>

          <div className={`${cssClass}-dog-preview-fire`}>
            <i className="fas fa-paw"></i>
            <span>Popular dog in your area!</span>
          </div>

        </div>

      </div>
    );
  }
}

export default DogPreviewItem;
