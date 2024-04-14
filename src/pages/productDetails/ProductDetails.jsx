import React, { useEffect } from "react";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import HeadLines from "../../components/headLines/HeadLines";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../reduxToolkit/slices/GetAllProducts";
import { Helmet } from "react-helmet";

const ProductDetails = () => {
  const { slug } = useParams();
  const { productDetails } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails(slug));
  }, [slug]);
  return (
    <>
      <Helmet>
        <title>Food | {`${productDetails?.data?.attributes?.name}`}</title>
      </Helmet>
      <main className="productDetails">
        <BreadCrumbs />
        <HeadLines title={productDetails?.data?.attributes?.name} />
        <div className="productDetails--container">
          <div className="productDetails--image">
            {/* <div className="whishList">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div> */}
            <img src={"http://localhost:1337" + productDetails?.data?.attributes?.image?.data?.attributes?.url} alt={productDetails?.data?.attributes?.slug} />
          </div>
          <div className="productDetails--content">
            <h4>{productDetails?.data?.attributes?.name}</h4>
            <p>{productDetails?.data?.attributes?.description}</p>
            <span>
              {productDetails?.data?.attributes?.price} {productDetails?.data?.attributes?.price_formatting}
            </span>
            <div className="card--btn">
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetails;
