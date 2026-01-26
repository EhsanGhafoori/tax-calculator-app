import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem, updateQuantity } from '../store/CartSlice';
import './CartItem.css';

const CartItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);

  const calculateTotalCost = (item) => {
    const unitPrice = parseFloat(item.cost.substring(1));
    return (unitPrice * item.quantity).toFixed(2);
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      const unitPrice = parseFloat(item.cost.substring(1));
      return total + (unitPrice * item.quantity);
    }, 0).toFixed(2);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    navigate('/plants');
  };

  const handleCheckoutShopping = (e) => {
    e.preventDefault();
    alert('Coming Soon! Checkout functionality will be available soon.');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (itemName) => {
    dispatch(removeItem(itemName));
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Start adding some beautiful plants to your cart!</p>
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p>{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item-card">
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="unit-price">Unit Price: {item.cost}</p>
                <p className="item-subtotal">Subtotal: ${calculateTotalCost(item)}</p>
              </div>
              <div className="cart-item-controls">
                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => handleDecrement(item)}
                  >
                    −
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => handleRemove(item.name)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-card">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Total Items:</span>
              <span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
            </div>
            <div className="summary-row total">
              <span>Total Amount:</span>
              <span>${calculateTotalAmount()}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckoutShopping}>
              Checkout
            </button>
            <button className="continue-shopping-btn" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
