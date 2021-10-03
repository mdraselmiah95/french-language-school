import React from "react";
import img from "../../image/img2.png";

const Guarantee = () => {
  return (
    <div>
      <div className="row mx-3 mt-5 d-flex  align-items-center">
        <div className="col-md-6 text-center">
          <h1 className="text-dark mb-3">
            30-day Money Back <br /> Guarantee
          </h1>
          <p>
            Our #1 is your success. We stand by our French courses 100% which
            means if you aren’t completely satisfied within the first 30 days of
            your course, simply ask us for a refund and you’ll get 100% of your
            money back.
          </p>
        </div>
        <div className="col-md-6">
          <img src={img} alt="man" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Guarantee;
