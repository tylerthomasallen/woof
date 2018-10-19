import * as DogUtil from '../util/api/dog_util';
import * as ReviewUtil from '../util/api/review_util';

export const RECEIVE_DOG = 'RECEIVE_DOG';
export const RECEIVE_DOGS = 'RECEIVE_DOGS';

// export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
//
// export const updateBounds = bounds => {
//   return {
//     type: UPDATE_BOUNDS,
//     bounds
//   };
// };
//
export const receiveDogs = payload => {
  debugger;
  return {
    type: RECEIVE_DOGS,
    payload
  };
};

export const receiveDog = payload => {
  return {
    type: RECEIVE_DOG,
    payload
  };
};

export const destroyReview = reviewId => dispatch => {
  return (
    ReviewUtil.fetchDestroyReview(reviewId).then(
      dogInfo => dispatch(receiveDog(dogInfo))
    )
  );
};

export const retrieveDog = dogId => dispatch => {
  return (
    DogUtil.fetchDog(dogId).then(
      dogInfo => (dispatch(receiveDog(dogInfo)))
    )
  );
};

export const retrieveDogs = (searchInfo) => dispatch => {

  return (
    DogUtil.fetchDogs(searchInfo).then(
      dogs => (dispatch(receiveDogs(dogs)))
    )
  );
};
