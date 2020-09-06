import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("Test App is rendered", () => {
  it("should be rendered", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });
});
