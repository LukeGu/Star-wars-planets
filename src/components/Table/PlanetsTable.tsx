import React from "react";
// import styled from "styled-components";
// components
import { Table, Tr, Th, Td, EditBtn } from "./styled";
// interface
import { PlanetValue } from "../../interface";

const PlanetsTable = (props: { planets: PlanetValue[] }) => {
  return (
    <Table>
      <Tr>
        <Th>Name</Th>
        <Th>Population</Th>
        <Th>Climate</Th>
        <Th>Update</Th>
      </Tr>
      {props.planets.length > 0 &&
        props.planets.map((planet: PlanetValue) => (
          <Tr key={planet.name}>
            <Td>{planet.name}</Td>
            <Td>{planet.population}</Td>
            <Td>{planet.climate}</Td>
            <Td style={{ display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
              <EditBtn>&gt;</EditBtn>
            </Td>
          </Tr>
        ))}
    </Table>
  );
};

export default PlanetsTable;
