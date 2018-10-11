import * as DogUtil from '../util/api/dog_util';

export const RECEIVE_DOG = 'RECEIVE_DOG';

export const receiveDog = payload => {
  debugger;
  return {
    type: RECEIVE_DOG,
    payload
  };
};

export const retrieveDog = dogId => dispatch => {
  debugger;
  return (
    DogUtil.fetchDog(dogId).then(
      dogInfo => (dispatch(receiveDog(dogInfo)))
    )
  );
};
