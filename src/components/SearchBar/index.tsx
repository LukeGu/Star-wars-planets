import React, { useState } from "react";
// import styled from "styled-components";
import axios from "axios";
// interface
import { PlanetValue } from "../../interface";
// utils
import { formatData } from "../../util";

const SearchBar = (props: { getSearchPlanets: (data: PlanetValue[]) => void }) => {
  const [searchText, setSearchText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios({
      method: "get",
      url: `https://swapi.dev/api/planets/?search=${searchText}`,
      responseType: "stream",
    })
      .then((data) => {
        props.getSearchPlanets(formatData(data));
      })
      .catch((err) => console.log("err", err.message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setSearchText(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
