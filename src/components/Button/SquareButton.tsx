import React from "react";
import styled from "styled-components";

type ButtonProps = {
  bgColor?: string;
  color?: string;
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.bgColor || "#e1e1e1"};
  color: ${(props) => props.color || "#000"};
`;

const SquareButton = (props: { onClick?: () => void; children: React.ReactNode; color?: string; bgColor?: string }) => (
  <StyledButton bgColor={props.bgColor} color={props.color} onClick={props.onClick}>
    {props.children}
  </StyledButton>
);

export default SquareButton;
