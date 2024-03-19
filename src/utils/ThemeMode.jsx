import { createContext, useState } from "react";

const ThemeModeContext = createContext();

function ThemeModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  return <ThemeModeContext.Provider value={{ setDarkMode, darkMode }}>{children}</ThemeModeContext.Provider>;
}
export { ThemeModeContext, ThemeModeProvider };
