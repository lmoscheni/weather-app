/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

import { findLocationByCoords, getWeatherInfoByLocationId } from "../apiClient";

function getPosition(location) {
  if (!!location) {
    const { latt_long } = location;
    return Promise.resolve({
      latitude: latt_long.split(",")[0],
      longitude: latt_long.split(",")[1],
    });
  }
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (currentPosition) => resolve(currentPosition.coords),
      (error) => reject(error)
    );
  });
}

export default function getWeatherInfo(location) {
  console.log(`Running currentWeatherInfo Hook`, location);
  const [locationInfo, setLocationInfo] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if ((!weatherInfo && !error) || (!!location && locationInfo.woeid !== location.woeid)) {
      setIsLoading(true);
      getPosition(location)
        .then((currentPosition) =>
          findLocationByCoords(
            currentPosition.latitude,
            currentPosition.longitude
          )
        )
        .then((location) => {
          setLocationInfo(location);
          return getWeatherInfoByLocationId(location.woeid);
        })
        .then((weather) => {
          setWeatherInfo(weather);
          setIsLoading(false);
        })
        .catch((responseError) => {
          setError(responseError);
          setIsLoading(false);
        });
    }
  }, [weatherInfo, location, error]);

  return {
    locationInfo,
    weatherInfo,
    error,
    isLoading,
  };
}
