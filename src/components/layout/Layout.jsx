import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import MobileMenu from "../mobileMenu/MobileMenu";

const Layout = () => {
  return (
    <Fragment>
      <MobileMenu />
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
