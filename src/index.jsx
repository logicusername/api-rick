import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App";

const seleccion = document.getElementById("root");
const root = ReactDOM.createRoot(seleccion)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
