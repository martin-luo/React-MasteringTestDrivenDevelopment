import { combineReducers } from "redux";

import { balanceReducer as balance } from "./balance";
import { bitcoinReducer as bitcoin } from "./bitcoin";

export const reducer = combineReducers({ balance, bitcoin });
