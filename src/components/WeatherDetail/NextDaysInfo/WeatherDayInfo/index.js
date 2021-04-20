import { format } from "date-fns";

import WeatherIcon from "../../../WeatherIcon";

import "./styles.css";

export default function WeatherDayInfo({ info }) {
  console.log(format(new Date(info.applicable_date), "eeee"), info);
  const date = new Date(info.applicable_date);
  return (
    <div className="weather-day-info-container">
      {/* {isTomorrow(date) ? "Tomorrow" : format(date, "eeee")} */}
      <p>{format(date, "EEE, d LLL")}</p>
      <div className="weather-icon"> <WeatherIcon type={info.weather_state_name} /></div>
      <p className="weather-temp-info">
        <span>{Math.trunc(info.max_temp)}ºC</span>
        <span>{Math.trunc(info.min_temp)}ºC</span>
      </p>
    </div>
  );
}
