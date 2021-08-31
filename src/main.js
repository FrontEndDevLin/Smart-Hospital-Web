import React from "react";
import ReactDom from "react-dom";

import "antd/dist/antd.css";
import "./layout/common.less";

import { BaseRouter } from "./router/index";

ReactDom.render(
  <BaseRouter />,
  document.getElementById("app")
);