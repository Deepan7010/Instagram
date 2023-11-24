import React from "react";

import { FaChevronLeft } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";

import "./Header.css";

export default function Header() {
  return (
    <div className="video-header">
      <div>
        {" "}
        <FaChevronLeft className="fs-4" />
      </div>
      <div>
        <FaCamera className="fs-4" />
      </div>
    </div>
  );
}
