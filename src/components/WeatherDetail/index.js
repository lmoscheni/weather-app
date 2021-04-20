import "./styles.css";

import NextDaysInfo from "./NextDaysInfo";
import HightLights from "./HightLights";
import Footer from "./Footer";

export default function WeatherDetail({ weatherInfo, locationInfo }) {
  if (!weatherInfo) {
    return null;
  }

  const [currentDay, ...nextDays] = weatherInfo.consolidated_weather ?? [];

  return (
    <div className="weather-detail-container">
      <NextDaysInfo items={nextDays} />
      <HightLights todayInfo={currentDay} />
      <Footer />
    </div>
  );
}
