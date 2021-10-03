import React, { useEffect, useState } from "react";
import "./Learn.css";
const Learn = () => {
  const [ways, setWays] = useState([]);
  useEffect(() => {
    fetch("./new.json")
      .then((res) => res.json())
      .then((data) => setWays(data));
  }, []);
  return (
    <div className="row m-3">
      <h1 className="text-center py-3">Why learn with us</h1>
      {ways.map((way) => (
        <div key={way.id} className="col-md-4">
          <div
            className="cart shadow  border m-2 px-4 rounded text-center"
            style={{ height: "450px" }}
          >
            <div className="card-img-top mt-4">
              <img src={way.img} alt="logo" className="w-25" />
            </div>
            <div className="card-body">
              <h3 className="card-title py-3">{way.title}</h3>
              <p className="card-text fw-bold">{way.details}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Learn;
