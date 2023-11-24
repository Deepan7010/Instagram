import React from "react";
import "../style/notification.css";
import img from "../style/img.jpg";
import img2 from "../style/img2.jpg";
import img3 from "../style/img3.jpg";
import img4 from "../style/img4.jpg";
import img5 from "../style/img5.jpg";
import img6 from "../style/img6.jpg";
// import img7 from "../style/img7.jpg";

const Notification = () => {
  const user = [
    {
      id: 1,
      pic: img,
      name: "John Doe",
      images: img6,
    },
    {
      id: 2,
      pic: img2,
      name: "John Doe",
      images: img5,
    },
    {
      id: 3,
      pic: img3,
      name: "John Doe",
      images: img4,
    },
    {
      id: 4,
      pic: img4,
      name: "John Doe",
      images: img3,
    },
    {
      id: 5,
      pic: img5,
      name: "John Doe",
      images: img2,
    },
    {
      id: 6,
      pic: img6,
      name: "John Doe",
      images: img,
    },
  ];
  return (
    <div className="notification">
      <h4 className="sub"> Notifications</h4>
      <div className="notification-header">
        <h6 className="sub">Today</h6>
        <div className="notification-body">
          <img src={img3} alt="" className="img-1" />
          <p className="notification-title">
            Santhosh,Rajesh and others liked your reel.
            <span className="grey"> 23h</span>
          </p>
          <img src={img2} alt="" className="img-2" />
        </div>
      </div>
      <div className="notification-header">
        <h6 className="sub">Yesterday</h6>
        <div className="notification-body">
          <img src={img} alt="" className="img-1" />
          <p className="notification-title">
            Santhosh,Rajesh and others liked your reel.
            <span className="grey"> 1d</span>
          </p>
          <img src={img4} alt="" className="img-2" />
        </div>
      </div>
      <div className="notification-header">
        <h6 className="sub">This week</h6>
        {user.map((item) => (
          <div className="notification-body" key={item.id}>
            <img src={item.pic} alt="" className="img-1" />
            <p className="notification-title">
              Santhosh,Rajesh and others liked your reel.
              <span className="grey"> 1week</span>
            </p>
            <img src={item.images} alt="" className="img-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
