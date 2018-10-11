import { combineReducers } from 'redux';

import usersReducer from './users/users_reducer';
import dogsReducer from './dogs/dogs_reducer';
import typesReducer from './types/types_reducer';
import dogTypesReducer from './dogTypes/dog_types_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  dogs: dogsReducer,
  types: typesReducer,
  dogTypes: dogTypesReducer
});

export default entitiesReducer;
