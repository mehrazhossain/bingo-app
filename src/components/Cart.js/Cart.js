import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleChooseAgain }) => {
  // handle choose 1 for me
  const handleChoose1ForMe = () => {
    var num = Math.floor(Math.random() * 3) + 1;
    alert(cart.at(num));
  };

  return (
    <div className="cart">
      <h3>Selected Gadgets</h3>
      <div className="selected-item">
        {cart.map((name) => (
          <p>{name}</p>
        ))}
      </div>
      <button onClick={handleChoose1ForMe} className="btn1">
        CHOOSE 1 FOR ME
      </button>
      <br />
      <button onClick={handleChooseAgain} className="btn2">
        CHOOSE AGAIN
      </button>
    </div>
  );
};

export default Cart;
