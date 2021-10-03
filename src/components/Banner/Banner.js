import React from "react";
import img from "../../image/teaching.png";
import MenuBar from "../MenuBar/MenuBar";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center m-3">
          <MenuBar></MenuBar>
          <div className="col-md-6">
            <h2 className="title text-dark fw-bold fs-1">
              Tired of speaking to an app?
            </h2>
            <p className="text-dark mt-3 text-secondary">
              Learn French online from anywhere, connect with our native French
              professional teachers and speak French from day 1!
            </p>
            <button className="mt-3 btn btn-lg btn-outline-success rounded">
              About Us
            </button>
          </div>
          <div className="col-md-6">
            <img src={img} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
