import React from "react";
import "../style/home.css";
import { HiMiniHome } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import { FaThreads } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import create from "../style/icons/more.png";
import { Image } from "react-bootstrap";
import "../style/appbar.css";
import profile from "../style/icons/insta.png";
import { FaInstagram } from "react-icons/fa6";
import creates from "../style/create.png";

import { IoSettingsOutline } from "react-icons/io5";
import { LuActivitySquare } from "react-icons/lu";
import { CiDark } from "react-icons/ci";
import { GoReport } from "react-icons/go";
import save from "../style/icons/save1.png";

const Appbars = () => {
  const handle = () => {
    let hide = document.querySelectorAll(".hide");
    let navs = document.querySelector(".navs");
    const na = document.querySelector(".na");
    const logo = document.querySelector(".logo");
    const create = document.querySelector(".create");
    // const color=document.querySelector(".contain")
    create.style.display = "none";
    if (hide) {
      hide.forEach((x) => (x.style.display = "none"));
      navs.style.transition = ".2s";
      logo.style.display = "block";
      navs.style.width = "70px";
      navs.style.padding = "0 10px";

      na.style.width = "70px";
      na.style.padding = "0 10px";
    }
  };
  const handleHome = (e) => {
    let hide = document.querySelectorAll(".hide");
    let navs = document.querySelector(".navs");
    const na = document.querySelector(".na");
    const logo = document.querySelector(".logo");
    const create = document.querySelector(".create");
    create.style.display = "none";
    if (hide) {
      navs.style.transition = ".1s";
      navs.style.width = "250px";
      navs.style.padding = "0 calc(2rem - 9px)";
      logo.style.display = "none";
      hide.forEach((x) => (x.style.display = "inline"));

      na.style.width = "250px";
      na.style.padding = "0 calc(2rem - 9px)";
    }
  };

  const handleBtn = () => {
    const inputFile = document.getElementById("file");
    inputFile.click();
  };

  const handleCreate = () => {
    let hide = document.querySelectorAll(".hide");
    let navs = document.querySelector(".navs");
    const na = document.querySelector(".na");
    const logo = document.querySelector(".logo");
    const create = document.querySelector(".create");
    create.style.display = "flex";

    if (hide) {
      hide.forEach((x) => (x.style.display = "none"));
      navs.style.transition = ".2s";
      logo.style.display = "block";
      navs.style.width = "70px";
      navs.style.padding = "0 10px";

      na.style.width = "70px";
      na.style.padding = "0 10px";
    }
  };
  const handleMore = () => {
    const more = document.querySelector(".more");
    switch (more.style.display) {
      case "":
        more.style.display = "block";
        break;
      case "block":
        more.style.display = "none";
        break;
      default:
        more.style.display = "block";
        break;
    }
  };

  return (
    <div className="contain">
      <nav>
        <ul className="navs border-end border-dark mb-0">
          <div>
            <FaInstagram className="me-3 fs-3 text-light logo ms-2" />
            <span className="hide">
              <Image
                className="mt-4 w-50 ms-1"
                src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png"
                alt="instagram"
                fluid
              ></Image>
            </span>
          </div>
          <Link to="/appbars/home" onClick={handleHome} className="px-2 py-2">
            <HiMiniHome className="me-3 mb-2 fs-3" />
            <span className="hide">Home</span>
          </Link>
          <Link
            to="/appbars/search"
            onClick={handle}
            className="px-2 py-2 search"
          >
            <FiSearch className="me-3 mb-1 fs-3" />
            <span className="hide">Search</span>
          </Link>
          <Link
            to="/appbars/explore"
            onClick={handleHome}
            className="px-2 py-2"
          >
            <MdOutlineExplore className="me-3 mb-1 fs-3" />
            <span className="hide"> Explore</span>
          </Link>
          <Link to="/appbars/reels" onClick={handleHome} className="px-2 py-2">
            <BiMoviePlay className="me-3 mb-1 fs-3" />{" "}
            <span className="hide"> Reels</span>
          </Link>
          <Link
            to="/appbars/messages/primary"
            onClick={handle}
            className="px-2 py-2"
          >
            <FaFacebookMessenger className="me-3 mb-1 fs-3" />
            <span className="hide"> Messages</span>
          </Link>
          <Link
            to="/appbars/notification"
            onClick={handle}
            className="px-2 py-2"
          >
            <FaHeart className="me-3 mb-1 fs-3" />
            <span className="hide">Notification</span>
          </Link>
          <Link to="" onClick={handleCreate} className="px-2 py-2">
            <Image
              src={create}
              style={{ backgroundColor: "white", borderRadius: "10px" }}
              width={"30px"}
              height={"30px"}
              className="me-3"
            />
            <span className="hide">Create</span>
          </Link>
          <Link to="/login" className="px-2 py-2">
            <Image
              src={profile}
              style={{ borderRadius: "10px" }}
              width={"30px"}
              height={"30px"}
              className="me-3"
            />
            <span className="hide">Profile</span>
          </Link>
        </ul>
        <ul className="border-end border-dark na mb-0">
          <a href="https://www.threads.net/login" className="px-2 py-2">
            <FaThreads className="me-3 mb-1 fs-3" />{" "}
            <span className="hide"> Thread</span>
          </a>
          <Link to="" onClick={handleMore} className="px-2 py-2">
            <IoReorderThree className="me-3 mb-1 fs-2" />{" "}
            <span className="hide">More</span>
          </Link>
        </ul>
      </nav>
      <div className="create">
        <div className="create-content">
          <div className="create-header">Create new post </div>
          <div className="create-body">
            <img className="img-center" src={creates} alt="" />
            <h5>Drag photos and videos here</h5>
            <input type="file" id="file" hidden />
            <button className="btn btn-primary bd" onClick={handleBtn}>
              Select from computer
            </button>
          </div>
        </div>
      </div>
      <div className="more">
        <div className="more-top">
          <div className="more-icon">
            <IoSettingsOutline className="me-2 fs-3 mb-1" />
            Settings
          </div>
          <div className="more-icon">
            <LuActivitySquare className="me-2 fs-3 mb-1" /> Your activity
          </div>
          <div className="more-icon">
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/free-save-3251597-2724646.png?f=webp&w=256"
              className="save"
              alt=""
            />{" "}
            Saved
          </div>
          <div className="more-icon">
            <CiDark className="me-2 fs-3" /> Switch appearance
          </div>
          <div className="more-icon">
            <GoReport className="me-2 fs-3 mb-1" /> Report a problem
          </div>
        </div>
        <div className="more-icons">
          <div className="more-icon">Switch accounts</div>
        </div>
        <div className="log">Logout</div>
      </div>
      <Outlet />
    </div>
  );
};

export default Appbars;
