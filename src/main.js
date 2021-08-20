import React from "react";
import ReactDom from "react-dom";

import 'antd/dist/antd.css';
import "./app.css";

import Router from "./router";

ReactDom.render(
  <Router />,
  document.getElementById("app")
);