import React from "react";
import styled, { keyframes } from "styled-components";

type ButtonProps = {
  bgColor?: string;
  color?: string;
};

const shine = keyframes`
  from {
    opacity: 0;
    left: 0%;
  }
  50% {
    opacity: 1;
  }
  to {
    opacity: 0;
    left: 100%;
  }
`;

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.bgColor || "transparent"};
  color: ${(props) => props.color || "#00c7ec"};

  text-decoration: none;
  text-transform: uppercase;
  font-family: "Exo 2", sans-serif;
  font-weight: 300;
  font-size: 1rem;
  display: inline-block;
  position: relative;
  text-align: center;
  border: 1px solid #00c7ec;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  box-shadow: 0 0 0 0 transparent;
  transition: all 0.2s ease-in;
  &:hover {
    color: white;
    box-shadow: 0 0 30px 0 rgba(0, 199, 236, 0.5);
    background-color: #00c7ec;
    transition: all 0.2s ease-out;
    &:before {
      animation: ${shine} 0.5s 0s linear;
    }
  }
  &:active {
    box-shadow: 0 0 0 0 transparent;
    transition: box-shadow 0.2s ease-in;
  }
  &:before {
    content: "";
    display: block;
    width: 0px;
    height: 86%;
    position: absolute;
    top: 7%;
    left: 0%;
    opacity: 0;
    background: white;
    box-shadow: 0 0 15px 3px white;
    transform: skewX(-20deg);
  }
`;

const SquareButton = (props: {
  onClick?: () => void;
  children: React.ReactNode;
  color?: string;
  bgColor?: string;
  type?: "button" | "submit" | "reset" | undefined;
}) => (
  <StyledButton bgColor={props.bgColor} color={props.color} type={props.type} onClick={props.onClick}>
    {props.children}
  </StyledButton>
);

export default SquareButton;
