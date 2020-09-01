import React, { useState, useEffect } from "react";
import axios from "axios";
// components
import { PageLayout, SearchBar, PlanetsTable, Pagination, Modal, PlanetForm } from "../../components/index";
import { TitleSection, Title, SearchSection } from "./styled";
// interface
import { PlanetValue } from "../../interface";
// utils
import { formatData } from "../../util";

const PlanetsPage = () => {
  const [planetsData, setPlanetsData] = useState<PlanetValue[]>([]);
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetValue>({ name: "", population: "", climate: "", url: "" });
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPageNumber, setTotalPageNumber] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  useEffect(() => {
    const storedData = localStorage.getItem(pageNumber.toString());
    if (storedData) {
      setPlanetsData(JSON.parse(storedData));
      setTotalPageNumber(Number(localStorage.getItem("totalPages")));
    } else
      axios({
        method: "get",
        url: `https://swapi.dev/api/planets/?page=${pageNumber}`,
        responseType: "stream",
      })
        .then((data) => {
          const format = formatData(data);
          const storedCount = localStorage.getItem("totalPages");
          setPlanetsData(format);
          localStorage.setItem(pageNumber.toString(), JSON.stringify(format));
          if (storedCount) {
            setTotalPageNumber(Number(storedCount));
          } else {
            const totalPages = Math.ceil(data.data.count / 10);
            setTotalPageNumber(totalPages);
            localStorage.setItem("totalPages", totalPages.toString());
          }
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

  const handleSubmitForm = (data: PlanetValue, e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    const tmpData = [...planetsData];
    tmpData.splice(
      tmpData.findIndex((planet) => planet.url === data.url),
      1,
      data
    );
    setPlanetsData(tmpData);
    localStorage.setItem(pageNumber.toString(), JSON.stringify(tmpData));
  };

  return (
    <PageLayout title="Star wars - Planets">
      <TitleSection>
        <Title>star wars planets</Title>
        <SearchBar getSearchPlanets={handleSearchPlanets} />
      </TitleSection>
      <SearchSection>
        <p>number results for &quot;a&quot;</p>
        <button>clean results</button>
      </SearchSection>

      <PlanetsTable planets={planetsData} onEdit={handleSelectPlanet} />
      <Pagination totalNum={totalPageNumber} currentNum={pageNumber} getPageNumber={handleGetPageNumber} />
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <PlanetForm
            planetDetails={selectedPlanet}
            onSubmitForm={handleSubmitForm}
            onCloseModal={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
    </PageLayout>
  );
};

export default PlanetsPage;
