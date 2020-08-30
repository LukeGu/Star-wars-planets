import React from "react";
// components
import { Table, Tr, Th, Td, EditBtn } from "./styled";
// interface
import { PlanetValue } from "../../interface";

const EditTd = { display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" };

const PlanetsTable = (props: { planets: PlanetValue[]; onEdit: (data: PlanetValue) => void }) => {
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
            <Td style={EditTd} onClick={() => props.onEdit(planet)}>
              <EditBtn>&gt;</EditBtn>
            </Td>
          </Tr>
        ))}
    </Table>
  );
};

export default PlanetsTable;
