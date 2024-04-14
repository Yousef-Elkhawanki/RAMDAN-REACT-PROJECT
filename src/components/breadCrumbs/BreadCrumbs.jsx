import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  return (
    <section className="breadCrumb">
      <div className="breadCrumb--text">
        <Link to={"/"}>Home</Link>
        <span className="page">
          {pathname.split("/")[2] !== undefined ? (
            <>
              - <Link to={`/${pathname.split("/")[1]}`}>{pathname.split("/")[1]}</Link> - {pathname.split("/")[2].replaceAll("-", " ")}
            </>
          ) : (
            pathname.replaceAll("/", "-")
          )}
        </span>
      </div>
    </section>
  );
};

export default BreadCrumbs;
