import { balanceReducer } from "./balance";
import { SET_BALANCE, DEPOSIT, WITHDRAW } from "../actions/constants";

describe("balanceReducer", () => {
  describe("when initializing", () => {
    it("sets a balance", () => {
      const balance = 10;

      expect(
        balanceReducer(undefined, { type: SET_BALANCE, payload: balance })
      ).toEqual(balance);
    });

    describe("then re-initializating", () => {
      it("reads the balance from cookies", () => {
        expect(balanceReducer(undefined, {})).toEqual(balance);
      });
    });
  });

  it("deposits into the balance", () => {
    const depositAmount = 20;
    const initialBalance = 10;

    expect(
      balanceReducer(initialBalance, { type: DEPOSIT, payload: depositAmount })
    ).toEqual(depositAmount + initialBalance);
  });

  it("withdraws from the balance", () => {
    const withdrawnAmount = 10;
    const initialBalance = 20;

    expect(
      balanceReducer(initialBalance, {
        type: WITHDRAW,
        payload: withdrawnAmount,
      })
    ).toEqual(initialBalance - withdrawnAmount);
  });
});
