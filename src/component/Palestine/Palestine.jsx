import React from "react";
import { useTranslation } from "react-i18next";

const Palestine = () => {
  const { t } = useTranslation("global");
  return (
    <div>
      <img src="public/images/Palestine.png" alt="" />
      <h1>{t("text.palestine")}</h1>
    </div>
  );
};

export default Palestine;
