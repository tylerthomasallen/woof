export const fetchUser = userId => {
  return $.ajax ({
    method: 'GET',
    url: `api/user`,
    data: {
      userId
    }
  });
};
