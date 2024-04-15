import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <span>
        &copy;{`${date.getFullYear()}`}
        <Link target="_blank" to={"https://www.youtube.com/channel/UCCxzov-Vf4YvDdnDrjsMtAw"}>
          Joe Programming .
        </Link>
        All Reversed.
      </span>
    </footer>
  );
};

export default Footer;
