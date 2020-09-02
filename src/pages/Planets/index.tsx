import React, { useState, useEffect } from "react";
import axios from "axios";
// components
import {
  PageLayout,
  SearchBar,
  PlanetsTable,
  Pagination,
  Modal,
  PlanetForm,
  PopUpMsg,
  Spinner,
} from "../../components/index";
import { TitleSection, Title, SearchSection, CleanBtn } from "./styled";
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
  const [isSearchResults, setIsSearchResults] = useState<boolean>(false);
  const [searchItem, setSearchItem] = useState<string>("");
  const [resultsCount, setResultsCount] = useState<number>(0);
  const [errMsg, setErrMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const storedData = localStorage.getItem(pageNumber.toString());
    if (isSearchResults) {
      handleSearchData();
    } else {
      if (storedData) {
        setPlanetsData(JSON.parse(storedData));
        setTotalPageNumber(Number(localStorage.getItem("totalPages")));
      } else handleLoadData();
    }
    // eslint-disable-next-line
  }, [pageNumber]);

  const handleLoadData = () => {
    setIsLoading(true);
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
        setIsLoading(false);
      })
      .catch((err) => {
        setErrMsg(err.message);
        setIsLoading(false);
      });
  };

  const handleSearchData = () => {
    setIsLoading(true);
    axios({
      method: "get",
      url: `https://swapi.dev/api/planets/?search=${searchItem}&page=${pageNumber}`,
      responseType: "stream",
    })
      .then((data) => {
        setPlanetsData(formatData(data));
        setIsLoading(false);
      })
      .catch((err) => {
        setErrMsg(err.message);
        setIsLoading(false);
      });
  };

  const handleGetPageNumber = (num: number) => {
    setPageNumber(num);
  };

  const handleSearchPlanets = (data: PlanetValue[], totalResults: number, searchValue: string) => {
    setPlanetsData(data);
    setIsSearchResults(true);
    setResultsCount(totalResults);
    setTotalPageNumber(Math.ceil(totalResults / 10));
    setSearchItem(searchValue);
    setPageNumber(1);
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

  const handleCleanSearchResults = () => {
    handleLoadData();
    setIsSearchResults(false);
    setSearchItem("");
    setPageNumber(1);
  };

  return (
    <PageLayout title="Star wars - Planets">
      <TitleSection>
        <Title>star wars planets</Title>
        <SearchBar getSearchPlanets={handleSearchPlanets} />
      </TitleSection>
      {isSearchResults && (
        <SearchSection>
          <p>{`${resultsCount} results for "${searchItem}"`}</p>
          <CleanBtn onClick={handleCleanSearchResults}>clean results</CleanBtn>
        </SearchSection>
      )}
      {(!isSearchResults || resultsCount > 0) && <PlanetsTable planets={planetsData} onEdit={handleSelectPlanet} />}
      {totalPageNumber > 1 && (
        <Pagination totalNum={totalPageNumber} currentNum={pageNumber} getPageNumber={handleGetPageNumber} />
      )}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <PlanetForm
            planetDetails={selectedPlanet}
            onSubmitForm={handleSubmitForm}
            onCloseModal={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
      {isLoading && <Spinner />}
      {errMsg !== "" && <PopUpMsg message={errMsg} onClose={() => setErrMsg("")} />}
    </PageLayout>
  );
};

export default PlanetsPage;
