import React from "react";
import FiveDay from "./FiveDay";
import FiveHour from "./FiveHour";

// takes location data from WeatherApp

// if toggle is set to fiveDay, render fiveDay
// if toggle is set to fiveHour, render fiveHour
function ForecastSlide() {
  return (
    <div>
      <FiveDay />
      <FiveHour />
    </div>
  );
}

export default ForecastSlide;
