import React, { useState, useEffect } from "react";
import axios from "axios";
//components
import { PageLayout, SearchBar, PlanetsTable } from "../../components/index";

interface PlanetValue {
  name: string;
  population: string;
  climate: string;
}

const PlanetsPage = () => {
  const [planetsData, setPlanetsData] = useState<PlanetValue[]>([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://swapi.dev/api/planets/?page=6`,
      responseType: "stream",
    })
      .then((data) => {
        console.log("results", data);
        const cleanData = data?.data?.results.map((result: PlanetValue) => ({
          name: result.name,
          population: result.population,
          climate: result.climate,
        }));
        setPlanetsData(cleanData);
      })
      .catch((err) => console.log("err", err.message));
  }, []);

  return (
    <PageLayout title="Star wars - Planets">
      <SearchBar />
      <PlanetsTable planets={planetsData} />
    </PageLayout>
  );
};

export default PlanetsPage;
