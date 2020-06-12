import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import "./index.css";

import { reducer } from "./reducers";
import { App } from "./components/App";

render(
  <Provider store={createStore(reducer, applyMiddleware(reduxThunk))}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
