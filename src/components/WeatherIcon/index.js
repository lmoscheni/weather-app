import images from "./images";

import "./styles.css";

export default function WeatherIcon({ type }) {
  if (!type) {
    return null;
  }

  return <img src={images[type.replace(" ", "")]} alt={type} />;
}
