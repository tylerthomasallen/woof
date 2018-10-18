export const fetchDog = dogId => {
  return $.ajax ({
    method: 'GET',
    url: `api/dogs/${dogId}`
  });
};

export const fetchDogs = (searchInfo) => {
  return $.ajax ({
    method: 'GET',
    url: `api/dogs`,
    data: {
      searchInfo
    }
  });
};
