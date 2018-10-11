import { RECEIVE_DOG } from '../../../actions/dog_actions';
import merge from 'lodash/merge';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DOG:
      const { reviews } = action.payload;
      const newState = {};
      reviews.forEach(review => newState[review.id] = review);
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default reviewsReducer;
