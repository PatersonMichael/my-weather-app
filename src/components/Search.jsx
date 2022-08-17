import React from "react";
import { useState } from "react";
import styled from "styled-components";

// takes user input in search bar
// fetches associated data from GeoDB Cities API
// updates WeatherApp location state
function Search() {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
        placeholder="Search for City"
      />
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
