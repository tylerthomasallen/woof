import React from 'react';
import { withRouter } from 'react-router-dom';


class DogIndex extends React.Component {

  componentDidMount() {
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
