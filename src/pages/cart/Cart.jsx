import React from "react";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import Empty from "../../components/empty/Empty";
import ItemCart from "../../components/itemCart/ItemCart";
import CartPay from "../../components/cartPay/CartPay";

const Cart = () => {
  return (
    <main className="cart">
      <BreadCrumbs />
      {/* <Empty text={"Your cart is currently empty."} /> */}
      <div className="cart--items--container">
        <div className="cart--items">
          <h4>3 Items In Cart</h4>
          <ItemCart />
          <ItemCart />
          <ItemCart />
        </div>
        <div className="cart--total">
          <CartPay />
        </div>
      </div>
    </main>
  );
};

export default Cart;
