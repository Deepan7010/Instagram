import React from "react";
import "../style/search.css";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
const Search = () => {
  return (
    <div className="position">
      <div className="search-container">
        <h4 className="heading">Search</h4>
        <div className="w-100 p">
          <input className="int" type="text" placeholder="Search" />
          <button className="btn m-0 p-0">
            <MdOutlineCancel className="fs-5 text-light" />
          </button>
        </div>
      </div>
      <div className="recent">
        <h6 className="recent-head">Recent</h6>
        <div className="recent-content">
          <p>No recent searches.</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
