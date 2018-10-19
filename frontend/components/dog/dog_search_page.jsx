import React from 'react';
import Header from '../header/header';
import DogNavIndex from './nav/dog_nav_index';
import DogPreviewItem from './dog_preview_item';

class DogSearchPage extends React.Component {

  dogTitle() {
    let { typeId } = this.props;

    // return `Best ${type.charAt(0).toUpperCase() + type.slice(1)} Dogs`;
  }

  componentDidMount() {
    const { typeId, retrieveType } = this.props;
    debugger;
    retrieveType(typeId);
  }


  render() {

    const { dogs, dogTypes, types, typeId } = this.props;

    const currentType = types[parseInt(typeId)];

    return (
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

        </div>
      </div>
    );
  }
}

export default DogSearchPage;
