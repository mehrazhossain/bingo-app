import React, { useEffect, useState } from 'react';
import Cart from '../Cart.js/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // handle add to cart button
  const [cart, setCart] = useState([]);
  const handleAddToCart = (name) => {
    setCart([...cart, name]);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            id={product.id}
            name={product.name}
            price={product.price}
            img={product.img}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
