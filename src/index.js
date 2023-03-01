import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import promise from "redux-promise"

//TODO: set up applyMiddleware and reduxPromises
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  </React.StrictMode>
);
