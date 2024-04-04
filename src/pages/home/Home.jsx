import React from "react";
import Banner from "../../components/banner/Banner";
import MostSelling from "../../components/mostSelling/MostSelling";
import Video from "../../components/video/Video";

const Home = () => {
  return (
    <main>
      <Banner />
      <MostSelling />
      <Video />
    </main>
  );
};

export default Home;
