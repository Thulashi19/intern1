import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/About">About Us</Link>
    <Link to="/Shop">Shop</Link>
    <Link to="/Contact">Contact Us</Link>
  </nav>
);
export default Navbar;