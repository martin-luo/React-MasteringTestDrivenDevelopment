import { SET_BALANCE, DEPOSIT, WITHDRAW } from "../actions/constants";
import { read_cookie, bake_cookie } from "sfcookies";

const BALANCE_COOKIE = "BALANCE_COOKIE";

export const balanceReducer = (state = 0, action) => {
  let balance;

  switch (action.type) {
    case SET_BALANCE:
      balance = action.payload;
      break;
    case DEPOSIT:
      balance = action.payload + state;
      break;
    case WITHDRAW:
      balance = state - action.payload;
      break;
    default:
      balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
  }

  bake_cookie(BALANCE_COOKIE, balance);

  return balance;
};
