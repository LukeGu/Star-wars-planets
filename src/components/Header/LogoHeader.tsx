import React from "react";
import styled from "styled-components";
//Assets
import logoImg from "../../assets/Star_Wars_Logo.svg";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  max-width: 50%;
  padding: 1rem;
`;

const LogoHeader = () => (
  <Wrapper>
    <Logo alt="star wars logo" src={logoImg} />
  </Wrapper>
);

export default LogoHeader;
