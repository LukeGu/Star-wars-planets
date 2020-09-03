import styled from "styled-components";

export const Table = styled.table`
  font-family: "Ropa Sans", sans-serif;
  border-collapse: collapse;
  width: 100%;
  background-color: transparent;
  color: #b9b9b9;
  @media screen and (max-width: 35rem) {
    border: 0;
  }
`;

export const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 0.5rem;
  @media screen and (max-width: 35rem) {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

export const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 0.5rem;
  @media screen and (max-width: 35rem) {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
    &:before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
    &:last-child {
      border-bottom: 0;
      &:before {
        margin-top: 0.3rem;
      }
    }
  }
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #151515;
  }
  &:hover {
    ${Td} {
      color: #fff;
    }
  }
  @media screen and (max-width: 35rem) {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
    &:first-child {
      display: none;
    }
  }
`;

export const EditIcon = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.4rem;
  @media screen and (max-width: 35rem) {
    margin: unset;
    margin-left: auto;
  }
`;
