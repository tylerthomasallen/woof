import React from 'react';
import { withRouter } from 'react-router-dom';
// import DogIndexHeaderItem from 'dog'


class DogIndex extends React.Component {

  componentDidMount() {
    const { dogs, dogId } = this.props;
    if ( !dogs[dogId] ) {
      this.props.retrieveDog(dogId);
    }
  }

  render() {
    return (
      <div>
        <h2>Dog Index</h2>
      </div>
    );
  }

}

export default withRouter(DogIndex);
