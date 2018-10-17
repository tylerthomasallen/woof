import { connect } from 'react-redux';
import { retrieveDog } from '../../actions/dog_actions';
import ReviewForm from './review_form';

const mapStateToProps = ( { entities, session }, ownProps ) => {

  const dogId = parseInt(ownProps.match.params.dogId);
  const reviewId = parseInt(ownProps.match.params.reviewId);
  const userId = session.id;
  const { dogs } = entities;
  const { reviews } = entities;

  return {
    dogId,
    userId,
    dogs,
    reviews,
    reviewId,
    formType: "Edit"
  };
};

const mapDispatchToProps = dispatch => ({
  retrieveDog: (dogId) => dispatch(retrieveDog(dogId)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
