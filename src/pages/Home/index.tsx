import React from "react";
//components
import { PageLayout, PlanetButton } from "../../components/index";

const HomePage = () => (
  <PageLayout title="Star wars - Home" isHome>
    <a href="/planets">
      <PlanetButton />
    </a>
  </PageLayout>
);

export default HomePage;
