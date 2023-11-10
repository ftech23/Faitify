import React from "react";
// import styles from "./Cart/Cart.module.css";
import { Database } from "../Card/Database";
import CartContainer from "../CartContainer/CartContainer";

const Cart = () => {
  return (
    <div className="general">
      <div className="dta">
        {Database &&
          Database.map((data) => {
            <CartContainer key={data.id} product={data} />;
          })}
      </div>
    </div>
  );
};

export default Cart;
