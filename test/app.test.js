import React from "react";
import { shallow } from "enzyme";

import App from "../src/app";
import Multiples from "../src/containers/Multiples";

describe("app", function() {
  it("should render Multiples", function() {
    const component = shallow(<App />);

    expect(component.find(Multiples)).toHaveLength(1);
  });
});
