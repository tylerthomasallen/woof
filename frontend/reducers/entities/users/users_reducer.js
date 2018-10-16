import { RECEIVE_CURRENT_USER } from '../../../actions/session_actions';
import { RECEIVE_USER } from '../../../actions/reviews_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    debugger;
      return merge({}, state, { [action.payload.currentUser.id]: action.payload.currentUser});
    default:
      return state;
  }
};

export default usersReducer;
