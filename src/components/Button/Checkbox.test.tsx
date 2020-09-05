import React from "react";
import { shallow } from "enzyme";
import SquareButton from "./SquareButton";

describe("Test SquareButton", () => {
  it("should call mock function when button is clicked", () => {
    const mockFn = jest.fn();
    const button = shallow(<SquareButton onClick={mockFn}>test</SquareButton>);
    button.simulate("click");
    expect(mockFn).toHaveBeenCalled();
  });
});
