import React from "react";
import { shallow } from "enzyme";

import { App } from "./App";

describe("App", () => {
  const app = shallow(<App />);

  it("renders properly", () => {
    expect(app).toMatchSnapshot();
  });

  it("contaisn a connected Wallet component", () => {
    expect(app.find("Connect(WalletComponent)").exists()).toBe(true);
  });
});
