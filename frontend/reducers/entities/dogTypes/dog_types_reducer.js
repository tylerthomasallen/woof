import { RECEIVE_DOG } from '../../../actions/dog_actions';

const dogTypesReducer = (state = {}, action) => {
  debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DOG:
      const { dogTypes } = action.payload;
      const newState = {};
      dogTypes.forEach(dogType => newState[dogType.id] = dogType);
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default dogTypesReducer;
