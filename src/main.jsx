import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.scss";
import { IsMobileProvider } from "./utilis/IsMobileContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <IsMobileProvider>
    <App />
  </IsMobileProvider>,
  // </React.StrictMode>,
);
