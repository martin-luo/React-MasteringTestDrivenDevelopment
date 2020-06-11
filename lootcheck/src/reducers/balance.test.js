import { balanceReducer } from "./balance";
import { SET_BALANCE, DEPOSIT, WITHDRAWN } from "../actions/constants";

describe("balanceReducer", () => {
  it("sets a balance", () => {
    const balance = 10;

    expect(
      balanceReducer(undefined, { type: SET_BALANCE, payload: balance })
    ).toEqual(balance);
  });

  it("deposits into the balance", () => {
    const depositAmount = 20;
    const initialBalance = 10;

    expect(
      balanceReducer(initialBalance, { type: DEPOSIT, payload: depositAmount })
    ).toEqual(depositAmount + initialBalance);
  });

  it("withdrawn from the balance", () => {
    const withdrawnAmount = 10;
    const initialBalance = 20;

    expect(
      balanceReducer(initialBalance, {
        type: WITHDRAWN,
        payload: withdrawnAmount,
      })
    ).toEqual(Math.max(initialBalance - withdrawnAmount, 0));
  });
});
