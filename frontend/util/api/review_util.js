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
  return $.ajax ({
    method: 'GET',
    url: `api/reviews/${reviewId}/edit`,
    data: {
      review
    }
  });
};

export const fetchDestroyReview = (reviewId) => {
  return $.ajax ({
    method: 'DELETE',
    url: `api/reviews/${reviewId}`,
  });
};

export const fetchReviews = (dogId) => {
  return $.ajax ({
    method: 'GET',
    url: `api/reviews`,
    data: {
      dogId
    }
  });

};
