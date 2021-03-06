import "./styles.css";

import WeatherDayInfo from "./WeatherDayInfo";

export default function NextDaysInfo({ items }) {
  return (
    <div className="next-days-info-container">
      {items.map((dayInfo) => (
        <WeatherDayInfo key={dayInfo.id} info={dayInfo} />
      ))}
    </div>
  );
}
