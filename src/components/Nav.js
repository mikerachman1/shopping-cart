import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h3>📦 Shipper-Shopper 🛒</h3>
      <ul className="nav-links">
        <Link to="/">
          <li className="nav-link">About</li>
        </Link>
        <Link to="/shop">
          <li className="nav-link">Shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;