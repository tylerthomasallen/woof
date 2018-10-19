import React from 'react';
import Header from '../header/header';
import DogNavIndex from './nav/dog_nav_index';
import DogPreviewItem from './dog_preview_item';
import Footer from '../footer/footer';

class DogSearchPage extends React.Component {

  dogTitle() {
    let { typeId } = this.props;

    // return `Best ${type.charAt(0).toUpperCase() + type.slice(1)} Dogs`;
  }

  componentDidMount() {
    const { typeId, retrieveType } = this.props;
    retrieveType(typeId);
  }


  render() {

    // Object.values(dogTypes).forEach(dogType => {
    //   if (dogType.dog_id === dog.id) {
    //     Object.values(types).forEach(type => {
    //       if (type.id === dogType.type_id) {
    //         dog['types'].push(type);
    //       }
    //     });
    //   }

    const { dogs, dogTypes, types, typeId } = this.props;
    const currentType = types[parseInt(typeId)];

    let currentDogs = [];

    if (currentType) {
      Object.values(dogTypes).forEach(dogType => {
        if (dogType.type_id === currentType.id) {
          Object.values(dogs).forEach(dog => {
            if (dog.id === dogType.dog_id) {
              dog['types'] = [currentType];
              currentDogs.push(dog);
            }
          });
        }
      });
    }
    return (
      <div>

      <div className="dog-search-container">
        <Header />
        <DogNavIndex />

        <div className="dog-search-title">
          <div>
            <h1>{this.dogTitle()}</h1>
            <span>in San Francisco, CA</span>
          </div>
        </div>

        <div className="dog-search-preview-container">
          {currentDogs.map(dog => (
            <DogPreviewItem dog={dog} key={dog.id} cssClass="search"/>
          ))}
        </div>

      </div>
      <Footer />
      </div>
    );
  }
}

export default DogSearchPage;
