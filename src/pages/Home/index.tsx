import React from "react";
import styled from "styled-components";
//components
import { PageLayout, LogoHeader, PlanetButton } from "../../components/index";

const PlanetsLink = styled.a``;

const HomePage = () => (
  <PageLayout title="Star wars - Home">
    <LogoHeader />
    <PlanetsLink href="/planets">
      <PlanetButton />
    </PlanetsLink>
  </PageLayout>
);

export default HomePage;
