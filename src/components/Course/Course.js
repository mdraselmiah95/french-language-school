import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Course = (props) => {
  const { title, time, f1, f2, f3, f4, f5 } = props.course;
  const icon = <FontAwesomeIcon icon={faCheck} />;
  return (
    <div className="col-lg-4 col-md-6">
      <div className="col">
        <div className="card p-2 shadow">
          <div className="card-body text-center">
            <h3 className="">{title}</h3>
            <p className="card-title fs-4  py-3">{time}</p>
            <hr />
            <p className="text-start">
              <span className="text-success me-2">{icon}</span>
              {f1}
            </p>
            <p className="text-start">
              <span className="text-success me-2">{icon}</span>
              {f2}
            </p>
            <p className="text-start">
              <span className="text-success me-2">{icon}</span>
              {f3}
            </p>
            <p className="text-start">
              <span className="text-success me-2">{icon}</span>
              {f4}
            </p>
            <p className="text-start">
              <span className="text-success me-2">{icon}</span>
              {f5}
            </p>
            <button className="btn btn-outline-success px-5 my-4">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
