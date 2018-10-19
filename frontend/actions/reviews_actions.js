import * as ReviewUtil from '../util/api/review_util';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEW';

export const receiveReviews = reviews => {
  return {
    type: RECEIVE_REVIEWS,
    reviews
  };
};


export const retrieveReviews = dogId => dispatch => {
  return (
    ReviewUtil.fetchReviews(dogId).then(
      reviews => (dispatch(receiveReviews(reviews)))
    )
  );
};
