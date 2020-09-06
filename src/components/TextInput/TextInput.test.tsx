import React from "react";
import { shallow } from "enzyme";
import Input from "./index";

describe("Test text input", () => {
  it("should call mock function when button is clicked", () => {
    const mockFn = jest.fn();
    const event = {
      target: { value: "updated-value" },
    };
    const input = shallow(<Input name="test" value="test" onChange={mockFn} />);
    input.simulate("change", event);
    expect(mockFn).toHaveBeenCalled();
  });
});
