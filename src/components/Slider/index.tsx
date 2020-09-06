import React from "react";
import styled from "styled-components";

type RangeProps = {
  percent: number;
};

const Wrapper = styled.div`
  width: 50%;
  @media screen and (max-width: 35rem) {
    width: 100%;
  }
`;

const Range = styled.input.attrs({ type: "range" })<RangeProps>`
  -webkit-appearance: none;
  width: 100%;
  height: 0.6rem;
  background: ${(props) =>
    `linear-gradient(to right, lawngreen ${props.percent * 100}%, transparent ${props.percent * 100}%)`};
  outline: none;
  border: 0.2rem solid lawngreen;
  border-radius: 8px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1rem;
    height: 1.6rem;
    background-color: lawngreen;
    cursor: pointer;
    border: 0.2rem solid lawngreen;
    border-radius: 4px;
  }
`;
Range.displayName = "Range";

const InfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextInput = styled.input.attrs({ type: "text" })`
  display: inline-block;
  width: 6.2rem;
  font-size: 1.1rem;
  background: transparent;
  color: #fff;
  padding: 0.2rem;
  border: none;
  text-align: right;
  border-bottom: 1px solid;
  cursor: pointer;
`;

const Slider = (props: {
  value: string;
  min: string;
  max: string;
  name: string;
  onChange: (e: React.ChangeEvent) => void;
}) => {
  return (
    <Wrapper>
      <Range
        name={props.name}
        min={props.min}
        max={props.max}
        value={props.value}
        percent={Number(props.value) / Number(props.max)}
        onChange={props.onChange}
      />
      <InfoBox>
        <p>{props.min}</p>
        <div>
          <TextInput value={props.value} />/ {props.max}
        </div>
      </InfoBox>
    </Wrapper>
  );
};

export default Slider;
