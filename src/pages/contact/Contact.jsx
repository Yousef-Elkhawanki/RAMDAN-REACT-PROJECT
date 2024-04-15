import React from "react";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import HeadLines from "../../components/headLines/HeadLines";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Food | Contact us</title>
      </Helmet>
      <main>
        <BreadCrumbs />
        <HeadLines title={"Send Us Message"} subTitle={"Contact us"} />
      </main>
    </>
  );
};

export default Contact;
