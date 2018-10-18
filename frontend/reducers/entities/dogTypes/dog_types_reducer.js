import { RECEIVE_DOG, RECEIVE_DOGS } from '../../../actions/dog_actions';
import merge from 'lodash/merge';

const dogTypesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DOG:
    case RECEIVE_DOGS:
      const { dogTypes } = action.payload;
      const newState = {};
      dogTypes.forEach(dogType => newState[dogType.id] = dogType);
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default dogTypesReducer;
