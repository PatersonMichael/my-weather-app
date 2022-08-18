import React from "react";
import Search from "./Search";
import ForecastSlide from "./ForecastSlide";
import CurrentTemperature from "./CurrentTemperature";
// import logo from "../assets/bigBackground.jpg";
import styled from "styled-components";

// Top Component in structure
// Holds location state (taken from Search)
// Passes location state as props to components that need it for Weather fetch
function WeatherApp() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <Wrapper>
      {/* <img src={logo} alt="test" /> */}
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentTemperature />
      <ForecastSlide />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  @media (max-width: 760px) {
    padding-top: 1rem;
    overflow: hidden;
  }
`;

export default WeatherApp;
