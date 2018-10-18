import { RECEIVE_DOG, RECEIVE_DOGS } from '../../../actions/dog_actions';
import merge from 'lodash/merge';

const typesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DOG:
    case RECEIVE_DOGS:
      const { types } = action.payload;
      const newState = {};
      types.forEach(type => newState[type.id] = type);
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default typesReducer;
