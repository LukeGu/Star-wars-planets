import React from "react";
import { shallow } from "enzyme";
import PlanetButton from "./PlanetButton";
import planetImg from "../../assets/planet.gif";

describe("Test PlanetButton", () => {
  it("should renders an planet image", () => {
    const button = shallow(<PlanetButton />);
    expect(button.find("PlanetImg").prop("src")).toEqual(planetImg);
  });
});
