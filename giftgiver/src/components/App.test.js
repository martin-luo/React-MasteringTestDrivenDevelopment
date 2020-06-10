import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";

describe("App", () => {
  const app = shallow(<App />);

  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("initializes the `state` with the empty lists of gifts", () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe("when clicking the `add gift` button", () => {
    beforeEach(() => {
      app.find(".btn-add").simulate("click");
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it("adds a new gift to `state` when clicking the `add gift` button", () => {
      expect(app.state().gifts).toEqual([{ id: 1 }]);
    });

    it("adds a new gift to the rendered list when clicking the `add gift` button", () => {
      expect(app.find(".gift-list").children().length).toEqual(1);
    });
  });
});
