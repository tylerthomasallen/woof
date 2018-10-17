import { connect } from 'react-redux';
import { retrieveDog } from '../../actions/dog_actions';
import ReviewForm from './review_form';
import { fetchEditReview } from '../../util/api/review_util';

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
  processForm: (review, reviewId) => fetchEditReview(review, reviewId)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
