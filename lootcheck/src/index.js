import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers";

import { App } from "./components/App";

render(
  <Provider store={createStore(reducer)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
