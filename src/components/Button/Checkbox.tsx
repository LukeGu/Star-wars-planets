import React from "react";
import styled from "styled-components";

type CheckboxProps = {
  checked: boolean;
};

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  /* clippath: inset(50%); */
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

HiddenCheckbox.displayName = "FunctionalCheckbox";

const StyledCheckbox = styled.div<CheckboxProps>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? "#9e4f60" : "#00c7ec")};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${(props) => (props.checked ? "pink" : "skyblue")};
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const Checkbox = (props: {
  checked: boolean;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent) => void;
}) => (
  <label>
    <CheckboxContainer>
      <HiddenCheckbox checked={props.checked} name={props.name} value={props.value} onChange={props.onChange} />
      <StyledCheckbox checked={props.checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
    <span style={{ marginLeft: 8, textTransform: "capitalize" }}>{props.value}</span>
  </label>
);

export default Checkbox;
