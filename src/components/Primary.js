import React from "react";
import img from "../style/img2.jpg";
import img2 from "../style/img.jpg";
import img3 from "../style/img3.jpg";
import img4 from "../style/img4.jpg";
import img5 from "../style/img5.jpg";
import img6 from "../style/img6.jpg";
import img7 from "../style/img7.jpg";

const Primary = () => {
  const pic = [
    img,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img3,
    img4,
    img5,
    img6,
    img7,
  ];
  return (
    <div className="msg-body">
      {pic.map((item, i) => (
        <div className="msg-bodys" key={i}>
          <img src={item} alt="fd" className="msg-img" />
          <div className="msg-title">
            <p className="msg-title-header">Shadow</p>
            <p className="msg-subtitle">active 5h ago</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Primary;
