import React, { useContext } from "react";
import Card from "./components/card/Card";
import Mode from "./components/mode/Mode";
import { ThemeModeContext } from "./utils/ThemeMode";

const App = () => {
  const { darkMode, setDarkMode } = useContext(ThemeModeContext);
  return (
    <div className={`theme--mode ${darkMode ? "dark" : ""}`}>
      <Mode setDarkMode={setDarkMode} darkMode={darkMode} />
      <Card />
    </div>
  );
};

export default App;
