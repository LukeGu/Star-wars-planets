import React, { useState } from "react";
// import styled from "styled-components";
import axios from "axios";

const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios({
      method: "get",
      url: `https://swapi.dev/api/planets/?search=${searchText}`,
      responseType: "stream",
    }).then(function (response) {
      console.log("results", response);
    });
  };
  console.log("input", searchText);
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setSearchText(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
