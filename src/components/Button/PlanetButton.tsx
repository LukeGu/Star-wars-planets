import React from "react";
import styled from "styled-components";
//assets
import planetImg from "../../assets/planet.gif";

const Wrapper = styled.div`
  height: 15rem;
  width: 15rem;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  margin: 5rem auto;
`;

const PlanetImg = styled.img`
  height: 150%;
  margin-left: -7rem;
  margin-top: -3rem;
`;

PlanetImg.displayName = "PlanetImg";

const Text = styled.p`
  position: absolute;
  top: 6rem;
  left: 2rem;
  font-size: 1.5rem;
  color: #fff;
  font-weight: 600;
`;

const PlanetButton = () => (
  <Wrapper>
    <PlanetImg alt="planet" src={planetImg} />
    <Text>Click me to enter</Text>
  </Wrapper>
);

export default PlanetButton;
