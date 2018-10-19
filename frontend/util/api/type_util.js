export const fetchType = (typeId) => {
  return $.ajax ({
    method: 'GET',
    url: `api/types/${typeId}`
  });
};
