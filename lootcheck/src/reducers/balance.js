import { SET_BALANCE, DEPOSIT, WITHDRAWN } from "../actions/constants";

export const balanceReducer = (state = 0, action) => {
  switch (action.type) {
    case SET_BALANCE:
      return action.payload;
    case DEPOSIT:
      return action.payload + state;
    case WITHDRAWN:
      return state - action.payload;
    default:
      return state;
  }
};
