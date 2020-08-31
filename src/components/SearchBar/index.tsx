import React, { useState } from "react";
import axios from "axios";
// interface
import { PlanetValue } from "../../interface";
// components
import { SearchForm, SearchInput, SearchBtn } from "./styled";
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
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Search Planets"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <SearchBtn type="submit" />
    </SearchForm>
  );
};

export default SearchBar;
