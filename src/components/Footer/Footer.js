import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkedAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link as NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h3>French Language Club</h3>
                <div className="icons-container d-flex text-center align-items-center">
                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
                <p className="mt-2 ">
                  <small>
                    <q>
                      In accordance with the French Data Protection Act, you may
                      exercise your right of access to your personal data and
                      have them corrected by contacting
                    </q>
                  </small>
                </p>

                <p className="mt-2">
                  <small>Rasel © All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <NavLink to="/home" className="footer-menu">
                    HOME
                  </NavLink>
                  <NavLink to="/courses" className="footer-menu">
                    COURSES
                  </NavLink>
                  <NavLink to="/life" className="footer-menu">
                    LIFE AT SCHOOL
                  </NavLink>
                  <NavLink to="/Activities" className="footer-menu">
                    ACTIVITIES
                  </NavLink>
                  <NavLink to="/home" className="footer-menu">
                    About us
                  </NavLink>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign up for news</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center mt-4">
                  <div className="footer-phone-icon">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div>
                    <h5>33 (0) 1 48 78 73 00</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center ">
                  <div className="footer-phone-icon">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div>
                  <div>
                    <p>
                      Elfe – 15, rue Montmartre <br /> 75001 Paris – France
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
