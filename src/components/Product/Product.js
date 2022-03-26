import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({ id, name, price, img, handleAddToCart }) => {
  return (
    <div className="product">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        <h4>{name}</h4>
        <p>Price ${price}</p>
        <button onClick={() => handleAddToCart(name)} className="btn-cart">
          ADD TO CART <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Product;
