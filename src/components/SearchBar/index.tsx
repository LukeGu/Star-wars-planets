import React, { useState } from "react";
import axios from "axios";
// interface
import { PlanetValue } from "../../interface";
// components
import { SearchForm, SearchInput, SearchBtn } from "./styled";
// utils
import { formatData } from "../../util";

const SearchBar = (props: {
  getSearchPlanets: (data: PlanetValue[], totalResults: number, searchValue: string) => void;
}) => {
  const [searchText, setSearchText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios({
      method: "get",
      // https://swapi.dev/api/planets/?search=${searchText}&page=${currentPage}
      url: `https://swapi.dev/api/planets/?search=${searchText}`,
      responseType: "stream",
    })
      .then((data) => {
        console.log("data", data);
        props.getSearchPlanets(formatData(data), data.data.count, searchText);
        setSearchText("");
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
