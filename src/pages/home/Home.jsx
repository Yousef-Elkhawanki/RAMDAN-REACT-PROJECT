import React, { useEffect } from "react";
import Banner from "../../components/banner/Banner";
import MostSelling from "../../components/mostSelling/MostSelling";
import Video from "../../components/video/Video";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../reduxToolkit/slices/GetAllProducts";
import { Helmet } from "react-helmet";
const Home = () => {
  const { productData, isLoading, errors } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <title>Food | Home</title>
      </Helmet>
      <main>
        <Banner />
        <MostSelling productData={productData} />
        <Video />
      </main>
    </>
  );
};

export default Home;
