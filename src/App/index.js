import { useState } from "react";

import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";
import getWeatherInfo from "../hooks/getWeatherInfo";

import "./styles.css";

function App() {
  const [location, setLocation] = useState(null);
  const { weatherInfo, locationInfo, error, isLoading } = getWeatherInfo(
    location
  );

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <Loader isLoading={isLoading || !weatherInfo}>
      <div className="app-container">
        <Sidebar
          setLocation={setLocation}
          weatherInfo={weatherInfo}
          locationInfo={locationInfo}
        />
      </div>
    </Loader>
  );
}

export default App;
