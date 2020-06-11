import { SET_BALANCE, DEPOSIT, WITHDRAW } from "./constants";

export const setBalance = (balance) => {
  return { type: SET_BALANCE, payload: balance };
};

export const deposit = (depositAmount) => {
  return { type: DEPOSIT, payload: depositAmount };
};

export const withdraw = (withdrawnAmount) => {
  return { type: WITHDRAW, payload: withdrawnAmount };
};
