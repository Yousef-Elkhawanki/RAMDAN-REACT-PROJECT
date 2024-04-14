import React from "react";

const ItemCart = () => {
  return (
    <div className="itemCart">
      <div className="itemCart--image">
        <img src="./assets/images/Hero-Banner.jpg" alt="cart--product" />
      </div>
      <div className="itemCart--description">
        <h5>Pork Chop with Apple Chutney</h5>
        <span>150 EG</span>
        <div className="itemCat--footer">
          <div className="itemCart--option">
            <span>4 Pieces</span>
            <span>Spicy Sauce</span>
          </div>
          <div className="itemCart--btns">
            <span>-</span>
            <input type="text" name="" id="" value={1} />
            <span>+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
