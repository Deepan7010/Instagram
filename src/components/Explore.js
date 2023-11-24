import React from "react";
// import video from "../video/video1.mp4";
import "../style/explore.css";

const Explore = () => {
  const video = [
    "https://www.youtube.com/embed/XTMsM5fstjo?rel=0&cc_load_policy=1&iv_load_policy=3",
    "https://www.youtube.com/embed/uwkth387wE8?rel=0&cc_load_policy=1&iv_load_policy=3",
    "https://www.youtube.com/embed/GYEW2hxEPNw?rel=0&cc_load_policy=1&iv_load_policy=3",
    "https://www.youtube.com/embed/eEiLCj1oi7c?rel=0&cc_load_policy=1&iv_load_policy=3",
    "https://www.youtube.com/embed/Qrz_1YOkGrg?rel=0&cc_load_policy=1&iv_load_policy=3",
    "https://www.youtube.com/embed/XbT-g4PAX88?rel=0&cc_load_policy=1&iv_load_policy=3",
    "https://www.youtube.com/embed/rNxXtQbS1jY?rel=0&cc_load_policy=1&iv_load_policy=3",
    "https://www.youtube.com/embed/CGTdBxiIv1U?rel=0&cc_load_policy=1&iv_load_policy=3",
    "https://www.youtube.com/embed/f0gMDaYKI4o?rel=0&cc_load_policy=1&iv_load_policy=3",
    "https://www.youtube.com/embed/1RYceRgGfK0?rel=0&cc_load_policy=1&iv_load_policy=3",
  ];
  return (
    <div className="explore">
      <div className="explore-content">
        {video.map((item, index) => (
          <iframe
            key={index}
            src={item}
            className="explore-element"
            width="310"
            height="300"
            title="status"
            frameborder="0"
            allowfullscreen
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default Explore;
