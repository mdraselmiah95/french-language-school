import React from "react";

const Activity = (props) => {
  const { title, para, img } = props.activity;
  return (
    <div className="d-md-flex">
      <div className="col-md-5 mt-5">
        <img src={img} alt="photos" className="img-fluid rounded" />
      </div>
      <div className="col-md-7 mt-5 ms-4">
        <hr />
        <h2 className="fw-bolder fs-1 text-primary"> {title}</h2>
        <p className="fs-5">{para}</p>
      </div>
    </div>
  );
};

export default Activity;
