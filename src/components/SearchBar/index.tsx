import React, { useState } from "react";
import axios from "axios";
// interface
import { PlanetValue } from "../../interface";
// components
import { PopUpMsg } from "../index";
import { SearchForm, SearchInput, SearchBtn } from "./styled";
// utils
import { formatData } from "../../util";

const SearchBar = (props: {
  getSearchPlanets: (data: PlanetValue[], totalResults: number, searchValue: string) => void;
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios({
      method: "get",
      url: `https://swapi.dev/api/planets/?search=${searchText}?page=80`,
      responseType: "stream",
    })
      .then((data) => {
        props.getSearchPlanets(formatData(data), data.data.count, searchText);
        setSearchText("");
      })
      .catch((err) => setErrMsg(err.message));
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search Planets"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <SearchBtn type="submit" />
      </SearchForm>
      {errMsg !== "" && <PopUpMsg message={errMsg} onClose={() => setErrMsg("")} />}
    </>
  );
};

export default SearchBar;
