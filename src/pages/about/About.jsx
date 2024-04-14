import React from "react";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import HeadLines from "../../components/headLines/HeadLines";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Food | About</title>
      </Helmet>
      <main className="about">
        <BreadCrumbs />
        <HeadLines title={"About Us"} subTitle={"our journey"} />
        <div className="about--content">
          <div className="about--image">
            <img src="/src/assets/images/about.jpg" alt="about" />
          </div>
          <div className="about--text">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolores laboriosam harum expedita! Consectetur, qui sit at recusandae maiores et tempora dolorum inventore consequatur
              voluptatum commodi! Deleniti deserunt, facilis maxime omnis quisquam amet? Omnis adipisci, reiciendis distinctio maxime, voluptas fugiat eligendi consectetur commodi suscipit ducimus
              animi odit? Voluptatem, perspiciatis deserunt.
            </p>
          </div>
        </div>
        <div className="about--content">
          <div className="about--image">
            <img src="/src/assets/images/about.jpg" alt="about" />
          </div>
          <div className="about--text">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolores laboriosam harum expedita! Consectetur, qui sit at recusandae maiores et tempora dolorum inventore consequatur
              voluptatum commodi! Deleniti deserunt, facilis maxime omnis quisquam amet? Omnis adipisci, reiciendis distinctio maxime, voluptas fugiat eligendi consectetur commodi suscipit ducimus
              animi odit? Voluptatem, perspiciatis deserunt.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
