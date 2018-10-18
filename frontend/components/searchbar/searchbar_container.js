import { connect } from 'react-redux';
import SearchBar from './searchbar';

const mapStateToProps = ( { entities }, ownProps ) => {
  
  const { formType }  = ownProps;
  const { dogs, types } = entities;

  return {
    dogs,
    types,
    formType
  };
};

const mapDispatchToProps = dispatch => ({
  // retrieveDog: (dogId) => dispatch(retrieveDog(dogId)),
  // processForm: (review) => fetchCreateReview(review)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
