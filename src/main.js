import React from "react";
import ReactDom from "react-dom";

import "antd/dist/antd.css";
import "./app.css";

import { BaseRouter } from "./router/index";

ReactDom.render(
  <BaseRouter />,
  document.getElementById("app")
);