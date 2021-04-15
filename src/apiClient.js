import axios from "axios";

const SEARCH_LOCATION_URL = "https://www.metaweather.com/api/location/search/";
const WEATHER_URL = "https://www.metaweather.com/api/location";
const CORS_ENABLE_URL = "https://immense-earth-00468.herokuapp.com/";

const corsHeaders = {
  origin: window.location.href,
  "x-requested-with": "XmlHttpRequest",
};

export function findLocationByCoords(latitude, longitude) {
  return axios
    .get(
      `${CORS_ENABLE_URL}/${SEARCH_LOCATION_URL}?lattlong=${latitude},${longitude}`,
      { header: corsHeaders }
    )
    .then((response) => response.data[0]);
}

export function findLocationByQuery(query) {
  return axios
    .get(`${CORS_ENABLE_URL}/${SEARCH_LOCATION_URL}?query=${query}`, {
      header: corsHeaders,
    })
    .then((response) => response.data);
}

export function getWeatherInfoByLocationId(locationId) {
  return axios
    .get(`${CORS_ENABLE_URL}/${WEATHER_URL}/${locationId}`, {
      header: corsHeaders,
    })
    .then((response) => response.data);
}
