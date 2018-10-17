export const fetchDog = dogId => {
  return $.ajax ({
    method: 'GET',
    url: `api/dogs/${dogId}`
  });
};

export const fetchDogs = () => {
  return $.ajax ({
    method: 'GET',
    url: `api/dogs`
  });
};
