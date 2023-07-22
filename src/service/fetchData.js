export const getData = (location = "abohar") => {
  return fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=XMSKFTEWV3GUAFT2F9LBYCLPE&contentType=json`
  ).then((res) => res.json());
};
