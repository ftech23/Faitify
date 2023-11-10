import React from "react";

const CartContainer = ({ product }) => {
  const { img, title } = product;
  return (
    <div>
      <div className="card">
        <h2>{title} </h2>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default CartContainer;
