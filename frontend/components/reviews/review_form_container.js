import { connect } from 'react-redux';
// import { fetchReviews } from '../../actions/reviews_actions';
import { retrieveDog } from '../../actions/dog_actions';
import ReviewForm from './review_form';

const mapStateToProps = ( { entities, session }, ownProps ) => {
  const dogId = parseInt(ownProps.match.params.dogId);
  const userId = session.id;
  const { dogs } = entities;
  
  return {
    dogId,
    userId,
    dogs
  };
};

const mapDispatchToProps = dispatch => ({
  retrieveDog: (dogId) => dispatch(retrieveDog(dogId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);