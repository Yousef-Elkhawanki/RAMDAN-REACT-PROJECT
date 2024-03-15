import React, { useEffect, useState } from "react";
import { Header } from "./components/header/Header";
import Card from "./components/card/Card";
import { axiosConfig } from "./assets/axios/axiosConfig";
import Pagination from "./components/pagination/Pagination";

const App = () => {
  const [products, setProducts] = useState([]);
  const [getLimit, setGetLimit] = useState(5);
  async function getAllProduct(limit) {
    const { data } = await axiosConfig({
      url: `/products?limit=${limit}`,
      method: "GET",
    });
    setProducts(data);
    console.log(data);
  }
  useEffect(() => {
    getAllProduct(getLimit);
  }, []);
  useEffect(() => {
    getAllProduct(getLimit);
  }, [getLimit]);
  return (
    <div className="app--container">
      <Header />
      <div className="pagination--header">
        <span>{products.length} Items</span>
        <Pagination setGetLimit={setGetLimit} getLimit={getLimit} />
      </div>
      <div className="card--container">
        {products.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default App;
