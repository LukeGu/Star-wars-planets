import React from "react";
import { shallow } from "enzyme";
import Checkbox from "./Checkbox";

describe("Test Checkbox", () => {
  const mockFn = jest.fn();
  it("should be true when checkbox is checked", () => {
    const wrapper = shallow(<Checkbox checked={true} value="test" name="test" onChange={mockFn} />);
    expect(wrapper.find("FunctionalCheckbox").props().checked).toBeTruthy();
  });
  it("should be false when checkbox isn't checked", () => {
    const wrapper = shallow(<Checkbox checked={false} value="test" name="test" onChange={mockFn} />);
    expect(wrapper.find("FunctionalCheckbox").props().checked).toBeFalsy();
  });
  it("should call mock function when checkbox is clicked", () => {
    const wrapper = shallow(<Checkbox checked={true} value="test" name="test" onChange={mockFn} />);
    wrapper.find("FunctionalCheckbox").simulate("change");
    expect(mockFn).toHaveBeenCalled();
  });
});
