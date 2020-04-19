import React from "react";
import { shallow } from "enzyme";

import Cell from ".";

describe("Cell", () => {
  it("should call setSelectedNumber when clicked", () => {
    const setSelectedNumberSpy = jest.fn();

    const component = shallow(
      <Cell number={1} setSelectedNumber={setSelectedNumberSpy} />
    );

    component.find("div").simulate("click");
    expect(setSelectedNumberSpy).toHaveBeenCalledWith(1);
  });

  it("should set the correct className when cell is selected", () => {
    const component = shallow(<Cell number={1} isSelected />);

    expect(component.find("div").prop("className")).toBe("number-cell-selected")
  });

  it("should set the correct className when cell is a multiple", () => {
    const component = shallow(<Cell number={1} isMultiple />);

    expect(component.find("div").prop("className")).toBe("number-cell-multiple")
  });
});
