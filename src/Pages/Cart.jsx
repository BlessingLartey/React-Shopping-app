import React, { useState } from "react";
import Navbar from "../components/navbar";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <>
      <Navbar />
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <h4>{item.name}</h4>
              <b>${item.price}</b>
              <img src={item.image} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cart;
