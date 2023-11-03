import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "../components/navbar";

const Home = () => {
  // function App (){
  const [items, setItems] = useState([
    // {
    //   id: 1,
    //   name: "Product 1",
    //   price: 10.99,
    //   image: "",
    // },
    // { id: 2, name: "Product 2", price: 19.99 },
    // { id: 3, name: "Product 3", price: 14.99 },
  ]);

  const url = `${import.meta.env.VITE_REMOTE_API_URL}`;

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  useEffect(() => {
    (async function () {
      let result = await fetch(`${url}/products`);
      // console.log(result)
      const data = await result.json();
      console.log(data);
      setItems(data);
    })(); // simulate loading for 1 second

    return () => {
      console.log("cleaning up");
    };
  }, [url]);

  return (
    <div className="App">
      <Navbar />
      <div className="product-list">
        <h2>Products</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <h4>{item.name}</h4>
              <b>${item.price}</b>
              <img src={item.image} alt="" />
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
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
    </div>
  );
};

export default Home;
