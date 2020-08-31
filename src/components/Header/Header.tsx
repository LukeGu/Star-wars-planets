import React from "react";
import styled from "styled-components";
//Assets
import logoImg from "../../assets/sw_logo.png";

const Wrapper = styled.div`
  width: calc(100% - 2rem);
  height: 5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  height: 100%;
`;

const Logo = styled.img`
  height: 100%;
  width: auto;
`;

const Header = () => (
  <Wrapper>
    <Link href="/">
      <Logo alt="star wars logo" src={logoImg} />
    </Link>
  </Wrapper>
);

export default Header;
