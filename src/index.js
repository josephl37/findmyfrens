import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import promise from "redux-promise"
import { composeWithDevTools } from "redux-devtools-extension";


//TODO: set up applyMiddleware and reduxPromises
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const toolStore = createStoreWithMiddleware(reducers, composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={toolStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
