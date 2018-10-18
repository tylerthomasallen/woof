import { connect } from 'react-redux';
import SearchBar from './searchbar';
import { retrieveDogs, retrieveDog } from '../../actions/dog_actions';

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
  retrieveDogs: (searchInfo) => dispatch(retrieveDogs(searchInfo)),
  retrieveDog: (dogId) => dispatch(retrieveDog(dogId)),
  // processForm: (review) => fetchCreateReview(review)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
