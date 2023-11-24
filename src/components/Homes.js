import React from "react";
import img from "../style/img.jpg";
import "../style/home.css";
import { Image } from "react-bootstrap";
import msg from "../style/icons/msg.png";
import { CiHeart } from "react-icons/ci";
import share from "../style/icons/share.png";
import save from "../style/icons/save.png";
import { BsThreeDots } from "react-icons/bs";
import sam1 from "../style/icons/sample.jpg";
import sam2 from "../style/icons/sample 2.jpg";
import Status from "./Status";
import Suggestions from "./Suggestions";

const Homes = () => {
  const pic = [img, sam1, sam2];
  return (
    <>
      <div className="content">
        <Status />

        {/* content of image  */}
        {pic.map((item,index) => {
          return (
            <div className="content-img" key={index}>
              <div className="img">
                <div>
                  <img
                    src={item}
                    className="rounded-circle my-2 ms-1 me-2 cc"
                    height={"40px"}
                    width={"40px"}
                    alt="..."
                  />
                  <span className="fw-semibold cc">Shadow</span>
                  <span className="text-end cc" style={{ marginLeft: "210px" }}>
                    <BsThreeDots />
                  </span>
                </div>
                <Image
                  src={item}
                  className="border rounded border-dark border-2 w-75"
                  style={{objectFit:"contain"}}
                ></Image>
                <div>
                  <CiHeart className="fs-2 mt-2" />
                  <Image
                    src={msg}
                    style={{ backgroundColor: "white", borderRadius: "10px" }}
                    width={"30px"}
                    height={"30px"}
                    className="ms-3 mt-2"
                  />
                  <Image
                    src={share}
                    style={{ backgroundColor: "white", borderRadius: "10px" }}
                    width={"30px"}
                    height={"30px"}
                    className="ms-3 mt-2"
                  />
                  <span className="" style={{ marginLeft: "170px" }}>
                    <Image
                      src={save}
                      style={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        margin: "auto",
                      }}
                      width={"30px"}
                      height={"30px"}
                      className="ms-3"
                    />
                  </span>
                  <p className="mt-2">Liked by 5 people</p>
                  <p className="border border-dark"></p>
                </div>
              </div>
            </div>
          );
        })}
        {/* content end  */}
      </div>
      <Suggestions />
    </>
  );
};

export default Homes;
