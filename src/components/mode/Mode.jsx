import React from "react";

const Mode = ({ setDarkMode, darkMode }) => {
  return (
    <div className="mode" onClick={() => setDarkMode(!darkMode)}>
      <div className={`mode--image ${darkMode ? "dark" : ""}`}></div>
    </div>
  );
};

export default Mode;
