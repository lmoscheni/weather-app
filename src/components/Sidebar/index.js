import { useState } from "react";

import LocationSearchMenu from "./LocationSearchMenu";
import WeatherIcon from "../WeatherIcon";

import "./styles.css";

export default function Sidebard(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const { consolidated_weather } = props?.weatherInfo ?? {
    consolidated_weather: [],
  };
  const { weather_state_name, the_temp } = consolidated_weather[0] ?? {
    weather_state_name: null,
    the_temp: "unknowkn",
  };

  const today = new Date();

  const openMenuHandler = () => setOpenMenu(true);
  const closeMenuHandler = () => setOpenMenu(false);

  if (openMenu) {
    return (
      <LocationSearchMenu
        setLocation={props.setLocation}
        onClose={closeMenuHandler}
      />
    );
  }

  return (
    <div className="sidebar-container">
      <div className="weather-location-selector">
        <div
          className="cta-button cta-search-location"
          onClick={openMenuHandler}
        >
          Search for places
        </div>
        <div
          className="cta-button cta-current-location"
          onClick={() => props.setLocation(null)}
        >
          <span className="material-icons-round">gps_fixed</span>
        </div>
      </div>
      <div className="weather-current-state-container">
        <WeatherIcon type={weather_state_name} />
      </div>
      <div className="weather-temperature-container">
        <span className="weather-temperature-value">
          {Math.trunc(the_temp)}
        </span>
        <span className="weather-temperature-unit">ºC</span>
      </div>
      <div className="weather-status">{weather_state_name}</div>
      <div className="weather-date-info">
        <span>Today</span>·
        <span>
          {today.toDateString().replace(today.getFullYear(), "").trim()}
        </span>
      </div>
      <div className="weather-location-info">
        <span className="place-icon material-icons-round">place</span>{" "}
        {props?.locationInfo?.title || "unknowkn"}
      </div>
    </div>
  );
}
