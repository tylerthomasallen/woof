import { connect } from 'react-redux';
import DogIndex from './dog_index';
import { retrieveDog } from '../../actions/dog_actions';

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    dogId: ownProps.match.params.dogId,
    user: state.entities.user,
    dogs: state.entities.dogs,
    types: state.entities.types,
    dogTypes: state.entities.dogTypes,
    reviews: state.entities.reviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    retrieveDog: (dogId) => dispatch(retrieveDog(dogId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogIndex);
