import React from "react";
// components
import { Table, Tr, Th, Td, EditIcon } from "./styled";
// interface
import { PlanetValue } from "../../interface";
// assets
import editIcon from "../../assets/edit.svg";

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
          <Tr key={planet.url}>
            <Td data-label="Name">{planet.name}</Td>
            <Td data-label="Population">{planet.population}</Td>
            <Td data-label="Climate">{planet.climate}</Td>
            <Td data-label="Update" style={{ cursor: "pointer" }} onClick={() => props.onEdit(planet)}>
              <EditIcon alt="edit" src={editIcon} />
            </Td>
          </Tr>
        ))}
    </Table>
  );
};

export default PlanetsTable;
