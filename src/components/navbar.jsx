import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 1rem;
  position: relative;
  right: 0;
`;

const Navbar = () => {
  return (
    <header>
      <h1>Shopping Site</h1>
      <div className="navBar">
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/Cart">Cart</StyledLink>
        <StyledLink to="/Login">Login</StyledLink>
      </div>
    </header>
  );
};

export default Navbar;
