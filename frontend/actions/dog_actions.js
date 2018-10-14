import * as DogUtil from '../util/api/dog_util';

export const RECEIVE_DOG = 'RECEIVE_DOG';

// export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
//
// export const updateBounds = bounds => {
//   return {
//     type: UPDATE_BOUNDS,
//     bounds
//   };
// };

export const receiveDog = payload => {
  return {
    type: RECEIVE_DOG,
    payload
  };
};

export const retrieveDog = dogId => dispatch => {
  return (
    DogUtil.fetchDog(dogId).then(
      dogInfo => (dispatch(receiveDog(dogInfo)))
    )
  );
};
