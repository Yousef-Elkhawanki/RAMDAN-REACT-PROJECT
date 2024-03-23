import React, { Fragment } from "react";
import { useContext } from "react";
import { TranslateContext } from "../../utils/TranslateContext";

const ChangeLang = () => {
  const { handleChangeLan, ArLang } = useContext(TranslateContext);
  return (
    <Fragment>
      <div className="lang_btn">
        <button className={`lang ${ArLang ? "deactive" : ""}`} onClick={() => handleChangeLan("ar")}>
          AR
        </button>
        <button className={`lang ${ArLang ? "" : "deactive"}`} onClick={() => handleChangeLan("en")}>
          EN
        </button>
      </div>
    </Fragment>
  );
};

export default ChangeLang;
