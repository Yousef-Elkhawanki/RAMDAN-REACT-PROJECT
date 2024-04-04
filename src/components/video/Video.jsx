import React from "react";

const Video = () => {
  return (
    <section className="video" style={{ background: "linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), url(public/assets/images/Hero-Banner.jpg) ", backgroundSize: "cover" }}>
      <div className="play">
        <span>play</span>
      </div>
    </section>
  );
};

export default Video;
