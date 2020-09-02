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
            <Td>{planet.name}</Td>
            <Td>{planet.population}</Td>
            <Td>{planet.climate}</Td>
            <Td style={{ cursor: "pointer" }} onClick={() => props.onEdit(planet)}>
              <EditIcon alt="edit" src={editIcon} />
            </Td>
          </Tr>
        ))}
    </Table>
  );
};

export default PlanetsTable;
