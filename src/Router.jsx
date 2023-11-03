// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Navbar from "./components/navbar";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
