export const fetchCreateReview = review => {
  return $.ajax ({
    method: 'POST',
    url: `api/reviews`,
    data: {
      review
    }
  });
};
