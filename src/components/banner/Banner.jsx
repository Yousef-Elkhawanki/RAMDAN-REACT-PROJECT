import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="hero-banner">
      <div className="hero--content">
        <div className="content">
          <h2>Crafting your Exceptional Dining Reservations</h2>
          <p>Reservation is a step into a world of gastronomic wonder. Reserve your table today and let us paint your culinary dreams into reality.</p>
        </div>
        <div className="btn">
          <Link to={""}>Explore Products</Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
