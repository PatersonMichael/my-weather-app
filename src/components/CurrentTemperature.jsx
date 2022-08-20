import React from "react";
import { useState } from "react";
import styled from "styled-components";

// takes location data from WeatherApp
// fetches necessary data from OpenWeather API
// maps data to display current temp in C or F
function CurrentTemperature(props) {
  // console.log(props.handleLocationData);

  const [temperature = 0, setTemperature] = useState();
  const [weather = "Weather data will display here", setWeather] = useState("");

  const { cityName, lat, lon } = props.handleLocationData;
  const loadWeatherData = () => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OW_API_KEY}&units=imperial`
    )
      .then((response) => response.json())
      .then((weatherData) => {
        // console.log(weatherData);
        setTemperature(weatherData.main.temp);
        setWeather(weatherData.weather[0].main);
      })
      .catch((err) => console.error(err));
  };

  // console.log(`weather data is: ${loadWeatherData()}`);

  return (
    <TempContainer>
      <div className="city-name">{cityName}</div>
      <div className="temp-phenomena-container">
        <div className="temperature" loadweatherdata={loadWeatherData()}>
          {Math.floor(temperature)}
        </div>
        <div className="phenomena">
          <p>{weather}</p>
          <p></p>
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
      font-size: 1.5rem;
      padding: 0 2rem;
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
