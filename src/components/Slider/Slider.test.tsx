import React from "react";
import { shallow } from "enzyme";
import Slider from "./index";

describe("Test slider input", () => {
  it("should call mock function when slider is slided", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Slider name="test" value="test" min="0" max="100" onChange={mockFn} />);
    wrapper.find("Range").simulate("change");
    expect(mockFn).toHaveBeenCalled();
  });
});
