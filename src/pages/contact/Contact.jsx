import React from "react";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import HeadLines from "../../components/headLines/HeadLines";

const Contact = () => {
  return (
    <main>
      <BreadCrumbs />
      <HeadLines title={"Send Us Message"} subTitle={"Contact us"} />
    </main>
  );
};

export default Contact;
