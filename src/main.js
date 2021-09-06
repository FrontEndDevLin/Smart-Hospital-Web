import React from "react";
import ReactDom from "react-dom";

import "antd/dist/antd.css";
import "./layout/common.less";

import { BaseRouter } from "./router/index";

import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";

ReactDom.render(
  <ConfigProvider locale={zhCN}>
    <BaseRouter />
  </ConfigProvider>,
  document.getElementById("app")
);
