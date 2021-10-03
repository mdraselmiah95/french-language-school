import React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo.png";
import "./MenuBar.css";
const MenuBar = () => {
  return (
    <div className="MenuBar-container">
      <div className="container">
        <div className="row py-3 align-items-center">
          <div className="col-md-2">
            <div className="logo-img">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="col-md-10">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                <Link to="/home" className="items">
                  <li>HOME</li>
                </Link>
                <Link to="/courses" className="items">
                  <li>COURSES</li>
                </Link>
                <Link to="/life" className="items">
                  <li>LIFE AT SCHOOL</li>
                </Link>
                <Link to="/Activities" className="items">
                  <li>ACTIVITIES </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
