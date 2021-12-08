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
  const [locationInfo, setLocationInfo] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const initialFetch = !locationInfo && !weatherInfo && !error;
  const isLocationChanged = !!location
    ? locationInfo.woeid !== location.woeid
    : !!locationInfo && !!weatherInfo && !isLoading;

  useEffect(() => {
    if (initialFetch || isLocationChanged) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weatherInfo, location, error]);

  return {
    locationInfo,
    weatherInfo,
    error,
    isLoading,
  };
}
