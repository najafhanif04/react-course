import React from "react";
import { useSelector } from "react-redux";

const Prod = () => {
  const selector = useSelector((state) => state.cart.product);

  return (
    <div>
      {selector.map(({ image, price }, index) => (
        <div key={index}>
          <img src={`${image}`} className="w-40" alt="" />
          <p>price {price}</p>
          <button
            onClick={() => handleCart(image, price)}
            className="bg-black text-white"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Prod;
