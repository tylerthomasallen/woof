import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/reviews_actions';
import { retrieveUser } from '../../actions/session_actions';
import ReviewsIndex from './reviews_index';

const mapStateToProps = ( {entities}, ownProps ) => {
  const { reviews, dogs, users } = entities;
  const { dogId } = ownProps;

  const currentReviews = [];
  const currentUsers = [];

  Object.values(reviews).forEach(review => {
    if (review.dog_id === parseInt(dogId)) {
      currentReviews.push(review);
    }
  });

  const currentDog = dogs[dogId];

  return {
    currentDog,
    currentReviews,
    users
  };
};

const mapDispatchToProps = dispatch => ({
  retrieveUser: (userId) => dispatch(retrieveUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsIndex);
