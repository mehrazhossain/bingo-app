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

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            id={product.id}
            name={product.name}
            price={product.price}
            img={product.img}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Shop;
