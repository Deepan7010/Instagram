import React from "react";
import "../style/message.css";
import { FaEdit } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Message = () => {
  const handleGeneral = (e) => {
    let gd = document.querySelector(".gd");
    let pd = document.querySelector(".pd");
    let rd = document.querySelector(".rd");
    if (pd.classList.value == "pd primary") {
      pd.classList.remove("primary");
    }
    if(rd.classList.value == "rd request"){
      rd.classList.remove("request")
    }
    gd.classList.add("general");
  };
  const handlePrimary = () => {
    const gd = document.querySelector(".gd");
    const pd = document.querySelector(".pd");
    const rd=document.querySelector(".rd");
    if(gd.classList.value == "gd general"){
      gd.classList.remove("general");
    }
    if(rd.classList.value == "rd request"){
      rd.classList.remove("request")
    }
    pd.classList.add("primary");
  };
  const handleRequest = () => {
    const gd = document.querySelector(".gd");
    const pd = document.querySelector(".pd");
    const rd=document.querySelector(".rd");
    if(gd.classList.value == "gd general"){
      gd.classList.remove("general");
    }
    if(pd.classList.value == "pd primary"){
      pd.classList.remove("primary")
    }
    rd.classList.add("request");
  };
  return (
    <div className="message">
      <div className="msg-content">
        <div className="msg-header">
          <div>Shadow_Videos12</div>

          <div>
            <FaEdit className="icon" />
          </div>
        </div>
        <div className="msg-subHeader">
          <Link to="primary" onClick={handlePrimary}>
            Primary
          </Link>
          <Link to="general" onClick={handleGeneral}>
            General
          </Link>
          <Link to="request" onClick={handleRequest}>Request</Link>
        </div>
        <div className="bor">
          <p className="pd"></p>
          <p className="gd"></p>
          <p className="rd"></p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Message;
