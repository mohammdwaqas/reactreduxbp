import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";

function handleIncrement() {
  store.dispatch({ type: "INCREMENT" });
}

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
