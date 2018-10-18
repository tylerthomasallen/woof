import { RECEIVE_DOG, RECEIVE_DOGS } from '../../../actions/dog_actions';
import merge from 'lodash/merge';

const dogsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DOG:
    const { dog } = action.payload;
      return merge({}, state, { [dog.id]: dog});
    case RECEIVE_DOGS:
    const { dogs } = action.payload;
      const newState = {};
      dogs.forEach(currDog => newState[currDog.id] = currDog);
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default dogsReducer;
