import axios from "axios";

const SEARCH_LOCATION_URL = "https://www.metaweather.com/api/location/search/";
const WEATHER_URL = "https://www.metaweather.com/api/location";

export function findLocationByCoords(latitude, longitude) {
  return axios
    .get(
      `http://localhost:8080/${SEARCH_LOCATION_URL}?lattlong=${latitude},${longitude}`
    )
    .then((response) => response.data[0]);
}

export function findLocationByQuery(query) {
  return axios
    .get(`http://localhost:8080/${SEARCH_LOCATION_URL}?query=${query}`)
    .then((response) => response.data);
}

export function getWeatherInfoByLocationId(locationId) {
  return axios
    .get(`http://localhost:8080/${WEATHER_URL}/${locationId}`)
    .then((response) => response.data);
}
