import { connect } from 'react-redux';
import { fetchUser, fetchReviews } from '../../actions/reviews_actions';
import ReviewsIndex from './reviews_index';

const mapStateToProps = ( {entities}, ownProps ) => {
  const { reviews, dogs } = entities;
  const { dogId } = ownProps;

  const currentReviews = [];

  Object.values(reviews).forEach(review => {
    if (review.dog_id === parseInt(dogId)) {
      currentReviews.push(review);
    }
  });

  const currentDog = dogs[dogId];

  return {
    currentDog,
    currentReviews
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsIndex);
