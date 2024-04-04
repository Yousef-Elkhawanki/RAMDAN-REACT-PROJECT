import React from "react";

const HeadLines = ({ title, subTitle }) => {
  return (
    <div className="headlines">
      <p>{subTitle}</p>
      <h3>{title}</h3>
    </div>
  );
};

export default HeadLines;
