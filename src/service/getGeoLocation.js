export const getGeoLocation = () => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(
      (position) => res(position),
      (error) => rej(error)
    );
  });
};
