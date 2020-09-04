import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: flex;
  border-radius: 0.3rem;
  background-color: #343434;
  color: #fff;
  box-shadow: none;
  border: 0;
  width: 10rem;
  opacity: 0.7;
  height: 2.5rem;
  padding: 0 0.8rem;
  transition: opacity 350ms;
  @media screen and (max-width: 35rem) {
    font-size: 16px;
  }
`;

const TextInput = (props: {
  name: string;
  value: string;
  type?: string;
  maxLength?: number;
  onChange: (e: React.ChangeEvent) => void;
}) => (
  <StyledInput
    name={props.name}
    value={props.value}
    type={props.type}
    maxLength={props.maxLength}
    onChange={props.onChange}
  />
);

export default TextInput;
