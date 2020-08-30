import styled from "styled-components";

export const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #dddddd;
  }
`;

export const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;
