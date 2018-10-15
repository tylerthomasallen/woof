export const fetchCityAndState = zipcode => {
  return $.ajax ({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=AIzaSyAtuRxYMQ20cACgsvqS9xvEA1hTQG43pV0`
  });
};
