import { reducer } from "./index";

describe("rootReducer", () => {
  it("initializes the default state", () => {
    expect(reducer({}, {})).toEqual({ balance: 0, bitcoin: {} });
  });
});
