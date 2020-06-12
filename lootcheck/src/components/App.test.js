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

  it("contains a connected Loot component", () => {
    expect(app.find("Connect(LootComponent)").exists()).toBe(true);
  });

  it("contains a link to the coindesk price page", () => {
    expect(app.find("a").props().href).toBe("https://www.coindesk.com/price");
  });
});
