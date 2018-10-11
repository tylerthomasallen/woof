export const fetchDog = dogId => {
  return $.ajax ({
    method: 'GET',
    url: `api/dogs/${dogId}`
  });
};
