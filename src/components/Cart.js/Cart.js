import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h3>Selected Gadgets</h3>
      <div className="selected-item">
        {cart.map((name) => (
          <p>{name}</p>
        ))}
      </div>

      <button className="btn1">CHOOSE 1 FOR ME</button>
      <br />
      <button className="btn2">CHOOSE AGAIN</button>
    </div>
  );
};

export default Cart;
