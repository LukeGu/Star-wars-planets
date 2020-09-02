import React from "react";
import styled from "styled-components";
//Assets
import logoImg from "../../assets/vader.jpg";

const Wrapper = styled.footer`
  width: 100%;
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  background-image: url(${logoImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  opacity: 0.8;
`;

const Text = styled.p`
  color: #cccccc;
  text-transform: uppercase;
`;

const Footer = () => (
  <Wrapper>
    <Text>Luke</Text>
    <Text>© {new Date().getFullYear()}</Text>
  </Wrapper>
);

export default Footer;
