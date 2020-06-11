import { balanceReducer } from "./balance";
import { SET_BALANCE } from "../actions/constants";

describe("balanceReducer", () => {
  it("sets a balance", () => {
    const balance = 10;

    expect(
      balanceReducer(undefined, { type: SET_BALANCE, payload: balance })
    ).toEqual(balance);
  });
});
