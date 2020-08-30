import React from "react";
// import styled from "styled-components";
// components
import { Table, Tr, Th, Td } from "./styled";

interface PlanetValue {
  name: string;
  population: string;
  climate: string;
}

const PlanetsTable = (props: { planets: PlanetValue[] }) => {
  console.log("table", props.planets);
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
            <Td>&gt;</Td>
          </Tr>
        ))}
    </Table>
  );
};

export default PlanetsTable;
