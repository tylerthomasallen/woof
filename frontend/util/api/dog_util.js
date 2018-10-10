export const fetchDog = dogId => {
  return $.ajax ({
    method: 'POST',
    url: 'api/dog',
    data: {
      dogId
    }
  });
};
