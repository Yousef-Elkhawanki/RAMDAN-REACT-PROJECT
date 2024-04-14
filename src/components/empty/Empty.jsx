import React from "react";
import { Link } from "react-router-dom";

const Empty = ({ text }) => {
  return (
    <div className="empty">
      <div className="empty--text">
        <h2>{text}</h2>
        <div className="btn">
          <Link to={"/shop"}>Return To Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default Empty;
