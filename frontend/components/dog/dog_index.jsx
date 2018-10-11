import React from 'react';
import { withRouter } from 'react-router-dom';


class DogIndex extends React.Component {

  componentDidMount() {
    debugger;
    const { dogs, dogId } = this.props;
    if ( !dogs[dogId] ) {
      debugger;
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
