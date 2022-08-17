import React from "react";
import styled from "styled-components";

// takes location data from WeatherApp
// fetches necessary data from OpenWeather API
// maps data to display current temp in C or F
function CurrentTemperature() {
  return (
    <TempContainer>
      <div className="city-name">Dublin</div>
      <div className="temp-phenomena-container">
        <div className="temperature">76 F</div>
        <div className="phenomena">
          <p>Cloudy</p>
          <p>Humidity 40%</p>
          <p>Chance of Rain at 8:00pm</p>
        </div>
      </div>

      <div></div>
    </TempContainer>
  );
}

const TempContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 10rem;
  color: #f3f3f3;
  font-size: 64px;
  text-align: center;
  padding-top: 2rem;
  .phenomena {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    font-size: 24px;
    padding-left: 2.5rem;
  }
  .temperature {
    padding-left: 2rem;
  }
  @media (max-width: 760px) {
    flex-direction: column;
    padding: 0;
    .city-name {
      text-align: start;
      font-size: 2rem;
      background: rgba(73, 73, 73, 0.5);
      border-radius: 20px;
      padding: 1rem 1rem;
      width: 85vw;
    }
    .temperature {
      font-size: 3rem;
      padding-left: 1rem;
    }
    .phenomena {
      font-size: 1rem;
      padding: 0 1rem;
    }
    .temp-phenomena-container {
      display: flex;
      align-items: center;
      margin: 1rem;
      background: rgba(73, 73, 73, 0.5);
      border-radius: 20px;
      width: 85vw;
      height: 13vh;
    }
  }
`;

export default CurrentTemperature;
