import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const TranslateContext = createContext();

function TranslateProvider({ children }) {
  const [ArLang, setArLang] = useState(false);
  const { i18n } = useTranslation("global");
  function handleChangeLan(lang) {
    setArLang(!ArLang);
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }
  useEffect(() => {
    if (localStorage.getItem("lang").includes("ar")) {
      setArLang(true);
    } else {
      setArLang(false);
    }
    i18n.changeLanguage(localStorage.getItem("lang"));
  }, []);
  return <TranslateContext.Provider value={{ handleChangeLan, setArLang, ArLang }}>{children}</TranslateContext.Provider>;
}

export { TranslateContext, TranslateProvider };
