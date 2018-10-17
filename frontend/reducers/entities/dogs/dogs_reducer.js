import { RECEIVE_DOG, RECEIVE_DOGS } from '../../../actions/dog_actions';
import merge from 'lodash/merge';

const dogsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DOG:
    const { dog } = action.payload;
      return merge({}, state, { [dog.id]: dog});
    case RECEIVE_DOGS:
      debugger;
    default:
      return state;
  }
};

export default dogsReducer;
