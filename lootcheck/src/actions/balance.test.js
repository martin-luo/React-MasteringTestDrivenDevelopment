import { SET_BALANCE, DEPOSIT, WITHDRAW } from "./constants";
import { setBalance, deposit, withdraw } from "./balance";

it("creates the action to set the balance", () => {
  const balance = 0;
  const expectedAction = { type: SET_BALANCE, payload: balance };

  expect(setBalance(balance)).toEqual(expectedAction);
});

it("creates the action to deposit into the balance", () => {
  const depositAmount = 20;
  const expectedAction = { type: DEPOSIT, payload: depositAmount };

  expect(deposit(depositAmount)).toEqual(expectedAction);
});

it("creates the action to withdraw from the balance", () => {
  const withdrawnAmount = 20;
  const expectedAction = { type: WITHDRAW, payload: withdrawnAmount };

  expect(withdraw(withdrawnAmount)).toEqual(expectedAction);
});
