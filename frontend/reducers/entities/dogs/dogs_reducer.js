import { RECEIVE_DOG } from '../../../actions/dog_actions';

const dogsReducer = (state = {}, action) => {
  debugger;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DOG:
    const { dog } = action.payload;
      return Object.assign({}, state, { [dog.id]: dog});
    default:
      return state;
  }
};

export default dogsReducer;
