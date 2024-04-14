import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "swiper/css";
import "./App.scss";
import { Provider } from "react-redux";
import { Store } from "./reduxToolkit/store/store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store} >
    <App />
  </Provider>,
);
