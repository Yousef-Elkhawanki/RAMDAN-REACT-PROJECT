import React from "react";
import { FaStar } from "react-icons/fa";

const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.title} />
      <div className="card--description">
        <h3>{data.title.substring(0, 20)}...</h3>
        <p>{data.description.substring(0, 50)}....</p>
        <div className="card--footer">
          <span>{data.price} EG</span>
          <div className="card--rate">
            <FaStar />
            <span>{data.rating.rate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
