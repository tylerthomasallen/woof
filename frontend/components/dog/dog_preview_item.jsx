import React from 'react';

class DogPreviewItem extends React.Component {

  componentDidMount() {
    const { retrieveDogs, dogs, types, dogTypes, reviews } = this.props;

    retrieveDogs();
  }

  render() {
    return (
      <div className="dog-preview-item-container">
        <span>Hello</span>
      </div>
    );
  }
}

export default DogPreviewItem;
