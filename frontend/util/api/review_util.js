export const fetchCreateReview = review => {
  return $.ajax ({
    method: 'POST',
    url: `api/reviews`,
    data: {
      review
    }
  });
};

export const fetchEditReview = (review, reviewId) => {
  debugger;
  return $.ajax ({
    method: 'GET',
    url: `api/reviews/${reviewId}/edit`,
    data: {
      review
    }
  });
};
