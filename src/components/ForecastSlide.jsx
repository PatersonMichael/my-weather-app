import React from "react";
import FiveDay from "./FiveDay";
import FiveHour from "./FiveHour";
import styled from "styled-components";

// takes location data from WeatherApp

// if toggle is set to fiveDay, render fiveDay
// if toggle is set to fiveHour, render fiveHour
function ForecastSlide() {
  return (
    <ForecastContainer>
      <FiveHour />
      <FiveDay />
    </ForecastContainer>
  );
}

const ForecastContainer = styled.div`
  display: flex;
  padding: 1rem 1rem;
  margin-top: 9.75rem;
  margin-left: 10rem;
  margin-right: 40rem;
  border-radius: 20px;
  color: #f3f3f3;
  font-size: 24px;
  background: rgba(73, 73, 73, 0.5);

  @media (max-width: 1850px) {
    justify-content: center;
    width: 40vw;
    margin: 2rem auto;
    padding: 0 1rem;
    font-size: 1.5rem;
    overflow: hidden;
  }
  @media (max-width: 760px) {
    justify-content: start;
    width: 80vw;
    margin: 2rem auto;
    padding: 0 1rem;
    font-size: 1.25rem;
    overflow: hidden;
  }
`;

export default ForecastSlide;
