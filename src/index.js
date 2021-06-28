import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { LocalContextProvider } from "./context/LocalContext";

ReactDOM.render(
  <LocalContextProvider>
    <App />
  </LocalContextProvider>,
  document.getElementById("root")
);
