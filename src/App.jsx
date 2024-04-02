import React, { Fragment, useContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import WhishList from "./pages/whishList/WhishList";
import Cart from "./pages/cart/Cart";
import { MobileHandlerProvider } from "./utils/mobileHandler";

const App = () => {
  const Routing = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/shop", element: <Shop /> },
        { path: "/contact", element: <Contact /> },
        { path: "/whishList", element: <WhishList /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);

  return (
    <Fragment>
      <MobileHandlerProvider>
        <RouterProvider router={Routing} />
      </MobileHandlerProvider>
    </Fragment>
  );
};

export default App;
