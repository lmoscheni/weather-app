import { useState } from "react";

import Loader from "../components/Loader";
import Error from "../components/Error";

import Sidebar from "../components/Sidebar";
import WeatherDetail from "../components/WeatherDetail";

import getWeatherInfo from "../hooks/getWeatherInfo";

import "./styles.css";

function App() {
  const [location, setLocation] = useState(null);
  const { weatherInfo, locationInfo, error, isLoading } = getWeatherInfo(
    location
  );

  if (error) {
    return <Error />;
  }

  return (
    <Loader isLoading={isLoading || !weatherInfo}>
      <div className="app-container">
        <Sidebar
          setLocation={setLocation}
          weatherInfo={weatherInfo}
          locationInfo={locationInfo}
        />
        <WeatherDetail weatherInfo={weatherInfo} locationInfo={locationInfo} />
      </div>
    </Loader>
  );
}

export default App;
