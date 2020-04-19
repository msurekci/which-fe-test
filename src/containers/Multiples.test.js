import React, { useState } from "react";
import { shallow } from "enzyme";

import Multiples from "./Multiples";
import Cell from "../components/Cell";

describe("Multiples", () => {
  it("should render 144 cells", () => {
    const component = shallow(<Multiples />);

    expect(component.find(Cell)).toHaveLength(144);
  });

  it("should create Cell with the correct numbers", () => {
    const component = shallow(<Multiples />);

    expect(component.find(Cell).get(0).props.number).toBe(1);
    expect(component.find(Cell).get(143).props.number).toBe(144);
  });

  it("should set the selected cell as selected", () => {
    const component = shallow(<Multiples />);

    component.find(Cell).get(9).props.setSelectedNumber(10);

    expect(component.find(Cell).get(9).props.isSelected).toBe(true);
  });

  it("should set the selectedNumber to null if it is called with the existing number",  () => {
    const component = shallow(<Multiples />);

    component.find(Cell).first().prop("setSelectedNumber")(1);
    expect(component.find(Cell).first().prop("isSelected")).toBe(true);

    component.find(Cell).first().prop("setSelectedNumber")(1);
    expect(component.find(Cell).first().prop("isSelected")).toBe(false);
  });

  it("should set the multiples of the selected cell", () => {
    const component = shallow(<Multiples />);

    component.find(Cell).first().prop("setSelectedNumber")(10);

    expect(component.find(Cell).get(0).props.isMultiple).toBe(true);
    expect(component.find(Cell).get(1).props.isMultiple).toBe(true);
    expect(component.find(Cell).get(4).props.isMultiple).toBe(true);
  });
});
