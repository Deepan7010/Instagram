import React from "react";
import img from "../style/img.jpg";
import img2 from "../style/img2.jpg";
import img3 from "../style/img3.jpg";
import img4 from "../style/img4.jpg";
import img5 from "../style/img5.jpg";
import { BsThreeDots } from "react-icons/bs";

const Suggestions = () => {
  const count = [{
    id:1,
    pic:img4,
    name:"John Doe",
    sub:"shadow_videos"
  },{
    id:2,
    pic:img2,
    name:"Jane Smith",
    sub:"smith_mass"
  },
  {
    id:3,
    pic:img3,
    name:"priya",
    sub:"creazy_girl"
  }
];
  return (
    <div className="content-sug">
      <div className="sugg">
        <img
          src={img5}
          className="rounded-circle my-2 ms-1 me-2 cc"
          style={{
            height: "40px",
            width: "40px",
            objectFit: "cover",
            objectPosition: "top",
          }}
          alt="..."
        />
        <div className="title">
          {" "}
          <p className="cc">Shadow </p>
          <p className="sub-title  fw-medium" style={{ color: "#828283" }}>
            Stãtūs_søñg
          </p>
        </div>
        <div className="button">
          <p className="text-end cc">
            <a href="#">Switch</a>
          </p>
        </div>
      </div>
      <div className="sugg">
        <p>Suggested for you</p>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <p className="text-end cc">
            <a href="#" style={{ color: "white" }}>
              See All
            </a>
          </p>
        </div>
      </div>
      <div>
        {count.map((item,index) => (
          <div className="sug" key={index}>
            <img
              src={item.pic}
              className="rounded-circle my-2 ms-1 me-2 cc"
              style={{
                height: "40px",
                width: "40px",
                objectFit: "cover",
                objectPosition: "top",
              }}
              alt="..."
            />
            <div className="title px-2">
              {" "}
              <p className="cc">{item.name}</p>
              <p className="sub-title  fw-medium" style={{ color: "#828283" }}>
              Follow you
              </p>
            </div>
            <div className="button">
              <p className="text-end cc">
                <a href="#">Follow</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
