import React from "react";

// import { Button } from "@material-ui/core";
import { MdFavorite } from "react-icons/md";
import { MdComment } from "react-icons/md";
import { BsFillShareFill } from "react-icons/bs";

import "./Footer.css";
import { Button } from "react-bootstrap";

export default function Footer({ channel, song, likes, comment, shares }) {
  return (
    <div className="video-footer">
      <div className="video-text">
        <h3>
          {"y"} . ({"jk"})
          <Button>
            <h4 style={{ color: "white" }}>Follow</h4>
          </Button>
        </h3>
      </div>
      {/*  */}
      <div className="footer-buttons">
        <div className="flex-box">
          <MdFavorite />
          {10}
        </div>
        {/*  */}
        <div className="flex-box">
          <MdComment />
          {comment}
        </div>
        {/*  */}
        <div className="flex-box">
          <BsFillShareFill />
          {shares}
        </div>
      </div>
    </div>
  );
}
