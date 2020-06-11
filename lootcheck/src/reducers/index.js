import { combineReducers } from "redux";

import { balanceReducer as balance } from "./balance";

export const reducer = combineReducers({ balance });
