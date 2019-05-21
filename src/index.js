import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { restaurants } from "./fixtures";
import "antd/lib/rate/style/css";

ReactDOM.render(
  <App restaurants={restaurants} />,
  document.getElementById("root")
);
