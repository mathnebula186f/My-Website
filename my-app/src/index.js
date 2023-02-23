import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "../node_modules/font-awesome/css/font-awesome.min.css"; 
import "font-awesome/css/font-awesome.min.css";
import {BrowserRouter} from "react-router-dom"
import MainRouter from "./components/MainRouter";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
