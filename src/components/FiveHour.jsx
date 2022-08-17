import React from "react";
import styled from "styled-components";

// takes location data from forecastSlide
// fetches necessary data from OpenWeather API and maps to display
function FiveHour() {
  return (
    <FiveContainer>
      <div>2 PM 75 Cloudy</div>
      <div>3 PM 75 Cloudy</div>
      <div>4 PM 75 Cloudy</div>
      <div>5 PM 75 Cloudy</div>
      <div>6 PM 75 Drizzle</div>
    </FiveContainer>
  );
}

const FiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  div {
    padding: 1rem 1rem;
  }
`;

export default FiveHour;
