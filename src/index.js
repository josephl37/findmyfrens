import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import promise from "redux-promise"
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const toolStore = createStore(
    reducers, 
    composeWithDevTools(applyMiddleware(thunk, promise))
  )

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={toolStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
