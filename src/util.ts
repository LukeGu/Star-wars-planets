import { PlanetValue } from "./interface";

export const formatData = (data: {
  data: { results: { name: string; population: string; climate: string; url: string }[] };
}) =>
  data?.data?.results.map((result: PlanetValue) => ({
    name: result.name,
    population: result.population,
    climate: result.climate,
    url: result.url,
  }));
