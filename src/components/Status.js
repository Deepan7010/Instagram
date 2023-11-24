import React from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import img from "../style/img.jpg";
import img2 from "../style/img2.jpg";
import img3 from "../style/img3.jpg";
import img4 from "../style/img4.jpg";
import img5 from "../style/img5.jpg";
import img6 from "../style/img6.jpg";
import img7 from "../style/img7.jpg";
const Status = () => {
  return (
    <div className="flex">
      <div id="car" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex gap-3 justify-content-evenly my-3">
              <div className="canvas--">
                {" "}
                <img
                  src={img7}
                  className="rounded-circle bb w-100 h-100"
                  alt="..."
                />
              </div>
              <div className="canvas--">
                {" "}
                <img
                  src={img2}
                  className="rounded-circle bb w-100 h-100"
                  alt="..."
                />
              </div>
              <div className="canvas--">
                {" "}
                <img
                  src={img3}
                  className="rounded-circle bb w-100 h-100"
                  alt="..."
                />
              </div>
              <div className="canvas--">
                {" "}
                <img
                  src={img4}
                  className="rounded-circle bb w-100 h-100"
                  alt="..."
                />
              </div>
              <div className="canvas--">
                {" "}
                <img
                  src={img5}
                  className="rounded-circle bb w-100 h-100"
                  alt="..."
                />
              </div>
              <div className="canvas--">
                {" "}
                <img
                  src={img6}
                  className="rounded-circle bb w-100 h-100"
                  alt="..."
                />
              </div>
              <div className="canvas--">
                {" "}
                <img
                  src={img}
                  className="rounded-circle bb w-100 h-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex gap-3 justify-content-start my-3 ms-2">
              <div className="canvas--">
                {" "}
                <img
                  src={img2}
                  className="rounded-circle bb w-100 h-100"
                  alt="..."
                />
              </div>
              <div className="canvas--">
                {" "}
                <img
                  src={img4}
                  className="rounded-circle bb w-100 h-100"
                  alt="..."
                />
              </div>
              <div className="canvas--">
                {" "}
                <img
                  src={img5}
                  className="rounded-circle bb w-100 h-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex gap-3 justify-content-start my-3 ms-2">
              <div className="canvas--">
                {" "}
                <img
                  src={img6}
                  className="rounded-circle bb w-100 h-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#car"
          data-bs-slide="prev"
        >
          <span
            aria-hidden="true"
            style={{ backgroundColor: "unset", borderRadius: "10px" }}
          >
            {" "}
            <GrPrevious
              style={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "15px",
                fontSize: "25px",
                padding: "5px",
              }}
            />{" "}
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#car"
          data-bs-slide="next"
        >
          <span
            aria-hidden="true"
            style={{ backgroundColor: "unset", borderRadius: "10px" }}
          >
            {" "}
            <GrNext
              style={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "15px",
                fontSize: "25px",
                padding: "5px",
              }}
            />{" "}
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Status;
