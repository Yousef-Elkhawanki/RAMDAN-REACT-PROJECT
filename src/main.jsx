import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.scss";
import { ThemeModeProvider } from "./utils/ThemeMode";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeModeProvider>
    <App />
  </ThemeModeProvider>,
);
