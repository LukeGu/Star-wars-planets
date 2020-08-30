import React, { useState, useEffect } from "react";
import axios from "axios";
// components
import { PageLayout, SearchBar, PlanetsTable, Pagination, Modal, PlanetForm } from "../../components/index";
// interface
import { PlanetValue } from "../../interface";
// utils
import { formatData } from "../../util";

const PlanetsPage = () => {
  const [planetsData, setPlanetsData] = useState<PlanetValue[]>([]);
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetValue>({ name: "", population: "", climate: "" });
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://swapi.dev/api/planets/?page=${pageNumber}`,
      responseType: "stream",
    })
      .then((data) => {
        console.log("planets", data.data.results);
        setPlanetsData(formatData(data));
      })
      .catch((err) => console.log("err", err.message));
  }, [pageNumber]);

  const handleGetPageNumber = (num: number) => {
    setPageNumber(num);
  };

  const handleSearchPlanets = (data: PlanetValue[]) => {
    setPlanetsData(data);
  };

  const handleSelectPlanet = (data: PlanetValue) => {
    setSelectedPlanet(data);
    setIsModalOpen(true);
  };

  return (
    <PageLayout title="Star wars - Planets">
      <SearchBar getSearchPlanets={handleSearchPlanets} />
      <PlanetsTable planets={planetsData} onEdit={handleSelectPlanet} />
      <Pagination totalNum={6} currentNum={pageNumber} getPageNumber={handleGetPageNumber} />
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <PlanetForm planetDetails={selectedPlanet} />
        </Modal>
      )}
    </PageLayout>
  );
};

export default PlanetsPage;
