import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

const basePath = "library-bntu";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={basePath}>
    <App />
  </BrowserRouter>
);
