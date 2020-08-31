import styled from "styled-components";
// assets
import searchIcon from "../../assets/icon_search.svg";

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.3rem;
  background-color: #343434;
  box-shadow: none;
  border: 0;
  width: 15rem;
  opacity: 0.7;
  height: 2.5rem;
  padding: 0 0.8rem;
  transition: opacity 350ms;
  &:focus-within {
    opacity: 1;
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: calc(100% - 1.5rem);
  height: 100%;
  visibility: visible;
  color: #fff;
  background-color: transparent;
  outline: none;
  border: none;
  &::placeholder {
    font-family: "Ropa Sans", sans-serif;
    font-size: 1rem;
  }
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
