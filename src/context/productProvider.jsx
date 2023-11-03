import React, { useState, useEffect } from 'react';
import { SearchProvider } from "./productcntxt";

const ProductProvider = (props) => {
  const url = "https://fakestoreapi.com/products/";
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setSearchData(data));
  }, []);

  function searchHandler(searchValue) {
    const trimmed = searchValue.trim();
    if (trimmed) {
      const matched = searchData.filter(product =>
        product.title.toLowerCase().includes(trimmed.toLowerCase())
      );
      setSearchData(matched);
    } else {
      setSearchData([]);
    }
  }

  let myvalue = {
    searchData,
    searchHandler,
  };

  return (
    <div>
      <SearchProvider.Provider value={myvalue}>
        {props.children}
      </SearchProvider.Provider>
    </div>
  );
}

export default ProductProvider;