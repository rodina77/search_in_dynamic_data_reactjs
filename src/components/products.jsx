import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { SearchProvider } from '../context/productcntxt';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { searchData } = useContext(SearchProvider);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []); 

  return (
    <div>
      <ul>
        {searchData.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;