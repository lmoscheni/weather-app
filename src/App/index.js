import { useState } from "react";

import Sidebar from "../components/Sidebar";
import getWeatherInfo from "../hooks/getWeatherInfo";

import "./styles.css";

function App() {
  const [location, setLocation] = useState(null);
  const { weatherInfo, locationInfo, error, isLoading } = getWeatherInfo(
    location
  );
  if (isLoading) {
    return <div> Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <div className="app-container">
      <Sidebar
        setLocation={setLocation}
        weatherInfo={weatherInfo}
        locationInfo={locationInfo}
      />
    </div>
  );
}

export default App;
