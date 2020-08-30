import { PlanetValue } from "./interface";

export const formatData = (data: any) =>
  data?.data?.results.map((result: PlanetValue) => ({
    name: result.name,
    population: result.population,
    climate: result.climate,
  }));
