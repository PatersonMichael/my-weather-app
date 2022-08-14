import React from "react";
import Search from "./Search";
import ForecastSlide from "./ForecastSlide";
import CurrentTemperature from "./CurrentTemperature";

// Top Component in structure
// Holds location state (taken from Search)
// Passes location state as props to components that need it for Weather fetch
function WeatherApp() {
  return (
    <div>
      <Search />
      <CurrentTemperature />
      <ForecastSlide />
    </div>
  );
}

export default WeatherApp;
