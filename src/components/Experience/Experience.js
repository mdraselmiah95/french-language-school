import React from "react";

const Experience = (props) => {
  const { date, title, img, para } = props.experience;
  return (
    <div className="col-lg-4 col-md-6">
      <div className="col">
        <div
          className="card p-2 text-center shadow"
          style={{ height: "650px" }}
        >
          <img src={img} className="rounded img-fluid" alt="photos" />
          <div className="card-body">
            <p>
              <small>{date}</small>
            </p>
            <h5 className="card-title fs-4 bold py-3">{title}</h5>
            <p className="">{para}</p>
            <button className="btn btn-outline-warning">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
