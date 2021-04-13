/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

import { findLocationByCoords, getWeatherInfoByLocationId } from "../apiClient";

function getCurrentPosition() {
  console.log("Getting current position");
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (currentPosition) => resolve(currentPosition.coords),
      (error) => reject(error)
    );
  });
}

export default function currentWeatherInfo() {
  console.log(`Running currentWeatherInfo Hook`);
  const [locationInfo, setLocationInfo] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!weatherInfo && !error) {
      setIsLoading(true);
      getCurrentPosition()
        .then((currentPosition) =>
          findLocationByCoords(
            currentPosition.latitude,
            currentPosition.longitude
          )
        )
        .then(location => {
          console.log(location);
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
  }, [weatherInfo, error]);

  return {
    locationInfo,
    weatherInfo,
    error,
    isLoading
  };
}
