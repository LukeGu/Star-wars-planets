import React from "react";
import styled from "styled-components";

const StyledInput = styled.input.attrs({ type: "text" })`
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
`;

const TextInput = (props: {
  name: string;
  value: string;
  maxLength: number;
  onChange: (e: React.ChangeEvent) => void;
}) => <StyledInput name={props.name} value={props.value} maxLength={props.maxLength} onChange={props.onChange} />;

export default TextInput;
