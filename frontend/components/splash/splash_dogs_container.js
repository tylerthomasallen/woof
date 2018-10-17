import { connect } from 'react-redux';
import SplashDogs from './splash_dogs';
import { retrieveDogs, retrieveDog } from '../../actions/dog_actions';

const mapStateToProps = ( {entities}, ownProps) => {
  const { dogs, types, dogTypes, reviews } = entities;
  return {
    dogs,
    types,
    dogTypes,
    reviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    retrieveDogs: () => dispatch(retrieveDogs()),
    retrieveDog: (dogId) => dispatch(retrieveDog(dogId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashDogs);
