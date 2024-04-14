import React from "react";

const CartPay = () => {
  return (
    <div className="cartPay">
      <div className="cartPat--title">
        <span>Total</span>
        <span>450 EG</span>
      </div>
      <div className="cartPat--title">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div className="line"></div>
      <div className="btn">
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default CartPay;
