import React, { Fragment, useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import { MobileHandlerProvider } from "./utils/mobileHandler";
import WishList from "./pages/wishList/WishList";
import Error from "./pages/error/Error";
import ProductDetails from "./pages/productDetails/ProductDetails";
import { useSelector } from "react-redux";
import LoadingPage from "./components/loader/LoadingPage";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const Routing = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        {
          path: "/shop",
          element: <Shop />,
        },
        { path: "/shop/:slug", element: <ProductDetails /> },
        { path: "/contact", element: <Contact /> },
        { path: "/wishList", element: <WishList /> },
        { path: "/cart", element: <Cart /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <Fragment>
      <MobileHandlerProvider>{isLoading ? <LoadingPage /> : <RouterProvider router={Routing} />}</MobileHandlerProvider>
    </Fragment>
  );
};

export default App;
