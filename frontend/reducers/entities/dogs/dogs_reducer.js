import { RECEIVE_DOG } from '../../../actions/dog_actions';
import merge from 'lodash/merge';

const dogsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DOG:
    const { dog } = action.payload;
      return merge({}, state, { [dog.id]: dog});
    default:
      return state;
  }
};

export default dogsReducer;
