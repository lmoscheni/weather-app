import images from "./images";

import "./styles.css";

export default function WeatherIcon({ type }) {
  if (!type) {
    return null;
  }


  return (
    <div className="weather-icon-container">
      <img src={images[type]} alt={type} />
    </div>
  );
}
