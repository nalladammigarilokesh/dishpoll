import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Provider from "./components/context/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider>
      <App />
    </Provider>
  </Router>
);
