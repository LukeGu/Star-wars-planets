import styled from "styled-components";

export const Table = styled.table`
  font-family: "Ropa Sans", sans-serif;
  border-collapse: collapse;
  width: 100%;
  background-color: transparent;
  color: #b9b9b9;
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

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #151515;
  }
  &:hover {
    ${Td} {
      color: #fff;
    }
  }
`;

export const EditBtn = styled.div`
  width: fit-content;
  transform: rotate(90deg);
`;
