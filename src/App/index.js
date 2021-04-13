import Sidebar from "../components/Sidebar";
import currentWeatherInfo from "../hooks/currentWeatherInfo";

import "./styles.css";

function App() {
  const { weatherInfo, locationInfo, error, isLoading } = currentWeatherInfo();
  if (isLoading) {
    return <div> Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <div className="app-container">
      <Sidebar weatherInfo={weatherInfo} locationInfo={locationInfo} />
    </div>
  );
}

export default App;
