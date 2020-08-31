import styled from "styled-components";
// assets
import searchIcon from "../../assets/icon_search.svg";

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  border-radius: 0.3rem;
  background-color: #343434;
  box-shadow: none;
  border: 0;
  width: 15rem;
  opacity: 0.7;
  height: 2.5rem;
  transition: opacity 350ms;
  &:focus-within {
    opacity: 1;
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 80%;
  height: 100%;
  visibility: visible;
  color: #fff;
  background-color: transparent;
  padding-left: 0.8rem;
  outline: none;
  border: none;
`;

export const SearchBtn = styled.button`
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  background-repeat: no-repeat;
  background-color: transparent;
  background-image: url(${searchIcon});
  outline: none;
  border: none;
  cursor: pointer;
`;
