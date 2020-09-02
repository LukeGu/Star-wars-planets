import React, { useState } from "react";
import axios from "axios";
// interface
import { PlanetValue } from "../../interface";
// components
import { PopUpMsg, Spinner } from "../index";
import { SearchForm, SearchInput, SearchBtn } from "./styled";
// utils
import { formatData } from "../../util";

const SearchBar = (props: {
  getSearchPlanets: (data: PlanetValue[], totalResults: number, searchValue: string) => void;
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    axios({
      method: "get",
      url: `https://swapi.dev/api/planets/?search=${searchText}`,
      responseType: "stream",
    })
      .then((data) => {
        props.getSearchPlanets(formatData(data), data.data.count, searchText);
        setSearchText("");
        setIsLoading(false);
      })
      .catch((err) => {
        setErrMsg(err.message);
        setIsLoading(false);
      });
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
      {isLoading && <Spinner />}
      {errMsg !== "" && <PopUpMsg message={errMsg} onClose={() => setErrMsg("")} />}
    </>
  );
};

export default SearchBar;
