import React from "react";
import styled from "styled-components";

// takes location data from forecastSlide
// fetches necessary data from OpenWeather API and maps to display
function FiveDay() {
  return (
    <FiveContainer>
      <div>
        <p>Monday</p>
        <p>H:75 L:58</p>
        <p>Rain</p>
      </div>
      <div>
        <p>Tuesday</p>
        <p>H:75 L:58</p>
        <p>Rain</p>
      </div>
      <div>
        <p>Wednesday</p>
        <p>H:75 L:58</p>
        <p>Rain</p>
      </div>
      <div>
        <p>Thursday</p>
        <p>H:75 L:58</p>
        <p>Rain</p>
      </div>
      <div>
        <p>Friday</p>
        <p>H:75 L:58</p>
        <p>Rain</p>
      </div>
    </FiveContainer>
  );
}

const FiveContainer = styled.div`
  display: flex;
  margin-left: 6rem;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1rem;
    p {
      padding-bottom: 1rem;
    }
  }
  @media (max-width: 1850px) {
    display: none;
    overflow: scroll;
    flex-direction: column;
    color: black;
    margin: 0;
    div {
      flex-direction: column;
      padding: 0;
    }
    p {
      padding: 0;
    }
  }
`;

export default FiveDay;
