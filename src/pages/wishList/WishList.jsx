import React from "react";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import Empty from "../../components/empty/Empty";

const WishList = () => {
  return (
    <main>
      <BreadCrumbs />
      <Empty text={"Your WhishList is currently empty."} />
    </main>
  );
};

export default WishList;
