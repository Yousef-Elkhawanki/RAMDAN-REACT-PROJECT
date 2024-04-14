import React from "react";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Card = ({ productData }) => {
  return (
    <div className="card">
      {productData?.feature && (
        <div className="newBadge">
          <span>New</span>
        </div>
      )}

      {/* <div className="whishList">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div> */}
      <div className="image">
        <img src={"http://localhost:1337" + productData?.image?.data?.attributes?.url} alt={productData?.slug} loading="lazy" />
      </div>
      <div className="card--price">
        <div className="price">
          <span>
            {productData?.price} {productData?.price_formatting}
          </span>
        </div>
        {productData?.rate && (
          <div className="rate">
            <FaStar />
            <span>{productData?.rate}</span>
          </div>
        )}
      </div>
      <div className="card--title">
        <Link to={`/shop/${productData?.slug}`}>{productData?.name}</Link>
      </div>
      <div className="card--option">
        {productData?.pieces && (
          <div className="option">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#D62828" />
              <path
                d="M8.39644 13.3107L5.14644 10.0607C4.95119 9.86541 4.95119 9.54883 5.14644 9.35355L5.85353 8.64644C6.04879 8.45117 6.36539 8.45117 6.56064 8.64644L8.75 10.8358L13.4394 6.14644C13.6346 5.95119 13.9512 5.95119 14.1465 6.14644L14.8536 6.85355C15.0488 7.0488 15.0488 7.36539 14.8536 7.56066L9.10355 13.3107C8.90828 13.5059 8.5917 13.5059 8.39644 13.3107Z"
                fill="#D62828"
              />
            </svg>
            <span>{productData?.pieces} Pieces</span>
          </div>
        )}
        {productData?.type && (
          <div className="option">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#D62828" />
              <path
                d="M8.39644 13.3107L5.14644 10.0607C4.95119 9.86541 4.95119 9.54883 5.14644 9.35355L5.85353 8.64644C6.04879 8.45117 6.36539 8.45117 6.56064 8.64644L8.75 10.8358L13.4394 6.14644C13.6346 5.95119 13.9512 5.95119 14.1465 6.14644L14.8536 6.85355C15.0488 7.0488 15.0488 7.36539 14.8536 7.56066L9.10355 13.3107C8.90828 13.5059 8.5917 13.5059 8.39644 13.3107Z"
                fill="#D62828"
              />
            </svg>
            <span>{productData?.type}</span>
          </div>
        )}
      </div>
      <div className="card--btn">
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Card;
