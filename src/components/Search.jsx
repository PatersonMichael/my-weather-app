import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../GeoApi";

// takes user input in search bar
// fetches associated data from GeoDB Cities API
// updates WeatherApp location state
function Search({ onSearchChange }) {
  const [input, setInput] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              lat: `${city.latitude}`,
              lon: `${city.longitude}`,
              label: `${city.name}, ${city.regionCode}, ${city.countryCode}`,
              cityName: `${city.name}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setInput(searchData);
    onSearchChange(searchData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log();
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <AsyncPaginate
        placeholder="Search for city and select from options"
        debounceTimeout={600}
        value={input}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
      {/* Using AsyncPaginate instead of the vanilla input */}
      {/* <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
        placeholder="Search for City"
      /> */}
    </StyledForm>
  );
}

const StyledForm = styled.form`
  padding: 1rem;
  text-align: center;
  input {
    padding: 0.7rem 1.5rem;
    font-size: 1.2rem;
    border-radius: 25px;
    border: none;
    background: rgba(73, 73, 73, 0.85);
    color: #f3f3f3;
    ::placeholder {
      color: #f3f3f3;
    }
  }
  @media (max-width: 760px) {
    padding: 0;
    margin: 1rem 0;
    input {
      width: 90vw;
      height: 9vh;
    }
  }
`;

export default Search;
