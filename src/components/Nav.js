import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h3>📦 Shipper-Shopper 🛒</h3>
      <ul className="nav-links">
        <Link to="/about">
          <li name="About" className="nav-link">About</li>
        </Link>
        <Link to="/shop">
          <li name="Shop" data-testid='nav-shop-link' className="nav-link">Shop</li>
        </Link>
        <Link to="/cart">
          <li name="Cart" data-testid='nav-cart-link' className="nav-link">Cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;