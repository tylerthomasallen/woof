export const fetchCreateReview = review => {
  debugger;
  return $.ajax ({
    method: 'POST',
    url: `api/reviews`,
    data: {
      review
    }
  });
};
