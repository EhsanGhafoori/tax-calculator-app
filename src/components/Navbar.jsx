import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Paradise Nursery
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/plants" className="navbar-link">Plants</Link>
          </li>
          <li>
            <Link to="/cart" className="navbar-link cart-link">
              🛒 Cart
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
