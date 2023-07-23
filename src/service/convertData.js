/* eslint-disable no-unused-vars */
export const convertData = (lat, lon) => {
  return fetch(
    `https://us1.locationiq.com/v1/reverse?key=pk.b0e9866cdf0118acdadb922f7d02aad2&lat=${lat}&lon=${lon}&format=json`
  ).then((res) => res.json());
};
